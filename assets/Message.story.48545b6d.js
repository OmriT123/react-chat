import{M as t}from"./index.a6b9fc87.js";import{j as o}from"./jsx-runtime.d6763aa3.js";import"./variants.3a80f483.js";import"./animation.546ab023.js";import"./iframe.928d36bb.js";import"./top-caret.3e950588.js";const d={title:"Core/Message",component:t,argTypes:{variant:{options:Object.values(t.Variant),control:{type:"radio"},defaultValue:t.Variant.CHAT},from:{if:{arg:"variant",eq:t.Variant.CHAT},options:["system","user"],control:{type:"radio"},defaultValue:"system"},orientation:{if:{arg:"variant",eq:t.Variant.DEBUG},options:["left","right"],control:{type:"radio"},defaultValue:"left"}},args:{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}},a=i=>o(t,{...i}),r=a.bind({});r.args={variant:t.Variant.CHAT,from:"system"};const s=a.bind({});s.args={...r.args,from:"user"};const e=a.bind({});e.args={variant:t.Variant.DEBUG,orientation:"left"};const n=a.bind({});n.args={...e.args,orientation:"right"};export{e as DebugLeft,n as DebugRight,r as SystemChat,s as UserChat,d as default};
//# sourceMappingURL=Message.story.48545b6d.js.map