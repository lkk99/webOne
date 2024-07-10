import{_ as L,r as W,n as E,o as O,b as c,c as u,d as q,t as g,q as K,F as A,j as U,a as N,v as J,x as X,i as j}from"./index-C7dgg-A2.js";function x(t){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=[];for(let o=0;o<t.length;o++){let r=e.indexOf(t[o]);a.push(r.toString(2).padStart(6,"0"))}return a.join("")}function R(t,e,a){if(t<1901||t>2100)throw new Error("Invalid Year");if(e<1||e>12)throw new Error("Invalid Month");if(a<1||a>31)throw new Error("Invalid Date");if([4,6,9,11].indexOf(e)!=-1&&a>30)throw new Error("Invalid Date");if(e==2){if(a>29)throw new Error("Invalid Date");{let o=!1;if((t%400==0||t%4==0&&t%100!=0)&&(o=!0),!o&&a>28)throw new Error("Invalid Date")}}}var T={base64ToBit:x,checkDate:R};const{base64ToBit:Y,checkDate:z}=T,G=["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"],I=[4,19,3,18,4,19,4,19,4,20,4,20,6,22,6,22,6,22,7,22,6,21,6,21],Q=[];function H(){const t="ABCDAECDAECDFGHIJKHILKMILABNOABNOAENOAENOAEPQRGSTUGSTLAVTOAWXOAWXOAYXOAYZOabcdebcQUfgThijkOilXOimXOimXOimcOnocdpqcQrsgktujkvumXvumXvumcvumcvwocxyqcz0sj10s213u243um43um53wm56wq567q589s+/0s~/3u~!3u@#3um",e="paaqmqqpqaquqqqqqvruruqq6qWaWZqlqaqqqqqqlaaqmqqppaaqqqqqqrququqqqqWaWZaVlaaampqlpaaqqqqplaWampqlqaququqqqqWZWZVVlaWaWZqlqqVZWZVVlaWaWZaVlaaqmpqpqmVZVZVVVaWaWZaVlaWampqpqlVZVZVVqVVZVVVVVaWZWZVVqVVVVVVVVaVZWZVVpaaqmpqpqVFVVVVVVaVZVZVVlaWaWZalpaaampqppVFVRVVVVWVZVZVVlaWaWpqlpVFVRVVUVVVZVVVVVaWZWZaVVFVZVVVVVFVVVVVVpVFVRUVUVFFVVVVVpVFFRUVUVFFVRVVVlVBFRUVUUFFVRVVVlVBFBEVUUFFVRVVUlVBFBEVQUFFFRUVUlVBFBEFQUFBFRUVUlVBEBEFAQFBFBEVUVVBEBEFAVVVVVVVVQFBFBEVQVVBEBEAAVVAEAEAAQFBFBEFQUFBFBUVUQFBEBEFAUFBFBEVUVQAEAAAAAFBEBEFAVQAAAAAAAFBEBEAAVAAAAAAAAFBEAEAA",a=[];for(let r=0;r<e.length;r+=8){const h=Y(e.substr(r,8)),f=[];for(let y=0;y<h.length;y+=2)f.push(+`0b${h.substr(y,2)}`);a.push(f)}const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/~!@#";for(let r=0;r<t.length;r++)Q.push(a[o.indexOf(t[r])])}H();function P(t,e,a){t=Math.floor(+t),e=Math.floor(+e),a=Math.floor(+a),z(t,e,a);const o=(e-1)*2+(a<15?0:1),r=I[o]+Q[t-1901][o];return a==r?G[o]:null}var ee={getSolarTerm:P};const{base64ToBit:te,checkDate:le}=T,{getSolarTerm:ae}=ee,b=[],oe="甲乙丙丁戊己庚辛壬癸",re="子丑寅卯辰巳午未申酉戌亥",se="鼠牛虎兔龙蛇马羊猴鸡狗猪",ne="正二三四五六七八九十冬腊",_="一二三四五六七八九十";function ie(){const e=te("hLaCVwUrqpNDSYNlUaqgrUE1pJXQSuak2FJoaSrqlC1QNailtBK26TcElwpLWyWDUoNqJW1ArYJVySXgkuzJYNSg6lVtSC1oFbHJuCS58loZKhqU20oLVQVqSq2BLoSWlkrCpV7SoNlBaqqrUE2gpbNSuClcVKg6VBqpq1QVaglslK4KVwUmPpMGyrrVQVqCW1UroJWhSamk0NJY1ShaoFtTS2glbBJtKS4Ul1ZLBqUG1GraBVsEq6pLwSXBks2pQdSw1lBawKtlk2hJcGSyalQ1KDaUlqoK1PVbAl0JLVyVhUqFpSWqgrVlVqCXQUtspXBSsKk0dKg1UFapJtQS2alcFJwaTL0mDVMFqja1BLbaV0ErQpNbSWGkoapLtUC1oFbSStgk29JcKSwqlW1KDaQVtGq2CTeEl4JLgyWzUoOpQaqSrYFVwSXHkuDJZ9SoalBtKq1UFagptRS6ClsVKwqVC0prVQVqgq0lLoKWwUrOpODSbuUwaqCtVU2oJbBSuik4NFo6TBqkG1TNagVtBK5KToUWhoqWyUNUg");let a={y:1900,m:1,d:31,obj:new Date(1900,0,31,0,0,0,0)},o=6,r=0;for(let h=0;h<e.length&&!(h+16>=e.length);){const f=e.substr(h,4);h+=4;const y=+`0b${f}`,d=y>0?13:12,w=e.substr(h,d).split("").map(k=>+k);h+=d,b.push({solarDate:a,leapMonth:y,months:w,heavenlyStem:o,earthlyBranch:r});const m=d*29+w.filter(k=>k==1).length,F=new Date(a.y,a.m-1,a.d+m,0,0,0,0);a={y:F.getFullYear(),m:F.getMonth()+1,d:F.getDate(),obj:F},o=(o+1)%10,r=(r+1)%12}}ie();function Ve(t,e){return t.y!=e.y?t.y>e.y:t.m!=e.m?t.m>e.m:t.d!=e.d?t.d>e.d:!1}function ce(t,e,a){const o=`${a?"闰":""}${ne[t-1]}月`;return e<=10?`${o}初${_[e-1]}`:e<20?`${o}十${_[e-11]}`:e==20?`${o}廿十`:e>20?`${o}廿${_[e-21]}`:`${o}三十`}function ue(t,e,a){t=Math.floor(+t),e=Math.floor(+e),a=Math.floor(+a),le(t,e,a);let o=t-1900,r=b[o];if(Ve(r.solarDate,{y:t,m:e,d:a})&&(o-=1,r=b[o]),!r)throw new Error("Invalid Date");const h=new Date(t,e-1,a,0,0,0,0);let f=Math.round((h.getTime()-r.solarDate.obj.getTime())/(24*60*60*1e3)),y=!1;for(let d=0;d<r.months.length;d++){const w=r.leapMonth>0&&d==r.leapMonth;w&&(y=!0);const m=29+r.months[d];if(f<m){let F=y?d:d+1;return{lunarMonth:F,lunarDate:f+1,isLeap:w,solarTerm:ae(t,e,a),lunarYear:`${oe[r.heavenlyStem]}${re[r.earthlyBranch]}年`,zodiac:`${se[r.earthlyBranch]}`,dateStr:ce(F,f+1,w)}}else f-=m}throw new Error("There's something wrong!")}var he={getLunar:ue};const qe={class:"calendar"},de={class:"header"},pe={class:"header1"},fe={style:{color:"red","font-size":"18px"}},ye={style:{"font-size":"14px"}},Fe={class:"date"},we={key:0,class:"holiday"},Be={key:1,class:"holiday"},Se={key:2,class:"lunar"},ge={key:3,class:"holidayweek"},me={key:4,class:"holidayweek"},ke={key:5,class:"holidayweek"},ve={key:6,class:"holidayweeks"},De={key:7,class:"holidayweek"},Ae={__name:"time",setup(t){const e=W(new Date),a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],o=["周日","周一","周二","周三","周四","周五","周六"],r={"12-30":{title:"除夕"},"1-1":{title:"春节"},"1-15":{title:"元宵节"},"2-2":{title:"龙抬头"},"5-5":{title:"端午节"},"7-7":{title:"七夕节"},"7-15":{title:"中元节"},"8-15":{title:"中秋节"},"9-9":{title:"重阳节"},"10-1":{title:"寒衣节"},"10-15":{title:"下元节"},"12-8":{title:"腊八节"},"12-23":{title:"北方小年"},"12-24":{title:"南方小年"}},h={"1-1":{title:"元旦节"},"2-14":{title:"情人节"},"5-1":{title:"劳动节"},"5-4":{title:"青年节"},"6-1":{title:"儿童节"},"9-10":{title:"教师节"},"10-1":{title:"国庆节"},"12-25":{title:"圣诞节"},"3-8":{title:"妇女节"},"3-12":{title:"植树节"},"4-1":{title:"愚人节"},"4-4":{title:"清明节"},"7-1":{title:"建党节"},"8-1":{title:"建军节"},"12-24":{title:"平安夜"}},f=E(()=>{const s={month:"long",year:"numeric"};return e.value.toLocaleDateString("zh-CN",s)}),y=(s,n,i)=>{const l=he.getLunar(i,n,s),S=l.solarTerm,p=`${l.lunarMonth}-${l.lunarDate}`,V=r[p],v=l.dateStr.split("月")[1];return V||S||(v==="初一"?l.dateStr.split("初")[0]:v)},d=(s,n,i)=>{let l=n+s;return n<10?s<10?l="0"+n+"-0"+s:l="0"+n+"-"+s:s<10?l=n+"-0"+s:l=n+s,l in F.value?F.value[l].holiday?"1":"2":"0"},w=s=>{let n=new Date().getDate();return s.date===n?"yellow":"#fff"},m=W(new Date().getFullYear()),F=W({});(()=>{N({methods:"get",url:"https://timor.tech/api/holiday/year/"+m.value,params:{}}).then(s=>{F.value=s.data.holiday})})();const B=E(()=>{const s=e.value.getFullYear(),n=e.value.getMonth(),i=new Date(s,n,1),l=new Date(s,n+1,0),S=[];let p=[];for(let V=0;V<i.getDay();V++)p.push({});for(let V=1;V<=l.getDate();V++){const v=`${n+1}-${V}`;let M=h[v],D=y(V,n+1,s),$=d(V,n+1);typeof D=="object"&&(M=D,D=""),p.push({date:V,lunar:D,holiday:M,holidayweek:$}),p.length===7&&(S.push(p),p=[])}return p.length>0&&S.push(p),S}),C=E(()=>{let s=0;return B.value.map(n=>{n.map((i,l)=>{Object.keys(i).length>0&&(i.holidayweek=="2"||i.holidayweek=="0"&&l!==0&&l!==6)&&(s+=1)})}),s}),Z=s=>{if(e.value.getMonth()==5){if(B.value[0][0].date){if(s.date==B.value[2][0].date)return"父亲节"}else if(s.date==B.value[3][0].date)return"父亲节"}else if(e.value.getMonth()==4){if(B.value[0][0]&&B.value[0][0].date){if(s.date==B.value[1][0].date)return"母亲节"}else if(s.date==B.value[2][0].date)return"母亲节"}};return O(()=>{}),(s,n)=>(c(),u("div",qe,[q("div",de,[q("h2",null,g(f.value),1)]),q("div",pe,[q("span",null,[K(" 当前月工作日: "),q("span",fe,g(C.value)+"日",1)])]),q("table",null,[q("thead",null,[q("tr",null,[(c(),u(A,null,U(o,i=>q("th",{key:i},g(i),1)),64))]),q("tr",ye,[(c(),u(A,null,U(a,i=>q("th",{key:i},g(i),1)),64))])]),q("tbody",null,[(c(!0),u(A,null,U(B.value,i=>(c(),u("tr",{key:i},[(c(!0),u(A,null,U(i,(l,S)=>{var p,V;return c(),u("td",{key:l.date,class:J({holiday:l.holiday}),style:X([{position:"relative"},{background:w(l)}])},[q("div",Fe,g(l.date),1),(p=l.holiday)!=null&&p.title?(c(),u("div",we,g((V=l.holiday)==null?void 0:V.title),1)):Z(l)?(c(),u("div",Be,g(Z(l)),1)):(c(),u("div",Se,g(l.lunar),1)),w(l)=="yellow"&&l.holidayweek==1?(c(),u("div",ge," 今休 ")):w(l)=="yellow"&&(l.holidayweek==2||l.holidayweek==0)?(c(),u("div",me," 今班 ")):l.holidayweek==1?(c(),u("div",ke,"休")):l.holidayweek==2?(c(),u("div",ve,"班")):(S=="0"||S=="6")&&l.date?(c(),u("div",De," 休 ")):j("",!0)],6)}),128))]))),128))])])]))}},We=L(Ae,[["__scopeId","data-v-40b3fe3b"]]);export{We as default};
