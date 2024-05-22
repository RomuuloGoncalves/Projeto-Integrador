"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{6579:(O,v,i)=>{i.d(v,{c:()=>s});var e=i(4363),c=i(4081),l=i(405);const s=(n,o)=>{let t,r;const g=(d,E,p)=>{if(typeof document>"u")return;const w=document.elementFromPoint(d,E);w&&o(w)?w!==t&&(a(),_(w,p)):a()},_=(d,E)=>{t=d,r||(r=t);const p=t;(0,e.w)(()=>p.classList.add("ion-activated")),E()},a=(d=!1)=>{if(!t)return;const E=t;(0,e.w)(()=>E.classList.remove("ion-activated")),d&&r!==t&&t.click(),t=void 0};return(0,l.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:d=>g(d.currentX,d.currentY,c.a),onMove:d=>g(d.currentX,d.currentY,c.b),onEnd:()=>{a(!0),(0,c.h)(),r=void 0}})}},8438:(O,v,i)=>{i.d(v,{g:()=>c});var e=i(8476);const c=()=>{if(void 0!==e.w)return e.w.Capacitor}},5572:(O,v,i)=>{i.d(v,{c:()=>e,i:()=>c});const e=(l,s,n)=>"function"==typeof n?n(l,s):"string"==typeof n?l[n]===s[n]:Array.isArray(s)?s.includes(l):l===s,c=(l,s,n)=>void 0!==l&&(Array.isArray(l)?l.some(o=>e(o,s,n)):e(l,s,n))},3351:(O,v,i)=>{i.d(v,{g:()=>e});const e=(o,t,r,g,_)=>l(o[1],t[1],r[1],g[1],_).map(a=>c(o[0],t[0],r[0],g[0],a)),c=(o,t,r,g,_)=>_*(3*t*Math.pow(_-1,2)+_*(-3*r*_+3*r+g*_))-o*Math.pow(_-1,3),l=(o,t,r,g,_)=>n((g-=_)-3*(r-=_)+3*(t-=_)-(o-=_),3*r-6*t+3*o,3*t-3*o,o).filter(d=>d>=0&&d<=1),n=(o,t,r,g)=>{if(0===o)return((o,t,r)=>{const g=t*t-4*o*r;return g<0?[]:[(-t+Math.sqrt(g))/(2*o),(-t-Math.sqrt(g))/(2*o)]})(t,r,g);const _=(3*(r/=o)-(t/=o)*t)/3,a=(2*t*t*t-9*t*r+27*(g/=o))/27;if(0===_)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-_),-Math.sqrt(-_)];const d=Math.pow(a/2,2)+Math.pow(_/3,3);if(0===d)return[Math.pow(a/2,.5)-t/3];if(d>0)return[Math.pow(-a/2+Math.sqrt(d),1/3)-Math.pow(a/2+Math.sqrt(d),1/3)-t/3];const E=Math.sqrt(Math.pow(-_/3,3)),p=Math.acos(-a/(2*Math.sqrt(Math.pow(-_/3,3)))),w=2*Math.pow(E,1/3);return[w*Math.cos(p/3)-t/3,w*Math.cos((p+2*Math.PI)/3)-t/3,w*Math.cos((p+4*Math.PI)/3)-t/3]}},5083:(O,v,i)=>{i.d(v,{i:()=>e});const e=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(O,v,i)=>{i.r(v),i.d(v,{startFocusVisible:()=>s});const e="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],s=n=>{let o=[],t=!0;const r=n?n.shadowRoot:document,g=n||document.body,_=M=>{o.forEach(h=>h.classList.remove(e)),M.forEach(h=>h.classList.add(e)),o=M},a=()=>{t=!1,_([])},d=M=>{t=l.includes(M.key),t||_([])},E=M=>{if(t&&void 0!==M.composedPath){const h=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));_(h)}},p=()=>{r.activeElement===g&&_([])};return r.addEventListener("keydown",d),r.addEventListener("focusin",E),r.addEventListener("focusout",p),r.addEventListener("touchstart",a,{passive:!0}),r.addEventListener("mousedown",a),{destroy:()=>{r.removeEventListener("keydown",d),r.removeEventListener("focusin",E),r.removeEventListener("focusout",p),r.removeEventListener("touchstart",a),r.removeEventListener("mousedown",a)},setFocus:_}}},8281:(O,v,i)=>{i.d(v,{c:()=>c});var e=i(5638);const c=o=>{const t=o;let r;return{hasLegacyControl:()=>{if(void 0===r){const _=void 0!==t.label||l(t),a=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,d=(0,e.h)(t);r=!0===t.legacy||!_&&!a&&null!==d}return r}}},l=o=>!!(s.includes(o.tagName)&&null!==o.querySelector('[slot="label"]')||n.includes(o.tagName)&&""!==o.textContent),s=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],n=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},4081:(O,v,i)=>{i.d(v,{I:()=>c,a:()=>t,b:()=>r,c:()=>o,d:()=>_,h:()=>g});var e=i(8438),c=function(a){return a.Heavy="HEAVY",a.Medium="MEDIUM",a.Light="LIGHT",a}(c||{});const s={getEngine(){const a=window.TapticEngine;if(a)return a;const d=(0,e.g)();return null!=d&&d.isPluginAvailable("Haptics")?d.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const d=(0,e.g)();return"web"!==(null==d?void 0:d.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,e.g)(),impact(a){const d=this.getEngine();if(!d)return;const E=this.isCapacitor()?a.style:a.style.toLowerCase();d.impact({style:E})},notification(a){const d=this.getEngine();if(!d)return;const E=this.isCapacitor()?a.type:a.type.toLowerCase();d.notification({type:E})},selection(){const a=this.isCapacitor()?c.Light:"light";this.impact({style:a})},selectionStart(){const a=this.getEngine();a&&(this.isCapacitor()?a.selectionStart():a.gestureSelectionStart())},selectionChanged(){const a=this.getEngine();a&&(this.isCapacitor()?a.selectionChanged():a.gestureSelectionChanged())},selectionEnd(){const a=this.getEngine();a&&(this.isCapacitor()?a.selectionEnd():a.gestureSelectionEnd())}},n=()=>s.available(),o=()=>{n()&&s.selection()},t=()=>{n()&&s.selectionStart()},r=()=>{n()&&s.selectionChanged()},g=()=>{n()&&s.selectionEnd()},_=a=>{n()&&s.impact(a)}},2885:(O,v,i)=>{i.d(v,{I:()=>o,a:()=>_,b:()=>n,c:()=>E,d:()=>w,f:()=>a,g:()=>g,i:()=>r,p:()=>p,r:()=>M,s:()=>d});var e=i(467),c=i(5638),l=i(4929);const n="ion-content",o=".ion-content-scroll-host",t=`${n}, ${o}`,r=h=>"ION-CONTENT"===h.tagName,g=function(){var h=(0,e.A)(function*(m){return r(m)?(yield new Promise(f=>(0,c.c)(m,f)),m.getScrollElement()):m});return function(f){return h.apply(this,arguments)}}(),_=h=>h.querySelector(o)||h.querySelector(t),a=h=>h.closest(t),d=(h,m)=>r(h)?h.scrollToTop(m):Promise.resolve(h.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),E=(h,m,f,C)=>r(h)?h.scrollByPoint(m,f,C):Promise.resolve(h.scrollBy({top:f,left:m,behavior:C>0?"smooth":"auto"})),p=h=>(0,l.b)(h,n),w=h=>{if(r(h)){const f=h.scrollY;return h.scrollY=!1,f}return h.style.setProperty("overflow","hidden"),!0},M=(h,m)=>{r(h)?h.scrollY=m:h.style.removeProperty("overflow")}},6726:(O,v,i)=>{i.d(v,{a:()=>e,b:()=>E,c:()=>t,d:()=>p,e:()=>D,f:()=>o,g:()=>w,h:()=>l,i:()=>c,j:()=>C,k:()=>y,l:()=>r,m:()=>a,n:()=>M,o:()=>_,p:()=>n,q:()=>s,r:()=>f,s:()=>u,t:()=>d,u:()=>h,v:()=>m,w:()=>g});const e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},275:(O,v,i)=>{i.d(v,{c:()=>s,g:()=>n});var e=i(8476),c=i(5638),l=i(4929);const s=(t,r,g)=>{let _,a;if(void 0!==e.w&&"MutationObserver"in e.w){const w=Array.isArray(r)?r:[r];_=new MutationObserver(M=>{for(const h of M)for(const m of h.addedNodes)if(m.nodeType===Node.ELEMENT_NODE&&w.includes(m.slot))return g(),void(0,c.r)(()=>d(m))}),_.observe(t,{childList:!0})}const d=w=>{var M;a&&(a.disconnect(),a=void 0),a=new MutationObserver(h=>{g();for(const m of h)for(const f of m.removedNodes)f.nodeType===Node.ELEMENT_NODE&&f.slot===r&&p()}),a.observe(null!==(M=w.parentElement)&&void 0!==M?M:w,{subtree:!0,childList:!0})},p=()=>{a&&(a.disconnect(),a=void 0)};return{destroy:()=>{_&&(_.disconnect(),_=void 0),p()}}},n=(t,r,g)=>{const _=null==t?0:t.toString().length,a=o(_,r);if(void 0===g)return a;try{return g(_,r)}catch(d){return(0,l.a)("Exception in provided `counterFormatter`.",d),a}},o=(t,r)=>`${t} / ${r}`},1622:(O,v,i)=>{i.r(v),i.d(v,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>y,keyboardDidClose:()=>h,keyboardDidOpen:()=>w,keyboardDidResize:()=>M,resetKeyboardAssist:()=>_,setKeyboardClose:()=>p,setKeyboardOpen:()=>E,startKeyboardAssist:()=>a,trackViewportChanges:()=>C});var e=i(4379);i(8438),i(8476);const s="ionKeyboardDidShow",n="ionKeyboardDidHide";let t={},r={},g=!1;const _=()=>{t={},r={},g=!1},a=u=>{if(e.K.getEngine())d(u);else{if(!u.visualViewport)return;r=y(u.visualViewport),u.visualViewport.onresize=()=>{C(u),w()||M(u)?E(u):h(u)&&p(u)}}},d=u=>{u.addEventListener("keyboardDidShow",D=>E(u,D)),u.addEventListener("keyboardDidHide",()=>p(u))},E=(u,D)=>{m(u,D),g=!0},p=u=>{f(u),g=!1},w=()=>!g&&t.width===r.width&&(t.height-r.height)*r.scale>150,M=u=>g&&!h(u),h=u=>g&&r.height===u.innerHeight,m=(u,D)=>{const L=new CustomEvent(s,{detail:{keyboardHeight:D?D.keyboardHeight:u.innerHeight-r.height}});u.dispatchEvent(L)},f=u=>{const D=new CustomEvent(n);u.dispatchEvent(D)},C=u=>{t=Object.assign({},r),r=y(u.visualViewport)},y=u=>({width:Math.round(u.width),height:Math.round(u.height),offsetTop:u.offsetTop,offsetLeft:u.offsetLeft,pageTop:u.pageTop,pageLeft:u.pageLeft,scale:u.scale})},4379:(O,v,i)=>{i.d(v,{K:()=>s,a:()=>l});var e=i(8438),c=function(n){return n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE",n}(c||{}),l=function(n){return n.Body="body",n.Ionic="ionic",n.Native="native",n.None="none",n}(l||{});const s={getEngine(){const n=(0,e.g)();if(null!=n&&n.isPluginAvailable("Keyboard"))return n.Plugins.Keyboard},getResizeMode(){const n=this.getEngine();return null!=n&&n.getResizeMode?n.getResizeMode().catch(o=>{if(o.code!==c.Unimplemented)throw o}):Promise.resolve(void 0)}}},4731:(O,v,i)=>{i.d(v,{c:()=>o});var e=i(467),c=i(8476),l=i(4379);const s=t=>{if(void 0===c.d||t===l.a.None||void 0===t)return null;const r=c.d.querySelector("ion-app");return null!=r?r:c.d.body},n=t=>{const r=s(t);return null===r?0:r.clientHeight},o=function(){var t=(0,e.A)(function*(r){let g,_,a,d;const E=function(){var m=(0,e.A)(function*(){const f=yield l.K.getResizeMode(),C=void 0===f?void 0:f.mode;g=()=>{void 0===d&&(d=n(C)),a=!0,p(a,C)},_=()=>{a=!1,p(a,C)},null==c.w||c.w.addEventListener("keyboardWillShow",g),null==c.w||c.w.addEventListener("keyboardWillHide",_)});return function(){return m.apply(this,arguments)}}(),p=(m,f)=>{r&&r(m,w(f))},w=m=>{if(0===d||d===n(m))return;const f=s(m);return null!==f?new Promise(C=>{const u=new ResizeObserver(()=>{f.clientHeight===d&&(u.disconnect(),C())});u.observe(f)}):void 0};return yield E(),{init:E,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",g),null==c.w||c.w.removeEventListener("keyboardWillHide",_),g=_=void 0},isKeyboardVisible:()=>a}});return function(g){return t.apply(this,arguments)}}()},7838:(O,v,i)=>{i.d(v,{c:()=>c});var e=i(467);const c=()=>{let l;return{lock:function(){var n=(0,e.A)(function*(){const o=l;let t;return l=new Promise(r=>t=r),void 0!==o&&(yield o),t});return function(){return n.apply(this,arguments)}}()}}},2172:(O,v,i)=>{i.d(v,{c:()=>l});var e=i(8476),c=i(5638);const l=(s,n,o)=>{let t;const r=()=>!(void 0===n()||void 0!==s.label||null===o()),_=()=>{const d=n();if(void 0===d)return;if(!r())return void d.style.removeProperty("width");const E=o().scrollWidth;if(0===E&&null===d.offsetParent&&void 0!==e.w&&"IntersectionObserver"in e.w){if(void 0!==t)return;const p=t=new IntersectionObserver(w=>{1===w[0].intersectionRatio&&(_(),p.disconnect(),t=void 0)},{threshold:.01,root:s});p.observe(d)}else d.style.setProperty("width",.75*E+"px")};return{calculateNotchWidth:()=>{r()&&(0,c.r)(()=>{_()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(O,v,i)=>{i.d(v,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(l,s,n)=>{const o=l*s/n-l+"ms",t=2*Math.PI*s/n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(l,s,n)=>{const o=s/n,t=l*o-l+"ms",r=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(r)+"%",left:32*Math.cos(r)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,s)=>({r:6,style:{left:32-32*s+"%","animation-delay":-110*s+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,s,n)=>({y1:14,y2:26,style:{transform:`rotate(${360/n*s+(s<n/2?180:-180)}deg)`,"animation-delay":l*s/n-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,s,n)=>({y1:12,y2:20,style:{transform:`rotate(${360/n*s+(s<n/2?180:-180)}deg)`,"animation-delay":l*s/n-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,s,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":l*s/n-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,s,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":l*s/n-l+"ms"}})}}},6492:(O,v,i)=>{i.r(v),i.d(v,{createSwipeBackGesture:()=>n});var e=i(5638),c=i(5083),l=i(405);i(8221);const n=(o,t,r,g,_)=>{const a=o.ownerDocument.defaultView;let d=(0,c.i)(o);const p=f=>d?-f.deltaX:f.deltaX;return(0,l.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:f=>(d=(0,c.i)(o),(f=>{const{startX:y}=f;return d?y>=a.innerWidth-50:y<=50})(f)&&t()),onStart:r,onMove:f=>{const y=p(f)/a.innerWidth;g(y)},onEnd:f=>{const C=p(f),y=a.innerWidth,u=C/y,D=(f=>d?-f.velocityX:f.velocityX)(f),L=D>=0&&(D>.2||C>y/2),b=(L?1-u:u)*y;let T=0;if(b>5){const A=b/Math.abs(D);T=Math.min(A,540)}_(L,u<=0?.01:(0,e.l)(0,u,.9999),T)}})}},2935:(O,v,i)=>{i.d(v,{w:()=>e});const e=(s,n,o)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(r=>{o(c(r,n))});return t.observe(s,{childList:!0,subtree:!0}),t},c=(s,n)=>{let o;return s.forEach(t=>{for(let r=0;r<t.addedNodes.length;r++)o=l(t.addedNodes[r],n)||o}),o},l=(s,n)=>{if(1!==s.nodeType)return;const o=s;return(o.tagName===n.toUpperCase()?[o]:Array.from(o.querySelectorAll(n))).find(r=>r.value===o.value)}},2595:(O,v,i)=>{i.d(v,{n:()=>l});var e=i(4438),c=i(8974);let l=(()=>{var s;class n{constructor(){}ngOnInit(){}}return(s=n).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=e.VBU({type:s,selectors:[["app-footer"]],decls:7,vars:0,consts:[[1,"ion-no-border"],["color","primary"],[1,"ion-justify-content-center","ion-margin-vertical"],["target","_blank","href","https://romuulogoncalves.github.io/portifolio/home"]],template:function(t,r){1&t&&(e.j41(0,"ion-footer",0)(1,"ion-toolbar",1)(2,"ion-row",2)(3,"ion-label"),e.EFF(4," Desenvolvido por "),e.j41(5,"a",3),e.EFF(6,"R\xf4mulo da Silva Gon\xe7alves"),e.k0s()()()()())},dependencies:[c.M0,c.he,c.ln,c.ai],styles:["ion-footer[_ngcontent-%COMP%]{background-color:#f5f4f4}.permissoes[_ngcontent-%COMP%]{display:flex;gap:30px;flex-wrap:wrap}.permissoes[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700;cursor:pointer}a[_ngcontent-%COMP%]{color:#000}"]}),n})()},2898:(O,v,i)=>{i.d(v,{k:()=>n});var e=i(177),c=i(8974),l=i(1671),s=i(4438);let n=(()=>{var o;class t{}return(o=t).\u0275fac=function(g){return new(g||o)},o.\u0275mod=s.$C({type:o}),o.\u0275inj=s.G2t({imports:[e.MD,c.bv,l.iI]}),t})()},3427:(O,v,i)=>{i.d(v,{l:()=>m});var e=i(4438),c=i(8570),l=i(8397),s=i(177),n=i(8974),o=i(1671);const t=()=>[""],r=()=>["/perfil"],g=()=>["/grafico"],_=()=>["/conscientizacao"],a=()=>["/grade-curricular"],d=()=>["/privacidade"],E=()=>["/termos"],p=()=>["/cookies"],w=()=>["../login"];function M(f,C){1&f&&(e.j41(0,"ion-col",6)(1,"ion-button",15),e.EFF(2,"Login"),e.k0s()()),2&f&&(e.R7$(),e.Y8G("routerLink",e.lJ4(1,w)))}function h(f,C){if(1&f&&(e.j41(0,"ion-col",6)(1,"ion-row")(2,"ion-chip",3)(3,"ion-avatar"),e.nrm(4,"ion-img",16),e.k0s(),e.j41(5,"ion-label"),e.EFF(6),e.k0s()(),e.nrm(7,"ion-menu-button"),e.k0s()()),2&f){const y=e.XpG();e.R7$(2),e.Y8G("routerLink",e.lJ4(3,r)),e.R7$(2),e.FS9("src",null==y.usuario?null:y.usuario.imagem),e.R7$(2),e.JRh(y.nome_usuario)}}let m=(()=>{var f;class C{constructor(u,D){this.Usuario=u,this.Toast=D,this.logedIn=this.Usuario.logedIn,this.nome_usuario=this.Usuario.nome_usuario}ngOnInit(){this.carregarUsuario()}carregarUsuario(){this.Usuario.id_usuario&&this.Usuario.pegarUsuario(this.Usuario.id_usuario).subscribe(u=>{this.usuario=u,this.usuario.imagem=this.Usuario.pegarImagem(this.usuario.imagem)},u=>{console.log(u)})}logout(){this.Usuario.logout().subscribe(u=>{console.log(u),this.Usuario.limparToken(),this.Toast.mostrarToast("success","Deslogado"),setTimeout(()=>{location.reload()},500)},u=>{this.Toast.mostrarToast("danger","Algo deu errado!"),console.error(u)})}}return(f=C).\u0275fac=function(u){return new(u||f)(e.rXU(c.o),e.rXU(l.f))},f.\u0275cmp=e.VBU({type:f,selectors:[["app-header"]],decls:52,vars:20,consts:[["side","end","contentId","main-content"],[1,"ion-padding"],["lines","full"],["routerDirection","back",3,"routerLink"],[2,"cursor","pointer",3,"click"],[1,"ion-align-items-center","ion-justify-content-between"],["size","auto"],["size","large","name","exit-outline"],["value","first"],["slot","header","color","light"],["slot","content",1,"ion-padding"],["id","main-content"],[1,"header__principal"],["routerDirection","back",1,"titulo",3,"routerLink"],["size","auto",4,"ngIf"],["fill","solid","size","large","color","dark","routerDirection","back",3,"routerLink"],["alt","avatar",3,"src"]],template:function(u,D){1&u&&(e.j41(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-row")(4,"ion-title"),e.EFF(5,"ATOMOX"),e.k0s(),e.nrm(6,"ion-menu-button"),e.k0s()()(),e.j41(7,"ion-content",1)(8,"ion-list",2)(9,"ion-item",3)(10,"ion-label"),e.EFF(11,"Home"),e.k0s()(),e.j41(12,"ion-item",3)(13,"ion-label"),e.EFF(14,"Perfil"),e.k0s()(),e.j41(15,"ion-item",3)(16,"ion-label"),e.EFF(17,"Gr\xe1ficos"),e.k0s()(),e.j41(18,"ion-item",3)(19,"ion-label"),e.EFF(20,"Conscientize-se"),e.k0s()(),e.j41(21,"ion-item",3)(22,"ion-label"),e.EFF(23,"Grade Curricular"),e.k0s()(),e.j41(24,"ion-item")(25,"ion-label",4),e.bIt("click",function(){return D.logout()}),e.j41(26,"ion-row",5)(27,"ion-col",6)(28,"ion-label"),e.EFF(29,"Sair"),e.k0s()(),e.j41(30,"ion-col",6),e.nrm(31,"ion-icon",7),e.k0s()()()(),e.j41(32,"ion-accordion-group")(33,"ion-accordion",8)(34,"ion-item",9)(35,"ion-label"),e.EFF(36,"Termos e uso"),e.k0s()(),e.j41(37,"div",10)(38,"ion-item",3),e.EFF(39,"Privacidade"),e.k0s(),e.j41(40,"ion-item",3),e.EFF(41,"Termos"),e.k0s(),e.j41(42,"ion-item",3),e.EFF(43,"Cookies"),e.k0s()()()()()()(),e.j41(44,"div",11)(45,"ion-header",12)(46,"ion-row",5)(47,"ion-col",6)(48,"ion-label",13),e.EFF(49,"ATOMOX"),e.k0s()(),e.DNE(50,M,3,2,"ion-col",14)(51,h,8,4,"ion-col",14),e.k0s()()()),2&u&&(e.R7$(9),e.Y8G("routerLink",e.lJ4(11,t)),e.R7$(3),e.Y8G("routerLink",e.lJ4(12,r)),e.R7$(3),e.Y8G("routerLink",e.lJ4(13,g)),e.R7$(3),e.Y8G("routerLink",e.lJ4(14,_)),e.R7$(3),e.Y8G("routerLink",e.lJ4(15,a)),e.R7$(17),e.Y8G("routerLink",e.lJ4(16,d)),e.R7$(2),e.Y8G("routerLink",e.lJ4(17,E)),e.R7$(2),e.Y8G("routerLink",e.lJ4(18,p)),e.R7$(6),e.Y8G("routerLink",e.lJ4(19,t)),e.R7$(2),e.Y8G("ngIf",!D.logedIn),e.R7$(),e.Y8G("ngIf",D.logedIn))},dependencies:[s.bT,n.xk,n.YH,n.mC,n.Jm,n.ZB,n.hU,n.W9,n.eU,n.iq,n.KW,n.uz,n.he,n.nf,n.oS,n.MC,n.ln,n.BC,n.ai,n.N7,o.Wk],styles:["ion-header[_ngcontent-%COMP%]{background-color:#f5f4f4}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding:10px}ion-header[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:1.3rem}ion-header.header__principal[_ngcontent-%COMP%]{padding:5px}ion-header.header__principal[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{cursor:pointer;font-size:2rem;font-family:Cherry Cream Soda,system-ui;font-weight:500;font-style:normal}"]}),C})()},8178:(O,v,i)=>{i.d(v,{G:()=>n});var e=i(177),c=i(1671),l=i(8974),s=i(4438);let n=(()=>{var o;class t{}return(o=t).\u0275fac=function(g){return new(g||o)},o.\u0275mod=s.$C({type:o}),o.\u0275inj=s.G2t({imports:[e.MD,l.bv,c.iI]}),t})()},2906:(O,v,i)=>{i.d(v,{u:()=>l});var e=i(4438),c=i(901);let l=(()=>{var s;class n{constructor(t){this.Server=t}cadastrarDados(t){return this.Server.post("/views/arduino/cadastrar.php",t)}listarArduinoUsuario(t){return this.Server.get(`/views/arduino/listar_com_id.php?id=${t}`)}listarArduinoUsuarioSensor(t){return this.Server.get(`/views/arduino/arduino_e_sensor.php?id=${t}`)}listarArduinoSensor(t){return this.Server.get(`/views/arduino/arduino_e_sensor_id.php?id=${t}`)}excluirArduino(t){return this.Server.delete(`/views/arduino/excluir.php?id=${t}`)}}return(s=n).\u0275fac=function(t){return new(t||s)(e.KVO(c.Z))},s.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"}),n})()},2304:(O,v,i)=>{i.d(v,{u:()=>l});var e=i(4438),c=i(901);let l=(()=>{var s;class n{constructor(t){this.Server=t}cadastrarDados(t){return this.Server.post("/views/sensor/cadastrar.php",t)}listarSensorArduino(t){return this.Server.get(`/views/sensor/listar_com_id.php?id=${t}`)}excluirSensor(t){return this.Server.delete(`/views/sensor/excluir.php?id=${t}`)}}return(s=n).\u0275fac=function(t){return new(t||s)(e.KVO(c.Z))},s.\u0275prov=e.jDH({token:s,factory:s.\u0275fac,providedIn:"root"}),n})()}}]);