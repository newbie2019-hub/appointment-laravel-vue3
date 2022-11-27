import{c as ce,r as S,u as Qe,a as ue,t as Ze,w as et,l as we,d as G,o as m,b as C,e as a,f as n,H as tt,g as s,F as K,h as be,i as e,j as p,k as Se,m as v,n as pe,p as st,q as x,s as h,v as ot,x as lt,y as c}from"./app.a9bf51d5.js";import{_ as at}from"./Authenticated.4410648f.js";import{_}from"./Button.7fbf1d30.js";import{_ as N}from"./FloatingInput.cb12f430.js";import{_ as k}from"./FormInput.c87e0c32.js";import{_ as ke}from"./FloatingSelect.2184c225.js";import{_ as B}from"./FloatingTextArea.83033eae.js";import{_ as Ce}from"./Chip.96b31716.js";import{P as nt}from"./Pagination.0a2a24dc.js";import{_ as M}from"./Modal.3db3b606.js";import{v as rt,_ as Ae}from"./main.fb99ac61.js";import{f as me,c as Pe,s as it,a as X}from"./Utilities.5f54765f.js";import{_ as dt}from"./Calendar.538015ce.js";import{s as Ve}from"./vue-multiselect.esm.60a90da5.js";import{h as P}from"./moment.9709ab41.js";/* empty css                                              */var Fe={};Object.defineProperty(Fe,"__esModule",{value:!0});function Q(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Q=function(d){return typeof d}:Q=function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},Q(i)}var qe="https://js.stripe.com/v3",ct=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,Me="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",ut=function(){for(var d=document.querySelectorAll('script[src^="'.concat(qe,'"]')),f=0;f<d.length;f++){var y=d[f];if(!!ct.test(y.src))return y}return null},pt=function(d){var f=d&&!d.advancedFraudSignals?"?advancedFraudSignals=false":"",y=document.createElement("script");y.src="".concat(qe).concat(f);var w=document.head||document.body;if(!w)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return w.appendChild(y),y},mt=function(d,f){!d||!d._registerWrapper||d._registerWrapper({name:"stripe-js",version:"1.35.0",startTime:f})},J=null,_t=function(d){return J!==null||(J=new Promise(function(f,y){if(typeof window=="undefined"){f(null);return}if(window.Stripe&&d&&console.warn(Me),window.Stripe){f(window.Stripe);return}try{var w=ut();w&&d?console.warn(Me):w||(w=pt(d)),w.addEventListener("load",function(){window.Stripe?f(window.Stripe):y(new Error("Stripe.js not available"))}),w.addEventListener("error",function(){y(new Error("Failed to load Stripe.js"))})}catch($){y($);return}})),J},ht=function(d,f,y){if(d===null)return null;var w=d.apply(void 0,f);return mt(w,y),w},ft=function(d){var f=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(d),`
`);if(d===null||Q(d)!=="object")throw new Error(f);if(Object.keys(d).length===1&&typeof d.advancedFraudSignals=="boolean")return d;throw new Error(f)},Ee,Te=!1,$e=function(){for(var d=arguments.length,f=new Array(d),y=0;y<d;y++)f[y]=arguments[y];Te=!0;var w=Date.now();return _t(Ee).then(function($){return ht($,f,w)})};$e.setLoadParameters=function(i){if(Te)throw new Error("You cannot change load parameters after calling loadStripe");Ee=ft(i)};Fe.loadStripe=$e;const vt={class:"px-6 max-w-8xl lg:px-8"},yt=e("div",{class:"mx-auto mt-6 sm:px-6 lg:px-8"},[e("p",{class:"text-xl font-medium"},"Appointment Summary"),e("p",null,"Here is an overview of your appointments.")],-1),xt={class:"flex flex-wrap py-8 max-w-8xl sm:px-6 lg:px-8 gap-x-4 md:flex-row gap-y-4"},gt={class:"flex-1 p-4 text-white bg-red-500 rounded-md"},wt={class:"flex justify-between"},bt={class:"flex items-center text-9xl"},St=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})]),e("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[c(" Trashed "),e("br"),c("Appointments ")])],-1),kt=e("span",{class:"sr-only"},"Trashed Appointments",-1),Ct={class:"flex-1 p-4 text-white bg-green-600 rounded-md"},At={class:"flex justify-between"},Pt={class:"flex items-center text-9xl"},Vt=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})]),e("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[c(" Total "),e("br"),c("Appointments ")])],-1),Mt=e("span",{class:"sr-only"},"Total Appointments",-1),Ft={class:"flex-1 p-4 text-white bg-blue-600 rounded-md"},qt={class:"flex justify-between"},Et={class:"flex items-center text-9xl"},Tt=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-9 w-9",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})]),e("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[c(" Today's "),e("br"),c("Appointments ")])],-1),$t=e("span",{class:"sr-only"},"Today's Appointments",-1),zt={class:"px-6 max-w-8xl lg:px-8"},Dt=e("div",{class:"mx-auto mt-6 sm:px-6 lg:px-8"},[e("p",{class:"text-xl font-medium"},"Appointment Calendar"),e("p",null,"Here is an overview of your appointments.")],-1),jt={class:"py-8 mx-auto max-w-8xl sm:px-6 lg:px-8 md:flex gap-x-4"},Ut={class:"flex-1 w-full"},Lt={class:"py-10"},It={class:"px-6 max-w-8xl lg:px-8"},Nt={class:"overflow-x-auto sm:rounded-lg"},Bt={class:""},Ot={class:"pb-6 mx-auto bg-white border-gray-200 rounded-lg max-w-8xl sm:px-6 lg:px-8"},Rt=e("p",{class:"text-xl font-medium"},"All Appointments",-1),Ht=e("p",{class:"text-sm text-gray-700"}," Shown below are the appointments record ",-1),Yt={class:"flex justify-between mb-6 mt-7 gap-x-2"},Wt=e("option",{value:"with"}," All Appointments ",-1),Gt=e("option",{value:""}," Active Appointments ",-1),Kt=e("option",{value:"only"}," Trashed Appointments ",-1),Xt=e("option",{value:"pending"}," Pending Appointments ",-1),Jt=e("option",{value:"approved"}," Approved Appointments ",-1),Qt=e("option",{value:"finished"}," Finished Appointments ",-1),Zt={class:"flex gap-x-2"},es=c("Add Appointment"),ts={class:"overflow-x-auto"},ss={class:"min-w-full divide-y divide-gray-300"},os=e("thead",{class:"bg-gray-50"},[e("tr",{class:"[&>*]:uppercase font-medium text-xs text-gray-500"},[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6"}," ID "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Status "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Patient "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Email "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Schedule "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Message "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Sub Total "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Payment Type "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Payment "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Created On "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Deleted On "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 sm:pl-6 text-left"}," Actions ")])],-1),ls={class:"bg-white divide-y divide-gray-200"},as={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},ns={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},rs={class:"py-4 pl-4 pr-3 text-sm text-gray-900 whitespace-nowrap sm:pl-6"},is={class:"py-4 pl-4 pr-3 text-sm text-gray-900 whitespace-nowrap sm:pl-6"},ds={class:"py-4 pl-4 pr-3 text-sm text-gray-900 whitespace-nowrap sm:pl-6"},cs={class:"py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6"},us={class:"py-4 pl-4 pr-3 text-sm text-gray-900 whitespace-nowrap sm:pl-6"},ps={class:"py-4 pl-4 pr-3 text-sm text-gray-900 whitespace-nowrap sm:pl-6"},ms={class:"py-4 pl-4 pr-3 text-sm text-gray-900 whitespace-nowrap sm:pl-6"},_s={class:"py-4 pl-4 pr-3 text-sm text-gray-900 whitespace-nowrap sm:pl-6"},hs={class:"py-4 pl-4 pr-3 text-sm text-gray-900 whitespace-nowrap sm:pl-6"},fs={class:"relative py-4 pl-3 pr-4 text-sm whitespace-nowrap sm:pr-6"},vs=c("Details"),ys=c("Health Form"),xs=c("Update"),gs=c("Certificate"),ws=c("Prescription"),bs=c("View Prescription"),Ss=c("View Receipt"),ks=c("View Payments"),Cs=c("Payment"),As=c("Trash"),Ps={key:0},Vs=e("td",{colspan:"11"},[e("div",{class:"py-4 mx-auto font-medium text-center text-gray-600"}," No data available .. ")],-1),Ms=[Vs],Fs={class:"mt-2 text-sm text-gray-500"},qs=e("p",{class:"text-xl font-bold"},"Appointment Information",-1),Es=e("p",{class:"text-sm text-gray-600"}," Here are the informations for this appointment ",-1),Ts=e("p",{class:"mt-3 mb-2 font-medium"},"Patient Information",-1),$s={class:"text-sm"},zs={class:"text-sm"},Ds={class:"text-sm"},js=e("p",{class:"mt-4 mb-2 font-medium"},"Appointment Information",-1),Us={class:"text-sm"},Ls={class:"text-sm"},Is={class:"text-sm"},Ns=e("p",{class:"mt-4 mb-2 font-medium"},"Services Selected",-1),Bs=c("Close"),Os=c("Mark as Finished"),Rs=c("Approve"),Hs=e("p",{class:"text-xl font-bold"},"Payment Records",-1),Ys=e("p",{class:"text-sm text-gray-600"}," Here are the payment records for this transaction ",-1),Ws={class:"mt-1"},Gs=c("View Receipt"),Ks=c("Close"),Xs=e("p",{class:"text-xl font-bold"},"Confirm Delete",-1),Js=e("p",{class:"text-sm text-gray-600"}," Are you sure you want to move this appointment to trash? Once moved to trash the appointment status will be marked as cancelled and cannot be restored. ",-1),Qs=c("Close"),Zs=c("Confirm"),eo=e("p",{class:"text-xl font-bold"},"Prescription",-1),to=e("p",{class:"text-sm font-regular"}," Enter your prescription for this appointment ",-1),so={action:"",class:"mt-2"},oo=c("Close"),lo=c("Save"),ao=e("p",{class:"text-xl font-bold"},"Payment Transaction",-1),no=e("p",{class:"mt-1 text-sm text-gray-500"}," We do not store any credit card informations. All transactions are processed by Stripe. ",-1),ro={key:0},io=e("p",{class:"mt-4 mb-1 font-medium text-center text-gray-500"}," Loading Secure Payment ... ",-1),co=[io],uo=e("p",{class:"mt-1 mb-2"},"Credit Card Information",-1),po=e("div",{id:"card-element",class:"[&>*]:border-gray-500 border-2 p-3 rounded-md mb-4"},null,-1),mo=[uo,po],_o=c("Close"),ho=e("p",{class:"text-xl font-bold"},"Accept Payment",-1),fo=e("p",{class:"mt-1 text-sm text-gray-500"}," Please fill-in all the fields in the form. ",-1),vo=e("option",{value:"0"},"Full Payment",-1),yo=e("option",{value:"1"},"Partial Payment",-1),xo=c("Close"),go={class:"text-xl font-bold"},wo=e("p",null,"Please fill-in all fields.",-1),bo={class:"flex flex-col"},So=e("p",{class:"mt-2 text-sm"},"Select Service",-1),ko={class:"flex flex-col option__desc"},Co={class:"option__title"},Ao={class:"text-sm"},Po={key:0,class:"mt-1 text-sm text-red-500"},Vo={key:1},Mo=e("p",{class:"mt-2 text-sm"},"Select Patient",-1),Fo={key:0,class:"mt-1 text-sm text-red-500"},qo={class:"mt-2"},Eo=c("Close"),To=c("Save Appointment"),$o=e("p",{class:"text-xl font-bold"},"Confirm Restore",-1),zo=e("p",{class:"text-sm text-gray-600"}," Are you sure you want to restore this scheduled appointment? This might cause conflicts to some of the schedules. ",-1),Do=c("Close"),jo=c("Restore"),el={__name:"Appointments",props:{appointments:Object,errors:Object,filters:Object,trashedAppointmentsCount:Number,todaysAppointment:Number,services:Object,users:Object},setup(i){const d=i,f=ce(()=>{var l;return(l=be().props.value.errors.error)!=null?l:"Something went wrong"}),y=ce(()=>{var l;return(l=be().props.value.flash.success)!=null?l:"Success"});let w,$,V=S(!1);const Z=S(!1),ee=()=>Z.value=!Z.value,O=()=>ne.value=!ne.value,_e=()=>re.value=!re.value,ze=async()=>{var l;if(b.subtotal=r.value.subtotal,b.appointment_id=r.value.id,!parseInt(b.is_installment)&&parseFloat(r.value.subtotal)+parseFloat((l=b.addons_amount)!=null?l:0)>b.amount_tendered)return g.error("Insufficient amount is received");V.value=!0,b.transform(o=>({...o,change:o.amount_tendered-o.subtotal})).post(route("payment-branch.store"),{onError:()=>{g.error("Something went wrong")},onSuccess:()=>{g.success(y.value),ie()}}),V.value=!1},De=async()=>{V.value=!0;const{paymentMethod:l,error:o}=await $.createPaymentMethod("card",w,{billing_details:{name:r.value.patient.full_name,email:r.value.patient.email,address:{line1:r.value.patient.address}}});o?g.error(o.message):(r.value.paymentMethodId=l.id,G.Inertia.post(route("payment.store"),r.value,{onError:()=>{g.error("Something went wrong")},onSuccess:()=>{g.success(y.value),fe()}})),V.value=!1},g=Qe(),he={appointment_id:null,prescription:"",note:""};let A=ue({...he});const b=ue({id:null,subtotal:null,change:null,appointment_id:null,amount_tendered:0,addons_amount:0,addons_note:"",is_installment:0});let u=ue({id:null,service:null,price:null,subtotal:0,selected_services:[],user_id:null,message:"",schedule:"",date:"",healthFormData:{q1:null,q2:null,q3:null,q4:null,q5:null}});const je=l=>{u.schedule=l;const o="hh:mm:ss",E=P("10:00",o),Y=P("05:00",o),W=P(l).format(o);P(W).isBetween(P(E),P(Y),"time")?console.log("Valid Time"):console.log("Invalid Time")},r=S({id:null,message:null,schedule:null,patient:{first_name:null,last_name:null},healthFormData:{q1:null,q2:null,q3:null,q4:null,q5:null}}),z=S(!1),te=S(!1),se=S(!1),oe=S(!1),F=S(!1),D=S(!1),le=S(!1),j=S(!1),ae=S(!1),ne=S(!1),re=S(!1),Ue=Ze(u,"selected_services"),Le=ce(()=>parseFloat(r.value.subtotal)+parseFloat(b.addons_amount===""?0:b.addons_amount)),fe=l=>{D.value=!0,l?j.value=!j.value:(F.value=!F.value,F.value&&setTimeout(()=>{D.value=!1,w.mount("#card-element")},1200))},U=()=>{le.value=!le.value},R=(l=null,o={...he})=>{A.appointment_id=l,A.note=o==null?void 0:o.note,A.prescription=o==null?void 0:o.prescription,ae.value=!ae.value},ve=()=>{F.value=!F.value,F.value&&setTimeout(()=>{D.value=!1,w.mount("#card-element")},1200)},ie=()=>{j.value=!j.value},H=()=>{se.value=!se.value},de=()=>{oe.value=!oe.value},q=(l=null)=>{var o;l!=null&&(u.message=l.message,u.id=l.id,u.user_id=l.patient,u.selected_services=(o=l.services)==null?void 0:o.map(E=>E.service),u.schedule=P(l.schedule).format("YYYY-MM-DDThh:mm")),te.value=!te.value},Ie=()=>{z.value?Ye():We()},Ne=()=>{A.post(route("prescription.store"),{onError:()=>{g.error("Something went wrong")},onSuccess:()=>{g.success("Appointment prescription has been saved!"),R(),A.appointment_id=null,A.prescription=null,A.note=null}})},Be=()=>{G.Inertia.delete(`/appointments/${r.value.id}`,{preserveState:!0,onSuccess:()=>{g.success("Appointment has been moved to trash successfully!"),H()}})},Oe=()=>{u.put(`/appointments/restore/${r.value.id}`,{preserveState:!0,onSuccess:()=>{g.success("Appointment has been restored successfully!"),de()}})},Re=()=>{u.put(`/appointments/approve/${r.value.id}`,{preserveState:!0,onError:()=>{g.error("Something went wrong")},onSuccess:()=>{g.success("Appointment has been approved successfully!"),U()}})},He=()=>{u.put(`/appointments/finished/${r.value.id}`,{preserveState:!0,onError:()=>{g.error("Something went wrong")},onSuccess:()=>{g.success("Appointment has been marked as finished"),U()}})},Ye=()=>{if(u.healthFormData.q1==null||u.healthFormData.q2==null||u.healthFormData.q3==null||u.healthFormData.q4==null||u.healthFormData.q5==null)return g.error("Please answer all the questions");console.log("Submitted Schedule: ",u.schedule),u.transform(l=>{var o;return{...l,fixed_schedule:P(l.schedule).format(),user_id:(o=l==null?void 0:l.user_id)==null?void 0:o.id}}).post("/appointments",{preserveState:!0,onError:l=>{g.error(`${f.value}`),O()},onSuccess:()=>{g.success("Appointment created successfully!"),O(),q(),u.reset()}})},We=()=>{u.transform(l=>{var o;return{...l,user_id:(o=l==null?void 0:l.user_id)==null?void 0:o.id}}).put(`/appointments/${u.id}`,{preserveState:!0,onError:l=>{g.error(`${f.value}`)},onSuccess:()=>{g.success("Appointment update successfully!"),q(),u.reset()}})},Ge=()=>{var l;u.subtotal=0,(l=u.selected_services)==null||l.map(o=>{u.subtotal+=parseFloat(o.price)})},Ke=l=>{console.log(l)};et(Ue,Ge);let L=S(d.filters.search),I=S(d.filters.trashed);const ye=we.exports.debounce(()=>{G.Inertia.get("/appointments",{search:L.value,trashed:I.value},{preserveState:!0})},300),Xe=we.exports.debounce(l=>{G.Inertia.get("/appointments",{search:l},{preserveState:!0,only:["users"]})},300);return(l,o)=>(m(),C(K,null,[a(n(tt),{title:"Patient Appointments"}),a(at,null,{default:s(()=>{var E,Y,W;return[e("div",vt,[yt,e("div",xt,[e("div",gt,[e("div",wt,[e("div",bt,p(n(me)(i.trashedAppointmentsCount)),1),St]),kt]),e("div",Ct,[e("div",At,[e("div",Pt,p(n(me)(i.appointments.data.length)),1),Vt]),Mt]),e("div",Ft,[e("div",qt,[e("div",Et,p(n(me)(i.todaysAppointment)),1),Tt]),$t])])]),e("div",zt,[Dt,e("div",jt,[e("div",Ut,[a(dt,{data:i.appointments.data,onEmitEvent:Ke},null,8,["data"])])])]),e("div",Lt,[e("div",It,[e("div",Nt,[e("div",Bt,[e("div",Ot,[Rt,Ht,e("div",Yt,[a(k,{label:"Filter Appointment",class:"w-56"},{default:s(()=>[a(ke,{onChange:n(ye),modelValue:n(I),"onUpdate:modelValue":o[0]||(o[0]=t=>Se(I)?I.value=t:I=t)},{default:s(()=>[Wt,Gt,Kt,Xt,Jt,Qt]),_:1},8,["onChange","modelValue"])]),_:1}),e("div",Zt,[a(_,{onClick:o[1]||(o[1]=v(t=>{z.value=!0,q()},["prevent"])),size:"sm",color:"success"},{default:s(()=>[es]),_:1}),a(k,{label:"Search Appointment",for:"search"},{default:s(()=>[a(N,{modelValue:n(L),"onUpdate:modelValue":o[2]||(o[2]=t=>Se(L)?L.value=t:L=t),id:"search",onKeyup:n(ye)},null,8,["modelValue","onKeyup"])]),_:1})])]),e("div",ts,[e("table",ss,[os,e("tbody",ls,[(m(!0),C(K,null,pe(i.appointments.data,(t,Je)=>{var xe,ge;return m(),C("tr",{key:Je,class:st(["hover:bg-gray-100",{"bg-red-100":t.deleted_at}])},[e("td",as,p(t.id),1),e("td",ns,[a(Ce,{label:t.appointment_status,color:n(Pe)(t.appointment_status)},null,8,["label","color"])]),e("td",rs,p(t.patient.full_name),1),e("td",is,p(t.patient.email),1),e("td",ds,p(t.schedule),1),e("td",cs,p(n(it)(t.message)),1),e("td",us,p(n(X)(t.subtotal)),1),e("td",ps,p(t.payments?"On-Branch":"N/A"),1),e("td",ms,[a(Ce,{label:t.payment_status,color:n(Pe)(t.payment_status)},null,8,["label","color"])]),e("td",_s,p(t.created_at),1),e("td",hs,p(t.deleted_at),1),e("td",fs,[a(_,{text:"",size:"sm",onClick:T=>{U(),r.value=t}},{default:s(()=>[vs]),_:2},1032,["onClick"]),a(_,{text:"",size:"sm",onClick:T=>{_e(),r.value.healthFormData={q1:t.q1,q2:t.q2,q3:t.q3,q4:t.q4,q5:t.q5}}},{default:s(()=>[ys]),_:2},1032,["onClick"]),!t.deleted_at&&t.appointment_status!="Finished"&&t.appointment_status!="Approved"&&!l.$page.props.auth.user.is_admin?(m(),x(_,{key:0,onClick:T=>{z.value=!1,q(t)},text:"",size:"sm",color:"success"},{default:s(()=>[xs]),_:2},1032,["onClick"])):h("",!0),(l.$page.props.auth.user.is_admin||t.payment_status!=="Pending")&&!t.deleted_at&&t.appointment_status=="Finished"?(m(),x(_,{key:1,"is-link":"",href:l.route("certificate.generate",t.id),text:"",size:"sm",color:"success"},{default:s(()=>[gs]),_:2},1032,["href"])):h("",!0),l.$page.props.auth.user.is_admin&&t.prescription==null&&t.appointment_status!="Pending"?(m(),x(_,{key:2,onClick:v(T=>R(t.id,t.prescription),["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[ws]),_:2},1032,["onClick"])):h("",!0),t.payment_status=="Paid"&&t.prescription!=null?(m(),x(_,{key:3,"is-link":"",href:l.route("prescription.generate",t.id),text:"",size:"sm",color:"success"},{default:s(()=>[bs]),_:2},1032,["href"])):h("",!0),((xe=t.payment)==null?void 0:xe.payment_type)=="Stripe"&&t.payment_status=="Paid"?(m(),x(_,{key:4,color:"success","is-link":"",text:"",size:"sm",href:(ge=t.payment)==null?void 0:ge.receipt_url,target:"_"},{default:s(()=>[Ss]),_:2},1032,["href"])):h("",!0),t.payments&&(t.payment_status=="Paid"||t.payment_status=="Semi-Paid")?(m(),x(_,{key:5,onClick:v(T=>{ee(),r.value={...t}},["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[ks]),_:2},1032,["onClick"])):h("",!0),!t.deleted_at&&t.payment_status!="Paid"&&(t.appointment_status=="Approved"||t.appointment_status=="Finished")&&l.$page.props.auth.user.is_admin?(m(),x(_,{key:6,onClick:v(T=>{fe(l.$page.props.auth.user.is_admin),r.value={...t}},["prevent"]),text:"",size:"sm",color:""},{default:s(()=>[Cs]),_:2},1032,["onClick"])):h("",!0),t.deleted_at?h("",!0):(m(),x(_,{key:7,onClick:v(T=>{H(),r.value=t},["prevent"]),text:"",size:"sm",color:"error"},{default:s(()=>[As]),_:2},1032,["onClick"]))])],2)}),128)),i.appointments.data.length==0?(m(),C("tr",Ps,Ms)):h("",!0)])])]),e("p",Fs," Showing "+p((E=i.appointments.from)!=null?E:0)+" to "+p((Y=i.appointments.to)!=null?Y:0)+" out of "+p((W=i.appointments.total)!=null?W:0)+" appointments. ",1),a(nt,{links:i.appointments.links,right:""},null,8,["links"])])])])])]),le.value?(m(),x(M,{key:0,onClose:U},{title:s(()=>[qs,Es]),body:s(()=>[Ts,e("p",$s," Full Name: "+p(r.value.patient.full_name),1),e("p",zs," Email: "+p(r.value.patient.email),1),e("p",Ds," Gender: "+p(r.value.patient.gender),1),js,e("p",Us," Schedule: "+p(r.value.schedule),1),e("p",Ls," Message: "+p(r.value.message),1),e("p",Is," Created: "+p(r.value.created_at),1),Ns,(m(!0),C(K,null,pe(r.value.services,t=>(m(),C("p",{class:"text-sm",key:t.id},p(t.service.service)+" - "+p(n(X)(t.service.price)),1))),128))]),footer:s(()=>[a(_,{onClick:v(U,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[Bs]),_:1},8,["onClick"]),r.value.deleted_at==null&&r.value.appointment_status=="Approved"&&r.value.appointment_status!="Cancelled"&&l.$page.props.auth.user.is_admin?(m(),x(_,{key:0,onClick:v(He,["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[Os]),_:1},8,["onClick"])):h("",!0),r.value.deleted_at==null&&r.value.appointment_status=="Pending"&&r.value.appointment_status!="Cancelled"&&l.$page.props.auth.user.is_admin?(m(),x(_,{key:1,onClick:v(Re,["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[Rs]),_:1},8,["onClick"])):h("",!0)]),_:1})):h("",!0),Z.value?(m(),x(M,{key:1,onClose:ee},{title:s(()=>[Hs,Ys]),body:s(()=>[e("ul",Ws,[(m(!0),C(K,null,pe(r.value.payments,t=>(m(),C("li",{key:`payment-id-${t.id}`,class:"flex justify-between items-center"},[e("p",null,p(t.created_at),1),a(_,{"is-link":"",text:"",size:"sm",href:l.route("invoice.generate",t.id),target:"_"},{default:s(()=>[Gs]),_:2},1032,["href"])]))),128))])]),footer:s(()=>[a(_,{onClick:v(ee,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[Ks]),_:1},8,["onClick"])]),_:1})):h("",!0),se.value?(m(),x(M,{key:2,onClose:H},{title:s(()=>[Xs]),body:s(()=>[Js]),footer:s(()=>[a(_,{onClick:v(H,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[Qs]),_:1},8,["onClick"]),a(_,{onClick:v(Be,["prevent"]),text:"",size:"sm",color:"error"},{default:s(()=>[Zs]),_:1},8,["onClick"])]),_:1})):h("",!0),ae.value?(m(),x(M,{key:3,onClose:R},{title:s(()=>[eo,to]),body:s(()=>[e("form",so,[a(k,{label:"Prescription",for:"prescription",class:"mt-3",error:i.errors.prescription},{default:s(()=>[a(B,{modelValue:n(A).prescription,"onUpdate:modelValue":o[3]||(o[3]=t=>n(A).prescription=t),id:"prescription",required:"","aria-required":""},null,8,["modelValue"])]),_:1},8,["error"]),a(k,{label:"Additional Note",for:"prescription-additional",class:"mt-3",error:i.errors.note},{default:s(()=>[a(B,{modelValue:n(A).note,"onUpdate:modelValue":o[4]||(o[4]=t=>n(A).note=t),id:"prescription-additional",required:"","aria-required":""},null,8,["modelValue"])]),_:1},8,["error"])])]),footer:s(()=>[a(_,{onClick:v(R,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[oo]),_:1},8,["onClick"]),a(_,{onClick:v(Ne,["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[lo]),_:1},8,["onClick"])]),_:1})):h("",!0),F.value?(m(),x(M,{key:4,onClose:ve},{title:s(()=>[ao,no]),body:s(()=>[D.value?(m(),C("div",ro,co)):h("",!0),ot(e("div",null,mo,512),[[lt,!D.value]]),a(k,{for:"payment_fname",error:i.errors.schedule,label:"Full Name",class:"mt-1 mb-3"},{default:s(()=>[a(N,{disabled:"",type:"text",id:"payment_fname",modelValue:r.value.patient.full_name,"onUpdate:modelValue":o[5]||(o[5]=t=>r.value.patient.full_name=t),"aria-disabled":""},null,8,["modelValue"])]),_:1},8,["error"]),a(k,{for:"payment_fname",error:i.errors.schedule,label:"Address",class:"mt-3 mb-3"},{default:s(()=>[a(B,{type:"text",id:"payment_fname",modelValue:r.value.patient.address,"onUpdate:modelValue":o[6]||(o[6]=t=>r.value.patient.address=t),disabled:"","aria-disabled":""},null,8,["modelValue"])]),_:1},8,["error"])]),footer:s(()=>[a(_,{onClick:v(ve,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[_o]),_:1},8,["onClick"]),a(_,{onClick:v(De,["prevent"]),text:"",size:"sm",color:"success",disabled:n(V)},{default:s(()=>[c(p(n(V)?"Processing..":"Proceed"),1)]),_:1},8,["onClick","disabled"])]),_:1})):h("",!0),j.value?(m(),x(M,{key:5,onClose:ie},{title:s(()=>[ho,fo]),body:s(()=>[a(k,{label:"Payment Type",class:"w-full mt-3"},{default:s(()=>[a(ke,{modelValue:n(b).is_installment,"onUpdate:modelValue":o[7]||(o[7]=t=>n(b).is_installment=t)},{default:s(()=>[vo,yo]),_:1},8,["modelValue"])]),_:1}),a(k,{for:"payment_fname",error:i.errors.schedule,label:"Amount Tendered",class:"mt-3 mb-3"},{default:s(()=>[a(N,{type:"number",id:"amounttendered",modelValue:n(b).amount_tendered,"onUpdate:modelValue":o[8]||(o[8]=t=>n(b).amount_tendered=t)},null,8,["modelValue"])]),_:1},8,["error"]),a(k,{for:"addons_amount",error:i.errors.addons_amount,label:"Addons Amount",class:"mt-3 mb-3"},{default:s(()=>[a(N,{type:"number",id:"addons_amount",modelValue:n(b).addons_amount,"onUpdate:modelValue":o[9]||(o[9]=t=>n(b).addons_amount=t)},null,8,["modelValue"])]),_:1},8,["error"]),a(k,{for:"addons_note",error:i.errors.addons_note,label:"Addons Note",class:"mt-3 mb-3"},{default:s(()=>[a(B,{type:"text",id:"addons_note",modelValue:n(b).addons_note,"onUpdate:modelValue":o[10]||(o[10]=t=>n(b).addons_note=t)},null,8,["modelValue"])]),_:1},8,["error"]),a(k,{for:"subtotal",error:i.errors.subtotal,label:"Subtotal",class:"mt-3 mb-3"},{default:s(()=>[a(N,{type:"number",id:"subtotal",modelValue:r.value.subtotal,"onUpdate:modelValue":o[11]||(o[11]=t=>r.value.subtotal=t),disabled:"","aria-disabled":""},null,8,["modelValue"])]),_:1},8,["error"]),e("p",null,"Total Amount: "+p(n(Le)),1)]),footer:s(()=>[a(_,{onClick:v(ie,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[xo]),_:1},8,["onClick"]),a(_,{onClick:v(ze,["prevent"]),text:"",size:"sm",color:"success",disabled:n(V)},{default:s(()=>[c(p(n(V)?"Processing..":"Proceed Payment"),1)]),_:1},8,["onClick","disabled"])]),_:1})):h("",!0),te.value?(m(),x(M,{key:6,onClose:q,scrollable:!1},{title:s(()=>[e("p",go,p(z.value?"New Appointment":"Update Appointment"),1),wo]),body:s(()=>[e("form",bo,[a(k,{for:"appointment",error:i.errors.schedule,label:"Date and Time",class:"mt-3"},{default:s(()=>[a(n(rt),{noMinutesOverlay:"",label:"Select Schedule",modelValue:n(u).schedule,"onUpdate:modelValue":je,is24:!1,weekStart:"0",utc:"",disabledWeekDays:[0],minutesIncrement:"00",startTime:{hours:"10",minutes:"00"},"min-date":n(P)().add(1,"day").format("YYYY-MM-DDT00:00"),"max-date":n(P)().add(2,"month").format("YYYY-MM-DDT00:00")},null,8,["modelValue","min-date","max-date"])]),_:1},8,["error"]),a(k,{for:"message",error:i.errors.message,label:"Message",class:"mt-2"},{default:s(()=>[a(B,{id:"message",modelValue:n(u).message,"onUpdate:modelValue":o[12]||(o[12]=t=>n(u).message=t)},null,8,["modelValue"])]),_:1},8,["error"]),So,a(n(Ve),{modelValue:n(u).selected_services,"onUpdate:modelValue":o[13]||(o[13]=t=>n(u).selected_services=t),options:i.services,multiple:!0,class:"border-1 border-gray-400 rounded-lg",selectLabel:"Select",deselectLabel:"Deselect",label:"service","track-by":"id"},{option:s(t=>[e("div",ko,[e("span",Co,p(t.option.service),1),e("span",Ao,p(n(X)(t.option.price)),1)])]),_:1},8,["modelValue","options"]),i.errors.selected_services?(m(),C("p",Po,p(i.errors.selected_services),1)):h("",!0),l.$page.props.auth.user.is_admin?(m(),C("div",Vo,[Mo,a(n(Ve),{modelValue:n(u).user_id,"onUpdate:modelValue":o[14]||(o[14]=t=>n(u).user_id=t),onSearchChange:n(Xe),options:i.users,multiple:!1,class:"border-1 border-gray-400 rounded-lg",selectLabel:"Select",deselectLabel:"Deselect",label:"full_name","track-by":"id","open-direction":"bottom",disabled:!z.value},null,8,["modelValue","onSearchChange","options","disabled"]),i.errors.user_id?(m(),C("p",Fo,p(i.errors.user_id),1)):h("",!0)])):h("",!0),e("p",qo," Subtotal: "+p(n(X)(n(u).subtotal)),1)])]),footer:s(()=>[a(_,{onClick:v(q,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[Eo]),_:1},8,["onClick"]),a(_,{onClick:v(O,["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[To]),_:1},8,["onClick"])]),_:1})):h("",!0),oe.value?(m(),x(M,{key:7,onClose:de},{title:s(()=>[$o]),body:s(()=>[zo]),footer:s(()=>[a(_,{onClick:v(de,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[Do]),_:1},8,["onClick"]),a(_,{onClick:v(Oe,["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[jo]),_:1},8,["onClick"])]),_:1})):h("",!0),ne.value?(m(),x(Ae,{key:8,data:n(u).healthFormData,onEmitClose:O,onEmitSaveAppointment:Ie},null,8,["data"])):h("",!0),re.value?(m(),x(Ae,{key:9,"view-only":"",scrollable:"",data:r.value.healthFormData,onEmitClose:_e},null,8,["data"])):h("",!0)]}),_:1})],64))}};export{el as default};