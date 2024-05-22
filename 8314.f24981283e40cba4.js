"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8314],{8314:(O,h,c)=>{c.r(h),c.d(h,{ion_breadcrumb:()=>i,ion_breadcrumbs:()=>I});var o=c(4363),v=c(5638),l=c(333),m=c(6726),u=c(611);const i=class{constructor(p){(0,o.r)(this,p),this.ionFocus=(0,o.d)(this,"ionFocus",7),this.ionBlur=(0,o.d)(this,"ionBlur",7),this.collapsedClick=(0,o.d)(this,"collapsedClick",7),this.inheritedAttributes={},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.collapsedIndicatorClick=()=>{this.collapsedClick.emit({ionShadowTarget:this.collapsedRef})},this.collapsed=!1,this.last=void 0,this.showCollapsedIndicator=void 0,this.color=void 0,this.active=!1,this.disabled=!1,this.download=void 0,this.href=void 0,this.rel=void 0,this.separator=void 0,this.target=void 0,this.routerDirection="forward",this.routerAnimation=void 0}componentWillLoad(){this.inheritedAttributes=(0,v.i)(this.el)}isClickable(){return void 0!==this.href}render(){const{color:p,active:d,collapsed:a,disabled:n,download:s,el:x,inheritedAttributes:e,last:b,routerAnimation:C,routerDirection:j,separator:P,showCollapsedIndicator:B,target:S}=this,A=this.isClickable(),E=void 0===this.href?"span":"a",M=n?void 0:this.href,z=(0,u.b)(this),L="span"===E?{}:{download:s,href:M,target:S},R=!b&&(a?!(!B||b):P);return(0,o.h)(o.H,{key:"6d354439f90ec3cfab9fbf93cb17a67fb9ca6034",onClick:w=>(0,l.o)(M,w,j,C),"aria-disabled":n?"true":null,class:(0,l.c)(p,{[z]:!0,"breadcrumb-active":d,"breadcrumb-collapsed":a,"breadcrumb-disabled":n,"in-breadcrumbs-color":(0,l.h)("ion-breadcrumbs[color]",x),"in-toolbar":(0,l.h)("ion-toolbar",this.el),"in-toolbar-color":(0,l.h)("ion-toolbar[color]",this.el),"ion-activatable":A,"ion-focusable":A})},(0,o.h)(E,Object.assign({key:"4782977969bd84af02b1834573a6e51069b798ae"},L,{class:"breadcrumb-native",part:"native",disabled:n,onFocus:this.onFocus,onBlur:this.onBlur},e),(0,o.h)("slot",{key:"7d5fb845e463b8195142099773e7f258fc8ed31d",name:"start"}),(0,o.h)("slot",{key:"6b642ccb9101c12f72124fed5dd0f6362345fb41"}),(0,o.h)("slot",{key:"9fb0841fed712e21d1e84b187e1bc9159cf80b56",name:"end"})),B&&(0,o.h)("button",{key:"4b64544d879224d491447a79da8f8672b994af0b",part:"collapsed-indicator","aria-label":"Show more breadcrumbs",onClick:()=>this.collapsedIndicatorClick(),ref:w=>this.collapsedRef=w,class:{"breadcrumbs-collapsed-indicator":!0}},(0,o.h)("ion-icon",{key:"5a2511b237aa8c401f416e967a831f8315423949","aria-hidden":"true",icon:m.n,lazy:!1})),R&&(0,o.h)("span",{key:"348952855dd79eb92f8d370e5839a8d09aff4097",class:"breadcrumb-separator",part:"separator","aria-hidden":"true"},(0,o.h)("slot",{key:"0120f416edb1d776fa6900b5986b2b57eef554b3",name:"separator"},"ios"===z?(0,o.h)("ion-icon",{icon:m.m,lazy:!1,"flip-rtl":!0}):(0,o.h)("span",null,"/"))))}get el(){return(0,o.f)(this)}};i.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:1.375rem}:host{--color:var(--ion-color-step-850, #2d4665);--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--color-active);--background-focused:var(--ion-color-step-50, rgba(233, 237, 243, 0.7));font-size:clamp(16px, 1rem, 22px)}:host(.breadcrumb-active){font-weight:600}.breadcrumb-native{border-radius:4px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:5px;padding-bottom:5px;border:1px solid transparent}:host(.ion-focused) .breadcrumb-native{border-radius:8px}:host(.in-breadcrumbs-color.ion-focused) .breadcrumb-native,:host(.ion-color.ion-focused) .breadcrumb-native{background:rgba(var(--ion-color-base-rgb), 0.1);color:var(--ion-color-base)}:host(.ion-focused) ::slotted(ion-icon),:host(.in-breadcrumbs-color.ion-focused) ::slotted(ion-icon),:host(.ion-color.ion-focused) ::slotted(ion-icon){color:var(--ion-color-step-750, #445b78)}.breadcrumb-separator{color:var(--ion-color-step-550, #73849a)}::slotted(ion-icon){color:var(--ion-color-step-400, #92a0b3);font-size:min(1.125rem, 21.6px)}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, #242d39)}.breadcrumbs-collapsed-indicator{border-radius:4px;background:var(--ion-color-step-100, #e9edf3);color:var(--ion-color-step-550, #73849a)}.breadcrumbs-collapsed-indicator:hover{opacity:0.45}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, #d9e0ea)}.breadcrumbs-collapsed-indicator ion-icon{font-size:min(1.375rem, 22px)}",md:":host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-align:center;align-items:center;color:var(--color);font-size:1rem;font-weight:400;line-height:1.5}.breadcrumb-native{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;outline:none;background:inherit}:host(.breadcrumb-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.breadcrumb-active){color:var(--color-active)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .breadcrumb-native{background:var(--background-focused)}@media (any-hover: hover){:host(.ion-activatable:hover){color:var(--color-hover)}:host(.ion-activatable.in-breadcrumbs-color:hover),:host(.ion-activatable.ion-color:hover){color:var(--ion-color-shade)}}.breadcrumb-separator{display:-ms-inline-flexbox;display:inline-flex}:host(.breadcrumb-collapsed) .breadcrumb-native{display:none}:host(.in-breadcrumbs-color),:host(.in-breadcrumbs-color.breadcrumb-active){color:var(--ion-color-base)}:host(.in-breadcrumbs-color) .breadcrumb-separator{color:var(--ion-color-base)}:host(.ion-color){color:var(--ion-color-base)}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumb-separator{color:rgba(var(--ion-color-contrast-rgb), 0.8)}:host(.in-toolbar-color.breadcrumb-active){color:var(--ion-color-contrast)}.breadcrumbs-collapsed-indicator{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:14px;margin-inline-end:14px;margin-top:0;margin-bottom:0;display:-ms-flexbox;display:flex;-ms-flex:1 1 100%;flex:1 1 100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:32px;height:18px;border:0;outline:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.breadcrumbs-collapsed-indicator ion-icon{margin-top:1px;font-size:1.375rem}:host{--color:var(--ion-color-step-600, #677483);--color-active:var(--ion-text-color, #03060b);--color-hover:var(--ion-text-color, #03060b);--color-focused:var(--ion-color-step-800, #35404e);--background-focused:var(--ion-color-step-50, #fff)}:host(.breadcrumb-active){font-weight:500}.breadcrumb-native{-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px}.breadcrumb-separator{-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:10px;margin-inline-end:10px;margin-top:-1px}:host(.ion-focused) .breadcrumb-native{border-radius:4px;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.2), 0px 2px 8px rgba(0, 0, 0, 0.12)}.breadcrumb-separator{color:var(--ion-color-step-550, #73849a)}::slotted(ion-icon){color:var(--ion-color-step-550, #7d8894);font-size:1.125rem}::slotted(ion-icon[slot=start]){-webkit-margin-end:8px;margin-inline-end:8px}::slotted(ion-icon[slot=end]){-webkit-margin-start:8px;margin-inline-start:8px}:host(.breadcrumb-active) ::slotted(ion-icon){color:var(--ion-color-step-850, #222d3a)}.breadcrumbs-collapsed-indicator{border-radius:2px;background:var(--ion-color-step-100, #eef1f3);color:var(--ion-color-step-550, #73849a)}.breadcrumbs-collapsed-indicator:hover{opacity:0.7}.breadcrumbs-collapsed-indicator:focus{background:var(--ion-color-step-150, #dfe5e8)}"};const I=class{constructor(p){(0,o.r)(this,p),this.ionCollapsedClick=(0,o.d)(this,"ionCollapsedClick",7),this.breadcrumbsInit=()=>{this.setBreadcrumbSeparator(),this.setMaxItems()},this.resetActiveBreadcrumb=()=>{const a=this.getBreadcrumbs().find(n=>n.active);a&&this.activeChanged&&(a.active=!1)},this.setMaxItems=()=>{const{itemsAfterCollapse:d,itemsBeforeCollapse:a,maxItems:n}=this,s=this.getBreadcrumbs();for(const e of s)e.showCollapsedIndicator=!1,e.collapsed=!1;void 0!==n&&s.length>n&&a+d<=n&&s.forEach((e,b)=>{b===a&&(e.showCollapsedIndicator=!0),b>=a&&b<s.length-d&&(e.collapsed=!0)})},this.setBreadcrumbSeparator=()=>{const{itemsAfterCollapse:d,itemsBeforeCollapse:a,maxItems:n}=this,s=this.getBreadcrumbs(),x=s.find(e=>e.active);for(const e of s){const b=void 0!==n&&0===d?e===s[a]:e===s[s.length-1];e.last=b,e.separator=void 0!==e.separator?e.separator:!b||void 0,!x&&b&&(e.active=!0,this.activeChanged=!0)}},this.getBreadcrumbs=()=>Array.from(this.el.querySelectorAll("ion-breadcrumb")),this.slotChanged=()=>{this.resetActiveBreadcrumb(),this.breadcrumbsInit()},this.collapsed=void 0,this.activeChanged=void 0,this.color=void 0,this.maxItems=void 0,this.itemsBeforeCollapse=1,this.itemsAfterCollapse=1}onCollapsedClick(p){const a=this.getBreadcrumbs().filter(n=>n.collapsed);this.ionCollapsedClick.emit(Object.assign(Object.assign({},p.detail),{collapsedBreadcrumbs:a}))}maxItemsChanged(){this.resetActiveBreadcrumb(),this.breadcrumbsInit()}componentWillLoad(){this.breadcrumbsInit()}render(){const{color:p,collapsed:d}=this,a=(0,u.b)(this);return(0,o.h)(o.H,{key:"cd288d4bf5498f86d086eb999b506993818642f3",class:(0,l.c)(p,{[a]:!0,"in-toolbar":(0,l.h)("ion-toolbar",this.el),"in-toolbar-color":(0,l.h)("ion-toolbar[color]",this.el),"breadcrumbs-collapsed":d})},(0,o.h)("slot",{key:"73c802065511dbebef3867b01ce929313d24cba2",onSlotchange:this.slotChanged}))}get el(){return(0,o.f)(this)}static get watchers(){return{maxItems:["maxItemsChanged"],itemsBeforeCollapse:["maxItemsChanged"],itemsAfterCollapse:["maxItemsChanged"]}}};I.style={ios:":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:0;padding-bottom:0;-ms-flex-pack:center;justify-content:center}",md:":host{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center}:host(.in-toolbar-color),:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator ion-icon{color:var(--ion-color-contrast)}:host(.in-toolbar-color) .breadcrumbs-collapsed-indicator{background:rgba(var(--ion-color-contrast-rgb), 0.11)}:host(.in-toolbar){-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0}"}},333:(O,h,c)=>{c.d(h,{c:()=>l,g:()=>u,h:()=>v,o:()=>y});var o=c(467);const v=(t,r)=>null!==r.closest(t),l=(t,r)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},r):r,u=t=>{const r={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])(t).forEach(i=>r[i]=!0),r},_=/^[a-z][a-z0-9+\-.]*:/,y=function(){var t=(0,o.A)(function*(r,i,k,f){if(null!=r&&"#"!==r[0]&&!_.test(r)){const g=document.querySelector("ion-router");if(g)return null!=i&&i.preventDefault(),g.push(r,k,f)}return!1});return function(i,k,f,g){return t.apply(this,arguments)}}()}}]);