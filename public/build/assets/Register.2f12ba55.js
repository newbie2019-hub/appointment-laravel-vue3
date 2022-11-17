import{a as g,b as v,r as y,s as V,h as d,i as u,f as l,g as e,H as S,j as t,n as p,e as c,v as f,L as k,k as b,z as w}from"./app.c91643f5.js";import{_ as U}from"./Guest.1d936460.js";import{_ as m}from"./FloatingInput.e9ba1f8e.js";import{_ as N}from"./FloatingSelect.84ca6a3c.js";import{_ as i}from"./FormInput.e0d266c9.js";const j={class:"flex w-full"},C={class:"flex flex-col flex-1 h-screen items-center justify-center bg-white w-full text-left md:max-w-xl"},P={class:"w-full md:max-w-sm shadow-lg bg-white max-w-sm px-10 py-8 rounded-lg md:p-0 md:shadow-none"},$=t("p",{class:"text-2xl font-medium mt-2"},"Welcome, User",-1),A=t("p",{class:"text-sm mb-4"},"We need some of your information to proceed.",-1),B={class:"w-full relative flex gap-x-4 flex-wrap"},F=["onSubmit"],M={key:0},R={class:"flex flex-wrap"},E=t("p",{class:"font-medium"},"Personal Information",-1),L={class:"w-full"},W={class:"flex gap-x-2"},D={class:"w-1/2"},H={class:"w-1/2"},I={class:"w-full"},T={class:"flex w-full gap-x-2"},z={class:"w-1/2"},G=t("option",{value:"Male",class:"font-medium"},"Male",-1),O=t("option",{value:"Female",class:"font-medium"},"Female",-1),q={class:"w-1/2"},J={key:1},K={class:"flex flex-wrap"},Q=t("p",{class:"font-medium"},"Account Information",-1),X={class:"w-full"},Y={class:"w-full"},Z={class:"w-full"},ee={key:2},te=t("p",{class:"font-medium"},"Confirm Registration",-1),se=t("p",null,"Please confirm that all your inputs are correct. We do not share any of your informations to the public.",-1),oe=[te,se],le={id:"pagination",class:"w-full gap-x-4 mt-2"},ae={class:"text-sm mt-4 mb-2"},re=w(" Already have an account? "),de=w("Sign-in "),ne={class:"mt-3"},ie={class:"flex w-full justify-end"},me=["disabled"],ue=["disabled"],ce={key:1,type:"submit",class:"text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm"},fe=t("div",{class:"hidden md:block flex-1 w-96"},[t("img",{src:"images/alwayssmile.jpg",class:"h-screen object-fit w-full blur-[1px]",alt:""})],-1),he={__name:"Register",props:{errors:Object},setup(n){const _=g(),o=v({first_name:"",middle_name:"",last_name:"",gender:"",email:"",address:"",password:"",birthday:"",password_confirmation:"",terms:!1}),x=()=>{o.post(route("register"),{onFinish:()=>{o.reset("password","password_confirmation")},onSuccess:()=>{_.success(`Account created! 
Please check your email as your account 
status is still on pending`)},onError:()=>_.error("Some fields are incorrect or missing!")})};let r=y({currentStep:1,totalSteps:3});return(h,s)=>(u(),V(U,null,{default:d(()=>[l(e(S),{title:"Register"}),t("div",j,[t("div",C,[t("div",P,[$,A,t("div",B,[t("form",{onSubmit:p(x,["prevent"]),class:"pb-3"},[e(r).currentStep==1?(u(),c("div",M,[t("div",R,[E,t("div",L,[l(i,{for:"firstname",error:n.errors.first_name,label:"First Name",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"firstname",modelValue:e(o).first_name,"onUpdate:modelValue":s[0]||(s[0]=a=>e(o).first_name=a),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1},8,["error"])]),t("div",W,[t("div",D,[l(i,{for:"middlename",error:n.errors.middle_name,label:"Middle Name ",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"middlename",modelValue:e(o).middle_name,"onUpdate:modelValue":s[1]||(s[1]=a=>e(o).middle_name=a),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1},8,["error"])]),t("div",H,[l(i,{for:"lastname",error:n.errors.last_name,label:"Last Name",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"lastname",modelValue:e(o).last_name,"onUpdate:modelValue":s[2]||(s[2]=a=>e(o).last_name=a),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1},8,["error"])])]),t("div",I,[l(i,{for:"address",error:n.errors.address,label:"Address",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"address",modelValue:e(o).address,"onUpdate:modelValue":s[3]||(s[3]=a=>e(o).address=a),autofocus:"",autocomplete:"address"},null,8,["modelValue"])]),_:1},8,["error"])]),t("div",T,[t("div",z,[l(i,{for:"gender",error:n.errors.gender,label:"Gender",class:"mt-3"},{default:d(()=>[l(N,{modelValue:e(o).gender,"onUpdate:modelValue":s[4]||(s[4]=a=>e(o).gender=a)},{default:d(()=>[G,O]),_:1},8,["modelValue"])]),_:1},8,["error"])]),t("div",q,[l(i,{for:"gender",error:n.errors.gender,label:"Date of Birth",class:"mt-3"},{default:d(()=>[l(m,{type:"date",modelValue:e(o).birthday,"onUpdate:modelValue":s[5]||(s[5]=a=>e(o).birthday=a)},null,8,["modelValue"])]),_:1},8,["error"])])])])])):f("",!0),e(r).currentStep==2?(u(),c("div",J,[t("div",K,[Q,t("div",X,[l(i,{for:"email",error:n.errors.email,label:"Email Address",class:"mt-3"},{default:d(()=>[l(m,{type:"email",id:"email",modelValue:e(o).email,"onUpdate:modelValue":s[6]||(s[6]=a=>e(o).email=a),autofocus:"",autocomplete:"email"},null,8,["modelValue"])]),_:1},8,["error"])]),t("div",Y,[l(i,{for:"password",error:n.errors.password,label:"Password",class:"mt-3"},{default:d(()=>[l(m,{type:"password",id:"password",modelValue:e(o).password,"onUpdate:modelValue":s[7]||(s[7]=a=>e(o).password=a),autofocus:"",autocomplete:"new-password"},null,8,["modelValue"])]),_:1},8,["error"])]),t("div",Z,[l(i,{for:"password_confirmation",error:n.errors.password_confirmation,label:"Confirm Password",class:"mt-3"},{default:d(()=>[l(m,{type:"password",id:"password_confirmation",modelValue:e(o).password_confirmation,"onUpdate:modelValue":s[8]||(s[8]=a=>e(o).password_confirmation=a),autofocus:"",autocomplete:"new-password"},null,8,["modelValue"])]),_:1},8,["error"])])])])):f("",!0),e(r).currentStep==3?(u(),c("div",ee,oe)):f("",!0),t("div",le,[t("p",ae,[re,l(e(k),{href:h.route("login"),class:"text-gray-600 hover:text-blue-500 relative"},{default:d(()=>[de]),_:1},8,["href"])]),t("p",ne,"Step "+b(e(r).currentStep)+" of "+b(e(r).totalSteps),1)]),t("div",ie,[t("button",{type:"submit",disabled:e(r).currentStep==1,onClick:s[9]||(s[9]=p(a=>e(r).currentStep=e(r).currentStep-1,["prevent"])),class:"text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-neutral-900"}," Previous ",8,me),e(r).currentStep!=3?(u(),c("button",{key:0,type:"submit",disabled:e(r).currentStep==3,onClick:s[10]||(s[10]=p(a=>e(r).currentStep=e(r).currentStep+1,["prevent"])),class:"text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-neutral-900"}," Next ",8,ue)):f("",!0),e(r).currentStep==3?(u(),c("button",ce," Register ")):f("",!0)])],40,F)])])]),fe])]),_:1}))}};export{he as default};
