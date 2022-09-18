import{c as ue,r as b,o as De,u as J,a as Ie,b as pe,t as Ne,w as Ue,l as me,d as U,e as S,f as l,g as c,H as Be,h as s,F as Q,i as m,j as e,k as d,m as _e,n as g,p as fe,q as Oe,s as w,v,x as Re,y as He,z as u}from"./app.8684e8b9.js";import{_ as We}from"./Authenticated.97d1cb83.js";import{_ as f}from"./Button.ae857c81.js";import{_ as C,a as D}from"./FormInput.f679f637.js";import{_ as Ye}from"./FloatingSelect.9bfddc19.js";import{_ as he}from"./FloatingTextArea.ebbbed15.js";import{_ as qe,a as ve}from"./Calendar.a05ae1dd.js";import{P as Ge}from"./Pagination.f13be08e.js";import{_ as z}from"./Modal.003358a3.js";import{f as Z,c as ye,s as Ke,a as B}from"./Utilities.5f54765f.js";import{s as xe,h as Xe}from"./vue-multiselect.esm.42ad203b.js";/* empty css                                              */var ee={};Object.defineProperty(ee,"__esModule",{value:!0});function R(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?R=function(a){return typeof a}:R=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},R(r)}var we="https://js.stripe.com/v3",Je=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,ge="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Qe=function(){for(var a=document.querySelectorAll('script[src^="'.concat(we,'"]')),_=0;_<a.length;_++){var h=a[_];if(!!Je.test(h.src))return h}return null},Ze=function(a){var _=a&&!a.advancedFraudSignals?"?advancedFraudSignals=false":"",h=document.createElement("script");h.src="".concat(we).concat(_);var y=document.head||document.body;if(!y)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return y.appendChild(h),h},et=function(a,_){!a||!a._registerWrapper||a._registerWrapper({name:"stripe-js",version:"1.35.0",startTime:_})},O=null,tt=function(a){return O!==null||(O=new Promise(function(_,h){if(typeof window=="undefined"){_(null);return}if(window.Stripe&&a&&console.warn(ge),window.Stripe){_(window.Stripe);return}try{var y=Qe();y&&a?console.warn(ge):y||(y=Ze(a)),y.addEventListener("load",function(){window.Stripe?_(window.Stripe):h(new Error("Stripe.js not available"))}),y.addEventListener("error",function(){h(new Error("Failed to load Stripe.js"))})}catch(A){h(A);return}})),O},st=function(a,_,h){if(a===null)return null;var y=a.apply(void 0,_);return et(y,h),y},ot=function(a){var _=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(a),`
`);if(a===null||R(a)!=="object")throw new Error(_);if(Object.keys(a).length===1&&typeof a.advancedFraudSignals=="boolean")return a;throw new Error(_)},be,Se=!1,ke=function(){for(var a=arguments.length,_=new Array(a),h=0;h<a;h++)_[h]=arguments[h];Se=!0;var y=Date.now();return tt(be).then(function(A){return st(A,_,y)})};ke.setLoadParameters=function(r){if(Se)throw new Error("You cannot change load parameters after calling loadStripe");be=ot(r)};ee.loadStripe=ke;var lt=ee;const at={class:"px-6 mx-auto max-w-7xl lg:px-8"},nt=e("div",{class:"mx-auto mt-6 sm:px-6 lg:px-8"},[e("p",{class:"text-xl font-medium"},"Appointment Summary"),e("p",null,"Here is an overview of your appointments.")],-1),rt={class:"flex flex-wrap py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-x-4 md:flex-row gap-y-4"},it={class:"flex-1 p-4 text-white bg-red-500 rounded-md"},ct={class:"flex justify-between"},dt={class:"flex items-center text-9xl"},ut=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})]),e("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[u("Trashed "),e("br"),u("Appointments")])],-1),pt=e("span",{class:"sr-only"},"Trashed Appointments",-1),mt={class:"flex-1 p-4 text-white bg-green-600 rounded-md"},_t={class:"flex justify-between"},ft={class:"flex items-center text-9xl"},ht=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})]),e("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[u("Total "),e("br"),u("Appointments")])],-1),vt=e("span",{class:"sr-only"},"Total Appointments",-1),yt={class:"flex-1 p-4 text-white bg-blue-600 rounded-md"},xt={class:"flex justify-between"},gt={class:"flex items-center text-9xl"},wt=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-9 w-9",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})]),e("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[u("Today's "),e("br"),u("Appointments")])],-1),bt=e("span",{class:"sr-only"},"Today's Appointments",-1),St={class:"px-6 mx-auto max-w-7xl lg:px-8"},kt=e("div",{class:"mx-auto mt-6 sm:px-6 lg:px-8"},[e("p",{class:"text-xl font-medium"},"Appointment Calendar"),e("p",null,"Here is an overview of your appointments.")],-1),Ct={class:"py-8 mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex gap-x-4"},At={class:"flex-1 w-full"},Vt={class:"py-10"},Pt={class:"px-6 mx-auto max-w-7xl lg:px-8"},Mt={class:"overflow-x-auto shadow-sm sm:rounded-lg"},zt={class:""},$t={class:"pb-6 mx-auto bg-white border-gray-200 rounded-lg max-w-7xl sm:px-6 lg:px-8"},Et=e("p",{class:"text-xl font-medium"},"All Appointments",-1),Tt=e("p",{class:"text-sm text-gray-700"},"Shown below are the appointments record",-1),jt={class:"flex justify-between mb-6 mt-7 gap-x-2"},Lt=e("option",{value:"with"},"All Appointments",-1),Ft=e("option",{value:""},"Active Appointments",-1),Dt=e("option",{value:"only"},"Trashed Appointments",-1),It={class:"flex gap-x-2"},Nt=u("Add Appointment"),Ut={class:"overflow-x-auto"},Bt={class:"min-w-full divide-y divide-gray-300"},Ot=e("thead",{class:"bg-gray-50"},[e("tr",{class:"[&>*]:uppercase font-medium text-xs text-gray-500"},[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6"},"ID"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Status"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Patient"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Email"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Schedule"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Message"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Sub Total"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Payment Type"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Payment"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Created On"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Deleted On"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 sm:pl-6 text-left"},"Actions")])],-1),Rt={class:"bg-white divide-y divide-gray-200"},Ht={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},Wt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},Yt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},qt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},Gt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},Kt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},Xt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},Jt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},Qt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},Zt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},es={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},ts={class:"relative py-4 pl-3 pr-4 text-sm whitespace-nowrap sm:pr-6"},ss=u("Details"),os=u("Update"),ls=u("Certificate"),as=u("View Receipt"),ns=u("View Receipt"),rs=u("Payment"),is=u("Trash"),cs={key:0},ds=e("td",{colspan:"11"},[e("div",{class:"py-4 mx-auto font-medium text-center text-gray-600"},"No data available ..")],-1),us=[ds],ps={class:"mt-2 text-sm text-gray-500"},ms=e("p",{class:"text-xl font-bold"},"Appointment Information",-1),_s=e("p",{class:"text-sm text-gray-600"},"Here are the informations for this appointment",-1),fs=e("p",{class:"mt-3 mb-2"},"Patient Information",-1),hs={class:"text-sm"},vs={class:"text-sm"},ys={class:"text-sm"},xs=e("p",{class:"mt-4 mb-2"},"Appointment Information",-1),gs={class:"text-sm"},ws={class:"text-sm"},bs={class:"text-sm"},Ss=e("p",{class:"mt-4 mb-2"},"Services Selected",-1),ks=u("Close"),Cs=u("Mark as Finished"),As=u("Approve"),Vs=e("p",{class:"text-xl font-bold"},"Confirm Delete",-1),Ps=e("p",{class:"text-sm text-gray-600"},"Are you sure you want to move this appointment to trash? Once moved to trash the appointment status will be marked as cancelled and cannot be restored.",-1),Ms=u("Close"),zs=u("Confirm"),$s=e("p",{class:"text-xl font-bold"},"Payment Transaction",-1),Es=e("p",{class:"mt-1 text-sm text-gray-500"},"We do not store any credit card informations. All transactions are processed by Stripe.",-1),Ts={key:0},js=e("p",{class:"mt-4 mb-1 font-medium text-center text-gray-500"},"Loading Secure Payment ...",-1),Ls=[js],Fs=e("p",{class:"mt-1 mb-2"},"Credit Card Information",-1),Ds=e("div",{id:"card-element",class:"[&>*]:border-gray-500 border-2 p-3 rounded-md mb-4"},null,-1),Is=[Fs,Ds],Ns=u("Close"),Us=e("p",{class:"text-xl font-bold"},"Accept Payment",-1),Bs=e("p",{class:"mt-1 text-sm text-gray-500"},"Please fill-in all the fields in the form.",-1),Os=u("Close"),Rs={class:"text-xl font-bold"},Hs=e("p",null,"Please fill-in all fields.",-1),Ws={class:"flex flex-col"},Ys=e("p",{class:"mt-2 text-sm"},"Select Service",-1),qs={class:"flex flex-col option__desc"},Gs={class:"option__title"},Ks={class:"text-sm"},Xs={key:0,class:"mt-1 text-sm text-red-500"},Js={key:1},Qs=e("p",{class:"mt-2 text-sm"},"Select Patient",-1),Zs={key:0,class:"mt-1 text-sm text-red-500"},eo={class:"mt-2"},to=u("Close"),so=u("Save Appointment"),oo=e("p",{class:"text-xl font-bold"},"Confirm Restore",-1),lo=e("p",{class:"text-sm text-gray-600"},"Are you sure you want to restore this scheduled appointment? This might cause conflicts to some of the schedules.",-1),ao=u("Close"),no=u("Restore"),wo={__name:"Appointments",props:{appointments:Object,errors:Object,filters:Object,trashedAppointmentsCount:Number,todaysAppointment:Number,services:Object,users:Object},setup(r){const a=r,_=ue(()=>{var o;return(o=J().props.value.errors.error)!=null?o:"Something went wrong"}),h=ue(()=>{var o;return(o=J().props.value.flash.message)!=null?o:"Transaction successful"});let y,A,k=b(!1);De(async()=>{A=await lt.loadStripe(J().props.value.stripe.public_key),y=A.elements().create("card",{classes:{base:"p-2 border-gray-500"}})});const Ce=async()=>{P.subtotal=i.value.subtotal,P.appointment_id=i.value.id,i.value.subtotal>P.amount_tendered?x.error("Insufficient amount is received"):(k.value=!0,P.transform(o=>({...o,change:o.amount_tendered-o.subtotal})).post(route("payment-branch.store"),{onError:()=>{x.error("Something went wrong")},onSuccess:()=>{x.success(h.value),G()}})),k.value=!1},Ae=async()=>{k.value=!0;const{paymentMethod:o,error:n}=await A.createPaymentMethod("card",y,{billing_details:{name:i.value.patient.full_name,email:i.value.patient.email,address:{line1:i.value.patient.address}}});n?x.error(n.message):(i.value.paymentMethodId=o.id,U.Inertia.post(route("payment.store"),i.value,{onError:()=>{x.error("Something went wrong")},onSuccess:()=>{x.success(h.value),te()}})),k.value=!1},x=Ie(),P=pe({id:null,subtotal:null,change:null,appointment_id:null,amount_tendered:0});let p=pe({id:null,service:null,price:null,subtotal:0,selected_services:[],user_id:null,message:"",schedule:""});const i=b({id:null,message:null,schedule:null,patient:{first_name:null,last_name:null}}),$=b(!1),H=b(!1),E=b(!1),W=b(!1),Y=b(!1),q=b(!1),V=b(!1),T=b(!1),Ve=Ne(p,"selected_services"),te=o=>{T.value=!0,o?$.value=!$.value:(V.value=!V.value,V.value&&setTimeout(()=>{T.value=!1,y.mount("#card-element")},1200))},j=()=>{H.value=!H.value},se=()=>{V.value=!V.value,V.value&&setTimeout(()=>{T.value=!1,y.mount("#card-element")},1200)},G=()=>{$.value=!$.value},I=()=>{W.value=!W.value},K=()=>{Y.value=!Y.value},M=(o=null)=>{var n;o!=null&&(p.message=o.message,p.id=o.id,p.user_id=o.patient,p.selected_services=(n=o.services)==null?void 0:n.map(N=>N.service),p.schedule=Xe(o.schedule).format("YYYY-MM-DDThh:mm")),q.value=!q.value},Pe=()=>{E.value?Te():je()},Me=()=>{U.Inertia.delete(`/appointments/${i.value.id}`,{preserveState:!0,onSuccess:()=>{x.success("Appointment has been moved to trash successfully!"),I()}})},ze=()=>{p.put(`/appointments/restore/${i.value.id}`,{preserveState:!0,onSuccess:()=>{x.success("Appointment has been restored successfully!"),K()}})},$e=()=>{p.put(`/appointments/approve/${i.value.id}`,{preserveState:!0,onError:()=>{x.error("Something went wrong")},onSuccess:()=>{x.success("Appointment has been approved successfully!"),j()}})},Ee=()=>{p.put(`/appointments/finished/${i.value.id}`,{preserveState:!0,onError:()=>{x.error("Something went wrong")},onSuccess:()=>{x.success("Appointment has been marked as finished"),j()}})},Te=()=>{p.transform(o=>{var n;return{...o,user_id:(n=o==null?void 0:o.user_id)==null?void 0:n.id}}).post("/appointments",{preserveState:!0,onError:o=>{x.error(`${_.value}`)},onSuccess:()=>{x.success("Appointment created successfully!"),M(),p.reset()}})},je=()=>{p.transform(o=>{var n;return{...o,user_id:(n=o==null?void 0:o.user_id)==null?void 0:n.id}}).put(`/appointments/${p.id}`,{preserveState:!0,onError:o=>{x.error(`${_.value}`)},onSuccess:()=>{x.success("Appointment update successfully!"),M(),p.reset()}})};Ue(Ve,()=>{var o;p.subtotal=0,(o=p.selected_services)==null||o.map(n=>{p.subtotal+=parseFloat(n.price)})});let L=b(a.filters.search),F=b(a.filters.trashed);const oe=me.exports.debounce(()=>{U.Inertia.get("/appointments",{search:L.value,trashed:F.value},{preserveState:!0})},300),Le=me.exports.debounce(o=>{U.Inertia.get("/appointments",{search:o},{preserveState:!0,only:["users"]})},300);return(o,n)=>(m(),S(Q,null,[l(c(Be),{title:"Patient Appointments"}),l(We,null,{default:s(()=>{var N,le,ae;return[e("div",at,[nt,e("div",rt,[e("div",it,[e("div",ct,[e("div",dt,d(c(Z)(r.trashedAppointmentsCount)),1),ut]),pt]),e("div",mt,[e("div",_t,[e("div",ft,d(c(Z)(r.appointments.data.length)),1),ht]),vt]),e("div",yt,[e("div",xt,[e("div",gt,d(c(Z)(r.todaysAppointment)),1),wt]),bt])])]),e("div",St,[kt,e("div",Ct,[e("div",At,[l(qe,{data:r.appointments.data},null,8,["data"])])])]),e("div",Vt,[e("div",Pt,[e("div",Mt,[e("div",zt,[e("div",$t,[Et,Tt,e("div",jt,[l(C,{label:"Filter Service",class:"w-48"},{default:s(()=>[l(Ye,{onChange:c(oe),modelValue:c(F),"onUpdate:modelValue":n[0]||(n[0]=t=>_e(F)?F.value=t:F=t)},{default:s(()=>[Lt,Ft,Dt]),_:1},8,["onChange","modelValue"])]),_:1}),e("div",It,[l(f,{onClick:n[1]||(n[1]=g(t=>{E.value=!0,M()},["prevent"])),size:"sm",color:"success"},{default:s(()=>[Nt]),_:1}),l(C,{label:"Search Appointment",for:"search"},{default:s(()=>[l(D,{modelValue:c(L),"onUpdate:modelValue":n[2]||(n[2]=t=>_e(L)?L.value=t:L=t),id:"search",onKeyup:c(oe)},null,8,["modelValue","onKeyup"])]),_:1})])]),e("div",Ut,[e("table",Bt,[Ot,e("tbody",Rt,[(m(!0),S(Q,null,fe(r.appointments.data,(t,Fe)=>{var ne,re,ie,ce,de;return m(),S("tr",{key:Fe,class:Oe(["hover:bg-gray-200",{"bg-red-100":t.deleted_at}])},[e("td",Ht,d(t.id),1),e("td",Wt,[l(ve,{label:t.appointment_status,color:c(ye)(t.appointment_status)},null,8,["label","color"])]),e("td",Yt,d(t.patient.full_name),1),e("td",qt,d(t.patient.email),1),e("td",Gt,d(t.schedule),1),e("td",Kt,d(c(Ke)(t.message)),1),e("td",Xt,d(c(B)(t.subtotal)),1),e("td",Jt,d((re=(ne=t.payment)==null?void 0:ne.payment_type)!=null?re:"N/A"),1),e("td",Qt,[l(ve,{label:t.payment_status,color:c(ye)(t.payment_status)},null,8,["label","color"])]),e("td",Zt,d(t.created_at),1),e("td",es,d(t.deleted_at),1),e("td",ts,[l(f,{text:"",size:"sm",onClick:X=>{j(),i.value=t}},{default:s(()=>[ss]),_:2},1032,["onClick"]),!t.deleted_at&&t.appointment_status!="Finished"&&t.appointment_status!="Approved"&&!o.$page.props.auth.user.is_admin?(m(),w(f,{key:0,onClick:X=>{E.value=!1,M(t)},text:"",size:"sm",color:"success"},{default:s(()=>[os]),_:2},1032,["onClick"])):v("",!0),!t.deleted_at&&t.appointment_status=="Approved"?(m(),w(f,{key:1,"is-link":"",href:o.route("certificate.generate",t.id),text:"",size:"sm",color:"success"},{default:s(()=>[ls]),_:2},1032,["href"])):v("",!0),((ie=t.payment)==null?void 0:ie.payment_type)=="Stripe"&&t.payment_status=="Paid"?(m(),w(f,{key:2,color:"success","is-link":"",text:"",size:"sm",href:(ce=t.payment)==null?void 0:ce.receipt_url,target:"_"},{default:s(()=>[as]),_:2},1032,["href"])):v("",!0),((de=t.payment)==null?void 0:de.payment_type)=="On-Branch"&&t.payment_status=="Paid"?(m(),w(f,{key:3,"is-link":"",href:o.route("invoice.generate",t.id),text:"",size:"sm",color:"success"},{default:s(()=>[ns]),_:2},1032,["href"])):v("",!0),!t.deleted_at&&t.payment_status!="Paid"&&(t.appointment_status=="Approved"||t.appointment_status=="Finished")?(m(),w(f,{key:4,onClick:g(X=>{te(o.$page.props.auth.user.is_admin),i.value={...t}},["prevent"]),text:"",size:"sm",color:""},{default:s(()=>[rs]),_:2},1032,["onClick"])):v("",!0),t.deleted_at?v("",!0):(m(),w(f,{key:5,onClick:g(X=>{I(),i.value=t},["prevent"]),text:"",size:"sm",color:"error"},{default:s(()=>[is]),_:2},1032,["onClick"]))])],2)}),128)),r.appointments.data.length==0?(m(),S("tr",cs,us)):v("",!0)])])]),e("p",ps,"Showing "+d((N=r.appointments.from)!=null?N:0)+" to "+d((le=r.appointments.to)!=null?le:0)+" out of "+d((ae=r.appointments.total)!=null?ae:0)+" appointments.",1),l(Ge,{links:r.appointments.links,right:""},null,8,["links"])])])])])]),H.value?(m(),w(z,{key:0,onClose:j},{title:s(()=>[ms,_s]),body:s(()=>[fs,e("p",hs,"Full Name: "+d(i.value.patient.full_name),1),e("p",vs,"Email: "+d(i.value.patient.email),1),e("p",ys,"Gender: "+d(i.value.patient.gender),1),xs,e("p",gs,"Schedule: "+d(i.value.schedule),1),e("p",ws,"Message: "+d(i.value.message),1),e("p",bs,"Created: "+d(i.value.created_at),1),Ss,(m(!0),S(Q,null,fe(i.value.services,t=>(m(),S("p",{class:"text-sm",key:t.id},d(t.service.service)+" - "+d(c(B)(t.service.price)),1))),128))]),footer:s(()=>[l(f,{onClick:g(j,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[ks]),_:1},8,["onClick"]),i.value.deleted_at==null&&i.value.appointment_status=="Approved"&&i.value.appointment_status!="Cancelled"&&o.$page.props.auth.user.is_admin?(m(),w(f,{key:0,onClick:g(Ee,["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[Cs]),_:1},8,["onClick"])):v("",!0),i.value.deleted_at==null&&i.value.appointment_status=="Pending"&&i.value.appointment_status!="Cancelled"&&o.$page.props.auth.user.is_admin?(m(),w(f,{key:1,onClick:g($e,["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[As]),_:1},8,["onClick"])):v("",!0)]),_:1})):v("",!0),W.value?(m(),w(z,{key:1,onClose:I},{title:s(()=>[Vs]),body:s(()=>[Ps]),footer:s(()=>[l(f,{onClick:g(I,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[Ms]),_:1},8,["onClick"]),l(f,{onClick:g(Me,["prevent"]),text:"",size:"sm",color:"error"},{default:s(()=>[zs]),_:1},8,["onClick"])]),_:1})):v("",!0),V.value?(m(),w(z,{key:2,onClose:se},{title:s(()=>[$s,Es]),body:s(()=>[T.value?(m(),S("div",Ts,Ls)):v("",!0),Re(e("div",null,Is,512),[[He,!T.value]]),l(C,{for:"payment_fname",error:r.errors.schedule,label:"Full Name",class:"mt-1 mb-3"},{default:s(()=>[l(D,{disabled:"",type:"text",id:"payment_fname",modelValue:i.value.patient.full_name,"onUpdate:modelValue":n[3]||(n[3]=t=>i.value.patient.full_name=t),"aria-disabled":""},null,8,["modelValue"])]),_:1},8,["error"]),l(C,{for:"payment_fname",error:r.errors.schedule,label:"Address",class:"mt-3 mb-3"},{default:s(()=>[l(he,{type:"text",id:"payment_fname",modelValue:i.value.patient.address,"onUpdate:modelValue":n[4]||(n[4]=t=>i.value.patient.address=t),disabled:"","aria-disabled":""},null,8,["modelValue"])]),_:1},8,["error"])]),footer:s(()=>[l(f,{onClick:g(se,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[Ns]),_:1},8,["onClick"]),l(f,{onClick:g(Ae,["prevent"]),text:"",size:"sm",color:"success",disabled:c(k)},{default:s(()=>[u(d(c(k)?"Processing..":"Proceed"),1)]),_:1},8,["onClick","disabled"])]),_:1})):v("",!0),$.value?(m(),w(z,{key:3,onClose:G},{title:s(()=>[Us,Bs]),body:s(()=>[l(C,{for:"payment_fname",error:r.errors.schedule,label:"Amount Tendered",class:"mt-3 mb-3"},{default:s(()=>[l(D,{type:"number",id:"amounttendered",modelValue:c(P).amount_tendered,"onUpdate:modelValue":n[5]||(n[5]=t=>c(P).amount_tendered=t)},null,8,["modelValue"])]),_:1},8,["error"]),l(C,{for:"subtotal",error:r.errors.subtotal,label:"Subtotal",class:"mt-3 mb-3"},{default:s(()=>[l(D,{type:"number",id:"subtotal",modelValue:i.value.subtotal,"onUpdate:modelValue":n[6]||(n[6]=t=>i.value.subtotal=t),disabled:"","aria-disabled":""},null,8,["modelValue"])]),_:1},8,["error"])]),footer:s(()=>[l(f,{onClick:g(G,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[Os]),_:1},8,["onClick"]),l(f,{onClick:g(Ce,["prevent"]),text:"",size:"sm",color:"success",disabled:c(k)},{default:s(()=>[u(d(c(k)?"Processing..":"Proceed Payment"),1)]),_:1},8,["onClick","disabled"])]),_:1})):v("",!0),q.value?(m(),w(z,{key:4,onClose:M},{title:s(()=>[e("p",Rs,d(E.value?"New Appointment":"Update Appointment"),1),Hs]),body:s(()=>[e("form",Ws,[l(C,{for:"appointment",error:r.errors.schedule,label:"Date and Time",class:"mt-3"},{default:s(()=>[l(D,{type:"datetime-local",id:"appointment",modelValue:c(p).schedule,"onUpdate:modelValue":n[7]||(n[7]=t=>c(p).schedule=t)},null,8,["modelValue"])]),_:1},8,["error"]),l(C,{for:"message",error:r.errors.message,label:"Message",class:"mt-2"},{default:s(()=>[l(he,{id:"message",modelValue:c(p).message,"onUpdate:modelValue":n[8]||(n[8]=t=>c(p).message=t)},null,8,["modelValue"])]),_:1},8,["error"]),Ys,l(c(xe),{modelValue:c(p).selected_services,"onUpdate:modelValue":n[9]||(n[9]=t=>c(p).selected_services=t),options:r.services,multiple:!0,class:"border-2 border-gray-500 rounded-lg",selectLabel:"Select",deselectLabel:"Deselect",label:"service","track-by":"id"},{option:s(t=>[e("div",qs,[e("span",Gs,d(t.option.service),1),e("span",Ks,d(c(B)(t.option.price)),1)])]),_:1},8,["modelValue","options"]),r.errors.selected_services?(m(),S("p",Xs,d(r.errors.selected_services),1)):v("",!0),o.$page.props.auth.user.is_admin?(m(),S("div",Js,[Qs,l(c(xe),{modelValue:c(p).user_id,"onUpdate:modelValue":n[10]||(n[10]=t=>c(p).user_id=t),onSearchChange:c(Le),options:r.users,multiple:!1,class:"border-2 border-gray-500 rounded-lg",selectLabel:"Select",deselectLabel:"Deselect",label:"full_name","track-by":"id",disabled:!E.value},null,8,["modelValue","onSearchChange","options","disabled"]),r.errors.user_id?(m(),S("p",Zs,d(r.errors.user_id),1)):v("",!0)])):v("",!0),e("p",eo,"Subtotal: "+d(c(B)(c(p).subtotal)),1)])]),footer:s(()=>[l(f,{onClick:g(M,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[to]),_:1},8,["onClick"]),l(f,{onClick:g(Pe,["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[so]),_:1},8,["onClick"])]),_:1})):v("",!0),Y.value?(m(),w(z,{key:5,onClose:K},{title:s(()=>[oo]),body:s(()=>[lo]),footer:s(()=>[l(f,{onClick:g(K,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[ao]),_:1},8,["onClick"]),l(f,{onClick:g(ze,["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[no]),_:1},8,["onClick"])]),_:1})):v("",!0)]}),_:1})],64))}};export{wo as default};
