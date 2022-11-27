import{u as h,a as y,r as V,o as u,q as S,g as d,e as l,f as t,H as k,i as e,m as p,b as c,s as f,j as b,L as U,y as x}from"./app.a9bf51d5.js";import{_ as N}from"./Guest.e27423a4.js";import{_ as m}from"./FloatingInput.cb12f430.js";import{_ as C}from"./FloatingSelect.2184c225.js";import{_ as n}from"./FormInput.c87e0c32.js";const j={class:"flex w-full"},A={class:"flex flex-col flex-1 h-screen items-center justify-center bg-white w-full text-left md:max-w-xl"},F={class:"w-full md:max-w-sm shadow-lg bg-white max-w-sm px-10 py-8 rounded-lg md:p-0 md:shadow-none"},P=e("p",{class:"text-2xl font-medium mt-2"},"Welcome, User",-1),R=e("p",{class:"text-sm mb-4"}," We need some of your information to proceed. ",-1),$={class:"w-full relative flex gap-x-4 flex-wrap"},B=["onSubmit"],D={key:0},L={class:"flex flex-wrap"},M=e("p",{class:"font-medium"}," Personal Information ",-1),E={class:"w-full"},I={class:"flex gap-x-2"},W={class:"w-1/2"},H={class:"w-1/2"},T={class:"w-full"},q={class:"w-full"},G={class:"flex w-full gap-x-2"},O={class:"w-1/2"},z=e("option",{value:"Male",class:"font-medium"}," Male ",-1),J=e("option",{value:"Female",class:"font-medium"}," Female ",-1),K={class:"w-1/2"},Q={key:1},X={class:"flex flex-wrap"},Y=e("p",{class:"font-medium"}," Account Information ",-1),Z={class:"w-full"},ee={class:"w-full"},te={class:"w-full"},se={class:"w-full"},oe=e("p",{class:"text-sm mt-3"},"Valid ID",-1),ae={class:"text-red-500 text-sm"},le={key:2},re=e("p",{class:"font-medium"},"Confirm Registration",-1),de=e("p",null," Please confirm that all your inputs are correct. We do not share any of your informations to the public. ",-1),ie=[re,de],ne={id:"pagination",class:"w-full gap-x-4 mt-2"},me={class:"text-sm mt-4 mb-2"},ue=x(" Already have an account? "),ce=x("Sign-in "),fe={class:"mt-3"},_e={class:"flex w-full justify-end"},pe=["disabled"],be=["disabled"],we={key:1,type:"submit",class:"text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm"},xe=e("div",{class:"hidden md:block flex-1 w-96"},[e("img",{src:"images/alwayssmile.jpg",class:"h-screen object-fit w-full blur-[1px]",alt:""})],-1),Se={__name:"Register",props:{errors:Object},setup(i){const w=h(),s=y({first_name:"",middle_name:"",last_name:"",gender:"",email:"",image_preview:"",valid_id:"",address:"",contact_number:"",password:"",birthday:"",password_confirmation:"",terms:!1}),g=_=>{if(s.valid_id=_.target.files[0],s.image_preview=_.target.files[0],!s.valid_id||!s.valid_id.type.match("image.*"))return!1;const o=new FileReader;o.onload=function(a){s.image_preview=a.target.result},o.readAsDataURL(s.image_preview)},v=()=>{s.post(route("register"),{onFinish:()=>{s.reset("password","password_confirmation")},onSuccess:()=>{w.success(`Account created! 
Please check your email as your account 
status is still on pending`)},onError:()=>w.error("Some fields are incorrect or missing!")})};let r=V({currentStep:1,totalSteps:3});return(_,o)=>(u(),S(N,null,{default:d(()=>[l(t(k),{title:"Register"}),e("div",j,[e("div",A,[e("div",F,[P,R,e("div",$,[e("form",{onSubmit:p(v,["prevent"]),class:"pb-3"},[t(r).currentStep==1?(u(),c("div",D,[e("div",L,[M,e("div",E,[l(n,{for:"firstname",error:i.errors.first_name,label:"First Name",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"firstname",modelValue:t(s).first_name,"onUpdate:modelValue":o[0]||(o[0]=a=>t(s).first_name=a),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",I,[e("div",W,[l(n,{for:"middlename",error:i.errors.middle_name,label:"Middle Name ",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"middlename",modelValue:t(s).middle_name,"onUpdate:modelValue":o[1]||(o[1]=a=>t(s).middle_name=a),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",H,[l(n,{for:"lastname",error:i.errors.last_name,label:"Last Name",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"lastname",modelValue:t(s).last_name,"onUpdate:modelValue":o[2]||(o[2]=a=>t(s).last_name=a),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1},8,["error"])])]),e("div",T,[l(n,{for:"contact_number",error:i.errors.contact_number,label:"Contact Number",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"contact_number",modelValue:t(s).contact_number,"onUpdate:modelValue":o[3]||(o[3]=a=>t(s).contact_number=a),autofocus:""},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",q,[l(n,{for:"address",error:i.errors.address,label:"Address",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"address",modelValue:t(s).address,"onUpdate:modelValue":o[4]||(o[4]=a=>t(s).address=a),autofocus:"",autocomplete:"address"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",G,[e("div",O,[l(n,{for:"gender",error:i.errors.gender,label:"Gender",class:"mt-3"},{default:d(()=>[l(C,{modelValue:t(s).gender,"onUpdate:modelValue":o[5]||(o[5]=a=>t(s).gender=a)},{default:d(()=>[z,J]),_:1},8,["modelValue"])]),_:1},8,["error"])]),e("div",K,[l(n,{for:"gender",error:i.errors.gender,label:"Date of Birth",class:"mt-3"},{default:d(()=>[l(m,{type:"date",modelValue:t(s).birthday,"onUpdate:modelValue":o[6]||(o[6]=a=>t(s).birthday=a)},null,8,["modelValue"])]),_:1},8,["error"])])])])])):f("",!0),t(r).currentStep==2?(u(),c("div",Q,[e("div",X,[Y,e("div",Z,[l(n,{for:"email",error:i.errors.email,label:"Email Address",class:"mt-3"},{default:d(()=>[l(m,{type:"email",id:"email",modelValue:t(s).email,"onUpdate:modelValue":o[7]||(o[7]=a=>t(s).email=a),autofocus:"",autocomplete:"email"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",ee,[l(n,{for:"password",error:i.errors.password,label:"Password",class:"mt-3"},{default:d(()=>[l(m,{type:"password",id:"password",modelValue:t(s).password,"onUpdate:modelValue":o[8]||(o[8]=a=>t(s).password=a),autocomplete:"new-password"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",te,[l(n,{for:"password_confirmation",error:i.errors.password_confirmation,label:"Confirm Password",class:"mt-3"},{default:d(()=>[l(m,{type:"password",id:"password_confirmation",modelValue:t(s).password_confirmation,"onUpdate:modelValue":o[9]||(o[9]=a=>t(s).password_confirmation=a),autocomplete:"new-password"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",se,[oe,e("input",{type:"file",id:"valid_id",onChange:g},null,32),e("p",ae,b(i.errors.valid_id),1)])])])):f("",!0),t(r).currentStep==3?(u(),c("div",le,ie)):f("",!0),e("div",ne,[e("p",me,[ue,l(t(U),{href:_.route("login"),class:"text-gray-600 hover:text-blue-500 relative"},{default:d(()=>[ce]),_:1},8,["href"])]),e("p",fe," Step "+b(t(r).currentStep)+" of "+b(t(r).totalSteps),1)]),e("div",_e,[e("button",{type:"submit",disabled:t(r).currentStep==1,onClick:o[10]||(o[10]=p(a=>t(r).currentStep=t(r).currentStep-1,["prevent"])),class:"text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-neutral-900"}," Previous ",8,pe),t(r).currentStep!=3?(u(),c("button",{key:0,type:"submit",disabled:t(r).currentStep==3,onClick:o[11]||(o[11]=p(a=>t(r).currentStep=t(r).currentStep+1,["prevent"])),class:"text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-neutral-900"}," Next ",8,be)):f("",!0),t(r).currentStep==3?(u(),c("button",we," Register ")):f("",!0)])],40,B)])])]),xe])]),_:1}))}};export{Se as default};