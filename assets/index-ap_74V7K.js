import{b as C}from"./dictOption-qoVdwWE9.js";import{_ as q,b as F,L as R,r as p,A as N,o as U,c as s,d as c,e as _,g as t,w as r,f as I,F as L,j as M,h as T,l as $,q as f}from"./index-AHIc1CTL.js";import{e as b,d as j}from"./book-eGR176Nv.js";const A={class:"cont"},D={class:"buttn"},z={__name:"index",setup(G){const m=F(),v=R(),u=p(null);p(!1);const o=p({}),y=N({name:[{required:!0,message:"请输入",trigger:"blur"}],type:[{required:!0,message:"请选择",trigger:"blur"}],synopsis:[{required:!0,message:"请输入",trigger:"blur"}]}),g=()=>{history.go(-1)},k=a=>{a&&a.validate(async e=>{e&&(await b({...o.value,release:1})).code===200&&(o.value={},m.replace("/read/authorbook"))})},V=a=>{a&&a.validate(async e=>{e&&(await b({...o.value,release:0})).code===200&&(o.value={},m.replace("/read/authorbook"))})},x=async()=>{let a=await j({bookId:v.query.id});a.code===200&&(o.value=a.data)};return U(()=>{x()}),(a,e)=>{const n=s("el-input"),d=s("el-form-item"),w=s("el-option"),h=s("el-select"),B=s("el-form"),i=s("el-button");return c(),_("div",A,[t(B,{ref_key:"ruleFormRef",ref:u,model:o.value,"label-width":"120px","label-position":"right",rules:y,style:{"margin-top":"20px",width:"90%"}},{default:r(()=>[t(d,{label:"名称",prop:"name"},{default:r(()=>[t(n,{modelValue:o.value.name,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value.name=l),style:{width:"100%"},placeholder:"请输入名称"},null,8,["modelValue"])]),_:1}),t(d,{label:"类型",prop:"type"},{default:r(()=>[t(h,{modelValue:o.value.type,"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.type=l),placeholder:"请选择"},{default:r(()=>[(c(!0),_(L,null,M($(C),l=>(c(),T(w,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"简介",prop:"synopsis"},{default:r(()=>[t(n,{modelValue:o.value.synopsis,"onUpdate:modelValue":e[2]||(e[2]=l=>o.value.synopsis=l),modelModifiers:{trim:!0},type:"textarea",rows:6,style:{width:"100%"},placeholder:"请输入简介"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),I("span",D,[t(i,{plain:"",style:{color:"#680ff7c2",background:"#fff",border:"1px solid #680ff7c2"},onClick:g},{default:r(()=>[f(" 返回 ")]),_:1}),t(i,{style:{color:"#fff",background:"#680ff7c2",border:"none"},onClick:e[3]||(e[3]=l=>k(u.value))},{default:r(()=>[f(" 发布 ")]),_:1}),t(i,{style:{color:"#fff",background:"#680ff7c2",border:"none"},onClick:e[4]||(e[4]=l=>V(u.value))},{default:r(()=>[f(" 保存 ")]),_:1})])])}}},O=q(z,[["__scopeId","data-v-851dec1a"]]);export{O as default};
