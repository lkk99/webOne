import{a as c}from"./translate-Ctjyheiz.js";import{r as i,f as g,b as o,c as r,d as n,F as v,j as _,g as m,w as x,t as u,E as f}from"./index-CveQr6yx.js";const h={style:{height:"calc(100vh - 100px)",overflow:"auto"}},w={style:{"text-align":"left","margin-top":"10px",background:"#eee",padding:"10px","border-radius":"10px"}},q={style:{"text-align":"right",background:"#f8c7b7","min-height":"20px","margin-top":"10px",padding:"10px","border-radius":"10px"}},V={__name:"question",setup(y){const e=i(""),s=i([]),d=async()=>{if(s.value.push({question:e.value,answer:""}),e.value){let l=JSON.parse(JSON.stringify(e.value));e.value="";let a=await c({ques:l});a.code===200&&(s.value[s.value.length-1]={question:a.question,answer:a.answer})}else f.error("请输入内容")};return(l,a)=>{const p=g("el-input");return o(),r("div",null,[n("div",h,[(o(!0),r(v,null,_(s.value,t=>(o(),r("div",{key:t},[n("div",w,u(t.question),1),n("div",q,u(t.answer),1)]))),128))]),m(p,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),placeholder:""},{append:x(()=>[n("span",{onClick:d},"发送")]),_:1},8,["modelValue"])])}}};export{V as default};
