import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import zlib from 'node:zlib'
import { fileURLToPath } from 'node:url'

const PACKAGE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DSH_HOME = process.env.DSH_HOME || path.join(os.homedir(), '.dsh')
const ROOT_DIR = path.join(DSH_HOME, 'deepseek-chatframe')
const DEFAULT_SOURCES_DIR = path.join(ROOT_DIR, 'bubbles')
const STATE_FILE = path.join(ROOT_DIR, 'state.json')

const NS = 'dsh-deepseek-chatframe'
const ROUTE_BASE = '/dsh-deepseek-chatframe'

function findLegacyRoot() {
  try {
    const names = fs.readdirSync(DSH_HOME)
    for (const n of names) {
      if (n !== 'deepseek-chatframe' && n.charAt(0) === 'q' && n.charAt(1) === 'q' && /-chatframe$/.test(n)) {
        return path.join(DSH_HOME, n)
      }
    }
  } catch (err) {}
  return ''
}

function migrateLegacyRoot() {
  try {
    if (fs.existsSync(ROOT_DIR)) return
    const legacy = findLegacyRoot()
    if (!legacy) return
    try { fs.renameSync(legacy, ROOT_DIR) } catch (err) {
      fs.cpSync(legacy, ROOT_DIR, { recursive: true })
    }
  } catch (err) {}
}

function setConfigZoomPoint(cfg, zoom) {
  const zs = [String(Math.max(0, Math.round(Number(zoom[0]) || 0))), String(Math.max(0, Math.round(Number(zoom[1]) || 0)))]
  cfg.zoom_point = zs
  try {
    const sets = cfg && cfg.animation_sets
    if (sets && typeof sets === 'object') {
      const want = (cfg.bubbleframe_animation && cfg.bubbleframe_animation.animation_set) ||
        Object.keys(sets).find((k) => sets[k] && typeof sets[k] === 'object' &&
          sets[k].zip_name && typeof sets[k].count !== 'undefined')
      if (want && sets[want] && typeof sets[want] === 'object') sets[want].zoom_point = zs
    }
  } catch (err) {}
}

