import{B as K,N as Q,r as M,b as W,c as Z,d as j,t as q,E as tt}from"./index-CveQr6yx.js";var D={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(N,C){(function(E,g){N.exports=g()})(K,function(){return function(){var x={686:function(f,c,t){t.d(c,{default:function(){return J}});var a=t(279),s=t.n(a),l=t(370),h=t.n(l),y=t(817),m=t.n(y);function d(i){try{return document.execCommand(i)}catch{return!1}}var v=function(n){var e=m()(n);return d("cut"),e},p=v;function _(i){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=i,e}var P=function(n,e){var r=_(n);e.container.appendChild(r);var o=m()(r);return d("copy"),r.remove(),o},B=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=P(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=P(n.value,e):(r=m()(n),d("copy")),r},O=B;function T(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(i)}var F=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,o=n.container,u=n.target,b=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(u!==void 0)if(u&&T(u)==="object"&&u.nodeType===1){if(r==="copy"&&u.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(u.hasAttribute("readonly")||u.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(b)return O(b,{container:o});if(u)return r==="cut"?p(u):O(u,{container:o})},H=F;function S(i){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(e){return typeof e}:S=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(i)}function I(i,n){if(!(i instanceof n))throw new TypeError("Cannot call a class as a function")}function R(i,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function z(i,n,e){return n&&R(i.prototype,n),e&&R(i,e),i}function U(i,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(n&&n.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),n&&k(i,n)}function k(i,n){return k=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},k(i,n)}function Y(i){var n=X();return function(){var r=w(i),o;if(n){var u=w(this).constructor;o=Reflect.construct(r,arguments,u)}else o=r.apply(this,arguments);return V(this,o)}}function V(i,n){return n&&(S(n)==="object"||typeof n=="function")?n:G(i)}function G(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function X(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function w(i){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(i)}function L(i,n){var e="data-clipboard-".concat(i);if(n.hasAttribute(e))return n.getAttribute(e)}var $=function(i){U(e,i);var n=Y(e);function e(r,o){var u;return I(this,e),u=n.call(this),u.resolveOptions(o),u.listenClick(r),u}return z(e,[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=S(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var u=this;this.listener=h()(o,"click",function(b){return u.onClick(b)})}},{key:"onClick",value:function(o){var u=o.delegateTarget||o.currentTarget,b=this.action(u)||"copy",A=H({action:b,container:this.container,target:this.target(u),text:this.text(u)});this.emit(A?"success":"error",{action:b,text:A,trigger:u,clearSelection:function(){u&&u.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return L("action",o)}},{key:"defaultTarget",value:function(o){var u=L("target",o);if(u)return document.querySelector(u)}},{key:"defaultText",value:function(o){return L("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(o){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return O(o,u)}},{key:"cut",value:function(o){return p(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],u=typeof o=="string"?[o]:o,b=!!document.queryCommandSupported;return u.forEach(function(A){b=b&&!!document.queryCommandSupported(A)}),b}}]),e}(s()),J=$},828:function(f){var c=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function a(s,l){for(;s&&s.nodeType!==c;){if(typeof s.matches=="function"&&s.matches(l))return s;s=s.parentNode}}f.exports=a},438:function(f,c,t){var a=t(828);function s(y,m,d,v,p){var _=h.apply(this,arguments);return y.addEventListener(d,_,p),{destroy:function(){y.removeEventListener(d,_,p)}}}function l(y,m,d,v,p){return typeof y.addEventListener=="function"?s.apply(null,arguments):typeof d=="function"?s.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(_){return s(_,m,d,v,p)}))}function h(y,m,d,v){return function(p){p.delegateTarget=a(p.target,m),p.delegateTarget&&v.call(y,p)}}f.exports=l},879:function(f,c){c.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},c.nodeList=function(t){var a=Object.prototype.toString.call(t);return t!==void 0&&(a==="[object NodeList]"||a==="[object HTMLCollection]")&&"length"in t&&(t.length===0||c.node(t[0]))},c.string=function(t){return typeof t=="string"||t instanceof String},c.fn=function(t){var a=Object.prototype.toString.call(t);return a==="[object Function]"}},370:function(f,c,t){var a=t(879),s=t(438);function l(d,v,p){if(!d&&!v&&!p)throw new Error("Missing required arguments");if(!a.string(v))throw new TypeError("Second argument must be a String");if(!a.fn(p))throw new TypeError("Third argument must be a Function");if(a.node(d))return h(d,v,p);if(a.nodeList(d))return y(d,v,p);if(a.string(d))return m(d,v,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function h(d,v,p){return d.addEventListener(v,p),{destroy:function(){d.removeEventListener(v,p)}}}function y(d,v,p){return Array.prototype.forEach.call(d,function(_){_.addEventListener(v,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(_){_.removeEventListener(v,p)})}}}function m(d,v,p){return s(document.body,d,v,p)}f.exports=l},817:function(f){function c(t){var a;if(t.nodeName==="SELECT")t.focus(),a=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var s=t.hasAttribute("readonly");s||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),s||t.removeAttribute("readonly"),a=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),h=document.createRange();h.selectNodeContents(t),l.removeAllRanges(),l.addRange(h),a=l.toString()}return a}f.exports=c},279:function(f){function c(){}c.prototype={on:function(t,a,s){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:a,ctx:s}),this},once:function(t,a,s){var l=this;function h(){l.off(t,h),a.apply(s,arguments)}return h._=a,this.on(t,h,s)},emit:function(t){var a=[].slice.call(arguments,1),s=((this.e||(this.e={}))[t]||[]).slice(),l=0,h=s.length;for(l;l<h;l++)s[l].fn.apply(s[l].ctx,a);return this},off:function(t,a){var s=this.e||(this.e={}),l=s[t],h=[];if(l&&a)for(var y=0,m=l.length;y<m;y++)l[y].fn!==a&&l[y].fn._!==a&&h.push(l[y]);return h.length?s[t]=h:delete s[t],this}},f.exports=c,f.exports.TinyEmitter=c}},E={};function g(f){if(E[f])return E[f].exports;var c=E[f]={exports:{}};return x[f](c,c.exports,g),c.exports}return function(){g.n=function(f){var c=f&&f.__esModule?function(){return f.default}:function(){return f};return g.d(c,{a:c}),c}}(),function(){g.d=function(f,c){for(var t in c)g.o(c,t)&&!g.o(f,t)&&Object.defineProperty(f,t,{enumerable:!0,get:c[t]})}}(),function(){g.o=function(f,c){return Object.prototype.hasOwnProperty.call(f,c)}}(),g(686)}().default})})(D);var et=D.exports;const nt=Q(et),rt={style:{background:"rgb(43, 43, 43)",color:"#fff","border-radius":"10px",padding:"10px","font-size":"14px"}},ut={__name:"copy",setup(N){const C=M("复制文本"),x=M(null),E=()=>{const g=new nt(x.value,{text:()=>C.value});g.on("success",()=>{tt({message:"复制成功",type:"success"}),g.destroy()})};return(g,f)=>(W(),Z("div",null,[j("p",rt,q(C.value),1),j("button",{ref_key:"copyButton",ref:x,onClick:E},"复制",512)]))}};export{ut as default};
