import{a as u,c as f,o as a,q as _,g as s,e as i,f as e,H as p,b as g,s as h,i as o,p as y,L as x,m as b,y as n}from"./app.00439c91.js";import{_ as v}from"./Button.b7006ce7.js";import{_ as k}from"./Guest.53fd9b5c.js";const w=o("div",{class:"mb-4 text-lg text-gray-600 max-w-xl text-center"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-center text-green-600"},B=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},L=n(" Resend Verification Email "),N=n("Log Out"),T={__name:"VerifyEmail",props:{status:String},setup(r){const c=r,t=u(),d=()=>{t.post(route("verification.send"))},l=f(()=>c.status==="verification-link-sent");return(m,S)=>(a(),_(k,null,{default:s(()=>[i(e(p),{title:"Email Verification"}),w,e(l)?(a(),g("div",V," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),o("form",{onSubmit:b(d,["prevent"])},[o("div",E,[i(v,{class:y([{"opacity-25":e(t).processing},"mr-5"]),disabled:e(t).processing},{default:s(()=>[L]),_:1},8,["class","disabled"]),i(e(x),{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[N]),_:1},8,["href"])])],40,B)]),_:1}))}};export{T as default};