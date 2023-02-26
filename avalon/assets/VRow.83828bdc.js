import{F as Z,r as V,I as Re,j as ne,G as j,v as Lt,l as B,H as Et,s as Oe,T as It,J as ae,K as q,L as Bt,S as de,p as x,x as Ae,c as f,M as Tt,N as fe,O as le,P as je,m as u,Q as Ge,b as k,R as Vt,U as G,V as X,W as Me,X as xe,Y as $e,n as Y,q as J,t as P,u as Nt,g as ve,e as Pt,d as De,i as zt,a as Rt,w as Fe,o as Ot,Z as At,$ as jt,k as Gt,a0 as Mt,a1 as oe,a2 as Dt,a3 as Ft,a4 as Wt,a5 as Ht,a6 as Le,E as We,a7 as Ut,a8 as Ee,a9 as qt,aa as me}from"./index.39b0d43f.js";import{V as Xt,m as Yt,u as Jt}from"./VResponsive.e916c51b.js";import{u as M,m as D}from"./VGrid.155d5249.js";const He=["top","bottom"],Qt=["start","end","left","right"];function Kt(e,a){let[n,t]=e.split(" ");return t||(t=Z(He,n)?"start":Z(Qt,n)?"top":"center"),{side:Ie(n,a),align:Ie(t,a)}}function Ie(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}function Hn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Un(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function qn(e){return{side:e.align,align:e.side}}function Xn(e){return Z(He,e.side)?"y":"x"}function Zt(e){const a=V(),n=V();if(Re){const t=new ResizeObserver(s=>{e==null||e(s,t),s.length&&(n.value=s[0].contentRect)});ne(()=>{t.disconnect()}),j(a,(s,i)=>{i&&(t.unobserve(i),n.value=void 0),s&&t.observe(s)},{flush:"post"})}return{resizeRef:a,contentRect:Lt(n)}}const se=B(!1)({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,a){let{slots:n}=a;const{defaults:t,reset:s,root:i,scoped:r}=Et(e);return Oe(t,{reset:s,root:i,scoped:r}),()=>{var l;return(l=n.default)==null?void 0:l.call(n)}}});function L(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return B()({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:a}},setup(t,s){let{slots:i}=s;return()=>{const r=t.group?It:ae;return q(r,{name:e,mode:t.mode,onBeforeEnter(l){l.style.transformOrigin=t.origin},onLeave(l){if(t.leaveAbsolute){const{offsetTop:o,offsetLeft:d,offsetWidth:m,offsetHeight:y}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${o}px`,l.style.left=`${d}px`,l.style.width=`${m}px`,l.style.height=`${y}px`}t.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(t.leaveAbsolute&&(l==null?void 0:l._transitionInitialStyles)){const{position:o,top:d,left:m,width:y,height:c}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=o||"",l.style.top=d||"",l.style.left=m||"",l.style.width=y||"",l.style.height=c||""}}},i.default)}}})}function Ue(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return B()({name:e,props:{mode:{type:String,default:n}},setup(t,s){let{slots:i}=s;return()=>q(ae,{name:e,...a},i.default)}})}function qe(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Bt(`offset-${n}`);return{onBeforeEnter(r){r._parent=r.parentNode,r._initialStyle={transition:r.style.transition,overflow:r.style.overflow,[n]:r.style[n]}},onEnter(r){const l=r._initialStyle;r.style.setProperty("transition","none","important"),r.style.overflow="hidden";const o=`${r[t]}px`;r.style[n]="0",r.offsetHeight,r.style.transition=l.transition,e&&r._parent&&r._parent.classList.add(e),requestAnimationFrame(()=>{r.style[n]=o})},onAfterEnter:i,onEnterCancelled:i,onLeave(r){r._initialStyle={transition:"",overflow:r.style.overflow,[n]:r.style[n]},r.style.overflow="hidden",r.style[n]=`${r[t]}px`,r.offsetHeight,requestAnimationFrame(()=>r.style[n]="0")},onAfterLeave:s,onLeaveCancelled:s};function s(r){e&&r._parent&&r._parent.classList.remove(e),i(r)}function i(r){const l=r._initialStyle[n];r.style.overflow=r._initialStyle.overflow,l!=null&&(r.style[n]=l),delete r._initialStyle}}L("fab-transition","center center","out-in");L("dialog-bottom-transition");L("dialog-top-transition");L("fade-transition");const Yn=L("scale-transition");L("scroll-x-transition");L("scroll-x-reverse-transition");L("scroll-y-transition");L("scroll-y-reverse-transition");L("slide-x-transition");L("slide-x-reverse-transition");const Jn=L("slide-y-transition");L("slide-y-reverse-transition");const Qn=Ue("expand-transition",qe()),Kn=Ue("expand-x-transition",qe("",!0));function en(e,a){if(!de)return;const n=a.modifiers||{},t=a.value,{handler:s,options:i}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var y;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const d=(y=e._observe)==null?void 0:y[a.instance.$.uid];if(!d)return;const m=l.some(c=>c.isIntersecting);s&&(!n.quiet||d.init)&&(!n.once||m||d.init)&&s(m,l,o),m&&n.once?Xe(e,a):d.init=!0},i);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Xe(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];!n||(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const tn={mounted:en,unmounted:Xe},nn=tn,an=x({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),K=(e,a)=>{let{slots:n}=a;const{transition:t,...s}=e,{component:i=ae,...r}=typeof t=="object"?t:{};return q(i,Ae(typeof t=="string"?{name:t}:r,s),n)},Zn=B()({name:"VImg",directives:{intersect:nn},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...an()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const s=V(""),i=V(),r=V(e.eager?"loading":"idle"),l=V(),o=V(),d=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=f(()=>d.value.aspect||l.value/o.value||0);j(()=>e.src,()=>{y(r.value!=="idle")}),j(m,(g,w)=>{!g&&w&&i.value&&C(i.value)}),Tt(()=>y());function y(g){if(!(e.eager&&g)&&!(de&&!g&&!e.eager)){if(r.value="loading",d.value.lazySrc){const w=new Image;w.src=d.value.lazySrc,C(w,null)}!d.value.src||fe(()=>{var w,I;if(n("loadstart",((w=i.value)==null?void 0:w.currentSrc)||d.value.src),(I=i.value)!=null&&I.complete){if(i.value.naturalWidth||v(),r.value==="error")return;m.value||C(i.value,null),c()}else m.value||C(i.value),p()})}}function c(){var g;p(),r.value="loaded",n("load",((g=i.value)==null?void 0:g.currentSrc)||d.value.src)}function v(){var g;r.value="error",n("error",((g=i.value)==null?void 0:g.currentSrc)||d.value.src)}function p(){const g=i.value;g&&(s.value=g.currentSrc||g.src)}let b=-1;function C(g){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const I=()=>{clearTimeout(b);const{naturalHeight:N,naturalWidth:A}=g;N||A?(l.value=A,o.value=N):!g.complete&&r.value==="loading"&&w!=null?b=window.setTimeout(I,w):(g.currentSrc.endsWith(".svg")||g.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,o.value=1)};I()}const S=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),h=()=>{var I;if(!d.value.src||r.value==="idle")return null;const g=u("img",{class:["v-img__img",S.value],src:d.value.src,srcset:d.value.srcset,alt:"",sizes:e.sizes,ref:i,onLoad:c,onError:v},null),w=(I=t.sources)==null?void 0:I.call(t);return u(K,{transition:e.transition,appear:!0},{default:()=>[le(w?u("picture",{class:"v-img__picture"},[w,g]):g,[[Vt,r.value==="loaded"]])]})},_=()=>u(K,{transition:e.transition},{default:()=>[d.value.lazySrc&&r.value!=="loaded"&&u("img",{class:["v-img__img","v-img__img--preload",S.value],src:d.value.lazySrc,alt:""},null)]}),E=()=>t.placeholder?u(K,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&u("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,T=()=>t.error?u(K,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&u("div",{class:"v-img__error"},[t.error()])]}):null,z=()=>e.gradient?u("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,F=V(!1);{const g=j(m,w=>{w&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{F.value=!0})}),g())})}return M(()=>le(u(Xt,{class:["v-img",{"v-img--booting":!F.value}],style:{width:k(e.width==="auto"?l.value:e.width)},aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>u(Ge,null,[u(h,null,null),u(_,null,null),u(z,null,null),u(E,null,null),u(T,null,null)]),default:t.default}),[[je("intersect"),{handler:y,options:e.options},null,{once:!0}]])),{currentSrc:s,image:i,state:r,naturalWidth:l,naturalHeight:o}}}),Ye=x({border:[Boolean,Number,String]},"border");function Je(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{borderClasses:f(()=>{const t=X(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`border-${i}`);return s})}}const Qe=x({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function Ke(e){return{elevationClasses:f(()=>{const n=X(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const ge=x({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function he(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{roundedClasses:f(()=>{const t=X(e)?e.value:e.rounded,s=[];if(t===!0||t==="")s.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))s.push(`rounded-${i}`);return s})}}function ye(e){return Me(()=>{const a=[],n={};return e.value.background&&(xe(e.value.background)?n.backgroundColor=e.value.background:a.push(`bg-${e.value.background}`)),e.value.text&&(xe(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function ee(e,a){const n=f(()=>({text:X(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=ye(n);return{textColorClasses:t,textColorStyles:s}}function Be(e,a){const n=f(()=>({background:X(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:s}=ye(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}const sn=[null,"default","comfortable","compact"],Ze=x({density:{type:String,default:"default",validator:e=>sn.includes(e)}},"density");function et(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{densityClasses:f(()=>`${a}--density-${e.density}`)}}const rn=["elevated","flat","tonal","outlined","text","plain"];function ln(e,a){return u(Ge,null,[e&&u("span",{key:"overlay",class:`${a}__overlay`},null),u("span",{key:"underlay",class:`${a}__underlay`},null)])}const tt=x({color:String,variant:{type:String,default:"elevated",validator:e=>rn.includes(e)}},"variant");function on(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();const n=f(()=>{const{variant:i}=$e(e);return`${a}--variant-${i}`}),{colorClasses:t,colorStyles:s}=ye(f(()=>{const{variant:i,color:r}=$e(e);return{[["elevated","flat"].includes(i)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:s,variantClasses:n}}const nt=x({divided:Boolean,...Ye(),...Ze(),...Qe(),...ge(),...D(),...Y(),...tt()},"v-btn-group"),at=B()({name:"VBtnGroup",props:nt(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=J(e),{densityClasses:s}=et(e),{borderClasses:i}=Je(e),{elevationClasses:r}=Ke(e),{roundedClasses:l}=he(e);Oe({VBtn:{height:"auto",color:P(e,"color"),density:P(e,"density"),flat:!0,variant:P(e,"variant")}}),M(()=>u(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,i.value,s.value,r.value,l.value]},n))}});function un(e){return Nt(e,Object.keys(at.props))}const cn=x({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),dn=x({value:null,disabled:Boolean,selectedClass:String},"group-item");function fn(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=ve("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=Pt();De(Symbol.for(`${a.description}:id`),s);const i=zt(a,null);if(!i){if(!n)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const r=P(e,"value"),l=f(()=>i.disabled.value||e.disabled);i.register({id:s,value:r,disabled:l},t),ne(()=>{i.unregister(s)});const o=f(()=>i.isSelected(s)),d=f(()=>o.value&&[i.selectedClass.value,e.selectedClass]);return j(o,m=>{t.emit("group:selected",{value:m})}),{id:s,isSelected:o,toggle:()=>i.select(s,!o.value),select:m=>i.select(s,m),selectedClass:d,value:r,disabled:l,group:i}}function vn(e,a){let n=!1;const t=Rt([]),s=Fe(e,"modelValue",[],c=>c==null?[]:st(t,jt(c)),c=>{const v=gn(t,c);return e.multiple?v:v[0]}),i=ve("useGroup");function r(c,v){const p=c,b=Symbol.for(`${a.description}:id`),S=Gt(b,i==null?void 0:i.vnode).indexOf(v);S>-1?t.splice(S,0,p):t.push(p)}function l(c){if(n)return;o();const v=t.findIndex(p=>p.id===c);t.splice(v,1)}function o(){const c=t.find(v=>!v.disabled);c&&e.mandatory==="force"&&!s.value.length&&(s.value=[c.id])}Ot(()=>{o()}),ne(()=>{n=!0});function d(c,v){const p=t.find(b=>b.id===c);if(!(v&&(p==null?void 0:p.disabled)))if(e.multiple){const b=s.value.slice(),C=b.findIndex(h=>h===c),S=~C;if(v=v!=null?v:!S,S&&e.mandatory&&b.length<=1||!S&&e.max!=null&&b.length+1>e.max)return;C<0&&v?b.push(c):C>=0&&!v&&b.splice(C,1),s.value=b}else{const b=s.value.includes(c);if(e.mandatory&&b)return;s.value=(v!=null?v:!b)?[c]:[]}}function m(c){if(e.multiple&&Mt('This method is not supported when using "multiple" prop'),s.value.length){const v=s.value[0],p=t.findIndex(S=>S.id===v);let b=(p+c)%t.length,C=t[b];for(;C.disabled&&b!==p;)b=(b+c)%t.length,C=t[b];if(C.disabled)return;s.value=[t[b].id]}else{const v=t.find(p=>!p.disabled);v&&(s.value=[v.id])}}const y={register:r,unregister:l,selected:s,select:d,disabled:P(e,"disabled"),prev:()=>m(t.length-1),next:()=>m(1),isSelected:c=>s.value.includes(c),selectedClass:f(()=>e.selectedClass),items:f(()=>t),getItemIndex:c=>mn(t,c)};return De(a,y),y}function mn(e,a){const n=st(e,[a]);return n.length?e.findIndex(t=>t.id===n[0]):-1}function st(e,a){const n=[];for(let t=0;t<e.length;t++){const s=e[t];s.value!=null?a.find(i=>At(i,s.value))!=null&&n.push(s.id):a.includes(t)&&n.push(s.id)}return n}function gn(e,a){const n=[];for(let t=0;t<e.length;t++){const s=e[t];a.includes(s.id)&&n.push(s.value!=null?s.value:t)}return n}const it=Symbol.for("vuetify:v-btn-toggle");B()({name:"VBtnToggle",props:{...nt(),...cn()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{isSelected:t,next:s,prev:i,select:r,selected:l}=vn(e,it);return M(()=>{const[o]=un(e);return u(at,Ae({class:"v-btn-toggle"},o),{default:()=>{var d;return[(d=n.default)==null?void 0:d.call(n,{isSelected:t,next:s,prev:i,select:r,selected:l})]}})}),{next:s,prev:i,select:r}}});const hn=["x-small","small","default","large","x-large"],be=x({size:{type:[String,Number],default:"default"}},"size");function pe(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return Me(()=>{let n,t;return Z(hn,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:k(e.size),height:k(e.size)}),{sizeClasses:n,sizeStyles:t}})}const yn=x({color:String,start:Boolean,end:Boolean,icon:oe,...be(),...D({tag:"i"}),...Y()},"v-icon"),ie=B()({name:"VIcon",props:yn(),setup(e,a){let{attrs:n,slots:t}=a,s;t.default&&(s=f(()=>{var y,c;const m=(y=t.default)==null?void 0:y.call(t);if(!!m)return(c=m.filter(v=>v.type===Dt&&v.children&&typeof v.children=="string")[0])==null?void 0:c.children}));const{themeClasses:i}=J(e),{iconData:r}=Ft(s||e),{sizeClasses:l}=pe(e),{textColorClasses:o,textColorStyles:d}=ee(P(e,"color"));return M(()=>u(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",i.value,l.value,o.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[l.value?void 0:{fontSize:k(e.size),height:k(e.size),width:k(e.size)},d.value],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>{var m;return[(m=t.default)==null?void 0:m.call(t)]}})),{}}});function rt(e){const a=V(),n=V(!1);if(de){const t=new IntersectionObserver(s=>{e==null||e(s,t),n.value=!!s.find(i=>i.isIntersecting)});ne(()=>{t.disconnect()}),j(a,(s,i)=>{i&&(t.unobserve(i),n.value=!1),s&&t.observe(s)},{flush:"post"})}return{intersectionRef:a,isIntersecting:n}}const bn=B()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...be(),...D({tag:"div"}),...Y()},setup(e,a){let{slots:n}=a;const t=20,s=2*Math.PI*t,i=V(),{themeClasses:r}=J(e),{sizeClasses:l,sizeStyles:o}=pe(e),{textColorClasses:d,textColorStyles:m}=ee(P(e,"color")),{textColorClasses:y,textColorStyles:c}=ee(P(e,"bgColor")),{intersectionRef:v,isIntersecting:p}=rt(),{resizeRef:b,contentRect:C}=Zt(),S=f(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),h=f(()=>Number(e.width)),_=f(()=>o.value?Number(e.size):C.value?C.value.width:Math.max(h.value,32)),E=f(()=>t/(1-h.value/_.value)*2),T=f(()=>h.value/_.value*E.value),z=f(()=>k((100-S.value)/100*s));return Wt(()=>{v.value=i.value,b.value=i.value}),M(()=>u(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":p.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,l.value,d.value],style:[o.value,m.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[u("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${E.value} ${E.value}`},[u("circle",{class:["v-progress-circular__underlay",y.value],style:c.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":T.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),u("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":T.value,"stroke-dasharray":s,"stroke-dashoffset":z.value},null)]),n.default&&u("div",{class:"v-progress-circular__content"},[n.default({value:S.value})])]})),{}}});const ue=Symbol("rippleStop"),pn=80;function Te(e,a){e.style.transform=a,e.style.webkitTransform=a}function ce(e){return e.constructor.name==="TouchEvent"}function lt(e){return e.constructor.name==="KeyboardEvent"}const Sn=function(e,a){var y;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,s=0;if(!lt(e)){const c=a.getBoundingClientRect(),v=ce(e)?e.touches[e.touches.length-1]:e;t=v.clientX-c.left,s=v.clientY-c.top}let i=0,r=.3;(y=a._ripple)!=null&&y.circle?(r=.15,i=a.clientWidth/2,i=n.center?i:i+Math.sqrt((t-i)**2+(s-i)**2)/4):i=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const l=`${(a.clientWidth-i*2)/2}px`,o=`${(a.clientHeight-i*2)/2}px`,d=n.center?l:`${t-i}px`,m=n.center?o:`${s-i}px`;return{radius:i,scale:r,x:d,y:m,centerX:l,centerY:o}},te={show(e,a){var v;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=a==null?void 0:a._ripple)!=null&&v.enabled))return;const t=document.createElement("span"),s=document.createElement("span");t.appendChild(s),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:i,scale:r,x:l,y:o,centerX:d,centerY:m}=Sn(e,a,n),y=`${i*2}px`;s.className="v-ripple__animation",s.style.width=y,s.style.height=y,a.appendChild(t);const c=window.getComputedStyle(a);c&&c.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),Te(s,`translate(${l}, ${o}) scale3d(${r},${r},${r})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),Te(s,`translate(${d}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const n=a[a.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),s=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=n.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function ot(e){return typeof e>"u"||!!e}function H(e){const a={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ue])){if(e[ue]=!0,ce(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(a.center=n._ripple.centered||lt(e),n._ripple.class&&(a.class=n._ripple.class),ce(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{te.show(e,n,a)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},pn)}else te.show(e,n,a)}}function Ve(e){e[ue]=!0}function $(e){const a=e.currentTarget;if(!!(a!=null&&a._ripple)){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{$(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),te.hide(a)}}function ut(e){const a=e.currentTarget;!(a!=null&&a._ripple)||(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let U=!1;function ct(e){!U&&(e.keyCode===Le.enter||e.keyCode===Le.space)&&(U=!0,H(e))}function dt(e){U=!1,$(e)}function ft(e){U&&(U=!1,$(e))}function vt(e,a,n){var r;const{value:t,modifiers:s}=a,i=ot(t);if(i||te.hide(e),e._ripple=(r=e._ripple)!=null?r:{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,Ht(t)&&t.class&&(e._ripple.class=t.class),i&&!n){if(s.stop){e.addEventListener("touchstart",Ve,{passive:!0}),e.addEventListener("mousedown",Ve);return}e.addEventListener("touchstart",H,{passive:!0}),e.addEventListener("touchend",$,{passive:!0}),e.addEventListener("touchmove",ut,{passive:!0}),e.addEventListener("touchcancel",$),e.addEventListener("mousedown",H),e.addEventListener("mouseup",$),e.addEventListener("mouseleave",$),e.addEventListener("keydown",ct),e.addEventListener("keyup",dt),e.addEventListener("blur",ft),e.addEventListener("dragstart",$,{passive:!0})}else!i&&n&&mt(e)}function mt(e){e.removeEventListener("mousedown",H),e.removeEventListener("touchstart",H),e.removeEventListener("touchend",$),e.removeEventListener("touchmove",ut),e.removeEventListener("touchcancel",$),e.removeEventListener("mouseup",$),e.removeEventListener("mouseleave",$),e.removeEventListener("keydown",ct),e.removeEventListener("keyup",dt),e.removeEventListener("dragstart",$),e.removeEventListener("blur",ft)}function Cn(e,a){vt(e,a,!1)}function _n(e){delete e._ripple,mt(e)}function wn(e,a){if(a.value===a.oldValue)return;const n=ot(a.oldValue);vt(e,a,n)}const kn={mounted:Cn,unmounted:_n,updated:wn};const Ne={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},gt=x({location:String},"location");function ht(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=We();return{locationStyles:f(()=>{if(!e.location)return{};const{side:i,align:r}=Kt(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function l(d){return n?n(d):0}const o={};return i!=="center"&&(a?o[Ne[i]]=`calc(100% - ${l(i)}px)`:o[i]=0),r!=="center"?a?o[Ne[r]]=`calc(100% - ${l(r)}px)`:o[r]=0:(i==="center"?o.top=o.left="50%":o[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",o.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),o})}}const xn=B()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...gt({location:"top"}),...ge(),...D(),...Y()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const t=Fe(e,"modelValue"),{isRtl:s}=We(),{themeClasses:i}=J(e),{locationStyles:r}=ht(e),{textColorClasses:l,textColorStyles:o}=ee(e,"color"),{backgroundColorClasses:d,backgroundColorStyles:m}=Be(f(()=>e.bgColor||e.color)),{backgroundColorClasses:y,backgroundColorStyles:c}=Be(e,"color"),{roundedClasses:v}=he(e),{intersectionRef:p,isIntersecting:b}=rt(),C=f(()=>parseInt(e.max,10)),S=f(()=>parseInt(e.height,10)),h=f(()=>parseFloat(e.bufferValue)/C.value*100),_=f(()=>parseFloat(t.value)/C.value*100),E=f(()=>s.value!==e.reverse),T=f(()=>e.indeterminate?"fade-transition":"slide-x-transition"),z=f(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function F(g){if(!p.value)return;const{left:w,right:I,width:N}=p.value.getBoundingClientRect(),A=E.value?N-g.clientX+(I-N):g.clientX-w;t.value=Math.round(A/N*C.value)}return M(()=>u(e.tag,{ref:p,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&b.value,"v-progress-linear--reverse":E.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},v.value,i.value],style:{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?k(S.value):0,"--v-progress-linear-height":k(S.value),...r.value},role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:_.value,onClick:e.clickable&&F},{default:()=>[e.stream&&u("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...o.value,[E.value?"left":"right"]:k(-S.value),borderTop:`${k(S.value/2)} dotted`,opacity:z.value,top:`calc(50% - ${k(S.value/4)})`,width:k(100-h.value,"%"),"--v-progress-linear-stream-to":k(S.value*(E.value?1:-1))}},null),u("div",{class:["v-progress-linear__background",d.value],style:[m.value,{opacity:z.value,width:k(e.stream?h.value:100,"%")}]},null),u(ae,{name:T.value},{default:()=>[e.indeterminate?u("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(g=>u("div",{key:g,class:["v-progress-linear__indeterminate",g,y.value],style:c.value},null))]):u("div",{class:["v-progress-linear__determinate",y.value],style:[c.value,{width:k(_.value,"%")}]},null)]}),n.default&&u("div",{class:"v-progress-linear__content"},[n.default({value:_.value,buffer:h.value})])]})),{}}}),$n=x({loading:[Boolean,String]},"loader");function Ln(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{loaderClasses:f(()=>({[`${a}--loading`]:e.loading}))}}function ea(e,a){var t;let{slots:n}=a;return u("div",{class:`${e.name}__loader`},[((t=n.default)==null?void 0:t.call(n,{color:e.color,isActive:e.active}))||u(xn,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const En=["static","relative","fixed","absolute","sticky"],In=x({position:{type:String,validator:e=>En.includes(e)}},"position");function Bn(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{positionClasses:f(()=>e.position?`${a}--${e.position}`:void 0)}}function ta(){var e,a;return(a=(e=ve("useRouter"))==null?void 0:e.proxy)==null?void 0:a.$router}function Tn(e,a){const n=Ut("RouterLink"),t=f(()=>!!(e.href||e.to)),s=f(()=>(t==null?void 0:t.value)||Ee(a,"click")||Ee(e,"click"));if(typeof n=="string")return{isLink:t,isClickable:s,href:P(e,"href")};const i=e.to?n.useLink(e):void 0;return{isLink:t,isClickable:s,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&f(()=>{var r,l;return e.exact?(r=i.isExactActive)==null?void 0:r.value:(l=i.isActive)==null?void 0:l.value}),href:f(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const Vn=x({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let re=!1;function na(e,a){let n=!1,t,s;Re&&(fe(()=>{window.addEventListener("popstate",i),t=e==null?void 0:e.beforeEach((r,l,o)=>{re?n?a(o):o():setTimeout(()=>n?a(o):o()),re=!0}),s=e==null?void 0:e.afterEach(()=>{re=!1})}),qt(()=>{window.removeEventListener("popstate",i),t==null||t(),s==null||s()}));function i(r){var l;(l=r.state)!=null&&l.replaced||(n=!0,setTimeout(()=>n=!1))}}function Nn(e,a){j(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&a&&fe(()=>{a(!0)})},{immediate:!0})}const aa=B()({name:"VBtn",directives:{Ripple:kn},props:{active:{type:Boolean,default:void 0},symbol:{type:null,default:it},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:oe,appendIcon:oe,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...Ye(),...ge(),...Ze(),...Yt(),...Qe(),...dn(),...$n(),...gt(),...In(),...Vn(),...be(),...D({tag:"button"}),...Y(),...tt({variant:"elevated"})},emits:{"group:selected":e=>!0},setup(e,a){let{attrs:n,slots:t}=a;const{themeClasses:s}=J(e),{borderClasses:i}=Je(e),{colorClasses:r,colorStyles:l,variantClasses:o}=on(e),{densityClasses:d}=et(e),{dimensionStyles:m}=Jt(e),{elevationClasses:y}=Ke(e),{loaderClasses:c}=Ln(e),{locationStyles:v}=ht(e),{positionClasses:p}=Bn(e),{roundedClasses:b}=he(e),{sizeClasses:C,sizeStyles:S}=pe(e),h=fn(e,e.symbol,!1),_=Tn(e,n),E=f(()=>{var g;return e.active!==void 0?e.active:_.isLink.value?(g=_.isActive)==null?void 0:g.value:h==null?void 0:h.isSelected.value}),T=f(()=>(h==null?void 0:h.disabled.value)||e.disabled),z=f(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),F=f(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});return Nn(_,h==null?void 0:h.select),M(()=>{var we,ke;const g=_.isLink.value?"a":e.tag,w=!!(e.prependIcon||t.prepend),I=!!(e.appendIcon||t.append),N=!!(e.icon&&e.icon!==!0),A=(h==null?void 0:h.isSelected.value)&&(!_.isLink.value||((we=_.isActive)==null?void 0:we.value))||!h||((ke=_.isActive)==null?void 0:ke.value);return le(u(g,{type:g==="a"?void 0:"button",class:["v-btn",h==null?void 0:h.selectedClass.value,{"v-btn--active":E.value,"v-btn--block":e.block,"v-btn--disabled":T.value,"v-btn--elevated":z.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},s.value,i.value,A?r.value:void 0,d.value,y.value,c.value,p.value,b.value,C.value,o.value],style:[A?l.value:void 0,m.value,v.value,S.value],disabled:T.value||void 0,href:_.href.value,onClick:Q=>{var W;T.value||((W=_.navigate)==null||W.call(_,Q),h==null||h.toggle())},value:F.value},{default:()=>{var Q,W;return[ln(!0,"v-btn"),!e.icon&&w&&u(se,{key:"prepend",defaults:{VIcon:{icon:e.prependIcon}}},{default:()=>{var R,O;return[u("span",{class:"v-btn__prepend"},[(O=(R=t.prepend)==null?void 0:R.call(t))!=null?O:u(ie,null,null)])]}}),u("span",{class:"v-btn__content","data-no-activator":""},[u(se,{key:"content",defaults:{VIcon:{icon:N?e.icon:void 0}}},{default:()=>{var R,O;return[(O=(R=t.default)==null?void 0:R.call(t))!=null?O:N&&u(ie,{key:"icon"},null)]}})]),!e.icon&&I&&u(se,{key:"append",defaults:{VIcon:{icon:e.appendIcon}}},{default:()=>{var R,O;return[u("span",{class:"v-btn__append"},[(O=(R=t.append)==null?void 0:R.call(t))!=null?O:u(ie,null,null)])]}}),!!e.loading&&u("span",{key:"loader",class:"v-btn__loader"},[(W=(Q=t.loader)==null?void 0:Q.call(t))!=null?W:u(bn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[je("ripple"),!T.value&&e.ripple,null]])}),{}}}),Se=["sm","md","lg","xl","xxl"],yt=(()=>Se.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}))(),bt=(()=>Se.reduce((e,a)=>(e["offset"+me(a)]={type:[String,Number],default:null},e),{}))(),pt=(()=>Se.reduce((e,a)=>(e["order"+me(a)]={type:[String,Number],default:null},e),{}))(),Pe={col:Object.keys(yt),offset:Object.keys(bt),order:Object.keys(pt)};function Pn(e,a,n){let t=e;if(!(n==null||n===!1)){if(a){const s=a.replace(e,"");t+=`-${s}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const zn=["auto","start","end","center","baseline","stretch"],sa=B()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...yt,offset:{type:[String,Number],default:null},...bt,order:{type:[String,Number],default:null},...pt,alignSelf:{type:String,default:null,validator:e=>zn.includes(e)},...D()},setup(e,a){let{slots:n}=a;const t=f(()=>{const s=[];let i;for(i in Pe)Pe[i].forEach(l=>{const o=e[l],d=Pn(i,l,o);d&&s.push(d)});const r=s.some(l=>l.startsWith("v-col-"));return s.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return q(e.tag,{class:t.value},(s=n.default)==null?void 0:s.call(n))}}}),Rn=["sm","md","lg","xl","xxl"],Ce=["start","end","center"],St=["space-between","space-around","space-evenly"];function _e(e,a){return Rn.reduce((n,t)=>(n[e+me(t)]=a(),n),{})}const On=[...Ce,"baseline","stretch"],Ct=e=>On.includes(e),_t=_e("align",()=>({type:String,default:null,validator:Ct})),An=[...Ce,...St],wt=e=>An.includes(e),kt=_e("justify",()=>({type:String,default:null,validator:wt})),jn=[...Ce,...St,"stretch"],xt=e=>jn.includes(e),$t=_e("alignContent",()=>({type:String,default:null,validator:xt})),ze={align:Object.keys(_t),justify:Object.keys(kt),alignContent:Object.keys($t)},Gn={align:"align",justify:"justify",alignContent:"align-content"};function Mn(e,a,n){let t=Gn[e];if(n!=null){if(a){const s=a.replace(e,"");t+=`-${s}`}return t+=`-${n}`,t.toLowerCase()}}const ia=B()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ct},..._t,justify:{type:String,default:null,validator:wt},...kt,alignContent:{type:String,default:null,validator:xt},...$t,...D()},setup(e,a){let{slots:n}=a;const t=f(()=>{const s=[];let i;for(i in ze)ze[i].forEach(r=>{const l=e[r],o=Mn(i,r,l);o&&s.push(o)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return q(e.tag,{class:["v-row",t.value]},(s=n.default)==null?void 0:s.call(n))}}});export{ln as A,cn as B,vn as C,dn as D,Vn as E,fn as F,Tn as G,Kt as H,nn as I,Hn as J,Un as K,ea as L,K as M,qn as N,Xn as O,ta as P,na as Q,kn as R,Yn as S,se as V,Qe as a,ge as b,Be as c,Je as d,Ke as e,he as f,Zn as g,Qn as h,ie as i,ia as j,sa as k,aa as l,Ye as m,an as n,Jn as o,ee as p,Ze as q,et as r,$n as s,Ln as t,Zt as u,Kn as v,be as w,tt as x,on as y,pe as z};
