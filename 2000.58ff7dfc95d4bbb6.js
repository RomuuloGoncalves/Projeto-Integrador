"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2e3],{3468:(y,M,t)=>{t.d(M,{_:()=>C});var n=t(4438),d=t(177),a=t(8974);function v(e,l){if(1&e&&(n.j41(0,"ion-row",1)(1,"ion-col",2),n.nrm(2,"ion-spinner",3),n.k0s()()),2&e){const g=n.XpG();n.R7$(2),n.Aen("scale:"+g.scale),n.Y8G("color",g.color)}}let o=(()=>{var e;class l{constructor(){this.loading=!1,this.scale=2.5,this.color="primary"}ngOnInit(){}}return(e=l).\u0275fac=function(m){return new(m||e)},e.\u0275cmp=n.VBU({type:e,selectors:[["app-loading"]],inputs:{loading:"loading",scale:"scale",color:"color"},decls:1,vars:1,consts:[["class","ion-justify-content-center ion-align-items-center",4,"ngIf"],[1,"ion-justify-content-center","ion-align-items-center"],["size","auto"],["name","dots",3,"color"]],template:function(m,p){1&m&&n.DNE(0,v,3,3,"ion-row",0),2&m&&n.Y8G("ngIf",p.loading)},dependencies:[d.bT,a.hU,a.ln,a.w2],styles:["ion-row[_ngcontent-%COMP%]{height:100%}"]}),l})();function s(e,l){if(1&e&&(n.j41(0,"p"),n.EFF(1),n.k0s()),2&e){const g=n.XpG();n.R7$(),n.JRh(g.btnNome)}}let C=(()=>{var e;class l{constructor(){this.loading=!1,this.disabled=!1,this.tipoBtn="submit",this.color="primary",this.colorLoading="light",this.height=60,this.width=240}ngOnInit(){}}return(e=l).\u0275fac=function(m){return new(m||e)},e.\u0275cmp=n.VBU({type:e,selectors:[["app-btn-loading"]],inputs:{loading:"loading",disabled:"disabled",btnNome:"btnNome",tipoBtn:"tipoBtn",color:"color",colorLoading:"colorLoading",height:"height",width:"width"},decls:3,vars:7,consts:[["color","dark","expand","block","type","submit",1,"cadastrar-btn",3,"disabled"],[3,"loading","color","scale"],[4,"ngIf"]],template:function(m,p){1&m&&(n.j41(0,"ion-button",0),n.nrm(1,"app-loading",1),n.DNE(2,s,2,1,"p",2),n.k0s()),2&m&&(n.Aen("height:"+p.height+"px;width:"+p.width+"px;"),n.Y8G("disabled",p.loading||p.disabled),n.R7$(),n.Y8G("loading",p.loading)("color",p.colorLoading)("scale",1),n.R7$(),n.Y8G("ngIf",!p.loading))},dependencies:[d.bT,a.Jm,o],styles:["ion-button[_ngcontent-%COMP%]{width:240px}"]}),l})()},8334:(y,M,t)=>{t.d(M,{p:()=>o});var n=t(177),d=t(8974),a=t(4438);let v=(()=>{var s;class C{}return(s=C).\u0275fac=function(l){return new(l||s)},s.\u0275mod=a.$C({type:s}),s.\u0275inj=a.G2t({imports:[n.MD,d.bv]}),C})(),o=(()=>{var s;class C{}return(s=C).\u0275fac=function(l){return new(l||s)},s.\u0275mod=a.$C({type:s}),s.\u0275inj=a.G2t({imports:[n.MD,d.bv,v]}),C})()},2e3:(y,M,t)=>{t.r(M),t.d(M,{CadastroSensorPageModule:()=>x});var n=t(177),d=t(4341),a=t(8974),v=t(1671),o=t(4438),s=t(2304),C=t(8397),e=t(8570),l=t(2906),g=t(3427),m=t(3468);const p=["cadastroForm"],P=()=>["/perfil"];function S(i,h){if(1&i&&(o.qex(0),o.j41(1,"ion-select-option",21),o.EFF(2),o.k0s(),o.bVm()),2&i){const u=h.$implicit;o.R7$(),o.FS9("value",null==u?null:u.id_arduino),o.R7$(),o.JRh(null==u?null:u.nome)}}const F=[{path:"",component:(()=>{var i;class h{constructor(r,c,f,b){this.Sensor=r,this.Toast=c,this.Usuario=f,this.Arduino=b,this.id_usuario=this.Usuario.id_usuario,this.erros={},this.loading=!1,this.arduinos=[]}ngOnInit(){this.listarArduino()}listarArduino(){this.Arduino.listarArduinoUsuario(this.id_usuario).subscribe(r=>{console.log("",r),this.loading=!1,this.arduinos=r},r=>{console.error("Erro ao cadastrar os dados:",r),this.loading=!1,this.Toast.mostrarToast("danger","Algo deu errado!")})}cadastrar(){this.loading=!0;const r=this.cadastoForm.form.value;console.log(r),this.Sensor.cadastrarDados(r).subscribe(c=>{console.log("Dados cadastrados com sucesso!",c),this.loading=!1,this.Toast.mostrarToast("success","Cadastro realizado com sucesso")},c=>{console.error("Erro ao cadastrar os dados:",c),this.loading=!1,this.Toast.mostrarToast("danger","Algo deu errado!")})}}return(i=h).\u0275fac=function(r){return new(r||i)(o.rXU(s.u),o.rXU(C.f),o.rXU(e.o),o.rXU(l.u))},i.\u0275cmp=o.VBU({type:i,selectors:[["app-cadastro-sensor"]],viewQuery:function(r,c){if(1&r&&o.GBs(p,5),2&r){let f;o.mGM(f=o.lsd())&&(c.cadastoForm=f.first)}},decls:30,vars:7,consts:[["cadastroForm","ngForm"],[3,"fullscreen"],[1,"ion-justify-content-center","ion-align-items-center","main"],["size","12","sizeMd","10"],[1,"ion-text-md-ion-justify-content-start"],["size","large","fill","outline","color","dark","routerDirection","back",3,"routerLink"],["name","arrow-back-outline"],[1,"ion-justify-content-center","ion-text-md-ion-justify-content-start"],[1,"cadastro__logo"],[1,"cadastro__link"],["size","10","sizeMd","8","sizeLg","5"],[3,"ngSubmit"],[1,"input-container"],["ngModel","","name","nome","color","dark","label","Nome:","label-placement","floating","errorText","Nome \xe9 obrigat\xf3rio","type","text","fill","outline","required",""],["ngModel","","name","pino","color","dark","errorText","pino inv\xe1lido","label","Pino:","label-placement","floating","fill","outline","type","number","required",""],["ngModel","","name","id_arduino","color","dark","aria-label","Arduino:","fill","outline","interface","popover","placeholder","Escolha em o ardu\xedno"],[4,"ngFor","ngForOf"],[1,"ion-justify-content-center","ion-padding"],["size","auto"],["btnNome","Cadastrar",3,"loading","disabled"],["name","id_usuario","type","hidden",3,"ngModel"],[3,"value"]],template:function(r,c){if(1&r){const f=o.RV6();o.j41(0,"ion-content",1),o.nrm(1,"app-header"),o.j41(2,"ion-row",2)(3,"ion-col",3)(4,"ion-row",4)(5,"ion-button",5),o.nrm(6,"ion-icon",6),o.EFF(7," Voltar "),o.k0s()()(),o.j41(8,"ion-col",3)(9,"ion-row",7)(10,"ion-label",8)(11,"a",9),o.EFF(12,"Adicionar Sensor"),o.k0s()()()(),o.j41(13,"ion-col",10)(14,"ion-row")(15,"ion-col")(16,"form",11,0),o.bIt("ngSubmit",function(){return o.eBV(f),o.Njj(c.cadastrar())}),o.j41(18,"ion-row",12),o.nrm(19,"ion-input",13),o.k0s(),o.j41(20,"ion-row",12),o.nrm(21,"ion-input",14),o.k0s(),o.j41(22,"ion-row",12)(23,"ion-select",15),o.DNE(24,S,3,2,"ng-container",16),o.k0s()(),o.j41(25,"ion-row",17)(26,"ion-col",18),o.nrm(27,"app-btn-loading",19),o.k0s()(),o.j41(28,"ion-row",12),o.nrm(29,"ion-input",20),o.k0s()()()()()()()}if(2&r){const f=o.sdS(17);o.Y8G("fullscreen",!0),o.R7$(5),o.Y8G("routerLink",o.lJ4(6,P)),o.R7$(19),o.Y8G("ngForOf",c.arduinos),o.R7$(3),o.Y8G("loading",c.loading)("disabled",!f.valid),o.R7$(2),o.FS9("ngModel",c.id_usuario)}},dependencies:[n.Sq,d.qT,d.BC,d.cb,d.YS,d.vS,d.cV,a.Jm,a.hU,a.W9,a.iq,a.$w,a.he,a.ln,a.Nm,a.Ip,a.su,a.Je,a.Gw,a.N7,v.Wk,g.l,m._],styles:['.cadastro_wrapper-redes[_ngcontent-%COMP%]{max-width:250px}.btn-redes[_ngcontent-%COMP%]{width:55px;height:55px;--border-radius: 100%}.cadastro__logo[_ngcontent-%COMP%]{font-family:mrDafoe;color:#000;font-size:3rem;text-align:center}.cadastro__link[_ngcontent-%COMP%]{text-decoration:none;color:#000}.cadastro__esqueceu-senha[_ngcontent-%COMP%]{font-size:.9em;font-weight:700;margin-left:15px}.cadastro__btn-entrar[_ngcontent-%COMP%]{--padding-top: 25px;--padding-bottom: 25px;--padding-end: 75px;--padding-start: 75px}.cadastro__entrar-com[_ngcontent-%COMP%]:after, .cadastro__entrar-com[_ngcontent-%COMP%]:before{content:"";display:inline-block;width:12vw;margin-left:10px;margin-right:10px;margin-bottom:4px;height:1px;background-color:var(--ion-color-primary)}.input-container[_ngcontent-%COMP%]{min-height:80px}.input-container[_ngcontent-%COMP%]   .erro[_ngcontent-%COMP%]{font-size:.8em}']}),h})()}];let L=(()=>{var i;class h{}return(i=h).\u0275fac=function(r){return new(r||i)},i.\u0275mod=o.$C({type:i}),i.\u0275inj=o.G2t({imports:[v.iI.forChild(F),v.iI]}),h})();var j=t(8178),w=t(8334);let x=(()=>{var i;class h{}return(i=h).\u0275fac=function(r){return new(r||i)},i.\u0275mod=o.$C({type:i}),i.\u0275inj=o.G2t({imports:[n.MD,d.YN,a.bv,L,j.G,w.p]}),h})()}}]);