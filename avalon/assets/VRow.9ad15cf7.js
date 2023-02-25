import{F as Z,r as V,I as ze,j as ne,G,v as It,l as L,H as Bt,s as Oe,T as Tt,J as se,K as q,L as Vt,p as k,c as d,b as _,m as u,S as de,x as Ae,M as Nt,N as fe,O as le,P as je,Q as Ge,R as Pt,U as M,V as X,W as Me,X as ke,Y as $e,n as Y,q as J,t as P,u as Rt,g as ve,e as zt,d as We,i as Ot,a as At,w as He,o as jt,Z as Gt,_ as Mt,k as Wt,$ as Ht,a0 as oe,a1 as Dt,a2 as Ft,a3 as Ut,a4 as qt,a5 as Le,E as De,a6 as Xt,a7 as Ee,a8 as Yt,a9 as me}from"./index.b893ccb3.js";import{u as A,m as W}from"./VGrid.c4cc4321.js";const Fe=["top","bottom"],Jt=["start","end","left","right"];function Qt(e,s){let[n,t]=e.split(" ");return t||(t=Z(Fe,n)?"start":Z(Jt,n)?"top":"center"),{side:Ie(n,s),align:Ie(t,s)}}function Ie(e,s){return e==="start"?s?"right":"left":e==="end"?s?"left":"right":e}function Fn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Un(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function qn(e){return{side:e.align,align:e.side}}function Xn(e){return Z(Fe,e.side)?"y":"x"}function Kt(e){const s=V(),n=V();if(ze){const t=new ResizeObserver(a=>{e==null||e(a,t),a.length&&(n.value=a[0].contentRect)});ne(()=>{t.disconnect()}),G(s,(a,i)=>{i&&(t.unobserve(i),n.value=void 0),a&&t.observe(a)},{flush:"post"})}return{resizeRef:s,contentRect:It(n)}}const ae=L(!1)({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,s){let{slots:n}=s;const{defaults:t,reset:a,root:i,scoped:r}=Bt(e);return Oe(t,{reset:a,root:i,scoped:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});function E(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return L()({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:s}},setup(t,a){let{slots:i}=a;return()=>{const r=t.group?Tt:se;return q(r,{name:e,mode:t.mode,onBeforeEnter(l){l.style.transformOrigin=t.origin},onLeave(l){if(t.leaveAbsolute){const{offsetTop:o,offsetLeft:f,offsetWidth:m,offsetHeight:y}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${o}px`,l.style.left=`${f}px`,l.style.width=`${m}px`,l.style.height=`${y}px`}t.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(t.leaveAbsolute&&(l==null?void 0:l._transitionInitialStyles)){const{position:o,top:f,left:m,width:y,height:c}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=o||"",l.style.top=f||"",l.style.left=m||"",l.style.width=y||"",l.style.height=c||""}}},i.default)}}})}function Ue(e,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return L()({name:e,props:{mode:{type:String,default:n}},setup(t,a){let{slots:i}=a;return()=>q(se,{name:e,...s},i.default)}})}function qe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Vt(`offset-${n}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[n]:r.style[n]}},onEnter(r){const l=r._initialStyle;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const o=`${r[t]}px`;r.style[n]="0",r.offsetHeight,r.style.transition=l.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[n]=o})},onAfterEnter:i,onEnterCancelled:i,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[n]:r.style[n]},r.style.overflow="hidden",r.style[n]=`${r[t]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[n]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(r){e&&r._parent&&r._parent.classList.remove(e),i(r)}function i(r){const l=r._initialStyle[n];r.style.overflow=r._initialStyle.overflow,l!=null&&(r.style[n]=l),delete r._initialStyle}}E("fab-transition","center center","out-in");E("dialog-bottom-transition");E("dialog-top-transition");E("fade-transition");const Yn=E("scale-transition");E("scroll-x-transition");E("scroll-x-reverse-transition");E("scroll-y-transition");E("scroll-y-reverse-transition");E("slide-x-transition");E("slide-x-reverse-transition");const Jn=E("slide-y-transition");E("slide-y-reverse-transition");const Qn=Ue("expand-transition",qe()),Kn=Ue("expand-x-transition",qe("",!0));const Xe=k({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ye(e){return{dimensionStyles:d(()=>({height:_(e.height),maxHeight:_(e.maxHeight),maxWidth:_(e.maxWidth),minHeight:_(e.minHeight),minWidth:_(e.minWidth),width:_(e.width)}))}}function Zt(e){return{aspectStyles:d(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const en=L()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Xe()},setup(e,s){let{slots:n}=s;const{aspectStyles:t}=Zt(e),{dimensionStyles:a}=Ye(e);return A(()=>{var i;return u("div",{class:"v-responsive",style:a.value},[u("div",{class:"v-responsive__sizer",style:t.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&u("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function tn(e,s){if(!de)return;const n=s.modifiers||{},t=s.value,{handler:a,options:i}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var y;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const f=(y=e._observe)==null?void 0:y[s.instance.$.uid];if(!f)return;const m=l.some(c=>c.isIntersecting);a&&(!n.quiet||f.init)&&(!n.once||m||f.init)&&a(m,l,o),m&&n.once?Je(e,s):f.init=!0},i);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Je(e,s){var t;const n=(t=e._observe)==null?void 0:t[s.instance.$.uid];!n||(n.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const nn={mounted:tn,unmounted:Je},sn=nn,an=k({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),K=(e,s)=>{let{slots:n}=s;const{transition:t,...a}=e,{component:i=se,...r}=typeof t=="object"?t:{};return q(i,Ae(typeof t=="string"?{name:t}:r,a),n)},Zn=L()({name:"VImg",directives:{intersect:sn},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...an()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:n,slots:t}=s;const a=V(""),i=V(),r=V(e.eager?"loading":"idle"),l=V(),o=V(),f=d(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=d(()=>f.value.aspect||l.value/o.value||0);G(()=>e.src,()=>{y(r.value!=="idle")}),G(m,(g,x)=>{!g&&x&&i.value&&C(i.value)}),Nt(()=>y());function y(g){if(!(e.eager&&g)&&!(de&&!g&&!e.eager)){if(r.value="loading",f.value.lazySrc){const x=new Image;x.src=f.value.lazySrc,C(x,null)}!f.value.src||fe(()=>{var x,B;if(n("loadstart",((x=i.value)==null?void 0:x.currentSrc)||f.value.src),(B=i.value)!=null&&B.complete){if(i.value.naturalWidth||v(),r.value==="error")return;m.value||C(i.value,null),c()}else m.value||C(i.value),p()})}}function c(){var g;p(),r.value="loaded",n("load",((g=i.value)==null?void 0:g.currentSrc)||f.value.src)}function v(){var g;r.value="error",n("error",((g=i.value)==null?void 0:g.currentSrc)||f.value.src)}function p(){const g=i.value;g&&(a.value=g.currentSrc||g.src)}let b=-1;function C(g){let x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const B=()=>{clearTimeout(b);const{naturalHeight:N,naturalWidth:j}=g;N||j?(l.value=j,o.value=N):!g.complete&&r.value==="loading"&&x!=null?b=window.setTimeout(B,x):(g.currentSrc.endsWith(".svg")||g.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,o.value=1)};B()}const S=d(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),h=()=>{var B;if(!f.value.src||r.value==="idle")return null;const g=u("img",{class:["v-img__img",S.value],src:f.value.src,srcset:f.value.srcset,alt:"",sizes:e.sizes,ref:i,onLoad:c,onError:v},null),x=(B=t.sources)==null?void 0:B.call(t);return u(K,{transition:e.transition,appear:!0},{default:()=>[le(x?u("picture",{class:"v-img__picture"},[x,g]):g,[[Pt,r.value==="loaded"]])]})},w=()=>u(K,{transition:e.transition},{default:()=>[f.value.lazySrc&&r.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",S.value],src:f.value.lazySrc,alt:""},null)]}),I=()=>t.placeholder?u(K,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&u("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,T=()=>t.error?u(K,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&u("div",{class:"v-img__error"},[t.error()])]}):null,R=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,H=V(!1);{const g=G(m,x=>{x&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{H.value=!0})}),g())})}return A(()=>le(u(en,{class:["v-img",{"v-img--booting":!H.value}],style:{width:_(e.width==="auto"?l.value:e.width)},aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>u(Ge,null,[u(h,null,null),u(w,null,null),u(R,null,null),u(I,null,null),u(T,null,null)]),default:t.default}),[[je("intersect"),{handler:y,options:e.options},null,{once:!0}]])),{currentSrc:a,image:i,state:r,naturalWidth:l,naturalHeight:o}}}),Qe=k({border:[Boolean,Number,String]},"border");function Ke(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{borderClasses:d(()=>{const t=X(e)?e.value:e.border,a=[];if(t===!0||t==="")a.push(`${s}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))a.push(`border-${i}`);return a})}}const Ze=k({elevation:{type:[Number,String],validator(e){const s=parseInt(e);return!isNaN(s)&&s>=0&&s<=24}}},"elevation");function et(e){return{elevationClasses:d(()=>{const n=X(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const ge=k({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function he(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{roundedClasses:d(()=>{const t=X(e)?e.value:e.rounded,a=[];if(t===!0||t==="")a.push(`${s}--rounded`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))a.push(`rounded-${i}`);return a})}}function ye(e){return Me(()=>{const s=[],n={};return e.value.background&&(ke(e.value.background)?n.backgroundColor=e.value.background:s.push(`bg-${e.value.background}`)),e.value.text&&(ke(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):s.push(`text-${e.value.text}`)),{colorClasses:s,colorStyles:n}})}function ee(e,s){const n=d(()=>({text:X(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:a}=ye(n);return{textColorClasses:t,textColorStyles:a}}function Be(e,s){const n=d(()=>({background:X(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:a}=ye(n);return{backgroundColorClasses:t,backgroundColorStyles:a}}const rn=[null,"default","comfortable","compact"],tt=k({density:{type:String,default:"default",validator:e=>rn.includes(e)}},"density");function nt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{densityClasses:d(()=>`${s}--density-${e.density}`)}}const ln=["elevated","flat","tonal","outlined","text","plain"];function on(e,s){return u(Ge,null,[e&&u("span",{key:"overlay",class:`${s}__overlay`},null),u("span",{key:"underlay",class:`${s}__underlay`},null)])}const st=k({color:String,variant:{type:String,default:"elevated",validator:e=>ln.includes(e)}},"variant");function un(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();const n=d(()=>{const{variant:i}=$e(e);return`${s}--variant-${i}`}),{colorClasses:t,colorStyles:a}=ye(d(()=>{const{variant:i,color:r}=$e(e);return{[["elevated","flat"].includes(i)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:a,variantClasses:n}}const at=k({divided:Boolean,...Qe(),...tt(),...Ze(),...ge(),...W(),...Y(),...st()},"v-btn-group"),it=L()({name:"VBtnGroup",props:at(),setup(e,s){let{slots:n}=s;const{themeClasses:t}=J(e),{densityClasses:a}=nt(e),{borderClasses:i}=Ke(e),{elevationClasses:r}=et(e),{roundedClasses:l}=he(e);Oe({VBtn:{height:"auto",color:P(e,"color"),density:P(e,"density"),flat:!0,variant:P(e,"variant")}}),A(()=>u(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,i.value,a.value,r.value,l.value]},n))}});function cn(e){return Rt(e,Object.keys(it.props))}const dn=k({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),fn=k({value:null,disabled:Boolean,selectedClass:String},"group-item");function vn(e,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=ve("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=zt();We(Symbol.for(`${s.description}:id`),a);const i=Ot(s,null);if(!i){if(!n)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${s.description}`)}const r=P(e,"value"),l=d(()=>i.disabled.value||e.disabled);i.register({id:a,value:r,disabled:l},t),ne(()=>{i.unregister(a)});const o=d(()=>i.isSelected(a)),f=d(()=>o.value&&[i.selectedClass.value,e.selectedClass]);return G(o,m=>{t.emit("group:selected",{value:m})}),{id:a,isSelected:o,toggle:()=>i.select(a,!o.value),select:m=>i.select(a,m),selectedClass:f,value:r,disabled:l,group:i}}function mn(e,s){let n=!1;const t=At([]),a=He(e,"modelValue",[],c=>c==null?[]:rt(t,Mt(c)),c=>{const v=hn(t,c);return e.multiple?v:v[0]}),i=ve("useGroup");function r(c,v){const p=c,b=Symbol.for(`${s.description}:id`),S=Wt(b,i==null?void 0:i.vnode).indexOf(v);S>-1?t.splice(S,0,p):t.push(p)}function l(c){if(n)return;o();const v=t.findIndex(p=>p.id===c);t.splice(v,1)}function o(){const c=t.find(v=>!v.disabled);c&&e.mandatory==="force"&&!a.value.length&&(a.value=[c.id])}jt(()=>{o()}),ne(()=>{n=!0});function f(c,v){const p=t.find(b=>b.id===c);if(!(v&&(p==null?void 0:p.disabled)))if(e.multiple){const b=a.value.slice(),C=b.findIndex(h=>h===c),S=~C;if(v=v!=null?v:!S,S&&e.mandatory&&b.length<=1||!S&&e.max!=null&&b.length+1>e.max)return;C<0&&v?b.push(c):C>=0&&!v&&b.splice(C,1),a.value=b}else{const b=a.value.includes(c);if(e.mandatory&&b)return;a.value=(v!=null?v:!b)?[c]:[]}}function m(c){if(e.multiple&&Ht('This method is not supported when using "multiple" prop'),a.value.length){const v=a.value[0],p=t.findIndex(S=>S.id===v);let b=(p+c)%t.length,C=t[b];for(;C.disabled&&b!==p;)b=(b+c)%t.length,C=t[b];if(C.disabled)return;a.value=[t[b].id]}else{const v=t.find(p=>!p.disabled);v&&(a.value=[v.id])}}const y={register:r,unregister:l,selected:a,select:f,disabled:P(e,"disabled"),prev:()=>m(t.length-1),next:()=>m(1),isSelected:c=>a.value.includes(c),selectedClass:d(()=>e.selectedClass),items:d(()=>t),getItemIndex:c=>gn(t,c)};return We(s,y),y}function gn(e,s){const n=rt(e,[s]);return n.length?e.findIndex(t=>t.id===n[0]):-1}function rt(e,s){const n=[];for(let t=0;t<e.length;t++){const a=e[t];a.value!=null?s.find(i=>Gt(i,a.value))!=null&&n.push(a.id):s.includes(t)&&n.push(a.id)}return n}function hn(e,s){const n=[];for(let t=0;t<e.length;t++){const a=e[t];s.includes(a.id)&&n.push(a.value!=null?a.value:t)}return n}const lt=Symbol.for("vuetify:v-btn-toggle");L()({name:"VBtnToggle",props:{...at(),...dn()},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:n}=s;const{isSelected:t,next:a,prev:i,select:r,selected:l}=mn(e,lt);return A(()=>{const[o]=cn(e);return u(it,Ae({class:"v-btn-toggle"},o),{default:()=>{var f;return[(f=n.default)==null?void 0:f.call(n,{isSelected:t,next:a,prev:i,select:r,selected:l})]}})}),{next:a,prev:i,select:r}}});const yn=["x-small","small","default","large","x-large"],be=k({size:{type:[String,Number],default:"default"}},"size");function pe(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return Me(()=>{let n,t;return Z(yn,e.size)?n=`${s}--size-${e.size}`:e.size&&(t={width:_(e.size),height:_(e.size)}),{sizeClasses:n,sizeStyles:t}})}const bn=k({color:String,start:Boolean,end:Boolean,icon:oe,...be(),...W({tag:"i"}),...Y()},"v-icon"),ie=L()({name:"VIcon",props:bn(),setup(e,s){let{attrs:n,slots:t}=s,a;t.default&&(a=d(()=>{var y,c;const m=(y=t.default)==null?void 0:y.call(t);if(!!m)return(c=m.filter(v=>v.type===Dt&&v.children&&typeof v.children=="string")[0])==null?void 0:c.children}));const{themeClasses:i}=J(e),{iconData:r}=Ft(a||e),{sizeClasses:l}=pe(e),{textColorClasses:o,textColorStyles:f}=ee(P(e,"color"));return A(()=>u(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",i.value,l.value,o.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[l.value?void 0:{fontSize:_(e.size),height:_(e.size),width:_(e.size)},f.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>{var m;return[(m=t.default)==null?void 0:m.call(t)]}})),{}}});function ot(e){const s=V(),n=V(!1);if(de){const t=new IntersectionObserver(a=>{e==null||e(a,t),n.value=!!a.find(i=>i.isIntersecting)});ne(()=>{t.disconnect()}),G(s,(a,i)=>{i&&(t.unobserve(i),n.value=!1),a&&t.observe(a)},{flush:"post"})}return{intersectionRef:s,isIntersecting:n}}const pn=L()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...be(),...W({tag:"div"}),...Y()},setup(e,s){let{slots:n}=s;const t=20,a=2*Math.PI*t,i=V(),{themeClasses:r}=J(e),{sizeClasses:l,sizeStyles:o}=pe(e),{textColorClasses:f,textColorStyles:m}=ee(P(e,"color")),{textColorClasses:y,textColorStyles:c}=ee(P(e,"bgColor")),{intersectionRef:v,isIntersecting:p}=ot(),{resizeRef:b,contentRect:C}=Kt(),S=d(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),h=d(()=>Number(e.width)),w=d(()=>o.value?Number(e.size):C.value?C.value.width:Math.max(h.value,32)),I=d(()=>t/(1-h.value/w.value)*2),T=d(()=>h.value/w.value*I.value),R=d(()=>_((100-S.value)/100*a));return Ut(()=>{v.value=i.value,b.value=i.value}),A(()=>u(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,l.value,f.value],style:[o.value,m.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[u("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${I.value} ${I.value}`},[u("circle",{class:["v-progress-circular__underlay",y.value],style:c.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":T.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),u("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":T.value,"stroke-dasharray":a,"stroke-dashoffset":R.value},null)]),n.default&&u("div",{class:"v-progress-circular__content"},[n.default({value:S.value})])]})),{}}});const ue=Symbol("rippleStop"),Sn=80;function Te(e,s){e.style.transform=s,e.style.webkitTransform=s}function ce(e){return e.constructor.name==="TouchEvent"}function ut(e){return e.constructor.name==="KeyboardEvent"}const Cn=function(e,s){var y;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,a=0;if(!ut(e)){const c=s.getBoundingClientRect(),v=ce(e)?e.touches[e.touches.length-1]:e;t=v.clientX-c.left,a=v.clientY-c.top}let i=0,r=.3;(y=s._ripple)!=null&&y.circle?(r=.15,i=s.clientWidth/2,i=n.center?i:i+Math.sqrt((t-i)**2+(a-i)**2)/4):i=Math.sqrt(s.clientWidth**2+s.clientHeight**2)/2;const l=`${(s.clientWidth-i*2)/2}px`,o=`${(s.clientHeight-i*2)/2}px`,f=n.center?l:`${t-i}px`,m=n.center?o:`${a-i}px`;return{radius:i,scale:r,x:f,y:m,centerX:l,centerY:o}},te={show(e,s){var v;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=s==null?void 0:s._ripple)!=null&&v.enabled))return;const t=document.createElement("span"),a=document.createElement("span");t.appendChild(a),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:i,scale:r,x:l,y:o,centerX:f,centerY:m}=Cn(e,s,n),y=`${i*2}px`;a.className="v-ripple__animation",a.style.width=y,a.style.height=y,s.appendChild(t);const c=window.getComputedStyle(s);c&&c.position==="static"&&(s.style.position="relative",s.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),Te(a,`translate(${l}, ${o}) scale3d(${r},${r},${r})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),Te(a,`translate(${f}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const s=e.getElementsByClassName("v-ripple__animation");if(s.length===0)return;const n=s[s.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),a=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=n.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(n.parentNode)},300)},a)}};function ct(e){return typeof e>"u"||!!e}function F(e){const s={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ue])){if(e[ue]=!0,ce(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(s.center=n._ripple.centered||ut(e),n._ripple.class&&(s.class=n._ripple.class),ce(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{te.show(e,n,s)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Sn)}else te.show(e,n,s)}}function Ve(e){e[ue]=!0}function $(e){const s=e.currentTarget;if(!!(s!=null&&s._ripple)){if(window.clearTimeout(s._ripple.showTimer),e.type==="touchend"&&s._ripple.showTimerCommit){s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null,s._ripple.showTimer=window.setTimeout(()=>{$(e)});return}window.setTimeout(()=>{s._ripple&&(s._ripple.touched=!1)}),te.hide(s)}}function dt(e){const s=e.currentTarget;!(s!=null&&s._ripple)||(s._ripple.showTimerCommit&&(s._ripple.showTimerCommit=null),window.clearTimeout(s._ripple.showTimer))}let U=!1;function ft(e){!U&&(e.keyCode===Le.enter||e.keyCode===Le.space)&&(U=!0,F(e))}function vt(e){U=!1,$(e)}function mt(e){U&&(U=!1,$(e))}function gt(e,s,n){var r;const{value:t,modifiers:a}=s,i=ct(t);if(i||te.hide(e),e._ripple=(r=e._ripple)!=null?r:{},e._ripple.enabled=i,e._ripple.centered=a.center,e._ripple.circle=a.circle,qt(t)&&t.class&&(e._ripple.class=t.class),i&&!n){if(a.stop){e.addEventListener("touchstart",Ve,{passive:!0}),e.addEventListener("mousedown",Ve);return}e.addEventListener("touchstart",F,{passive:!0}),e.addEventListener("touchend",$,{passive:!0}),e.addEventListener("touchmove",dt,{passive:!0}),e.addEventListener("touchcancel",$),e.addEventListener("mousedown",F),e.addEventListener("mouseup",$),e.addEventListener("mouseleave",$),e.addEventListener("keydown",ft),e.addEventListener("keyup",vt),e.addEventListener("blur",mt),e.addEventListener("dragstart",$,{passive:!0})}else!i&&n&&ht(e)}function ht(e){e.removeEventListener("mousedown",F),e.removeEventListener("touchstart",F),e.removeEventListener("touchend",$),e.removeEventListener("touchmove",dt),e.removeEventListener("touchcancel",$),e.removeEventListener("mouseup",$),e.removeEventListener("mouseleave",$),e.removeEventListener("keydown",ft),e.removeEventListener("keyup",vt),e.removeEventListener("dragstart",$),e.removeEventListener("blur",mt)}function _n(e,s){gt(e,s,!1)}function wn(e){delete e._ripple,ht(e)}function xn(e,s){if(s.value===s.oldValue)return;const n=ct(s.oldValue);gt(e,s,n)}const kn={mounted:_n,unmounted:wn,updated:xn};const Ne={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},yt=k({location:String},"location");function bt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=De();return{locationStyles:d(()=>{if(!e.location)return{};const{side:i,align:r}=Qt(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function l(f){return n?n(f):0}const o={};return i!=="center"&&(s?o[Ne[i]]=`calc(100% - ${l(i)}px)`:o[i]=0),r!=="center"?s?o[Ne[r]]=`calc(100% - ${l(r)}px)`:o[r]=0:(i==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),o})}}const $n=L()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...yt({location:"top"}),...ge(),...W(),...Y()},emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:n}=s;const t=He(e,"modelValue"),{isRtl:a}=De(),{themeClasses:i}=J(e),{locationStyles:r}=bt(e),{textColorClasses:l,textColorStyles:o}=ee(e,"color"),{backgroundColorClasses:f,backgroundColorStyles:m}=Be(d(()=>e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:c}=Be(e,"color"),{roundedClasses:v}=he(e),{intersectionRef:p,isIntersecting:b}=ot(),C=d(()=>parseInt(e.max,10)),S=d(()=>parseInt(e.height,10)),h=d(()=>parseFloat(e.bufferValue)/C.value*100),w=d(()=>parseFloat(t.value)/C.value*100),I=d(()=>a.value!==e.reverse),T=d(()=>e.indeterminate?"fade-transition":"slide-x-transition"),R=d(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function H(g){if(!p.value)return;const{left:x,right:B,width:N}=p.value.getBoundingClientRect(),j=I.value?N-g.clientX+(B-N):g.clientX-x;t.value=Math.round(j/N*C.value)}return A(()=>u(e.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&b.value,"v-progress-linear--reverse":I.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},v.value,i.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?_(S.value):0,"--v-progress-linear-height":_(S.value),...r.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:w.value,onClick:e.clickable&&H},{default:()=>[e.stream&&u("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...o.value,[I.value?"left":"right"]:_(-S.value),borderTop:`${_(S.value/2)} dotted`,opacity:R.value,top:`calc(50% - ${_(S.value/4)})`,width:_(100-h.value,"%"),"--v-progress-linear-stream-to":_(S.value*(I.value?1:-1))}},null),u("div",{class:["v-progress-linear__background",f.value],style:[m.value,{opacity:R.value,width:_(e.stream?h.value:100,"%")}]},null),u(se,{name:T.value},{default:()=>[e.indeterminate?u("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(g=>u("div",{key:g,class:["v-progress-linear__indeterminate",g,y.value],style:c.value},null))]):u("div",{class:["v-progress-linear__determinate",y.value],style:[c.value,{width:_(w.value,"%")}]},null)]}),n.default&&u("div",{class:"v-progress-linear__content"},[n.default({value:w.value,buffer:h.value})])]})),{}}}),Ln=k({loading:[Boolean,String]},"loader");function En(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{loaderClasses:d(()=>({[`${s}--loading`]:e.loading}))}}function es(e,s){var t;let{slots:n}=s;return u("div",{class:`${e.name}__loader`},[((t=n.default)==null?void 0:t.call(n,{color:e.color,isActive:e.active}))||u($n,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const In=["static","relative","fixed","absolute","sticky"],Bn=k({position:{type:String,validator:e=>In.includes(e)}},"position");function Tn(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M();return{positionClasses:d(()=>e.position?`${s}--${e.position}`:void 0)}}function ts(){var e,s;return(s=(e=ve("useRouter"))==null?void 0:e.proxy)==null?void 0:s.$router}function Vn(e,s){const n=Xt("RouterLink"),t=d(()=>!!(e.href||e.to)),a=d(()=>(t==null?void 0:t.value)||Ee(s,"click")||Ee(e,"click"));if(typeof n=="string")return{isLink:t,isClickable:a,href:P(e,"href")};const i=e.to?n.useLink(e):void 0;return{isLink:t,isClickable:a,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&d(()=>{var r,l;return e.exact?(r=i.isExactActive)==null?void 0:r.value:(l=i.isActive)==null?void 0:l.value}),href:d(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const Nn=k({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let re=!1;function ns(e,s){let n=!1,t,a;ze&&(fe(()=>{window.addEventListener("popstate",i),t=e==null?void 0:e.beforeEach((r,l,o)=>{re?n?s(o):o():setTimeout(()=>n?s(o):o()),re=!0}),a=e==null?void 0:e.afterEach(()=>{re=!1})}),Yt(()=>{window.removeEventListener("popstate",i),t==null||t(),a==null||a()}));function i(r){var l;(l=r.state)!=null&&l.replaced||(n=!0,setTimeout(()=>n=!1))}}function Pn(e,s){G(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&s&&fe(()=>{s(!0)})},{immediate:!0})}const ss=L()({name:"VBtn",directives:{Ripple:kn},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:lt},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:oe,appendIcon:oe,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...Qe(),...ge(),...tt(),...Xe(),...Ze(),...fn(),...Ln(),...yt(),...Bn(),...Nn(),...be(),...W({tag:"button"}),...Y(),...st({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,s){let{attrs:n,slots:t}=s;const{themeClasses:a}=J(e),{borderClasses:i}=Ke(e),{colorClasses:r,colorStyles:l,variantClasses:o}=un(e),{densityClasses:f}=nt(e),{dimensionStyles:m}=Ye(e),{elevationClasses:y}=et(e),{loaderClasses:c}=En(e),{locationStyles:v}=bt(e),{positionClasses:p}=Tn(e),{roundedClasses:b}=he(e),{sizeClasses:C,sizeStyles:S}=pe(e),h=vn(e,e.symbol,!1),w=Vn(e,n),I=d(()=>{var g;return e.active!==void 0?e.active:w.isLink.value?(g=w.isActive)==null?void 0:g.value:h==null?void 0:h.isSelected.value}),T=d(()=>(h==null?void 0:h.disabled.value)||e.disabled),R=d(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),H=d(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});return Pn(w,h==null?void 0:h.select),A(()=>{var we,xe;const g=w.isLink.value?"a":e.tag,x=!!(e.prependIcon||t.prepend),B=!!(e.appendIcon||t.append),N=!!(e.icon&&e.icon!==!0),j=(h==null?void 0:h.isSelected.value)&&(!w.isLink.value||((we=w.isActive)==null?void 0:we.value))||!h||((xe=w.isActive)==null?void 0:xe.value);return le(u(g,{type:g==="a"?void 0:"button",class:["v-btn",h==null?void 0:h.selectedClass.value,{"v-btn--active":I.value,"v-btn--block":e.block,"v-btn--disabled":T.value,"v-btn--elevated":R.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},a.value,i.value,j?r.value:void 0,f.value,y.value,c.value,p.value,b.value,C.value,o.value],style:[j?l.value:void 0,m.value,v.value,S.value],disabled:T.value||void 0,href:w.href.value,onClick:Q=>{var D;T.value||((D=w.navigate)==null||D.call(w,Q),h==null||h.toggle())},value:H.value},{default:()=>{var Q,D;return[on(!0,"v-btn"),!e.icon&&x&&u(ae,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>{var z,O;return[u("span",{class:"v-btn__prepend"},[(O=(z=t.prepend)==null?void 0:z.call(t))!=null?O:u(ie,null,null)])]}}),u("span",{class:"v-btn__content","data-no-activator":""},[u(ae,{key:"content",defaults:{VIcon:{icon:N?e.icon:void 0}}},{default:()=>{var z,O;return[(O=(z=t.default)==null?void 0:z.call(t))!=null?O:N&&u(ie,{key:"icon"},null)]}})]),!e.icon&&B&&u(ae,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>{var z,O;return[u("span",{class:"v-btn__append"},[(O=(z=t.append)==null?void 0:z.call(t))!=null?O:u(ie,null,null)])]}}),!!e.loading&&u("span",{key:"loader",class:"v-btn__loader"},[(D=(Q=t.loader)==null?void 0:Q.call(t))!=null?D:u(pn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[je("ripple"),!T.value&&e.ripple,null]])}),{}}}),Se=["sm","md","lg","xl","xxl"],pt=(()=>Se.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),St=(()=>Se.reduce((e,s)=>(e["offset"+me(s)]={type:[String,Number],default:null},e),{}))(),Ct=(()=>Se.reduce((e,s)=>(e["order"+me(s)]={type:[String,Number],default:null},e),{}))(),Pe={col:Object.keys(pt),offset:Object.keys(St),order:Object.keys(Ct)};function Rn(e,s,n){let t=e;if(!(n==null||n===!1)){if(s){const a=s.replace(e,"");t+=`-${a}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const zn=["auto","start","end","center","baseline","stretch"],as=L()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...pt,offset:{type:[String,Number],default:null},...St,order:{type:[String,Number],default:null},...Ct,alignSelf:{type:String,default:null,validator:e=>zn.includes(e)},...W()},setup(e,s){let{slots:n}=s;const t=d(()=>{const a=[];let i;for(i in Pe)Pe[i].forEach(l=>{const o=e[l],f=Rn(i,l,o);f&&a.push(f)});const r=a.some(l=>l.startsWith("v-col-"));return a.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return q(e.tag,{class:t.value},(a=n.default)==null?void 0:a.call(n))}}}),On=["sm","md","lg","xl","xxl"],Ce=["start","end","center"],_t=["space-between","space-around","space-evenly"];function _e(e,s){return On.reduce((n,t)=>(n[e+me(t)]=s(),n),{})}const An=[...Ce,"baseline","stretch"],wt=e=>An.includes(e),xt=_e("align",()=>({type:String,default:null,validator:wt})),jn=[...Ce,..._t],kt=e=>jn.includes(e),$t=_e("justify",()=>({type:String,default:null,validator:kt})),Gn=[...Ce,..._t,"stretch"],Lt=e=>Gn.includes(e),Et=_e("alignContent",()=>({type:String,default:null,validator:Lt})),Re={align:Object.keys(xt),justify:Object.keys($t),alignContent:Object.keys(Et)},Mn={align:"align",justify:"justify",alignContent:"align-content"};function Wn(e,s,n){let t=Mn[e];if(n!=null){if(s){const a=s.replace(e,"");t+=`-${a}`}return t+=`-${n}`,t.toLowerCase()}}const is=L()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:wt},...xt,justify:{type:String,default:null,validator:kt},...$t,alignContent:{type:String,default:null,validator:Lt},...Et,...W()},setup(e,s){let{slots:n}=s;const t=d(()=>{const a=[];let i;for(i in Re)Re[i].forEach(r=>{const l=e[r],o=Wn(i,r,l);o&&a.push(o)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return q(e.tag,{class:["v-row",t.value]},(a=n.default)==null?void 0:a.call(n))}}});export{pe as A,on as B,dn as C,mn as D,fn as E,Nn as F,vn as G,Vn as H,sn as I,Xe as J,Ye as K,es as L,K as M,Qt as N,Fn as O,Un as P,qn as Q,kn as R,Xn as S,ts as T,ns as U,ae as V,Yn as W,Ze as a,ge as b,Be as c,Ke as d,et as e,he as f,Zn as g,Qn as h,ie as i,en as j,is as k,as as l,Qe as m,ss as n,an as o,Jn as p,ee as q,tt as r,nt as s,Ln as t,Kt as u,En as v,Kn as w,be as x,st as y,un as z};
