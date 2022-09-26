import{a as k,j as m,r as N,F as Ne}from"./jsx-runtime.11df4289.js";import{A as z}from"./index.7b22cb5f.js";import{s as M,a as qe}from"./theme.3fdd99ea.js";import{B as J}from"./index.3f034a03.js";import{C as ct}from"./index.2603eee7.js";import{I as lt,c as He}from"./index.b4835948.js";import{I as ve}from"./index.6f741956.js";import{L as dt}from"./index.896191fc.js";import{c as ke}from"./iframe.43996c26.js";import{M as oe}from"./index.061eb885.js";import{C as pt}from"./index.41e9cc76.js";import{C as ft}from"./index.abfbe5c6.js";import{I as mt}from"./index.ae0daebd.js";import{T as Z}from"./index.685581b9.js";import{T as ht}from"./index.402b5a60.js";import{T as je}from"./index.ee1c568e.js";const be=M("h2",{margin:0,typo:{size:20,weight:"$2",height:"$2"},color:"$black"}),Ve=M("p",{margin:0,typo:{},color:"$darkGrey"}),Ye=M("div",{display:"flex",flexDirection:"column",alignItems:"center",padding:"48px 32px",textAlign:"center",[`& ${z.Container}`]:{marginBottom:"$4"},[`& ${be}`]:{marginBottom:8}}),yt=({name:e,description:t,image:r})=>k(Ye,{children:[m(z,{size:"large",image:r}),m(be,{children:e}),m(Ve,{children:t})]}),gt=Object.assign(yt,{Container:Ye,Title:be,Description:Ve});try{AssistantInfo.displayName="AssistantInfo",AssistantInfo.__docgenInfo={description:"",displayName:"AssistantInfo",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AssistantInfo/index.tsx#AssistantInfo"]={docgenInfo:AssistantInfo.__docgenInfo,name:"AssistantInfo",path:"src/components/AssistantInfo/index.tsx#AssistantInfo"})}catch{}const Fe=M("footer",{padding:"$3 $4 0 $4",borderRadius:"$1",[`& ${lt.Container}`]:{flex:1},[`& ${J.Base}`]:{width:"100%"},variants:{withShadow:{true:{boxShadow:"0 12px 48px $shadow16"}}}}),Ue=M("aside",{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px 0 $3 0",typo:{size:12,height:"17px"},color:"$darkGrey","& a":{marginLeft:"0.5ch",textDecoration:"none",color:"$primary","&:focus":{outline:0}}}),se=({hasEnded:e,onStart:t,onSend:r})=>{const[n,s]=N.exports.useState("");return k(Fe,{withShadow:!e,children:[e?m(J,{onClick:t,children:"Start New Chat"}):m(ct,{value:n,placeholder:"Message\u2026",autoFocus:!0,onValueChange:s,onSend:()=>{!n||(r==null||r(n),s(""))}}),k(Ue,{children:["Conversation \u26A1\uFE0F by",m("a",{target:"_blank",href:"https://voiceflow.com",rel:"noreferrer",children:"Voiceflow"})]})]})},St=Object.assign(se,{Container:Fe,Watermark:Ue});try{se.displayName="Footer",se.__docgenInfo={description:"",displayName:"Footer",props:{hasEnded:{defaultValue:null,description:"",name:"hasEnded",required:!1,type:{name:"boolean | undefined"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"((message: string) => void) | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Footer/index.tsx#Footer"]={docgenInfo:se.__docgenInfo,name:"Footer",path:"src/components/Footer/index.tsx#Footer"})}catch{}const Ae=M("h1",{typo:{size:17,weight:"$2",height:"$2"},color:"rgba(255,255,255,0.95)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}),ze=M("button",{display:"flex",justifyContent:"center",alignItems:"center",height:32,width:32,marginLeft:8,border:0,borderRadius:6,padding:0,background:"none",trans:["background-color"],"&:focus":{outline:0},"&:hover":{cursor:"pointer",backgroundColor:"rgba(255,255,255,0.16)",[`& ${ve.Frame}`]:{color:"$white"}},[`& ${ve.Frame}`]:{height:"$xxs",width:"$xxs",color:"rgba(255,255,255,0.8)",trans:["color"]}}),Ke=M("header",{display:"flex",flexShrink:0,alignItems:"center",height:"$lg",padding:"0 $4 0 $5",backgroundColor:"$primary",boxShadow:"0 1px 2px $shadow16",[`& ${z.Container}`]:{height:32,width:32},[`& ${Ae}`]:{flex:1,marginLeft:14}}),ue=({title:e,image:t,actions:r=[]})=>k(Ke,{children:[m(z,{image:t}),m(Ae,{children:e}),r.map(({svg:n,onClick:s},c)=>m(ze,{onClick:s,children:m(ve,{svg:n})},c))]}),$t=Object.assign(ue,{Container:Ke,Title:Ae,Button:ze});try{ue.displayName="Header",ue.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"HeaderActionProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Header/index.tsx#Header"]={docgenInfo:ue.__docgenInfo,name:"Header",path:"src/components/Header/index.tsx#Header"})}catch{}const We=M("div",{padding:"$4 $4 $3 $4",borderRadius:"$1",backgroundColor:"$white",boxShadow:"0 12px 48px 4px $shadow12",[`& ${J.Base}`]:{width:"100%",marginTop:"$1","&:first-of-type":{marginTop:0}}}),ce=({accept:e,cancel:t})=>k(We,{children:[m(J.Primary,{tabIndex:-1,...e,children:e.label}),m(J,{type:"subtle",tabIndex:-1,...t,children:t.label})]}),_e=Object.assign(ce,{Container:We});try{ce.displayName="Prompt",ce.__docgenInfo={description:"",displayName:"Prompt",props:{accept:{defaultValue:null,description:"",name:"accept",required:!0,type:{name:"PromptOptionProps"}},cancel:{defaultValue:null,description:"",name:"cancel",required:!0,type:{name:"PromptOptionProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Prompt/index.tsx#Prompt"]={docgenInfo:ce.__docgenInfo,name:"Prompt",path:"src/components/Prompt/index.tsx#Prompt"})}catch{}const Oe=N.exports.createContext({scrollToBottom:()=>{}}),{Consumer:ge}=Oe,le=({target:e,children:t})=>{const r=N.exports.useCallback(()=>{requestAnimationFrame(()=>{const s=e.current;if(!s)return;const{scrollTop:c,scrollHeight:g,clientHeight:C}=s,A=g-C;A!==c&&s.scrollTo({top:A})})},[]),n=N.exports.useMemo(()=>({scrollToBottom:r}),[r]);return m(Oe.Provider,{value:n,children:t})};try{ge.displayName="AutoScrollConsumer",ge.__docgenInfo={description:"",displayName:"AutoScrollConsumer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/contexts/AutoScrollContext.tsx#AutoScrollConsumer"]={docgenInfo:ge.__docgenInfo,name:"AutoScrollConsumer",path:"src/contexts/AutoScrollContext.tsx#AutoScrollConsumer"})}catch{}try{le.displayName="AutoScrollProvider",le.__docgenInfo={description:"",displayName:"AutoScrollProvider",props:{target:{defaultValue:null,description:"",name:"target",required:!0,type:{name:"RefObject<T>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/contexts/AutoScrollContext.tsx#AutoScrollProvider"]={docgenInfo:le.__docgenInfo,name:"AutoScrollProvider",path:"src/contexts/AutoScrollContext.tsx#AutoScrollProvider"})}catch{}var vt={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ke,function(){return function(r,n,s){r=r||{};var c=n.prototype,g={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function C($,T,_,q){return c.fromToBase($,T,_,q)}s.en.relativeTime=g,c.fromToBase=function($,T,_,q,O){for(var u,S,l,E=_.$locale().relativeTime||g,y=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],b=y.length,R=0;R<b;R+=1){var v=y[R];v.d&&(u=q?s($).diff(_,v.d,!0):_.diff($,v.d,!0));var D=(r.rounding||Math.round)(Math.abs(u));if(l=u>0,D<=v.r||!v.r){D<=1&&R>0&&(v=y[R-1]);var K=E[v.l];O&&(D=O(""+D)),S=typeof K=="string"?K.replace("%d",D):K(D,T,v.l,l);break}}if(T)return S;var Y=l?E.future:E.past;return typeof Y=="function"?Y(S):Y.replace("%s",S)},c.to=function($,T){return C($,T,this,!0)},c.from=function($,T){return C($,T,this)};var A=function($){return $.$u?s.utc():s()};c.toNow=function($){return this.to(A(this),$)},c.fromNow=function($){return this.from(A(this),$)}}})})(vt);var Ge={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ke,function(){var r=1e3,n=6e4,s=36e5,c="millisecond",g="second",C="minute",A="hour",$="day",T="week",_="month",q="quarter",O="year",u="date",S="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},b=function(h,i,o){var d=String(h);return!d||d.length>=i?h:""+Array(i+1-d.length).join(o)+h},R={s:b,z:function(h){var i=-h.utcOffset(),o=Math.abs(i),d=Math.floor(o/60),a=o%60;return(i<=0?"+":"-")+b(d,2,"0")+":"+b(a,2,"0")},m:function h(i,o){if(i.date()<o.date())return-h(o,i);var d=12*(o.year()-i.year())+(o.month()-i.month()),a=i.clone().add(d,_),f=o-a<0,p=i.clone().add(d+(f?-1:1),_);return+(-(d+(o-a)/(f?a-p:p-a))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:_,y:O,w:T,d:$,D:u,h:A,m:C,s:g,ms:c,Q:q}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},v="en",D={};D[v]=y;var K=function(h){return h instanceof ae},Y=function h(i,o,d){var a;if(!i)return v;if(typeof i=="string"){var f=i.toLowerCase();D[f]&&(a=f),o&&(D[f]=o,a=f);var p=i.split("-");if(!a&&p.length>1)return h(p[0])}else{var x=i.name;D[x]=i,a=x}return!d&&a&&(v=a),a||!d&&v},L=function(h,i){if(K(h))return h.clone();var o=typeof i=="object"?i:{};return o.date=h,o.args=arguments,new ae(o)},w=R;w.l=Y,w.i=K,w.w=function(h,i){return L(h,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var ae=function(){function h(o){this.$L=Y(o.locale,null,!0),this.parse(o)}var i=h.prototype;return i.parse=function(o){this.$d=function(d){var a=d.date,f=d.utc;if(a===null)return new Date(NaN);if(w.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var p=a.match(l);if(p){var x=p[2]-1||0,P=(p[7]||"0").substring(0,3);return f?new Date(Date.UTC(p[1],x,p[3]||1,p[4]||0,p[5]||0,p[6]||0,P)):new Date(p[1],x,p[3]||1,p[4]||0,p[5]||0,p[6]||0,P)}}return new Date(a)}(o),this.$x=o.x||{},this.init()},i.init=function(){var o=this.$d;this.$y=o.getFullYear(),this.$M=o.getMonth(),this.$D=o.getDate(),this.$W=o.getDay(),this.$H=o.getHours(),this.$m=o.getMinutes(),this.$s=o.getSeconds(),this.$ms=o.getMilliseconds()},i.$utils=function(){return w},i.isValid=function(){return this.$d.toString()!==S},i.isSame=function(o,d){var a=L(o);return this.startOf(d)<=a&&a<=this.endOf(d)},i.isAfter=function(o,d){return L(o)<this.startOf(d)},i.isBefore=function(o,d){return this.endOf(d)<L(o)},i.$g=function(o,d,a){return w.u(o)?this[d]:this.set(a,o)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(o,d){var a=this,f=!!w.u(d)||d,p=w.p(o),x=function(X,H){var U=w.w(a.$u?Date.UTC(a.$y,H,X):new Date(a.$y,H,X),a);return f?U:U.endOf($)},P=function(X,H){return w.w(a.toDate()[X].apply(a.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(H)),a)},I=this.$W,B=this.$M,F=this.$D,V="set"+(this.$u?"UTC":"");switch(p){case O:return f?x(1,0):x(31,11);case _:return f?x(1,B):x(0,B+1);case T:var Q=this.$locale().weekStart||0,ee=(I<Q?I+7:I)-Q;return x(f?F-ee:F+(6-ee),B);case $:case u:return P(V+"Hours",0);case A:return P(V+"Minutes",1);case C:return P(V+"Seconds",2);case g:return P(V+"Milliseconds",3);default:return this.clone()}},i.endOf=function(o){return this.startOf(o,!1)},i.$set=function(o,d){var a,f=w.p(o),p="set"+(this.$u?"UTC":""),x=(a={},a[$]=p+"Date",a[u]=p+"Date",a[_]=p+"Month",a[O]=p+"FullYear",a[A]=p+"Hours",a[C]=p+"Minutes",a[g]=p+"Seconds",a[c]=p+"Milliseconds",a)[f],P=f===$?this.$D+(d-this.$W):d;if(f===_||f===O){var I=this.clone().set(u,1);I.$d[x](P),I.init(),this.$d=I.set(u,Math.min(this.$D,I.daysInMonth())).$d}else x&&this.$d[x](P);return this.init(),this},i.set=function(o,d){return this.clone().$set(o,d)},i.get=function(o){return this[w.p(o)]()},i.add=function(o,d){var a,f=this;o=Number(o);var p=w.p(d),x=function(B){var F=L(f);return w.w(F.date(F.date()+Math.round(B*o)),f)};if(p===_)return this.set(_,this.$M+o);if(p===O)return this.set(O,this.$y+o);if(p===$)return x(1);if(p===T)return x(7);var P=(a={},a[C]=n,a[A]=s,a[g]=r,a)[p]||1,I=this.$d.getTime()+o*P;return w.w(I,this)},i.subtract=function(o,d){return this.add(-1*o,d)},i.format=function(o){var d=this,a=this.$locale();if(!this.isValid())return a.invalidDate||S;var f=o||"YYYY-MM-DDTHH:mm:ssZ",p=w.z(this),x=this.$H,P=this.$m,I=this.$M,B=a.weekdays,F=a.months,V=function(H,U,ye,ie){return H&&(H[U]||H(d,f))||ye[U].slice(0,ie)},Q=function(H){return w.s(x%12||12,H,"0")},ee=a.meridiem||function(H,U,ye){var ie=H<12?"AM":"PM";return ye?ie.toLowerCase():ie},X={YY:String(this.$y).slice(-2),YYYY:this.$y,M:I+1,MM:w.s(I+1,2,"0"),MMM:V(a.monthsShort,I,F,3),MMMM:V(F,I),D:this.$D,DD:w.s(this.$D,2,"0"),d:String(this.$W),dd:V(a.weekdaysMin,this.$W,B,2),ddd:V(a.weekdaysShort,this.$W,B,3),dddd:B[this.$W],H:String(x),HH:w.s(x,2,"0"),h:Q(1),hh:Q(2),a:ee(x,P,!0),A:ee(x,P,!1),m:String(P),mm:w.s(P,2,"0"),s:String(this.$s),ss:w.s(this.$s,2,"0"),SSS:w.s(this.$ms,3,"0"),Z:p};return f.replace(E,function(H,U){return U||X[H]||p.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(o,d,a){var f,p=w.p(d),x=L(o),P=(x.utcOffset()-this.utcOffset())*n,I=this-x,B=w.m(this,x);return B=(f={},f[O]=B/12,f[_]=B,f[q]=B/3,f[T]=(I-P)/6048e5,f[$]=(I-P)/864e5,f[A]=I/s,f[C]=I/n,f[g]=I/r,f)[p]||I,a?B:w.a(B)},i.daysInMonth=function(){return this.endOf(_).$D},i.$locale=function(){return D[this.$L]},i.locale=function(o,d){if(!o)return this.$L;var a=this.clone(),f=Y(o,d,!0);return f&&(a.$L=f),a},i.clone=function(){return w.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},h}(),Ie=ae.prototype;return L.prototype=Ie,[["$ms",c],["$s",g],["$m",C],["$H",A],["$W",$],["$M",_],["$y",O],["$D",u]].forEach(function(h){Ie[h[1]]=function(i){return this.$g(i,h[0],h[1])}}),L.extend=function(h,i){return h.$i||(h(i,ae,L),h.$i=!0),L},L.locale=Y,L.isDayjs=K,L.unix=function(h){return L(1e3*h)},L.en=D[v],L.Ls=D,L.p={},L})})(Ge);const Me=Ge.exports,_t=e=>N.exports.useMemo(()=>{const t=Me(e),r=Me();switch(!0){case r.isSame(t,"day"):return"Today";case r.subtract(1,"day").isSame(t,"day"):return"Yesterday";default:return t.fromNow()}},[]);var xt=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,s=t.length,c;n<s;n++)(c||!(n in t))&&(c||(c=Array.prototype.slice.call(t,0,n)),c[n]=t[n]);return e.concat(c||Array.prototype.slice.call(t))};function Ct(e,t,r){var n=e.length-t.length,s=Array.from(t);if(n===0)return e.apply(void 0,s);if(n===1){var c=function(g){return e.apply(void 0,xt([g],s,!1))};return(r||e.lazy)&&(c.lazy=r||e.lazy,c.lazyArgs=t),c}throw new Error("Wrong number of arguments")}var wt=function(){};function Pe(){return Ct(bt,arguments)}function bt(e,t){var r=new Set(t);return Object.entries(e).reduce(function(n,s){var c=s[0],g=s[1];return r.has(c)||(n[c]=g),n},{})}const xe=Symbol("@ts-pattern/matcher"),De="@ts-pattern/anonymous-select-key",Le=e=>Boolean(e&&typeof e=="object"),Se=e=>e&&!!e[xe],re=(e,t,r)=>{if(Le(e)){if(Se(e)){const n=e[xe](),{matched:s,selections:c}=n.match(t);return s&&c&&Object.keys(c).forEach(g=>r(g,c[g])),s}if(!Le(t))return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.every((n,s)=>re(n,t[s],r));if(e instanceof Map)return t instanceof Map&&Array.from(e.keys()).every(n=>re(e.get(n),t.get(n),r));if(e instanceof Set){if(!(t instanceof Set))return!1;if(e.size===0)return t.size===0;if(e.size===1){const[n]=Array.from(e.values());return Se(n)?Array.from(t.values()).every(s=>re(n,s,r)):t.has(n)}return Array.from(e.values()).every(n=>t.has(n))}return Object.keys(e).every(n=>{const s=e[n];return(n in t||Se(c=s)&&c[xe]().matcherType==="optional")&&re(s,t[n],r);var c})}return Object.is(t,e)},Je=e=>new ne(e,[]);class ne{constructor(t,r){this.value=void 0,this.cases=void 0,this.value=t,this.cases=r}with(...t){const r=t[t.length-1],n=[t[0]],s=[];return t.length===3&&typeof t[1]=="function"?(n.push(t[0]),s.push(t[1])):t.length>2&&n.push(...t.slice(1,t.length-1)),new ne(this.value,this.cases.concat([{match:c=>{let g={};const C=Boolean(n.some(A=>re(A,c,($,T)=>{g[$]=T}))&&s.every(A=>A(c)));return{matched:C,value:C&&Object.keys(g).length?De in g?g[De]:g:c}},handler:r}]))}when(t,r){return new ne(this.value,this.cases.concat([{match:n=>({matched:Boolean(t(n)),value:n}),handler:r}]))}otherwise(t){return new ne(this.value,this.cases.concat([{match:r=>({matched:!0,value:r}),handler:t}])).run()}exhaustive(){return this.run()}run(){let t,r=this.value;for(let n=0;n<this.cases.length;n++){const s=this.cases[n],c=s.match(this.value);if(c.matched){r=c.value,t=s.handler;break}}if(!t){let n;try{n=JSON.stringify(this.value)}catch{n=this.value}throw new Error(`Pattern matching error: no pattern matches value ${n}`)}return t(r,this.value)}}const Xe=(e=[])=>{const{scrollToBottom:t}=N.exports.useContext(Oe);N.exports.useLayoutEffect(()=>{t()},e)};var Ze={exports:{}};/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var At=Ot;function Ot(e){if(!e)throw new TypeError("argument namespace is required");function t(r){}return t._file=void 0,t._ignored=!0,t._namespace=e,t._traced=!1,t._warned=Object.create(null),t.function=Tt,t.property=Et,t}function Tt(e,t){if(typeof e!="function")throw new TypeError("argument fn must be a function");return e}function Et(e,t,r){if(!e||typeof e!="object"&&typeof e!="function")throw new TypeError("argument obj must be object");var n=Object.getOwnPropertyDescriptor(e,t);if(!n)throw new TypeError("must call property on owner object");if(!n.configurable)throw new TypeError("property must be configurable")}var Rt=Object.setPrototypeOf||({__proto__:[]}instanceof Array?It:Mt);function It(e,t){return e.__proto__=t,e}function Mt(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(e,r)||(e[r]=t[r]);return e}const Pt={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"};/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */var Te=Pt,Dt=j;j.message=Te;j.code=Lt(Te);j.codes=Bt(Te);j.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0};j.empty={204:!0,205:!0,304:!0};j.retry={502:!0,503:!0,504:!0};function Lt(e){var t={};return Object.keys(e).forEach(function(n){var s=e[n],c=Number(n);t[s.toLowerCase()]=c}),t}function Bt(e){return Object.keys(e).map(function(r){return Number(r)})}function Nt(e){var t=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(j.code,t))throw new Error('invalid status message: "'+e+'"');return j.code[t]}function Be(e){if(!Object.prototype.hasOwnProperty.call(j.message,e))throw new Error("invalid status code: "+e);return j.message[e]}function j(e){if(typeof e=="number")return Be(e);if(typeof e!="string")throw new TypeError("code must be a number or string");var t=parseInt(e,10);return isNaN(t)?Nt(e):Be(t)}var Ce={exports:{}};typeof Object.create=="function"?Ce.exports=function(t,r){r&&(t.super_=r,t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:Ce.exports=function(t,r){if(r){t.super_=r;var n=function(){};n.prototype=r.prototype,t.prototype=new n,t.prototype.constructor=t}};/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */var qt=Ht;function Ht(e){return e.split(" ").map(function(t){return t.slice(0,1).toUpperCase()+t.slice(1)}).join("").replace(/[^ _0-9a-z]/gi,"")}/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */(function(e){At("http-errors");var t=Rt,r=Dt,n=Ce.exports,s=qt;e.exports=g,e.exports.HttpError=C(),e.exports.isHttpError=$(e.exports.HttpError),q(e.exports,r.codes,e.exports.HttpError);function c(u){return Number(String(u).charAt(0)+"00")}function g(){for(var u,S,l=500,E={},y=0;y<arguments.length;y++){var b=arguments[y],R=typeof b;if(R==="object"&&b instanceof Error)u=b,l=u.status||u.statusCode||l;else if(R==="number"&&y===0)l=b;else if(R==="string")S=b;else if(R==="object")E=b;else throw new TypeError("argument #"+(y+1)+" unsupported type "+R)}(typeof l!="number"||!r.message[l]&&(l<400||l>=600))&&(l=500);var v=g[l]||g[c(l)];u||(u=v?new v(S):new Error(S||r.message[l]),Error.captureStackTrace(u,g)),(!v||!(u instanceof v)||u.status!==l)&&(u.expose=l<500,u.status=u.statusCode=l);for(var D in E)D!=="status"&&D!=="statusCode"&&(u[D]=E[D]);return u}function C(){function u(){throw new TypeError("cannot construct abstract class")}return n(u,Error),u}function A(u,S,l){var E=O(S);function y(b){var R=b!=null?b:r.message[l],v=new Error(R);return Error.captureStackTrace(v,y),t(v,y.prototype),Object.defineProperty(v,"message",{enumerable:!0,configurable:!0,value:R,writable:!0}),Object.defineProperty(v,"name",{enumerable:!1,configurable:!0,value:E,writable:!0}),v}return n(y,u),_(y,E),y.prototype.status=l,y.prototype.statusCode=l,y.prototype.expose=!0,y}function $(u){return function(l){return!l||typeof l!="object"?!1:l instanceof u?!0:l instanceof Error&&typeof l.expose=="boolean"&&typeof l.statusCode=="number"&&l.status===l.statusCode}}function T(u,S,l){var E=O(S);function y(b){var R=b!=null?b:r.message[l],v=new Error(R);return Error.captureStackTrace(v,y),t(v,y.prototype),Object.defineProperty(v,"message",{enumerable:!0,configurable:!0,value:R,writable:!0}),Object.defineProperty(v,"name",{enumerable:!1,configurable:!0,value:E,writable:!0}),v}return n(y,u),_(y,E),y.prototype.status=l,y.prototype.statusCode=l,y.prototype.expose=!1,y}function _(u,S){var l=Object.getOwnPropertyDescriptor(u,"name");l&&l.configurable&&(l.value=S,Object.defineProperty(u,"name",l))}function q(u,S,l){S.forEach(function(y){var b,R=s(r.message[y]);switch(c(y)){case 400:b=A(l,R,y);break;case 500:b=T(l,R,y);break}b&&(u[y]=b,u[R]=b)})}function O(u){return u.substr(-5)!=="Error"?u+"Error":u}})(Ze);const ir=Ze.exports;var G=(e=>(e.TEXT="text",e.IMAGE="image",e.CARD="card",e.CAROUSEL="carousel",e))(G||{});const kt={type:"indicator"},jt={type:"actions"},Vt=(e,t)=>N.exports.useMemo(()=>{const r=e.flatMap(s=>[kt,{type:"message",message:s}]),n=t?[jt]:[];return[...r,...n]},[]),Yt=({messages:e,messageDelay:t,isAnimated:r,hasActions:n,onAnimationEnd:s})=>{const c=r&&e.length,[g,C]=N.exports.useState(!1),[A,$]=N.exports.useState(!c),[T,_]=N.exports.useState(c?[]:e),q=Vt(e,n);return N.exports.useEffect(()=>{if(!c)return;const O=[...q];let u;const S=E=>{u=setTimeout(()=>{E()},t/2)},l=()=>{const E=O.shift();!E||Je(E).with({type:"message"},({message:y})=>{C(!1),_(b=>[...b,y]),S(l),O.length||s()}).with({type:"indicator"},()=>{C(!0),S(l)}).with({type:"actions"},()=>{C(!1),$(!0),s()}).exhaustive()};return l(),()=>{clearTimeout(u)}},[]),{showIndicator:g,showActions:A,visibleMessages:T}},Qe=M("div",{display:"flex",flexWrap:"wrap",marginBottom:"$5",padding:"0 $5 0 34px",[`& ${J.Base}`]:{height:"unset",paddingTop:7,paddingBottom:7,marginTop:8,marginRight:8,whiteSpace:"normal",textAlign:"start"}}),Ee=M("div",{display:"flex",[`& ${z.Container}`]:{visibility:"hidden",alignSelf:"flex-end",margin:"0 8px 4px 0"},[`& ${Z.Container}`]:{alignSelf:"center",whiteSpace:"nowrap",marginLeft:8,opacity:"0%",trans:["opacity"]},[`&:hover ${Z.Container}`]:{opacity:"100%"},variants:{withImage:{true:{[`& ${z.Container}`]:{visibility:"visible"}}},scrollable:{true:{overflowX:"scroll",flexShrink:0,marginRight:"2.5px"}},center:{true:{alignItems:"center"}}}}),et=M("div",{display:"flex",flexDirection:"column",flexShrink:0,[`& ${oe.Container}`]:{marginBottom:"$1",maxWidth:248,"&:last-of-type":{marginBottom:0}}}),de=({image:e})=>k(Ee,{withImage:!0,center:!0,children:[m(z,{image:e}),m(ht,{})]}),tt=de;try{de.displayName="Indicator",de.__docgenInfo={description:"",displayName:"Indicator",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/Indicator.tsx#Indicator"]={docgenInfo:de.__docgenInfo,name:"Indicator",path:"src/components/SystemResponse/Indicator.tsx#Indicator"})}catch{}const pe=({image:e,timestamp:t,messages:r,messageDelay:n,actions:s=[],isAnimated:c=!1,onAnimationEnd:g=wt})=>{const[C,A]=N.exports.useState(!1),{showIndicator:$,showActions:T,visibleMessages:_}=Yt({messages:r,messageDelay:n,isAnimated:c,hasActions:!!s.length,onAnimationEnd:g}),q=()=>A(!0);return Xe([_.length]),r.length?k(Ne,{children:[_.map((O,u)=>k(Ee,{withImage:!$&&u===_.length-1,scrollable:O.type===G.CAROUSEL,children:[m(z,{image:e}),m(et,{children:Je(O).with({type:G.TEXT},({text:S})=>m(oe,{from:"system",children:S},u)).with({type:G.IMAGE},({url:S})=>m(mt,{image:S})).with({type:G.CARD},S=>m(pt,{...Pe(S,["type"])})).with({type:G.CAROUSEL},S=>m(ft,{...Pe(S,["type"])})).otherwise(()=>null)}),m(Z,{value:t})]},u)),T&&!C&&m(Qe,{children:s.map(({label:O,onClick:u},S)=>m(J,{variant:"secondary",onClick:He(u,q),children:O},S))}),$&&m(tt,{image:e})]}):null},W=Object.assign(pe,{Message:G,Container:Ee,List:et,Actions:Qe,Indicator:tt});try{pe.displayName="SystemResponse",pe.__docgenInfo={description:"",displayName:"SystemResponse",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"Date"}},messages:{defaultValue:null,description:"",name:"messages",required:!0,type:{name:"MessageProps[]"}},messageDelay:{defaultValue:null,description:"",name:"messageDelay",required:!0,type:{name:"number"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"ResponseActionProps[]"}},isAnimated:{defaultValue:{value:"false"},description:"",name:"isAnimated",required:!1,type:{name:"boolean"}},onAnimationEnd:{defaultValue:{value:"R.noop"},description:"",name:"onAnimationEnd",required:!1,type:{name:"VoidFunction"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/index.tsx#SystemResponse"]={docgenInfo:pe.__docgenInfo,name:"SystemResponse",path:"src/components/SystemResponse/index.tsx#SystemResponse"})}catch{}const rt=M("aside",{typo:{size:"12px",height:"17px"},color:"$darkGrey",marginTop:"$2"}),nt=M("div",{display:"flex",flexDirection:"column",flexShrink:0,alignItems:"flex-end",[`& ${oe.Container}`]:{maxWidth:282},[`& > ${je.Container}`]:{marginTop:"$1"}}),ot=M("div",{display:"flex",width:"100%",alignItems:"center",[`& ${Z.Container}`]:{flexGrow:1,marginRight:8,textAlign:"end",opacity:"0%",trans:["opacity"]},[`&:hover ${Z.Container}`]:{opacity:"100%"}}),fe=({message:e,timestamp:t,debug:r})=>{var n,s;return Xe(),k(nt,{children:[k(ot,{children:[m(Z,{value:t}),m(oe,{from:"user",children:e})]}),r&&k(Ne,{children:[m(rt,{children:r.message}),r.reason&&m(je,{label:(n=r.action)==null?void 0:n.label,onClick:(s=r.action)==null?void 0:s.onClick,orientation:"right",children:r.reason})]})]})},te=Object.assign(fe,{Container:nt,Debug:rt,Row:ot});try{fe.displayName="UserResponse",fe.__docgenInfo={description:"",displayName:"UserResponse",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"Date"}},debug:{defaultValue:null,description:"",name:"debug",required:!1,type:{name:"DebugResponseProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/UserResponse/index.tsx#UserResponse"]={docgenInfo:fe.__docgenInfo,name:"UserResponse",path:"src/components/UserResponse/index.tsx#UserResponse"})}catch{}const $e=10,he=M("div",{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:0,backgroundColor:"$shadow12"}),we=M("article",{position:"relative",display:"flex",flexDirection:"column",width:380,borderRadius:"$2",overflow:"hidden",backgroundColor:"$white",boxShadow:"0 2px 48px rgba(19,33,68,0.12), 0 0 0 1px $shadow4",[`& ${he}`]:{opacity:0,pointerEvents:"none",trans:["opacity"]},[`& ${_e.Container}`]:{position:"absolute",bottom:0,width:"100%",boxSizing:"border-box",paddingBottom:`calc($3 + ${$e}px)`,transition:"transform 320ms cubic-bezier(0.45, 1.29, 0.64, 1)",transform:`translateY(calc(100% + ${$e}px))`},variants:{withPrompt:{true:{[`& ${he}`]:{opacity:1,pointerEvents:"auto"},[`& ${_e.Container}`]:{transform:`translateY(${$e}px)`}}}}}),at={display:"flex",justifyContent:"center",typo:{size:12},color:"$darkGrey"},Re=M("div",{...at}),it=M("main",{display:"flex",flexDirection:"column",height:"100%",overflowY:"scroll",overflowX:"hidden",paddingBottom:"$3",[`
    & ${W.List} > *,
    & ${oe.Container},
    & > ${W.Actions}
  `]:{anim:[qe]},[`
    & > ${te.Container},
    & > ${W.Container}
  `]:{padding:"0 $5"},[`& > ${W.Actions}`]:{padding:"0 $5 0 54px"},[`& ${W.Container}`]:{marginBottom:"$1","&:last-of-type":{marginBottom:0}},[`& ${te.Container} + ${te.Container}`]:{marginTop:"$1"},[`
    & ${W.Container} + ${te.Container},
    & ${te.Container} + ${W.Container}
  `]:{marginTop:"$5"},[`& ${Re}`]:{marginTop:"$3",marginBottom:8}}),st=M("div",{flexGrow:1}),ut=M("span",{...at,paddingBottom:"$3",anim:[qe]}),me=({hasEnded:e,title:t,image:r,description:n,startTime:s,isLoading:c,onMinimize:g,onEnd:C,onStart:A,onSend:$,children:T})=>{const _=_t(s),q=N.exports.useRef(null),[O,u]=N.exports.useState(!1),S=E=>{e?C==null||C(E):u(!0)},l=()=>u(!1);return c?m(we,{children:m(dt,{})}):k(we,{withPrompt:O,children:[m($t,{title:t,image:r,actions:[{svg:"minus",onClick:g},{svg:"close",onClick:S}]}),m(it,{ref:q,children:k(le,{target:q,children:[m(gt,{name:t,image:r,description:n}),m(st,{}),m(ut,{children:_}),T,e&&m(Re,{children:"You have ended the chat"})]})}),m(St,{hasEnded:e,onStart:A,onSend:$}),m(he,{}),m(_e,{accept:{label:"End Chat",type:"warn",onClick:He(C,l)},cancel:{label:"Cancel",onClick:l}})]})},sr=Object.assign(N.exports.memo(me),{Container:we,Dialog:it,Overlay:he,Spacer:st,Status:Re,Timestamp:ut});try{me.displayName="Chat",me.__docgenInfo={description:"",displayName:"Chat",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},startTime:{defaultValue:null,description:"",name:"startTime",required:!0,type:{name:"Date"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},onMinimize:{defaultValue:null,description:"",name:"onMinimize",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"HeaderActionProps[]"}},hasEnded:{defaultValue:null,description:"",name:"hasEnded",required:!1,type:{name:"boolean | undefined"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"((message: string) => void) | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Chat/index.tsx#Chat"]={docgenInfo:me.__docgenInfo,name:"Chat",path:"src/components/Chat/index.tsx#Chat"})}catch{}export{gt as A,sr as C,St as F,$t as H,Je as K,_e as P,W as S,te as U,ir as c,Pe as o};
//# sourceMappingURL=index.a9a0d5b7.js.map
