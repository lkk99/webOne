import{_ as k,L as v,e as x,r as o,o as b,f as y,b as n,c,d as s,F as C,j as S,g as B,w,t as d,q as I,p as N,m as D}from"./index-C7dgg-A2.js";import{h as P}from"./book-CJFyOkzo.js";const R=t=>(N("data-v-3834e8de"),t=t(),D(),t),V={class:"bookkuang"},q=R(()=>s("h2",{style:{"text-align":"center"}},"目录",-1)),z={class:"dirct"},F=["onClick"],L={class:"buttn"},j={__name:"index",setup(t){const i=v(),l=x(),r=o([]);o(0);const u=o(1),p=o(50),_=()=>{history.go(-1)},f=e=>{l.push("/read/bookdetail?id="+e.id)},g=async()=>{let e=await P({pageNum:u.value,pageSize:p.value,id:i.query.id});e.code===200&&(r.value=e.data)};return b(()=>{g()}),(e,E)=>{const h=y("el-button");return n(),c("div",null,[s("div",V,[q,s("div",z,[(n(!0),c(C,null,S(r.value,(a,m)=>(n(),c("div",{key:a,onClick:M=>f(a),style:{"border-bottom":"1px solid #eee",padding:"5px 15px"}},d(m+1)+"、"+d(a.title),9,F))),128))]),s("span",L,[B(h,{plain:"",style:{color:"#680ff7c2",background:"#fff",border:"1px solid #680ff7c2"},onClick:_},{default:w(()=>[I(" 返回 ")]),_:1})])])])}}},A=k(j,[["__scopeId","data-v-3834e8de"]]);export{A as default};
