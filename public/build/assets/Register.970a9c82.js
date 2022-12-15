import{u as U,r as h,a as F,o as c,q as y,g as d,e as l,f as t,H as C,i as e,m as w,b as _,s as f,j as v,L as D,y as V}from"./app.b8a1a93f.js";import{_ as N}from"./Guest.d85700e3.js";import{_ as m}from"./FloatingInput.2348f682.js";import{_ as A}from"./FloatingSelect.fdcdf843.js";import{_ as i}from"./Modal.vue_vue_type_style_index_0_lang.ea330aa1.js";import{_ as $}from"./MedicalForm.0229fd46.js";import"./Radio.3ecffb41.js";import"./Button.c860ac69.js";import"./Modal.1c90be1c.js";const R={class:"flex w-full"},j={class:"flex flex-col flex-1 h-screen items-center justify-center bg-white w-full text-left md:max-w-xl"},M={class:"w-full md:max-w-sm shadow-lg bg-white max-w-sm px-10 py-8 rounded-lg md:p-0 md:shadow-none"},P=e("p",{class:"text-2xl font-medium mt-2"},"Welcome, User",-1),B=e("p",{class:"text-sm mb-4"}," We need some of your information to proceed. ",-1),E={class:"w-full relative flex gap-x-4 flex-wrap"},L=["onSubmit"],q={key:0},I={class:"flex flex-wrap"},W=e("p",{class:"font-medium"}," Personal Information ",-1),H={class:"w-full"},T={class:"flex gap-x-2"},G={class:"w-1/2"},O={class:"w-1/2"},z={class:"w-full"},J={class:"w-full"},K={class:"flex w-full gap-x-2"},Q={class:"w-1/2"},X=e("option",{value:"Male",class:"font-medium"}," Male ",-1),Y=e("option",{value:"Female",class:"font-medium"}," Female ",-1),Z={class:"w-1/2"},ee={key:1},te={class:"flex flex-wrap"},se=e("p",{class:"font-medium"}," Account Information ",-1),oe={class:"w-full"},ae={class:"w-full"},le={class:"w-full"},re={class:"w-full"},de=e("p",{class:"text-sm mt-3"},"Valid ID",-1),ne={class:"text-red-500 text-sm"},ie={key:2},me=e("p",{class:"font-medium"},"Confirm Registration",-1),ue=e("p",null," Please confirm that all your inputs are correct. We do not share any of your informations to the public. ",-1),ce=[me,ue],fe={id:"pagination",class:"w-full gap-x-4 mt-2"},_e={class:"text-sm mt-4 mb-2"},pe=V(" Already have an account? "),we=V("Sign-in "),be={class:"mt-3"},ve={class:"flex w-full justify-end"},xe=["disabled"],ge=["disabled"],he=e("div",{class:"hidden md:block flex-1 w-96"},[e("img",{src:"images/alwayssmile.jpg",class:"h-screen object-fit w-full blur-[1px]",alt:""})],-1),Ae={__name:"Register",props:{errors:Object},setup(n){const b=U(),p=h(!1),o=F({first_name:"",middle_name:"",last_name:"",gender:"",email:"",image_preview:"",valid_id:"",address:"",contact_number:"",password:"",birthday:"",password_confirmation:"",terms:!1,medFormData:{dental_questions:["","","","","","","","","","","","","","","","","","",""],medical_questions:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]}}),x=()=>{p.value=!p.value},S=async()=>{let u=!1,s=!1;if(o.medFormData.medical_questions.map(a=>{console.log("Data: ",a),(a==""||a==null)&&(u||(u=!0))}),o.medFormData.dental_questions.map(a=>{(a==""||a==null)&&(s||(s=!0))}),u||s)return b.error("All fiends are required for your records");x(),g()},k=u=>{if(o.valid_id=u.target.files[0],o.image_preview=u.target.files[0],!o.valid_id||!o.valid_id.type.match("image.*"))return!1;const s=new FileReader;s.onload=function(a){o.image_preview=a.target.result},s.readAsDataURL(o.image_preview)},g=()=>{o.post(route("register"),{onFinish:()=>{o.reset("password","password_confirmation")},onSuccess:()=>{b.success(`Account created! 
Please check your email as your account 
status is still on pending`)},onError:()=>b.error("Some fields are incorrect or missing!")})};let r=h({currentStep:1,totalSteps:3});return(u,s)=>(c(),y(N,null,{default:d(()=>[l(t(C),{title:"Register"}),e("div",R,[e("div",j,[e("div",M,[P,B,e("div",E,[e("form",{onSubmit:w(g,["prevent"]),class:"pb-3"},[t(r).currentStep==1?(c(),_("div",q,[e("div",I,[W,e("div",H,[l(i,{for:"firstname",error:n.errors.first_name,label:"First Name",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"firstname",modelValue:t(o).first_name,"onUpdate:modelValue":s[0]||(s[0]=a=>t(o).first_name=a),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",T,[e("div",G,[l(i,{for:"middlename",error:n.errors.middle_name,label:"Middle Name ",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"middlename",modelValue:t(o).middle_name,"onUpdate:modelValue":s[1]||(s[1]=a=>t(o).middle_name=a),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",O,[l(i,{for:"lastname",error:n.errors.last_name,label:"Last Name",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"lastname",modelValue:t(o).last_name,"onUpdate:modelValue":s[2]||(s[2]=a=>t(o).last_name=a),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1},8,["error"])])]),e("div",z,[l(i,{for:"contact_number",error:n.errors.contact_number,label:"Contact Number",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"contact_number",modelValue:t(o).contact_number,"onUpdate:modelValue":s[3]||(s[3]=a=>t(o).contact_number=a),autofocus:""},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",J,[l(i,{for:"address",error:n.errors.address,label:"Address",class:"mt-3"},{default:d(()=>[l(m,{type:"text",id:"address",modelValue:t(o).address,"onUpdate:modelValue":s[4]||(s[4]=a=>t(o).address=a),autofocus:"",autocomplete:"address"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",K,[e("div",Q,[l(i,{for:"gender",error:n.errors.gender,label:"Gender",class:"mt-3"},{default:d(()=>[l(A,{modelValue:t(o).gender,"onUpdate:modelValue":s[5]||(s[5]=a=>t(o).gender=a)},{default:d(()=>[X,Y]),_:1},8,["modelValue"])]),_:1},8,["error"])]),e("div",Z,[l(i,{for:"gender",error:n.errors.gender,label:"Date of Birth",class:"mt-3"},{default:d(()=>[l(m,{type:"date",modelValue:t(o).birthday,"onUpdate:modelValue":s[6]||(s[6]=a=>t(o).birthday=a)},null,8,["modelValue"])]),_:1},8,["error"])])])])])):f("",!0),t(r).currentStep==2?(c(),_("div",ee,[e("div",te,[se,e("div",oe,[l(i,{for:"email",error:n.errors.email,label:"Email Address",class:"mt-3"},{default:d(()=>[l(m,{type:"email",id:"email",modelValue:t(o).email,"onUpdate:modelValue":s[7]||(s[7]=a=>t(o).email=a),autofocus:"",autocomplete:"email"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",ae,[l(i,{for:"password",error:n.errors.password,label:"Password",class:"mt-3"},{default:d(()=>[l(m,{type:"password",id:"password",modelValue:t(o).password,"onUpdate:modelValue":s[8]||(s[8]=a=>t(o).password=a),autocomplete:"new-password"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",le,[l(i,{for:"password_confirmation",error:n.errors.password_confirmation,label:"Confirm Password",class:"mt-3"},{default:d(()=>[l(m,{type:"password",id:"password_confirmation",modelValue:t(o).password_confirmation,"onUpdate:modelValue":s[9]||(s[9]=a=>t(o).password_confirmation=a),autocomplete:"new-password"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",re,[de,e("input",{type:"file",id:"valid_id",onChange:k},null,32),e("p",ne,v(n.errors.valid_id),1)])])])):f("",!0),t(r).currentStep==3?(c(),_("div",ie,ce)):f("",!0),e("div",fe,[e("p",_e,[pe,l(t(D),{href:u.route("login"),class:"text-gray-600 hover:text-blue-500 relative"},{default:d(()=>[we]),_:1},8,["href"])]),e("p",be," Step "+v(t(r).currentStep)+" of "+v(t(r).totalSteps),1)]),e("div",ve,[e("button",{type:"submit",disabled:t(r).currentStep==1,onClick:s[10]||(s[10]=w(a=>t(r).currentStep=t(r).currentStep-1,["prevent"])),class:"text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-neutral-900"}," Previous ",8,xe),t(r).currentStep!=3?(c(),_("button",{key:0,type:"submit",disabled:t(r).currentStep==3,onClick:s[11]||(s[11]=w(a=>t(r).currentStep=t(r).currentStep+1,["prevent"])),class:"text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-neutral-900"}," Next ",8,ge)):f("",!0),t(r).currentStep==3?(c(),_("button",{key:1,onClick:s[12]||(s[12]=w(a=>p.value=!0,["prevent"])),class:"text-blue-500 hover:text-blue-700 hover:bg-blue-100 px-4 py-2 duration-200 ease-in-out rounded-lg text-sm"}," Register ")):f("",!0)])],40,L)])])]),p.value?(c(),y($,{key:0,data:t(o).medFormData,onEmitClose:x,onRegisterAccount:S},null,8,["data"])):f("",!0),he])]),_:1}))}};export{Ae as default};