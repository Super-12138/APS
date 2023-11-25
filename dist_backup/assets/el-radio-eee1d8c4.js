import{x as S,ag as _,aN as B,S as N,aO as w,aP as z,aQ as O,r as E,ak as Q,$ as v,ao as W,aR as X,z as y,A as I,o as G,c as V,d as g,N as h,aS as P,f as e,X as F,B as f,ar as R,C as $,k as T,t as A,G as C,R as D,n as x,aT as J,aj as Y,aU as Z,b as ee,aq as ae,I as oe,K as le,w as se,al as ne,H as te,aV as K}from"./index-ba92c6b8.js";const M=S({size:_,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),re=S({...M,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),U={[B]:s=>N(s)||w(s)||z(s),[O]:s=>N(s)||w(s)||z(s)},L=Symbol("radioGroupKey"),j=(s,m)=>{const n=E(),o=Q(L,void 0),d=v(()=>!!o),b=v({get(){return d.value?o.modelValue:s.modelValue},set(i){d.value?o.changeEvent(i):m&&m(B,i),n.value.checked=s.modelValue===s.label}}),r=W(v(()=>o==null?void 0:o.size)),u=X(v(()=>o==null?void 0:o.disabled)),l=E(!1),p=v(()=>u.value||d.value&&b.value!==s.label?-1:0);return{radioRef:n,isGroup:d,radioGroup:o,focus:l,size:r,disabled:u,tabIndex:p,modelValue:b}},ie=["value","name","disabled"],de=y({name:"ElRadio"}),ue=y({...de,props:re,emits:U,setup(s,{emit:m}){const n=s,o=I("radio"),{radioRef:d,radioGroup:b,focus:r,size:u,disabled:l,modelValue:p}=j(n,m);function i(){D(()=>m("change",p.value))}return(a,t)=>{var c;return G(),V("label",{class:f([e(o).b(),e(o).is("disabled",e(l)),e(o).is("focus",e(r)),e(o).is("bordered",a.border),e(o).is("checked",e(p)===a.label),e(o).m(e(u))])},[g("span",{class:f([e(o).e("input"),e(o).is("disabled",e(l)),e(o).is("checked",e(p)===a.label)])},[h(g("input",{ref_key:"radioRef",ref:d,"onUpdate:modelValue":t[0]||(t[0]=k=>F(p)?p.value=k:null),class:f(e(o).e("original")),value:a.label,name:a.name||((c=e(b))==null?void 0:c.name),disabled:e(l),type:"radio",onFocus:t[1]||(t[1]=k=>r.value=!0),onBlur:t[2]||(t[2]=k=>r.value=!1),onChange:i,onClick:t[3]||(t[3]=R(()=>{},["stop"]))},null,42,ie),[[P,e(p)]]),g("span",{class:f(e(o).e("inner"))},null,2)],2),g("span",{class:f(e(o).e("label")),onKeydown:t[4]||(t[4]=R(()=>{},["stop"]))},[$(a.$slots,"default",{},()=>[T(A(a.label),1)])],34)],2)}}});var pe=C(ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const me=S({...M,name:{type:String,default:""}}),be=["value","name","disabled"],fe=y({name:"ElRadioButton"}),ce=y({...fe,props:me,setup(s){const m=s,n=I("radio"),{radioRef:o,focus:d,size:b,disabled:r,modelValue:u,radioGroup:l}=j(m),p=v(()=>({backgroundColor:(l==null?void 0:l.fill)||"",borderColor:(l==null?void 0:l.fill)||"",boxShadow:l!=null&&l.fill?`-1px 0 0 0 ${l.fill}`:"",color:(l==null?void 0:l.textColor)||""}));return(i,a)=>{var t;return G(),V("label",{class:f([e(n).b("button"),e(n).is("active",e(u)===i.label),e(n).is("disabled",e(r)),e(n).is("focus",e(d)),e(n).bm("button",e(b))])},[h(g("input",{ref_key:"radioRef",ref:o,"onUpdate:modelValue":a[0]||(a[0]=c=>F(u)?u.value=c:null),class:f(e(n).be("button","original-radio")),value:i.label,type:"radio",name:i.name||((t=e(l))==null?void 0:t.name),disabled:e(r),onFocus:a[1]||(a[1]=c=>d.value=!0),onBlur:a[2]||(a[2]=c=>d.value=!1),onClick:a[3]||(a[3]=R(()=>{},["stop"]))},null,42,be),[[P,e(u)]]),g("span",{class:f(e(n).be("button","inner")),style:x(e(u)===i.label?e(p):{}),onKeydown:a[4]||(a[4]=R(()=>{},["stop"]))},[$(i.$slots,"default",{},()=>[T(A(i.label),1)])],38)],2)}}});var q=C(ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const ve=S({id:{type:String,default:void 0},size:_,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),ge=U,ye=["id","aria-label","aria-labelledby"],Re=y({name:"ElRadioGroup"}),Se=y({...Re,props:ve,emits:ge,setup(s,{emit:m}){const n=s,o=I("radio"),d=J(),b=E(),{formItem:r}=Y(),{inputId:u,isLabeledByFormItem:l}=Z(n,{formItemContext:r}),p=a=>{m(B,a),D(()=>m("change",a))};ee(()=>{const a=b.value.querySelectorAll("[type=radio]"),t=a[0];!Array.from(a).some(c=>c.checked)&&t&&(t.tabIndex=0)});const i=v(()=>n.name||d.value);return ae(L,oe({...le(n),changeEvent:p,name:i})),se(()=>n.modelValue,()=>{n.validateEvent&&(r==null||r.validate("change").catch(a=>ne()))}),(a,t)=>(G(),V("div",{id:e(u),ref_key:"radioGroupRef",ref:b,class:f(e(o).b("group")),role:"radiogroup","aria-label":e(l)?void 0:a.label||"radio-group","aria-labelledby":e(l)?e(r).labelId:void 0},[$(a.$slots,"default")],10,ye))}});var H=C(Se,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Ee=te(pe,{RadioButton:q,RadioGroup:H}),Be=K(H);K(q);export{Ee as E,Be as a};
