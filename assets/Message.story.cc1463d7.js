import{M as t}from"./index.6195ef6e.js";import{j as o}from"./jsx-runtime.d9826e37.js";import"./variants.3ef05be3.js";import"./animation.dc5b8a24.js";import"./iframe.fe2930f8.js";import"./tag.d9e21d07.js";import"./top-caret.a20d3c2a.js";const u={title:"Core/Message",component:t,argTypes:{variant:{options:Object.values(t.Variant),control:{type:"radio"},defaultValue:t.Variant.CHAT},from:{if:{arg:"variant",eq:t.Variant.CHAT},options:["system","user"],control:{type:"radio"},defaultValue:"system"},orientation:{if:{arg:"variant",eq:t.Variant.DEBUG},options:["left","right"],control:{type:"radio"},defaultValue:"left"}},args:{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}},a=i=>o(t,{...i}),r=a.bind({});r.args={variant:t.Variant.CHAT,from:"system"};const s=a.bind({});s.args={...r.args,from:"user"};const e=a.bind({});e.args={variant:t.Variant.DEBUG,orientation:"left"};const n=a.bind({});n.args={...e.args,orientation:"right"};export{e as DebugLeft,n as DebugRight,r as SystemChat,s as UserChat,u as default};
//# sourceMappingURL=Message.story.cc1463d7.js.map