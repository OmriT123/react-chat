import{S as d,C as a}from"./index.5c5c216c.js";import{j as s}from"./jsx-runtime.f123a8ac.js";import"./index.32117bcb.js";import"./theme.7e062eb5.js";import"./iframe.a445ce45.js";import"./index.40c1176b.js";import"./variants.0a258b27.js";import"./index.a0f2de54.js";import"./index.dad1ae78.js";import"./index.552b7855.js";import"./top-caret.9c150d64.js";import"./index.8ab84fa6.js";import"./index.e1df97ee.js";import"./index.4ebe8a8a.js";import"./index.e0d01909.js";import"./index.6fb5db68.js";import"./index.710baff7.js";import"./index.c73cffdd.js";import"./index.425eac2a.js";import"./index.85fe3789.js";import"./index.9ef73f74.js";const e="https://source.unsplash.com/random/248x150",o={type:"text",text:"Lorem ipsum dolor sit amet consectetur"},u={type:"card",title:"Card Message",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:e},P={title:"Components/Chat/SystemResponse",component:d,args:{timestamp:new Date,image:"https://source.unsplash.com/random/26x26",messageDelay:2e3},argTypes:{timestamp:{control:{type:"date"}}},excludeStories:["RawTemplate"]},L=i=>s(d,{...i}),t=i=>s(a.Container,{children:s(a.Dialog,{css:{padding:"64px 0",display:"flex",flexDirection:"column",justifyContent:"center"},children:s(L,{...i})})}),b=t.bind({});b.args={messages:[{type:"text",text:"Lorem ipsum dolor"}]};const x=t.bind({});x.args={messages:[{type:"text",text:"consecteturaconsecteturaconsecteturaconsecteturaconsecteturaconsectetura"}]};const y=t.bind({});y.args={messages:[o]};const C=t.bind({});C.args={messages:[o,o,o],isLive:!0};const R=t.bind({});R.args={...C.args,actions:[{label:"Button One"},{label:"Button Two"},{label:"Button Three"}]};const T=t.bind({});T.args={messages:[{type:"image",url:e}]};const h=t.bind({});h.args={messages:[u]};const S=t.bind({});S.args={messages:[{...u,actions:[{label:"First Button"},{label:"Second Button"},{label:"Third Button"}]}]};const B=t.bind({});B.args={messages:[{type:"carousel",cards:[{title:"First Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:e},{title:"Second Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",image:e,actions:[{label:"First Button"},{label:"Second Button"}]},{title:"Third Card",description:"Lorem ipsum dolor sit amet",image:e,actions:[{label:"First Button"},{label:"Second Button"},{label:"Third Button"}]}]}]};const f=t.bind({});var r,n,m,c,p,l,g;f.args={messages:[...(r=b.args.messages)!=null?r:[],...(n=x.args.messages)!=null?n:[],...(m=y.args.messages)!=null?m:[],...(c=T.args.messages)!=null?c:[],...(p=h.args.messages)!=null?p:[],...(l=S.args.messages)!=null?l:[],...(g=B.args.messages)!=null?g:[]]};export{S as ActionableCard,R as ActionableText,h as Card,B as Carousel,T as Image,C as Live,y as MultilineText,f as Multiple,L as RawTemplate,b as SimpleText,x as WrappingText,P as default};
//# sourceMappingURL=SystemResponse.story.e21dac75.js.map