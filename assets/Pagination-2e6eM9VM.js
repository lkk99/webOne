import{_ as m,r as s,H as d,c as _,d as z,e as P,g as f,M as h}from"./index-AHIc1CTL.js";const C={class:"pagination"},x={__name:"Pagination",props:{total:{type:Number,default:0},getData:{type:Function,required:!0},currentPage:{type:Number,default:1},currentPageSize:{type:Number,default:10}},emits:["change"],setup(g,{emit:c}){h(t=>({"08908a86":t.color}));const u=c,n=g,l=s(0),e=s(1),a=s(10),i=t=>{a.value=t,e.value=1,u("change",e.value,a.value),n.getData()},p=t=>{e.value=t,u("change",e.value,a.value),n.getData()};return d(()=>{e.value=n.currentPage,a.value=n.currentPageSize,l.value=n.total}),(t,r)=>{const v=_("el-pagination");return z(),P("div",C,[f(v,{onSizeChange:i,onCurrentChange:p,"current-page":e.value,"onUpdate:currentPage":r[0]||(r[0]=o=>e.value=o),small:"","page-sizes":[50,100,200,500,1e3],"page-size":a.value,"onUpdate:pageSize":r[1]||(r[1]=o=>a.value=o),layout:"total, sizes, prev, pager, next,jumper ",total:l.value,style:{"margin-top":"10px","text-align":"right"}},null,8,["current-page","page-size","total"])])}}},S=m(x,[["__scopeId","data-v-5aee0246"]]);export{S as P};