function migrateCropToConfig() {
  let raw = null
  try { raw = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')) } catch (err) { return }
  const ovs = raw && raw.bubbleOverrides
  if (!ovs || typeof ovs !== 'object') return
  let changed = false
  let list = []
  try { list = scanBubblesCached(raw.sourcesDir || DEFAULT_SOURCES_DIR) } catch (err) { list = [] }
  for (const id of Object.keys(ovs)) {
    const ov = ovs[id]
    if (!ov || typeof ov !== 'object') continue
    const hasCrop = ov.frameInsets && typeof ov.frameInsets === 'object'
    const hasZoom = Array.isArray(ov.zoomPoint) && ov.zoomPoint.length === 2
    if (!hasCrop && !hasZoom) continue
    const target = list.find((b) => b.id === id)
    let wrote = false
    if (target) {
      const cfgPath = findConfigFile(target.rootDir)
      if (cfgPath) {
        try {
          const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'))
          if (hasCrop) {
            const fi = ov.frameInsets
            cfg.frameInsets = [fi.top, fi.right, fi.bottom, fi.left].map((n) => Math.max(0, Math.round(Number(n) || 0)))
          }
          if (hasZoom) {
            setConfigZoomPoint(cfg, ov.zoomPoint)
          }
          fs.writeFileSync(cfgPath, JSON.stringify(cfg, null, 2), 'utf8')
          wrote = true
        } catch (err) {}
      }
    }
    if (wrote) {
      delete ov.frameInsets
      delete ov.zoomPoint
      if (!Object.keys(ov).length) delete ovs[id]
      changed = true
    }
  }
  if (!changed) return
  try { writeState(Object.assign({}, raw, { bubbleOverrides: ovs })) } catch (err) {}
  try { invalidateScanCache() } catch (err) {}
}

const PLUGIN_VERSION = (() => {
  try {
    const v = String(JSON.parse(fs.readFileSync(path.join(PACKAGE_ROOT, 'package.json'), 'utf8')).version || '').trim()
    return v || '0.0.0'
  } catch (err) {
    return '0.0.0'
  }
})()



const DEFAULTS = {
  enabled: false,
  userBubble: '',
  assistantBubble: '',
  speed: 1,
  scale: 1,
  sourcesDir: DEFAULT_SOURCES_DIR,

  renderMode: 'auto',

  userMinPad: 0,
  assistantMinPad: 0,

  fillInset: 0,
  schemaVersion: 23,

  fillColor: '#FFF5F8',

  animPreset: 'none',

  animOnEnter: false,

  padFactor: 4,
  widthFactor: 1.05,
  extraHeight: 0,
  heightFactor: 1.0,
  customCss: '',
  animSpeed: 1,

  perfMode: 'medium',
  preloadContext: true,
  ultraMinimal: false,

  assistantAlwaysApply: true,
  assistKeep: 7,

  replaceComposer: false,
  composerBubble: '',

  disableAllAnim: false,

  chatStyleStatus: false,
  statusReadText: '已读',
  statusUnreadText: '未读',
  statusPendingText: '未读',

  bubbleOverrides: {}
}

const STRING_KEYS = ['userBubble', 'assistantBubble', 'sourcesDir', 'fillColor', 'composerBubble',
  'statusReadText', 'statusUnreadText', 'statusPendingText']
const BOOL_KEYS = ['enabled', 'preloadContext', 'ultraMinimal', 'assistantAlwaysApply', 'replaceComposer', 'disableAllAnim', 'chatStyleStatus', 'animOnEnter']
const NUM_RANGE = {
  userMinPad: [-50, 50],
  assistantMinPad: [-50, 50],
  assistKeep: [1, 50]
}
const ENUMS = {
  renderMode: ['auto'],
  perfMode: ['normal', 'medium', 'ultra'],
  animPreset: ['none', 'sendClassic', 'sendIos26', 'breathe', 'float', 'pulse', 'glow', 'shake', 'custom']
}

function normalize(input) {
  const out = { ...DEFAULTS }
  out.schemaVersion = DEFAULTS.schemaVersion
  const storeVer = input && Number(input.schemaVersion)
  const src = input && typeof input === 'object' ? input : {}
  for (const key of Object.keys(DEFAULTS)) {
    if (!(key in src) || src[key] === undefined || src[key] === null) continue
    const value = src[key]
    if (BOOL_KEYS.includes(key)) out[key] = value === true || value === 'true' || value === 1 || value === '1'
    else if (key === 'speed') { const n = Number(value); out[key] = Number.isFinite(n) ? Math.min(3, Math.max(0.1, n)) : 1 }
    else if (key === 'scale') { const n = Number(value); out[key] = Number.isFinite(n) ? Math.min(3, Math.max(0.2, n)) : 1 }
    else if (key === 'padFactor') { const n = Number(value); out[key] = Number.isFinite(n) ? Math.min(4, Math.max(0.2, n)) : DEFAULTS.padFactor }
    else if (key === 'widthFactor') { const n = Number(value); out[key] = Number.isFinite(n) ? Math.min(3, Math.max(0.4, n)) : DEFAULTS.widthFactor }
    else if (key === 'extraHeight') { const n = Number(value); out[key] = Number.isFinite(n) ? Math.min(80, Math.max(0, n)) : DEFAULTS.extraHeight }
    else if (key === 'heightFactor') { const n = Number(value); out[key] = Number.isFinite(n) ? Math.min(3, Math.max(0.3, n)) : DEFAULTS.heightFactor }
    else if (key === 'fillInset') { const n = Number(value); out[key] = Number.isFinite(n) ? Math.min(60, Math.max(0, n)) : DEFAULTS.fillInset }
    else if (NUM_RANGE[key]) {
      const [lo, hi] = NUM_RANGE[key]
      const n = Number(value)
      out[key] = Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : DEFAULTS[key]
    }
    else if (key === 'fillColor') out[key] = (String(value).trim() || DEFAULTS.fillColor)
    else if (key === 'customCss') out[key] = String(value).slice(0, 20000)
    else if (ENUMS[key]) out[key] = ENUMS[key].includes(value) ? value : DEFAULTS[key]
    else if (key === 'bubbleOverrides') out[key] = sanitizeBubbleOverrides(value)
    else if (STRING_KEYS.includes(key)) out[key] = String(value).slice(0, 400)
  }
  if (!Number.isFinite(storeVer) || storeVer < 9) { out.fillInset = DEFAULTS.fillInset }
  if ((!Number.isFinite(storeVer) || storeVer < 10) && !src.assistantBubble) { out.assistantBubble = DEFAULTS.assistantBubble }
  if (out.fillShrink !== undefined) delete out.fillShrink
  if (out.insetHug !== undefined) delete out.insetHug
  if (!Number.isFinite(storeVer) || storeVer < 14 || out.renderMode !== 'auto') {
    out.renderMode = DEFAULTS.renderMode
  }
  if (!Number.isFinite(storeVer) || storeVer < 8) { out.padFactor = DEFAULTS.padFactor; out.widthFactor = DEFAULTS.widthFactor; out.extraHeight = DEFAULTS.extraHeight }
  return out
}

let stateCache = { key: '', value: null }
// 状态读写
function readState() {
  try {
    const st = fs.statSync(STATE_FILE)
    const key = st.mtimeMs + '|' + st.size
    if (stateCache.key === key && stateCache.value) return Object.assign({}, stateCache.value)
    const value = normalize(JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')))
    stateCache = { key: key, value: value }
    return Object.assign({}, value)
  } catch (err) {
    return { ...DEFAULTS }
  }
}

function writeState(next) {
  const cfg = normalize(next)
  fs.mkdirSync(ROOT_DIR, { recursive: true })
  const tmp = STATE_FILE + '.tmp'
  fs.writeFileSync(tmp, JSON.stringify(cfg, null, 2), 'utf8')
  fs.renameSync(tmp, STATE_FILE)

  try {
    const st = fs.statSync(STATE_FILE)
    stateCache = { key: st.mtimeMs + '|' + st.size, value: cfg }
  } catch (err) {}
  return cfg
}


function frameScaleOf(name) {
  const m = /@(\d)x\.png$/i.exec(name)
  if (m) return parseInt(m[1], 10) || 2
  return 2
}

function looksLikeBubble(cfg) {
  if (!cfg || typeof cfg !== 'object') return false
  const animSet = cfg.bubbleframe_animation && cfg.bubbleframe_animation.animation_set
  if (cfg.animation_sets && typeof cfg.animation_sets === 'object') {
    if (animSet && cfg.animation_sets[animSet]) return true
    for (const key of Object.keys(cfg.animation_sets)) {
      const s = cfg.animation_sets[key]
      if (s && typeof s === 'object' && s.zip_name && typeof s.count !== 'undefined') return true
    }
  }

  return cfg.animations && typeof cfg.animations === 'object' && Object.keys(cfg.animations).length > 0
}

function pickFrameAnim(cfg) {
  const animSetName = (cfg.bubbleframe_animation && cfg.bubbleframe_animation.animation_set) || 'bubbleframe_anim'
  let anim = null
  if (cfg.animation_sets && typeof cfg.animation_sets === 'object') {
    anim = cfg.animation_sets[animSetName] || null
    if (!anim) {
      for (const key of Object.keys(cfg.animation_sets)) {
        const s = cfg.animation_sets[key]
        if (s && typeof s === 'object' && s.zip_name && typeof s.count !== 'undefined') { anim = s; break }
      }
    }
  }
  if (!anim) return null
  const zip = String(anim.zip_name || 'bubbleframe')
  return {
    zipName: zip,
    count: parseInt(anim.count, 10) || 0,
    timeMs: parseInt(anim.time, 10) || 100,
    repeat: parseInt(anim.repeat, 10) || 100,
    zoomPoint: Array.isArray(anim.zoom_point)
      ? [Number(anim.zoom_point[0]) || 0, Number(anim.zoom_point[1]) || 0]
      : (Array.isArray(cfg.zoom_point) ? [Number(cfg.zoom_point[0]) || 0, Number(cfg.zoom_point[1]) || 0] : [0, 0])
  }
}


function readPngSize(filePath) {
  try {
    const fd = fs.openSync(filePath, 'r')
    const buf = Buffer.alloc(24)
    fs.readSync(fd, buf, 0, 24, 0)
    fs.closeSync(fd)
    if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47) return null
    const w = buf.readUInt32BE(16)
    const h = buf.readUInt32BE(20)
    if (!(w > 0 && h > 0) || w > 20000 || h > 20000) return null
    return { w, h }
  } catch (err) { return null }
}

function parseBubbleAt(rootDir, sourceLabel, sourcesSeen) {
  try {
    const cfgFile = findConfigFile(rootDir)
    if (!cfgFile) return null
    const cfg = JSON.parse(fs.readFileSync(cfgFile, 'utf8'))
    if (!looksLikeBubble(cfg)) return null
    const anim = pickFrameAnim(cfg)
    const zipName = anim ? anim.zipName : 'bubbleframe'
    const frameDir = path.join(rootDir, zipName)
    const frames = readFrames(frameDir)
    const anims = {}
    for (const sub of listAnimDirs(rootDir)) {
      const dir = path.join(rootDir, sub)
      if (!fs.existsSync(dir)) continue
      const fs2 = readFrames(dir)
      if (!fs2.length) continue
      const key = sub === 'shootanim' ? 'shootAnim' : sub
      if (anims[key]) continue
      anims[key] = {
        zipName: key,
        count: fs2.length,
        frames: fs2,
        timeMs: (anim && key === zipName) ? anim.timeMs : 100,
        repeat: (anim && key === zipName) ? anim.repeat : 100
      }
    }

    const name = String(cfg.name || path.basename(rootDir) || '未命名气泡')
    const firstFrame = frames[0]
    const firstFrameFile = firstFrame ? firstFrame.file : ''
    const pngSize = firstFrameFile ? readPngSize(path.join(frameDir, firstFrameFile)) : null
    const frameW = pngSize ? pngSize.w : 128
    const frameH = pngSize ? pngSize.h : 112
    const id = 'b-' + hashId(path.resolve(rootDir))
    if (sourcesSeen.has(id)) return null
    sourcesSeen.add(id)

    const defaultSlice = {
      top: Math.max(10, Math.round(frameH * 0.16)),
      right: Math.max(10, Math.round(frameW * 0.16)),
      bottom: Math.max(10, Math.round(frameH * 0.16)),
      left: Math.max(10, Math.round(frameW * 0.16))
    }
    let sliceSource = 'default'
    if (Array.isArray(cfg.frameInsets) && cfg.frameInsets.length === 4) {
      const cs = cfg.frameInsets.map((n) => Number(n))
      // 全 0 = 没有有效裁切 不标 config 保持自动选缝
      if (cs.every((n) => Number.isFinite(n) && n >= 0) && cs.some((n) => n > 0)) {
        defaultSlice.top = Math.round(cs[0])
        defaultSlice.right = Math.round(cs[1])
        defaultSlice.bottom = Math.round(cs[2])
        defaultSlice.left = Math.round(cs[3])
        sliceSource = 'config'
      }
    }

    return {
      id,
      name,
      color: String(cfg.color || ''),
      linkColor: String(cfg.link_color || ''),
      zoomPoint: anim ? anim.zoomPoint : (Array.isArray(cfg.zoom_point) ? [Number(cfg.zoom_point[0]), Number(cfg.zoom_point[1])] : [0, 0]),
      rootDir,
      frameDir,
      frameScale: 2,
      frameW,
      frameH,
      count: anim ? anim.count : frames.length,
      frames: frames.slice(0, anim ? anim.count : frames.length || frames.length),
      timeMs: anim ? anim.timeMs : 100,
      repeat: anim ? anim.repeat : 100,
      slice: defaultSlice,
      sliceSource,
      fillInset: (Number.isFinite(Number(cfg.bubbleFillInset)) ? Number(cfg.bubbleFillInset)
        : (Number.isFinite(Number(cfg.fillInset)) ? Number(cfg.fillInset) : null)),
      anims,
      transparentStyle: (cfg.transparentStyle && typeof cfg.transparentStyle === 'object')
        ? {
            color: String(cfg.transparentStyle.color || ''),
            alpha: Number.isFinite(Number(cfg.transparentStyle.alpha)) ? Number(cfg.transparentStyle.alpha) : 1
          }
        : null,
      source: sourceLabel
    }
  } catch (err) {
    return null
  }
}

function findConfigFile(rootDir) {
  const direct = path.join(rootDir, 'config.json')
  return fs.existsSync(direct) ? direct : null
}

function readFrames(dir) {
  let names = []
  try { names = fs.readdirSync(dir) } catch (err) { return [] }
  return names
    .map((name) => {
      const m = /^(\d+)(?:@(\d)x)?\.png$/i.exec(name)
      if (!m) return null
      return { idx: parseInt(m[1], 10), file: name }
    })
    .filter(Boolean)
    .sort((a, b) => a.idx - b.idx)
}


function listAnimDirs(rootDir) {
  const out = ['bubbleframe', 'shootAnim', 'shootanim', 'voice']
  let names = []
  try { names = fs.readdirSync(rootDir, { withFileTypes: true }) } catch (err) { names = [] }
  for (const e of names) {
    if (!e.isDirectory()) continue
    if (/\.static\.zip$/i.test(e.name)) out.push(e.name)
  }
  if (names.some((e) => e.isDirectory() && e.name === 'static')) out.push('static')
  return out
}

function hashId(str) {
  let h = 0x811c9dc5
  const s = String(str)
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h.toString(16).padStart(8, '0')
}



// 气泡包扫描
function scanBubbles(sourcesDir) {
  const sourcesSeen = new Set()
  const found = []
  if (!sourcesDir || typeof sourcesDir !== 'string' || sourcesDir.trim() === '') {
    sourcesDir = DEFAULT_SOURCES_DIR
  }

  if (findConfigFile(sourcesDir)) {
    const b = parseBubbleAt(sourcesDir, 'copied-root', sourcesSeen)
    if (b) found.push(b)
  }
  let entries = []
  try { entries = fs.readdirSync(sourcesDir, { withFileTypes: true }) } catch (err) { entries = [] }
  for (const ent of entries) {
    const full = path.join(sourcesDir, ent.name)
    if (ent.isDirectory()) {

      if (findConfigFile(full)) {
        const b = parseBubbleAt(full, 'folder', sourcesSeen)
        if (b) found.push(b)
        continue
      }

      let childEntries = []
      try { childEntries = fs.readdirSync(full, { withFileTypes: true }) } catch (err) { childEntries = [] }
      for (const child of childEntries) {
        if (child.isDirectory() && findConfigFile(path.join(full, child.name))) {
          const b = parseBubbleAt(path.join(full, child.name), 'folder', sourcesSeen)
          if (b) found.push(b)
        }
      }
    } else if (ent.isFile() && /\.zip$/i.test(ent.name)) {

      const b = parseZip(full, sourcesSeen)
      if (b) found.push(b)
    }
  }
  found.sort((a, b) => a.name.localeCompare(b.name, 'zh'))
  return found
}



let scanCache = { key: '', at: 0, list: [] }
// 气泡清单缓存
function scanBubblesCached(sourcesDir) {
  const dir = (sourcesDir && typeof sourcesDir === 'string' && sourcesDir.trim())
    ? sourcesDir : DEFAULT_SOURCES_DIR
  let st = null
  try { st = fs.statSync(dir) } catch (err) { return scanBubbles(dir) }
  const key = dir + '|' + st.mtimeMs + '|' + st.size
  const now = Date.now()
  if (scanCache.key === key && now - scanCache.at < 3000) return scanCache.list
  const list = scanBubbles(dir)
  scanCache = { key: key, at: now, list: list }
  return list
}
function invalidateScanCache() { scanCache = { key: '', at: 0, list: [] } }


const frameBytesCache = new Map()
const thumbDataCache = new Map()
function readFrameBytesCached(fp) {
  try {
    const st = fs.statSync(fp)
    const key = fp + '|' + st.mtimeMs + '|' + st.size
    const hit = frameBytesCache.get(key)
    if (hit) return hit
    const bytes = fs.readFileSync(fp)
    if (frameBytesCache.size > 400) frameBytesCache.clear()
    frameBytesCache.set(key, bytes)
    return bytes
  } catch (err) { return null }
}
function thumbDataUrlCached(fp) {
  try {
    const st = fs.statSync(fp)
    if (st.size > 4194304) return ''
    const key = fp + '|' + st.mtimeMs + '|' + st.size
    const hit = thumbDataCache.get(key)
    if (hit) return hit
    const bytes = readFrameBytesCached(fp)
    if (!bytes) return ''
    const url = 'data:image/png;base64,' + bytes.toString('base64')
    if (thumbDataCache.size > 200) thumbDataCache.clear()
    thumbDataCache.set(key, url)
    return url
  } catch (err) { return '' }
}



function unzipSync(buf, outRoot) {
  const base = path.resolve(outRoot)
  let count = 0

  function safeTarget(name) {
    if (!name || /\/$/.test(name)) return null
    const rel = name.replace(/\\/g, '/').replace(/^\/+/, '')
    if (!rel) return null
    const target = path.join(outRoot, rel)
    const resolved = path.resolve(target)
    if (resolved.indexOf(base + path.sep) === 0 || resolved === base) return target
    return null
  }

  function writeEntry(name, method, compSize, dataStart) {
    const target = safeTarget(name)
    if (!target) return
    let sliceEnd = dataStart + Math.max(0, compSize)
    if (sliceEnd > buf.length) sliceEnd = buf.length
    let out = null
    if (method === 0) out = buf.slice(dataStart, sliceEnd)
    else if (method === 8) {
      try { out = zlib.inflateRawSync(buf.slice(dataStart, sliceEnd)) } catch (err) { out = null }
    }
    if (!out) return
    fs.mkdirSync(path.dirname(target), { recursive: true })
    fs.writeFileSync(target, out)
    count += 1
  }

  // 1) 优先中央目录（EOCD + central header） 兼容 data descriptor / 前置数据
  let eocd = -1
  const scanFrom = Math.max(0, buf.length - 65557)
  for (let p = buf.length - 22; p >= scanFrom; p -= 1) {
    if (buf.readUInt32LE(p) === 0x06054b50) { eocd = p; break }
  }
  if (eocd >= 0) {
    const total = buf.readUInt16LE(eocd + 10)
    const cdSize = buf.readUInt32LE(eocd + 12)
    const cdOffset = buf.readUInt32LE(eocd + 16)
    const cdStart = eocd - cdSize
    const shift = cdStart - cdOffset
    let p = cdStart
    let ok = true
    for (let n = 0; n < total; n += 1) {
      if (p + 46 > buf.length || buf.readUInt32LE(p) !== 0x02014b50) { ok = false; break }
      const flag = buf.readUInt16LE(p + 8)
      const method = buf.readUInt16LE(p + 10)
      const compSize = buf.readUInt32LE(p + 20)
      const nameLen = buf.readUInt16LE(p + 28)
      const extraLen = buf.readUInt16LE(p + 30)
      const commentLen = buf.readUInt16LE(p + 32)
      const localOff = buf.readUInt32LE(p + 42) + shift
      const name = buf.slice(p + 46, p + 46 + nameLen).toString('utf8')
      if (localOff >= 0 && localOff + 30 <= buf.length && buf.readUInt32LE(localOff) === 0x04034b50) {
        const ln = buf.readUInt16LE(localOff + 26)
        const le = buf.readUInt16LE(localOff + 28)
        let cs = compSize
        const dataStart = localOff + 30 + ln + le
        if (!cs && (flag & 0x08)) {
          // 中央目录缺大小时 找后面的 data descriptor
          let q = dataStart
          while (q + 4 <= buf.length) {
            if (buf.readUInt32LE(q) === 0x08074b50) break
            q += 1
          }
          if (q + 4 <= buf.length) cs = Math.max(0, q - dataStart)
        }
        if (cs > 0 || method === 0) writeEntry(name, method, cs, dataStart)
      }
      p += 46 + nameLen + extraLen + commentLen
    }
    if (ok && count > 0) return count
    count = 0
  }

  let off = 0
  while (off + 30 <= buf.length) {
    if (buf.readUInt32LE(off) !== 0x04034b50) break
    const flag = buf.readUInt16LE(off + 6)
    const method = buf.readUInt16LE(off + 8)
    const compSize = buf.readUInt32LE(off + 18)
    const nameLen = buf.readUInt16LE(off + 26)
    const extraLen = buf.readUInt16LE(off + 28)
    const name = buf.slice(off + 30, off + 30 + nameLen).toString('utf8')
    const dataStart = off + 30 + nameLen + extraLen
    let dataEnd = dataStart + compSize
    if (dataEnd > buf.length) dataEnd = buf.length
    if (compSize > 0 || method === 0) writeEntry(name, method, compSize, dataStart)
    off = dataEnd
    if (flag & 0x08) {
      if (off + 4 <= buf.length && buf.readUInt32LE(off) === 0x08074b50) off += 16
      else if (off + 12 <= buf.length) off += 12
    }
    if (count > 20000) break
  }
  return count
}



function crc32(buf) {
  let c = ~0
  for (let i = 0; i < buf.length; i += 1) {
    c ^= buf[i]
    for (let k = 0; k < 8; k += 1) c = (c >>> 1) ^ (0xedb88320 & -(c & 1))
  }
  return ~c >>> 0
}

function zipIt(entries) {
  const chunks = []
  const central = []
  let offset = 0
  const enc = (s) => Buffer.from(s, 'utf8')
  for (const e of entries) {
    const name = enc(e.name)
    const comp = zlib.deflateRawSync(e.buf)
    const crc = crc32(e.buf)
    const lh = Buffer.alloc(30)
    lh.writeUInt32LE(0x04034b50, 0)
    lh.writeUInt16LE(20, 4)
    lh.writeUInt16LE(0x0800, 6)
    lh.writeUInt16LE(8, 8)
    lh.writeUInt32LE(crc, 14)
    lh.writeUInt32LE(comp.length, 18)
    lh.writeUInt32LE(e.buf.length, 22)
    lh.writeUInt16LE(name.length, 26)
    chunks.push(lh, name, comp)
    const cent = Buffer.alloc(46)
    cent.writeUInt32LE(0x02014b50, 0)
    cent.writeUInt16LE(20, 4)
    cent.writeUInt16LE(0x0800, 6)
    cent.writeUInt16LE(8, 8)
    cent.writeUInt32LE(crc, 16)
    cent.writeUInt32LE(comp.length, 20)
    cent.writeUInt32LE(e.buf.length, 24)
    cent.writeUInt16LE(name.length, 28)
    cent.writeUInt16LE(0, 30)
    cent.writeUInt16LE(0, 32)
    cent.writeUInt16LE(0, 34)
    cent.writeUInt16LE(0, 36)
    cent.writeUInt32LE(0, 38)
    cent.writeUInt32LE(offset, 42)
    central.push({ cent, name })
    offset += lh.length + name.length + comp.length
  }
  const centStart = offset
  for (const c of central) { chunks.push(c.cent, c.name); offset += c.cent.length + c.name.length }
  const eod = Buffer.alloc(22)
  eod.writeUInt32LE(0x06054b50, 0)
  eod.writeUInt16LE(central.length, 8)
  eod.writeUInt16LE(central.length, 10)
  eod.writeUInt32LE(offset - centStart, 12)
  eod.writeUInt32LE(centStart, 16)
  chunks.push(eod)
  return Buffer.concat(chunks)
}


function zipCacheDir(zipPath) {
  let key = zipPath
  try {
    const st = fs.statSync(zipPath)
    key += '|' + st.mtimeMs + '|' + st.size
  } catch (err) {}
  return path.join(os.tmpdir(), 'dsh-deepseek-chatframe-zips', hashId(key))
}


function parseZip(zipPath, sourcesSeen) {
  let configFound = null
  try {
    const buf = fs.readFileSync(zipPath)
    if (buf.length < 22) return null
    const tmpRoot = zipCacheDir(zipPath)
    fs.mkdirSync(tmpRoot, { recursive: true })
    const n = unzipSync(buf, tmpRoot)
    if (n === 0) return null
    const finder = findConfigDir(tmpRoot)
    if (finder) {
      configFound = parseBubbleAt(finder.dir, 'zip', sourcesSeen)
      if (configFound) configFound.source = 'zip'
    }
  } catch (err) { configFound = null }
  return configFound
}


function findConfigDir(root) {
  if (findConfigFile(root)) return { dir: root }
  let dirs = []
  try { dirs = fs.readdirSync(root, { withFileTypes: true }) } catch (err) { dirs = [] }

  for (const d of dirs) {
    if (d.isDirectory() && findConfigFile(path.join(root, d.name))) return { dir: path.join(root, d.name) }
  }

  return null
}


function readBubbleName(rootDir) {
  try {
    const cfg = JSON.parse(fs.readFileSync(path.join(rootDir, 'config.json'), 'utf8'))
    if (cfg && typeof cfg.name === 'string' && cfg.name.trim()) return cfg.name.trim()
  } catch (err) {}
  return ''
}


function safeFolderName(s) {
  const cleaned = String(s || '')
    .replace(/[\\/:*?"<>|\u0000-\u001f]/g, '_')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[. ]+$/g, '')
  return (cleaned || 'bubble') + '-imp'
}


function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true })
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, ent.name)
    const to = path.join(dst, ent.name)
    if (ent.isDirectory()) copyDir(from, to)
    else if (ent.isFile()) fs.copyFileSync(from, to)
  }
  return dst
}



