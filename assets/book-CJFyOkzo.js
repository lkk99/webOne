import{C as o}from"./index-C7dgg-A2.js";const r=e=>o({url:"/addbook",method:"post",data:e}),d=e=>o({url:"/editabook",method:"post",data:e}),i=e=>o({url:"/submitBook",method:"post",data:e}),g=e=>o({url:"/getBookOne?bookId="+e.bookId,method:"get"}),u=e=>o({url:"/getbook?pageSize="+e.pageSize+"&pageNum="+e.pageNum,method:"get"}),s=e=>o({url:"/getBookread?pageSize="+e.pageSize+"&pageNum="+e.pageNum,method:"get"}),k=e=>o({url:"/getBookcontent?id="+e.id,method:"get"}),n=e=>o({url:"/addbookdirect",method:"post",data:e}),a=e=>o({url:"/editbookdirect?id="+e.id,method:"post",data:e}),m=e=>o({url:"/authorCon?id="+e.id+"&bookId="+e.bookId,method:"post",data:e}),p=e=>o({url:"/getbookdirect?id="+e.id+"&pageSize="+e.pageSize+"&pageNum="+e.pageNum,method:"get"}),c=e=>o({url:"/getbookdirectread?id="+e.id+"&pageSize="+e.pageSize+"&pageNum="+e.pageNum,method:"get"});export{k as a,u as b,r as c,g as d,d as e,p as f,s as g,c as h,n as i,a as j,m as k,i as s};
