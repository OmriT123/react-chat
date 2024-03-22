import{r as a,R as w}from"./index.25ad6385.js";import{A as ve}from"./index.020d6ec1.js";import{K as te,C as A,U as Se,o as q,S as R,a as oe}from"./index.022fc750.js";import{V as _e,M as Re}from"./fixtures.79220d47.js";import"./index.d7516c38.js";import{e as Ee,f as se,c as $,d as re,S as I,g as M}from"./index.33bc379d.js";import"./index.484a71f2.js";import{b as be,s as d,a as we}from"./animation.fdae6ac9.js";import"./index.cc2dc698.js";import"./index.3293552c.js";import"./index.14a87462.js";import{I as ae}from"./index.a988b399.js";import"./index.8dc73ce9.js";import"./index.c599378f.js";import{L as ne}from"./index.b81f2a00.js";import{j as r}from"./jsx-runtime.264ec44b.js";import"./index.819c1879.js";import"./index.4d2fc52f.js";import{t as E,C as b}from"./tag.acfbb551.js";import"./index.85e49540.js";import"./index.0cf33758.js";import"./index.73f35dfe.js";import"./index.6ea3386c.js";import"./functional.2e4761c3.js";import"./index.067252bc.js";import"./_createSet.6d7dfaaa.js";import"./_baseToString.b9e23acf.js";import"./is-plain-object.3669604d.js";import"./variants.1b0b2ced.js";import"./top-caret.6b52ad3c.js";function Ie(e){return!!e&&!Array.isArray(e)&&typeof e=="object"}const O=e=>{const t=s=>()=>console.warn(e(s));return{open:t("open"),hide:t("hide"),show:t("show"),close:t("close"),interact:t("interact"),proactive:{clear:t("proactive.clear"),push:t("proactive.push")}}},ie=(e,t,s)=>a.exports.useEffect(()=>{if(!Ie(e))return;const o=O(i=>`Method '${i}' has no effect in this mode.`),n=t();return Object.assign(e,{...o,...n,proactive:{...o.proactive,...n.proactive}}),s==null||s(),()=>{const i=O(c=>`Method '${c}' has no effect after 'destroy' has been called. Call 'load' to render the chat and restore this method.`);Object.assign(e,i)}},[]),ce=e=>{const[t,s]=a.exports.useState("");return a.exports.useEffect(()=>{e!=null&&e.color&&s(be({color:e.color}))},[e==null?void 0:e.color]),t},Me=async(e,t)=>{const s=document.createElement("link"),o=new Promise((n,i)=>{s.onload=n,s.onerror=i});s.rel="stylesheet",s.href=e,t.appendChild(s),await o},le=(e,t)=>{const[s,o]=a.exports.useState(!1);return a.exports.useEffect(()=>{if(!e||s||!t)return;if(!e.stylesheet){o(!0);return}const n=Array.isArray(e.stylesheet)?e.stylesheet[0]:e.stylesheet;(async()=>(await Me(n,t).catch(i=>{console.error(`failed to load stylesheet: ${e.stylesheet}`),console.error(i)}),o(!0)))()},[e]),s};const Te=E(b.PROACTIVE_CLOSE),g=d(Te("div"),{width:32,height:32,borderRadius:"$round",display:"flex",justifyContent:"center",alignItems:"center",color:"#656D75",cursor:"pointer",background:"$white",boxShadow:"$surfaceZ1Light",[`& ${ae.Frame}`]:{width:10,height:10},["&:hover, &:active"]:{color:"#2B3239"}}),pe=({...e})=>r.exports.jsx(g,{...e,children:r.exports.jsx(ae,{svg:"closeV2"})});try{g.displayName="CloseContainer",g.__docgenInfo={description:"",displayName:"CloseContainer",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"never"}}}}}catch{}const je=E(b.PROACTIVE_MESSAGE),x=d(je("div"),{padding:"11px 16px 10px 16px",maxWidth:256,color:"#1A1E23",boxShadow:"$surfaceZ1Light",borderRadius:"$2",background:"$white",typo:{size:14}});try{x.displayName="MessageContainer",x.__docgenInfo={description:"",displayName:"MessageContainer",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"never"}}}}}catch{}try{Message.displayName="Message",Message.__docgenInfo={description:"",displayName:"Message",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"never"}}}}}catch{}const Ae=E(b.PROACTIVE),T=d("div",{display:"flex",flexDirection:"column",gap:8,margin:"$4 0",alignItems:"inherit",[`& ${x}`]:{...we({duration:150,delay:0})}}),j=d(Ae("div"),{position:"absolute",bottom:"100%",width:256,display:"flex",flexDirection:"column",[`& ${g}`]:{opacity:0},["&:hover"]:{[`& ${g}`]:{opacity:1}}}),$e=({side:e,messages:t})=>{const[s,o]=w.useState(!1),n=w.useMemo(()=>t.map((i,c)=>te(i).with({type:Ee.TEXT},({payload:l})=>r.exports.jsx(x,{children:String(l.message)},c)).otherwise(()=>null)),[t]);return w.useEffect(()=>{!n.length||o(!1)},[n]),s||!n.length?null:r.exports.jsxs(j,{style:{[e]:0,alignItems:e===se.ChatPosition.LEFT?"start":"end"},children:[r.exports.jsx(pe,{onClick:()=>o(!0)}),r.exports.jsx(T,{children:n})]})},Pe=Object.assign($e,{Message:x,Close:pe});try{T.displayName="ProactiveMessageContainer",T.__docgenInfo={description:"",displayName:"ProactiveMessageContainer",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"never"}}}}}catch{}try{j.displayName="ProactiveContainer",j.__docgenInfo={description:"",displayName:"ProactiveContainer",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"never"}}}}}catch{}const de=d("div",{height:"100%",[`& ${A.Container}`]:{height:"100%"}}),Le=({className:e})=>{const t=a.exports.useContext($),s=a.exports.useContext(re),{assistant:o,config:n}=t,i=a.exports.useCallback(()=>{t.setStatus(I.ENDED),t.close()},[]),c=a.exports.useCallback(l=>{const p=s.session.turns[l-1];return(p==null?void 0:p.type)===M.USER?p:null},[s.session.turns]);return r.exports.jsx(de,{className:e,children:r.exports.jsxs(A,{title:o.title,description:o.description,image:o.image,avatar:o.avatar,withWatermark:o.watermark,startTime:s.session.startTime,hasEnded:t.isStatus(I.ENDED),isLoading:t.isStatus(I.IDLE)&&s.session.turns.length===0&&n.autostart,onStart:t.launch,onEnd:i,onSend:t.reply,onMinimize:t.close,children:[s.session.turns.map((l,p)=>te(l).with({type:M.USER},({id:u,...m})=>a.exports.createElement(Se,{...q(m,["type"]),key:u})).with({type:M.SYSTEM},({id:u,...m})=>r.exports.jsx(R,{...q(m,["type"]),feedback:o.feedback?{onClick:C=>{t.feedback(C,m.messages,c(p))}}:void 0,avatar:o.avatar,isLast:p===s.session.turns.length-1},u)).exhaustive()),s.indicator&&r.exports.jsx(R.Indicator,{avatar:o.avatar})]})})},ue=Object.assign(Le,{Container:de}),V=({shadowRoot:e,chatAPI:t,ready:s})=>{const{assistant:o,interact:n,open:i}=a.exports.useContext($),c=ce(o),l=le(o,e);return ie(t,()=>(console.info("Methods open, close, hide, show, proactive.clear, proactive.push have no effect in this mode."),{interact:n}),s),a.exports.useEffect(()=>{i()},[]),l?r.exports.jsx(ue,{className:c}):null};try{V.displayName="ChatEmbed",V.__docgenInfo={description:"",displayName:"ChatEmbed",props:{shadowRoot:{defaultValue:null,description:"",name:"shadowRoot",required:!0,type:{name:"ShadowRoot"}},chatAPI:{defaultValue:null,description:"",name:"chatAPI",required:!0,type:{name:"any"}},ready:{defaultValue:null,description:"",name:"ready",required:!1,type:{name:"() => void"}}}}}catch{}const De=380,Ne=800,P=E(b.WIDGET),h=d(P("div","chat"),{width:De,overflow:"hidden",borderRadius:"$2",boxShadow:"0 2px 48px rgba(19,33,68,0.16), 0 0 0 1px $shadow4",height:"90%",maxHeight:Ne,"@mobile":{position:"fixed",height:"unset",maxHeight:"unset",width:"unset",left:0,right:0,top:0,bottom:0,borderRadius:0,boxShadow:"none"}}),f=d(P("div","launcher"),{}),H={opacity:1,pointerEvents:"auto",transform:"translateY(0%)",transition:"transform 300ms cubic-bezier(0, 0.95, 0.1, 1), opacity 150ms linear"},W={opacity:0,pointerEvents:"none",transform:"translateY(100%)",transition:"transform 300ms cubic-bezier(0.85, 0, 0.6, 1), opacity 150ms linear"},me=d(P("div"),{position:"fixed",inset:0,"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",pointerEvents:"none",zIndex:1e4,[`
    & > ${f},
    & > ${h}
  `]:{position:"absolute"},variants:{withChat:{true:{[`& > ${h}`]:{...H},[`& > ${f}`]:{...W}},false:{[`& > ${h}`]:{...W},[`& > ${f}`]:{...H}}},isHidden:{true:{display:"none"}}}}),ke=({shadowRoot:e,chatAPI:t,ready:s})=>{var k;const{assistant:o,open:n,close:i,interact:c}=a.exports.useContext($),{isOpen:l}=a.exports.useContext(re),[p,u]=a.exports.useState(!1),[m,C]=a.exports.useState([]),ge=a.exports.useMemo(()=>window.matchMedia("(max-width: 768px)").matches,[]),xe=ce(o);ie(t,()=>({open:n,close:i,hide:()=>u(!0),show:()=>u(!1),interact:c,proactive:{clear:()=>C([]),push:(...Ce)=>C(ye=>[...ye,...Ce])}}),s);const D=(k=o==null?void 0:o.position)!=null?k:se.ChatPosition.RIGHT,N={bottom:o==null?void 0:o.spacing.bottom,[D]:o==null?void 0:o.spacing.side};return le(o,e)?r.exports.jsxs(me,{withChat:l,isHidden:p,className:xe,children:[!!o&&r.exports.jsxs(f,{style:N,children:[r.exports.jsx(Pe,{side:D,messages:m}),r.exports.jsx(ne,{onClick:n,image:o.launcher})]}),r.exports.jsx(h,{style:ge?{}:N,children:r.exports.jsx(ue,{})})]}):null},qe=Object.assign(ke,{Launcher:ne,Container:me,ChatContainer:h,LauncherContainer:f}),gt={component:oe,title:"Components/Carousel"},he=Re,fe={title:"First Card",description:"Lorem ipsum dolor sit amet",image:he,actions:[{request:{},name:"First Button"},{request:{},name:"Second Button"},{request:{},name:"Third Button"}]},L=[fe,{title:"Second Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:he},{title:"Third Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",actions:[{request:{},name:"Fourth Button"},{request:{},name:"Fifth Button"}]}],y={args:{cards:[fe]}},v={args:{cards:L}},S={args:{cards:L},render:e=>{const t=a.exports.useRef(null),s=a.exports.useRef(null);return r.exports.jsx(qe.ChatContainer,{children:r.exports.jsxs(A.Dialog,{children:[r.exports.jsx(R.Controls,{ref:s}),r.exports.jsxs(R.Container,{ref:t,withImage:!0,scrollable:!0,children:[r.exports.jsx(ve,{avatar:_e}),r.exports.jsx(oe,{...e,controlsRef:s,containerRef:t})]})]})})}},_={args:{cards:L}};var F,U,z;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    cards: [FIRST_CARD]
  }
}`,...(z=(U=y.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var B,G,Y;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    cards: MULTIPLE_CARDS
  }
}`,...(Y=(G=v.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var K,X,Z;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    cards: MULTIPLE_CARDS
  },
  render: args => {
    const containerRef = useRef<HTMLDivElement>(null);
    const controlsRef = useRef<HTMLDivElement>(null);
    return <ChatWidget.ChatContainer>
        <Chat.Dialog>
          <SystemResponse.Controls ref={controlsRef} />
          <SystemResponse.Container ref={containerRef} withImage scrollable>
            <Avatar avatar={VF_ICON} />
            <Carousel {...args} controlsRef={controlsRef} containerRef={containerRef} />
          </SystemResponse.Container>
        </Chat.Dialog>
      </ChatWidget.ChatContainer>;
  }
}`,...(Z=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var Q,J,ee;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    cards: MULTIPLE_CARDS
  }
}`,...(ee=(J=_.parameters)==null?void 0:J.docs)==null?void 0:ee.source}}};export{S as ControlsTemplate,v as MultipleCards,y as SingleCard,_ as WithControls,gt as default};