const OVERRIDE_STRING = ['name', 'color', 'linkColor']

const OVERRIDE_NUMBER = ['timeMs', 'repeat']

// 覆盖项清洗
function sanitizeBubbleOverrides(input) {
  const out = {}
  const src = input && typeof input === 'object' ? input : {}
  for (const id of Object.keys(src)) {
    const v = src[id]
    if (!v || typeof v !== 'object') continue
    const o = {}
    for (const k of OVERRIDE_STRING) {
      if (typeof v[k] === 'string' && v[k].trim() !== '') o[k] = v[k].trim().slice(0, 120)
    }
    for (const k of OVERRIDE_NUMBER) {
      const n = Number(v[k])
      if (Number.isFinite(n) && n > 0) o[k] = Math.min(k === 'timeMs' ? 5000 : 1000, n)
    }
    if (Object.keys(o).length) out[id] = o
  }
  return out
}


// 生效样式
function effectiveBubble(bubble, state) {
  const ov = (state && state.bubbleOverrides && state.bubbleOverrides[bubble.id]) || {}
  const baseInsets = bubble.slice || { top: 24, right: 24, bottom: 28, left: 24 }
  const insets = baseInsets

  const maxX = Math.max(2, Math.round((Number(bubble.frameW) || 200) * 0.8))
  const maxY = Math.max(2, Math.round((Number(bubble.frameH) || 200) * 0.8))

  const frameW = Math.max(1, Number(bubble.frameW) || 200)
  const frameH = Math.max(1, Number(bubble.frameH) || 200)
  const zpSrc = bubble.zoomPoint
  const zoomPoint = Array.isArray(zpSrc)
    ? [
        Math.max(0, Math.min(frameW - 1, Math.round(Number(zpSrc[0]) || 0))),
        Math.max(0, Math.min(frameH - 1, Math.round(Number(zpSrc[1]) || 0)))
      ]
    : [0, 0]
  const frameInsets = {
    top: Math.max(0, Math.min(maxY, Number(insets.top) || 0)),
    right: Math.max(0, Math.min(maxX, Number(insets.right) || 0)),
    bottom: Math.max(0, Math.min(maxY, Number(insets.bottom) || 0)),
    left: Math.max(0, Math.min(maxX, Number(insets.left) || 0))
  }
  return {
    name: typeof ov.name === 'string' && ov.name ? ov.name : bubble.name,
    color: typeof ov.color === 'string' && ov.color ? ov.color : bubble.color,
    linkColor: typeof ov.linkColor === 'string' && ov.linkColor ? ov.linkColor : bubble.linkColor,
    zoomPoint,

    count: Number(bubble.count) || 0,
    timeMs: Number.isFinite(ov.timeMs) ? ov.timeMs : bubble.timeMs,
    repeat: Number.isFinite(ov.repeat) ? ov.repeat : bubble.repeat,
    frameInsets
  }
}

