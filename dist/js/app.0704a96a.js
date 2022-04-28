(function(){"use strict";var e={1449:function(e,t,n){var r=n(9242),i=n(3396);const s={class:"container"};function o(e,t,n,r,o,l){const c=(0,i.up)("NavBar"),a=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(c),(0,i._)("div",s,[(0,i.Wm)(a)])])}var l=n(6520),c=n(7139),a=n.p+"img/grid.b53baca9.svg";const u={class:"container"},f={class:"header"},g=(0,i._)("p",null,"Gauron dorian",-1);function v(e,t,n,r,s,o){const l=(0,i.up)("NavProfile");return(0,i.wg)(),(0,i.iD)("div",u,[(0,i.Wm)(l,{ref:"navPart",class:(0,c.C_)(e.navIsOpen?"active-navbar":"hide-navbar"),onOnTrigger:t[0]||(t[0]=t=>e.triggerNav())},null,8,["class"]),(0,i._)("div",f,[g,(0,i._)("img",{src:a,alt:"",onClick:t[1]||(t[1]=t=>e.triggerNav())})])])}var d=n(2482),p=n.p+"img/close.d5532cf2.svg",m=n.p+"img/profile.8ae804bf.jpg",h=n.p+"img/home.c0d17448.svg",_=n.p+"img/profile.867274cd.svg",b=n.p+"img/portofolio.5459534a.svg",w=n.p+"img/skills.0eb5c0a3.svg",y=n.p+"img/contact.87caf428.svg";const k={class:"container-nav"},O={class:"all_cont"},j={class:"top_side"},P={class:"cross-container"},R=(0,i._)("div",{class:"profile_picture"},[(0,i._)("img",{src:m,alt:"",srcset:""})],-1),C=(0,i._)("div",{class:"description"},[(0,i._)("p",null,"👋 Hi, I'm")],-1),D=(0,i._)("div",{class:"name"},[(0,i._)("h1",null,"Gauron Dorian")],-1),E={class:"bottom_side"},N={class:"nav_list"},Z={class:"nav_item"},W=(0,i._)("img",{src:h,alt:"",srcset:""},null,-1),x=(0,i.Uk)("Home"),A={class:"nav_item"},I=(0,i._)("img",{src:_,alt:"",srcset:""},null,-1),M=(0,i.Uk)("About"),T={class:"nav_item"},U=(0,i._)("img",{src:b,alt:"",srcset:""},null,-1),H=(0,i.Uk)("Portofolio"),S={class:"nav_item"},V=(0,i._)("img",{src:w,alt:"",srcset:""},null,-1),Y=(0,i.Uk)("Skills"),z={class:"nav_item"},F=(0,i._)("img",{src:y,alt:"",srcset:""},null,-1),G=(0,i.Uk)("Contact");function $(e,t,n,r,s,o){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("div",O,[(0,i._)("div",j,[(0,i._)("div",P,[(0,i._)("img",{src:p,onClick:t[0]||(t[0]=t=>e.triggerNav())})]),R,C,D]),(0,i._)("div",E,[(0,i._)("ul",N,[(0,i._)("li",Z,[W,(0,i.Wm)(l,{to:"/home",class:(0,c.C_)(e.isActivePath("home")?"active-link":"link"),onClick:t[1]||(t[1]=t=>e.triggerNav())},{default:(0,i.w5)((()=>[x])),_:1},8,["class"])]),(0,i._)("li",A,[I,(0,i.Wm)(l,{to:"/about",class:(0,c.C_)(e.isActivePath("about")?"active-link":"link"),onClick:t[2]||(t[2]=t=>e.triggerNav())},{default:(0,i.w5)((()=>[M])),_:1},8,["class"])]),(0,i._)("li",T,[U,(0,i.Wm)(l,{to:"/portofolio",class:(0,c.C_)(e.isActivePath("portofolio")?"active-link":"link"),onClick:t[3]||(t[3]=t=>e.triggerNav())},{default:(0,i.w5)((()=>[H])),_:1},8,["class"])]),(0,i._)("li",S,[V,(0,i.Wm)(l,{to:"/skills",class:(0,c.C_)(e.isActivePath("skills")?"active-link":"link"),onClick:t[4]||(t[4]=t=>e.triggerNav())},{default:(0,i.w5)((()=>[Y])),_:1},8,["class"])]),(0,i._)("li",z,[F,(0,i.Wm)(l,{to:"/contact",class:(0,c.C_)(e.isActivePath("contact")?"active-link":"link"),onClick:t[5]||(t[5]=t=>e.triggerNav())},{default:(0,i.w5)((()=>[G])),_:1},8,["class"])])])])])])}var B=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let J=class extends l.w3{triggerNav(){this.$emit("onTrigger")}isActivePath(e){return this.$route.name==e}};J=B([(0,l.Ei)({})],J);var K=J,q=n(89);const L=(0,q.Z)(K,[["render",$]]);var Q=L,X=n.p+"img/construction.c976b007.svg";const ee=(0,i._)("div",{class:"title"},[(0,i._)("img",{src:h,alt:"",srcset:""}),(0,i._)("h2",null,"Home")],-1),te=(0,i._)("div",{class:"building"},[(0,i._)("img",{src:X,alt:"",srcset:""}),(0,i._)("p",null,"⚠️ This part of website is in construction")],-1);function ne(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)(i.HY,null,[ee,te],64)}var re=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let ie=class extends l.w3{};ie=re([(0,l.Ei)({})],ie);var se=ie;const oe=(0,q.Z)(se,[["render",ne]]);var le=oe,ce=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let ae=class extends l.w3{constructor(...e){super(...e),(0,d.Z)(this,"navIsOpen",!1)}triggerNav(){this.navIsOpen=!this.navIsOpen}getNavIsOpen(){return this.navIsOpen}};ae=ce([(0,l.Ei)({components:{NavProfile:Q,Home:le}})],ae);var ue=ae;const fe=(0,q.Z)(ue,[["render",v]]);var ge=fe,ve=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let de=class extends l.w3{};de=ve([(0,l.Ei)({components:{NavBar:ge}})],de);var pe=de;const me=(0,q.Z)(pe,[["render",o]]);var he=me;const _e=(0,i._)("div",{class:"title"},[(0,i._)("img",{src:_,alt:"",srcset:""}),(0,i._)("h2",null,"About")],-1),be=(0,i._)("div",{class:"building"},[(0,i._)("img",{src:X,alt:"",srcset:""}),(0,i._)("p",null,"⚠️ This part of website is in construction")],-1);function we(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)(i.HY,null,[_e,be],64)}var ye=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let ke=class extends l.w3{};ke=ye([(0,l.Ei)({})],ke);var Oe=ke;const je=(0,q.Z)(Oe,[["render",we]]);var Pe=je;const Re=(0,i._)("div",{class:"title"},[(0,i._)("img",{src:b,alt:"",srcset:""}),(0,i._)("h2",null,"Portofolio")],-1),Ce=(0,i._)("div",{class:"building"},[(0,i._)("img",{src:X,alt:"",srcset:""}),(0,i._)("p",null,"⚠️ This part of website is in construction")],-1);function De(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)(i.HY,null,[Re,Ce],64)}var Ee=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let Ne=class extends l.w3{};Ne=Ee([(0,l.Ei)({})],Ne);var Ze=Ne;const We=(0,q.Z)(Ze,[["render",De]]);var xe=We;const Ae=(0,i._)("div",{class:"title"},[(0,i._)("img",{src:w,alt:"",srcset:""}),(0,i._)("h2",null,"Skills")],-1),Ie=(0,i._)("div",{class:"building"},[(0,i._)("img",{src:X,alt:"",srcset:""}),(0,i._)("p",null,"⚠️ This part of website is in construction")],-1),Me=[Ae,Ie];function Te(e,t,n,r,s,o){return(0,i.wg)(),(0,i.iD)("div",null,Me)}var Ue=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let He=class extends l.w3{};He=Ue([(0,l.Ei)({})],He);var Se=He;const Ve=(0,q.Z)(Se,[["render",Te]]);var Ye=Ve,ze=n.p+"img/send.0dc08c66.svg",Fe=n.p+"img/reset.ac54b219.svg",Ge=n.p+"img/twitter.beff0d9a.svg",$e=n.p+"img/github.195b08ba.svg",Be=n.p+"img/linkedin.2f9c1098.svg";const Je=(0,i._)("div",{class:"title"},[(0,i._)("img",{src:y,alt:"",srcset:""}),(0,i._)("h2",null,"Contact")],-1),Ke={class:"form-mail"},qe={ref:"form"},Le={class:"contain-form"},Qe={class:"top-input"},Xe=(0,i._)("label",null,"Name",-1),et=(0,i._)("label",null,"Email",-1),tt={class:"bot-input"},nt={class:"buttons"},rt=(0,i._)("img",{alt:"send your message",src:ze},null,-1),it=[rt],st=(0,i._)("img",{alt:"send your message",src:Fe},null,-1),ot=[st],lt={class:"error"},ct=(0,i.uE)('<div class="other-contact"><div class="container-img-link"><img src="'+Ge+'" srcset=""><a href="https://twitter.com/loutre_verte" target="_blank">@bivouac</a></div><div class="container-img-link"><img src="'+$e+'" srcset=""><a href="https://github.com/Michelprogram" target="_blank">Michel program</a></div><div class="container-img-link"><img src="'+Be+'" srcset=""><a href="https://www.linkedin.com/in/dorian-gauron-534716187/" target="_blank">Gauron Dorian</a></div></div>',1);function at(e,t,n,s,o,l){return(0,i.wg)(),(0,i.iD)("div",null,[Je,(0,i._)("div",Ke,[(0,i._)("form",qe,[(0,i._)("div",Le,[(0,i._)("div",Qe,[(0,i._)("div",null,[Xe,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.name=t)},null,512),[[r.nr,e.name]])]),(0,i._)("div",null,[et,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.email=t)},null,512),[[r.nr,e.email]])])]),(0,i._)("div",tt,[(0,i._)("div",null,[(0,i.wy)((0,i._)("textarea",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.message=t),placeholder:"Your message here !"},null,512),[[r.nr,e.message]])])])]),(0,i._)("div",nt,[(0,i._)("div",{type:"submit",onClick:t[3]||(t[3]=t=>e.onSubmit()),class:(0,c.C_)(e.getWaiting()?"disable-button":"container-submit")},it,2),(0,i._)("div",{type:"reset",onClick:t[4]||(t[4]=t=>e.onReset()),class:(0,c.C_)(e.getWaiting()?"disable-button":"container-submit")},ot,2)])],512)]),(0,i._)("div",lt,[(0,i._)("p",null,(0,c.zw)(e.error),1)]),ct])}var ut;(function(e){e["fields"]="⚠️ One or many fields are wrong",e["email"]="⚠️ Email is wrong.",e["good"]="🚀",e["sent"]="😃 Message successfully sent",e["errMailJs"]="💥 Oh we have some troubles in back side"})(ut||(ut={}));var ft=ut,gt=n(3079),vt=function(e,t,n,r){var i,s=arguments.length,o=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(o=(s<3?i(o):s>3?i(t,n,o):i(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let dt=class extends l.w3{constructor(...e){super(...e),(0,d.Z)(this,"name",""),(0,d.Z)(this,"email",""),(0,d.Z)(this,"message",""),(0,d.Z)(this,"error",""),(0,d.Z)(this,"waiting",!1)}onReset(){this.name="",this.email="",this.message=""}setError(e){this.error=e}getError(){return this.error}getWaiting(){return console.log(this.waiting),this.waiting}setWaiting(e){this.waiting=e}onSubmit(){let e={name:this.name,email:this.email,message:this.message};this.setError(this.checkField()),this.getError()==ft.good&&(this.setWaiting(!0),gt.ZP.send("service_7e6viya","template_aw3gl1n",e,"INgO1urKz_M4VMzri").then((()=>{this.setError(ft.sent),this.onReset()})).catch((e=>{console.error(e),this.setError(ft.errMailJs)})).finally((()=>{this.setWaiting(!1)})))}checkField(){const e=/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gm;return""==this.name.trim()||""==this.email.trim()||""==this.message.trim()?ft.fields:this.email.match(e)?ft.good:ft.email}};dt=vt([(0,l.Ei)({})],dt);var pt=dt;const mt=(0,q.Z)(pt,[["render",at]]);var ht=mt,_t=n(678);const bt=[{path:"/home",name:"home",component:le},{path:"/about",name:"about",component:Pe},{path:"/portofolio",name:"portofolio",component:xe},{path:"/skills",name:"skills",component:Ye},{path:"/contact",name:"contact",component:ht}],wt=(0,_t.p7)({history:(0,_t.PO)(),routes:bt});var yt=wt;(0,r.ri)(he).use(yt).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,s){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],i=e[u][1],s=e[u][2];for(var l=!0,c=0;c<r.length;c++)(!1&s||o>=s)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(l=!1,s<o&&(o=s));if(l){e.splice(u--,1);var a=i();void 0!==a&&(t=a)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,i,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/portofolio/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,s,o=r[0],l=r[1],c=r[2],a=0;if(o.some((function(t){return 0!==e[t]}))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(c)var u=c(n)}for(t&&t(r);a<o.length;a++)s=o[a],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=self["webpackChunkportofolio1"]=self["webpackChunkportofolio1"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1449)}));r=n.O(r)})();
//# sourceMappingURL=app.0704a96a.js.map