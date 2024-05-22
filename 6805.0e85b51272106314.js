"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6805],{3468:(P,A,m)=>{m.d(A,{_:()=>k});var r=m(4438),g=m(177),y=m(8974);function M(u,v){if(1&u&&(r.j41(0,"ion-row",1)(1,"ion-col",2),r.nrm(2,"ion-spinner",3),r.k0s()()),2&u){const E=r.XpG();r.R7$(2),r.Aen("scale:"+E.scale),r.Y8G("color",E.color)}}let L=(()=>{var u;class v{constructor(){this.loading=!1,this.scale=2.5,this.color="primary"}ngOnInit(){}}return(u=v).\u0275fac=function(T){return new(T||u)},u.\u0275cmp=r.VBU({type:u,selectors:[["app-loading"]],inputs:{loading:"loading",scale:"scale",color:"color"},decls:1,vars:1,consts:[["class","ion-justify-content-center ion-align-items-center",4,"ngIf"],[1,"ion-justify-content-center","ion-align-items-center"],["size","auto"],["name","dots",3,"color"]],template:function(T,C){1&T&&r.DNE(0,M,3,3,"ion-row",0),2&T&&r.Y8G("ngIf",C.loading)},dependencies:[g.bT,y.hU,y.ln,y.w2],styles:["ion-row[_ngcontent-%COMP%]{height:100%}"]}),v})();function p(u,v){if(1&u&&(r.j41(0,"p"),r.EFF(1),r.k0s()),2&u){const E=r.XpG();r.R7$(),r.JRh(E.btnNome)}}let k=(()=>{var u;class v{constructor(){this.loading=!1,this.disabled=!1,this.tipoBtn="submit",this.color="primary",this.colorLoading="light",this.height=60,this.width=240}ngOnInit(){}}return(u=v).\u0275fac=function(T){return new(T||u)},u.\u0275cmp=r.VBU({type:u,selectors:[["app-btn-loading"]],inputs:{loading:"loading",disabled:"disabled",btnNome:"btnNome",tipoBtn:"tipoBtn",color:"color",colorLoading:"colorLoading",height:"height",width:"width"},decls:3,vars:7,consts:[["color","dark","expand","block","type","submit",1,"cadastrar-btn",3,"disabled"],[3,"loading","color","scale"],[4,"ngIf"]],template:function(T,C){1&T&&(r.j41(0,"ion-button",0),r.nrm(1,"app-loading",1),r.DNE(2,p,2,1,"p",2),r.k0s()),2&T&&(r.Aen("height:"+C.height+"px;width:"+C.width+"px;"),r.Y8G("disabled",C.loading||C.disabled),r.R7$(),r.Y8G("loading",C.loading)("color",C.colorLoading)("scale",1),r.R7$(),r.Y8G("ngIf",!C.loading))},dependencies:[g.bT,y.Jm,L],styles:["ion-button[_ngcontent-%COMP%]{width:240px}"]}),v})()},8334:(P,A,m)=>{m.d(A,{p:()=>L});var r=m(177),g=m(8974),y=m(4438);let M=(()=>{var p;class k{}return(p=k).\u0275fac=function(v){return new(v||p)},p.\u0275mod=y.$C({type:p}),p.\u0275inj=y.G2t({imports:[r.MD,g.bv]}),k})(),L=(()=>{var p;class k{}return(p=k).\u0275fac=function(v){return new(v||p)},p.\u0275mod=y.$C({type:p}),p.\u0275inj=y.G2t({imports:[r.MD,g.bv,M]}),k})()},1994:(P,A,m)=>{m.d(A,{s:()=>y});var r=m(467),g=m(4438);let y=(()=>{var M;class L{constructor(){this.mascaraTelefone={mask:["+","5","5"," ",...Array(2).fill(/\d/)," ",...Array(5).fill(/\d/),"-",...Array(4).fill(/\d/)]},this.maskPredicate=function(){var k=(0,r.A)(function*(u){return u.getInputElement()});return function(u){return k.apply(this,arguments)}}()}}return(M=L).\u0275fac=function(k){return new(k||M)},M.\u0275prov=g.jDH({token:M,factory:M.\u0275fac,providedIn:"root"}),L})()},6002:(P,A,m)=>{m.d(A,{uj:()=>q});var r=m(467),g=m(4438),y=m(4341);function M(s){const{anchorOffset:t=0,focusOffset:n=0}=s.ownerDocument.getSelection()||{};return[Math.min(t,n),Math.max(t,n)]}class p{constructor(t){this.element=t,this.maxLength=1/0}get value(){return this.element.innerText.replace(/\n\n$/,"\n")}set value(t){this.element.innerHTML=t.replace(/\n$/,"\n\n")}get selectionStart(){return M(this.element)[0]}get selectionEnd(){return M(this.element)[1]}setSelectionRange(t,n){!function L(s,[t,n]){var e,i;const o=s.ownerDocument,a=o.createRange();a.setStart(s.firstChild||s,Math.min(t,(null===(e=s.textContent)||void 0===e?void 0:e.length)||0)),a.setEnd(s.lastChild||s,Math.min(n,(null===(i=s.textContent)||void 0===i?void 0:i.length)||0));const c=o.getSelection();c&&(c.removeAllRanges(),c.addRange(a))}(this.element,[t||0,n||0])}}const u=s=>s.isContentEditable?function k(s){const t=new p(s);return new Proxy(s,{get(n,e){if(e in t)return t[e];const i=n[e];return"function"==typeof i?i.bind(n):i},set:(n,e,i,o)=>Reflect.set(e in t?t:n,e,i,o)})}(s):s.querySelector("input,textarea")||s,v={mask:/^.*$/,preprocessors:[],postprocessors:[],plugins:[],overwriteMode:"shift"};class E{constructor(){this.now=null,this.past=[],this.future=[]}undo(){const t=this.past.pop();t&&this.now&&(this.future.push(this.now),this.updateElement(t,"historyUndo"))}redo(){const t=this.future.pop();t&&this.now&&(this.past.push(this.now),this.updateElement(t,"historyRedo"))}updateHistory(t){if(!this.now)return void(this.now=t);const n=this.now.value!==t.value,e=this.now.selection.some((i,o)=>i!==t.selection[o]);!n&&!e||(n&&(this.past.push(this.now),this.future=[]),this.now=t)}updateElement(t,n){this.now=t,this.updateElementState(t,{inputType:n,data:null})}}function D(s){return"string"==typeof s}function R(s,t,n,e){let i="";for(let o=t.length;o<s.length;o++){const a=s[o],c=(null==e?void 0:e.value[o])===a;if(!D(a)||a===n&&!c)return i;i+=a}return i}function V(s,t){return Array.isArray(t)?s.length===t.length&&Array.from(s).every((n,e)=>{const i=t[e];return D(i)?n===i:n.match(i)}):t.test(s)}function I(s,t,n=null){if(V(s.value,t))return s;const{value:e,selection:i}=Array.isArray(t)?function N(s,t,n){let e=null,i=null;const o=Array.from(s.value).reduce((c,l,h)=>{const f=c+R(t,c,l,n),S=t[f.length];return D(S)?f+S:l.match(S)?(null===e&&h>=s.selection[0]&&(e=f.length),null===i&&h>=s.selection[1]&&(i=f.length),f+l):f},""),a=R(t,o,"",n);return{value:V(o+a,t)?o+a:o,selection:[null!=e?e:o.length,null!=i?i:o.length]}}(s,t,n):function U({value:s,selection:t},n){const[e,i]=t;let o=e,a=i;return{value:Array.from(s).reduce((l,h,d)=>{const f=l+h;return e===d&&(o=l.length),i===d&&(a=l.length),f.match(n)?f:l},""),selection:[o,a]}}(s,t);return{selection:i,value:Array.isArray(t)?e.slice(0,t.length):e}}function B(s,t){if(!Array.isArray(t))return s;const[n,e]=s.selection,i=[],o=Array.from(s.value).reduce((a,c,l)=>{const h=t[l];return l===n&&i.push(a.length),l===e&&i.push(a.length),D(h)&&h===c?a:a+c},"");return i.length<2&&i.push(...new Array(2-i.length).fill(o.length)),{value:o,selection:[i[0],i[1]]}}class O{constructor(t,n){this.initialElementState=t,this.maskOptions=n,this.value="",this.selection=[0,0];const{value:e,selection:i}=I(this.initialElementState,this.getMaskExpression(this.initialElementState));this.value=e,this.selection=i}addCharacters([t,n],e){const{value:i}=this,o=this.getMaskExpression({value:i.slice(0,t)+e+i.slice(n),selection:[t+e.length,t+e.length]}),a={value:i,selection:[t,n]},c=B(a,o),[l,h]=function G({value:s,selection:t},n,e){const[i,o]=t;return{value:s,selection:"replace"===("function"==typeof e?e({value:s,selection:t}):e)?[i,i+n.length]:[i,o]}}(c,e,this.maskOptions.overwriteMode).selection,d=c.value.slice(0,l)+e,f=d.length,S=I({value:d+c.value.slice(h),selection:[f,f]},o,a);if(i.slice(0,l)===I({value:d,selection:[f,f]},o,a).value||function C(s,...t){return t.every(({value:n,selection:e})=>n===s.value&&e[0]===s.selection[0]&&e[1]===s.selection[1])}(this,S))throw new Error("Invalid mask value");this.value=S.value,this.selection=S.selection}deleteCharacters([t,n]){if(t===n||!n)return;const{value:e}=this,i=this.getMaskExpression({value:e.slice(0,t)+e.slice(n),selection:[t,t]}),o={value:e,selection:[t,n]},a=B(o,i),[c,l]=a.selection,d=I({value:a.value.slice(0,c)+a.value.slice(l),selection:[c,c]},i,o);this.value=d.value,this.selection=d.selection}getMaskExpression(t){const{mask:n}=this.maskOptions;return"function"==typeof n?n(t):n}}class ${constructor(t){this.element=t,this.listeners=[]}listen(t,n,e){const i=n;this.element.addEventListener(t,i,e),this.listeners.push(()=>this.element.removeEventListener(t,i))}destroy(){this.listeners.forEach(t=>t())}}const w_CTRL=1,w_ALT=2,w_SHIFT=4,w_META=8;function b(s,t,n){return s.ctrlKey===!!(t&w_CTRL)&&s.altKey===!!(t&w_ALT)&&s.shiftKey===!!(t&w_SHIFT)&&s.metaKey===!!(t&w_META)&&s.keyCode===n}function Y({value:s,selection:t},n){const[e,i]=t;if(e!==i)return[e,i];const o=n?s.slice(e).indexOf("\n")+1||s.length:s.slice(0,i).lastIndexOf("\n")+1;return[n?e:o,n?o:i]}function Z({value:s,selection:t},n){const[e,i]=t;return e!==i?[e,i]:(n?[e,i+1]:[e-1,i]).map(a=>Math.min(Math.max(a,0),s.length))}const X=/\s+$/g,Q=/^\s+/g,H=/\s/;function J({value:s,selection:t},n){const[e,i]=t;if(e!==i)return[e,i];if(n){const l=s.slice(e),[h]=l.match(Q)||[""],d=l.trimStart().search(H);return[e,-1!==d?e+h.length+d:s.length]}const o=s.slice(0,i),[a]=o.match(X)||[""],c=o.trimEnd().split("").reverse().findIndex(l=>l.match(H));return[-1!==c?i-a.length-c:0,i]}function x(s=[]){return(t,...n)=>s.reduce((e,i)=>Object.assign(Object.assign({},e),i(e,...n)),t)}function F(s,t){const n=Object.assign(Object.assign({},v),t),e=x(n.preprocessors),i=x(n.postprocessors),o="string"==typeof s?{value:s,selection:[0,0]}:s,{elementState:a}=e({elementState:o,data:""},"validation"),c=new O(a,n),{value:l,selection:h}=i(c,o);return"string"==typeof s?l:{value:l,selection:h}}class z extends E{constructor(t,n){super(),this.element=t,this.maskitoOptions=n,this.isTextArea="TEXTAREA"===this.element.nodeName,this.eventListener=new $(this.element),this.options=Object.assign(Object.assign({},v),this.maskitoOptions),this.preprocessor=x(this.options.preprocessors),this.postprocessor=x(this.options.postprocessors),this.teardowns=this.options.plugins.map(e=>e(this.element,this.options)),this.updateHistory(this.elementState),this.eventListener.listen("keydown",e=>function K(s){return b(s,w_CTRL,89)||b(s,w_CTRL|w_SHIFT,90)||b(s,w_META|w_SHIFT,90)}(e)?(e.preventDefault(),this.redo()):function W(s){return b(s,w_CTRL,90)||b(s,w_META,90)}(e)?(e.preventDefault(),this.undo()):void 0),this.eventListener.listen("beforeinput",e=>{var i;const o=e.inputType.includes("Forward");switch(this.updateHistory(this.elementState),e.inputType){case"historyUndo":return e.preventDefault(),this.undo();case"historyRedo":return e.preventDefault(),this.redo();case"deleteByCut":case"deleteContentBackward":case"deleteContentForward":return this.handleDelete({event:e,isForward:o,selection:Z(this.elementState,o)});case"deleteWordForward":case"deleteWordBackward":return this.handleDelete({event:e,isForward:o,selection:J(this.elementState,o),force:!0});case"deleteSoftLineBackward":case"deleteSoftLineForward":case"deleteHardLineBackward":case"deleteHardLineForward":return this.handleDelete({event:e,isForward:o,selection:Y(this.elementState,o),force:!0});case"insertCompositionText":return;case"insertLineBreak":case"insertParagraph":return this.handleEnter(e);default:return this.handleInsert(e,e.data||(null===(i=e.dataTransfer)||void 0===i?void 0:i.getData("text/plain"))||"")}}),this.eventListener.listen("input",({inputType:e})=>{"insertCompositionText"!==e&&(this.ensureValueFitsMask(),this.updateHistory(this.elementState))}),this.eventListener.listen("compositionend",()=>{this.ensureValueFitsMask(),this.updateHistory(this.elementState)})}get elementState(){const{value:t,selectionStart:n,selectionEnd:e}=this.element;return{value:t,selection:[n||0,e||0]}}get maxLength(){const{maxLength:t}=this.element;return-1===t?1/0:t}destroy(){this.eventListener.destroy(),this.teardowns.forEach(t=>null==t?void 0:t())}updateElementState({value:t,selection:n},e={inputType:"insertText",data:null}){const i=this.elementState.value;this.updateValue(t),this.updateSelectionRange(n),i!==t&&this.dispatchInputEvent(e)}updateSelectionRange([t,n]){var e;const{element:i}=this;i.matches(":focus")&&(i.selectionStart!==t||i.selectionEnd!==n)&&(null===(e=i.setSelectionRange)||void 0===e||e.call(i,t,n))}updateValue(t){this.element.value=t}ensureValueFitsMask(){this.updateElementState(F(this.elementState,this.options))}dispatchInputEvent(t={inputType:"insertText",data:null}){globalThis.InputEvent&&this.element.dispatchEvent(new InputEvent("input",Object.assign(Object.assign({},t),{bubbles:!0,cancelable:!1})))}handleDelete({event:t,selection:n,isForward:e,force:i=!1}){const o={value:this.elementState.value,selection:n},[a,c]=o.selection,{elementState:l}=this.preprocessor({elementState:o,data:""},e?"deleteForward":"deleteBackward"),h=new O(l,this.options),[d,f]=l.selection;h.deleteCharacters([d,f]);const S=this.postprocessor(h,o);if(o.value.slice(0,a)+o.value.slice(c)!==S.value||i||this.element.isContentEditable){if(t.preventDefault(),function T(s,...t){return t.every(({value:n})=>n===s.value)}(o,l,h,S))return this.updateSelectionRange(e?[f,f]:[d,d]);this.updateElementState(S,{inputType:t.inputType,data:null}),this.updateHistory(S)}}handleInsert(t,n){const e=this.elementState,{elementState:i,data:o=n}=this.preprocessor({data:n,elementState:e},"insert"),a=new O(i,this.options);try{a.addCharacters(i.selection,o)}catch{return t.preventDefault()}const[c,l]=i.selection,h=e.value.slice(0,c)+n+e.value.slice(l),d=this.postprocessor(a,e);if(d.value.length>this.maxLength)return t.preventDefault();(h!==d.value||this.element.isContentEditable)&&(t.preventDefault(),this.updateElementState(d,{data:n,inputType:t.inputType}),this.updateHistory(d))}handleEnter(t){(this.isTextArea||this.element.isContentEditable)&&this.handleInsert(t,"\n")}}let q=(()=>{class s{constructor(){this.elementRef=(0,g.WQX)(g.aKT).nativeElement,this.ngZone=(0,g.WQX)(g.SKi),this.maskedElement=null,this.options=null,this.elementPredicate=u;const n=(0,g.WQX)(y.me,{self:!0,optional:!0});if(n){const e=n.writeValue.bind(n);n.writeValue=i=>{e(this.options?F(String(null!=i?i:""),this.options):i)}}}ngOnChanges(){var n=this;return(0,r.A)(function*(){var e;const{elementPredicate:i,options:o}=n;if(null===(e=n.maskedElement)||void 0===e||e.destroy(),!o)return;const a=yield i(n.elementRef);n.elementPredicate===i&&n.ngZone.runOutsideAngular(()=>{n.maskedElement=new z(a,o)})})()}ngOnDestroy(){var n;null===(n=this.maskedElement)||void 0===n||n.destroy()}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275dir=g.FsC({type:s,selectors:[["","maskito",""]],inputs:{options:[g.Mj6.None,"maskito","options"],elementPredicate:[g.Mj6.None,"maskitoElement","elementPredicate"]},standalone:!0,features:[g.OA$]}),s})()}}]);