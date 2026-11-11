window.__ModuleLoader__.load({
  id: 'dsh-deepseek-chatframe',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports
    Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })

    var react = require('react')
    var h = react.createElement

    var API_BASE = '/dsh-deepseek-chatframe/api'
    var STATE_URL = API_BASE + '/state.json'
    var RESCAN_URL = API_BASE + '/rescan'
    var UPLOAD_URL = API_BASE + '/upload'
    var IMPORT_FOLDER_URL = API_BASE + '/import-folder'
    var OVERRIDE_URL = API_BASE + '/bubble-override'
    var BUBBLE_CONFIG_URL = API_BASE + '/bubble-config'
    var EXPORT_URL = API_BASE + '/export'
    var FRAME_URL = '/dsh-deepseek-chatframe/frame.png'

    
    var CSS = [
      '.__qf_root{width:100%;max-width:720px;display:flex;flex-direction:column;gap:14px;font-size:13px;color:var(--dsw-alias-label-primary);box-sizing:border-box}',
      '.__qf_version{font-family:ui-monospace,Consolas,monospace;font-size:12px;color:var(--dsw-alias-label-tertiary)}',
      '.__qf_group{border:1px solid var(--dsw-alias-border-l2);border-radius:10px;padding:12px 14px;display:flex;flex-direction:column;gap:12px;box-sizing:border-box;min-width:0}',
      '.__qf_groupTitle{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--dsw-alias-label-tertiary)}',
      '.__qf_field{display:flex;flex-direction:column;gap:6px;min-width:0}',
      '.__qf_label{font-size:12px;font-weight:600}',
      '.__qf_hint{font-size:11px;line-height:1.55;color:var(--dsw-alias-label-tertiary);word-break:break-word}',
      '.__qf_row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;min-width:0}',
      '.__qf_grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(132px,1fr));gap:10px;min-width:0}',
      '.__qf_grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;min-width:0}',
      '.__qf_input{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);font:inherit;color:var(--dsw-alias-label-primary);border-radius:8px;padding:6px 10px;font-size:13px;box-sizing:border-box;width:100%;min-width:0;outline:none}',
      '.__qf_input:focus{border-color:var(--dsw-alias-state-business-primary)}',
      '.__qf_textarea{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);font-family:ui-monospace,Consolas,monospace;color:var(--dsw-alias-label-primary);border-radius:8px;padding:8px 10px;font-size:12px;line-height:1.5;box-sizing:border-box;width:100%;min-height:96px;resize:vertical;outline:none}',
      '.__qf_color{width:100%;height:32px;padding:0 2px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:transparent;cursor:pointer;box-sizing:border-box}',
      '.__qf_select{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);color:var(--dsw-alias-label-primary);border-radius:8px;padding:6px 8px;font:inherit;font-size:13px;width:100%;min-width:0;box-sizing:border-box}',
      '.__qf_check{display:flex;align-items:flex-start;gap:8px;cursor:pointer}',
      '.__qf_check input{margin-top:2px;accent-color:var(--dsw-alias-state-business-primary);flex:0 0 auto}',
      '.__qf_checkText{display:flex;flex-direction:column;gap:2px;min-width:0}',
      '.__qf_actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}',
      '.__qf_tabs{display:flex;border-bottom:1px solid var(--dsw-alias-border-l2);margin-bottom:10px}',
      '.__qf_frameGrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:10px;margin:10px 0}',
      '.__qf_frameItem{display:flex;flex-direction:column;align-items:center;gap:4px;padding:6px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;background:var(--dsw-alias-bg-layer-3)}',
      '.__qf_frameName{font-size:11px;color:var(--dsw-alias-label-tertiary);word-break:break-all;text-align:center}',
      '.__qf_btnSm{padding:2px 8px;font-size:12px}',
      '.__qf_btn{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-3);color:var(--dsw-alias-label-primary);border-radius:8px;padding:6px 14px;font:inherit;font-size:13px;cursor:pointer;white-space:nowrap}',
      '.__qf_btn:hover:not(:disabled){border-color:var(--dsw-alias-state-business-primary)}',
      '.__qf_btn:disabled{opacity:.5;cursor:default}',
      '.__qf_btnPrimary{border-color:var(--dsw-alias-state-business-primary,#3964fe);background:var(--dsw-alias-state-business-primary,#3964fe);color:#fff}',
      '.__qf_status{font-size:12px;color:var(--dsw-alias-label-tertiary)}',
      '.__qf_ok{font-size:12px;color:var(--dsw-alias-state-business-primary)}',
      '.__qf_err{font-size:12px;color:var(--dsw-alias-state-error-primary,#f85149)}',
      '.__qf_uploadbox{border:1px dashed var(--dsw-alias-state-business-primary,#3964fe);border-radius:8px;padding:14px;color:var(--dsw-alias-label-tertiary);font-size:12px;text-align:center;cursor:pointer;box-sizing:border-box}',
      '.__qf_uploadbox.drag{background:var(--dsw-alias-bg-layer-3)}',
      '.__qf_diag{display:flex;flex-direction:column;gap:4px;padding:8px 10px;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;font-size:11px;line-height:1.6;color:var(--dsw-alias-label-tertiary);box-sizing:border-box}',
      '.__qf_diag b{color:var(--dsw-alias-label-primary);font-weight:600}',
      '.__qf_entry{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;cursor:pointer;user-select:none;box-sizing:border-box}',
      '.__qf_entry:hover{border-color:var(--dsw-alias-state-business-primary)}',
      '.__qf_entry_open{border-color:var(--dsw-alias-state-business-primary)}',
      '.__qf_entryL{display:flex;align-items:center;gap:8px;min-width:0}',
      '.__qf_entryName{font-size:13px;font-weight:600}',
      '.__qf_entryVal{font-size:11px;color:var(--dsw-alias-label-tertiary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.__qf_arrow{font-size:11px;color:var(--dsw-alias-label-tertiary);flex:0 0 auto}',
      '.__qf_detail{padding:12px 12px 4px;border:1px solid var(--dsw-alias-border-l2);border-radius:9px;display:flex;flex-direction:column;gap:12px;box-sizing:border-box;min-width:0}',
      '.__qf_changed{font-size:11px;color:var(--dsw-alias-state-business-primary)}',
      
      '.__qf_acc{display:flex;flex-direction:column;min-width:0}',
      '.__qf_acc .__qf_entry.__qf_entry_open{border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-color:transparent}',
      '.__qf_acc .__qf_detail{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0;animation:__qf_drawer_in .18s ease-out}',
      '@keyframes __qf_drawer_in{from{opacity:0;transform:translateY(-3px)}to{opacity:1;transform:translateY(0)}}',
      
      '.__qf_subpanel{margin:-6px 0 0 28px;padding:10px 12px;border:1px solid var(--dsw-alias-border-l2);border-left:2px solid var(--dsw-alias-state-business-primary);border-radius:0 8px 8px 8px;background:var(--dsw-alias-bg-layer-3);display:flex;flex-direction:column;gap:10px;min-width:0;animation:__qf_drawer_in .18s ease-out}',
      '.__qf_subpanel .__qf_label{font-weight:500}',
      
      '.__qf_check input[type="checkbox"]{appearance:none;-webkit-appearance:none;box-sizing:border-box;width:20px;height:20px;border:1px solid var(--dsw-alias-border-l2);border-radius:4px;background:var(--dsw-alias-bg-layer-3);cursor:pointer;flex:0 0 auto;margin:0;position:relative;transition:background .12s ease,border-color .12s ease}',
      '.__qf_check input[type="checkbox"]:hover:not(:disabled){border-color:var(--dsw-alias-state-business-primary)}',
      '.__qf_check input[type="checkbox"]:checked{border-color:transparent;background:var(--dsw-alias-state-business-primary,#3964fe);animation:__qf_jelly .5s ease}',
      '.__qf_check input[type="checkbox"]:checked:after{content:"";position:absolute;left:7px;top:3px;width:4px;height:9px;border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotate(45deg);opacity:1;transition:opacity .12s ease}',
      '.__qf_check input[type="checkbox"]:focus-visible{outline:2px solid var(--dsw-alias-state-business-primary);outline-offset:2px}',
      '.__qf_check input[type="checkbox"]:disabled{opacity:.5;cursor:default}',
      '@keyframes __qf_jelly{0%{transform:scale(1,1)}30%{transform:scale(1.16,.84)}45%{transform:scale(.9,1.1)}60%{transform:scale(1.06,.94)}80%{transform:scale(.98,1.02)}100%{transform:scale(1,1)}}',


      '.__qf_animCard{animation:__qf_card_in .5s cubic-bezier(.215,.610,.355,1) both}',
      '@keyframes __qf_card_in{from{opacity:0;transform:translateY(18px) scale(.99)}to{opacity:1;transform:translateY(0) scale(1)}}',
      '.__qf_root > .__qf_animCard:nth-child(2){animation-delay:0s}',
      '.__qf_root > .__qf_animCard:nth-child(3){animation-delay:.05s}',
      '.__qf_root > .__qf_animCard:nth-child(4){animation-delay:.10s}',
      '.__qf_root > .__qf_animCard:nth-child(5){animation-delay:.15s}',
      '.__qf_root > .__qf_animCard:nth-child(6){animation-delay:.20s}',
      '.__qf_root > .__qf_animCard:nth-child(7){animation-delay:.25s}',
      '.__qf_root > .__qf_animCard:nth-child(n+8){animation-delay:.30s}',
      '@media (prefers-reduced-motion:reduce){.__qf_animCard{animation:none}}',
      
      '[data-dshqf-composer]{box-shadow:none!important;background-color:transparent!important}',
      '[data-dshqf-composer]:after{display:none!important}',
      
      '[data-dshqf-status]{box-sizing:border-box;display:block;font-size:11px;line-height:16px;margin-top:2px;padding:0 4px;color:var(--dsw-alias-label-caption);text-align:right;white-space:nowrap;pointer-events:none;user-select:none}',
      '[data-dshqf-status][data-kind="assistant"]{text-align:left}',
      
      'body[data-dshqf-chatstyle="1"] [data-queue-dock]{display:none!important}',
      '[data-dshqf-queuecast]{display:flex;flex-direction:column;gap:8px;margin:10px 0 4px;box-sizing:border-box;width:100%;align-self:stretch}',
      '[data-dshqf-queuecast] .__dshqf_qc{display:flex;flex-direction:column;align-items:flex-end;gap:2px;max-width:100%}',
      '[data-dshqf-queuecast] .__dshqf_qcMsg{display:flex;flex-direction:column;align-items:flex-end;width:100%;box-sizing:border-box;min-width:0}',
      '[data-dshqf-queuecast] .__dshqf_qcMsg > *{max-width:100%;box-sizing:border-box}',
      '[data-dshqf-queuecast] .__dshqf_qcBody{display:flex;align-items:flex-start;gap:8px;max-width:100%;justify-content:flex-end;flex-wrap:wrap}',
      '[data-dshqf-queuecast] .__dshqf_qcBubble{box-sizing:border-box;max-width:min(72ch,80%);padding:8px 14px;border-radius:16px;background:var(--dsw-specific-input-major);color:var(--dsw-alias-label-primary);font-size:var(--dsh-content-font-size,14px);line-height:1.5;word-break:break-word;white-space:pre-wrap}',
      '[data-dshqf-queuecast] .__dshqf_qcActions{display:flex;flex-direction:row;align-items:center;gap:10px;flex:none;padding-top:6px}',
      '[data-dshqf-queuecast] .__dshqf_qcBtn{font-size:11px;line-height:16px;color:var(--dsw-alias-state-business-primary);background:0 0;border:none;padding:0 2px;cursor:pointer;white-space:nowrap}',
      '[data-dshqf-queuecast] .__dshqf_qcBtn:hover{text-decoration:underline}',
      '[data-dshqf-queuecast] .__dshqf_qcBtn:disabled{color:var(--dsw-alias-label-caption);cursor:default;text-decoration:none}',
      '[data-dshqf-queuecast] .__dshqf_qcStatus{font-size:11px;line-height:16px;color:var(--dsw-alias-label-caption);text-align:right;padding-right:4px}',
      '[data-dshqf-queuecast] .__dshqf_qcToggle{display:flex;align-items:center;gap:6px;justify-content:flex-end;color:var(--dsw-alias-label-caption);font-size:11px;line-height:16px;background:0 0;border:none;padding:0 4px;cursor:pointer;align-self:flex-end}',
      '[data-dshqf-queuecast] .__dshqf_qcToggle:hover{color:var(--dsw-alias-state-business-primary)}',
      '[data-dshqf-queuecast] .__dshqf_qcDrawer{display:flex;flex-direction:column;gap:8px;align-items:stretch;box-sizing:border-box;width:100%;padding:8px 0 2px}',
      '[data-dshqf-queuecast] .__dshqf_qcItem{display:flex;flex-direction:column;align-items:flex-end;gap:2px;max-width:100%}',
      '[data-dshqf-queuecast] .__dshqf_qcEditor{box-sizing:border-box;display:block;width:100%;max-width:100%;font:inherit;color:inherit;background:transparent;border:none;outline:none;resize:none;min-height:24px;padding:0;line-height:1.5;white-space:pre-wrap;word-break:break-word}',
      
      '[data-dshqf-side-status]{flex:none;color:var(--dsw-alias-label-caption);font-size:11px;line-height:16px}'
    ].join('')
    var tagId = 'dsh-deepseek-chatframe/main.css'
    if (typeof document !== 'undefined') {
      var tag = document.querySelector('style[data-plugin-css="' + tagId + '"]')
      if (tag === null) {
        tag = document.createElement('style')
        tag.dataset.plugin = 'dsh-deepseek-chatframe'
        tag.dataset.pluginCss = tagId
        tag.textContent = CSS
        document.head.appendChild(tag)
      } else if (tag.textContent !== CSS) {

        tag.textContent = CSS
      }
    }



    var APP_CSS_ID = 'dsh-deepseek-chatframe/app.css'
    var KEY_CSS_ID = 'dsh-deepseek-chatframe/anim.css'
    var CUSTOM_CSS_ID = 'dsh-deepseek-chatframe/custom.css'

    var ANIM_CSS = [
      
      '@keyframes dshqf-send-classic{from{opacity:0;transform:scale(.7) translateX(20px)}to{opacity:1;transform:scale(1) translateX(0)}}',
      
      '@keyframes dshqf-send-ios26{0%{opacity:.2;transform:translateY(18px) scale(.82)}18%{opacity:1;transform:translateY(6px) scale(.9)}55%{transform:translateY(0) scale(1.045)}72%{transform:scale(.985)}86%{transform:scale(1.012)}100%{opacity:1;transform:none}}',
      '@keyframes dshqf-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}',
      '@keyframes dshqf-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}',
      '@keyframes dshqf-pulse{0%,100%{filter:brightness(1)}50%{filter:brightness(1.13)}}',
      '@keyframes dshqf-glow{0%,100%{filter:drop-shadow(0 0 0 rgba(255,255,255,0))}50%{filter:drop-shadow(0 0 7px rgba(255,255,255,.85))}}',
      '@keyframes dshqf-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-1px)}75%{transform:translateX(1px)}}'
    ].join('')

    var ANIM_VALUE = {
      sendClassic: 'dshqf-send-classic .4s cubic-bezier(.2,.9,.3,1.1) 1 both',
      sendIos26: 'dshqf-send-ios26 .8s cubic-bezier(.25,1,.35,1) 1 both',
      breathe: 'dshqf-breathe 1.2s ease-in-out 1 both',
      float: 'dshqf-float 1.2s ease-in-out 1 both',
      pulse: 'dshqf-pulse 1.2s ease-in-out 1 both',
      glow: 'dshqf-glow 1.2s ease-in-out 1 both',
      shake: 'dshqf-shake .5s linear 1 both'
    }

    var ANIM_MS = {
      sendClassic: 400, sendIos26: 800,
      breathe: 1200, float: 1200, pulse: 1200, glow: 1200, shake: 500
    }

    var animWatch = []
    function sweepAnimations() {
      if (!animWatch.length) return
      var now = Date.now()
      var keep = []
      for (var i = 0; i < animWatch.length; i += 1) {
        var it = animWatch[i]
        var el = it && it.el
        if (!el) continue
        var expired = now > it.until
        var staleToken = el.__dshqfAnimToken !== it.token
        var detached = (typeof el.isConnected === 'boolean' && !el.isConnected)
        if (expired || staleToken || detached) {
          try { el.style.removeProperty('animation') } catch (e) {}
          if (el.__dshqfAnimToken === it.token) el.__dshqfAnimToken = ''
        } else {
          keep.push(it)
        }
      }
      animWatch = keep
    }
    function watchAnimation(el, token, preset) {
      var ms = ANIM_MS[preset] || 1200
      el.__dshqfAnimToken = token

      for (var i = animWatch.length - 1; i >= 0; i -= 1) {
        if (animWatch[i] && animWatch[i].el === el) animWatch.splice(i, 1)
      }
      animWatch.push({ el: el, token: token, until: Date.now() + ms + 260 })
    }
    var ANIM_LABEL = {
      none: '无',
      sendClassic: 'iMessage 经典发送',
      sendIos26: 'iOS 26 飞入发送',
      breathe: '呼吸',
      float: '浮动',
      pulse: '明暗脉冲',
      glow: '发光',
      shake: '轻抖',
      custom: '自定义 CSS'
    }

    var COMPOSER_PRESET_IMESSAGE = '__imessage__'

    function ensureAppCss() {
      if (typeof document === 'undefined' || !document.head) return
      if (!document.querySelector('style[data-plugin-css="' + APP_CSS_ID + '"]')) {

        var css = [
          '[data-dshqf]{box-shadow:none!important;outline:none!important;box-sizing:border-box!important}',
          '[data-dshqf] a{color:var(--dshqf-link,inherit)!important}'
        ].join('')
        var s = document.createElement('style')
        s.dataset.plugin = 'dsh-deepseek-chatframe'
        s.dataset.pluginCss = APP_CSS_ID
        s.textContent = css
        document.head.appendChild(s)
      }
      if (!document.querySelector('style[data-plugin-css="' + KEY_CSS_ID + '"]')) {
        var k = document.createElement('style')
        k.dataset.plugin = 'dsh-deepseek-chatframe'
        k.dataset.pluginCss = KEY_CSS_ID
        k.textContent = ANIM_CSS
        document.head.appendChild(k)
      } else {

        try {
          var kOld = document.querySelector('style[data-plugin-css="' + KEY_CSS_ID + '"]')
          if (kOld && kOld.textContent !== ANIM_CSS) kOld.textContent = ANIM_CSS
        } catch (e) {}
      }
    }

    function imp(el, prop, val) {
      try { el.style.setProperty(prop, val, 'important') } catch (e) { try { el.style.setProperty(prop, val) } catch (e2) {} }
    }

    
    function impStable(el, prop, val) {
      var v = String(val)
      try {
        if (el.style.getPropertyValue(prop) === v && el.style.getPropertyPriority(prop) === 'important') return
      } catch (e) {}
      imp(el, prop, val)
    }

    
    function fillValue(v) {
      if (!v) return ''
      var s = String(v).trim()
      if (/^rgba?\(/i.test(s)) return s
      return cssHex(s)
    }

    function cssHex(v) {
      if (!v) return ''
      var s = String(v).trim()
      var m = /^0x([0-9a-fA-F]{8})$/.exec(s)
      if (m) return '#' + m[1].slice(2)
      m = /^0x([0-9a-fA-F]{6})$/.exec(s)
      if (m) return '#' + m[1]
      m = /^#([0-9a-fA-F]{6,8})$/.exec(s)
      if (m) return '#' + m[1].slice(0, 6)
      return ''
    }

    function scopeCss(raw) {
      var css = String(raw || '').trim()
      if (!css) return ''
      var out = [], i = 0
      while (i < css.length) {
        var open = css.indexOf('{', i)
        if (open === -1) break
        var sel = css.slice(i, open).trim()
        var depth = 0, end = -1
        for (var j = open; j < css.length; j += 1) {
          if (css[j] === '{') depth += 1
          else if (css[j] === '}') { depth -= 1; if (depth === 0) { end = j; break } }
        }
        if (end === -1) break
        var body = css.slice(open, end + 1)
        if (sel.charAt(0) === '@' || sel.indexOf('[data-dshqf]') !== -1) out.push(sel + body)
        else out.push(sel.split(',').map(function (one) { return '[data-dshqf] ' + one.trim() }).join(',') + body)
        i = end + 1
      }
      return out.join('\n')
    }

    function applyCustomCss(raw) {
      if (typeof document === 'undefined' || !document.head) return
      var old = document.querySelector('style[data-plugin-css="' + CUSTOM_CSS_ID + '"]')
      var css = scopeCss(raw)
      if (!css) { if (old && old.parentNode) old.parentNode.removeChild(old); return }
      if (!old) {
        old = document.createElement('style')
        old.dataset.plugin = 'dsh-deepseek-chatframe'
        old.dataset.pluginCss = CUSTOM_CSS_ID
        document.head.appendChild(old)
      }
      old.textContent = css
    }



    function Field(props) {
      return h('div', { className: '__qf_field' },
        h('label', { className: '__qf_label' }, props.label),
        props.children,
        props.hint ? h('div', { className: '__qf_hint' }, props.hint) : null)
    }
    function Select(props) {
      return h('select', { className: '__qf_select', value: props.value, onChange: function (e) { props.onChange(e.target.value) } },
        props.options.map(function (o) { return h('option', { key: o[0], value: o[0] }, o[1]) }))
    }
    function Check(props) {
      return h('label', { className: '__qf_check' },
        h('input', { type: 'checkbox', checked: !!props.checked, onChange: function (e) { props.onChange(e.target.checked) } }),
        h('span', { className: '__qf_checkText' },
          h('span', null, props.label),
          props.hint ? h('span', { className: '__qf_hint' }, props.hint) : null))
    }
    function Range(props) {
      return h('div', { className: '__qf_row' },
        h('input', { type: 'range', min: props.min, max: props.max, step: props.step || 0.05, value: props.value, style: { flex: '1 1 160px', minWidth: '120px' }, onChange: function (e) { props.onChange(Number(e.target.value)) } }),
        h('span', { className: '__qf_status' }, props.display))
    }
    function obj2(k, v) { var o = {}; o[k] = v; return o }
    
    function dbgNum(v, fallback) {
      var n = Number(v)
      return Number.isFinite(n) ? n : fallback
    }

    
    function tabBtn(name, label, cur, setter) {
      var on = cur === name
      return h('button', {
        key: name,
        onClick: function () { setter(name) },
        style: {
          background: 'transparent',
          border: 'none',
          borderBottom: on ? '2px solid var(--dsw-alias-state-business-primary, #3964fe)' : '2px solid transparent',
          padding: '6px 2px',
          marginRight: '18px',
          cursor: 'pointer',
          fontSize: '13px',
          fontWeight: on ? '700' : '400',
          color: on ? 'var(--dsw-alias-label-primary)' : 'var(--dsw-alias-label-tertiary)'
        }
      }, label)
    }



    function applyTextPad(el, padT, padR, padB, padL, force) {
      if (el.__dshqfOrigPad === undefined) {

        var inline0 = el.style ? el.style.padding : ''
        el.__dshqfOrigInlinePad = inline0 || ''
        el.__dshqfOrigPadAppliedInline = !!inline0
        try {
          var cs0 = window.getComputedStyle(el)
          el.__dshqfOrigPad = [parseFloat(cs0.paddingTop) || 0, parseFloat(cs0.paddingRight) || 0,
            parseFloat(cs0.paddingBottom) || 0, parseFloat(cs0.paddingLeft) || 0]
        } catch (e) { el.__dshqfOrigPad = [0, 0, 0, 0] }
      }
      if (!padT && !padR && !padB && !padL) return
      var want = [Math.round(padT), Math.round(padR), Math.round(padB), Math.round(padL)]
      var wantKey = want.join(',')
      if (el.__dshqfPadKey === wantKey) return
      var orig = el.__dshqfOrigPad || [0, 0, 0, 0]

      var next = force ? [want[0], want[1], want[2], want[3]]
        : [Math.max(orig[0], want[0]), Math.max(orig[1], want[1]),
          Math.max(orig[2], want[2]), Math.max(orig[3], want[3])]
      var nextKey = next.join(',')
      el.__dshqfPadKey = wantKey
      if (nextKey !== el.__dshqfPadApplied) {
        try { imp(el, 'padding', next[0] + 'px ' + next[1] + 'px ' + next[2] + 'px ' + next[3] + 'px') } catch (e) {}
        el.__dshqfPadApplied = nextKey
      }
    }



    function emPxOf(el) {
      if (el && el.__dshqfEm > 0) return el.__dshqfEm
      var em = 0
      try {
        var cs = window.getComputedStyle ? window.getComputedStyle(el) : null
        if (cs) em = parseFloat(cs.fontSize || '')
      } catch (e) { em = 0 }
      if (!(em > 0)) em = 14
      try { el.__dshqfEm = em } catch (e) {}
      return em
    }



    var FALLBACK = {
      enabled: false, userBubble: '', assistantBubble: '', speed: 1, scale: 1,
      sourcesDir: '', renderMode: 'auto', fillInset: 0, fillColor: '#FFF5F8',
      animPreset: 'none', animOnEnter: false,
      padFactor: 4, widthFactor: 1.05, extraHeight: 0, heightFactor: 1.0,
      customCss: '', bubbleOverrides: {}, perfMode: 'medium', preloadContext: true, ultraMinimal: false,
      assistantAlwaysApply: true, assistKeep: 7,
      replaceComposer: false, composerBubble: '',
      disableAllAnim: false,
      chatStyleStatus: false,
      statusReadText: '已读', statusUnreadText: '未读', statusPendingText: '未读',
    }



    function reconcileBubbles(list, st) {
      if (!Array.isArray(list)) return []
      var ovs = (st && st.bubbleOverrides) || {}
      var out = []
      for (var i = 0; i < list.length; i += 1) {
        var b = list[i]
        if (!b || !b.id) { out.push(b); continue }
        var ov = ovs[b.id]
        if (!ov || typeof ov !== 'object') { out.push(b); continue }
        var nb = Object.assign({}, b)
        if (typeof ov.name === 'string' && ov.name) nb.name = ov.name
        if (typeof ov.color === 'string' && ov.color) nb.color = ov.color
        if (typeof ov.linkColor === 'string' && ov.linkColor) nb.linkColor = ov.linkColor
        if (Number.isFinite(Number(ov.timeMs)) && Number(ov.timeMs) > 0) nb.timeMs = Number(ov.timeMs)
        if (Number.isFinite(Number(ov.repeat)) && Number(ov.repeat) > 0) nb.repeat = Number(ov.repeat)
        nb.overrides = ov
        out.push(nb)
      }
      return out
    }



    // 稳定序列化
    function stableStr(v) {
      if (v === null || typeof v !== 'object') return JSON.stringify(v)
      if (Array.isArray(v)) {
        var arr = []
        for (var a = 0; a < v.length; a += 1) arr.push(stableStr(v[a]))
        return '[' + arr.join(',') + ']'
      }
      var keys = Object.keys(v).sort()
      var out = []
      for (var i = 0; i < keys.length; i += 1) out.push(JSON.stringify(keys[i]) + ':' + stableStr(v[keys[i]]))
      return '{' + out.join(',') + '}'
    }

    // 设置面板
    function Panel() {
      var [state, setState] = react.useState(null)
      var [bubbles, setBubbles] = react.useState([])
      var [version, setVersion] = react.useState('')
      var [error, setError] = react.useState(null)
      var [notice, setNotice] = react.useState(null)
      var [busy, setBusy] = react.useState(false)
      var [drag, setDrag] = react.useState(false)
      var [diag, setDiag] = react.useState(null)
      var [open, setOpen] = react.useState('anims')
      var [editId, setEditId] = react.useState('')
      var [animDraft, setAnimDraft] = react.useState(null)
      var [decorDraft, setDecorDraft] = react.useState(null)
      var [, bumpPv] = react.useState(0)
      var [pvSet, setPvSet] = react.useState('bubbleframe')
      var [pvFrame, setPvFrame] = react.useState(1)
      var [pvTab, setPvTab] = react.useState('frame')
      var [pvReady, setPvReady] = react.useState(0)
      var [nbName, setNbName] = react.useState('')
      var [nbColor, setNbColor] = react.useState('#7e7275')
      var [nbConfig, setNbConfig] = react.useState(null)
      var [decorTab, setDecorTab] = react.useState('basic')
      var [framesList, setFramesList] = react.useState([])
      var [barHidden, setBarHidden] = react.useState(false)

      var undoStack = react.useRef([])
      var redoStack = react.useRef([])
      var lastSnapRef = react.useRef(null)
      var pendingSnapRef = react.useRef(null)
      var pendingStateRef = react.useRef(null)

      var savedStateRef = react.useRef(null)

      var savedStateObjRef = react.useRef(null)
      var changedKeysRef = react.useRef({})
      var dirtyKeysCount = function () {
        try { return Object.keys(changedKeysRef.current).length } catch (e) { return 0 }
      }
      var resetDirtyState = function (st) {
        savedStateObjRef.current = st ? Object.assign({}, st) : null
        changedKeysRef.current = {}
        savedStateRef.current = st ? stableStr(st) : null
      }
      var recomputeChangedKeys = function (st) {
        var next = {}
        try {
          var sv = savedStateObjRef.current || {}
          if (st) {
            Object.keys(st).forEach(function (k) {
              var a = Object.prototype.hasOwnProperty.call(sv, k) ? stableStr(sv[k]) : '__missing__'
              if (a !== stableStr(st[k])) next[k] = true
            })
          }
        } catch (e) {}
        changedKeysRef.current = next
      }
      var [histVer, setHistVer] = react.useState(0)

      var [anchorMode, setAnchorMode] = react.useState(false)
      var [anchorPos, setAnchorPos] = react.useState(null)
      var previewRef = react.useRef(null)

      function load() {
        setError(null)

        undoStack.current = []
        redoStack.current = []
        lastSnapRef.current = null
        if (pendingSnapRef.current) { try { clearTimeout(pendingSnapRef.current) } catch (e) {} pendingSnapRef.current = null }
        setHistVer(function (n) { return n + 1 })
        setAnchorMode(false); setAnchorPos(null)
        return fetch(STATE_URL, { headers: { Accept: 'application/json' } })
          .then(function (r) { return r.json() })
          .then(function (j) {
            if (!j || j.ok !== true) throw new Error((j && j.error) || 'load failed')
            var list = reconcileBubbles(Array.isArray(j.bubbles) ? j.bubbles : [], j.state)
            var merged = Object.assign({}, FALLBACK, j.state)
            setState(merged)
            resetDirtyState(merged)
            setBubbles(list)
            ensureEditTarget(list)
            setVersion(j.version || '')
            setAnimDraft(null); setDecorDraft(null)
          })
          .catch(function (e) { setError('读取失败：' + String((e && e.message) || e)) })
      }
      react.useEffect(function () {
        load()
        var iv = setInterval(function () { setDiag(engineReport()) }, 2500)
        return function () { clearInterval(iv) }
      }, [])

      react.useEffect(function () {
        var timer = null, lastY = 0
        function readY(t) {
          if (t && typeof t.scrollTop === 'number' && t !== document) return t.scrollTop
          return window.scrollY || (document.scrollingElement && document.scrollingElement.scrollTop) || 0
        }
        function onScroll(ev) {

          if (ev && ev.isTrusted === false) return
          var t = ev && ev.target
          var y = readY(t)
          var dy = y - lastY
          if (Math.abs(dy) < 8) { lastY = y; return }
          if (dy > 0) setBarHidden(true)
          else setBarHidden(false)
          lastY = y
          if (timer) clearTimeout(timer)
          timer = setTimeout(function () { setBarHidden(false) }, 420)
        }
        window.addEventListener('scroll', onScroll, true)
        return function () {
          window.removeEventListener('scroll', onScroll, true)
          if (timer) clearTimeout(timer)
        }
      }, [])


      react.useEffect(function () {
        var list = bubbles || []
        for (var i = 0; i < list.length; i += 1) {
          var b = list[i]
          if (!b || !b.thumb) continue
          var rec0 = frameImgs[b.id]
          if (rec0 && rec0.ready && rec0.epoch === frameEpoch) continue
          rec0 = frameImgs[b.id] = { imgs: [], ready: true, waiters: [], started: true, epoch: frameEpoch }
          var im = new Image()
          im.onload = function () { bumpPv(function (n) { return n + 1 }) }
          im.src = b.thumb
          rec0.imgs[0] = im
        }
      }, [bubbles && bubbles.length])


      react.useEffect(function () {
        setPvReady(0)
        var iv = setInterval(function () {
          var b0 = (bubbles || []).filter(function (x) { return x.id === (editId || (bubbles[0] || {}).id) })[0]
          if (!b0) return
          var rec0 = frameImgs[b0.id]
          if (rec0 && rec0.ready) { setPvReady(1); clearInterval(iv) }
        }, 400)
        var to = setTimeout(function () {
          var b0 = (bubbles || [])[0]
          var rec0 = b0 ? frameImgs[b0.id] : null
          if (!rec0 || !rec0.ready) setPvReady(2)
          clearInterval(iv)
        }, 3000)
        return function () { clearInterval(iv); clearTimeout(to) }
      }, [bubbles.length, editId])


      react.useEffect(function () {
        if (decorTab === 'frames') loadFrames()
      }, [decorTab, editId, state && state.userBubble])


      react.useEffect(function () {
        var t = setInterval(function () {
          setPvFrame(function (f) { return (f % Math.max(1, PV_COUNT.n)) + 1 })
        }, 120)
        return function () { clearInterval(t) }
      }, [])

      function set(key, value) {
        setNotice(null)
        setState(function (s) {
          var next = Object.assign({}, s, obj2(key, value))
          try {

            var sv = savedStateObjRef.current
            var savedVal = (sv && Object.prototype.hasOwnProperty.call(sv, key)) ? stableStr(sv[key]) : '__missing__'
            if (savedVal !== stableStr(next[key])) changedKeysRef.current[key] = true
            else delete changedKeysRef.current[key]
          } catch (e) { changedKeysRef.current[key] = true }
          return next
        })
      }

      
      function adoptSnapshot(j) {
        var st = (j && j.state) ? Object.assign({}, FALLBACK, j.state) : null
        var srcList = Array.isArray(j && j.bubbles) ? j.bubbles : []
        var list = reconcileBubbles(srcList, st || state)
        if (st) {
          setState(st)

          resetDirtyState(st)
        }
        setBubbles(list)
        ensureEditTarget(list)
        return { state: st, bubbles: list }
      }

      function ensureEditTarget(list) {
        if (!Array.isArray(list) || !list.length) return
        setEditId(function (cur) {
          if (cur && list.some(function (b) { return b.id === cur })) return cur
          return list[0].id
        })
      }

      
      function pushToEngine(st, list) {
        if (!st) return
        try {
          engineState = Object.assign({}, st)
          engineEnabled = st.enabled !== false
          lastBubbles = Array.isArray(list) ? list : []
          preloadSig = ''

          frameEpoch += 1
          try { for (var fk in frameImgs) { if (Object.prototype.hasOwnProperty.call(frameImgs, fk)) delete frameImgs[fk] } } catch (e) {}
          try { for (var mh in MEASURED_HOLE) { if (Object.prototype.hasOwnProperty.call(MEASURED_HOLE, mh)) delete MEASURED_HOLE[mh] } } catch (e) {}
          try { INNER_RECT_CACHE = {} } catch (e) {}
          try { for (var mi in MEASURED_INSETS) { if (Object.prototype.hasOwnProperty.call(MEASURED_INSETS, mi)) delete MEASURED_INSETS[mi] } } catch (e) {}
          if (engineEnabled) {

            for (var k in PAINTED) { if (Object.prototype.hasOwnProperty.call(PAINTED, k)) delete PAINTED[k] }
            try { composeCache.clear() } catch (e) {}
            if (AUTO_SEAM) {
              for (var sk in AUTO_SEAM) { if (Object.prototype.hasOwnProperty.call(AUTO_SEAM, sk)) delete AUTO_SEAM[sk] }
            }
            scan(true)
          } else {
            var painted = []
            try { painted = document.querySelectorAll('[data-dshqf]') } catch (e) { painted = [] }
            for (var i = 0; i < painted.length; i += 1) { try { clearSkin(painted[i]) } catch (e) {} }
          }
        } catch (e) {}
      }

      function save(over) {
        var s0 = over || state
        if (!s0) return Promise.resolve(false)

        var patch0 = Object.assign({}, s0)
        delete patch0.bubbleOverrides
        setBusy(true); setNotice(null); setError(null)
        var done = function () { try { setBusy(false) } catch (e) {} }
        var opts = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ patch: patch0 }) }
        var tm = null
        try {
          var ctrl = new AbortController()
          opts.signal = ctrl.signal
          tm = setTimeout(function () { try { ctrl.abort() } catch (e) {} }, 15000)
        } catch (e) {}
        return fetch(STATE_URL, opts)
          .then(function (r) { return r.json() })
          .then(function (j) {
            if (!j || j.ok !== true) throw new Error((j && j.error) || 'save failed')
            var snap = adoptSnapshot(j)
            setAnimDraft(null); setDecorDraft(null)

            var hostSchema = Number(snap.state && snap.state.schemaVersion) || 0

            var lost = []
            var newBoolKeys = [
              ['chatStyleStatus', '显示聊天风格指令'],
              ['disableAllAnim', '禁用所有气泡动画'],
              ['replaceComposer', '替换原来的输入框为气泡'],
              ['assistantAlwaysApply', '对方气泡无论状态是否空闲始终应用']
            ]
            for (var nb = 0; nb < newBoolKeys.length; nb += 1) {
              var bk = newBoolKeys[nb][0]
              if (patch0[bk] === true && (!snap.state || snap.state[bk] !== true)) lost.push(newBoolKeys[nb][1])
            }
            if (patch0.composerBubble &&
                (!snap.state || snap.state.composerBubble !== patch0.composerBubble)) {
              lost.push('输入框气泡装饰')
            }
            if (patch0.assistKeep !== undefined && Number(patch0.assistKeep) !==
                Number(snap.state && snap.state.assistKeep)) {
              lost.push('对方气泡套几段')
            }
            var statusDefaults = { statusReadText: '已读', statusUnreadText: '未读', statusPendingText: '未读' }
            var statusLabels = { statusReadText: '已读文字', statusUnreadText: '未读文字', statusPendingText: '待下达指令未读文字' }
            for (var sk2 in statusDefaults) {
              if (Object.prototype.hasOwnProperty.call(statusDefaults, sk2) &&
                  patch0[sk2] !== undefined && patch0[sk2] !== statusDefaults[sk2] &&
                  (!snap.state || snap.state[sk2] !== patch0[sk2])) lost.push(statusLabels[sk2])
            }
            if (patch0.animPreset && patch0.animPreset !== 'none' &&
                (!snap.state || snap.state.animPreset !== patch0.animPreset)) {
              lost.push('发送时动画「' + (ANIM_LABEL[patch0.animPreset] || patch0.animPreset) + '」')
            }
            if (lost.length > 0) {
              PENDING_ALWAYS = patch0.assistantAlwaysApply === true
              lastTickSig = ''
              var keep = Object.assign({}, snap.state || state || {})

              for (var ci = 0; ci < newBoolKeys.length; ci += 1) {
                var ck = newBoolKeys[ci][0]
                if (patch0[ck] !== undefined) keep[ck] = patch0[ck]
              }
              if (patch0.composerBubble !== undefined) keep.composerBubble = patch0.composerBubble
              if (patch0.assistKeep !== undefined) keep.assistKeep = patch0.assistKeep
              for (var sk3 in statusDefaults) {
                if (Object.prototype.hasOwnProperty.call(statusDefaults, sk3) &&
                    patch0[sk3] !== undefined) keep[sk3] = patch0[sk3]
              }
              if (patch0.animPreset !== undefined) keep.animPreset = patch0.animPreset
              if (patch0.customCss !== undefined) keep.customCss = patch0.customCss
              try { setState(keep); recomputeChangedKeys(keep) } catch (e) {}
              try { pushToEngine(keep, snap.bubbles) } catch (e) {}
              setError('保存失败：Host 半侧还是旧版本（schemaVersion ' + (hostSchema || '?')
                + '），本次保存的「' + lost.join('、') + '」没有被接受。'
                + '当前会话已保留这些设置；请完全退出 DSH（托盘图标右键退出，不是关窗口）再重新打开，然后再点一次保存')
              return false
            }

            PENDING_ALWAYS = false
            pushToEngine(snap.state, snap.bubbles)
            setNotice(hostSchema && hostSchema < 22
              ? '已保存注意：Host 半侧是旧版本（schemaVersion ' + hostSchema + '），新功能需重启 DSH 才会持久化'
              : '已保存')
            return true
          })
          .catch(function (e) {
            var msg = String((e && e.name === 'AbortError') ? '请求超时（15s），请重开客户端再试' : ((e && e.message) || e))
            setError('保存失败：' + msg)
            return false
          })
          .then(function (ok) {
            if (tm) clearTimeout(tm)
            done()
            return ok
          }, function () {
            if (tm) clearTimeout(tm)
            done()
            return false
          })
      }

      
      function commitThenSave() {
        setNotice(null); setError(null)
        return Promise.resolve()
          .then(function () { return commitDecor() })
          .then(function (ok) {
            if (ok === false) throw new Error('装扮保存失败')
            var next = animDraft ? Object.assign({}, state || {}, animDraft) : state
            return save(next)
          })
          .catch(function (e) { setError('保存失败：' + String((e && e.message) || e)); setBusy(false) })
      }

      
      function loadFrames() {
        if (!targetBubble) return
        fetch(STATE_URL.replace('/state.json', '/frames') + '?id=' + encodeURIComponent(targetBubble.id))
          .then(function (r) { return r.json() })
          .then(function (j) { if (j && j.ok) setFramesList(Array.isArray(j.frames) ? j.frames : []) })
          .catch(function () {})
      }

      
      function frameOp(action, n) {
        if (!targetBubble) return
        var post = function (image) {
          setBusy(true); setError(null)
          fetch(STATE_URL.replace('/state.json', '/frames'), {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: targetBubble.id, action: action, n: n, image: image })
          }).then(function (r) { return r.json() })
            .then(function (j) {
              if (!j || j.ok !== true) throw new Error((j && j.error) || 'failed')
              setFramesList(Array.isArray(j.frames) ? j.frames : [])
              var snap = adoptSnapshot(j)
              pushToEngine(snap.state, snap.bubbles)
              setNotice(action === 'delete' ? '已删除该帧' : (action === 'replace' ? '已替换该帧' : '已添加一帧'))
              setBusy(false)
            })
            .catch(function (e) { setError('操作失败：' + String((e && e.message) || e)); setBusy(false) })
        }
        if (action === 'delete') { post(undefined); return }
        var inp = document.createElement('input')
        inp.type = 'file'; inp.accept = 'image/png'
        inp.onchange = function () {
          var f0 = inp.files && inp.files[0]
          if (!f0) return
          var rd = new FileReader()
          rd.onload = function () { post(String(rd.result || '')) }
          rd.readAsDataURL(f0)
        }
        inp.click()
      }

      
      function deleteBubble() {
        if (!targetBubble) return
        if (typeof window !== 'undefined' && window.confirm && !window.confirm('确定删除气泡包「' + targetBubble.name + '」？该目录下的帧和 config 都会被删除')) return
        setBusy(true); setError(null); setNotice(null)
        fetch(STATE_URL.replace('/state.json', '/delete-bubble'), {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: targetBubble.id })
        }).then(function (r) { return r.text() })
          .then(function (txt) {
            var j = null
            try { j = txt ? JSON.parse(txt) : null } catch (e) { j = null }
            if (!j || j.ok !== true) throw new Error((j && j.error) || '删除失败')
            var snap = adoptSnapshot(j)
            pushToEngine(snap.state, snap.bubbles)
            setEditId(''); setDecorDraft(null); setFramesList([])
            setNotice('已删除气泡包')
            setBusy(false)
          })
          .catch(function (e) { setError('删除失败：' + String((e && e.message) || e)); setBusy(false) })
      }

      
      function importConfigJson() {
        if (!targetBubble) return
        var inp = document.createElement('input')
        inp.type = 'file'; inp.accept = '.json'
        inp.onchange = function () {
          var f0 = inp.files && inp.files[0]
          if (!f0) return
          var rd = new FileReader()
          rd.onload = function () {
            var obj
            try { obj = JSON.parse(String(rd.result || '{}')) } catch (e) { setError('config.json 解析失败'); return }
            setBusy(true); setError(null)
            fetch(STATE_URL.replace('/state.json', '/import-config'), {
              method: 'POST', headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ id: targetBubble.id, config: obj })
            }).then(function (r) { return r.json() })
              .then(function (j) {
                if (!j || j.ok !== true) throw new Error((j && j.error) || 'failed')
                var snap = adoptSnapshot(j)
                pushToEngine(snap.state, snap.bubbles)
                setNotice('已导入 config：' + String(obj.name || f0.name))
                setFramesList([]); loadFrames()
                setBusy(false)
              })
              .catch(function (e) { setError('导入失败：' + String((e && e.message) || e)); setBusy(false) })
          }
          rd.readAsText(f0)
        }
        inp.click()
      }

      
      function newBubbleFlow() {
        var inp = document.createElement('input')
        inp.type = 'file'; inp.accept = '.png,.json,image/png,application/json'; inp.multiple = true
        inp.onchange = function () {
          var files = Array.prototype.slice.call(inp.files || [])
          if (!files.length) return
          var cfg = null, imgs = [], left = files.length
          files.forEach(function (f, idx) {
            var rd = new FileReader()
            var isJson = /\.json$/i.test(f.name)
            rd.onload = function () {
              if (isJson) { try { cfg = JSON.parse(String(rd.result || '{}')) } catch (e) {} }
              else imgs.push(String(rd.result || ''))
              left -= 1
              if (left > 0) return
              setBusy(true); setNotice(null); setError(null)
              fetch(STATE_URL.replace('/state.json', '/create-bubble'), {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: (cfg && cfg.name) ? String(cfg.name) : '未命名', config: cfg || undefined, images: imgs })
              }).then(function (r) { return r.json() })
                .then(function (j) {
                  if (!j || j.ok !== true) throw new Error((j && j.error) || 'create failed')
                  var snap = adoptSnapshot(j)
                  pushToEngine(snap.state, snap.bubbles)
                  var nb = snap.bubbles.filter(function (b) { return b.source && j.dir && String(j.dir).indexOf(b.name) >= 0 })[0]
                  var newId = nb ? nb.id : ((snap.bubbles || []).slice(-1)[0] || {}).id
                  if (newId) { setEditId(newId) }
                  setDecorDraft(null); setOpen('decor'); setDecorTab('basic')
                  setNotice('已新建气泡包：' + String(j.dir || ''))
                  setBusy(false)
                  setTimeout(function () {
                    try {
                      var el = document.querySelector('.__qf_tabs') || document.querySelector('.__qf_detail')
                      if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    } catch (e) {}
                  }, 150)
                })
                .catch(function (e) { setError('新建失败：' + String((e && e.message) || e)); setBusy(false) })
            }
            if (isJson) rd.readAsText(f); else rd.readAsDataURL(f)
          })
        }
        inp.click()
      }
      
      function createBubble() {
        if (!nbName.trim()) { setError('请先填气泡名称'); return }
        var inp = document.createElement('input')
        inp.type = 'file'; inp.accept = 'image/png'; inp.multiple = true
        inp.onchange = function () {
          var files = Array.prototype.slice.call(inp.files || [])
          if (!files.length) return
          setBusy(true); setNotice(null); setError(null)
          var images = [], left = files.length
          files.forEach(function (f, i) {
            var rd = new FileReader()
            rd.onload = function () {
              images[i] = String(rd.result || '')
              left -= 1
              if (left > 0) return
              fetch(STATE_URL.replace('/state.json', '/create-bubble'), {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: nbName.trim(),
                  color: '0xFF' + nbColor.replace('#', ''),
                  config: nbConfig || undefined,
                  images: images
                })
              }).then(function (r) { return r.json() })
                .then(function (j) {
                  if (!j || j.ok !== true) throw new Error((j && j.error) || 'create failed')
                  var snap = adoptSnapshot(j)
                  pushToEngine(snap.state, snap.bubbles)
                  setNotice('已创建气泡包（' + j.frames + ' 帧）：' + j.dir)
                  setBusy(false)
                })
                .catch(function (e) { setError('创建失败：' + String((e && e.message) || e)); setBusy(false) })
            }
            rd.onerror = function () { left -= 1; if (left <= 0) { setBusy(false); setError('读取图片失败') } }
            rd.readAsDataURL(f)
          })
        }
        inp.click()
      }

      function resetAll() {
        setBusy(true); setNotice(null); setError(null)
        fetch(STATE_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'reset' }) })
          .then(function (r) { return r.json() })
          .then(function (j) {
            if (!j || j.ok !== true) throw new Error((j && j.error) || 'reset failed')
            var snap = adoptSnapshot(j)
            pushToEngine(snap.state, snap.bubbles)
            setAnimDraft(null); setDecorDraft(null); setNotice('已恢复默认')
          })
          .catch(function (e) { setError('恢复默认失败：' + String((e && e.message) || e)) })
          .then(function () { setBusy(false) })
      }

      function rescan() {
        setBusy(true); setNotice(null); setError(null)
        fetch(RESCAN_URL, { method: 'POST' })
          .then(function (r) { return r.json() })
          .then(function (j) {
            if (!j || j.ok !== true) throw new Error((j && j.error) || 'rescan failed')
            var snap = adoptSnapshot(j)
            pushToEngine(snap.state, snap.bubbles)
            setNotice('已扫描，共 ' + snap.bubbles.length + ' 个气泡包')
          })
          .catch(function (e) { setError('扫描失败：' + String((e && e.message) || e)) })
          .then(function () { setBusy(false) })
      }


      var decorTargetRef = react.useRef(null)
      function commitDecor() {
        var tb = decorTargetRef.current
        var d = decorDraft
        if (!tb || !d) return Promise.resolve('noop')
        var patch = {}
        if (typeof d.name === 'string' && d.name) patch.name = d.name
        if (typeof d.color === 'string' && d.color) patch.color = d.color
        if (typeof d.linkColor === 'string' && d.linkColor) patch.linkColor = d.linkColor
        if (Number.isFinite(Number(d.timeMs)) && Number(d.timeMs) > 0) patch.timeMs = Number(d.timeMs)
        if (Number.isFinite(Number(d.repeat)) && Number(d.repeat) > 0) patch.repeat = Number(d.repeat)
        var bubbleCfg = {}
        var curZoom = Array.isArray(tb.zoomPoint) ? tb.zoomPoint : [0, 0]
        var wantZoom = Array.isArray(d.zoomPoint) ? d.zoomPoint : [0, 0]
        var zoomChanged = Math.round(Number(wantZoom[0]) || 0) !== Math.round(Number(curZoom[0]) || 0) ||
          Math.round(Number(wantZoom[1]) || 0) !== Math.round(Number(curZoom[1]) || 0)
        if (zoomChanged) {
          bubbleCfg.zoomPoint = [Math.max(0, Math.round(Number(wantZoom[0]) || 0)), Math.max(0, Math.round(Number(wantZoom[1]) || 0))]
        }
        var curFI = tb.frameInsets || tb.slice || { top: 0, right: 0, bottom: 0, left: 0 }
        var wantFI = { top: 0, right: 0, bottom: 0, left: 0 }
        if (d.frameInsets && typeof d.frameInsets === 'object') {
          wantFI = {
            top: Math.max(0, Math.round(Number(d.frameInsets.top) || 0)),
            right: Math.max(0, Math.round(Number(d.frameInsets.right) || 0)),
            bottom: Math.max(0, Math.round(Number(d.frameInsets.bottom) || 0)),
            left: Math.max(0, Math.round(Number(d.frameInsets.left) || 0))
          }
        }
        var cropChanged = ['top', 'right', 'bottom', 'left'].some(function (k) {
          return Math.round(Number(curFI[k]) || 0) !== wantFI[k]
        })
        if (cropChanged) bubbleCfg.frameInsets = wantFI
        var steps = []
        if (Object.keys(bubbleCfg).length) steps.push(function () { return applyBubbleConfig(tb.id, bubbleCfg) })
        if (Object.keys(patch).length) steps.push(function () { return applyOverride(tb.id, patch, false) })
        if (!steps.length) return Promise.resolve('noop')
        var chain = Promise.resolve(true)
        steps.forEach(function (fn) {
          chain = chain.then(function (ok) { return ok === false ? false : fn() })
        })
        return chain
      }

      
      function submitStateSilently(obj) {
        if (!obj) return
        var patch0 = Object.assign({}, obj)
        delete patch0.bubbleOverrides
        try {
          fetch(STATE_URL, {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ patch: patch0 })
          })
            .then(function (r) { return r.json() })
            .then(function (j) {
              if (!j || j.ok !== true) return
              var snap = adoptSnapshot(j)
              pushToEngine(snap.state, snap.bubbles)
            })
            .catch(function () {})
        } catch (e) {}
      }
      function applySnapshot(snap) {
        try {
          var obj = JSON.parse(snap)
          lastSnapRef.current = snap
          var merged = Object.assign({}, FALLBACK, obj)
          setState(merged)
          recomputeChangedKeys(merged)
          submitStateSilently(obj)
        } catch (e) {}
      }
      function flushPendingSnap() {
        if (pendingSnapRef.current) { try { clearTimeout(pendingSnapRef.current) } catch (e) {} pendingSnapRef.current = null }
      }
      function undo() {
        flushPendingSnap()
        if (!undoStack.current.length) return
        var prev = undoStack.current.pop()
        if (lastSnapRef.current) redoStack.current.push(lastSnapRef.current)
        applySnapshot(prev)
        setHistVer(function (n) { return n + 1 })
      }
      function redo() {
        flushPendingSnap()
        if (!redoStack.current.length) return
        var next = redoStack.current.pop()
        if (lastSnapRef.current) undoStack.current.push(lastSnapRef.current)
        applySnapshot(next)
        setHistVer(function (n) { return n + 1 })
      }

      react.useEffect(function () {
        if (!state) return
        pendingStateRef.current = state
        if (pendingSnapRef.current) { try { clearTimeout(pendingSnapRef.current) } catch (e) {} }
        pendingSnapRef.current = setTimeout(function () {
          pendingSnapRef.current = null
          var cur = pendingStateRef.current
          if (!cur) return
          var snap = JSON.stringify(cur)
          if (lastSnapRef.current === null) { lastSnapRef.current = snap; return }
          if (snap === lastSnapRef.current) return
          undoStack.current.push(lastSnapRef.current)
          if (undoStack.current.length > 50) undoStack.current.shift()
          redoStack.current = []
          lastSnapRef.current = snap
          setHistVer(function (n) { return n + 1 })
        }, 400)
      }, [state])

      react.useEffect(function () {
        if (!anchorMode) return undefined
        function onKey(e) { if (e && e.key === 'Escape') { setAnchorMode(false); setAnchorPos(null) } }
        try { window.addEventListener('keydown', onKey) } catch (e) {}
        return function () { try { window.removeEventListener('keydown', onKey) } catch (e) {} }
      }, [anchorMode])

      function applyBubbleConfig(id, payload) {
        if (!id || !payload) return Promise.resolve(false)
        setBusy(true); setNotice(null); setError(null)
        return fetch(BUBBLE_CONFIG_URL, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(Object.assign({ id: id }, payload))
        })
          .then(function (r) { return r.json() })
          .then(function (j) {
            if (!j || j.ok !== true) throw new Error((j && j.error) || 'bubble-config failed')
            var snap = adoptSnapshot(j)
            setDecorDraft(null)
            pushToEngine(snap.state, snap.bubbles)
            setNotice('已应用')
            return true
          })
          .catch(function (e) {
            setError('失败：' + String((e && e.message) || e))
            return false
          })
          .then(function (ok) { setBusy(false); return ok }, function () { setBusy(false); return false })
      }

      function applyOverride(id, patch, clear) {
        if (!id) return Promise.resolve(false)
        setBusy(true); setNotice(null); setError(null)
        return fetch(OVERRIDE_URL, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(clear ? { id: id, clear: true } : { id: id, patch: patch })
        })
          .then(function (r) { return r.json() })
          .then(function (j) {
            if (!j || j.ok !== true) throw new Error((j && j.error) || 'override failed')
            var snap = adoptSnapshot(j)
            setDecorDraft(null); setAnimDraft(null)

            pushToEngine(snap.state, snap.bubbles)
            setNotice(clear ? '已恢复默认' : '已应用')
            return true
          })
          .catch(function (e) {
            setError('失败：' + String((e && e.message) || e))
            return false
          })
          .then(function (ok) { setBusy(false); return ok }, function () { setBusy(false); return false })
      }

      function exportBubble(id) {
        if (!id) return
        var a = document.createElement('a')
        a.href = EXPORT_URL + '?id=' + encodeURIComponent(id)
        document.body.appendChild(a); a.click()
        setTimeout(function () { if (a.parentNode) a.parentNode.removeChild(a) }, 200)
      }

      function uploadFile(file) {
        if (!file) return
        setBusy(true); setNotice(null); setError(null)
        fetch(UPLOAD_URL, { method: 'POST', body: file })
          .then(function (r) { return r.json() })
          .then(function (j) {
            if (!j || j.ok !== true) throw new Error((j && j.error) || 'upload failed')
            var snap = adoptSnapshot(j)
            pushToEngine(snap.state, snap.bubbles)
            setNotice('已导入，共 ' + snap.bubbles.length + ' 个气泡包')
          })
          .catch(function (e) { setError('导入失败：' + String((e && e.message) || e)) })
          .then(function () { setBusy(false) })
      }

      function readEntryFiles(entry, basePath, out, done) {
        if (!entry) { done(); return }
        if (entry.isFile) {
          entry.file(function (file) {
            var rel = basePath ? basePath + '/' + file.name : file.name
            var reader = new FileReader()
            reader.onload = function () {
              var d = reader.result || ''
              var b64 = typeof d === 'string' && d.indexOf('base64,') !== -1 ? d.slice(d.indexOf('base64,') + 7) : ''
              out.push({ path: rel, dataBase64: b64 }); done()
            }
            reader.onerror = function () { done() }
            reader.readAsDataURL(file)
          }, done)
        } else if (entry.isDirectory) {
          var rd = entry.createReader ? entry.createReader() : null
          if (!rd) { done(); return }
          ;(function runner() {
            rd.readEntries(function (entries) {
              if (!entries.length) { done(); return }
              var pending = entries.length
              for (var i = 0; i < entries.length; i += 1) {
                readEntryFiles(entries[i], basePath ? basePath + '/' + entry.name : entry.name, out, function () {
                  pending -= 1; if (pending <= 0) runner()
                })
              }
            }, done)
          })()
        } else { done() }
      }

      function importFolder(files, name) {
        setBusy(true); setNotice(null); setError(null)
        fetch(IMPORT_FOLDER_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: name || 'bubble', files: files }) })
          .then(function (r) { return r.json() })
          .then(function (j) {
            if (!j || j.ok !== true) throw new Error((j && j.error) || 'import folder failed')
            var snap = adoptSnapshot(j)
            pushToEngine(snap.state, snap.bubbles)
            setNotice('已导入文件夹，共 ' + snap.bubbles.length + ' 个气泡包')
          })
          .catch(function (e) { setError('导入失败：' + String((e && e.message) || e)) })
          .then(function () { setBusy(false) })
      }

      function handleDrop(e) {
        e.preventDefault(); setDrag(false)
        var dt = e.dataTransfer
        if (!dt) return
        var items = dt.items || []
        var hasDir = false
        for (var i = 0; i < items.length; i += 1) {
          var e0 = items[i].webkitGetAsEntry ? items[i].webkitGetAsEntry() : null
          if (e0 && e0.isDirectory === true) { hasDir = true; break }
        }
        if (hasDir) {
          var collected = [], pend = 0
          for (var j = 0; j < items.length; j += 1) {
            var en = items[j].webkitGetAsEntry ? items[j].webkitGetAsEntry() : null
            if (!en || !en.isDirectory) continue
            pend += 1
            ;(function (theEntry) {
              readEntryFiles(theEntry, '', collected, function () { pend -= 1; if (pend <= 0) importFolder(collected, theEntry && theEntry.name) })
            })(en)
          }
          return
        }
        var f = dt.files && dt.files[0]
        if (f) uploadFile(f)
      }

      var versionLine = h('div', { className: '__qf_version' },
        '版本 v' + (version || '1.63.0') + ' · 引擎 ' + CLIENT_BUILD)
      if (!state) {
        return h('div', { className: '__qf_root' }, versionLine,
          h('div', { className: '__qf_status' }, error ? error : '读取中…'),
          error ? h('div', { className: '__qf_actions' }, h('button', { className: '__qf_btn', onClick: load }, '重试')) : null)
      }

      var bubbleOpts = [['', '（不使用）']].concat(bubbles.map(function (b) { return [b.id, b.name] }))

      var composerOpts = [[COMPOSER_PRESET_IMESSAGE, 'iMessage输入框（内置）'], ['', '（不使用）']]
        .concat(bubbles.map(function (b) { return [b.id, b.name] }))
      var enabled = state.enabled !== false


      var target = editId || state.userBubble || state.assistantBubble || (bubbles[0] && bubbles[0].id) || ''
      var targetBubble = bubbles.find(function (b) { return b.id === target }) || null
      var base = targetBubble ? (targetBubble.defaults || {}) : {}
      var savedDecor = targetBubble ? {
        name: targetBubble.name,
        color: targetBubble.color,
        linkColor: targetBubble.linkColor,
        zoomPoint: targetBubble.zoomPoint || [0, 0],
        count: targetBubble.count,
        timeMs: targetBubble.timeMs,
        repeat: targetBubble.repeat,
        frameInsets: targetBubble.frameInsets || targetBubble.slice || { top: 18, right: 18, bottom: 18, left: 18 }
      } : null
      decorTargetRef.current = targetBubble
      var decor = decorDraft || savedDecor
      var decorDirty = !!(decorDraft && savedDecor && JSON.stringify(decorDraft) !== JSON.stringify(savedDecor))

      var savedAnim = {
        animPreset: state.animPreset || 'none',
        customCss: state.customCss || '',
        animOnEnter: state.animOnEnter === true
      }
      var anim = animDraft || savedAnim
      var animDirty = !!(animDraft && JSON.stringify(animDraft) !== JSON.stringify(savedAnim))


      var stateDirty = dirtyKeysCount() > 0

      var formDirty = !!(stateDirty || animDirty || decorDirty)

      function animUi() {
        if (!anim) return null
        return h('div', { className: '__qf_detail' },
          h(Field, {
            label: '发送时动画',
            hint: '发送那一刻执行一次（只在发送时播放，不再有常驻循环/一直显示）'
          },
            h(Select, {
              value: anim.animPreset || 'none',
              options: ['none', 'sendClassic', 'sendIos26', 'breathe', 'float', 'pulse', 'glow', 'shake', 'custom']
                .map(function (k) { return [k, ANIM_LABEL[k]] }),
              onChange: function (v) { setAnimDraft(Object.assign({}, anim, { animPreset: v })) }
            })),
          h(Field, {
            label: '每次进入对话应用一次全部消息',
            hint: '默认不勾选：只有用户发送的那一条消息立即执行动画，其他消息不受影响；勾选后每次进入对话给全部消息各播一次'
          },
            h(Check, {
              checked: anim.animOnEnter === true,
              onChange: function (v) { setAnimDraft(Object.assign({}, anim, { animOnEnter: v })) }
            })),
          anim.animPreset === 'custom' ? h(Field, {
            label: '自定义 CSS',
            hint: '选择器会自动作用域到被套壳的气泡元素，例如 .my{animation:...}'
          }, h('textarea', {
            className: '__qf_textarea', spellCheck: false,
            value: anim.customCss || '',
            placeholder: '.my-bubble { animation: myMove 1.2s ease 1 both; }\n@keyframes myMove { from{transform:scale(.8)} to{transform:scale(1)} }',
            onChange: function (e) { setAnimDraft(Object.assign({}, anim, { customCss: e.target.value })) }
          })) : null)
      }

      
      function decorUi() {
        if (!targetBubble || !decor) {
          return h('div', { className: '__qf_detail' }, h('div', { className: '__qf_hint' }, '还没有气泡包 先在素材里导入'))
        }
        if (decorTab === 'frames') return framesUi()
        var fi = decor.frameInsets || {}
        var colorHex = cssHex(decor.color) || '#888888'
        var linkHex = cssHex(decor.linkColor) || '#3964fe'

        var recPv = frameImgs[targetBubble.id]
        var imgPv = recPv && recPv.imgs && recPv.imgs[0]
        var srcW = (imgPv && (imgPv.naturalWidth || imgPv.width)) || Number(targetBubble.frameW) || 128
        var srcH = (imgPv && (imgPv.naturalHeight || imgPv.height)) || Number(targetBubble.frameH) || 112
        var frameW = srcW
        var frameH = srcH

        if (!imgPv) {
          ensureFrames(targetBubble, function () { bumpPv(function (n) { return n + 1 }) })
        }
        var previewReady = !!(imgPv && (imgPv.naturalWidth || imgPv.width) > 0)
        var previewSrc = FRAME_URL + '?b=' + encodeURIComponent(targetBubble.id) + '&n=1'

        var previewVersion = [
          (decor.zoomPoint || [0, 0]).join(','),
          [fi.top, fi.right, fi.bottom, fi.left].join(','),
          decor.name || '', decor.color || '', decor.linkColor || ''
        ].join('|')
        var previewUrl = previewSrc + '&_=' + encodeURIComponent(previewVersion)
        function numField(label, value, hint, apply, min, max) {
          return h(Field, { label: label, hint: hint },
            h('input', {
              className: '__qf_input', type: 'number',
              min: min == null ? 0 : min, max: max == null ? undefined : max,
              value: value,
              onChange: function (e) {
                var nv = Number(e.target.value) || 0
                if (max != null) nv = Math.min(max, nv)
                if (min != null) nv = Math.max(min, nv)
                apply(nv)
              }
            }))
        }
        function insetField(key, label) {

          var capEdge = (key === 'left' || key === 'right') ? frameW : frameH
          var capVal = Math.max(2, Math.round(capEdge * 0.8))
          return h(Field, { key: key, label: label },
            h('input', {
              className: '__qf_input', type: 'number', min: 1, max: capVal,
              value: (fi[key] != null ? fi[key] : 18),
              onChange: function (e) {
                var next = Object.assign({}, fi)
                next[key] = Math.max(1, Math.min(capVal, Number(e.target.value) || 1))

                setDecorDraft(Object.assign({}, decor, { frameInsets: next }))
              }
            }))
        }
        return h('div', { className: '__qf_detail' },
          h('div', { className: '__qf_tabs' },
            tabBtn('basic', '基本信息', decorTab, setDecorTab),
            tabBtn('frames', '帧管理（' + (targetBubble.count || 0) + '）', decorTab, setDecorTab)),
          h(Field, { label: '装扮对象' },
            h(Select, {
              value: target,
              options: bubbles.map(function (b) { return [b.id, b.name] }),
              onChange: function (v) { setEditId(v); setDecorDraft(null) }
            })),
          h(Field, {
            label: '预览',
          },
            h('div', {
              ref: previewRef,
              style: {
                position: 'relative',
                width: frameW + 'px',
                height: frameH + 'px',
                backgroundColor: '#fafafa',
                border: anchorMode ? '2px solid #ff6ec7' : '1px solid #ddd',
                boxShadow: anchorMode ? '0 0 12px rgba(255,110,199,0.85)' : 'none',
                cursor: anchorMode ? 'crosshair' : 'default',
                overflow: 'hidden',
                userSelect: 'none',
                imageRendering: 'pixelated'
              },
              onMouseMove: anchorMode ? function (e) {
                var el = previewRef.current
                if (!el || !el.getBoundingClientRect) return
                var r = el.getBoundingClientRect()

                var mx = Math.round(e.clientX - r.left)
                var my = Math.round(e.clientY - r.top)

                setAnchorPos({
                  x: Math.max(0, Math.min(r.width, mx)),
                  y: Math.max(0, Math.min(r.height, my)),
                  sx: Math.round(mx / Math.max(1, r.width) * srcW),
                  sy: Math.round(my / Math.max(1, r.height) * srcH)
                })
              } : undefined,
              onMouseLeave: anchorMode ? function () { setAnchorPos(null) } : undefined,
              onClick: anchorMode ? function (e) {
                var el = previewRef.current
                if (!el || !el.getBoundingClientRect || !targetBubble) return
                var r = el.getBoundingClientRect()

                var px = Math.round((e.clientX - r.left) / Math.max(1, r.width) * srcW)
                var py = Math.round((e.clientY - r.top) / Math.max(1, r.height) * srcH)
                px = Math.max(0, Math.min(srcW, px))
                py = Math.max(0, Math.min(srcH, py))

                setDecorDraft(Object.assign({}, decor, {
                  zoomPoint: [px, py]
                }))
                setAnchorMode(false); setAnchorPos(null)
              } : undefined
            },

              h('img', {
                key: 'pv-' + previewVersion,
                src: previewUrl,
                alt: '',
                draggable: false,
                style: {
                  position: 'absolute', left: 0, top: 0,
                  width: frameW + 'px', height: frameH + 'px',
                  imageRendering: 'pixelated', pointerEvents: 'none'
                }
              }),

              !anchorMode && Array.isArray(decor.zoomPoint) ? h('div', {
                style: {
                  position: 'absolute',
                  left: (Math.max(0, Math.min(frameW, (Number(decor.zoomPoint[0]) || 0) / Math.max(1, srcW) * frameW)) - 4) + 'px',
                  top: (Math.max(0, Math.min(frameH, (Number(decor.zoomPoint[1]) || 0) / Math.max(1, srcH) * frameH)) - 4) + 'px',
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#3964fe', border: '2px solid #fff',
                  pointerEvents: 'none',
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.3)'
                }
              }) : null,

              anchorMode && anchorPos ? h('div', {
                style: { position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, pointerEvents: 'none' }
              },
                h('div', { style: { position: 'absolute', left: 0, right: 0, top: anchorPos.y + 'px', height: '1px', background: '#ff6ec7' } }),
                h('div', { style: { position: 'absolute', top: 0, bottom: 0, left: anchorPos.x + 'px', width: '1px', background: '#ff6ec7' } }),
                h('div', {
                  style: {
                    position: 'absolute', left: (anchorPos.x - 4) + 'px', top: (anchorPos.y - 4) + 'px',
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: '#ff6ec7', border: '1px solid #fff'
                  }
                }),
                h('div', {
                  style: {
                    position: 'absolute', right: '4px', bottom: '2px',
                    fontSize: '10px', lineHeight: '1.2', color: '#fff',
                    background: 'rgba(255,110,199,0.9)', borderRadius: '3px', padding: '0 3px'
                  }
                }, (anchorPos.sx != null ? anchorPos.sx : anchorPos.x) + ',' + (anchorPos.sy != null ? anchorPos.sy : anchorPos.y))
              ) : null
            ),
            h('div', { className: '__qf_actions', style: { marginTop: '6px' } },
              h('button', {
                className: '__qf_btn' + (anchorMode ? ' __qf_btnPrimary' : ''),

                disabled: !previewReady && !anchorMode,
                onClick: function () { setAnchorMode(function (v) { return !v }); setAnchorPos(null) }
              }, anchorMode ? '取消选点' : '选锚点'),
              !previewReady ? h('span', { className: '__qf_hint' }, '预览加载中…加载完才能选锚点') : null,
              anchorMode ? h('span', { className: '__qf_hint' }, '在预览图上点一下 = 设为锚点（坐标直接取素材像素），ESC 取消') : null,
              h('span', { className: '__qf_hint' },
                '锚点 ' + ((decor.zoomPoint || [0, 0]).join(','))
                + ' · 裁切 上' + (fi.top || 0) + ' 右' + (fi.right || 0)
                + ' 下' + (fi.bottom || 0) + ' 左' + (fi.left || 0)))),
          h('div', { className: '__qf_grid2' },
            h(Field, { label: '名称' },
              h('input', {
                className: '__qf_input', value: decor.name || '',
                onChange: function (e) { setDecorDraft(Object.assign({}, decor, { name: e.target.value })) }
              })),
            h(Field, { label: '文字色', hint: 'config.color（默认 ' + (base.color || '—') + '）' },
              h('input', {
                type: 'color', className: '__qf_color', value: colorHex,
                onChange: function (e) { setDecorDraft(Object.assign({}, decor, { color: e.target.value })) }
              }))),
          h('div', { className: '__qf_grid2' },
            h(Field, { label: '链接色', hint: 'config.link_color（默认 ' + (base.linkColor || '—') + '）' },
              h('input', {
                type: 'color', className: '__qf_color', value: linkHex,
                onChange: function (e) { setDecorDraft(Object.assign({}, decor, { linkColor: e.target.value })) }
              })),

            h(Field, { label: '帧数'},
              h('input', {
                className: '__qf_input', type: 'text', readOnly: true, tabIndex: -1,
                value: String((targetBubble && targetBubble.count) || decor.count || 0),
                style: { opacity: '0.75', cursor: 'not-allowed' }
              }))),
          h('div', { className: '__qf_groupTitle', style: { marginTop: '10px' } }, '该气泡的 config'),
          h('div', { className: '__qf_grid2' },
            numField('锚点 X', (decor.zoomPoint || [0, 0])[0], 'config.zoom_point[0]', function (v) {
              var yX = (decor.zoomPoint || [0, 0])[1]
              setDecorDraft(Object.assign({}, decor, {
                zoomPoint: [v, yX]
              }))
            }, 0, srcW),
            numField('锚点 Y', (decor.zoomPoint || [0, 0])[1], 'config.zoom_point[1]', function (v) {
              var xY = (decor.zoomPoint || [0, 0])[0]
              setDecorDraft(Object.assign({}, decor, {
                zoomPoint: [xY, v]
              }))
            }, 0, srcH)),
          h('div', { className: '__qf_grid2' },
            numField('帧时长 ms', decor.timeMs, 'animation_sets.time', function (v) {
              setDecorDraft(Object.assign({}, decor, { timeMs: Math.max(20, v) }))
            }, 20),
            numField('循环次数', decor.repeat, 'animation_sets.repeat', function (v) {
              setDecorDraft(Object.assign({}, decor, { repeat: Math.max(1, v) }))
            }, 1)),
          h('div', { className: '__qf_hint' }, '裁切位置'),
          h('div', { className: '__qf_grid' },
            insetField('top', '上'),
            insetField('right', '右'),
            insetField('bottom', '下'),
            insetField('left', '左')),
          h('div', { className: '__qf_actions' },
            h('button', { className: '__qf_btn __qf_btnPrimary', disabled: busy || !decorDirty, onClick: commitDecor }, '保存装扮'),
            h('button', { className: '__qf_btn', disabled: busy, onClick: importConfigJson }, '导入 JSON'),
            h('button', { className: '__qf_btn', disabled: busy, onClick: deleteBubble }, '删除气泡'),
            h('button', {
              className: '__qf_btn', disabled: busy,
              onClick: function () { setDecorDraft(null); applyOverride(targetBubble.id, null, true) }
            }, '恢复默认'),
            h('button', { className: '__qf_btn', disabled: busy, onClick: function () { exportBubble(targetBubble.id) } }, '导出'),
            decorDirty ? h('span', { className: '__qf_changed' }, '改动会在底部「保存」时一起提交') : null))
      }

      
      function framesUi() {
        return h('div', { className: '__qf_detail' },
          h('div', { className: '__qf_tabs' },
            tabBtn('basic', '基本信息', decorTab, setDecorTab),
            tabBtn('frames', '帧管理（' + framesList.length + '）', decorTab, setDecorTab)),
          h('div', { className: '__qf_hint' }, '按文件名顺序播放可删除单帧、替换单帧，或追加新帧'),
          h('div', { className: '__qf_frameGrid' }, framesList.map(function (fr) {
            return h('div', { className: '__qf_frameItem', key: 'f' + fr.n },
              h('img', {
                src: FRAME_URL + '?b=' + encodeURIComponent(targetBubble.id) + '&n=' + fr.n,
                style: { width: '72px', height: 'auto', background: '#fff', border: '1px solid #ddd', borderRadius: '4px' }
              }),
              h('div', { className: '__qf_frameName' }, fr.file),
              h('div', { className: '__qf_row', style: { gap: '4px' } },
                h('button', { className: '__qf_btn __qf_btnSm', disabled: busy, onClick: function () { frameOp('replace', fr.n) } }, '替换'),
                h('button', { className: '__qf_btn __qf_btnSm', disabled: busy, onClick: function () { frameOp('delete', fr.n) } }, '删除')))
          })),
          h('div', { className: '__qf_actions' },
            h('button', { className: '__qf_btn', disabled: busy, onClick: function () { frameOp('add', 0) } }, '添加帧'),
            h('button', { className: '__qf_btn', disabled: busy, onClick: function () { loadFrames() } }, '刷新列表')))
      }
      
      function animsUi() {
        if (!targetBubble) {
          return h('div', { className: '__qf_detail' }, h('div', { className: '__qf_hint' }, '还没有气泡包 先在素材里导入'))
        }
        var previewOptions = bubbles.map(function (b) { return [b.id, b.name] })
        var have = (targetBubble.anims && typeof targetBubble.anims === 'object') ? targetBubble.anims : {}
        var cnt = (have['bubbleframe'] && have['bubbleframe'].count) || targetBubble.count || 0
        PV_COUNT.n = Math.max(1, cnt)
        var showFrame = ((pvFrame - 1) % PV_COUNT.n) + 1
        var frameSrc = FRAME_URL + '?b=' + encodeURIComponent(targetBubble.id) + '&n=' + (((pvFrame - 1) % Math.max(1, cnt)) + 1)
        var fillC = cssHex(state.fillColor) || '#FFF5F8'
        var textC = cssHex(targetBubble.color) || '#888888'
        var TABS = [['frame', '显示'], ['anim', '气泡动画'], ['decor', '气泡装扮'], ['fill', '填充块']]

        function tabBtn(k, zh) {
          var on = pvTab === k
          return h('button', {
            key: k,
            onClick: function () { setPvTab(k) },
            style: {
              background: 'transparent',
              border: 'none',
              borderBottom: on ? '2px solid var(--dsw-alias-state-business-primary,#3964fe)' : '2px solid transparent',
              padding: '6px 2px',
              marginRight: '16px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: on ? '700' : '400',
              color: on ? 'var(--dsw-alias-label-primary)' : 'var(--dsw-alias-label-tertiary)'
            }
          }, zh)
        }

        var body = null
        if (pvTab === 'fill') {
          body = h('div', { style: { width: '200px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
            h('div', { style: { width: '100%', height: '100%', background: fillC, borderRadius: '0' } }))
        } else if (pvTab === 'decor') {
          var fi2 = Math.max(0, Number(state.fillInset) || 0)
          var extra2 = Math.round(Math.min(200, 74) * fi2 / 100)
          var innerW = Math.max(8, 200 - extra2 * 2)
          var innerH = Math.max(8, 74 - extra2 * 2)
          body = h('div', { style: { display: 'flex', flexDirection: 'column', gap: '6px' } },
            h('img', { src: frameSrc, style: { width: '200px', height: '74px', border: '1px solid #ddd' } }),
            h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
              h('div', { style: { width: innerW + 'px', height: innerH + 'px', minHeight: '10px', background: fillC, border: '1px solid #ccc' } }),
              h('span', { style: { color: textC, fontSize: '12px' } }, '文字 ' + (cssHex(targetBubble.color) || ''))))
        } else {

          var pvUrl = ''
          var recP = frameImgs[targetBubble.id]
          if (!recP || !recP.ready) {
            ensureFrames(targetBubble, function () { bumpPv(function (n) { return n + 1 }) })
          } else {
            try {
              var pw = 200, ph = 60
              var resA = composeAuto(targetBubble, showFrame, pw, ph, {
                fillColor: resolveFill(targetBubble),
                insets: targetBubble.frameInsets || targetBubble.slice || {}
              })
              pvUrl = resA && resA.url ? resA.url : ''
            } catch (e) { pvUrl = '' }
          }
          var st2 = { width: '200px', height: pvUrl ? (ph + 'px') : 'auto', background: '#fff', border: '1px solid #ddd', borderRadius: '0' }
          if (pvTab === 'anim' && ANIM_VALUE[state.animPreset || 'none']) st2 = Object.assign({}, st2, { animation: ANIM_VALUE[state.animPreset] })
          body = h('img', { src: pvUrl || frameSrc, style: st2 })
        }

        return h('div', { className: '__qf_detail' },
          h(Field, { label: '预览对象' },
            h(Select, {
              value: target,
              options: previewOptions,
              onChange: function (v) { setEditId(v); setDecorDraft(null) }
            })),
          h('div', { style: { display: 'flex', borderBottom: '1px solid var(--dsw-alias-border-l2)' } },
            TABS.map(function (t) { return tabBtn(t[0], t[1]) })),
          h('div', { className: '__qf_hint', style: { marginTop: '8px' } }, '当前帧 ' + showFrame + ' / ' + cnt + '（自动轮播）'),
          body)
      }
      function entry(key, title, summary) {
        var isOpen = open === key
        return h('div', {
          className: '__qf_entry' + (isOpen ? ' __qf_entry_open' : ''),
          onClick: function () { setOpen(isOpen ? '' : key) }
        },
          h('div', { className: '__qf_entryL' },
            h('span', { className: '__qf_entryName' }, title),
            summary ? h('span', { className: '__qf_entryVal' }, summary) : null),
          h('span', { className: '__qf_arrow' }, isOpen ? '▾' : '▸'))
      }
      
      function acc(key, title, summary, render) {
        var isOpen = open === key
        return h('div', { className: '__qf_acc' },
          entry(key, title, summary),
          isOpen ? render() : null)
      }


      function decorGroup() {
        if (!enabled) return null
        var kids = Array.prototype.slice.call(arguments)
        return h.apply(null, ['div', { className: '__qf_group __qf_animCard' }].concat(kids))
      }

      return h('div', { className: '__qf_root' },
        versionLine,

        h('div', { className: '__qf_group __qf_animCard' },
          h('div', { className: '__qf_groupTitle' }, 'DeepSeek聊天框'),
          h(Check, {
            label: '启用聊天气泡皮肤',
            hint: '启动插件',
            checked: enabled,
            onChange: function (v) { set('enabled', v) }
          }),

          enabled ? h(Field, {
            label: '性能模式',
          },
            h(Select, {
              value: (state.perfMode === 'normal' || state.perfMode === 'ultra') ? state.perfMode : 'medium',
              options: [
                ['normal', '性能优先'],
                ['medium', '中等'],
                ['ultra', '极致']
              ],
              onChange: function (v) { set('perfMode', v) }
            })) : null,
          enabled ? h(Check, {
            label: '替换原来的输入框为气泡',
            hint: '把选中的气泡作为输入框背景；只改背景与内边距，不影响输入、光标与文字显示',
            checked: state.replaceComposer === true,
            onChange: function (v) {
              set('replaceComposer', v)
              if (!v) return

              if (!state.composerBubble) set('composerBubble', COMPOSER_PRESET_IMESSAGE)
            }
          }) : null,

          enabled && state.replaceComposer === true ? h('div', { className: '__qf_subpanel' },
            h(Field, {
              label: '输入框气泡装饰',
              hint: '导入的气泡后可以将气泡变为输入框装饰'
            },
              h(Select, {
                value: state.composerBubble || '',
                options: composerOpts,
                onChange: function (v) { set('composerBubble', v) }
              }))
          ) : null,
          enabled ? h(Check, {
            label: '无论状态是否空闲，始终应用气泡',
            hint: 'DeepSeek「输出完成 / 空闲」后折叠起来的过程控件会销毁气泡'
              + '打开后：折叠/空闲状态也照常套壳并保留',
            checked: state.assistantAlwaysApply === true,
            onChange: function (v) { set('assistantAlwaysApply', v) }
          }) : null,
          enabled ? h(Check, {
            label: '预加载气泡',
            hint: '提前把气泡帧取到内存',
            checked: state.preloadContext !== false,
            onChange: function (v) { set('preloadContext', v) }
          }) : null,
          enabled ? h(Check, {
            label: '超极致模式',
            hint: '只给「当前屏幕上下文 + 上下一点」套气泡，其余移除',
            checked: state.ultraMinimal === true,
            onChange: function (v) { set('ultraMinimal', v) }
          }) : null,
          enabled ? h(Check, {
            label: '禁用所有气泡动画',
            hint: '开启后所有气泡（含输入框）只显示第 1 帧，发送时动画也不播放；同时停掉帧动画定时器',
            checked: state.disableAllAnim === true,
            onChange: function (v) { set('disableAllAnim', v) }
          }) : null,
          h(Check, {
            label: '显示聊天风格指令',
            hint: '消息下方显示「已读 / 未读」；待下达指令（排队消息）按已发送样式显示为未读，并提供插话发送',
            checked: state.chatStyleStatus === true,
            onChange: function (v) { set('chatStyleStatus', v) }
          }),
          state.chatStyleStatus === true ? h('div', { className: '__qf_subpanel' },
            h(Field, { label: '已读文字' },
              h('input', {
                className: '__qf_input', value: state.statusReadText || '',
                placeholder: '已读',
                onChange: function (e) { set('statusReadText', e.target.value) }
              })),
            h(Field, { label: '未读文字' },
              h('input', {
                className: '__qf_input', value: state.statusUnreadText || '',
                placeholder: '未读',
                onChange: function (e) { set('statusUnreadText', e.target.value) }
              })),
            h(Field, { label: '待下达指令未读文字' },
              h('input', {
                className: '__qf_input', value: state.statusPendingText || '',
                placeholder: '未读',
                onChange: function (e) { set('statusPendingText', e.target.value) }
              }))) : null
        ),

        decorGroup(
          h('div', { className: '__qf_groupTitle' }, '气泡选择'),
          h('div', { className: '__qf_grid2' },
            h(Field, { label: '我发的消息' },
              h(Select, { value: state.userBubble || '', options: bubbleOpts, onChange: function (v) { set('userBubble', v) } })),
            h(Field, { label: '对方消息' },
              h(Select, { value: state.assistantBubble || '', options: bubbleOpts, onChange: function (v) { set('assistantBubble', v) } }))
          ),
          h(Field, {
            label: '我方内边距补偿（px）',
            hint: '仅影响「我发的消息」，只调左右正值 = 文字离左右边框更远（内容区变窄），'
              + '负值 = 更贴边，0 = 不干预下限受元素原始 padding 保护'
          },
            h(Range, {
              value: dbgNum(state.userMinPad, 0), min: -50, max: 50, step: 1,
              display: (dbgNum(state.userMinPad, 0) > 0 ? '+' : '') + dbgNum(state.userMinPad, 0) + 'px',
              onChange: function (v) { set('userMinPad', v) }
            })),
          h(Field, {
            label: 'DeepSeek气泡内边距补偿（px）',
            hint: '仅影响「DeepSeek输出消息」，只调左右正值 = 文字离左右边框更远（内容区变窄），'
              + '负值 = 更贴边，0 = 不干预下限受元素原始 padding 保护'
          },
            h(Range, {
              value: dbgNum(state.assistantMinPad, 0), min: -50, max: 50, step: 1,
              display: (dbgNum(state.assistantMinPad, 0) > 0 ? '+' : '') + dbgNum(state.assistantMinPad, 0) + 'px',
              onChange: function (v) { set('assistantMinPad', v) }
            })),
          h('div', { className: '__qf_diag' },
            h('div', null, enabled ? '已启用' : '未启用'),

            h('div', null, (function () {
              var a0 = diag && diag.assist
              if (!a0) return 'DeepSeek气泡：等待首轮扫描…'
              if (a0.applied > 0) return 'DeepSeek气泡：正常（本页 ' + a0.applied + ' 块已套壳 / 共扫描 ' + a0.total + ' 条）'
              return 'DeepSeek气泡：未套壳 —— ' + (a0.reason || '原因未知')
            })())
          )
        ),


        decorGroup(
          h('div', { className: '__qf_groupTitle' }, '动画预览'),
          animsUi()
        ),


        h('div', { className: '__qf_group __qf_animCard' },
          h('div', { className: '__qf_groupTitle' }, '外观'),

          acc('anim', '气泡动画', ANIM_LABEL[(anim && anim.animPreset) || 'none'], animUi),
          enabled ? acc('decor', '气泡装扮', targetBubble ? targetBubble.name : '未选择', decorUi) : null
        ),

        decorGroup(
          h('div', { className: '__qf_groupTitle' }, '外观细节'),
          h(Field, { label: '填充色覆盖', hint: '留空 = 自动取帧图白底平均色' },
            h('input', {
              className: '__qf_input', value: state.fillColor || '', placeholder: '自动（留空）',
              onChange: function (e) { set('fillColor', e.target.value) }
            })),
          h(Field, { label: '动画速度', hint: '气泡包自带帧动画的倍率' },
            h(Range, { value: Number(state.speed) || 1, min: 0.1, max: 3, display: (Number(state.speed) || 1).toFixed(2) + '×', onChange: function (v) { set('speed', v) } })),
          h(Field, { label: '气泡缩放', hint: '1 = 原尺寸' },
            h(Range, { value: Number(state.scale) || 1, min: 0.4, max: 2.5, step: 0.1, display: (Number(state.scale) || 1).toFixed(1) + '×', onChange: function (v) { set('scale', v) } })),
          h(Field, { label: '对方气泡套几段', hint: '只给最近 N 段 DeepSeek 输出套气泡' },
            h(Range, {
              value: Math.max(1, Math.min(50, Number(state.assistKeep) || 7)),
              min: 1, max: 20, step: 1,
              display: String(Math.max(1, Math.min(50, Number(state.assistKeep) || 7))),
              onChange: function (v) { set('assistKeep', v) }
            })),
        ),

        decorGroup(
          h('div', { className: '__qf_groupTitle' }, '素材'),
          h(Field, { label: '素材目录' },
            h('input', { className: '__qf_input', value: state.sourcesDir || '', onChange: function (e) { set('sourcesDir', e.target.value) } })),
          h('div', {
            className: '__qf_uploadbox' + (drag ? ' drag' : ''),
            onDragOver: function (e) { e.preventDefault(); setDrag(true) },
            onDragLeave: function () { setDrag(false) },
            onDrop: function (e) { handleDrop(e) },
            onClick: function () {
              var inp = document.createElement('input')
              inp.type = 'file'; inp.accept = '.zip'
              inp.onchange = function () { if (inp.files && inp.files[0]) uploadFile(inp.files[0]) }
              inp.click()
            }
          }, '拖入 .zip 或整个文件夹，或点此选择 .zip'),
          h('div', { className: '__qf_actions', style: { marginTop: '12px' } },
            h('button', { className: '__qf_btn __qf_btnPrimary', disabled: busy, onClick: newBubbleFlow }, '新建气泡')),
          h('div', { className: '__qf_hint' }, '点「新建气泡」后可选 PNG 帧和/或 config.json；建好后会自动跳到「气泡装扮」并选中它')
        ),

        h('div', {
          className: '__qf_actions __qf_savebar',
          style: {
            position: 'sticky', bottom: '0', zIndex: 6,
            transform: barHidden ? 'translateY(115%)' : 'translateY(0)',
            transition: 'transform .22s ease',
            background: 'transparent',
            borderTop: 'none',
            paddingTop: '10px', paddingBottom: '10px', marginTop: '10px',
            paddingLeft: '24px', paddingRight: '24px'
          }
        },
          h('button', { className: '__qf_btn' + (formDirty ? ' __qf_btnPrimary' : ''), disabled: busy || !formDirty, onClick: commitThenSave }, busy ? '保存中…' : '保存'),
          undoStack.current.length ? h('button', { className: '__qf_btn', disabled: busy, onClick: undo }, '撤销') : null,
          redoStack.current.length ? h('button', { className: '__qf_btn', disabled: busy, onClick: redo }, '重做') : null,
          h('button', { className: '__qf_btn', disabled: busy, onClick: rescan }, '刷新气泡'),
          h('button', { className: '__qf_btn', disabled: busy, onClick: resetAll }, '恢复默认'),
          h('button', { className: '__qf_btn', disabled: busy, onClick: load }, '放弃修改'),
          notice ? h('span', { className: '__qf_ok' }, notice) : null,
          error ? h('span', { className: '__qf_err' }, error) : null
        )
      )
    }



    var engineEnabled = false
    var engineState = null
    var lastBubbles = []
    var lastReport = { user: 0, assistant: 0 }

    var lastAssistDiag = { reason: '', total: 0, keep: 0, from: 0, cands: 0, applied: 0 }
    var frameTimers = {}
    var lastApplySig = ''
    var lastStructuralSig = ''
    var lastTickSig = ''
    var lastDomSig = ''

    // 构建标记
    var CLIENT_BUILD = '1.0.4'
    var MD_MAX_WIDTH = 0
    var frameTick = {}
    var frameMeta = {}
    var frameImgs = {}

    var frameEpoch = 0

    var globalMo = null

    var bubbleEls = {}
    var scanScheduled = false
    var lastCustomCss = null
    var resizeObs = typeof window !== 'undefined' && typeof window.ResizeObserver === 'function'
      ? new Map() : null

    
    var composeCache = new Map()
    var COMPOSE_MAX = 480
    function cacheGet(k) { return composeCache.get(k) }
    function cacheSet(k, v) {
      if (composeCache.size >= COMPOSE_MAX) {
        var first = composeCache.keys().next()
        if (!first.done) composeCache.delete(first.value)
      }
      composeCache.set(k, v)
    }

    
    var EXCLUDE_SEL = [
      '[data-composer-input]', '[data-composer-card]', '[data-composer-seat]', '[data-composer-text-ref]',
      '[data-input-scroll]', '[data-queue-dock]', '[data-conversation-composer-overlay]'
    ].join(',')

    function inComposer(el) {
      try { return !!(el.closest && el.closest(EXCLUDE_SEL)) } catch (e) { return false }
    }
    function inTranscript(el) {
      try {
        return !!(el.closest && el.closest(
          '[data-chat-flow], [data-conversation-content], [data-conversation-scroll], ' +
          '[data-chat-flow-kind], [data-chat-turn]'
        ))
      } catch (e) { return false }
    }

    
    


    // 帧加载
    function ensureFrames(bubble, cb) {
      var want = Math.max(1, Number(bubble.count) || 1)
      var rec = frameImgs[bubble.id]
      if (rec && rec.epoch !== frameEpoch) { delete frameImgs[bubble.id]; rec = null }
      if (rec && rec.ready && rec.imgs.length !== want) { delete frameImgs[bubble.id]; rec = null }
      if (rec && rec.ready) { cb(rec); return }
      if (!rec) rec = frameImgs[bubble.id] = { imgs: [], ready: false, waiters: [], started: false, epoch: frameEpoch }
      rec.waiters.push(cb)
      if (rec.started) return
      rec.started = true
      var loaded = 0
      function done(img, idx) {

        if (rec.epoch !== frameEpoch) return
        if (img && idx != null) rec.imgs[idx] = img
        loaded += 1
        if (loaded < want) return
        rec.ready = true
        var ws = rec.waiters; rec.waiters = []
        for (var w = 0; w < ws.length; w += 1) { try { ws[w](rec) } catch (e) {} }
      }
      for (var i = 0; i < want; i += 1) {
        (function (idx) {
          var im
          try { im = new Image() } catch (e) { done(); return }
          im.onload = function () { done(im, idx) }
          im.onerror = function () { done(im, idx) }
          try { im.src = FRAME_URL + '?b=' + encodeURIComponent(bubble.id) + '&n=' + (idx + 1) } catch (e) { done(); return }
        })(i)
      }
    }



    var preloadSig = ''
    function preloadBubbles(state) {
      try {
        if (!state || !lastBubbles) return

        if (!state.preloadContext) return
        var sig = (state.userBubble || '') + '|' + (state.assistantBubble || '') + '|' + lastBubbles.length
        if (sig === preloadSig) return
        preloadSig = sig
        for (var pi = 0; pi < lastBubbles.length; pi += 1) {
          var pb = lastBubbles[pi]
          if (!pb || !pb.id) continue
          ensureFrames(pb, function () {})
        }
      } catch (e) {}
    }



    var AUTO_SEAM = {}
    var PAINTED = {}
    var PV_COUNT = { n: 24 }

    function seamOf(bubble, img, cb) {

      var zp = Array.isArray(bubble && bubble.zoomPoint) ? bubble.zoomPoint : null
      var zx = zp ? Number(zp[0]) : 0
      var zy = zp ? Number(zp[1]) : 0

      var hasAnchorX = !!(zp && Number.isFinite(zx) && zx > 0)
      var hasAnchorY = !!(zp && Number.isFinite(zy) && zy > 0)

      // 有锚点时锚点优先 仅在没有锚点时才用旧裁切点当拉伸缝
      var fiU = (bubble && (bubble.sliceSource === 'user' || bubble.sliceSource === 'config') &&
        bubble.frameInsets && !hasAnchorX && !hasAnchorY) ? bubble.frameInsets : null
      var seamKey = bubble.id + '|' +
        (fiU ? 'u' + (Number(fiU.left) | 0) + ',' + (Number(fiU.top) | 0) : 'a') + '|' +
        (hasAnchorX ? 'x' + (zx | 0) : '-') + '|' + (hasAnchorY ? 'y' + (zy | 0) : '-')
      if (AUTO_SEAM[seamKey]) { cb(AUTO_SEAM[seamKey]); return }
      try {
        var iw = img.naturalWidth || img.width
        var ih = img.naturalHeight || img.height
        var cv = document.createElement('canvas')
        cv.width = iw; cv.height = ih
        var cx = cv.getContext('2d', { willReadFrequently: true })
        if (!cx) { cb(null); return }
        cx.clearRect(0, 0, iw, ih)
        cx.drawImage(img, 0, 0)
        var d = cx.getImageData(0, 0, iw, ih).data
        var colOpaque = new Array(iw).fill(0)
        var rowOpaque = new Array(ih).fill(0)
        for (var y = 0; y < ih; y += 1) {
          for (var x = 0; x < iw; x += 1) {
            if (d[(y * iw + x) * 4 + 3] > 8) { colOpaque[x] += 1; rowOpaque[y] += 1 }
          }
        }

        function pick(arr, n, anchorPx) {

          var lo = Math.floor(n * 0.35), hi = Math.ceil(n * 0.65)
          var minV = Infinity
          for (var i = lo; i <= hi; i += 1) if (arr[i] < minV) minV = arr[i]
          var runs = [], s = -1
          for (var j = lo; j <= hi + 1; j += 1) {
            var ok = j <= hi && arr[j] <= minV
            if (ok && s < 0) s = j
            else if (!ok && s >= 0) { runs.push([s, j - 1]); s = -1 }
          }
          if (!runs.length) {
            var bi = Math.floor(n / 2), bs = Infinity
            for (var k = lo; k <= hi; k += 1) {
              var sc = arr[k] * 1000 + Math.abs(k - n / 2)
              if (sc < bs) { bs = sc; bi = k }
            }
            return bi
          }

          if (anchorPx != null && Number.isFinite(anchorPx)) {
            var tolA = 3
            var limA = minV + tolA
            var axA = Math.max(lo, Math.min(hi, anchorPx))
            var bestA = -1, bestDA = Infinity
            for (var xiA = lo; xiA <= hi; xiA += 1) {
              if (arr[xiA] > limA) continue
              var ddA = Math.abs(xiA - axA)
              if (ddA < bestDA) { bestDA = ddA; bestA = xiA }
            }
            if (bestA >= 0) return bestA
          }
          var br = runs[0], bsc = -Infinity
          for (var r = 0; r < runs.length; r += 1) {
            var wd = runs[r][1] - runs[r][0] + 1
            var mid = (runs[r][0] + runs[r][1]) / 2
            var score = wd * 100 - Math.abs(mid - n / 2)
            if (score > bsc) { bsc = score; br = runs[r] }
          }
          return Math.round((br[0] + br[1]) / 2)
        }
        var seam
        if (fiU) {

          var ux = Math.round(Number(fiU.left) || 0)
          var uy = Math.round(Number(fiU.top) || 0)
          seam = {
            sx: Math.max(1, Math.min(iw - 2, ux)),
            sy: Math.max(1, Math.min(ih - 2, uy)),
            colOpaque: colOpaque[bestIdxOf(colOpaque)],
            iw: iw, ih: ih,
            fromCrop: true
          }
        } else {
          seam = {
            sx: pick(colOpaque, iw, hasAnchorX ? zx : null),
            sy: pick(rowOpaque, ih, hasAnchorY ? zy : null),
            colOpaque: colOpaque[bestIdxOf(colOpaque)],
            iw: iw, ih: ih
          }
        }
        AUTO_SEAM[seamKey] = seam
        cb(seam)
      } catch (e) { cb(null) }
    }
    function bestIdxOf(a) { return a.indexOf(Math.min.apply(null, a)) }

    


    




    var HOLE_WALL_ALPHA = 200
    var HOLE_RUN = 3

    function innerRectOf(art, cw, ch) {
      var actx = null
      try { actx = art.getContext('2d', { willReadFrequently: true }) } catch (e) { actx = null }
      if (!actx) return null
      var data = null
      try { data = actx.getImageData(0, 0, cw, ch).data } catch (e) { return null }
      if (!data) return null

      function solid(x, y) {
        if (x < 0 || y < 0 || x >= cw || y >= ch) return false
        return data[(y * cw + x) * 4 + 3] >= HOLE_WALL_ALPHA
      }
      
      function wallAt(x, y, dx, dy, limit) {
        var run = 0
        for (var i = 1; i <= limit; i += 1) {
          var nx = x + dx * i, ny = y + dy * i
          if (nx < 0 || ny < 0 || nx >= cw || ny >= ch) return i <= 1 ? 0 : i - 1
          if (solid(nx, ny)) {
            run += 1
            if (run >= HOLE_RUN) return i - run
          } else run = 0
        }
        return limit
      }
      function median(a) {
        if (!a.length) return 0
        a.sort(function (p, q) { return p - q })
        return a[a.length >> 1]
      }

      var cx = cw >> 1, cy = ch >> 1

      if (solid(cx, cy)) {
        var found = false
        var step = Math.max(2, Math.round(Math.min(cw, ch) * 0.06))
        for (var rad = step; rad <= Math.min(cw, ch) / 3 && !found; rad += step) {
          for (var k = 0; k < 8; k += 1) {
            var ang = (Math.PI * 2 * k) / 8
            var px = Math.round(cx + Math.cos(ang) * rad), py = Math.round(cy + Math.sin(ang) * rad)
            if (px > 0 && py > 0 && px < cw - 1 && py < ch - 1 && !solid(px, py)) {
              cx = px; cy = py; found = true; break
            }
          }
        }
        if (!found) return null
      }


      var lefts = [], rights = [], hSpan = Math.max(2, Math.round(ch * 0.22))
      for (var oy = -hSpan; oy <= hSpan; oy += Math.max(1, Math.round(hSpan / 3))) {
        var y0 = Math.min(ch - 1, Math.max(0, cy + oy))
        lefts.push(cx - wallAt(cx, y0, -1, 0, cx))
        rights.push(cx + wallAt(cx, y0, 1, 0, cw - 1 - cx))
      }

      var tops = [], bots = [], wSpan = Math.max(2, Math.round(cw * 0.22))
      for (var ox = -wSpan; ox <= wSpan; ox += Math.max(1, Math.round(wSpan / 3))) {
        var x0 = Math.min(cw - 1, Math.max(0, cx + ox))
        tops.push(cy - wallAt(x0, cy, 0, -1, cy))
        bots.push(cy + wallAt(x0, cy, 0, 1, ch - 1 - cy))
      }
      var l = median(lefts), r = median(rights), t = median(tops), b = median(bots)
      if (!(r > l) || !(b > t)) return null
      return { left: l, top: t, right: r, bottom: b }
    }





    function anchorToInsets(px, py, w, h) {
      var wi = Math.max(2, Number(w) || 1)
      var hi = Math.max(2, Number(h) || 1)
      var capX = Math.max(2, Math.round(wi * 0.8))
      var capY = Math.max(2, Math.round(hi * 0.8))
      var x = Math.max(0, Math.min(wi - 1, Math.round(Number(px) || 0)))
      var y = Math.max(0, Math.min(hi - 1, Math.round(Number(py) || 0)))
      return {
        top: Math.max(1, Math.min(capY, y)),
        bottom: Math.max(1, Math.min(capY, hi - 1 - y)),
        left: Math.max(1, Math.min(capX, x)),
        right: Math.max(1, Math.min(capX, wi - 1 - x))
      }
    }

    
    function insetsToAnchor(fi, w, h) {
      var wi = Math.max(2, Number(w) || 1)
      var hi = Math.max(2, Number(h) || 1)
      var x = Number(fi && fi.left)
      var y = Number(fi && fi.top)
      if (!Number.isFinite(x)) x = Math.round(wi / 2)
      if (!Number.isFinite(y)) y = Math.round(hi / 2)
      return [
        Math.max(0, Math.min(wi - 1, Math.round(x))),
        Math.max(0, Math.min(hi - 1, Math.round(y)))
      ]
    }

    var MEASURED_HOLE = {}
    var INNER_RECT_CACHE = {}

    function measuredHoleSource(bubble, img) {
      if (!bubble || !img) return null

      var key = bubble.id
      if (MEASURED_HOLE[key] !== undefined) return MEASURED_HOLE[key]
      var out = null
      try {
        var iw = img.naturalWidth || img.width
        var ih = img.naturalHeight || img.height
        var cv = document.createElement('canvas')
        cv.width = iw; cv.height = ih
        var cx = cv.getContext('2d', { willReadFrequently: true })
        if (cx) {
          cx.clearRect(0, 0, iw, ih)
          cx.drawImage(img, 0, 0)
          out = innerRectOf(cv, iw, ih)
        }
      } catch (e) { out = null }
      MEASURED_HOLE[key] = out
      return out
    }



    var MEASURED_INSETS = {}

    function measuredInsets(bubble, img, iw, ih) {
      if (MEASURED_INSETS[bubble.id]) return MEASURED_INSETS[bubble.id]
      try {
        var cv = document.createElement('canvas')
        cv.width = iw; cv.height = ih
        var cx = cv.getContext('2d', { willReadFrequently: true })
        if (!cx) return null
        cx.clearRect(0, 0, iw, ih)
        cx.drawImage(img, 0, 0)
        var d = cx.getImageData(0, 0, iw, ih).data
        function solid(x, y) {
          if (x < 0 || y < 0 || x >= iw || y >= ih) return false
          return d[(y * iw + x) * 4 + 3] >= HOLE_WALL_ALPHA
        }
        var colMid = iw >> 1, rowMid = ih >> 1
        var top = 0, bottom = 0, left = 0, right = 0
        for (var y = 0; y < ih; y += 1) if (solid(colMid, y)) { top = y; break }
        for (var y2 = ih - 1; y2 >= 0; y2 -= 1) if (solid(colMid, y2)) { bottom = ih - 1 - y2; break }
        for (var x = 0; x < iw; x += 1) if (solid(x, rowMid)) { left = x; break }
        for (var x2 = iw - 1; x2 >= 0; x2 -= 1) if (solid(x2, rowMid)) { right = iw - 1 - x2; break }
        var cap = Math.max(2, Math.round(Math.min(iw, ih) * 0.4))
        var m = {
          top: Math.min(cap, Math.max(2, Math.round(top))),
          right: Math.min(cap, Math.max(2, Math.round(right))),
          bottom: Math.min(cap, Math.max(2, Math.round(bottom))),
          left: Math.min(cap, Math.max(2, Math.round(left)))
        }
        MEASURED_INSETS[bubble.id] = m
        return m
      } catch (e) { return null }
    }

    
    function drawAutoArt(actx, img, cw, ch, iw, ih, sx, sy, scale, hole) {

      if (hole) {
        if (sx < hole.left) sx = hole.left
        else if (sx > hole.right) sx = hole.right
        if (sy < hole.top) sy = hole.top
        else if (sy > hole.bottom) sy = hole.bottom
      }
      var k = Math.min(1, ch / ih) * scale
      if (iw * k > cw) k = Math.min(k, cw / iw)
      k = Math.max(0.05, k)
      var lw = sx * k, rw = (iw - sx - 1) * k
      var tw = sy * k, bh2 = (ih - sy - 1) * k
      var midW = cw - lw - rw
      var midH = ch - tw - bh2
      if (midW < 0) { var f1 = cw / Math.max(1, lw + rw); lw *= f1; rw *= f1; midW = 0 }
      if (midH < 0) { var f2 = ch / Math.max(1, tw + bh2); tw *= f2; bh2 *= f2; midH = 0 }
      var xR = lw + midW
      var yB = tw + midH
      actx.drawImage(img, 0, 0, sx, sy, 0, 0, lw, tw)
      actx.drawImage(img, sx + 1, 0, iw - sx - 1, sy, xR, 0, rw, tw)
      actx.drawImage(img, 0, sy + 1, sx, ih - sy - 1, 0, yB, lw, bh2)
      actx.drawImage(img, sx + 1, sy + 1, iw - sx - 1, ih - sy - 1, xR, yB, rw, bh2)
      if (midW > 0) {
        actx.drawImage(img, sx, 0, 1, sy, lw, 0, midW, tw)
        actx.drawImage(img, sx, sy + 1, 1, ih - sy - 1, lw, yB, midW, bh2)
      }
      if (midH > 0) {
        actx.drawImage(img, 0, sy, sx, 1, 0, tw, lw, midH)
        actx.drawImage(img, sx + 1, sy, iw - sx - 1, 1, xR, tw, rw, midH)
      }
      if (midW > 0 && midH > 0) actx.drawImage(img, sx, sy, 1, 1, lw, tw, midW, midH)
      return { left: lw, right: rw, top: tw, bottom: bh2, k: k }
    }



    function composeFrame(bubble, frameNo, w, h, opts) {
      opts = opts || {}
      var st = engineState || {}
      var mode = opts.mode || st.renderMode || 'auto'
      var scale = opts.scale != null ? Number(opts.scale) : (Number(st.scale) || 1)
      var insets = opts.insets || bubble.frameInsets || bubble.slice || { top: 18, right: 20, bottom: 18, left: 20 }
      var fill = fillValue(opts.fillColor) || 'transparent'
      var fillInsetPct = bubble.fillInset != null ? Number(bubble.fillInset)
        : (opts.fillInset != null ? Number(opts.fillInset) : (Number(st.fillInset) || 0))
      var rec = frameImgs[bubble.id]
      if (!rec || !rec.ready) return null
      var img = rec.imgs[frameNo - 1] || rec.imgs.filter(Boolean)[0]
      if (!img || !img.naturalWidth) return null

      var dpr = Math.min(2, (typeof window !== 'undefined' && window.devicePixelRatio) || 1)
      var cw = Math.max(8, Math.round(w * dpr))
      var ch = Math.max(8, Math.round(h * dpr))
      var iw = img.naturalWidth || img.width
      var ih = img.naturalHeight || img.height


      if (bubble.sliceSource === 'default' && !opts.insets) {
        var measI = measuredInsets(bubble, img, iw, ih)
        if (measI) insets = measI
      }

      var L = Math.max(1, Math.min(Number(insets.left) || 1, iw - 1))
      var R = Math.max(1, Math.min(Number(insets.right) || 1, iw - 1))
      var T = Math.max(1, Math.min(Number(insets.top) || 1, ih - 1))
      var B = Math.max(1, Math.min(Number(insets.bottom) || 1, ih - 1))
      if (L + R >= iw) { L = Math.floor(iw / 2); R = Math.max(1, iw - L - 1) }
      if (T + B >= ih) { T = Math.floor(ih / 2); B = Math.max(1, ih - T - 1) }

      var seam = null
      if (mode === 'auto') {
        seamOf(bubble, img, function (s) { seam = s })
        if (!seam) return null
      }

      var holeKey = opts.hole
        ? [opts.hole.left, opts.hole.top, opts.hole.right, opts.hole.bottom].join(',')
        : '-'
      var fillKey = opts.fillInsets
        ? [opts.fillInsets.top, opts.fillInsets.right, opts.fillInsets.bottom, opts.fillInsets.left].join(',')
        : '-'
      var key = [bubble.id, frameNo, Math.round(w), Math.round(h), mode,
        L, R, T, B, seam ? seam.sx : 0, seam ? seam.sy : 0,
        scale, fill, fillInsetPct, holeKey, fillKey].join('|')
      var hit = cacheGet(key)
      if (hit) return hit


      var art = document.createElement('canvas')
      art.width = cw; art.height = ch
      var actx = null
      try { actx = art.getContext('2d', { willReadFrequently: true }) } catch (e) { actx = null }
      if (!actx) return null
      actx.clearRect(0, 0, cw, ch)

      var geom = drawAutoArt(actx, img, cw, ch, iw, ih, seam.sx, seam.sy, scale, opts.hole || null)


      var hole = null
      var rectKey = bubble.id + '|' + frameNo + '|' + cw + 'x' + ch
      if (Object.prototype.hasOwnProperty.call(INNER_RECT_CACHE, rectKey)) {
        hole = INNER_RECT_CACHE[rectKey]
      } else {
        try { hole = innerRectOf(art, cw, ch) } catch (e) { hole = null }
        try {
          if (Object.keys(INNER_RECT_CACHE).length > 400) INNER_RECT_CACHE = {}
          INNER_RECT_CACHE[rectKey] = hole
        } catch (e) {}
      }


      var canvas = document.createElement('canvas')
      canvas.width = cw; canvas.height = ch
      var ctx = canvas.getContext('2d')
      if (!ctx) return null
      ctx.clearRect(0, 0, cw, ch)
      if (fill && fill !== 'transparent') {

        var kFill = mode === 'auto' ? Math.min(1, ch / ih) * scale : (scale * dpr) / 2
        if (mode === 'auto' && iw * kFill > cw) kFill = Math.min(kFill, cw / iw)
        if (mode !== 'auto') { if (ih * kFill > ch) kFill = ch / ih; if (iw * kFill > cw) kFill = Math.min(kFill, cw / iw) }

        var FIL = opts.fillInsets || {}
        var fL = Number(FIL.left) || L
        var fR = Number(FIL.right) || R
        var fT = Number(FIL.top) || T
        var fB = Number(FIL.bottom) || B
        var bL = Math.max(1, Math.round(fL * kFill))
        var bR = Math.max(1, Math.round(fR * kFill))
        var bT = Math.max(1, Math.round(fT * kFill))
        var bB = Math.max(1, Math.round(fB * kFill))
        if (bL + bR >= cw) { bL = Math.floor(cw / 4); bR = Math.floor(cw / 4) }
        if (bT + bB >= ch) { bT = Math.floor(ch / 6); bB = Math.floor(ch / 6) }


        var mLeft = bL
        var mTop = bT
        var mRight = bR
        var mBottom = bB

        var extra = Math.round(Math.min(cw, ch) * Math.max(0, fillInsetPct) / 100)
        var x0 = mLeft + extra, y0 = mTop + extra
        var x1 = cw - 1 - mRight - extra, y1 = ch - 1 - mBottom - extra

        if (x1 > x0 + 4 && y1 > y0 + 4) {
          var cover = ((x1 - x0 + 1) * (y1 - y0 + 1)) / Math.max(1, cw * ch)
          var allowFill = cover >= 0.25
          if (allowFill) {

            try {
              var hdata = actx.getImageData(x0, y0, x1 - x0 + 1, y1 - y0 + 1).data
              var clear = 0, total = (x1 - x0 + 1) * (y1 - y0 + 1)
              for (var hi = 3; hi < hdata.length; hi += 4) if (hdata[hi] < HOLE_WALL_ALPHA) clear += 1
              if (total && clear / total < 0.55) allowFill = false
            } catch (e) {}
          }
          if (allowFill) {

            var filledPx = 0
            try {
              var artData = actx.getImageData(0, 0, cw, ch).data
              var rowFirst = new Int32Array(ch), rowLast = new Int32Array(ch)
              var colFirst = new Int32Array(cw), colLast = new Int32Array(cw)
              for (var ri = 0; ri < ch; ri += 1) { rowFirst[ri] = cw; rowLast[ri] = -1 }
              for (var cj = 0; cj < cw; cj += 1) { colFirst[cj] = ch; colLast[cj] = -1 }
              for (var py = 0; py < ch; py += 1) {
                for (var px = 0; px < cw; px += 1) {
                  if (artData[(py * cw + px) * 4 + 3] >= HOLE_WALL_ALPHA) {
                    if (px < rowFirst[py]) rowFirst[py] = px
                    if (px > rowLast[py]) rowLast[py] = px
                    if (py < colFirst[px]) colFirst[px] = py
                    if (py > colLast[px]) colLast[px] = py
                  }
                }
              }
              ctx.fillStyle = fill
              for (var fy = y0; fy <= y1; fy += 1) {
                var rf = rowFirst[fy], rl = rowLast[fy]
                if (rl <= rf) continue
                var fx = Math.max(x0, rf + 1)
                var fxEnd = Math.min(x1, rl - 1)
                while (fx <= fxEnd) {

                  if (!(colFirst[fx] < fy - 1 && colLast[fx] > fy + 1)) { fx += 1; continue }
                  var rs = fx
                  while (fx <= fxEnd && (colFirst[fx] < fy - 1 && colLast[fx] > fy + 1)) fx += 1
                  ctx.fillRect(rs, fy, fx - rs, 1)
                  filledPx += (fx - rs)
                }
              }
            } catch (e) { filledPx = 0 }

            var rectArea = (x1 - x0 + 1) * (y1 - y0 + 1)
            if (filledPx < rectArea * 0.2) {
              ctx.fillStyle = fill
              ctx.fillRect(x0, y0, x1 - x0 + 1, y1 - y0 + 1)
            }
          }
        }
      }
      ctx.drawImage(art, 0, 0)

      var url = canvas.toDataURL('image/png')
      var out = { url: url, hole: hole, cw: cw, ch: ch, iw: iw, ih: ih, artScale: (geom && geom.k) || 1 }
      cacheSet(key, out)
      return out
    }

    
    function composeAuto(bubble, frameNo, w, h, opts) {
      return composeFrame(bubble, frameNo, w, h, Object.assign({}, opts || {}, { mode: 'auto' }))
    }




    function animateIn(el, bubble, isAssistantBlock, forceReplay) {
      var st = engineState || {}
      var preset = st.animPreset || 'none'
      if (ANIM_OFF) {

        try { el.style.removeProperty('animation') } catch (e) {}
        el.__dshqfAnimKey = ''
        el.__dshqfAnimToken = ''
        return
      }
      if (preset === 'none') {
        try { el.style.removeProperty('animation') } catch (e) {}
        el.__dshqfAnimKey = ''
        el.__dshqfAnimToken = ''
        return
      }
      if (preset === 'custom' || !ANIM_VALUE[preset]) return

      if (!forceReplay && el.__dshqfPlay !== true) {
        if (el.__dshqfAnimToken) {
          try { el.style.removeProperty('animation') } catch (e) {}
          el.__dshqfAnimToken = ''
        }
        el.__dshqfAnimKey = ''
        return
      }
      var token = String((bubble && bubble.id) || '') + '|' + preset
      if (!forceReplay && el.__dshqfAnimKey === token && el.__dshqfAnimToken === token) return
      el.__dshqfAnimKey = token
      var val = ANIM_VALUE[preset]
      imp(el, 'animation', val)

      if (!forceReplay && !isAssistantBlock) {
        el.__dshqfPlay = false
        el.__dshqfAnimDone = true
      }
      watchAnimation(el, token, preset)
      var done = function () {
        try {
          el.style.removeProperty('animation')
          el.__dshqfAnimToken = ''
          el.removeEventListener('animationend', done)
        } catch (e) {}
      }
      try { el.addEventListener('animationend', done) } catch (e) {}
    }

    
    function replayAnimations() {
      if (ANIM_OFF) return
      var st = engineState || {}
      if (!st.animPreset || st.animPreset === 'none') return
      var els = []
      try { els = document.querySelectorAll('[data-dshqf]') } catch (e) { els = [] }
      for (var i = 0; i < els.length; i += 1) {
        var el = els[i]
        var id = ''
        try { id = String(el.getAttribute('data-dshqf') || '') } catch (e) { id = '' }
        if (!id) continue
        var bubble = null
        for (var b = 0; b < (lastBubbles || []).length; b += 1) {
          if (lastBubbles[b] && lastBubbles[b].id === id) { bubble = lastBubbles[b]; break }
        }
        if (!bubble) continue
        el.__dshqfAnimKey = ''
        try { animateIn(el, bubble, true, true) } catch (e) {}
      }
    }



    function noteSendEvent(kind) {
      pendingSendAnim = true
      pendingSendAt = Date.now()
      pendingSendKind = kind === 'steer' ? 'steer' : 'send'
      try {
        pendingSendBase = (typeof Set === 'function') ? new Set(userMessageItems()) : null
      } catch (e) { pendingSendBase = null }
      try {
        if (engineState && engineState.enabled === false) {
          setTimeout(function () { try { scan(true) } catch (e) {} }, 60)
          setTimeout(function () { try { scan(true) } catch (e) {} }, 420)
        }
      } catch (e) {}
    }
    function pickPendingSendBubble() {
      if (!pendingSendAnim) return null
      if (pendingSendAt && Date.now() - pendingSendAt > 4000) { pendingSendAnim = false; return null }
      var items = []
      try { items = userMessageItems() } catch (e) { items = [] }
      var base = pendingSendBase
      var fallback = null
      for (var i = items.length - 1; i >= 0; i -= 1) {
        var it = items[i]
        if (!it) continue
        if (base && base.has(it)) continue
        var isSteer = false
        try {
          isSteer = !!(it.hasAttribute && (it.hasAttribute('data-pending-steering') || it.hasAttribute('data-submission-echo'))) ||
            (it.closest && !!it.closest('[data-pending-steering], [data-submission-echo]'))
        } catch (e) {}
        var b = null
        try { b = it.querySelector ? it.querySelector('[class*="bubble"]') : null } catch (e) { b = null }
        if (!b || b.__dshqfAnimDone === true) continue
        if (pendingSendKind === 'steer') {
          if (isSteer) return b
          if (!fallback) fallback = b
        } else {
          return b
        }
      }
      return fallback
    }
    function onSendKeydown(e) {
      try {
        if (!e || e.key !== 'Enter' || e.shiftKey || e.isComposing) return
        var t = e.target
        if (!t || !t.closest) return
        if (!t.closest('[data-composer-card]')) return
        noteSendEvent('send')
      } catch (err) {}
    }
    function onSendClick(e) {
      try {
        var t = e.target
        if (!t || !t.closest) return
        var btn = t.closest('button')
        if (!btn || btn.disabled) return
        var al = String(btn.getAttribute('aria-label') || '')
        var cls = String(btn.className || '')
        // 插话/插入不经过输入框发送按钮 也要触发发送动画
        if (/插话|steer|插入/i.test(al)) { noteSendEvent('steer'); return }
        if (!t.closest('[data-composer-card]')) return
        if (/发送|send/i.test(al) || cls.indexOf('primary') !== -1) noteSendEvent('send')
      } catch (err) {}
    }
    function resolveFill(bubble) {

      if (bubble && bubble.__dshqfFillCache !== undefined) return bubble.__dshqfFillCache
      var st = engineState || {}
      var manual = fillValue(st.fillColor)
      var out = manual || '#FFF5F8'
      if (bubble) bubble.__dshqfFillCache = out
      return out
    }

    
    // 气泡绘制
    function quantSize(v, last) {
      var Q = 16
      var q = Math.max(Q, Math.round((Number(v) || 0) / Q) * Q)
      if (last && Math.abs(q - last) < Q * 0.6) return last
      return q
    }

    function paint(el, bubble, frameNo, force, isAssistantBlock) {
      if (!el || !bubble) return
      if (el.__dshqfPainting) return
      el.__dshqfPainting = true
      try {
        paintInner(el, bubble, frameNo, force, isAssistantBlock)
      } finally {
        el.__dshqfPainting = false
      }
    }

    function paintInner(el, bubble, frameNo, force, isAssistantBlock) {
      if (!el || !bubble) return

      if (ANIM_OFF) frameNo = 1

      if (isAssistantBlock === undefined) isAssistantBlock = !!el.__dshqfAssist
      else el.__dshqfAssist = !!isAssistantBlock

      if (!force && !el.__dshqfDirty && el.__dshqfKey != null && el.__dshqfLastFrame === frameNo) {

        if (el.__dshqfSig && PAINTED[el.__dshqfKey] === el.__dshqfSig) return
      }
      var st = engineState || {}
      var sc0 = Number(st.scale) || 1

      var emPx = emPxOf(el)


      var recI0 = frameImgs[bubble.id]
      var imgI0 = recI0 && recI0.imgs && (recI0.imgs[frameNo - 1] || recI0.imgs.filter(Boolean)[0])
      var useIns = bubble.frameInsets || bubble.slice
      if (bubble.sliceSource === 'default' && imgI0 && imgI0.naturalWidth) {
        var meas0 = measuredInsets(bubble, imgI0, imgI0.naturalWidth, imgI0.naturalHeight)
        if (meas0) useIns = meas0
      }

      var insT0 = Number(useIns && useIns.top) || 0
      var insB0 = Number(useIns && useIns.bottom) || 0
      var hasAnchorMin = Array.isArray(bubble.zoomPoint) &&
        (Number(bubble.zoomPoint[0]) > 0 || Number(bubble.zoomPoint[1]) > 0)
      if (!hasAnchorMin) {
        var minH0 = Math.round((insT0 + insB0) / 2 * sc0)
        if (minH0 > 0) {
          if (el.__dshqfOrigMinH === undefined) {
            try {
              var csMH = window.getComputedStyle ? window.getComputedStyle(el) : null
              el.__dshqfOrigMinH = csMH ? (parseFloat(csMH.minHeight) || 0) : 0
            } catch (e) { el.__dshqfOrigMinH = 0 }
          }
          var minWant = Math.max(Math.round(emPx * 1.5), minH0)
          var minFinal = Math.max(Number(el.__dshqfOrigMinH) || 0, minWant)
          var minHStr = minFinal + 'px'
          if (el.__dshqfMinH !== minHStr) {
            imp(el, 'min-height', minHStr)
            el.__dshqfMinH = minHStr
          }
        }
      }

      var rect = el.getBoundingClientRect ? el.getBoundingClientRect() : null
      var w = rect && rect.width > 0 ? rect.width : (el.clientWidth || 0)
      var h = rect && rect.height > 0 ? rect.height : (el.clientHeight || 0)
      function deferPaint() {
        if (el.__dshqfSizeTimer) return
        el.__dshqfSizeTimer = setTimeout(function () {
          el.__dshqfSizeTimer = null
          if (typeof el.isConnected === 'boolean' && !el.isConnected) return
          var r0 = el.getBoundingClientRect ? el.getBoundingClientRect() : null
          if (!r0 || r0.width < 2 || r0.height < 2) return
          el.__dshqfStableW = r0.width
          el.__dshqfStableH = r0.height
          paint(el, bubble, frameNo, true, isAssistantBlock)
        }, 220)
      }
      if (w < 2 || h < emPx * 1.1) { deferPaint(); return }
      // 折叠/展开动画中间态：尺寸相对上次稳定值突变超过 50% 时不要写入小尺寸的 padding
      var stableH = Number(el.__dshqfStableH) || 0
      if (stableH > 0 && Math.abs(h - stableH) / stableH > 0.5) { deferPaint(); return }
      el.__dshqfStableW = w
      el.__dshqfStableH = h

      var wB = quantSize(w, el.__dshqfBW)
      var hB = quantSize(h, el.__dshqfBH)
      el.__dshqfBW = wB
      el.__dshqfBH = hB
      if (!el.__dshqfFromRaf) el.__dshqfRafCount = 0

      if (el.__dshqfKey == null) el.__dshqfKey = 'k' + Math.random().toString(36).slice(2)
      var sig = bubble.id + '|' + wB + 'x' + hB + '|' + frameNo
      if (!force && PAINTED[el.__dshqfKey] === sig) return

      var nowT = Date.now()
      if (!force && el.__dshqfT && nowT - el.__dshqfT < 80 &&
          el.__dshqfLastB === wB + 'x' + hB && el.__dshqfLastFrame === frameNo) return

      var tagP = String(el.tagName || '').toUpperCase()

      if (el.__dshqfNativeInset === undefined && (isAssistantBlock || tagP === 'BLOCKQUOTE')) {
        try {
          var csA = window.getComputedStyle ? window.getComputedStyle(el) : null
          if (csA) {
            var niT = (parseFloat(csA.paddingTop) || 0) + (parseFloat(csA.borderTopWidth) || 0)
            var niR = (parseFloat(csA.paddingRight) || 0) + (parseFloat(csA.borderRightWidth) || 0)
            var niB = (parseFloat(csA.paddingBottom) || 0) + (parseFloat(csA.borderBottomWidth) || 0)
            var niL = (parseFloat(csA.paddingLeft) || 0) + (parseFloat(csA.borderLeftWidth) || 0)

            var hadRealInset = (niT > 0 || niR > 0 || niB > 0 || niL > 0)
            if (tagP === 'BLOCKQUOTE' && niL <= 0) {

              var emN = parseFloat(csA.fontSize || '') || 14
              niL = Math.max(2, Math.round(emN * 0.9))
            }
            if (hadRealInset) {
              el.__dshqfNativeInset = { t: niT, r: niR, b: niB, l: niL }
            } else if (tagP !== 'BLOCKQUOTE') {

              el.__dshqfNativeInset = { t: 0, r: 0, b: 0, l: 0 }
            }

          }
        } catch (e) {}
      }
      if (isAssistantBlock) {
        try {
          imp(el, 'margin', '0')
          var tgA = tagP
          if (tgA === 'LI') imp(el, 'list-style', 'none')
          if (tgA === 'TABLE') imp(el, 'border-collapse', 'collapse')
          if (tgA === 'BLOCKQUOTE') { imp(el, 'border-left', 'none'); imp(el, 'padding-left', '0') }
        } catch (e) {}
      }
      var lh = cssHex(bubble.linkColor)
      if (lh) imp(el, '--dshqf-link', lh)

      impStable(el, 'max-width', MD_MAX_WIDTH > 120 ? (MD_MAX_WIDTH + 'px') : '100%')
      impStable(el, 'min-width', '0')
      impStable(el, 'overflow-wrap', 'anywhere')

      var textHex = cssHex(bubble.color)
      if (textHex) impStable(el, 'color', textHex)

      try {
        var zpA = Array.isArray(bubble.zoomPoint) ? bubble.zoomPoint : null
        var iwA0 = imgI0 ? (imgI0.naturalWidth || imgI0.width) : 0
        var ihA0 = imgI0 ? (imgI0.naturalHeight || imgI0.height) : 0
        if (zpA && iwA0 > 0 && ihA0 > 0) {
          var oxPct = Math.max(0, Math.min(100, Number(zpA[0]) / iwA0 * 100))
          var oyPct = Math.max(0, Math.min(100, Number(zpA[1]) / ihA0 * 100))
          imp(el, 'transform-origin', oxPct.toFixed(2) + '% ' + oyPct.toFixed(2) + '%')
        }
      } catch (e) {}


      var holeSrcEarly = measuredHoleSource(bubble, imgI0)

      {

        var fillIns = useIns
        try {
          if (imgI0 && imgI0.naturalWidth) {
            var measFill = measuredInsets(bubble, imgI0, imgI0.naturalWidth, imgI0.naturalHeight)
            if (measFill) fillIns = measFill
          }
        } catch (e) {}
        var res = composeAuto(bubble, frameNo, wB, hB, {
          fillColor: resolveFill(bubble), insets: useIns,
          fillInsets: fillIns,
          hole: holeSrcEarly
        })
        if (!res || !res.url) return
        imp(el, 'background-image', 'url("' + res.url + '")')
        imp(el, 'background-size', '100% 100%')
        imp(el, 'background-position', '0 0')
        imp(el, 'background-repeat', 'no-repeat')
        imp(el, 'background-color', 'transparent')


        var pf = Number(st.padFactor) || 3.8
        var wf = Number(st.widthFactor) || 1.30
        var hf0 = Number(st.heightFactor) || 1
        var padT, padR, padB, padL

        var holeSrc = holeSrcEarly
        var iwS = imgI0 ? (imgI0.naturalWidth || imgI0.width) : 0
        var ihS = imgI0 ? (imgI0.naturalHeight || imgI0.height) : 0

        var hRef = (el.__dshqfLastH || h)
        var wRef = (el.__dshqfLastW || w)
        var dprRef = res.cw ? (res.cw / Math.max(1, w)) : 1
        var kRef = res.artScale || sc0
        if (ihS > 0 && hRef > 0) {
          var kByH = (hRef * dprRef) / ihS
          kRef = Math.min(kRef, kByH)
        }
        var kCssSrc = Math.max(0.05, kRef) / Math.max(0.5, dprRef)
        var pfUse = pf
        if (holeSrc && imgI0) {

          pfUse = 1
          padT = holeSrc.top * kCssSrc
          padL = holeSrc.left * kCssSrc
          padR = (iwS - 1 - holeSrc.right) * kCssSrc
          padB = (ihS - 1 - holeSrc.bottom) * kCssSrc
        } else {
          var sl0 = useIns || {}
          padT = (Number(sl0.top) || 0) / 2 * sc0
          padR = (Number(sl0.right) || 0) / 2 * sc0
          padB = (Number(sl0.bottom) || 0) / 2 * sc0
          padL = (Number(sl0.left) || 0) / 2 * sc0
        }

        var padFloor = Math.max(2, Math.round(emPx * 0.25))
        padT = Math.max(padFloor, padT * pfUse * hf0)
        padR = Math.max(padFloor, padR * pfUse * wf)
        padB = Math.max(padFloor, padB * pfUse * hf0)
        padL = Math.max(padFloor, padL * pfUse * wf)

        var artBorder = null
        try {
          if (imgI0 && iwS > 0 && ihS > 0) {
            var miP = measuredInsets(bubble, imgI0, iwS, ihS)
            if (miP) {
              artBorder = {
                top: (Number(miP.top) || 0) * kCssSrc,
                right: (Number(miP.right) || 0) * kCssSrc,
                bottom: (Number(miP.bottom) || 0) * kCssSrc,
                left: (Number(miP.left) || 0) * kCssSrc
              }
            }
          }
        } catch (e) { artBorder = null }

        var gutX = Math.max(2, Math.round(emPx * 0.45))
        var gutY = Math.max(1, Math.round(emPx * 0.25))
        var markerSpace = Math.max(8, Math.round(emPx * 1.5))
        if (artBorder) {
          padT = Math.max(padT, artBorder.top + gutY)
          padB = Math.max(padB, artBorder.bottom + gutY)
          padR = Math.max(padR, artBorder.right + gutX)
          padL = Math.max(padL, artBorder.left + gutX)
        }

        if (iwS > 0 && ihS > 0) {
          var capX = iwS * kCssSrc * 0.32
          var capY = ihS * kCssSrc * 0.32
          padL = Math.min(padL, capX); padR = Math.min(padR, capX)
          padT = Math.min(padT, capY); padB = Math.min(padB, capY)
        }

        if (tagP === 'BLOCKQUOTE') {
          var niQ = el.__dshqfNativeInset
          if (niQ) {
            padT = Math.max(padT, niQ.t); padR = Math.max(padR, niQ.r)
            padB = Math.max(padB, niQ.b); padL = Math.max(padL, niQ.l)
          }
          var quoteIndent = Math.max(2, Math.round(emPx * 0.9))
          padL = Math.max(padL, quoteIndent)
        }

        var mp = isAssistantBlock ? (Number(st.assistantMinPad) || 0) : (Number(st.userMinPad) || 0)
        if (mp !== 0) {
          var origP = el.__dshqfOrigPad || [0, 0, 0, 0]
          padL = Math.max(origP[3], padL + mp)
          padR = Math.max(origP[1], padR + mp)
        }

        var tgC = String(el.tagName || '').toUpperCase()
        var isListEl = tgC === 'UL' || tgC === 'OL' || tgC === 'DL'
        var listPadL = padL
        if (isAssistantBlock && isListEl) {
          listPadL = padL + markerSpace

          listPadL = Math.min(listPadL, Math.max(markerSpace, Math.round(w * 0.45)))
        }

        var isTableWrap = isTableWrapper(el)
        var isTableEl = tgC === 'TABLE'
        applyTextPad(el, padT, padR, padB, padL, !!isAssistantBlock)
        if (isAssistantBlock) {
          try {
            if (isListEl) {
              imp(el, 'list-style-position', 'outside')
              imp(el, 'padding-left', Math.round(listPadL) + 'px')
            } else if (isTableWrap) {
              imp(el, 'padding', [padT, padR, padB, padL].map(function (v) { return Math.max(2, Math.round(v)) + 'px' }).join(' '))
              imp(el, 'overflow-x', 'auto')
            } else if (isTableEl) {
              imp(el, 'padding', [padT, padR, padB, padL].map(function (v) { return Math.max(2, Math.round(v)) + 'px' }).join(' '))
            }
          } catch (e) {}
        }

        try {
          el.setAttribute('data-dshqf-debug', JSON.stringify({
            w: Math.round(w), h: Math.round(h),

            pad: [Math.round(padT), Math.round(padR), Math.round(padB), Math.round(padL)],
            listPad: isListEl ? Math.round(listPadL) : null,
            border: artBorder ? [Math.round(artBorder.top), Math.round(artBorder.right), Math.round(artBorder.bottom), Math.round(artBorder.left)] : null,

            em: Math.round(emPx * 10) / 10,
            gutter: [gutX, gutY],
            markerSpace: markerSpace,
            hole: res.hole ? [res.hole.left, res.hole.top, res.hole.right, res.hole.bottom] : null,
            cw: res.cw, ch: res.ch
          }))
        } catch (e) {}

        try {
          if (!el.__dshqfRaf && !el.__dshqfRepainted) {
            el.__dshqfRaf = true
            el.__dshqfRepainted = true
            requestAnimationFrame(function () {
              el.__dshqfRaf = false
              var r2 = el.getBoundingClientRect ? el.getBoundingClientRect() : null
              if (!r2) return
              if (Math.abs(r2.width - w) <= 4 && Math.abs(r2.height - h) <= 4) return
              if ((el.__dshqfRafCount || 0) >= 3) return
              el.__dshqfRafCount = (el.__dshqfRafCount || 0) + 1
              el.__dshqfFromRaf = true
              try { paint(el, bubble, frameNo, false, isAssistantBlock) } finally { el.__dshqfFromRaf = false }
            })
          }
        } catch (e) {}

        try {
          imp(el, 'overflow', String(el.tagName || '').toUpperCase() === 'PRE' ? 'auto' : 'visible')
        } catch (e) {}
        animateIn(el, bubble, isAssistantBlock)
      }

      el.__dshqfT = nowT
      el.__dshqfLastW = Math.round(w)
      el.__dshqfLastH = Math.round(h)
      el.__dshqfLastB = wB + 'x' + hB
      el.__dshqfLastFrame = frameNo
      el.__dshqfDirty = false
      el.__dshqfSig = sig
      el.__dshqfPaintAppliedAt = Date.now()
      PAINTED[el.__dshqfKey] = sig
      var mt = el.tagName || ''
      if (mt && mt.toUpperCase() !== 'IMG') {
        el.setAttribute('data-dshqf-frame', String(frameNo))
        el.setAttribute('data-dshqf-size', Math.round(w) + 'x' + Math.round(h))
        var fillDisp = bubble.fillInset != null ? Number(bubble.fillInset) : (Number(st.fillInset) || 0)
        el.setAttribute('data-dshqf-fill', String(Math.min(40, Math.max(0, fillDisp))))
      }
    }

    // 清除套壳
    function clearSkin(el) {
      if (el.__dshqfKey) delete PAINTED[el.__dshqfKey]
      try {

        if (el.__dshqfOrigPad !== undefined) {
          if (el.__dshqfOrigPadAppliedInline && el.__dshqfOrigInlinePad !== undefined) {
            el.style.padding = el.__dshqfOrigInlinePad
          } else {
            el.style.removeProperty('padding')
          }
          el.__dshqfOrigPad = undefined
          el.__dshqfOrigInlinePad = undefined
          el.__dshqfOrigPadAppliedInline = false
        }
        el.style.removeProperty('overflow')
        el.style.removeProperty('min-height')
        el.style.removeProperty('max-width')
        el.style.removeProperty('min-width')
        el.style.removeProperty('overflow-wrap')
      } catch (e) {}
      el.__dshqfRaf = false
      el.__dshqfRepainted = false
      el.__dshqfAssist = undefined

      el.__dshqfNativeInset = undefined
      el.__dshqfEm = undefined
      el.__dshqfPadKey = undefined
      el.__dshqfPadApplied = undefined
      el.__dshqfMinH = undefined
      el.__dshqfOrigMinH = undefined
      el.__dshqfDirty = false
      el.__dshqfLastB = undefined
      el.__dshqfSig = undefined
      el.__dshqfLastFrame = undefined

      el.__dshqfAnimKey = ''
      el.__dshqfAnimToken = ''
      el.__dshqfPlay = undefined
      el.__dshqfAnimDone = undefined

      el.__dshqfT = 0
      if (el.__dshqfRoT) { try { clearTimeout(el.__dshqfRoT) } catch (e) {} el.__dshqfRoT = null }
      if (el.__dshqfMoT) { try { clearTimeout(el.__dshqfMoT) } catch (e) {} el.__dshqfMoT = null }
      try {
        var bid0 = el.getAttribute('data-dshqf')
        if (bid0 && bubbleEls[bid0]) {
          bubbleEls[bid0].delete(el)
          if (!bubbleEls[bid0].size) delete bubbleEls[bid0]
        }
      } catch (e) {}
      el.__dshqfLastW = 0
      el.__dshqfLastH = 0
      el.__dshqfBW = 0
      el.__dshqfBH = 0
      el.__dshqfRafCount = 0
      el.__dshqfFromRaf = false
      el.__dshqfPainting = false
      el.__dshqfStableW = 0
      el.__dshqfStableH = 0
      el.__dshqfPaintAppliedAt = 0
      if (el.__dshqfSizeTimer) { try { clearTimeout(el.__dshqfSizeTimer) } catch (e) {} el.__dshqfSizeTimer = null }
      try { if (el.__dshqfMo) { el.__dshqfMo.disconnect(); el.__dshqfMo = null } } catch (e) {}
      el.removeAttribute('data-dshqf')
      el.removeAttribute('data-dshqf-frame')
      el.removeAttribute('data-dshqf-size')
      el.removeAttribute('data-dshqf-fill')
      el.removeAttribute('data-dshqf-debug')
      var props = [
        'background-image', 'background-size', 'background-repeat', 'background-color',
        'background-position', 'background-origin', 'border-radius',
        'border-style', 'border-color', 'border-width',
        'border-image-source', 'border-image-slice', 'border-image-width',
        'border-image-repeat', 'border-image-outset',
        'margin', 'list-style', 'list-style-position', 'border-collapse',
        'border-left', 'transform-origin',
        '--dshqf-link', '--dshqf-src', '--dshqf-fill-radius', 'animation', 'color'
      ]
      for (var i = 0; i < props.length; i += 1) { try { el.style.removeProperty(props[i]) } catch (e) {} }
      if (resizeObs) {
        var ro = resizeObs.get(el)
        if (ro) { try { ro.disconnect() } catch (e) {} resizeObs.delete(el) }
      }
    }



    var composerCard = null
    var composerSig = ''
    var composerRO = null

    var composerTimer = null
    var composerTimerBubble = ''
    var composerTimerCount = 0
    var composerFrame = 0

    function composerElOf() {
      try { return document.querySelector('[data-composer-card]') } catch (e) { return null }
    }

    function stopComposerTimer() {
      if (composerTimer) { try { clearInterval(composerTimer) } catch (e) {} }
      composerTimer = null
      composerTimerBubble = ''
      composerTimerCount = 0
    }

    function startComposerTimer(bubble, count, timeMs) {
      if (ANIM_OFF || !bubble || count <= 1) {
        stopComposerTimer()
        composerFrame = 0
        return
      }
      if (composerTimer && composerTimerBubble === bubble.id && composerTimerCount === count) return
      stopComposerTimer()
      composerTimerBubble = bubble.id
      composerTimerCount = count
      composerFrame = 0
      composerTimer = setInterval(function () {
        if (!composerCard || !engineState || ANIM_OFF) { stopComposerTimer(); return }
        composerFrame = (composerFrame + 1) % count
        try { paintComposer() } catch (e) {}
      }, Math.max(40, Math.round(timeMs)))
    }

    function clearComposerSkin() {
      if (composerRO) { try { composerRO.disconnect() } catch (e) {} composerRO = null }
      stopComposerTimer()
      composerFrame = 0
      var el = composerCard
      composerCard = null
      composerSig = ''
      if (!el) return
      try {
        var props = ['background-image', 'background-size', 'background-repeat', 'background-position',
          'background-color', 'box-shadow', 'border', 'border-radius']
        for (var i = 0; i < props.length; i += 1) el.style.removeProperty(props[i])
        if (el.__dshqfComposerOrigInlinePad !== undefined) {
          if (el.__dshqfComposerOrigInlinePad) el.style.padding = el.__dshqfComposerOrigInlinePad
          else el.style.removeProperty('padding')
          el.__dshqfComposerOrigInlinePad = undefined
        }
        el.removeAttribute('data-dshqf-composer')
        el.removeAttribute('data-dshqf-composer-preset')
        el.removeAttribute('data-dshqf-composer-debug')

        el.__dshqfComposerNativePad = undefined
      } catch (e) {}
    }



    function composerPadsOf(bubble, img, el, h) {
      var st = engineState || {}
      var scale = Number(st.scale) || 1
      var dpr = Math.min(2, (typeof window !== 'undefined' && window.devicePixelRatio) || 1)
      var iw = img.naturalWidth || img.width
      var ih = img.naturalHeight || img.height
      var insets = bubble.frameInsets || bubble.slice || { top: 18, right: 20, bottom: 18, left: 20 }
      var hole = null
      try { hole = measuredHoleSource(bubble, img) } catch (e) { hole = null }
      var k = Math.min(1, (Math.max(1, h) * dpr) / Math.max(1, ih)) * scale
      var kc = Math.max(0.05, k) / Math.max(0.5, dpr)
      var padT, padR, padB, padL
      if (hole) {
        padT = hole.top * kc
        padB = (ih - 1 - hole.bottom) * kc
        padL = hole.left * kc
        padR = (iw - 1 - hole.right) * kc
      } else {
        padT = (Number(insets.top) || 0) / 2 * scale
        padB = (Number(insets.bottom) || 0) / 2 * scale
        padL = (Number(insets.left) || 0) / 2 * scale
        padR = (Number(insets.right) || 0) / 2 * scale
      }

      var mi = null
      try { mi = measuredInsets(bubble, img, iw, ih) } catch (e) { mi = null }
      var em = emPxOf(el)
      var gutX = Math.max(2, Math.round(em * 0.45))
      var gutY = Math.max(1, Math.round(em * 0.25))
      var border = [0, 0, 0, 0]
      if (mi) {
        border = [
          (Number(mi.top) || 0) * kc,
          (Number(mi.right) || 0) * kc,
          (Number(mi.bottom) || 0) * kc,
          (Number(mi.left) || 0) * kc
        ]
        padT = Math.max(padT, border[0] + gutY)
        padR = Math.max(padR, border[1] + gutX)
        padB = Math.max(padB, border[2] + gutY)
        padL = Math.max(padL, border[3] + gutX)
      }

      var native = el.__dshqfComposerNativePad
      if (!native) {
        native = [0, 0, 0, 0]
        try {
          var cs = window.getComputedStyle ? window.getComputedStyle(el) : null
          if (cs) {
            native = [
              parseFloat(cs.paddingTop) || 0,
              parseFloat(cs.paddingRight) || 0,
              parseFloat(cs.paddingBottom) || 0,
              parseFloat(cs.paddingLeft) || 0
            ]
          }
        } catch (e) { native = [0, 0, 0, 0] }
        try { el.__dshqfComposerNativePad = native } catch (e) {}
      }
      padT = Math.max(padT, native[0]); padR = Math.max(padR, native[1])
      padB = Math.max(padB, native[2]); padL = Math.max(padL, native[3])

      var floor = Math.max(1, Math.round(em * 0.25))
      padT = Math.max(floor, padT); padR = Math.max(floor, padR)
      padB = Math.max(floor, padB); padL = Math.max(floor, padL)

      var capX = Math.max(4, iw * kc * 0.32)
      var capY = Math.max(4, ih * kc * 0.32)
      padL = Math.min(padL, capX); padR = Math.min(padR, capX)
      padT = Math.min(padT, capY); padB = Math.min(padB, capY)

      var mp = Number(st.assistantMinPad) || 0
      if (mp !== 0) { padL = Math.max(4, padL + mp); padR = Math.max(4, padR + mp) }
      return {
        pads: [Math.round(padT), Math.round(padR), Math.round(padB), Math.round(padL)],
        border: [Math.round(border[0]), Math.round(border[1]), Math.round(border[2]), Math.round(border[3])],
        em: Math.round(em * 10) / 10
      }
    }



    function paintComposerPreset(el) {

      stopComposerTimer()
      composerFrame = 0
      var st = engineState || {}
      var r = el.getBoundingClientRect ? el.getBoundingClientRect() : null
      if (!r || r.width < 8 || r.height < 8) return
      var em = emPxOf(el)
      var native = el.__dshqfComposerNativePad
      if (!native) {
        native = [0, 0, 0, 0]
        try {
          var cs = window.getComputedStyle ? window.getComputedStyle(el) : null
          if (cs) {
            native = [parseFloat(cs.paddingTop) || 0, parseFloat(cs.paddingRight) || 0,
              parseFloat(cs.paddingBottom) || 0, parseFloat(cs.paddingLeft) || 0]
          }
        } catch (e) { native = [0, 0, 0, 0] }
        try { el.__dshqfComposerNativePad = native } catch (e) {}
      }

      var radius = Math.round(Math.min(r.width, r.height) / 2)

      var bw = Math.max(1, Math.round(em * 0.06))
      var padX = Math.max(Math.round(em * 0.9), native[1], native[3])
      var padY = Math.max(Math.round(em * 0.3), native[0])
      var padB = Math.max(Math.round(em * 0.3), native[2])
      var sig = ['imessage-preset', radius, bw, padX, padY, padB, em].join('|')
      if (composerSig === sig) return
      composerSig = sig
      try {
        imp(el, 'background-image', 'none')

        imp(el, 'background-color', 'transparent')
        imp(el, 'border', bw + 'px solid #3a3a3c')
        imp(el, 'border-radius', radius + 'px')
        imp(el, 'box-shadow', 'none')
        if (el.__dshqfComposerOrigInlinePad === undefined) {
          el.__dshqfComposerOrigInlinePad = (el.style && el.style.padding) ? el.style.padding : ''
        }
        imp(el, 'padding', [padY, padX, padB, padX].map(function (v) { return v + 'px' }).join(' '))
        el.setAttribute('data-dshqf-composer', COMPOSER_PRESET_IMESSAGE)
        el.setAttribute('data-dshqf-composer-preset', 'imessage')
        try {
          el.setAttribute('data-dshqf-composer-debug', JSON.stringify({
            preset: 'imessage', pad: [padY, padX, padB, padX], radius: radius, border: bw, em: Math.round(em * 10) / 10,
            w: Math.round(r.width), h: Math.round(r.height)
          }))
        } catch (e) {}
        if (!composerRO && typeof window !== 'undefined' && typeof window.ResizeObserver === 'function') {
          composerRO = new window.ResizeObserver(function () {
            if (!composerCard) return
            composerSig = ''
            try { requestAnimationFrame(function () { paintComposer() }) } catch (e) { paintComposer() }
          })
          composerRO.observe(el)
        }
      } catch (e) {}
    }

    
    function paintComposer() {
      if (typeof document === 'undefined' || !document.body) return
      if (!engineEnabled || !engineState) return
      var st = engineState
      var want = st.replaceComposer === true
      var id = want ? String(st.composerBubble || st.assistantBubble || st.userBubble || '') : ''
      var bubble = null
      if (id) {
        for (var i = 0; i < (lastBubbles || []).length; i += 1) {
          if (lastBubbles[i] && lastBubbles[i].id === id) { bubble = lastBubbles[i]; break }
        }
      }
      var el = composerElOf()
      if (!want || !el) { clearComposerSkin(); return }
      if (composerCard && composerCard !== el) clearComposerSkin()
      composerCard = el

      if (st.composerBubble === COMPOSER_PRESET_IMESSAGE) {
        paintComposerPreset(el)
        return
      }
      if (!bubble) { clearComposerSkin(); return }
      var rec = frameImgs[bubble.id]
      if (!rec || !rec.ready || !rec.imgs.length) {
        ensureFrames(bubble, function () { paintComposer() })
        return
      }
      var img = rec.imgs[0] || rec.imgs.filter(Boolean)[0]
      if (!img || !img.naturalWidth || !img.naturalHeight) return
      var r = el.getBoundingClientRect ? el.getBoundingClientRect() : null
      if (!r || r.width < 8 || r.height < 8) return
      var wB = Math.max(8, Math.round(r.width / 8) * 8)
      var hB = Math.max(8, Math.round(r.height / 8) * 8)
      var count = Math.max(1, Number(bubble.count) || 1)
      var timeMs = (Number(bubble.timeMs) || 100) / (Number(st.speed) || 1)

      startComposerTimer(bubble, count, timeMs)
      var frameNo = Math.min(count, (composerFrame % count) + 1)
      var geom = composerPadsOf(bubble, img, el, r.height)
      var pads = geom.pads
      var sig = [bubble.id, frameNo, wB, hB, pads.join(','), Number(st.scale) || 1,
        st.fillColor || '', Number(st.fillInset) || 0, Number(st.assistantMinPad) || 0].join('|')
      if (composerSig === sig) return
      var ins = bubble.frameInsets || bubble.slice
      var fillIns = ins
      try { fillIns = measuredInsets(bubble, img, img.naturalWidth, img.naturalHeight) || ins } catch (e) { fillIns = ins }
      var hole = null
      try { hole = measuredHoleSource(bubble, img) } catch (e) { hole = null }
      var res = composeAuto(bubble, frameNo, wB, hB, {
        fillColor: resolveFill(bubble), insets: ins, fillInsets: fillIns, hole: hole
      })
      if (!res || !res.url) return
      composerSig = sig
      try {
        imp(el, 'background-image', 'url("' + res.url + '")')
        imp(el, 'background-size', '100% 100%')
        imp(el, 'background-position', '0 0')
        imp(el, 'background-repeat', 'no-repeat')
        imp(el, 'background-color', 'transparent')

        imp(el, 'box-shadow', 'none')
        if (el.__dshqfComposerOrigInlinePad === undefined) {
          el.__dshqfComposerOrigInlinePad = (el.style && el.style.padding) ? el.style.padding : ''
        }
        imp(el, 'padding', pads.map(function (v) { return v + 'px' }).join(' '))
        el.setAttribute('data-dshqf-composer', bubble.id)

        try { el.removeAttribute('data-dshqf-composer-preset') } catch (e) {}

        try {
          el.setAttribute('data-dshqf-composer-debug', JSON.stringify({
            pad: pads, border: geom.border, em: geom.em, w: Math.round(r.width), h: Math.round(r.height)
          }))
        } catch (e) {}

        if (!composerRO && typeof window !== 'undefined' && typeof window.ResizeObserver === 'function') {
          composerRO = new window.ResizeObserver(function () {
            if (!composerCard) return
            composerSig = ''
            try { requestAnimationFrame(function () { paintComposer() }) } catch (e) { paintComposer() }
          })
          composerRO.observe(el)
        }
      } catch (e) {}
    }

    
    function scheduleSkinRepaint(el) {
      if (!el || el.__dshqfMoT) return
      var id0 = el.getAttribute('data-dshqf')
      if (!id0) return
      el.__dshqfMoT = setTimeout(function () {
        el.__dshqfMoT = null
        var id = el.getAttribute('data-dshqf')
        if (!id) return
        var bubble = null
        for (var i = 0; i < (lastBubbles || []).length; i += 1) {
          if (lastBubbles[i] && lastBubbles[i].id === id) { bubble = lastBubbles[i]; break }
        }
        if (!bubble) return
        if (isHiddenTarget(el)) return

        if (el.__dshqfKey) delete PAINTED[el.__dshqfKey]
        el.__dshqfDirty = true
        paint(el, bubble, (frameTick[bubble.id] || 0) + 1, false, !!el.__dshqfAssist)
      }, 120)
    }
    // 全局观察器
    function ensureGlobalMo() {
      if (typeof MutationObserver !== 'function') return
      if (typeof document === 'undefined' || !document.body) return
      if (globalMo) return
      try {

        try {
          if (typeof window !== 'undefined' && window.__dshqfGlobalMo) window.__dshqfGlobalMo.disconnect()
        } catch (e) {}
        globalMo = new MutationObserver(function (muts) {
          if (!engineState) return

          var dirty = new Set()
          for (var i = 0; i < muts.length; i += 1) {
            var t = muts[i] && muts[i].target
            var start = (t && t.nodeType === 3 && t.parentElement) ? t.parentElement : t
            var el = (start && start.closest) ? start.closest('[data-dshqf]') : null
            if (el) dirty.add(el)
          }
          dirty.forEach(function (el) { scheduleSkinRepaint(el) })
        })
        globalMo.observe(document.body, { childList: true, subtree: true, characterData: true })
        try { if (typeof window !== 'undefined') window.__dshqfGlobalMo = globalMo } catch (e) {}
      } catch (e) { globalMo = null }
    }

    
    // 帧动画
    function startTimer(bubble, count, timeMs) {
      var id = bubble.id

      if (ANIM_OFF) {
        if (frameTimers[id]) { try { clearInterval(frameTimers[id]) } catch (e) {} frameTimers[id] = null }
        return
      }
      if (frameTimers[id]) clearInterval(frameTimers[id])
      frameTick[id] = 0
      frameMeta[id] = { count: count, bubble: bubble }
      frameTimers[id] = setInterval(function () {
        var meta = frameMeta[id]
        if (!meta) return
        frameTick[id] = (frameTick[id] + 1) % meta.count
        var tick = frameTick[id]
        var set = bubbleEls[id]

        if (set && set.size) {
          set.forEach(function (be) {
            if (!be || (typeof be.isConnected === 'boolean' && !be.isConnected)) {
              set.delete(be)
              return
            }
            if (be.getAttribute && be.getAttribute('data-dshqf') !== id) { set.delete(be); return }
            if (isHiddenTarget(be)) return
            paint(be, meta.bubble, tick + 1)
          })
        } else {

          var els = []
          if (typeof document !== 'undefined') {
            try { els = Array.prototype.slice.call(document.querySelectorAll('[data-dshqf="' + id + '"]')) } catch (e) { els = [] }
          }
          for (var i = 0; i < els.length; i += 1) {
            if (isHiddenTarget(els[i])) continue
            paint(els[i], meta.bubble, tick + 1)
          }
        }
      }, Math.max(40, Math.round(timeMs)))
    }



    function isStatusChip(el, text) {
      var t = String(text != null ? text : (el && el.textContent)).trim()
      if (!t) return false

      if (t.length <= 16) {
        if (/^(分析中|生成中|思考中|推理中|已完成|已停止|已中断|已取消|停止生成|渲染中)[\s.…·]*(?:\.{2,}|…)?$/.test(t)) return true
        if (/^(用时|耗时)\s*[\d.]+\s*(秒|s|ms)?$/.test(t)) return true
      }
      if (t.length <= 12 && /^[\d\s.,:：-]+(秒|s|ms|%)?$/.test(t)) return true
      var role = (el && typeof el.getAttribute === 'function' && (el.getAttribute('role') || el.getAttribute('aria-label'))) || ''
      return /status|timer|busy|spinner|cancel/i.test(role)
    }



    var assistantTarget = (typeof WeakMap === 'function') ? new WeakMap() : null
    function countDescendants(el) {
      try { return (el && el.getElementsByTagName) ? el.getElementsByTagName('*').length : 0 } catch (e) { return 0 }
    }



    var ASSIST_BLOCK_TAGS = {
      P: 1, DIV: 1, LI: 1, PRE: 1, BLOCKQUOTE: 1, TD: 1, TH: 1, DD: 1, DT: 1,
      H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1, FIGCAPTION: 1, SECTION: 1, ARTICLE: 1,

      UL: 1, OL: 1, TABLE: 1, THEAD: 1, TBODY: 1, TFOOT: 1, TR: 1, FIGURE: 1, HR: 1
    }
    var ASSIST_INLINE_TAGS = {
      STRONG: 1, B: 1, EM: 1, I: 1, CODE: 1, SPAN: 1, A: 1, U: 1, S: 1, DEL: 1,
      MARK: 1, KBD: 1, SAMP: 1, VAR: 1, SMALL: 1, SUB: 1, SUP: 1, BR: 1, IMG: 1, SVG: 1, TIME: 1
    }

    var ASSIST_ATOMIC_TAGS = { UL: 1, OL: 1, TABLE: 1, PRE: 1, BLOCKQUOTE: 1, FIGURE: 1 }
    var ASSIST_HEADING_TAGS = { H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1 }


    var ASSIST_BLOCK_LIMITS = { normal: 80, medium: 255, ultra: 100000 }
    var ASSIST_GUARD_LIMITS = { normal: 6000, medium: 14000, ultra: 40000 }
    var ASSIST_MAX_BLOCKS = ASSIST_BLOCK_LIMITS.medium



    var PERF_MODE = 'medium'

    var ALWAYS_ASSIST = false

    var PENDING_ALWAYS = false
    function perfMaxBlocks() { return ASSIST_BLOCK_LIMITS[PERF_MODE] || ASSIST_BLOCK_LIMITS.medium }
    function perfGuard() { return ASSIST_GUARD_LIMITS[PERF_MODE] || ASSIST_GUARD_LIMITS.medium }
    var ULTRA_WIN = null

    var ANIM_OFF = false

    var ANIM_OFF_PREV = false

    var lastAnimSession = ''
    var enterReplayPendingGlobal = false

    var lastAnimSessionEl = null

    var pendingSendAnim = false
    var pendingSendAt = 0
    var pendingSendKind = 'send'
    var pendingSendBase = null
    function scrollHostOf() {
      try {
        return document.querySelector('[data-conversation-scroll], [data-chat-scroll], [data-chat-flow]') ||
          document.scrollingElement || null
      } catch (e) { return null }
    }
    
    function viewportWindow() {
      try {
        var host = scrollHostOf()
        if (!host || !host.getBoundingClientRect) return null
        var r = host.getBoundingClientRect()
        var h = r.height || (typeof window !== 'undefined' ? window.innerHeight : 0) || 0
        if (!h) return null
        var m = Math.max(160, h * 0.8)
        return { top: (r.top || 0) - m, bottom: (r.top || 0) + h + m }
      } catch (e) { return null }
    }
    function inViewport(el) {
      if (!ULTRA_WIN) return true
      try {
        var r = el.getBoundingClientRect ? el.getBoundingClientRect() : null
        if (!r) return true
        var top = r.top || 0
        return (top + (r.height || 0)) >= ULTRA_WIN.top && top <= ULTRA_WIN.bottom
      } catch (e) { return true }
    }

    
    function isAssistantCandidate(el, tx) {
      if (!el) return false
      if (!tx || tx.length < 2) return false
      if (isStatusChip(el, tx)) return false

      if (!/[A-Za-z0-9\u4e00-\u9fff\u3040-\u30ff]/.test(tx)) return false
      if (isHiddenProcess(el)) return false
      var r = el.getBoundingClientRect ? el.getBoundingClientRect() : null
      if (!r) return false

      if (r.height > 0 && r.height < 10) return false
      if (r.width > 0 && r.width < 12) return false
      return true
    }

    function tagOf(el) { return String((el && el.tagName) || '').toUpperCase() }



    function isWholePart(el) {
      if (!el || typeof el.getAttribute !== 'function') return false
      try {

        if (el.getAttribute('data-tool')) return true

        if (el.getAttribute('data-variant') === 'think') return true
        if (el.getAttribute('data-turn-process-member') !== null) return true
        if (el.getAttribute('data-chat-group-part') === 'reasoning') return true
        if (el.getAttribute('data-chat-flow-kind') === 'turn-process') return true
      } catch (e) {}
      return false
    }
    
    function nodeRootOf(item) {
      try {
        var slot = item.querySelector('[data-slot="conversation.chat.node"]')
        if (slot && (slot.firstElementChild || (slot.children && slot.children[0]))) return slot.firstElementChild || slot.children[0]
        if (slot) return slot
        if (item.firstElementChild || (item.children && item.children[0])) return item.firstElementChild || item.children[0]
      } catch (e) {}
      return item
    }
    
    function partBlocksOf(item) {
      var out = []
      try {
        var parts = item.querySelectorAll('[data-tool], [data-variant="think"]')
        if (parts && parts.length) {
          for (var i = 0; i < parts.length; i += 1) out.push(parts[i])
          return out
        }
      } catch (e) {}
      out.push(nodeRootOf(item))
      return out
    }

    
    function isHiddenProcess(el) {
      if (!el || typeof el.getAttribute !== 'function') return false
      try { return el.getAttribute('data-turn-process-hidden') !== null } catch (e) { return false }
    }



    function isHiddenTarget(el) {
      if (!el || typeof el.closest !== 'function') return false
      try {
        if (el.closest('[hidden]')) return true
        if (el.closest('[data-turn-process-hidden]')) return true
        if (el.closest('[data-turn-process-inline]')) return true
      } catch (e) {}
      return false
    }



    function visibleWidgetOf(item) {
      var roots = []
      try {
        var slot = item.querySelector('[data-slot="conversation.chat.node"]')
        if (slot && slot.children) roots = Array.prototype.slice.call(slot.children)
        else if (item.children) roots = Array.prototype.slice.call(item.children)
      } catch (e) { roots = [] }
      var best = null, bestArea = -1
      for (var i = 0; i < roots.length; i += 1) {
        var el = roots[i]
        if (!el || isHiddenTarget(el)) continue
        var r = el.getBoundingClientRect ? el.getBoundingClientRect() : null
        var area = r ? (r.width || 0) * (r.height || 0) : 0
        if (area <= 4) continue
        if (area > bestArea) { best = el; bestArea = area }
      }
      if (best) return best

      return nodeRootOf(item)
    }
    var __blockCache = (typeof WeakMap === 'function') ? new WeakMap() : null
    function isBlockByStyle(el) {
      try {
        var cs = window.getComputedStyle ? window.getComputedStyle(el) : null
        var d = cs && cs.display
        if (!d) return false
        return d === 'block' || d === 'list-item' || d === 'table-cell' ||
          d === 'table-caption' || d === 'flex' || d === 'grid' || d === 'flow-root'
      } catch (e) { return false }
    }
    function isBlockEl(el) {
      if (!el) return false
      var t = tagOf(el)

      if (ASSIST_INLINE_TAGS[t]) return false
      if (ASSIST_BLOCK_TAGS[t]) return true

      if (__blockCache && __blockCache.has(el)) return __blockCache.get(el)
      var r = isBlockByStyle(el)
      if (__blockCache) __blockCache.set(el, r)
      return r
    }

    
    function hasClassName(el, name) {
      try {
        var cn = ' ' + String((el && el.className) || '') + ' '
        return cn.indexOf(' ' + name + ' ') !== -1 || cn.indexOf('_' + name + ' ') !== -1
      } catch (e) { return false }
    }
    
    function isTableWrapper(el) {
      if (!el || tagOf(el) !== 'DIV') return false

      if (hasClassName(el, 'markdown')) return false
      var kids = el.children || []
      if (kids.length !== 1) return false
      return tagOf(kids[0]) === 'TABLE'
    }



    function findAssistantContents(item, opts) {
      if (!item) return []
      var skip = (opts && opts.skip) || null
      var out = []
      var guard = 0
      function visit(el, depth) {

        if (!el || depth > 60 || guard > perfGuard()) return
        guard += 1
        if (skip && el !== item && skip.has(el)) return
        var kids = (el && el.children) || []
        if (el !== item && ASSIST_INLINE_TAGS[tagOf(el)]) {

          for (var i2 = 0; i2 < kids.length; i2 += 1) visit(kids[i2], depth + 1)
          return
        }
        if (el !== item && isHiddenProcess(el)) return

        if (el !== item && hasClassName(el, 'md-code-block')) {
          var preEl = null
          try {
            for (var pk = 0; pk < kids.length; pk += 1) { if (tagOf(kids[pk]) === 'PRE') { preEl = kids[pk]; break } }
            if (!preEl) preEl = el.querySelector('pre')
          } catch (e) { preEl = null }
          if (preEl) {
            var txPre = preEl.textContent ? preEl.textContent.trim() : ''
            if (isAssistantCandidate(preEl, txPre)) out.push(preEl)
          }
          return
        }

        if (el !== item && isTableWrapper(el)) {
          var txW = el.textContent ? el.textContent.trim() : ''
          if (isAssistantCandidate(el, txW)) out.push(el)
          return
        }

        if (el !== item && isWholePart(el)) {
          if (skip) return
          var txPart = el.textContent ? el.textContent.trim() : ''
          if (isAssistantCandidate(el, txPart)) out.push(el)
          return
        }

        if (el !== item && ASSIST_ATOMIC_TAGS[tagOf(el)]) {
          var txA = el.textContent ? el.textContent.trim() : ''
          if (isAssistantCandidate(el, txA)) out.push(el)
          return
        }
        var hasBlockKid = false
        for (var i = 0; i < kids.length; i += 1) { if (isBlockEl(kids[i])) { hasBlockKid = true; break } }
        if (el !== item && isBlockEl(el) && !hasBlockKid) {
          var tx = el.textContent ? el.textContent.trim() : ''
          if (isAssistantCandidate(el, tx)) out.push(el)
          return
        }
        for (var j = 0; j < kids.length; j += 1) visit(kids[j], depth + 1)
      }
      visit(item, 0)

      var mb = perfMaxBlocks()
      if (out.length > mb) {
        var scored = out.map(function (el) {
          return { el: el, n: (el.textContent || '').trim().length }
        })
        scored.sort(function (a, b) { return b.n - a.n })
        var keep = scored.slice(0, mb).map(function (o) { return o.el })
        out = out.filter(function (el) { return keep.indexOf(el) >= 0 })
      }
      return out
    }

    
    function findAssistantContent(item) {
      var list = findAssistantContents(item)
      if (!list.length) return null
      var best = list[0], bestLen = (best.textContent || '').trim().length
      for (var i = 1; i < list.length; i += 1) {
        var n = (list[i].textContent || '').trim().length
        if (n > bestLen) { best = list[i]; bestLen = n }
      }
      return best
    }



    var appliedElsRef = (typeof Set === 'function') ? new Set() : null
    var lastGcT = 0

    function gcAppliedDetached() {
      if (!appliedElsRef || !appliedElsRef.size) return
      var now = Date.now()
      if (now - lastGcT < 5000) return
      lastGcT = now
      var dead = []
      appliedElsRef.forEach(function (el) {
        var alive = el && el.isConnected !== false &&
          (el.parentElement != null || el.parent != null)
        if (!alive) dead.push(el)
      })
      for (var i = 0; i < dead.length; i += 1) {
        try { clearSkin(dead[i]) } catch (e) {}
        appliedElsRef.delete(dead[i])
      }
    }



    var CHATSTYLE = false
    var chatStyleSession = ''

    var chatUnreadMap = {}
    var chatSessStatus = {}
    var queuecastEl = null
    var queuecastSig = ''
    var chatStyleDoneKey = ''

    function pageVisibleNow() {
      try { return !(document.visibilityState === 'hidden' || document.hidden === true) } catch (e) { return true }
    }
    function viewportH() { return (typeof window !== 'undefined' && window.innerHeight) || 800 }
    function inViewNow(el) {
      try {
        var r = el.getBoundingClientRect()
        var top = Number(r.top) || 0
        var h = Number(r.height) || 0
        var bottom = r.bottom != null ? Number(r.bottom) : top + h
        return h > 0 && bottom > 0 && top < viewportH()
      } catch (e) { return false }
    }
    function sessionIdNow() {
      try {
        var el = document.querySelector('[data-conversation-session]')
        return el ? String(el.getAttribute('data-conversation-session') || '') : ''
      } catch (e) { return '' }
    }
    function statusTexts(st) {
      return {
        read: String(st.statusReadText || '已读').slice(0, 24),
        unread: String(st.statusUnreadText || '未读').slice(0, 24),
        pending: String(st.statusPendingText || '未读').slice(0, 24)
      }
    }
    function flowKeyOf(item, index) {
      try {

        var stable = String(item.getAttribute('data-chat-node-key') ||
          item.getAttribute('data-chat-flow-id') || '')
        if (stable) return stable
        return String(item.getAttribute('data-chat-flow-kind') || '') + '#' + index
      } catch (e) { return '#' + index }
    }
    function currentFlowList() {
      try { return document.querySelector('[data-chat-flow]') } catch (e) { return null }
    }

    function parentOf(el) { return el ? (el.parentElement || el.parentNode) : null }

    
    function setStatusAfter(item, kind, text, key) {
      var parent = parentOf(item)
      if (!parent) return
      var el = item.__dshqfStatusEl
      var valid = !!el && parentOf(el) === parent &&
        item.nextElementSibling === el &&
        el.getAttribute('data-dshqf-status-for') === key
      if (!valid) {

        if (el && parentOf(el)) { try { el.remove() } catch (e) {} }
        el = null
        var next = item.nextElementSibling
        if (next && next.hasAttribute && next.hasAttribute('data-dshqf-status') &&
            next.getAttribute('data-dshqf-status-for') === key) el = next
        else {
          el = document.createElement('div')
          el.setAttribute('data-dshqf-status', '1')
          el.setAttribute('data-dshqf-status-for', key)
          el.setAttribute('data-kind', kind)
          parent.insertBefore(el, item.nextSibling)
        }
        item.__dshqfStatusEl = el
      }
      if (el.getAttribute('data-kind') !== kind) el.setAttribute('data-kind', kind)
      if (el.textContent !== text) el.textContent = text
    }

    function applySidebarStatus(texts, map) {
      var rows = []
      try { rows = document.querySelectorAll('[data-row-key^="session:"]') } catch (e) { rows = [] }
      for (var i = 0; i < rows.length; i += 1) {
        var key = String(rows[i].getAttribute('data-row-key') || '')
        var sid = key.slice('session:'.length)
        var stt = map[sid] || ''
        if (!stt) stt = texts.read
        var titleEl = null
        try {
          titleEl = rows[i].querySelector('[class*="title"], [class*="preview"]') || rows[i]
        } catch (e) { titleEl = rows[i] }
        var span = titleEl.querySelector ? titleEl.querySelector('[data-dshqf-side-status]') : null
        if (!span) {
          span = document.createElement('span')
          span.setAttribute('data-dshqf-side-status', '1')
          if (titleEl.insertBefore) titleEl.insertBefore(span, titleEl.firstChild)
          else titleEl.appendChild(span)
        }
        var want = stt + ' · '
        if (span.textContent !== want) span.textContent = want
      }
    }

    function clearChatStatus() {
      CHATSTYLE = false
      chatStyleDoneKey = ''
      try {
        var els = document.querySelectorAll('[data-dshqf-status]')
        for (var i = 0; i < els.length; i += 1) els[i].remove()
        var side = document.querySelectorAll('[data-dshqf-side-status]')
        for (var j = 0; j < side.length; j += 1) side[j].remove()
        if (queuecastEl && parentOf(queuecastEl)) queuecastEl.remove()
        queuecastEl = null
        queuecastSig = ''
        if (document.body) document.body.removeAttribute('data-dshqf-chatstyle')
      } catch (e) {}
    }


    var queuecastRefreshTimer = null
    var queuecastExpanded = false
    var queuecastSteering = {}
    var queuecastExpandTriedAt = 0
    var QUEUE_TEXT_LIMIT = 500

    function refreshQueueSoon() {
      if (queuecastRefreshTimer) return
      queuecastRefreshTimer = setTimeout(function () {
        queuecastRefreshTimer = null
        try { scan(true) } catch (e) {}
      }, 260)
    }

    function nativeDockRows() {
      try {
        var dock = document.querySelector('[data-queue-dock]')
        return dock ? dock.querySelectorAll('li') : []
      } catch (e) { return [] }
    }

    function pendingSteeringPresent() {
      try { return !!document.querySelector('[data-pending-steering], [data-submission-echo]') } catch (e) { return false }
    }
    function ensureNativeDockExpanded() {
      try {
        var dock = document.querySelector('[data-queue-dock]')
        if (!dock) return false
        if (dock.querySelectorAll('li').length) return false
        var btn = dock.querySelector('button[aria-expanded]')
        if (!btn || btn.getAttribute('aria-expanded') !== 'false') return false
        if (Date.now() - queuecastExpandTriedAt < 800) return true
        queuecastExpandTriedAt = Date.now()
        try { btn.click() } catch (e) {}
        queuecastSig = ''
        setTimeout(function () { try { scan(true) } catch (e) {} }, 90)
        return true
      } catch (e) { return false }
    }

    
    function queueContentText(content) {
      if (!Array.isArray(content)) return null
      var parts = []
      for (var i = 0; i < content.length; i += 1) {
        var blk = content[i]
        if (!blk || blk.type !== 'text' || typeof blk.text !== 'string') return null
        parts.push(blk.text)
      }
      var t = parts.join('')
      return t || null
    }
    function queueRowFullText(row) {
      if (!row) return null
      try {
        var keys = Object.keys(row)
        var fiber = null
        for (var k = 0; k < keys.length; k += 1) {
          if (keys[k].indexOf('__reactFiber$') === 0 || keys[k].indexOf('__reactInternalInstance$') === 0) {
            fiber = row[keys[k]]
            break
          }
        }
        if (!fiber) return null
        var guard = 0
        function seek(f, depth) {
          if (!f || guard > 300 || depth > 8) return null
          guard += 1
          try {
            var props = f.memoizedProps
            if (props) {
              var t0 = queueContentText(props.content)
              if (t0) return t0
              if (props.row) {
                var t1 = queueContentText(props.row.content)
                if (t1) return t1
              }
            }

            var hook = f.memoizedState
            var hg = 0
            while (hook && hg < 40) {
              hg += 1
              var st = hook.memoizedState
              if (Array.isArray(st)) {
                for (var i = 0; i < st.length; i += 1) {
                  var it = st[i]
                  if (!it || typeof it !== 'object') continue
                  var t2 = queueContentText(it.content)
                  if (t2) return t2
                }
              }
              hook = hook.next
            }
          } catch (e) {}
          return seek(f.return, depth + 1)
        }
        return seek(fiber, 0)
      } catch (e) { return null }
    }

    function nativeQueueButtons(row) {
      var out = { steer: null, edit: null, remove: null, save: null, cancel: null }
      var list = []
      try { list = row ? row.querySelectorAll('button') : [] } catch (e) { list = [] }
      for (var i = 0; i < list.length; i += 1) {
        var al = String(list[i].getAttribute('aria-label') || '')
        if (/插话|steer/i.test(al)) out.steer = list[i]
        else if (/保存排队|save/i.test(al)) out.save = list[i]
        else if (/取消编辑|cancel/i.test(al)) out.cancel = list[i]
        else if (/编辑排队|^编辑|edit/i.test(al)) out.edit = list[i]
        else if (/删除排队|删除|remove/i.test(al)) out.remove = list[i]
      }

      if (!out.edit && list[0]) out.edit = list[0]
      if (!out.remove && list.length > 1) out.remove = list[list.length - 2]
      if (!out.steer && list.length) out.steer = list[list.length - 1]
      return out
    }

    
    function clickNativeQueue(index, kind, text) {
      var rows = nativeDockRows()
      var row = rows[index]
      if (!row) return false
      var btn = nativeQueueButtons(row)
      if (kind === 'steer') {
        if (!btn.steer || btn.steer.disabled) return false
        if (text) {
          queuecastSteering[String(text)] = Date.now()
          queuecastSig = ''
        }
        noteSendEvent('steer')
        btn.steer.click()
        refreshQueueSoon()
        return true
      }
      if (kind === 'remove') {
        if (!btn.remove || btn.remove.disabled) return false
        btn.remove.click()
        refreshQueueSoon()
        return true
      }
      if (kind === 'edit') {
        if (!btn.edit || btn.edit.disabled) return false
        btn.edit.click()
        setTimeout(function () {
          try {
            var ta = row.querySelector('textarea')
            if (!ta) return
            try {
              var setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set
              setter.call(ta, String(text || ''))
            } catch (e) { ta.value = String(text || '') }
            try { ta.dispatchEvent(new Event('input', { bubbles: true })) } catch (e) {}
            setTimeout(function () {
              try {
                var b2 = nativeQueueButtons(row)
                if (b2.save && !b2.save.disabled) b2.save.click()
                refreshQueueSoon()
              } catch (e) {}
            }, 80)
          } catch (e) {}
        }, 80)
        return true
      }
      return false
    }

    
    function pruneQueuecastDuplicates() {
      var all = []
      try { all = document.querySelectorAll('[data-dshqf-queuecast]') } catch (e) { all = [] }
      for (var i = 0; i < all.length; i += 1) {
        if (all[i] !== queuecastEl || parentOf(all[i]) == null) {
          try { all[i].remove() } catch (e) {}
        }
      }
    }

    function queueDisplayText(text) {
      var t = String(text || '')
      return t.length > QUEUE_TEXT_LIMIT ? t.slice(0, QUEUE_TEXT_LIMIT) + '…' : t
    }

    
    function makeNativeMsgEl(text) {
      var tpl = null
      try {
        var users = document.querySelectorAll('[data-chat-flow-kind="user"], [data-chat-flow-kind="steering"]')
        if (users.length) tpl = users[users.length - 1]
      } catch (e) { tpl = null }
      var msgEl = null
      if (tpl && tpl.cloneNode) {
        try {
          msgEl = tpl.cloneNode(true)
          msgEl.removeAttribute('data-chat-flow-kind')
          msgEl.removeAttribute('data-chat-node-key')
          msgEl.removeAttribute('data-chat-flow-id')
          msgEl.removeAttribute('data-turn-process-hidden')
          var sts = msgEl.querySelectorAll('[data-dshqf-status], [data-dshqf-queuecast]')
          for (var q = 0; q < sts.length; q += 1) { try { sts[q].remove() } catch (e) {} }
          var bubs = msgEl.querySelectorAll('[class*="bubble"]')
          for (var qb = 0; qb < bubs.length; qb += 1) {
            try {
              clearSkin(bubs[qb])
              bubs[qb].className = String(bubs[qb].className || '').replace(/__dshqf_[a-z]+/g, '')
            } catch (e) {}
          }
          if (bubs.length) bubs[0].textContent = queueDisplayText(text)
          else msgEl.textContent = queueDisplayText(text)
          msgEl.className = String(msgEl.className || '') + ' __dshqf_qcMsg'
          return msgEl
        } catch (e) { msgEl = null }
      }
      msgEl = document.createElement('div')
      msgEl.className = '__dshqf_qcMsg'
      var bodyEl = document.createElement('div')
      bodyEl.className = '__dshqf_qcBody'
      var bubble = document.createElement('div')
      bubble.className = '__dshqf_qcBubble'
      bubble.textContent = queueDisplayText(text)
      bodyEl.appendChild(bubble)
      msgEl.appendChild(bodyEl)
      return msgEl
    }

    function paintQueueBubble(msgEl, ub) {
      if (!ub) return
      try {
        var rec0 = frameImgs[ub.id]
        if (!rec0 || !rec0.ready || !rec0.imgs.length) {
          ensureFrames(ub, function () { paintQueueBubble(msgEl, ub) })
          return
        }
        var bubEl = msgEl.querySelector ? msgEl.querySelector('[class*="bubble"]') : null
        if (!bubEl) return
        bubEl.setAttribute('data-dshqf', ub.id)
        paint(bubEl, ub, 1, true)
      } catch (e) {}
    }

    function repaintQueuecast(ub) {
      if (!queuecastEl || !ub) return
      try {
        var msgs = queuecastEl.querySelectorAll('.__dshqf_qcMsg')
        for (var i = 0; i < msgs.length; i += 1) paintQueueBubble(msgs[i], ub)
      } catch (e) {}
    }

    
    function startInlineQueueEdit(bubbleEl, originalText, rowIndex) {
      if (!bubbleEl) return
      var rect0 = null
      try { rect0 = bubbleEl.getBoundingClientRect ? bubbleEl.getBoundingClientRect() : null } catch (e) {}
      var cs0 = null
      try { cs0 = window.getComputedStyle ? window.getComputedStyle(bubbleEl) : null } catch (e) {}
      try { bubbleEl.textContent = '' } catch (e) { return }
      // 保住原气泡的宽高 避免清空文字后收缩
      try {
        if (rect0 && rect0.width > 0) bubbleEl.style.minWidth = Math.ceil(rect0.width) + 'px'
        if (rect0 && rect0.height > 0) bubbleEl.style.minHeight = Math.ceil(rect0.height) + 'px'
        bubbleEl.style.boxSizing = 'border-box'
      } catch (e) {}
      var ta = document.createElement('textarea')
      ta.className = '__dshqf_qcEditor'
      ta.rows = 1
      ta.value = String(originalText || '')
      bubbleEl.appendChild(ta)
      try {
        var padY = cs0 ? ((parseFloat(cs0.paddingTop) || 0) + (parseFloat(cs0.paddingBottom) || 0)) : 0
        if (rect0 && rect0.height > padY + 8) ta.style.minHeight = Math.ceil(rect0.height - padY) + 'px'
        ta.style.height = 'auto'
        ta.style.height = Math.max(24, ta.scrollHeight || 0) + 'px'
      } catch (e) {}
      try { ta.focus() } catch (e) {}
      ta.addEventListener('keydown', function (ev) {
        if (ev.key === 'Escape') {
          ev.preventDefault()
          closeInlineQueueEdit(bubbleEl, originalText)
          return
        }
        if (ev.key !== 'Enter' || ev.shiftKey || ev.isComposing) return
        ev.preventDefault()
        var v = String(ta.value || '').trim()
        if (!v) return
        clickNativeQueue(rowIndex, 'edit', v)
        queuecastSig = ''
        refreshQueueSoon()
      })
      ta.addEventListener('input', function () {
        try {
          ta.style.height = 'auto'
          ta.style.height = (ta.scrollHeight + 2) + 'px'
        } catch (e) {}
      })
    }
    function closeInlineQueueEdit(bubbleEl, originalText) {
      try {
        bubbleEl.style.minWidth = ''
        bubbleEl.style.minHeight = ''
        bubbleEl.style.boxSizing = ''
        bubbleEl.textContent = queueDisplayText(originalText)
        queuecastSig = ''
        refreshQueueSoon()
      } catch (e) {}
    }

    
    // 待下达指令
    function syncQueuecast(state, texts) {
      var rows = nativeDockRows()
      if (!rows.length && ensureNativeDockExpanded()) {
        // 正在展开原生队列 保留上一轮镜像 下一轮扫描再重建
        return queuecastEl ? 1 : 0
      }
      var nowSteer = Date.now()
      for (var sk in queuecastSteering) {
        if (nowSteer - queuecastSteering[sk] > 6000) delete queuecastSteering[sk]
      }
      var items = []
      for (var i = 0; i < rows.length; i += 1) {
        var prev = rows[i].querySelector('[class*="preview"]')
        var txt = prev ? String(prev.textContent || '').trim() : ''

        var fullTxt = queueRowFullText(rows[i])
        if (fullTxt && fullTxt.length > txt.length) txt = fullTxt
        if (!txt) continue
        // 刚点过插话发送的消息在原生 pending steering 已经出现时立刻从镜像移除
        if (queuecastSteering[txt] && pendingSteeringPresent()) continue
        items.push({ text: txt, nativeIndex: i })
      }
      var flow = currentFlowList()
      var flowParent = parentOf(flow)
      pruneQueuecastDuplicates()
      if (!items.length || !flow || !flowParent) {
        if (queuecastEl && parentOf(queuecastEl)) queuecastEl.remove()
        queuecastEl = null
        queuecastSig = ''
        queuecastExpanded = false
        return 0
      }

      if (!queuecastEl || parentOf(queuecastEl) !== flow) {
        if (queuecastEl && parentOf(queuecastEl)) queuecastEl.remove()
        queuecastEl = document.createElement('div')
        queuecastEl.setAttribute('data-dshqf-queuecast', '1')
        flow.appendChild(queuecastEl)
        queuecastSig = ''
      } else {

        var flowKids = flow.children || []
        if (flowKids[flowKids.length - 1] !== queuecastEl) flow.appendChild(queuecastEl)
      }
      var ub = null
      if (state.userBubble) {
        for (var b = 0; b < (lastBubbles || []).length; b += 1) {
          if (lastBubbles[b] && lastBubbles[b].id === state.userBubble) { ub = lastBubbles[b]; break }
        }
      }

      var sig = JSON.stringify([
        items.map(function (it) { return [it.nativeIndex, it.text] }),
        ub ? ub.id : '',
        texts.pending || '',
        queuecastExpanded ? 'open' : 'close'
      ])
      if (sig === queuecastSig) { repaintQueuecast(ub); return items.length }
      queuecastSig = sig
      queuecastEl.textContent = ''

      function buildItem(it, compact) {
        var wrap = document.createElement('div')
        wrap.className = '__dshqf_qc' + (compact ? ' __dshqf_qcItem' : '')
        var msgEl = makeNativeMsgEl(it.text)
        wrap.appendChild(msgEl)
        var actions = document.createElement('div')
        actions.className = '__dshqf_qcActions'
        function mkBtn(label, kind) {
          var bt = document.createElement('button')
          bt.type = 'button'
          bt.className = '__dshqf_qcBtn'
          bt.textContent = label
          bt.addEventListener('click', function (ev) {
            try { if (ev && ev.preventDefault) ev.preventDefault(); if (ev && ev.stopPropagation) ev.stopPropagation() } catch (e) {}
            if (kind === 'edit') {
              var be = msgEl.querySelector ? msgEl.querySelector('[class*="bubble"]') : null
              if (be) startInlineQueueEdit(be, it.text, it.nativeIndex)
              return
            }
            clickNativeQueue(it.nativeIndex, kind, it.text)
          })
          return bt
        }
        actions.appendChild(mkBtn('插话发送', 'steer'))
        actions.appendChild(mkBtn('编辑', 'edit'))
        actions.appendChild(mkBtn('删除', 'remove'))
        wrap.appendChild(actions)
        var statusEl = document.createElement('div')
        statusEl.className = '__dshqf_qcStatus'
        statusEl.setAttribute('data-dshqf-status', '1')
        statusEl.setAttribute('data-kind', 'queue')
        statusEl.textContent = texts.pending
        wrap.appendChild(statusEl)
        queuecastEl.appendChild(wrap)
        paintQueueBubble(msgEl, ub)
        return wrap
      }

      if (items.length === 1) {
        buildItem(items[0], false)
        return 1
      }

      var summary = document.createElement('div')
      summary.className = '__dshqf_qc'
      var sumMsg = makeNativeMsgEl('还有 ' + items.length + ' 条插话在队列')
      summary.appendChild(sumMsg)
      var toggle = document.createElement('button')
      toggle.type = 'button'
      toggle.className = '__dshqf_qcToggle'
      toggle.textContent = queuecastExpanded ? '收起队列 ▴' : '查看 ' + items.length + ' 条插话 ▾'
      toggle.addEventListener('click', function (ev) {
        try { if (ev && ev.preventDefault) ev.preventDefault() } catch (e) {}
        queuecastExpanded = !queuecastExpanded
        queuecastSig = ''
        try { syncQueuecast(engineState, statusTexts(engineState || {})) } catch (e) {}
      })
      summary.appendChild(toggle)
      queuecastEl.appendChild(summary)
      paintQueueBubble(sumMsg, ub)
      if (queuecastExpanded) {
        var drawer = document.createElement('div')
        drawer.className = '__dshqf_qcDrawer'
        queuecastEl.appendChild(drawer)
        for (var k = 0; k < items.length; k += 1) {
          ;(function (it) {
            var wrap = document.createElement('div')
            wrap.className = '__dshqf_qc __dshqf_qcItem'
            var msgEl = makeNativeMsgEl(it.text)
            wrap.appendChild(msgEl)
            var actions = document.createElement('div')
            actions.className = '__dshqf_qcActions'
            function mkBtn(label, kind) {
              var bt = document.createElement('button')
              bt.type = 'button'
              bt.className = '__dshqf_qcBtn'
              bt.textContent = label
              bt.addEventListener('click', function (ev) {
                try { if (ev && ev.preventDefault) ev.preventDefault(); if (ev && ev.stopPropagation) ev.stopPropagation() } catch (e) {}
                if (kind === 'edit') {
                  var be = msgEl.querySelector ? msgEl.querySelector('[class*="bubble"]') : null
                  if (be) startInlineQueueEdit(be, it.text, it.nativeIndex)
                  return
                }
                clickNativeQueue(it.nativeIndex, kind, it.text)
              })
              return bt
            }
            actions.appendChild(mkBtn('插话发送', 'steer'))
            actions.appendChild(mkBtn('编辑', 'edit'))
            actions.appendChild(mkBtn('删除', 'remove'))
            wrap.appendChild(actions)
            var st = document.createElement('div')
            st.className = '__dshqf_qcStatus'
            st.setAttribute('data-dshqf-status', '1')
            st.setAttribute('data-kind', 'queue')
            st.textContent = texts.pending
            wrap.appendChild(st)
            drawer.appendChild(wrap)
            paintQueueBubble(msgEl, ub)
          })(items[k])
        }
      }
      return items.length
    }

    
    function assistantBodyOf(item) {
      if (!item) return null
      var body = null
      try { body = item.querySelector('[class*="markdown"]') } catch (e) { body = null }
      if (body) return body
      try {
        var nodes = item.querySelectorAll('p, pre, blockquote, ul, ol, table, [class*="md-code-block"]')
        if (nodes && nodes.length) return nodes[nodes.length - 1]
      } catch (e) {}
      return null
    }
    function hasProcessParts(item) {
      try {
        return !!(item.querySelector('[data-tool], [data-variant="think"], [data-turn-process-member], [data-turn-process-inline]'))
      } catch (e) { return false }
    }

    
    // 已读未读
    function applyChatStyle(state) {
      if (state.chatStyleStatus !== true) {
        if (CHATSTYLE) clearChatStatus()
        return
      }
      CHATSTYLE = true
      try { if (document.body) document.body.setAttribute('data-dshqf-chatstyle', '1') } catch (e) {}
      var texts = statusTexts(state)
      var sid = sessionIdNow()
      if (sid !== chatStyleSession) {
        chatStyleSession = sid
        chatUnreadMap = {}
      }
      var anyUnread = false

      var userItems = []
      try { userItems = document.querySelectorAll('[data-chat-flow-kind="user"], [data-chat-flow-kind="steering"]') } catch (e) { userItems = [] }
      for (var i = 0; i < userItems.length; i += 1) {
        setStatusAfter(userItems[i], 'user', texts.read, 'user:' + flowKeyOf(userItems[i], i))
      }

      var asstItems = []
      try { asstItems = document.querySelectorAll('[data-chat-flow-kind="assistant-step"]') } catch (e) { asstItems = [] }
      var visibleNow = pageVisibleNow()
      for (var a = 0; a < asstItems.length; a += 1) {
        var asstItem = asstItems[a]
        var bodyEl = assistantBodyOf(asstItem)

        if (!bodyEl && hasProcessParts(asstItem)) {
          var oldSt = asstItem.__dshqfStatusEl
          if (oldSt && parentOf(oldSt)) { try { oldSt.remove() } catch (e) {} }
          asstItem.__dshqfStatusEl = null
          continue
        }
        var key = 'asst:' + flowKeyOf(asstItem, a)
        var unread = chatUnreadMap[key] === true
        if (visibleNow) {
          if (unread) { delete chatUnreadMap[key]; unread = false }
        } else if (!('seen' + key in chatUnreadMap)) {

          chatUnreadMap['seen' + key] = true
          chatUnreadMap[key] = true
          unread = true
        }
        if (unread) anyUnread = true

        if (bodyEl) setStatusAfter(bodyEl, 'assistant', unread ? texts.unread : texts.read, key)
      }

      var queueCount = 0
      try { queueCount = syncQueuecast(state, texts) } catch (e) { queueCount = 0 }
      if (queueCount > 0) anyUnread = true

      try {
        if (sid) chatSessStatus[sid] = anyUnread ? texts.unread : texts.read
        applySidebarStatus(texts, chatSessStatus)
      } catch (e) {}
    }

    var lastScanT = 0

    
    function userMessageItems() {
      var out = []
      try {

        var flowUsers = document.querySelectorAll('[data-chat-flow-kind="user"], [data-chat-flow-kind="steering"]')
        for (var i = 0; i < flowUsers.length; i += 1) out.push(flowUsers[i])
      } catch (e) {}
      try {

        var pend = document.querySelectorAll('[data-pending-steering], [data-submission-echo]')
        for (var p = 0; p < pend.length; p += 1) {
          var el = pend[p]
          try {
            if (el.closest && el.closest('[data-queue-dock]')) continue
            if (el.closest && el.closest('[data-dshqf-queuecast]')) continue
            if (out.indexOf(el) !== -1) continue
            out.push(el)
          } catch (e) {}
        }
      } catch (e) {}
      return out
    }


    function standaloneAnimTargets() {
      var out = []
      try {
        var users = userMessageItems()
        for (var i = 0; i < users.length; i += 1) {
          var b = null
          try { b = users[i].querySelector('[class*="bubble"]') } catch (e) { b = null }
          if (b) out.push(b)
        }
      } catch (e) {}
      try {
        var asst = document.querySelectorAll('[data-chat-flow-kind="assistant-step"]')
        for (var a = 0; a < asst.length; a += 1) {
          var body = assistantBodyOf(asst[a])
          if (body) out.push(body)
        }
      } catch (e) {}
      return out
    }
    function replayStandaloneAnimations() {
      if (ANIM_OFF) return
      var st = engineState || {}
      if (!st.animPreset || st.animPreset === 'none' || !ANIM_VALUE[st.animPreset]) return
      var targets = standaloneAnimTargets()
      for (var i = 0; i < targets.length; i += 1) {
        try { animateIn(targets[i], { id: 'standalone' }, false, true) } catch (e) {}
      }
    }
    function applyStandaloneAnimations(state) {
      if (!state || ANIM_OFF) return
      var preset = state.animPreset || 'none'
      if (preset === 'none' || preset === 'custom' || !ANIM_VALUE[preset]) return

      try {
        var sessEl = document.querySelector('[data-conversation-session]')
        if (sessEl && sessEl !== lastAnimSessionEl) {
          lastAnimSessionEl = sessEl
          lastAnimSession = sessionIdNow()
          if (state.animOnEnter === true) replayStandaloneAnimations()
        }
      } catch (e) {}

      var bub = pickPendingSendBubble()
      if (!bub) return
      try {
        bub.__dshqfPlay = true
        pendingSendAnim = false
        pendingSendBase = null
        animateIn(bub, { id: 'standalone' }, false)
      } catch (e) {}
    }

    function scan(force) {
      if (!engineState) return
      if (typeof document === 'undefined' || !document.body) return

      if (!force) {
        var nowS = Date.now()
        if (nowS - lastScanT < 100) return
        lastScanT = nowS
      }
      var state = engineState
      if (state.enabled === false) {

        try { applyStandaloneAnimations(state) } catch (e) {}
        try { clearComposerSkin() } catch (e) {}
        try { clearChatStatus() } catch (e) {}
        return
      }

      PERF_MODE = (state.perfMode === 'normal' || state.perfMode === 'ultra') ? state.perfMode : 'medium'
      ALWAYS_ASSIST = state.assistantAlwaysApply === true || PENDING_ALWAYS
      ULTRA_WIN = state.ultraMinimal ? viewportWindow() : null
      ANIM_OFF = state.disableAllAnim === true
      if (!ANIM_OFF && ANIM_OFF_PREV) {

        var skinned = document.querySelectorAll('[data-dshqf]')
        for (var sk = 0; sk < skinned.length; sk += 1) {
          try {
            skinned[sk].__dshqfLastFrame = 0
            skinned[sk].__dshqfDirty = true
          } catch (e) {}
        }
      }
      ANIM_OFF_PREV = ANIM_OFF

      var enterReplayPending = false
      try {
        var sessEl = document.querySelector('[data-conversation-session]')
        if (sessEl && sessEl !== lastAnimSessionEl) {
          lastAnimSessionEl = sessEl
          lastAnimSession = sessionIdNow()
          if (state.animOnEnter === true) { enterReplayPending = true; enterReplayPendingGlobal = true }
        }
      } catch (e) {}
      if (ANIM_OFF) {

        for (var ft in frameTimers) {
          if (Object.prototype.hasOwnProperty.call(frameTimers, ft) &&
              frameTimers[ft] !== null && frameTimers[ft] !== undefined) {
            try { clearInterval(frameTimers[ft]) } catch (e) {}
            frameTimers[ft] = null
          }
        }

        for (var fk in frameTick) {
          if (Object.prototype.hasOwnProperty.call(frameTick, fk)) frameTick[fk] = 0
        }
      }
      preloadBubbles(state)
      ensureAppCss()

      try { paintComposer() } catch (e) {}

      try { applyChatStyle(state) } catch (e) {}
      gcAppliedDetached()

      try {
        var flow2 = document.querySelector('[data-chat-flow]') ||
          document.querySelector('[data-conversation-content]') ||
          document.querySelector('[data-conversation-scroll]')
        var rw3 = flow2 ? flow2.getBoundingClientRect().width : 0
        if (rw3 > 200) MD_MAX_WIDTH = Math.round(rw3)
      } catch (e) {}

      var structuralSig = [state.userBubble, state.assistantBubble].join('|')

      var ovSig = ''
      try {
        var ovParts = []
        for (var ovb = 0; ovb < (lastBubbles || []).length; ovb += 1) {
          var bb0 = lastBubbles[ovb]
          if (!bb0) continue
          var zp0 = Array.isArray(bb0.zoomPoint) ? bb0.zoomPoint.join(',') : ''
          var fi0 = bb0.frameInsets
            ? [bb0.frameInsets.top, bb0.frameInsets.right, bb0.frameInsets.bottom, bb0.frameInsets.left].join(',')
            : ''
          ovParts.push([
            bb0.id, bb0.sliceSource || '', zp0, fi0,
            bb0.color || '', bb0.linkColor || '', bb0.timeMs || '', bb0.repeat || '', bb0.count || '',
            bb0.name || ''
          ].join(':'))
        }
        ovSig = ovParts.sort().join(';')
      } catch (e) { ovSig = '' }

      var paramSig = [state.scale, state.fillInset, state.fillColor,
        state.animPreset || 'none', state.animOnEnter === true ? 'enter' : 'once', state.speed,
        state.disableAllAnim === true ? 'anim-off' : 'anim-on',
        state.replaceComposer === true ? 'composer' : '', state.composerBubble || '',
        state.userMinPad, state.assistantMinPad,
        state.assistantAlwaysApply === true ? 'always' : 'idle', ovSig].join('|')
      function forceRepaintAll() {
        var els = document.querySelectorAll('[data-dshqf]')
        for (var fi = 0; fi < els.length; fi += 1) {
          try {
            els[fi].__dshqfLastFrame = -1
            els[fi].__dshqfDirty = true
            els[fi].__dshqfAnimKey = ''
            els[fi].__dshqfRafCount = 0
          } catch (e) {}
        }
      }
      if (structuralSig !== lastStructuralSig) {
        lastStructuralSig = structuralSig
        lastApplySig = paramSig
        var stale = document.querySelectorAll('[data-dshqf]')
        for (var si2 = 0; si2 < stale.length; si2 += 1) clearSkin(stale[si2])
        for (var kk in PAINTED) { if (Object.prototype.hasOwnProperty.call(PAINTED, kk)) delete PAINTED[kk] }
        forceRepaintAll()
      } else if (paramSig !== lastApplySig) {
        lastApplySig = paramSig

        for (var kk2 in PAINTED) { if (Object.prototype.hasOwnProperty.call(PAINTED, kk2)) delete PAINTED[kk2] }
        try { composeCache.clear() } catch (e) {}
        forceRepaintAll()
        try { for (var hk in MEASURED_HOLE) { if (Object.prototype.hasOwnProperty.call(MEASURED_HOLE, hk)) delete MEASURED_HOLE[hk] } } catch (e) {}
        try { INNER_RECT_CACHE = {} } catch (e) {}

        try { for (var mi2 in MEASURED_INSETS) { if (Object.prototype.hasOwnProperty.call(MEASURED_INSETS, mi2)) delete MEASURED_INSETS[mi2] } } catch (e) {}

        for (var bi2 = 0; bi2 < (lastBubbles || []).length; bi2 += 1) {
          if (lastBubbles[bi2]) lastBubbles[bi2].__dshqfFillCache = undefined
        }
        if (AUTO_SEAM) { for (var sk2 in AUTO_SEAM) { if (Object.prototype.hasOwnProperty.call(AUTO_SEAM, sk2)) delete AUTO_SEAM[sk2] } }
      }
      if (state.animPreset === 'custom' && lastCustomCss !== state.customCss) {
        lastCustomCss = state.customCss
        applyCustomCss(state.customCss)
      }

      var byId = {}
      ;(lastBubbles || []).forEach(function (b) { byId[b.id] = b })


      var userItems = userMessageItems()
      var assistItems = document.querySelectorAll('[data-chat-flow-kind="assistant-step"]')
      var userCount = 0, assistCount = 0

      var usedThisScan = (typeof Set === 'function') ? new Set() : null

      var skinnedThisScan = (typeof Set === 'function') ? new Set() : null

      function use(bubble, targetEl, isAssistantBlock) {
        if (!bubble || !targetEl) return false

        if (inComposer(targetEl) || !inTranscript(targetEl)) return false

        if (!ALWAYS_ASSIST && isHiddenTarget(targetEl)) return false

        if (!inViewport(targetEl)) return false
        if (usedThisScan) {
          if (usedThisScan.has(targetEl)) return false
          usedThisScan.add(targetEl)
        }
        targetEl.setAttribute('data-dshqf', bubble.id)
        if (skinnedThisScan) skinnedThisScan.add(targetEl)
        if (appliedElsRef) appliedElsRef.add(targetEl)
        ensureFrames(bubble, function () {
          if (targetEl.getAttribute('data-dshqf') !== bubble.id) return
          if (isHiddenTarget(targetEl)) return
          paint(targetEl, bubble, (frameTick[bubble.id] || 0) + 1, false, isAssistantBlock)
        })
        paint(targetEl, bubble, (frameTick[bubble.id] || 0) + 1, false, isAssistantBlock)
        if (!bubbleEls[bubble.id] && typeof Set === 'function') bubbleEls[bubble.id] = new Set()
        if (bubbleEls[bubble.id]) bubbleEls[bubble.id].add(targetEl)

        ensureGlobalMo()
        if (resizeObs && !resizeObs.has(targetEl)) {
          try {
            var ro = new window.ResizeObserver(function () {
              // 60ms 内因 padding/min-height 写入引起的自尺寸变化 忽略一次
              if (targetEl.__dshqfPaintAppliedAt && Date.now() - targetEl.__dshqfPaintAppliedAt < 60) return
              var r0 = targetEl.getBoundingClientRect ? targetEl.getBoundingClientRect() : null
              if (!r0) return
              if (Math.abs(r0.width - (targetEl.__dshqfLastW || 0)) < 2 &&
                  Math.abs(r0.height - (targetEl.__dshqfLastH || 0)) < 2) return
              if (targetEl.__dshqfRoT) { try { clearTimeout(targetEl.__dshqfRoT) } catch (e) {} }
              targetEl.__dshqfRoT = setTimeout(function () {
                targetEl.__dshqfRoT = null

                if (targetEl.__dshqfKey) delete PAINTED[targetEl.__dshqfKey]
                targetEl.__dshqfDirty = true
                if (isHiddenTarget(targetEl)) return
                paint(targetEl, bubble, targetEl.__dshqfLastFrame || ((frameTick[bubble.id] || 0) + 1), false, isAssistantBlock)
              }, 160)
            })
            ro.observe(targetEl)
            resizeObs.set(targetEl, ro)
          } catch (e) {}
        }
        var count = Math.max(1, Number(bubble.count) || 1)
        var timeMs = (Number(bubble.timeMs) || 100) / (Number(state.speed) || 1)
        if (!frameTimers[bubble.id]) startTimer(bubble, count, timeMs)
        else if (frameMeta[bubble.id] && frameMeta[bubble.id].count !== count) startTimer(bubble, count, timeMs)
        return true
      }


      if (state.userBubble && byId[state.userBubble]) {
        var ub = byId[state.userBubble]
        var wantFrame = (frameTick[ub.id] || 0) + 1

        if (pendingSendAnim) {
          var sendBub = pickPendingSendBubble()
          if (sendBub) {
            sendBub.__dshqfPlay = true
            sendBub.__dshqfDirty = true
            sendBub.__dshqfLastFrame = -1
            try { if (sendBub.__dshqfKey) delete PAINTED[sendBub.__dshqfKey] } catch (e) {}
            sendBub.__dshqfSig = undefined
            sendBub.__dshqfT = 0
            pendingSendAnim = false
            pendingSendBase = null
          }
        }
        for (var i = 0; i < userItems.length; i += 1) {
          var row = userItems[i]
          var bub = null
          try { bub = row.querySelector('[class*="bubble"]') } catch (e) {}
          if (!bub) continue

          if (!force && bub.__dshqfKey != null &&
              bub.getAttribute('data-dshqf') === ub.id &&
              bub.__dshqfLastFrame === wantFrame) {
            if (skinnedThisScan) skinnedThisScan.add(bub)
            userCount += 1
            continue
          }
          if (use(ub, bub)) userCount += 1
        }
      }

      if (!state.assistantBubble) {
        lastAssistDiag = { reason: '没选对方气泡', total: assistItems.length, keep: 0, from: 0, cands: 0, applied: 0 }
      } else if (!byId[state.assistantBubble]) {
        lastAssistDiag = { reason: '选中的气泡已不存在（可能被删/重导入换了 id）', total: assistItems.length, keep: 0, from: 0, cands: 0, applied: 0 }
      }
      if (state.assistantBubble && byId[state.assistantBubble]) {
        var ab = byId[state.assistantBubble]

        var keepAssist = Math.max(1, Math.min(50, Number(state.assistKeep) || 7))
        var diagCands = 0, diagApplied = 0, diagReason = '', procCount = 0
        if (keepAssist <= 0) {
          diagReason = '套几段=0（已关闭对方气泡）'
        } else {

          var flowAll = []
          try { flowAll = document.querySelectorAll('[data-chat-flow-kind], [data-chat-node-key]') } catch (e) { flowAll = [] }

          var WHOLE_ROW_KINDS = {
            'turn-process': 1, command: 1, 'manual-compaction': 1, compaction: 1,
            'model-retry': 1, 'turn-error': 1, 'turn-max-tokens': 1
          }

          var SKIP_KINDS = {
            user: 1, steering: 1,
            'system-prompt': 1, 'turn-trigger': 1, 'turn-tail': 1,
            context: 1, unknown: 1
          }
          var items = []
          for (var fi = 0; fi < flowAll.length; fi += 1) {
            var it2 = flowAll[fi]
            if (!it2) continue

            if (!ALWAYS_ASSIST && (isHiddenProcess(it2) || isHiddenTarget(it2))) continue
            if (it2.getAttribute('data-chat-node-key') == null && it2.getAttribute('data-chat-flow-kind') == null) continue
            var kind2 = String(it2.getAttribute('data-chat-flow-kind') || '')
            if (SKIP_KINDS[kind2]) {

              var hasPart2 = false
              try { hasPart2 = it2.querySelectorAll('[data-tool], [data-variant="think"]').length > 0 } catch (e) { hasPart2 = false }
              if (!hasPart2) continue
            }
            items.push(it2)
          }

          var mdItems = [], procItemsX = []
          for (var mi2 = 0; mi2 < items.length; mi2 += 1) {
            var itX = items[mi2]
            var hasPartsX = false
            try {
              hasPartsX = itX.querySelectorAll('[data-tool], [data-variant="think"]').length > 0
            } catch (e) { hasPartsX = false }
            if (hasPartsX) procItemsX.push(itX)
            else mdItems.push(itX)
          }
          var mdFrom = Math.max(0, mdItems.length - keepAssist)
          var procFrom = Math.max(0, procItemsX.length - Math.max(4, keepAssist * 2))

          if (PERF_MODE === 'ultra' || ALWAYS_ASSIST) { mdFrom = 0; procFrom = 0 }
          items = mdItems.slice(mdFrom).concat(procItemsX.slice(procFrom))


          var blocks = []
          var partSkip = (typeof Set === 'function') ? new Set() : null
          for (var ii2 = 0; ii2 < items.length; ii2 += 1) {
            var itemX = items[ii2]
            var kindX = String(itemX.getAttribute('data-chat-flow-kind') || '')

            var partsX = []
            try { partsX = itemX.querySelectorAll('[data-tool], [data-variant="think"]') } catch (e) { partsX = [] }
            var hasParts = !!(partsX && partsX.length)

            if (WHOLE_ROW_KINDS[kindX] && !hasParts) {
              var wEl = visibleWidgetOf(itemX)
              if (wEl) blocks.push(wEl)
              continue
            }
            if (hasParts) {
              for (var px = 0; px < partsX.length; px += 1) {
                var rowP = partsX[px]
                if (!rowP || rowP === itemX) continue
                if (!ALWAYS_ASSIST && (isHiddenProcess(rowP) || isHiddenTarget(rowP))) continue
                var hasOuter = false
                try {
                  var pe = rowP.parentElement
                  hasOuter = !!(pe && pe.closest && pe.closest('[data-tool], [data-variant="think"]'))
                } catch (e) { hasOuter = false }
                if (hasOuter) continue
                blocks.push(rowP)
                if (partSkip) partSkip.add(rowP)
              }
            }

            var leavesX = null
            if (!hasParts && assistantTarget) {
              var cached = assistantTarget.get(itemX)
              var sigNow = countDescendants(itemX)
              if (cached && cached.sig === sigNow && cached.list && cached.list.length) {
                var aliveX = true
                for (var alx = 0; alx < cached.list.length; alx += 1) {
                  var cex = cached.list[alx]
                  if (!cex || cex.isConnected === false || (cex.parentElement == null && cex.parent == null)) { aliveX = false; break }
                }
                if (aliveX) leavesX = cached.list
              }
            }
            if (!leavesX) {
              leavesX = findAssistantContents(itemX, hasParts ? { skip: partSkip } : null)
              if (assistantTarget) {
                if (!hasParts) assistantTarget.set(itemX, { sig: countDescendants(itemX), list: leavesX })
                else if (assistantTarget.delete) assistantTarget.delete(itemX)
              }
            }
            for (var lx = 0; lx < leavesX.length; lx += 1) blocks.push(leavesX[lx])

            if (!hasParts && !leavesX.length && kindX === 'assistant-step') {
              blocks.push(nodeRootOf(itemX))
            }

            if (!hasParts && !leavesX.length && kindX && kindX !== 'assistant-step') {
              var wGen = visibleWidgetOf(itemX)
              if (wGen) blocks.push(wGen)
            }
          }
          procCount = blocks.length
          for (var bj2 = 0; bj2 < blocks.length; bj2 += 1) {
            var blk2 = blocks[bj2]
            if (!blk2) continue

            if (!ALWAYS_ASSIST && (isHiddenProcess(blk2) || isHiddenTarget(blk2))) {
              if (blk2.getAttribute && blk2.getAttribute('data-dshqf')) clearSkin(blk2)
              continue
            }
            var txB = String(blk2.textContent || '').trim()
            if (txB.length < 2) continue
            if (isStatusChip(blk2, txB)) continue
            diagCands += 1
            if (use(ab, blk2, true)) { assistCount += 1; diagApplied += 1 }
          }
          if (!diagApplied && !diagReason) {
            diagReason = blocks.length
              ? '命中目标块但套壳被拒（可能不在对话流容器内）'
              : '页面上没找到对方消息节点'
          }
        }
        lastAssistDiag = {
          reason: diagApplied ? '' : (diagReason || '未套上'),
          total: assistItems.length, keep: keepAssist, from: 0,
          cands: diagCands, applied: diagApplied
        }
      }

      var appliedEls = document.querySelectorAll('[data-dshqf]')
      var assistIdNow = state.assistantBubble || ''
      for (var k = 0; k < appliedEls.length; k += 1) {
        var el = appliedEls[k]
        var curId = el.getAttribute('data-dshqf')
        if (!curId) continue

        if (el.closest && el.closest('[data-dshqf-queuecast]')) continue
        if (skinnedThisScan && skinnedThisScan.has(el)) continue

        if (ALWAYS_ASSIST && assistIdNow && curId === assistIdNow && isHiddenTarget(el)) continue
        clearSkin(el)
      }

      if (enterReplayPending) {
        enterReplayPendingGlobal = false
        try { if (state.animOnEnter === true) replayAnimations() } catch (e) {}
      }

      // 清理不再被任何元素引用的帧定时器
      for (var tid in frameTimers) {
        if (!Object.prototype.hasOwnProperty.call(frameTimers, tid)) continue
        var tset = bubbleEls[tid]
        var alive = false
        if (tset) {
          tset.forEach(function (te) {
            if (!te) return
            if (typeof te.isConnected === 'boolean' && !te.isConnected) { tset.delete(te); return }
            alive = true
          })
        }
        if (!alive) {
          try { clearInterval(frameTimers[tid]) } catch (e) {}
          delete frameTimers[tid]
          delete frameTick[tid]
          delete frameMeta[tid]
        }
      }
      try { sweepAnimations() } catch (e) {}
      lastReport = { user: userCount, assistant: assistCount, assist: lastAssistDiag, proc: procCount, build: CLIENT_BUILD }
    }

    function engineReport() { return lastReport }

    
    function __dshqfDiag() {
      function n(sel) {
        try { return document.querySelectorAll(sel).length } catch (e) { return -1 }
      }
      function snippet(sel) {
        try {
          var el = document.querySelector(sel)
          if (!el) return null
          var h = el.outerHTML || ''
          return h.slice(0, 300)
        } catch (e) { return null }
      }

      function rows(sel, max) {
        var out = []
        try {
          var list = document.querySelectorAll(sel)
          var from = Math.max(0, list.length - max)
          for (var i = from; i < list.length; i += 1) {
            var el = list[i]
            var r = el.getBoundingClientRect ? el.getBoundingClientRect() : { width: 0, height: 0 }
            out.push({
              tool: el.getAttribute('data-tool') || el.getAttribute('data-variant') || el.tagName,
              topped: el.getAttribute('data-dshqf') != null,
              w: Math.round(r.width), h: Math.round(r.height),
              inFeed: inTranscript(el)
            })
          }
        } catch (e) {}
        return out
      }

      function blocks(max) {
        var out = []
        try {
          var list = document.querySelectorAll('[data-dshqf]')
          for (var i = 0; i < list.length && out.length < max; i += 1) {
            var el = list[i]
            var dbg = null
            try { dbg = JSON.parse(el.getAttribute('data-dshqf-debug') || 'null') } catch (e2) { dbg = null }
            var padSty = ''
            try { padSty = (el.style && el.style.getPropertyValue && el.style.getPropertyValue('padding')) || '' } catch (e3) {}
            out.push({
              tag: el.tagName,
              cls: String(el.className || '').slice(0, 40),
              bubble: el.getAttribute('data-dshqf'),
              pad: dbg ? dbg.pad : null,
              listPad: dbg ? dbg.listPad : null,
              border: dbg ? dbg.border : null,
              padStyle: padSty,
              listStylePosition: (function () { try { return el.style.getPropertyValue('list-style-position') || '' } catch (e4) { return '' } })(),
              w: dbg ? dbg.w : null, h: dbg ? dbg.h : null
            })
          }
        } catch (e) {}
        return out
      }

      function widgets(max) {
        var out = []
        try {
          var sel = '[data-chat-flow-kind="turn-process"],[data-chat-flow-kind="command"],' +
            '[data-chat-flow-kind="model-retry"],[data-chat-flow-kind="turn-error"],' +
            '[data-chat-flow-kind="turn-max-tokens"],[data-chat-flow-kind="compaction"],' +
            '[data-chat-flow-kind="manual-compaction"]'
          var list = document.querySelectorAll(sel)
          for (var i = 0; i < list.length && out.length < max; i += 1) {
            var el = list[i]
            var r = el.getBoundingClientRect ? el.getBoundingClientRect() : { width: 0, height: 0 }
            out.push({
              kind: el.getAttribute('data-chat-flow-kind') || '',
              folded: isHiddenTarget(el),
              topped: !!(el.querySelector && el.querySelector('[data-dshqf]')),
              w: Math.round(r.width || 0), h: Math.round(r.height || 0)
            })
          }
        } catch (e) {}
        return out
      }
      return {
        'assistant-step': n('[data-chat-flow-kind="assistant-step"]'),
        'turn-process': n('[data-chat-flow-kind="turn-process"]'),
        'tool-call': n('[data-chat-flow-kind="tool-call"]'),
        'data-tool': n('[data-tool]'),
        'process-member': n('[data-turn-process-member]'),
        'reasoning-group': n('[data-chat-group-part="reasoning"]'),
        'variant-think': n('[data-variant="think"]'),
        'hidden-process': n('[data-turn-process-hidden]'),
        'folded-hidden': n('[hidden]'),
        'topped': n('[data-dshqf]'),
        'build': CLIENT_BUILD,
        'pendingHostUpgrade': PENDING_ALWAYS,

        'animOff': ANIM_OFF,
        'anim': (function () {
          try {
            return {
              preset: (engineState && engineState.animPreset) || 'none',
              onEnter: !!(engineState && engineState.animOnEnter),
              session: lastAnimSession,
              pending: enterReplayPendingGlobal
            }
          } catch (e) { return null }
        })(),

        'chatStyle': (function () {
          try {
            return {
              on: CHATSTYLE,
              session: chatStyleSession,
              read: Object.keys(chatUnreadMap).length,
              queue: document.querySelectorAll('[data-queue-dock] li').length,
              statuses: document.querySelectorAll('[data-dshqf-status]').length
            }
          } catch (e) { return null }
        })(),

        'composer': (function () {
          try {
            var el = document.querySelector('[data-composer-card]')
            if (!el) return null
            var r = el.getBoundingClientRect ? el.getBoundingClientRect() : null
            return {
              id: el.getAttribute ? el.getAttribute('data-dshqf-composer') : null,
              w: r ? Math.round(r.width) : 0,
              h: r ? Math.round(r.height) : 0,
              pad: (function () { try { return el.style.getPropertyValue('padding') || '' } catch (e) { return '' } })(),
              frame: composerFrame,
              animating: composerTimer !== null && composerTimer !== undefined,
              debug: (function () {
                try { return JSON.parse(el.getAttribute('data-dshqf-composer-debug') || 'null') } catch (e) { return null }
              })()
            }
          } catch (e) { return null }
        })(),
        'report': lastReport,
        'toolRows': rows('[data-tool]', 6),
        'thinkRows': rows('[data-variant="think"]', 3),
        'widgets': widgets(10),
        'blocks': blocks(24),
        'activeBubble': (lastBubbles || []).filter(function (b) {
          return b && (b.id === (engineState && engineState.userBubble) || b.id === (engineState && engineState.assistantBubble))
        }).map(function (b) {
          return {
            id: b.id, name: b.name, sliceSource: b.sliceSource,
            zoomPoint: b.zoomPoint, frameInsets: b.frameInsets,
            frameW: b.frameW, frameH: b.frameH
          }
        }),
        'sample-tool': snippet('[data-tool]'),
        'sample-process': snippet('[data-turn-process-member]')
      }
    }
    try {
      if (typeof window !== 'undefined') {
        window.__dshqfDiag = __dshqfDiag
        window.__dshqfBuild = CLIENT_BUILD
      }
    } catch (e) {}



    var engineTimer = null
    var engineObs = null
    var engineResizeTimer = null
    var engineResizeHandler = null
    var engineScrollTimer = null
    var engineScrollHandler = null
    var engineClickTimer = null
    var engineClickHandler = null
    var engineSendClickHandler = null
    var engineSendKeyHandler = null
    var animSweepTimer = null

    // 页面引擎
    function startEngine() {
      if (engineTimer) return
      ensureAppCss()
      ensureGlobalMo()

      try {
        animSweepTimer = setInterval(function () {
          try { sweepAnimations() } catch (e) {}
        }, 500)
      } catch (e) {}
      function tick() {
        fetch(STATE_URL, { headers: { Accept: 'application/json' } })
          .then(function (r) { return r.json() })
          .then(function (j) {
            if (!j || j.ok !== true) return

            var sig = ''
            try {
              sig = JSON.stringify(j.state) + '|' +
                (j.bubbles || []).map(function (b) {
                  var fi = b.frameInsets ? [b.frameInsets.top, b.frameInsets.right, b.frameInsets.bottom, b.frameInsets.left].join(',') : ''
                  var zp = Array.isArray(b.zoomPoint) ? b.zoomPoint.join(',') : ''
                  return [b.id, b.count, b.name, b.color, b.linkColor, b.timeMs, b.repeat, b.sliceSource, zp, fi].join(':')
                }).join(',')
            } catch (e) { sig = '' }

            var domSig = ''
            try {
              var allItems = document.querySelectorAll('[data-chat-flow-kind]')
              domSig = String(allItems.length)
            } catch (e) { domSig = '' }
            if (sig && sig === lastTickSig && domSig === lastDomSig) return
            lastTickSig = sig
            lastDomSig = domSig
            lastBubbles = Array.isArray(j.bubbles) ? j.bubbles : []
            engineState = j.state
            engineEnabled = j.state.enabled !== false
            scan(true)
          })
          .catch(function () {})
      }
      tick()
      engineTimer = setInterval(tick, 6000)
      if (typeof MutationObserver === 'function' && document.body) {
        var obs = new MutationObserver(function (muts) {
          if (!engineState || scanScheduled) return

          var need = false
          for (var mi = 0; mi < muts.length && !need; mi += 1) {
            var m0 = muts[mi]

            if (m0.type === 'attributes') { need = true; break }
            if (m0.type !== 'childList' || !m0.addedNodes || !m0.addedNodes.length) continue
            for (var ni = 0; ni < m0.addedNodes.length; ni += 1) {
              var n0 = m0.addedNodes[ni]
              if (!n0 || n0.nodeType !== 1) continue
              var mm = n0.matches
              if (mm && (mm.call(n0, '[data-chat-flow-kind]') ||
                  mm.call(n0, '[data-chat-flow]') ||
                  mm.call(n0, '[data-conversation-content]'))) { need = true; break }

              try {
                if (n0.querySelector && n0.querySelector('[data-chat-flow-kind], [data-turn-process-member], [data-tool], [data-variant="think"]')) {
                  need = true
                  break
                }
              } catch (e) {}
            }
          }
          if (!need) return
          scanScheduled = true
          setTimeout(function () { scanScheduled = false; scan() }, 150)
        })
        obs.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,

          attributeFilter: [
            'hidden', 'data-turn-process-hidden', 'data-turn-process-inline',
            'data-turn-process-answer', 'data-expanded', 'data-open', 'aria-expanded'
          ]
        })
        engineObs = obs
      }

      if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
        var onWinResize = function () {
          if (engineResizeTimer) { try { clearTimeout(engineResizeTimer) } catch (e) {} }
          engineResizeTimer = setTimeout(function () {
            engineResizeTimer = null

            try {
              var els = document.querySelectorAll('[data-dshqf]')
              for (var i = 0; i < els.length; i += 1) {
                var e0 = els[i]
                var id0 = e0.getAttribute('data-dshqf')
                if (!id0) continue
                if (e0.__dshqfKey) delete PAINTED[e0.__dshqfKey]
                var bb = null
                for (var bi = 0; bi < (lastBubbles || []).length; bi += 1) {
                  if (lastBubbles[bi].id === id0) { bb = lastBubbles[bi]; break }
                }
                if (!bb) continue

                e0.__dshqfLastW = 0
                e0.__dshqfLastH = 0
                e0.__dshqfDirty = true

                paint(e0, bb, e0.__dshqfLastFrame || 1, true)
              }

              composerSig = ''
              paintComposer()
            } catch (e) {}
          }, 200)
        }
        engineResizeHandler = onWinResize
        try { window.addEventListener('resize', onWinResize) } catch (e) {}

        var onWinScroll = function () {
          if (!engineEnabled || !engineState || engineState.ultraMinimal !== true) return
          if (engineScrollTimer) { try { clearTimeout(engineScrollTimer) } catch (e) {} }
          engineScrollTimer = setTimeout(function () {
            engineScrollTimer = null
            scan()
          }, 120)
        }
        engineScrollHandler = onWinScroll
        try { window.addEventListener('scroll', onWinScroll, true) } catch (e) {}

        if (typeof document !== 'undefined' && document.addEventListener) {
          var onDocClick = function () {
            if (!engineEnabled || !engineState) return
            if (engineClickTimer) { try { clearTimeout(engineClickTimer) } catch (e) {} }
            engineClickTimer = setTimeout(function () {
              engineClickTimer = null
              scan()
            }, 250)
          }
          engineClickHandler = onDocClick
          try { document.addEventListener('click', onDocClick, true) } catch (e) {}

          var onDocSendClick = function (e) { onSendClick(e) }
          var onDocSendKey = function (e) { onSendKeydown(e) }
          engineSendClickHandler = onDocSendClick
          engineSendKeyHandler = onDocSendKey
          try { document.addEventListener('click', onDocSendClick, true) } catch (e) {}
          try { document.addEventListener('keydown', onDocSendKey, true) } catch (e) {}
        }
      }
    }

    function stopEngine() {
      if (engineTimer) { try { clearInterval(engineTimer) } catch (e) {} engineTimer = null }
      if (engineObs) { try { engineObs.disconnect() } catch (e) {} engineObs = null }
      if (engineResizeTimer) { try { clearTimeout(engineResizeTimer) } catch (e) {} engineResizeTimer = null }
      if (engineResizeHandler && typeof window !== 'undefined' && typeof window.removeEventListener === 'function') {
        try { window.removeEventListener('resize', engineResizeHandler) } catch (e) {}
        engineResizeHandler = null
      }
      if (engineScrollTimer) { try { clearTimeout(engineScrollTimer) } catch (e) {} engineScrollTimer = null }
      if (engineScrollHandler && typeof window !== 'undefined' && typeof window.removeEventListener === 'function') {
        try { window.removeEventListener('scroll', engineScrollHandler, true) } catch (e) {}
        engineScrollHandler = null
      }
      if (engineClickTimer) { try { clearTimeout(engineClickTimer) } catch (e) {} engineClickTimer = null }
      if (engineClickHandler && typeof document !== 'undefined' && document.removeEventListener) {
        try { document.removeEventListener('click', engineClickHandler, true) } catch (e) {}
        engineClickHandler = null
      }
      if (engineSendClickHandler && typeof document !== 'undefined' && document.removeEventListener) {
        try { document.removeEventListener('click', engineSendClickHandler, true) } catch (e) {}
        engineSendClickHandler = null
      }
      if (engineSendKeyHandler && typeof document !== 'undefined' && document.removeEventListener) {
        try { document.removeEventListener('keydown', engineSendKeyHandler, true) } catch (e) {}
        engineSendKeyHandler = null
      }
      pendingSendAnim = false
      pendingSendBase = null
      animWatch = []
      bubbleEls = {}
      if (globalMo) { try { globalMo.disconnect() } catch (e) {} globalMo = null }
      try { if (typeof window !== 'undefined' && window.__dshqfGlobalMo) { window.__dshqfGlobalMo.disconnect(); window.__dshqfGlobalMo = null } } catch (e) {}
      if (animSweepTimer) { try { clearInterval(animSweepTimer) } catch (e) {} animSweepTimer = null }
      for (var id in frameTimers) {
        if (Object.prototype.hasOwnProperty.call(frameTimers, id)) {
          try { clearInterval(frameTimers[id]) } catch (e) {}
          frameTimers[id] = null
        }
      }
      var painted = []
      try { painted = document.querySelectorAll('[data-dshqf]') } catch (e) { painted = [] }
      for (var i = 0; i < painted.length; i += 1) { try { clearSkin(painted[i]) } catch (e) {} }

      if (appliedElsRef) {
        appliedElsRef.forEach(function (el) { try { clearSkin(el) } catch (e) {} })
        try { appliedElsRef.clear() } catch (e) {}
      }

      try { clearComposerSkin() } catch (e) {}

      try { clearChatStatus() } catch (e) {}
      lastScanT = 0
      lastGcT = 0

      if (resizeObs) { try { resizeObs.forEach(function (ro) { try { ro.disconnect() } catch (e) {} }); resizeObs.clear() } catch (e) {} }
      try { composeCache.clear() } catch (e) {}
      if (AUTO_SEAM) { for (var sk in AUTO_SEAM) { if (Object.prototype.hasOwnProperty.call(AUTO_SEAM, sk)) delete AUTO_SEAM[sk] } }

      try { for (var fk in frameImgs) { if (Object.prototype.hasOwnProperty.call(frameImgs, fk)) delete frameImgs[fk] } } catch (e) {}
      engineState = null; engineEnabled = false; lastBubbles = []
      lastApplySig = null
    }

    var inject = ['slots']

    function apply(ctx) {
      engineState = null; engineEnabled = false; lastBubbles = []
      ctx.slots.inject('settings.section', function () {
        return ctx.slots.register(
          { name: 'settings.section', id: 'deepseek-chatframe', order: 27, label: 'DeepSeek聊天框' },
          function () { return h(Panel, {}) }
        )
      })
      if (typeof document !== 'undefined' && document.body) {
        var bootTimer = setTimeout(startEngine, 600)
        if (typeof ctx.effect === 'function') {
          try {
            ctx.effect(function () {
              return function () {
                try { clearTimeout(bootTimer) } catch (e) {}
                stopEngine()
              }
            })
          } catch (e) {}
        }
      }
    }

    
    exports.__test__ = {
      composeFrame: composeFrame, composeAuto: composeAuto,
      innerRectOf: innerRectOf, seamOf: seamOf, HOLE_WALL_ALPHA: HOLE_WALL_ALPHA,
      measuredInsets: measuredInsets, HOLE_RUN: HOLE_RUN,
      measuredHoleSource: measuredHoleSource, applyTextPad: applyTextPad,
      anchorToInsets: anchorToInsets, insetsToAnchor: insetsToAnchor,
      nodeRootOf: nodeRootOf, partBlocksOf: partBlocksOf,
      findAssistantContent: findAssistantContent, findAssistantContents: findAssistantContents,
      isAssistantCandidate: isAssistantCandidate, isStatusChip: isStatusChip,
      ASSIST_BLOCK_TAGS: ASSIST_BLOCK_TAGS, ASSIST_INLINE_TAGS: ASSIST_INLINE_TAGS,
      drawAutoArt: drawAutoArt,
      setEngineState: function (s) { engineState = s },
      
      setEngineSnapshot: function (s, list) {
        if (s) engineState = s
        if (Array.isArray(list)) lastBubbles = list
        engineEnabled = !!(engineState && engineState.enabled !== false)
        preloadSig = ''
        lastApplySig = null
        lastStructuralSig = ''
        for (var k in PAINTED) { if (Object.prototype.hasOwnProperty.call(PAINTED, k)) delete PAINTED[k] }
        try { composeCache.clear() } catch (e) {}
        if (AUTO_SEAM) { for (var sk in AUTO_SEAM) { if (Object.prototype.hasOwnProperty.call(AUTO_SEAM, sk)) delete AUTO_SEAM[sk] } }
        scan(true)
      },


      rescan: function () { scan(true) },
      
      paintComposer: paintComposer,
      clearComposerSkin: clearComposerSkin,
      
      anim: { value: ANIM_VALUE, label: ANIM_LABEL, animateIn: animateIn },
      
      noteSend: noteSendEvent,
      
      replayEnter: function () {
        if (!engineState || engineState.animOnEnter !== true) return
        if (engineState.enabled === false) replayStandaloneAnimations()
        else replayAnimations()
      },
      
      expireAnimations: function () {
        for (var i = 0; i < animWatch.length; i += 1) if (animWatch[i]) animWatch[i].until = 0
        sweepAnimations()
      },
      isAnimOff: function () { return ANIM_OFF },
      hasFrameTimer: function (id) {
        return Object.prototype.hasOwnProperty.call(frameTimers, id) &&
          frameTimers[id] !== null && frameTimers[id] !== undefined
      },
      hasComposerTimer: function () { return composerTimer !== null && composerTimer !== undefined },
      composerFrameNo: function () { return composerFrame },
      
      composerPresetId: COMPOSER_PRESET_IMESSAGE,
      seedFrame: function (id, img) { frameImgs[id] = { imgs: [img], ready: true, waiters: [], epoch: frameEpoch } }
    }
    exports.apply = apply
    exports.inject = inject
    return module.exports
  }
})