function resolveBubble(bubbles, id) {
  if (!id || !Array.isArray(bubbles)) return null
  const hit = bubbles.find((b) => b.id === id)
  return hit || null
}



const inject = ['webServer', 'connection']
const name = NS

function resolveWebServer(ctx) {
  try { if (typeof ctx.get === 'function') { const s = ctx.get('webServer'); if (s) return s } } catch (err) {}
  return ctx.webServer
}

function apply(ctx) {
  migrateLegacyRoot()
  migrateCropToConfig()
  const disposers = []
  const webServer = resolveWebServer(ctx)

  if (!webServer || typeof webServer.register !== 'function') {
    ctx.logger?.warn?.(`[${NS}] 当前 profile 没有可用的 webServer，跳过路由`)
    return
  }

  
  function rejected(req, res) {
    try {
      const conn = (typeof ctx.get === 'function' ? ctx.get('connection') : undefined) || ctx.connection
      if (!conn || typeof conn.requestRejection !== 'function') return false
      const code = conn.requestRejection(req)
      if (code === undefined || code === null || code === false) return false
      res.statusCode = typeof code === 'number' ? code : 403
      res.end()
      return true
    } catch (err) { return false }
  }

  function registerRoute(route) {
    const inner = route && route.handler
    const wrapped = Object.assign({}, route, {
      handler: async (req, res) => {
        if (rejected(req, res)) return
        return inner(req, res)
      }
    })
    return webServer.register(wrapped)
  }

  function sendJson(res, code, payload) {
    const body = Buffer.from(JSON.stringify(payload), 'utf8')
    res.writeHead(code, {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'Content-Length': String(body.length)
    })
    res.end(body)
  }

  function sendText(res, type, text) {
    const body = Buffer.from(text, 'utf8')
    res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store', 'Content-Length': String(body.length) })
    res.end(body)
  }

  function readBody(req, limit = 2 * 1024 * 1024) {
    return new Promise((resolve) => {
      let size = 0
      const chunks = []
      req.on('data', (c) => {
        size += c.length
        if (size > limit) { req.destroy(); resolve(''); return }
        chunks.push(c)
      })
      req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
      req.on('error', () => resolve(''))
    })
  }



  let stateWriteChain = Promise.resolve()
  function mutateState(iterate) {
    const run = stateWriteChain.then(function () {
      const current = readState()
      const next = iterate(current) || current
      return writeState(next)
    })

    stateWriteChain = run.then(function () {}, function () {})
    return run
  }

  
  // 快照
function currentSnapshot(state) {
    const bubbles = scanBubblesCached(state.sourcesDir)
    return { state, bubbles }
  }

  
  disposers.push(registerRoute({
    kind: 'exact',
    path: ROUTE_BASE + '/api/state.json',
    handler: async (req, res) => {
      const method = (req.method || 'GET').toUpperCase()
      if (method === 'GET') {
        const state = readState()
        const snap = currentSnapshot(state)

        const withThumb = snap.bubbles.map((b) => {
          const pb = publicBubble(b, snap.state)
          try {
            const frames0 = Array.isArray(b.frames) ? b.frames : []
            if (frames0.length) {
              const p0 = path.join(b.frameDir, frames0[0].file)
              const thumb = thumbDataUrlCached(p0)
              if (thumb) pb.thumb = thumb
            }
          } catch (e) {}
          return pb
        })
        sendJson(res, 200, {
          ok: true,
          version: PLUGIN_VERSION,
          state: snap.state,
          bubbles: withThumb,
          dir: ROOT_DIR,
          sourcesDir: snap.state.sourcesDir
        })
        return
      }
      if (method !== 'POST') { sendJson(res, 405, { ok: false, error: 'method not allowed' }); return }
      const text = await readBody(req)
      let payload = {}
      try { payload = text ? JSON.parse(text) : {} } catch (err) { sendJson(res, 400, { ok: false, error: 'invalid json' }); return }
      try {
        if (payload && payload.action === 'reset') {
          const next = await mutateState(function (cur) {
            return Object.assign({}, DEFAULTS, {
              replaceComposer: cur && cur.replaceComposer === true,
              composerBubble: (cur && typeof cur.composerBubble === 'string') ? cur.composerBubble : ''
            })
          })
          const snap = currentSnapshot(next)
          sendJson(res, 200, { ok: true, version: PLUGIN_VERSION, state: snap.state, bubbles: publicBubbles(snap), dir: ROOT_DIR })
          return
        }
        const patch = payload && typeof payload.patch === 'object' && payload.patch ? payload.patch : payload
        const next = await mutateState(function (current) { return Object.assign({}, current, patch) })
        const snap = currentSnapshot(next)
        sendJson(res, 200, { ok: true, version: PLUGIN_VERSION, state: snap.state, bubbles: publicBubbles(snap), dir: ROOT_DIR })
      } catch (err) {
        sendJson(res, 500, { ok: false, error: String((err && err.message) || err) })
      }
    }
  }))

  
  disposers.push(registerRoute({
    kind: 'exact',
    path: ROUTE_BASE + '/api/rescan',
    handler: async (req, res) => {
      const method = (req.method || 'GET').toUpperCase()
      if (method !== 'POST') { sendJson(res, 405, { ok: false, error: 'method not allowed' }); return }
      const state = readState()
      invalidateScanCache()
      const snap = currentSnapshot(state)
      sendJson(res, 200, { ok: true, state: snap.state, bubbles: publicBubbles(snap) })
    }
  }))

  
  disposers.push(registerRoute({
    kind: 'prefix',
    path: ROUTE_BASE + '/frame.png',
    handler: (req, res) => {
      let url = req.url || ''
      const q = url.indexOf('?')
      let qs = ''
      if (q !== -1) { qs = url.slice(q + 1); url = url.slice(0, q) }
      const sp = new URLSearchParams(qs)
      const id = sp.get('b') || ''
      const nRaw = sp.get('n') || ''
      const st = readState()
      const bubbles = scanBubblesCached(st.sourcesDir)
      const b = resolveBubble(bubbles, id)
      if (!b) { sendJson(res, 404, { ok: false, error: 'no such bubble' }); return }
      const eff = effectiveBubble(b, st)

      const setKey = sp.get('set') || ''
      const branch = (setKey && b.anims && b.anims[setKey]) ? b.anims[setKey] : null
      const frames = branch ? branch.frames : (Array.isArray(b.frames) ? b.frames : [])
      const dirOf = branch ? path.join(b.rootDir || path.dirname(b.frameDir), branch.zipName) : b.frameDir
      const maxFrame = branch ? Math.max(1, frames.length) : Math.max(1, Number(eff.count) || b.count || 1)
      let n = parseInt(nRaw, 10)
      if (!Number.isFinite(n) || n < 1) n = 1
      if (n > maxFrame) n = maxFrame

      let frame = frames.find((f) => f.idx === n) || frames[n - 1] || null
      if (!frame && frames.length) {
        let bestI = frames[0]
        for (const f of frames) if (f.idx <= n) bestI = f
        frame = bestI
      }
      if (frame) {
        const fp = path.join(dirOf, frame.file)
        const bytes = readFrameBytesCached(fp)
        if (bytes) {
          res.writeHead(200, {
            'Content-Type': 'image/png',
            'Cache-Control': 'public, max-age=86400',
            'Content-Length': String(bytes.length)
          })
          res.end(bytes)
          return
        }
      }
      sendJson(res, 404, { ok: false, error: 'frame file missing' })
    }
  }))

  
  disposers.push(registerRoute({
    kind: 'exact',
    path: ROUTE_BASE + '/api/upload',
    handler: async (req, res) => {
      const method = (req.method || 'GET').toUpperCase()
      if (method !== 'POST') { sendJson(res, 405, { ok: false, error: 'method not allowed' }); return }
      const state = readState()
      const dir = state.sourcesDir || DEFAULT_SOURCES_DIR
      fs.mkdirSync(dir, { recursive: true })
      const chunks = []
      let size = 0
      const limit = 120 * 1024 * 1024
      req.on('data', (c) => {
        size += c.length
        if (size > limit) { req.destroy(); return }
        chunks.push(c)
      })
      req.on('end', () => {
        const buf = Buffer.concat(chunks)
        if (buf.length < 22) { sendJson(res, 400, { ok: false, error: 'empty upload' }); return }
        try {
          const tmpRoot = path.join(os.tmpdir(), 'dsh-deepseek-chatframe-upload-' + Date.now())
          fs.mkdirSync(tmpRoot, { recursive: true })
          const n = unzipSync(buf, tmpRoot)
          if (n === 0) { sendJson(res, 400, { ok: false, error: 'zip 里没有可解压的文件' }); return }
          const finder = findConfigDir(tmpRoot)
          if (!finder) { sendJson(res, 400, { ok: false, error: 'zip 里找不到 config.json，不是气泡包' }); return }

          const name = safeFolderName(readBubbleName(finder.dir) || 'bubble-' + Date.now())
          const target = path.join(dir, name)
          if (fs.existsSync(target)) fs.rmSync(target, { recursive: true, force: true })
          copyDir(finder.dir, target)
          invalidateScanCache()
          const snap = currentSnapshot(state)
          sendJson(res, 200, { ok: true, state: snap.state, bubbles: publicBubbles(snap), dir })
        } catch (err) {
          sendJson(res, 500, { ok: false, error: '导入失败：' + String((err && err.message) || err) })
        }
      })
      req.on('error', () => { try { sendJson(res, 400, { ok: false, error: 'request error' }) } catch (err) {} })
    }
  }))

  
  disposers.push(registerRoute({
    kind: 'exact',
    path: ROUTE_BASE + '/api/import-folder',
    handler: async (req, res) => {
      const method = (req.method || 'GET').toUpperCase()
      if (method !== 'POST') { sendJson(res, 405, { ok: false, error: 'method not allowed' }); return }
      const state = readState()
      const dir = state.sourcesDir || DEFAULT_SOURCES_DIR
      fs.mkdirSync(dir, { recursive: true })
      const chunks = []
      let size = 0
      const limit = 160 * 1024 * 1024
      req.on('data', (c) => { size += c.length; if (size > limit) { req.destroy(); return }; chunks.push(c) })
      req.on('end', () => {
        try {
          const body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')
          const files = Array.isArray(body.files) ? body.files : []
          if (!files.length) { sendJson(res, 400, { ok: false, error: '没有收到文件' }); return }

          const hasConfig = files.some((f) => /(^|\/)config\.json$/i.test(String(f.path || '')))
          if (!hasConfig) { sendJson(res, 400, { ok: false, error: '文件夹里没有 config.json，不是气泡包' }); return }
          const folderName = safeFolderName(String(body.name || 'bubble') + '-folder')
          const root = path.join(dir, folderName)
          fs.mkdirSync(root, { recursive: true })
          let wrote = 0
          for (const f of files) {
            const rel = String(f.path || '').replace(/\\/g, '/').replace(/^\/+/, '')
            if (!rel) continue
            const target = path.join(root, rel)
            const base = path.resolve(root)
            if (path.resolve(target).indexOf(base + path.sep) !== 0 && path.resolve(target) !== base) continue
            const data = String(f.dataBase64 || '')
            if (!data) continue
            fs.mkdirSync(path.dirname(target), { recursive: true })
            fs.writeFileSync(target, Buffer.from(data, 'base64'))
            wrote += 1
          }
          invalidateScanCache()
          const snap = currentSnapshot(state)
          sendJson(res, 200, { ok: true, state: snap.state, bubbles: publicBubbles(snap), dir })
        } catch (err) {
          sendJson(res, 500, { ok: false, error: '导入失败：' + String((err && err.message) || err) })
        }
      })
      req.on('error', () => { try { sendJson(res, 400, { ok: false, error: 'request error' }) } catch (err) {} })
    }
  }))

  
  disposers.push(registerRoute({
    kind: 'exact',
    path: ROUTE_BASE + '/api/bubble-override',
    handler: async (req, res) => {
      const method = (req.method || 'GET').toUpperCase()
      if (method !== 'POST') { sendJson(res, 405, { ok: false, error: 'method not allowed' }); return }
      const text = await readBody(req)
      let payload = {}
      try { payload = text ? JSON.parse(text) : {} } catch (err) { sendJson(res, 400, { ok: false, error: 'invalid json' }); return }
      const id = String(payload.id || '')
      if (!id) { sendJson(res, 400, { ok: false, error: 'missing id' }); return }
      try {
        const next = await mutateState(function (cur) {
          const overrides = Object.assign({}, cur.bubbleOverrides || {})
          if (payload.clear) {
            delete overrides[id]
          } else {

            overrides[id] = Object.assign({}, overrides[id] || {}, payload.patch || {})
          }
          return Object.assign({}, cur, { bubbleOverrides: overrides })
        })
        const snap = currentSnapshot(next)
        sendJson(res, 200, { ok: true, state: snap.state, bubbles: publicBubbles(snap) })
      } catch (err) {
        sendJson(res, 500, { ok: false, error: String((err && err.message) || err) })
      }
    }
  }))

  disposers.push(registerRoute({
    kind: 'exact',
    path: ROUTE_BASE + '/api/bubble-config',
    handler: async (req, res) => {
      const method = (req.method || 'GET').toUpperCase()
      if (method !== 'POST') { sendJson(res, 405, { ok: false, error: 'method not allowed' }); return }
      let payload = {}
      try {
        const text = await readBody(req)
        payload = text ? JSON.parse(text) : {}
      } catch (err) { sendJson(res, 400, { ok: false, error: 'invalid json' }); return }
      const id = String(payload.id || '')
      const fi = payload.frameInsets
      const zp = payload.zoomPoint
      const hasCrop = !!(fi && typeof fi === 'object')
      const hasZoom = Array.isArray(zp) && zp.length === 2
      if (!id || (!hasCrop && !hasZoom)) { sendJson(res, 400, { ok: false, error: 'missing id/frameInsets/zoomPoint' }); return }
      const state = readState()
      const bubbles = scanBubblesCached(state.sourcesDir)
      const b = resolveBubble(bubbles, id)
      if (!b) { sendJson(res, 404, { ok: false, error: 'no such bubble' }); return }
      const cfgPath = findConfigFile(b.rootDir)
      if (!cfgPath) { sendJson(res, 404, { ok: false, error: 'config.json not found' }); return }
      const maxX = Math.max(2, Math.round((Number(b.frameW) || 200) * 0.8))
      const maxY = Math.max(2, Math.round((Number(b.frameH) || 200) * 0.8))
      const nums = hasCrop ? [fi.top, fi.right, fi.bottom, fi.left].map((n, i) => {
        const cap = i % 2 === 0 ? maxY : maxX
        return Math.max(0, Math.min(cap, Math.round(Number(n) || 0)))
      }) : null
      const zoom = hasZoom ? [
        Math.max(0, Math.min((Number(b.frameW) || 200) - 1, Math.round(Number(zp[0]) || 0))),
        Math.max(0, Math.min((Number(b.frameH) || 200) - 1, Math.round(Number(zp[1]) || 0)))
      ] : null
      try {
        const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'))
        if (nums) cfg.frameInsets = nums
        if (zoom) {
          setConfigZoomPoint(cfg, zoom)
          if (!nums) delete cfg.frameInsets
        }
        fs.writeFileSync(cfgPath, JSON.stringify(cfg, null, 2), 'utf8')
      } catch (err) { sendJson(res, 500, { ok: false, error: 'write config failed: ' + String((err && err.message) || err) }); return }
      invalidateScanCache()
      try {
        const next = await mutateState(function (cur) {
          const overrides = Object.assign({}, cur.bubbleOverrides || {})
          if (overrides[id]) {
            const copy = Object.assign({}, overrides[id])
            delete copy.frameInsets
            delete copy.zoomPoint
            if (Object.keys(copy).length) overrides[id] = copy
            else delete overrides[id]
          }
          return Object.assign({}, cur, { bubbleOverrides: overrides })
        })
        const snap = currentSnapshot(next)
        sendJson(res, 200, {
          ok: true, state: snap.state, bubbles: publicBubbles(snap),
          frameInsets: nums, zoomPoint: zoom
        })
      } catch (err) {
        sendJson(res, 500, { ok: false, error: String((err && err.message) || err) })
      }
    }
  }))

  disposers.push(registerRoute({
    kind: 'prefix',
    path: ROUTE_BASE + '/api/frame',
    handler: async (req, res) => {
      try {
        const state = readState()
        const sp = new URL(req.url || '/', 'http://x').searchParams
        const id = String(sp.get('b') || '')
        const setKey = sp.get('set') || ''
        let n = parseInt(sp.get('n') || '1', 10)
        if (!Number.isFinite(n) || n < 1) n = 1
        const list = scanBubblesCached(state.sourcesDir || DEFAULT_SOURCES_DIR)
        const b = list.find((x) => x.id === id)
        if (!b) { sendJson(res, 404, { ok: false, error: 'bubble not found' }); return }
        const branch = (setKey && b.anims && b.anims[setKey]) ? b.anims[setKey] : null
        const frames = branch ? branch.frames : b.frames
        const dir = branch ? path.join(b.rootDir || path.dirname(b.frameDir), branch.zipName) : b.frameDir
        if (!frames || !frames.length) { sendJson(res, 404, { ok: false, error: 'no frames' }); return }
        const exact = frames.find((fr) => fr.idx === n)
        const pick = exact || frames.reduce((acc, fr) => (Math.abs(fr.idx - n) < Math.abs(acc.idx - n) ? fr : acc), frames[0])
        const buf = fs.readFileSync(path.join(dir, pick.file))
        sendJson(res, 200, { ok: true, n: pick.idx, file: pick.file, dataUrl: 'data:image/png;base64,' + buf.toString('base64') })
      } catch (err) { sendJson(res, 500, { ok: false, error: String((err && err.message) || err) }) }
    }
  }))
  
  disposers.push(registerRoute({
    kind: 'prefix',
    path: ROUTE_BASE + '/api/delete-bubble',
    handler: async (req, res) => {
      if ((req.method || 'GET').toUpperCase() !== 'POST') { sendJson(res, 405, { ok: false }); return }
      let payload = {}
      try { const text = await readBody(req); payload = text ? JSON.parse(text) : {} } catch (err) { sendJson(res, 400, { ok: false, error: 'invalid json' }); return }
      const id = String(payload.id || '')
      if (!id) { sendJson(res, 400, { ok: false, error: 'missing id' }); return }
      const state = readState()
      const list = scanBubblesCached(state.sourcesDir || DEFAULT_SOURCES_DIR)
      const target = list.find((b) => b.id === id)
      if (!target) { sendJson(res, 404, { ok: false, error: 'bubble not found' }); return }
      try {
        const dir = target.rootDir

        const base = path.resolve(state.sourcesDir || DEFAULT_SOURCES_DIR)
        const full = path.resolve(dir)
        if (!full.startsWith(base + path.sep) || full === base) {
          sendJson(res, 400, { ok: false, error: 'refuse to delete outside sources dir' }); return
        }
        fs.rmSync(full, { recursive: true, force: true })
        invalidateScanCache()
        const written = await mutateState(function (cur) {
          const next = Object.assign({}, cur)
          if (next.userBubble === id) next.userBubble = ''
          if (next.assistantBubble === id) next.assistantBubble = ''
          if (next.bubbleOverrides && next.bubbleOverrides[id]) {
            next.bubbleOverrides = Object.assign({}, next.bubbleOverrides)
            delete next.bubbleOverrides[id]
          }
          return next
        })
        const snap = currentSnapshot(written)
        sendJson(res, 200, { ok: true, dir: full, state: snap.state, bubbles: publicBubbles(snap) })
      } catch (err) { sendJson(res, 500, { ok: false, error: String((err && err.message) || err) }) }
    }
  }))
  
  disposers.push(registerRoute({
    kind: 'prefix',
    path: ROUTE_BASE + '/api/import-config',
    handler: async (req, res) => {
      if ((req.method || 'GET').toUpperCase() !== 'POST') { sendJson(res, 405, { ok: false }); return }
      let payload = {}
      try { const text = await readBody(req); payload = text ? JSON.parse(text) : {} } catch (err) { sendJson(res, 400, { ok: false, error: 'invalid json' }); return }
      const id = String(payload.id || '')
      const cfg = payload.config
      if (!id || !cfg || typeof cfg !== 'object') { sendJson(res, 400, { ok: false, error: 'missing id/config' }); return }
      const state = readState()
      const list = scanBubblesCached(state.sourcesDir || DEFAULT_SOURCES_DIR)
      const target = list.find((b) => b.id === id)
      if (!target) { sendJson(res, 404, { ok: false, error: 'bubble not found' }); return }
      try {
        fs.writeFileSync(path.join(target.rootDir, 'config.json'), JSON.stringify(cfg, null, 2), 'utf8')
        invalidateScanCache()
        const snap = currentSnapshot(state)
        sendJson(res, 200, { ok: true, state: snap.state, bubbles: publicBubbles(snap) })
      } catch (err) { sendJson(res, 500, { ok: false, error: String((err && err.message) || err) }) }
    }
  }))

  
  disposers.push(registerRoute({
    kind: 'prefix',
    path: ROUTE_BASE + '/api/frames',
    handler: async (req, res) => {
      const method = (req.method || 'GET').toUpperCase()
      const state = readState()
      const sp = new URL(req.url || '/', 'http://x').searchParams
      let payload = {}
      if (method === 'POST') {
        try { const text = await readBody(req); payload = text ? JSON.parse(text) : {} } catch (err) { sendJson(res, 400, { ok: false, error: 'invalid json' }); return }
      }
      const id = String(method === 'POST' ? (payload.id || '') : (sp.get('id') || ''))
      const list = scanBubblesCached(state.sourcesDir || DEFAULT_SOURCES_DIR)
      const target = list.find((b) => b.id === id)
      if (!target) { sendJson(res, 404, { ok: false, error: 'bubble not found' }); return }
      const dir = target.frameDir
      try {
        fs.mkdirSync(dir, { recursive: true })
        if (method === 'GET') {
          const frames = readFrames(dir).map((fr) => ({ n: fr.idx, file: fr.file }))
          sendJson(res, 200, { ok: true, frames })
          return
        }
        const action = String(payload.action || '')
        const n = Math.max(1, Number(payload.n) || 0)
        const fileOf = (i, ext2) => String(i).padStart(4, '0') + (ext2 || '@2x.png')
        if (action === 'delete' && n) {
          const cur = readFrames(dir).find((fr) => fr.idx === n)
          if (cur) fs.unlinkSync(path.join(dir, cur.file))
        } else if (action === 'add') {
          const b64 = String(payload.image || '').replace(/^data:image\/png;base64,/, '')
          if (!b64) { sendJson(res, 400, { ok: false, error: 'missing image' }); return }
          const buf = Buffer.from(b64, 'base64')
          const exist = readFrames(dir)
          let next = 1
          while (exist.some((fr) => fr.idx === next)) next += 1
          fs.writeFileSync(path.join(dir, fileOf(next)), buf)
        } else if (action === 'replace' && n) {
          const b64 = String(payload.image || '').replace(/^data:image\/png;base64,/, '')
          if (!b64) { sendJson(res, 400, { ok: false, error: 'missing image' }); return }
          const buf = Buffer.from(b64, 'base64')
          const cur = readFrames(dir).find((fr) => fr.idx === n)
          fs.writeFileSync(path.join(dir, cur ? cur.file : fileOf(n)), buf)
        } else {
          sendJson(res, 400, { ok: false, error: 'bad action' }); return
        }

        const after = readFrames(dir)
        try {
          const cfgPath = findConfigFile(target.rootDir)
          if (cfgPath) {
            const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'))
            const setName = cfg.bubbleframe_animation && cfg.bubbleframe_animation.animation_set
            if (setName && cfg.animation_sets && cfg.animation_sets[setName]) {
              cfg.animation_sets[setName].count = String(after.length)
              fs.writeFileSync(cfgPath, JSON.stringify(cfg, null, 2), 'utf8')
            }
          }
        } catch (err) {}
        invalidateScanCache()
        const snap = currentSnapshot(state)
        sendJson(res, 200, { ok: true, frames: after.map((fr) => ({ n: fr.idx, file: fr.file })), state: snap.state, bubbles: publicBubbles(snap) })
      } catch (err) { sendJson(res, 500, { ok: false, error: String((err && err.message) || err) }) }
    }
  }))
  
  disposers.push(registerRoute({
    kind: 'exact',
    path: ROUTE_BASE + '/api/create-bubble',
    handler: async (req, res) => {
      const method = (req.method || 'GET').toUpperCase()
      if (method !== 'POST') { sendJson(res, 405, { ok: false, error: 'method not allowed' }); return }
      let payload = {}
      try { const text = await readBody(req); payload = text ? JSON.parse(text) : {} } catch (err) { sendJson(res, 400, { ok: false, error: 'invalid json' }); return }
      const state = readState()
      const root = state.sourcesDir || DEFAULT_SOURCES_DIR
      const name = String(payload.name || '').trim() || '新建气泡'
      const folder = safeFolderName(name)
      const pkgDir = path.join(root, folder)
      try {
        fs.mkdirSync(path.join(pkgDir, 'bubbleframe'), { recursive: true })
        const images = Array.isArray(payload.images) ? payload.images : []
        const frames = []
        for (let i = 0; i < images.length && i < 400; i += 1) {
          const raw = String(images[i] || '')
          const b64 = raw.replace(/^data:image\/png;base64,/, '')
          if (!b64) continue
          const buf = Buffer.from(b64, 'base64')
          if (buf.length < 20) continue
          const fileName = String(i + 1).padStart(4, '0') + '@2x.png'
          fs.writeFileSync(path.join(pkgDir, 'bubbleframe', fileName), buf)
          frames.push(fileName)
        }
        const count = frames.length || Math.max(1, Number(payload.count) || 1)
        const timeMs = Math.max(20, Math.min(2000, Number(payload.timeMs) || 100))

        let cfg
        if (payload.config && typeof payload.config === 'object') {
          cfg = payload.config
          if (!cfg.name) cfg.name = name
        } else {
          cfg = {
            name,
            color: String(payload.color || '0xFF7e7275'),
            link_color: String(payload.linkColor || '0xFFffc2dc'),
            zoom_point: ['70', '60'],
            bubbleframe_animation: { animation_set: 'bubbleframe_anim' },
            animation_sets: {
              bubbleframe_anim: {
                repeat: '100', zip_name: 'bubbleframe',
                count: String(count), time: String(timeMs),
                zoom_point: ['70', '60']
              }
            }
          }
        }
        fs.writeFileSync(path.join(pkgDir, 'config.json'), JSON.stringify(cfg, null, 2), 'utf8')
        invalidateScanCache()
        const next = writeState(state)
        const snap = currentSnapshot(next)
        sendJson(res, 200, { ok: true, dir: pkgDir, frames: frames.length, state: snap.state, bubbles: publicBubbles(snap) })
      } catch (err) {
        sendJson(res, 500, { ok: false, error: String((err && err.message) || err) })
      }
    }
  }))
  
  disposers.push(registerRoute({
    kind: 'exact',
    path: ROUTE_BASE + '/api/export',
    handler: (req, res) => {
      const q = (req.url || '').indexOf('?')
      const sp = new URLSearchParams(q !== -1 ? (req.url || '').slice(q + 1) : '')
      const id = sp.get('id') || ''
      const st = readState()
      const bubbles = scanBubblesCached(st.sourcesDir)
      const b = resolveBubble(bubbles, id)
      if (!b) { sendJson(res, 404, { ok: false, error: 'no such bubble' }); return }
      const eff = effectiveBubble(b, st)
      const entries = []

      try {
        const want = Math.max(1, Number(eff.count) || b.frames.length)
        const useFrames = b.frames.slice(0, want)
        for (const fr of useFrames) {
          const fp = path.join(b.frameDir, fr.file)
          if (fs.existsSync(fp)) entries.push({ name: 'bubbleframe/' + fr.file, buf: fs.readFileSync(fp) })
        }
      } catch (err) {}

      let cfg = {}
      try { cfg = JSON.parse(fs.readFileSync(path.join(b.frameDir, '..', 'config.json'), 'utf8')) } catch (err) {
        try { cfg = JSON.parse(fs.readFileSync(path.join(path.dirname(b.frameDir), 'config.json'), 'utf8')) } catch (err2) {}
      }
      cfg = Object.assign({}, cfg, {
        name: eff.name,
        color: eff.color,
        link_color: eff.linkColor,
        zoom_point: [String(eff.zoomPoint[0]), String(eff.zoomPoint[1])],
        frameInsets: [eff.frameInsets.top, eff.frameInsets.right, eff.frameInsets.bottom, eff.frameInsets.left]
      })

      const setName = (cfg.bubbleframe_animation && cfg.bubbleframe_animation.animation_set) || 'bubbleframe_anim'
      if (!cfg.animation_sets || typeof cfg.animation_sets !== 'object') cfg.animation_sets = {}
      const cur = cfg.animation_sets[setName] && typeof cfg.animation_sets[setName] === 'object' ? cfg.animation_sets[setName] : {}
      cfg.animation_sets[setName] = Object.assign({}, cur, {
        repeat: String(eff.repeat),
        zip_name: 'bubbleframe',
        count: String(eff.count),
        time: String(eff.timeMs),
        zoom_point: [String(eff.zoomPoint[0]), String(eff.zoomPoint[1])]
      })
      entries.unshift({ name: 'config.json', buf: Buffer.from(JSON.stringify(cfg, null, 2), 'utf8') })
      const zip = zipIt(entries)
      res.writeHead(200, {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="' + encodeURIComponent(eff.name) + '.zip"',
        'Content-Length': String(zip.length)
      })
      res.end(zip)
    }
  }))

  
  disposers.push(registerRoute({
    kind: 'exact',
    path: ROUTE_BASE + '/api/health',
    handler: (req, res) => {
      const state = readState()
      const bubbles = scanBubblesCached(state.sourcesDir)
      sendJson(res, 200, { ok: true, version: PLUGIN_VERSION, dir: ROOT_DIR, sourcesDir: state.sourcesDir, bubbleCount: bubbles.length })
    }
  }))

  ctx.effect(() => () => {
    for (const dispose of disposers) { try { dispose() } catch (err) {} }
  })
}



