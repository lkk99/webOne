import{P as T}from"./Pagination-BcaZHcJo.js";import{b as $,c as z,d as B}from"./dict-BgOJfMDY.js";import{_ as F,L,r as n,A as H,H as I,f as i,b as u,c as m,g as a,w as o,d as R,q as V,p as U,m as j,o as A,I as O,J as E,h as M,i as G,F as q,j as J,t as K}from"./index-C7dgg-A2.js";const Q=_=>(U("data-v-38ddeb5c"),_=_(),j(),_),W=Q(()=>R("span",{style:{"font-size":"18px"}},"新增",-1)),X={style:{height:"calc(100vh - 320px)",overflow:"auto",width:"100%"}},Y={__name:"addDictDetailModal",props:{visible:{type:Boolean,default:!1},formData:{type:Object,required:!0}},emits:["close","save"],setup(_,{emit:C}){const g=L(),h=C,v=_,b=n(null),c=n(!1),e=n({}),x=H({value:[{required:!0,message:"请输入",trigger:"blur"}],label:[{required:!0,message:"请输入",trigger:"blur"}]}),d=()=>{c.value=!1,e.value={},h("close")},S=y=>{y&&y.validate(async t=>{t&&(await $({...e.value,type:g.query.type,status:e.value.status?"1":"0"})).code===200&&(c.value=!1,e.value={},h("save"))})};return I(()=>{c.value=v.visible,v.formData&&Object.keys(v.formData).length>0&&(e.value=v.formData)}),(y,t)=>{const w=i("el-input"),p=i("el-form-item"),l=i("el-switch"),f=i("el-form"),D=i("el-button"),P=i("el-dialog");return u(),m("div",null,[a(P,{modelValue:c.value,"onUpdate:modelValue":t[4]||(t[4]=r=>c.value=r),onClosed:d,top:"4%",width:"60%","close-on-click-modal":!1},{header:o(()=>[W]),footer:o(()=>[R("span",null,[a(D,{plain:"",class:"cancle-button",onClick:d},{default:o(()=>[V(" 取消 ")]),_:1}),a(D,{style:{color:"#fff",background:"#680ff7c2",border:"none"},onClick:t[3]||(t[3]=r=>S(b.value))},{default:o(()=>[V(" 保存 ")]),_:1})])]),default:o(()=>[R("div",X,[a(f,{ref_key:"ruleFormRef",ref:b,model:e.value,"label-width":"80px","label-position":"right",rules:x,style:{width:"95%"}},{default:o(()=>[a(p,{label:"值",prop:"value"},{default:o(()=>[a(w,{modelValue:e.value.value,"onUpdate:modelValue":t[0]||(t[0]=r=>e.value.value=r),style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue"])]),_:1}),a(p,{label:"名称",prop:"label"},{default:o(()=>[a(w,{modelValue:e.value.label,"onUpdate:modelValue":t[1]||(t[1]=r=>e.value.label=r),style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue"])]),_:1}),a(p,{label:"状态",prop:"status"},{default:o(()=>[a(l,{modelValue:e.value.status,"onUpdate:modelValue":t[2]||(t[2]=r=>e.value.status=r)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["modelValue"])])}}},Z=F(Y,[["__scopeId","data-v-38ddeb5c"]]),ee={key:0},te=["innerHTML","onClick"],le=["innerHTML"],re={__name:"index",setup(_){const C=L(),g=n(!0),h=n([]),v=n(0),b=n(1),c=n(50),e=(l,f)=>{b.value=l,c.value=f},x=n([{label:"值",prop:"value",width:120},{label:"名称",prop:"label",width:150},{label:"状态",prop:"status",width:150,tooltip:!0,customRender:l=>l.status==1?"<span style='color:green'>启用</span>":"<span style='color:gray'>禁用</span>"},{label:"创建人",prop:"createName",width:120,tooltip:!0},{label:"创建时间",prop:"createTime",width:180,tooltip:!0}]),d=n(!1),S=n({}),y=()=>{d.value=!0},t=async l=>{(await B(l)).code===200&&p()},w=()=>{d.value=!1,p()},p=async()=>{g.value=!0;let l=await z({pageNum:b.value,pageSize:c.value,type:C.query.type});l.code==200&&(h.value=l.data,v.value=l.total),g.value=!1};return A(()=>{p()}),(l,f)=>{const D=i("el-button"),P=i("el-table-column"),r=i("el-table"),N=O("loading");return u(),m("div",null,[a(D,{style:{background:"#680ff7c2",color:"#fff",border:"none"},onClick:y},{default:o(()=>[V(" 新增 ")]),_:1}),E((u(),M(r,{border:"",stripe:"","header-cell-style":{backgroundColor:"rgb(250, 250, 250)"},"cell-style":{height:"48px"},style:{height:"calc(100vh - 160px)","margin-top":"10px"},data:h.value},{default:o(()=>[(u(!0),m(q,null,J(x.value,s=>(u(),M(P,{key:s.prop,"min-width":s.width,prop:s.prop,label:s.label,align:"center","show-overflow-tooltip":s.tooltip},{default:o(({row:k})=>[s.customRender?(u(),m("div",ee,[s.prop=="status"?(u(),m("span",{key:0,innerHTML:s.customRender(k),style:{cursor:"pointer"},onClick:ae=>t(k)},null,8,te)):(u(),m("span",{key:1,innerHTML:s.customRender(k)},null,8,le))])):(u(),m(q,{key:1},[V(K(k[s.prop]),1)],64))]),_:2},1032,["min-width","prop","label","show-overflow-tooltip"]))),128))]),_:1},8,["header-cell-style","data"])),[[N,g.value]]),a(T,{total:v.value,getData:p,currentPage:b.value,currentPageSize:c.value,onChange:e},null,8,["total","currentPage","currentPageSize"]),d.value?(u(),M(Z,{key:0,visible:d.value,formData:S.value,onClose:f[0]||(f[0]=s=>d.value=!1),onSave:w},null,8,["visible","formData"])):G("",!0)])}}};export{re as default};
