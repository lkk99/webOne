import{_ as f,e as k,r as s,o as x,f as r,b as n,c as l,d as e,g as w,w as d,F as B,j as S,h as y,t as u,p as b,m as C}from"./index-C7dgg-A2.js";import{g as I}from"./book-CJFyOkzo.js";const D=t=>(b("data-v-ea25b140"),t=t(),C(),t),N=D(()=>e("div",null,[e("h2",{style:{"text-align":"center"}},"书架")],-1)),P=["onClick"],z={__name:"index",setup(t){const _=k(),c=s([]),i=a=>{_.push("/read/directoryread?id="+a.id)};s(0);const p=s(1),v=s(50),g=async()=>{let a=await I({pageNum:p.value,pageSize:v.value});a.code===200&&(c.value=a.data)};return x(()=>{g()}),(a,F)=>{const h=r("el-col"),m=r("el-row");return n(),l("div",null,[N,e("div",null,[w(m,null,{default:d(()=>[(n(!0),l(B,null,S(c.value,o=>(n(),y(h,{key:o,span:4},{default:d(()=>[e("div",{class:"bookkuang",onClick:V=>i(o)},[e("div",null,u(o.name),1),e("div",null,"作者："+u(o.author),1)],8,P)]),_:2},1024))),128))]),_:1})])])}}},E=f(z,[["__scopeId","data-v-ea25b140"]]);export{E as default};
