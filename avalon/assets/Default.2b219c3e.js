import{p as q,i as ae,c as g,r as I,a as M,b as $,g as ve,o as me,d as fe,e as Ce,f as ke,h as Ae,j as Pe,k as Le,S as ge,l as A,w as J,m as Ne,n as He,q as ce,s as Me,t as a,F as Ee,v as Oe,u as ye,x as te,y as he,z as je,A as De,B as We,C as Fe,D as be,_ as _e,E as ne,G as oe,H as x,I as j,J as qe,K as le,L as Ke}from"./index.9aefa69a.js";import{u as P,m as se}from"./VGrid.849a3e21.js";import{u as Ue,m as Ze,M as O,a as Xe,b as Ge,c as Je,d as Ye,e as Qe,f as et,g as tt,V as Y,h as at,i as D,j as nt,k as Q,l as ee}from"./VRow.75c00c80.js";import{V as pe}from"./VResponsive.9fec8ad1.js";import"./dimensions.d7e71c88.js";const F=Symbol.for("vuetify:layout"),Se=Symbol.for("vuetify:layout-item"),de=1e3,ot=q({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),lt=q({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function st(){const e=ae(F);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function rt(e){var d;const o=ae(F);if(!o)throw new Error("[Vuetify] Could not find injected layout");const t=(d=e.id)!=null?d:`layout-item-${Ce()}`,l=ve("useLayoutItem");fe(Se,{id:t});const i=I(!1);ke(()=>i.value=!0),Ae(()=>i.value=!1);const{layoutItemStyles:r,layoutItemScrimStyles:s}=o.register(l,{...e,active:g(()=>i.value?!1:e.active.value),id:t});return Pe(()=>o.unregister(t)),{layoutItemStyles:r,layoutRect:o.layoutRect,layoutItemScrimStyles:s}}const it=(e,o,t,l)=>{let i={top:0,left:0,right:0,bottom:0};const r=[{id:"",layer:{...i}}];for(const s of e){const d=o.get(s),y=t.get(s),u=l.get(s);if(!d||!y||!u)continue;const v={...i,[d.value]:parseInt(i[d.value],10)+(u.value?parseInt(y.value,10):0)};r.push({id:s,layer:v}),i=v}return r};function ut(e){const o=ae(F,null),t=g(()=>o?o.rootZIndex.value-100:de),l=I([]),i=M(new Map),r=M(new Map),s=M(new Map),d=M(new Map),y=M(new Map),{resizeRef:u,contentRect:v}=Ue(),b=g(()=>{var n;const f=new Map,_=(n=e.overlaps)!=null?n:[];for(const m of _.filter(c=>c.includes(":"))){const[c,p]=m.split(":");if(!l.value.includes(c)||!l.value.includes(p))continue;const z=i.get(c),L=i.get(p),N=r.get(c),E=r.get(p);!z||!L||!N||!E||(f.set(p,{position:z.value,amount:parseInt(N.value,10)}),f.set(c,{position:L.value,amount:-parseInt(E.value,10)}))}return f}),h=g(()=>{const f=[...new Set([...s.values()].map(n=>n.value))].sort((n,m)=>n-m),_=[];for(const n of f){const m=l.value.filter(c=>{var p;return((p=s.get(c))==null?void 0:p.value)===n});_.push(...m)}return it(_,i,r,d)}),w=g(()=>!Array.from(y.values()).some(f=>f.value)),B=g(()=>h.value[h.value.length-1].layer),C=g(()=>({"--v-layout-left":$(B.value.left),"--v-layout-right":$(B.value.right),"--v-layout-top":$(B.value.top),"--v-layout-bottom":$(B.value.bottom),...w.value?void 0:{transition:"none"}})),S=g(()=>h.value.slice(1).map((f,_)=>{let{id:n}=f;const{layer:m}=h.value[_],c=r.get(n),p=i.get(n);return{id:n,...m,size:Number(c.value),position:p.value}})),V=f=>S.value.find(_=>_.id===f),R=ve("createLayout"),k=I(!1);me(()=>{k.value=!0}),fe(F,{register:(f,_)=>{let{id:n,order:m,position:c,layoutSize:p,elementSize:z,active:L,disableTransitions:N,absolute:E}=_;s.set(n,m),i.set(n,c),r.set(n,p),d.set(n,L),N&&y.set(n,N);const re=Le(Se,R==null?void 0:R.vnode).indexOf(f);re>-1?l.value.splice(re,0,n):l.value.push(n);const ie=g(()=>S.value.findIndex(H=>H.id===n)),Z=g(()=>t.value+h.value.length*2-ie.value*2),Te=g(()=>{const H=c.value==="left"||c.value==="right",X=c.value==="right",Re=c.value==="bottom",ue={[c.value]:0,zIndex:Z.value,transform:`translate${H?"X":"Y"}(${(L.value?0:-110)*(X||Re?-1:1)}%)`,position:E.value||t.value!==de?"absolute":"fixed",...w.value?void 0:{transition:"none"}};if(!k.value)return ue;const T=S.value[ie.value];if(!T)throw new Error(`[Vuetify] Could not find layout item "${n}"`);const G=b.value.get(n);return G&&(T[G.position]+=G.amount),{...ue,height:H?`calc(100% - ${T.top}px - ${T.bottom}px)`:z.value?`${z.value}px`:void 0,left:X?void 0:`${T.left}px`,right:X?`${T.right}px`:void 0,top:c.value!=="bottom"?`${T.top}px`:void 0,bottom:c.value!=="top"?`${T.bottom}px`:void 0,width:H?z.value?`${z.value}px`:void 0:`calc(100% - ${T.left}px - ${T.right}px)`}}),$e=g(()=>({zIndex:Z.value-1}));return{layoutItemStyles:Te,layoutItemScrimStyles:$e,zIndex:Z}},unregister:f=>{s.delete(f),i.delete(f),r.delete(f),d.delete(f),y.delete(f),l.value=l.value.filter(_=>_!==f)},mainRect:B,mainStyles:C,getLayoutItem:V,items:S,layoutRect:v,rootZIndex:t});const K=g(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),U=g(()=>({zIndex:t.value,position:o?"relative":void 0,overflow:o?"hidden":void 0}));return{layoutClasses:K,layoutStyles:U,getLayoutItem:V,items:S,layoutRect:v,layoutRef:u}}function ct(e,o){if(!ge)return;const t=o.modifiers||{},l=o.value,{handler:i,options:r}=typeof l=="object"?l:{handler:l,options:{}},s=new IntersectionObserver(function(){var b;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],y=arguments.length>1?arguments[1]:void 0;const u=(b=e._observe)==null?void 0:b[o.instance.$.uid];if(!u)return;const v=d.some(h=>h.isIntersecting);i&&(!t.quiet||u.init)&&(!t.once||v||u.init)&&i(v,d,y),v&&t.once?xe(e,o):u.init=!0},r);e._observe=Object(e._observe),e._observe[o.instance.$.uid]={init:!1,observer:s},s.observe(e)}function xe(e,o){var l;const t=(l=e._observe)==null?void 0:l[o.instance.$.uid];!t||(t.observer.unobserve(e),delete e._observe[o.instance.$.uid])}const dt={mounted:ct,unmounted:xe},vt=dt,Ie=A()({name:"VImg",directives:{intersect:vt},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...Ze()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,o){let{emit:t,slots:l}=o;const i=I(""),r=I(),s=I(e.eager?"loading":"idle"),d=I(),y=I(),u=g(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=g(()=>u.value.aspect||d.value/y.value||0);J(()=>e.src,()=>{b(s.value!=="idle")}),J(v,(n,m)=>{!n&&m&&r.value&&S(r.value)}),Ne(()=>b());function b(n){if(!(e.eager&&n)&&!(ge&&!n&&!e.eager)){if(s.value="loading",u.value.lazySrc){const m=new Image;m.src=u.value.lazySrc,S(m,null)}!u.value.src||He(()=>{var m,c;if(t("loadstart",((m=r.value)==null?void 0:m.currentSrc)||u.value.src),(c=r.value)!=null&&c.complete){if(r.value.naturalWidth||w(),s.value==="error")return;v.value||S(r.value,null),h()}else v.value||S(r.value),B()})}}function h(){var n;B(),s.value="loaded",t("load",((n=r.value)==null?void 0:n.currentSrc)||u.value.src)}function w(){var n;s.value="error",t("error",((n=r.value)==null?void 0:n.currentSrc)||u.value.src)}function B(){const n=r.value;n&&(i.value=n.currentSrc||n.src)}let C=-1;function S(n){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const c=()=>{clearTimeout(C);const{naturalHeight:p,naturalWidth:z}=n;p||z?(d.value=z,y.value=p):!n.complete&&s.value==="loading"&&m!=null?C=window.setTimeout(c,m):(n.currentSrc.endsWith(".svg")||n.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,y.value=1)};c()}const V=g(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),R=()=>{var c;if(!u.value.src||s.value==="idle")return null;const n=a("img",{class:["v-img__img",V.value],src:u.value.src,srcset:u.value.srcset,alt:"",sizes:e.sizes,ref:r,onLoad:h,onError:w},null),m=(c=l.sources)==null?void 0:c.call(l);return a(O,{transition:e.transition,appear:!0},{default:()=>[ce(m?a("picture",{class:"v-img__picture"},[m,n]):n,[[Oe,s.value==="loaded"]])]})},k=()=>a(O,{transition:e.transition},{default:()=>[u.value.lazySrc&&s.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",V.value],src:u.value.lazySrc,alt:""},null)]}),K=()=>l.placeholder?a(O,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!l.error)&&a("div",{class:"v-img__placeholder"},[l.placeholder()])]}):null,U=()=>l.error?a(O,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&a("div",{class:"v-img__error"},[l.error()])]}):null,f=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,_=I(!1);{const n=J(v,m=>{m&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{_.value=!0})}),n())})}return P(()=>ce(a(pe,{class:["v-img",{"v-img--booting":!_.value}],style:{width:$(e.width==="auto"?d.value:e.width)},aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>a(Ee,null,[a(R,null,null),a(k,null,null),a(f,null,null),a(K,null,null),a(U,null,null)]),default:l.default}),[[Me("intersect"),{handler:b,options:e.options},null,{once:!0}]])),{currentSrc:i,image:r,state:s,naturalWidth:d,naturalHeight:y}}}),Ve=q({text:String,...se()},"v-toolbar-title"),we=A()({name:"VToolbarTitle",props:Ve(),setup(e,o){let{slots:t}=o;return P(()=>{const l=!!(t.default||t.text||e.text);return a(e.tag,{class:"v-toolbar-title"},{default:()=>{var i;return[l&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(i=t.default)==null?void 0:i.call(t)])]}})}),{}}}),mt=[null,"prominent","default","comfortable","compact"],Be=q({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>mt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Xe(),...Ge(),...Je(),...se({tag:"header"}),...ye()},"v-toolbar"),W=A()({name:"VToolbar",props:Be(),setup(e,o){var h;let{slots:t}=o;const{backgroundColorClasses:l,backgroundColorStyles:i}=Ye(te(e,"color")),{borderClasses:r}=Qe(e),{elevationClasses:s}=et(e),{roundedClasses:d}=tt(e),{themeClasses:y}=he(e),u=I(!!(e.extended||((h=t.extension)==null?void 0:h.call(t)))),v=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=g(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return je({VBtn:{variant:"text"}}),P(()=>{var S;const w=!!(e.title||t.title),B=!!(t.image||e.image),C=(S=t.extension)==null?void 0:S.call(t);return u.value=!!(e.extended||C),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},l.value,r.value,s.value,d.value,y.value],style:[i.value]},{default:()=>[B&&a("div",{key:"image",class:"v-toolbar__image"},[a(Y,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>{var V;return[t.image?(V=t.image)==null?void 0:V.call(t):a(Ie,null,null)]}})]),a(Y,{defaults:{VTabs:{height:$(v.value)}}},{default:()=>{var V,R,k;return[a("div",{class:"v-toolbar__content",style:{height:$(v.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(V=t.prepend)==null?void 0:V.call(t)]),w&&a(we,{key:"title",text:e.title},{text:t.title}),(R=t.default)==null?void 0:R.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(k=t.append)==null?void 0:k.call(t)])])]}}),a(Y,{defaults:{VTabs:{height:$(b.value)}}},{default:()=>[a(at,null,{default:()=>[u.value&&a("div",{class:"v-toolbar__extension",style:{height:$(b.value)}},[C])]})]})]})}),{contentHeight:v,extensionHeight:b}}});function ft(e){var o;return De(e,Object.keys((o=W==null?void 0:W.props)!=null?o:{}))}function ze(){const e=I(!1);return me(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:g(()=>e.value?void 0:{transition:"none !important"}),isBooted:We(e)}}const gt=A()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Be(),...lt(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const l=I(),i=Fe(e,"modelValue"),r=g(()=>{var v,b,h,w;const y=(b=(v=l.value)==null?void 0:v.contentHeight)!=null?b:0,u=(w=(h=l.value)==null?void 0:h.extensionHeight)!=null?w:0;return y+u}),{ssrBootStyles:s}=ze(),{layoutItemStyles:d}=rt({id:e.name,order:g(()=>parseInt(e.order,10)),position:te(e,"location"),layoutSize:r,elementSize:r,active:i,absolute:te(e,"absolute")});return P(()=>{const[y]=ft(e);return a(W,be({ref:l,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...d.value,height:void 0,...s.value}},y),t)}),{}}}),yt=A()({name:"VAppBarTitle",props:Ve(),setup(e,o){let{slots:t}=o;return P(()=>a(we,be(e,{class:"v-app-bar-title"}),t)),{}}}),ht={};function bt(e,o){return ne(),oe(gt,{flat:""},{default:x(()=>[a(yt,null,{default:x(()=>[a(D,{icon:"mdi-gamepad-variant-outline"}),j(" \u963F\u74E6\u9686 Avalon ")]),_:1})]),_:1})}const _t=_e(ht,[["render",bt]]),pt="/avalon/assets/avalon_boardgame.c8647ac8.jpg";const St=A()({name:"VMain",props:{scrollable:Boolean,...se({tag:"main"})},setup(e,o){let{slots:t}=o;const{mainStyles:l}=st(),{ssrBootStyles:i}=ze();return P(()=>a(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[l.value,i.value]},{default:()=>{var r,s;return[e.scrollable?a("div",{class:"v-main__scroller"},[(r=t.default)==null?void 0:r.call(t)]):(s=t.default)==null?void 0:s.call(t)]}})),{}}}),xt={},It=le("br",null,null,-1),Vt=le("div",{class:"text-body-2 font-weight-light mb-n1"},"Welcome to",-1),wt=le("h1",{class:"text-h2 font-weight-bold"},"Avalon World",-1);function Bt(e,o){const t=qe("router-view");return ne(),oe(St,null,{default:x(()=>[a(pe,{class:"d-flex align-center text-center"},{default:x(()=>[a(Ie,{contain:"",height:"300",src:pt}),It,Vt,wt,a(nt,{class:"d-flex align-center justify-center mt-6"},{default:x(()=>[a(Q,{cols:"auto"},{default:x(()=>[a(ee,{to:"/home","min-width":"164",rel:"noopener noreferrer",variant:"text"},{default:x(()=>[a(D,{icon:"mdi-view-dashboard",size:"large",start:""}),j(" \u904A\u6232\u4ECB\u7D39 ")]),_:1})]),_:1}),a(Q,{cols:"auto"},{default:x(()=>[a(ee,{to:"/start",color:"primary","min-width":"228",rel:"noopener noreferrer",size:"x-large",variant:"flat"},{default:x(()=>[a(D,{icon:"mdi-speedometer",size:"large",start:""}),j(" \u958B\u59CB\u904A\u6232 ")]),_:1})]),_:1}),a(Q,{cols:"auto"},{default:x(()=>[a(ee,{to:"/tips","min-width":"164",rel:"noopener noreferrer",variant:"text"},{default:x(()=>[a(D,{icon:"mdi-lightbulb-multiple-outline",size:"large",start:""}),j(" \u65B0\u624B\u63D0\u793A ")]),_:1})]),_:1})]),_:1})]),_:1}),a(t)]),_:1})}const zt=_e(xt,[["render",Bt]]);const Tt=A()({name:"VApp",props:{...ot({fullHeight:!0}),...ye()},setup(e,o){let{slots:t}=o;const l=he(e),{layoutClasses:i,layoutStyles:r,getLayoutItem:s,items:d,layoutRef:y}=ut(e),{rtlClasses:u}=Ke();return P(()=>{var v;return a("div",{ref:y,class:["v-application",l.themeClasses.value,i.value,u.value],style:r.value},[a("div",{class:"v-application__wrap"},[(v=t.default)==null?void 0:v.call(t)])])}),{getLayoutItem:s,items:d,theme:l}}}),Lt={__name:"Default",setup(e){return(o,t)=>(ne(),oe(Tt,null,{default:x(()=>[a(_t),a(zt)]),_:1}))}};export{Lt as default};
