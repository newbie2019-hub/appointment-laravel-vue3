import{a as n,o as d,q as l,g as t,e as o,f as a,H as c,i as e,p as f,m as p,y as _}from"./app.a9bf51d5.js";import{_ as u}from"./Button.7fbf1d30.js";import{_ as w}from"./Guest.e27423a4.js";import{_ as b,a as h}from"./Label.0afba1ff.js";import{_ as x}from"./ValidationErrors.1ac31e41.js";const y=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V=["onSubmit"],g={class:"flex justify-end mt-4"},v=_(" Confirm "),z={__name:"ConfirmPassword",setup(C){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return($,r)=>(d(),l(w,null,{default:t(()=>[o(a(c),{title:"Confirm Password"}),y,o(x,{class:"mb-4"}),e("form",{onSubmit:p(i,["prevent"])},[e("div",null,[o(b,{for:"password",value:"Password"}),o(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>a(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"])]),e("div",g,[o(u,{size:"sm",class:f(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>[v]),_:1},8,["class","disabled"])])],40,V)]),_:1}))}};export{z as default};