function publicBubble(b, state) {
  const st = (state && typeof state === 'object' && !Array.isArray(state)) ? state : readState()
  const eff = effectiveBubble(b, st)
  const ov = (st.bubbleOverrides && st.bubbleOverrides[b.id]) || {}
  return {
    id: b.id,

    name: eff.name,
    color: eff.color,
    linkColor: eff.linkColor,
    zoomPoint: eff.zoomPoint,
    count: eff.count,
    timeMs: eff.timeMs,
    repeat: eff.repeat,
    frameInsets: eff.frameInsets,
    slice: eff.frameInsets,

    sliceSource: b.sliceSource || 'default',

    defaults: {
      name: b.name,
      color: b.color,
      linkColor: b.linkColor,
      zoomPoint: b.zoomPoint,
      count: b.count,
      timeMs: b.timeMs,
      repeat: b.repeat,
      frameInsets: b.slice
    },
    overrides: ov,
    transparentStyle: b.transparentStyle || null,
    fillInset: (b.fillInset === null || b.fillInset === undefined) ? null : b.fillInset,
    anims: Object.keys(b.anims || {}).reduce(function (acc, k) {
      const a = b.anims[k]
      acc[k] = { name: k, count: a.count, timeMs: a.timeMs }
      return acc
    }, {}),
    frameW: b.frameW,
    frameH: b.frameH,
    frameScale: b.frameScale,
    source: b.source

  }
}


function publicBubbles(snap) {
  const st = (snap && snap.state) ? snap.state : readState()
  const list = (snap && Array.isArray(snap.bubbles)) ? snap.bubbles : []
  return list.map(function (b) { return publicBubble(b, st) })
}

export { apply, inject, name }
