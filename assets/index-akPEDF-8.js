import{P as v}from"./Pagination-7veeZ31U.js";import{a as x,e as y}from"./log-Bl8C38Pr.js";import{r as a,o as k,f as c,b as s,c as b,g as p,w as g,q as C,F as P,j as D,h as L}from"./index-CveQr6yx.js";const E={__name:"index",setup(z){const u=a([]),i=a(0),r=a(1),n=a(50),h=(e,l)=>{r.value=e,n.value=l},m=a([{label:"用户名",prop:"createUser",width:100},{label:"用户工号",prop:"createUserCode",width:150,tooltip:!0},{label:"内容",prop:"content",width:200,tooltip:!0},{label:"ip",prop:"ipAddress",width:120},{label:"时间",prop:"createTime",width:150,tooltip:!0}]),d=async()=>{let e=await x({pageNum:r.value,pageSize:n.value});e.code===200&&(u.value=e.log,i.value=e.total)},_=async()=>{let e=await y();if(e){const l=new Blob([e]),t=document.createElement("a");t.href=URL.createObjectURL(l),t.download="exported_data.xlsx",t.style.display="none",document.body.appendChild(t),t.click(),t.remove()}};return k(()=>{d()}),(e,l)=>{const t=c("el-button"),f=c("el-table-column"),w=c("el-table");return s(),b("div",null,[p(t,{style:{background:"#680ff7c2",color:"#fff",border:"none"},onClick:_},{default:g(()=>[C("导出")]),_:1}),p(w,{border:"",stripe:"","header-cell-style":{backgroundColor:"rgb(250, 250, 250)"},"cell-style":{height:"48px"},style:{height:"calc(100vh - 150px)","margin-top":"10px"},data:u.value},{default:g(()=>[(s(!0),b(P,null,D(m.value,o=>(s(),L(f,{key:o.prop,"min-width":o.width,prop:o.prop,label:o.label,align:"center","show-overflow-tooltip":o.tooltip},null,8,["min-width","prop","label","show-overflow-tooltip"]))),128))]),_:1},8,["header-cell-style","data"]),p(v,{total:i.value,getData:d,currentPage:r.value,currentPageSize:n.value,onChange:h},null,8,["total","currentPage","currentPageSize"])])}}};export{E as default};
