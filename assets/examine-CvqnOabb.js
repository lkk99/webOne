import{_ as f,r as a,n as b,o as y,b as _,c as k,d as n,t as d,p as C,m as x}from"./index-CveQr6yx.js";const M=l=>(C("data-v-4f6f6a6a"),l=l(),x(),l),S=M(()=>n("div",{class:"type-out"},"今天天气真凉爽",-1)),T=["innerHTML"],D={__name:"examine",setup(l){a([{prop:"name",type:"selectm",label:"項目",options:[{id:"1",name:"ppp"}],treeProps:{value:"id",label:"name"},propName:"mm",span:24},{prop:"a",type:"check",label:"ttt",options:[{value:"1",label:"ppp"},{value:"4",label:"ff"}],span:24},{prop:"kk",type:"selectm",label:"漂亮",options:[{id:"1",name:"tt",children:[{id:"66",name:"pp666p"}]},{id:"14",name:"ppp"}],treeProps:{value:"id",label:"name"},propName:"uu",span:24,multiple:!0}]);const i=a("画化${code}"),u=a("画化${code}"),o=a("123"),s=a("44"),p=a("66"),m=b(()=>{let e=i.value;return e=e.replace("${code}",`<span contenteditable="false" style="color:red">${o.value}</span>`),e=e.replace("${name}",`<span contenteditable="false" style="color:red">${s.value}</span>`),e=e.replace("${sort}",`<span contenteditable="false" style="color:red">${p.value}</span>`),e}),c=a(null),r=e=>{let t=c.value.innerHTML;t=t.replace(`<span contenteditable="false" style="color:red">${o.value}</span>`,"${code}"),t=t.replace(`<span contenteditable="false" style="color:red">${s.value}</span>`,"${name}"),t=t.replace(`<span contenteditable="false" style="color:red">${p.value}</span>`,"${sort}"),t.includes("${"+e+"}")?console.log("pppppppp"):(i.value=t+"${"+e+"}",u.value=t+"${"+e+"}")},$=()=>{let e=c.value.innerHTML;e=e.replace(`<span contenteditable="false" style="color:red">${o.value}</span>`,"${code}"),e=e.replace(`<span contenteditable="false" style="color:red">${s.value}</span>`,"${name}"),e=e.replace(`<span contenteditable="false" style="color:red">${p.value}</span>`,"${sort}"),console.log(e,u.value)};return y(()=>{}),(e,t)=>(_(),k("div",null,[S,n("div",{onClick:t[0]||(t[0]=v=>r("code"))},d(o.value),1),n("div",{onClick:t[1]||(t[1]=v=>r("name"))},d(s.value),1),n("div",{onClick:t[2]||(t[2]=v=>r("sort"))},d(p.value),1),n("div",{contenteditable:"true",ref_key:"editableDiv",ref:c,id:"editableDivs",class:"drop-container",innerHTML:m.value},null,8,T),n("div",{onClick:$},"提交")]))}},I=f(D,[["__scopeId","data-v-4f6f6a6a"]]);export{I as default};
