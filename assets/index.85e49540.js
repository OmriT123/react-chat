import{r as s}from"./index.25ad6385.js";import{a as A,c as I}from"./functional.2e4761c3.js";import{j as $}from"./jsx-runtime.264ec44b.js";import{s as N}from"./animation.fdae6ac9.js";function B(n,e){if(n==null)return{};var r={},t=Object.keys(n),o,i;for(i=0;i<t.length;i++)o=t[i],!(e.indexOf(o)>=0)&&(r[o]=n[o]);return r}var M=s.exports.useLayoutEffect,O=function(e){var r=s.exports.useRef(e);return M(function(){r.current=e}),r},R=function(e,r){if(typeof e=="function"){e(r);return}e.current=r},V=function(e,r){var t=s.exports.useRef();return s.exports.useCallback(function(o){e.current=o,t.current&&R(t.current,null),t.current=r,r&&R(r,o)},[r])},C={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},q=function(e){Object.keys(C).forEach(function(r){e.style.setProperty(r,C[r],"important")})},L=q,a=null,H=function(e,r){var t=e.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?t+r.borderSize:t-r.paddingSize};function P(n,e,r,t){r===void 0&&(r=1),t===void 0&&(t=1/0),a||(a=document.createElement("textarea"),a.setAttribute("tabindex","-1"),a.setAttribute("aria-hidden","true"),L(a)),a.parentNode===null&&document.body.appendChild(a);var o=n.paddingSize,i=n.borderSize,d=n.sizingStyle,g=d.boxSizing;Object.keys(d).forEach(function(p){var x=p;a.style[x]=d[x]}),L(a),a.value=e;var u=H(a,n);a.value=e,u=H(a,n),a.value="x";var h=a.scrollHeight-o,l=h*r;g==="border-box"&&(l=l+o+i),u=Math.max(l,u);var f=h*t;return g==="border-box"&&(f=f+o+i),u=Math.min(f,u),[u,h]}var T=function(){},G=function(e,r){return e.reduce(function(t,o){return t[o]=r[o],t},{})},U=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],Y=!!document.documentElement.currentStyle,K=function(e){var r=window.getComputedStyle(e);if(r===null)return null;var t=G(U,r),o=t.boxSizing;if(o==="")return null;Y&&o==="border-box"&&(t.width=parseFloat(t.width)+parseFloat(t.borderRightWidth)+parseFloat(t.borderLeftWidth)+parseFloat(t.paddingRight)+parseFloat(t.paddingLeft)+"px");var i=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),d=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth);return{sizingStyle:t,paddingSize:i,borderSize:d}},X=K;function F(n,e,r){var t=O(r);s.exports.useLayoutEffect(function(){var o=function(d){return t.current(d)};if(!!n)return n.addEventListener(e,o),function(){return n.removeEventListener(e,o)}},[])}var Z=function(e){F(window,"resize",e)},D=function(e){F(document.fonts,"loadingdone",e)},J=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],Q=function(e,r){var t=e.cacheMeasurements,o=e.maxRows,i=e.minRows,d=e.onChange,g=d===void 0?T:d,u=e.onHeightChange,h=u===void 0?T:u,l=B(e,J),f=l.value!==void 0,p=s.exports.useRef(null),x=V(p,r),z=s.exports.useRef(0),y=s.exports.useRef(),v=function(){var c=p.current,S=t&&y.current?y.current:X(c);if(!!S){y.current=S;var w=P(S,c.value||c.placeholder||"x",i,o),b=w[0],j=w[1];z.current!==b&&(z.current=b,c.style.setProperty("height",b+"px","important"),h(b,{rowHeight:j}))}},k=function(c){f||v(),g(c)};return s.exports.useLayoutEffect(v),Z(v),D(v),$.exports.jsx("textarea",{...l,onChange:k,ref:x})},ee=s.exports.forwardRef(Q);const E={width:"calc(100% - 42px)",borderRadius:"$1 0 0 $1",height:"42px",borderRightWidth:0,fontFamily:"$default",fontSize:"$2"},te={boxSizing:"border-box",border:"1px solid rgba(115,115,118,0.3)",backgroundColor:"$white",boxShadow:"0 1px 12px $shadow2",trans:["border-color"],resize:"none"},re={border:"1px solid rgba(115,115,118,0.5)"},W=N(ee,{...te,...E,padding:"11px $4 11px",color:"$black","&:focus":{...re,...E,outline:"none"},"&::placeholder":{color:"$darkGrey"}}),m=s.exports.forwardRef(({onValueChange:n,onChange:e,rows:r=1,...t},o)=>{const i=I(e,d=>n(d.target.value));return $.exports.jsx(W,{ref:o,...t,onChange:i,minRows:1,maxRows:5,style:{height:42}})}),de=Object.assign(m,{Controlled:A(m,{defaultValue:""}),Container:W});try{m.displayName="Textarea",m.__docgenInfo={description:"A textarea form control.",displayName:"Textarea",props:{value:{defaultValue:null,description:"The value being controlled by the component.",name:"value",required:!0,type:{name:"string"}},onValueChange:{defaultValue:null,description:"A callback that will be called with new values when the control is updated.",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}}}catch{}export{de as T,re as a,te as t};