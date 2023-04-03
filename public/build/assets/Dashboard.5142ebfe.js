import{r as h,a as ee,c as v,u as te,w as T,l as se,d as B,o as i,b as p,e as o,f as s,H as oe,g as n,F as z,h as ae,i as e,s as d,j as a,k as S,L as le,n as L,p as ne,y as r,q as V,m as b}from"./app.00439c91.js";import{_ as ie}from"./Authenticated.a42a738f.js";import{f as M,c as P,s as re,a as F}from"./Utilities.5f54765f.js";import{_ as ce}from"./FloatingSelect.ace9318b.js";import{_ as H,a as pe}from"./Modal.vue_vue_type_style_index_0_lang.13ba25eb.js";import{_ as O}from"./Modal.f877938c.js";import{_ as w}from"./Button.b7006ce7.js";import{_ as E}from"./Chip.c879e49c.js";import{_ as de}from"./Calendar.91ef27a7.js";import"./vue-multiselect.esm.1556e669.js";import{_ as me,a as ue}from"./AreaChart.04b56028.js";import{v as U}from"./main.7b092964.js";import"./moment.9709ab41.js";const _e={class:"px-6 max-w-8xl lg:px-8"},he={key:0,class:"overflow-hidden bg-white sm:rounded-lg"},fe=e("div",{class:"p-6"},[e("p",{class:"text-xl font-medium"},"Welcome to Dashboard"),e("p",{class:"text-sm text-gray-600"}," Shown below are the summary of your transactions and records. ")],-1),xe=[fe],ve={key:1,class:"flex flex-wrap max-w-8xl sm:px-6 lg:px-8 gap-y-4 gap-x-4"},we={class:"flex-1 p-4 text-white bg-green-600 rounded-md"},ge={class:"flex justify-between"},ye={class:"flex items-center text-9xl"},be=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})]),e("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[r(" Total "),e("br"),r("Services ")])],-1),ke=e("span",{class:"sr-only"},"Total Services",-1),Ce={class:"flex-1 p-4 text-white bg-blue-600 rounded-md"},Ae={class:"flex justify-between"},Se={class:"flex items-center text-9xl"},Ve=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})]),e("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[r(" Total "),e("br"),r("Patients ")])],-1),De=e("span",{class:"sr-only"},"Total Patients",-1),je={class:"flex-1 p-4 text-white bg-orange-600 rounded-md"},$e={class:"flex justify-between"},ze={class:"flex items-center text-9xl"},Me=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-9 w-9",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})]),e("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[r(" Today's "),e("br"),r("Appointments ")])],-1),Ie=e("span",{class:"sr-only"},"Today's Appointments",-1),Ne={key:2,class:"px-6 max-w-8xl lg:px-8"},Te={class:"md:flex gap-x-2"},Be={class:"flex-1 w-full md:w-1/2"},Le={class:"mt-8"},Pe=e("div",null,[e("p",{class:"text-xl font-medium"}," Services Summary "),e("p",{class:"text-sm"}," Monthly overview of services booked by patients. ")],-1),Fe={class:"mt-4 mb-3 flex justify-end items-center"},He=e("p",{class:"text-sm mr-3"},"Filter Date:",-1),Oe={class:"flex-1 w-full md:w-1/2"},Ee=e("div",{class:"mt-8 mb-8"},[e("p",{class:"text-xl font-medium"}," Completed Appointments "),e("p",{class:"text-sm"}," Here is an overview of your completed appointments for this week. ")],-1),Ue={class:"mt-4 mb-3 flex justify-end items-center"},qe=e("p",{class:"text-sm mr-3"},"Filter Date:",-1),Ke={class:"px-6 max-w-8xl lg:px-8"},Ge=e("div",{class:"mt-8 mb-6"},[e("p",{class:"text-xl font-medium"},"Appointment Calendar"),e("p",null,"Here is an overview of your appointments.")],-1),Re={class:"flex-1 w-full"},We={class:"pb-6 mt-10 bg-white border-gray-200 rounded-lg max-w-8xl sm:px-6 lg:px-8"},Je={class:"flex items-center justify-between"},Qe=e("div",null,[e("p",{class:"text-xl font-medium"},"Latest Appointments"),e("p",{class:"text-sm text-gray-700"}," Shown below are the latest appointments. ")],-1),Xe=r(" View All "),Ye=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ze={class:"flex justify-between mb-6 mt-7 gap-x-2"},et=e("option",{value:"with"},"All Appointments",-1),tt=e("option",{value:""},"Active Appointments",-1),st=e("option",{value:"only"},"Trashed Appointments",-1),ot={class:"flex gap-x-2"},at={class:"overflow-x-auto"},lt={class:"min-w-full divide-y divide-gray-300"},nt=e("thead",{class:"bg-gray-50"},[e("tr",{class:"[&>*]:uppercase font-medium text-xs text-gray-500"},[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Status "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Patient "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Email "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Schedule "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Message "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Sub Total "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Payment "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Created On "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"}," Deleted On "),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 sm:pl-6 text-left"}," Actions ")])],-1),it={class:"bg-white divide-y divide-gray-200"},rt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},ct={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6 gap-x-2"},pt={class:"flex items-center gap-x-2"},dt={class:"flex items-center justify-center w-8 h-8 bg-blue-500 border-gray-100 rounded-full"},mt={key:0,xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10 text-white",viewBox:"0 0 20 20",fill:"currentColor"},ut=e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"},null,-1),_t=[ut],ht=["src"],ft={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},xt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},vt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},wt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},gt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},yt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},bt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},kt={class:"relative py-4 pl-3 pr-4 text-sm whitespace-nowrap sm:pr-6"},Ct=r("Details"),At=r("Trash"),St={key:0},Vt=e("td",{colspan:"9"},[e("div",{class:"py-4 mx-auto font-medium text-center text-gray-600"}," No data available .. ")],-1),Dt=[Vt],jt=e("p",{class:"mt-2 text-sm text-gray-500"}," Showing the latest entry of appointments from patients. ",-1),$t=e("p",{class:"text-xl font-bold"},"Appointment Information",-1),zt=e("p",{class:"text-sm text-gray-600"}," Here are the informations for this appointment ",-1),Mt=e("p",{class:"mt-3 mb-2"},"Patient Information",-1),It={class:"text-sm"},Nt={class:"text-sm"},Tt={class:"text-sm"},Bt=e("p",{class:"mt-4 mb-2"},"Appointment Information",-1),Lt={class:"text-sm"},Pt={class:"text-sm"},Ft={class:"text-sm"},Ht=e("p",{class:"mt-4 mb-2"},"Services Selected",-1),Ot=r("Close"),Et=r("Approve"),Ut=e("p",{class:"text-xl font-bold"},"Confirm Delete",-1),qt=e("p",{class:"text-sm text-gray-600"}," Are you sure you want to move this appointment to trash? Once moved to trash the appointment status will be marked as cancelled and cannot be restored. ",-1),Kt=r("Close"),Gt=r("Confirm"),ns={__name:"Dashboard",props:{totalInquiries:Number,patientsCount:Number,servicesCount:Number,todaysAppointment:Number,appointments:Object,filters:Object,chartServices:Object,appointmentsIncome:[Object,Array]},setup(_){const m=_,D=h(!1),j=h(!1),c=h({id:null,message:null,schedule:null,patient:{first_name:null,last_name:null}}),q=ee({id:null,service:null,price:null,subtotal:0,selected_services:[],user_id:null,message:"",schedule:""}),K=v(()=>m.chartServices.map(l=>l.service)),G=v(()=>m.chartServices.map(l=>l.monthly_appointments_count)),R=v(()=>m.appointmentsIncome.map(l=>l.date)),W=v(()=>m.appointmentsIncome.map(l=>String(l.subtotal))),J=v(()=>[{name:"Income",data:W.value}]),Q=()=>{q.put(`/appointments/approve/${c.value.id}`,{preserveState:!0,onError:()=>{$.error("Something went wrong")},onSuccess:()=>{$.success("Appointment has been approved successfully!"),C()}})},X=()=>{B.Inertia.delete(`/appointments/${c.value.id}`,{preserveState:!0,onSuccess:()=>{$.success("Appointment has been moved to trash successfully!"),k()}})},k=()=>{D.value=!D.value},C=()=>{j.value=!j.value};v(()=>{var l;return(l=ae().props.value.errors.error)!=null?l:"Something went wrong"});const $=te();let g=h(m.filters.search),y=h(m.filters.trashed),f=h(m.filters.summaryDate),x=h(m.filters.appointmentDate);T(()=>f.value,()=>{A()}),T(()=>x.value,()=>{A()});const A=se.exports.debounce(()=>{B.Inertia.get("/dashboard",{search:g.value,trashed:y.value,summaryDate:f.value,appointmentDate:x.value},{preserveState:!0,only:["appointments","appointmentsIncome","chartServices"]})},500);return(l,u)=>(i(),p(z,null,[o(s(oe),{title:"Dashboard"}),o(ie,null,{default:n(()=>[e("div",_e,[l.$page.props.auth.user.is_admin?(i(),p("div",he,xe)):d("",!0),l.$page.props.auth.user.is_admin?(i(),p("div",ve,[e("div",we,[e("div",ge,[e("div",ye,a(s(M)(_.servicesCount)),1),be]),ke]),e("div",Ce,[e("div",Ae,[e("div",Se,a(s(M)(_.patientsCount)),1),Ve]),De]),e("div",je,[e("div",$e,[e("div",ze,a(s(M)(_.todaysAppointment)),1),Me]),Ie])])):d("",!0),l.$page.props.auth.user.is_admin?(i(),p("div",Ne,[e("div",Te,[e("div",Be,[e("div",Le,[Pe,e("div",Fe,[He,o(s(U),{modelValue:s(f),"onUpdate:modelValue":u[0]||(u[0]=t=>S(f)?f.value=t:f=t),range:"","enable-time-picker":!1},null,8,["modelValue"])])]),o(me,{labels:s(K),series:s(G)},null,8,["labels","series"])]),e("div",Oe,[Ee,e("div",Ue,[qe,o(s(U),{modelValue:s(x),"onUpdate:modelValue":u[1]||(u[1]=t=>S(x)?x.value=t:x=t),range:"","enable-time-picker":!1},null,8,["modelValue"])]),o(ue,{labels:s(R),series:s(J)},null,8,["labels","series"])])])])):d("",!0),e("div",Ke,[Ge,e("div",Re,[o(de,{data:_.appointments},null,8,["data"])])]),e("div",We,[e("div",Je,[Qe,o(s(le),{href:l.route("appointments.index"),class:"flex items-center font-medium transition duration-200 ease-in-out hover:translate-x-1 hover:text-blue-500 gap-x-1"},{default:n(()=>[Xe,Ye]),_:1},8,["href"])]),e("div",Ze,[o(H,{label:"Filter Appointment",class:"w-52"},{default:n(()=>[o(ce,{onChange:s(A),modelValue:s(y),"onUpdate:modelValue":u[2]||(u[2]=t=>S(y)?y.value=t:y=t)},{default:n(()=>[et,tt,st]),_:1},8,["onChange","modelValue"])]),_:1}),e("div",ot,[o(H,{label:"Search Appointment",for:"search"},{default:n(()=>[o(pe,{modelValue:s(g),"onUpdate:modelValue":u[3]||(u[3]=t=>S(g)?g.value=t:g=t),id:"search",onKeyup:s(A)},null,8,["modelValue","onKeyup"])]),_:1})])]),e("div",at,[e("table",lt,[nt,e("tbody",it,[(i(!0),p(z,null,L(_.appointments,(t,Y)=>{var I,N;return i(),p("tr",{key:Y,class:ne(["hover:bg-gray-100",{"bg-red-100":t.deleted_at}])},[e("td",rt,[o(E,{label:t.appointment_status,color:s(P)(t.appointment_status)},null,8,["label","color"])]),e("td",ct,[e("div",pt,[e("div",dt,[(I=t.patient)!=null&&I.image?d("",!0):(i(),p("svg",mt,_t)),e("img",{src:`images/profile/${(N=t.patient)==null?void 0:N.image}`,class:"h-full rounded-full object-fit",alt:""},null,8,ht)]),r(" "+a(t.patient.full_name),1)])]),e("td",ft,a(t.patient.email),1),e("td",xt,a(t.schedule),1),e("td",vt,a(s(re)(t.message)),1),e("td",wt,a(s(F)(t.subtotal)),1),e("td",gt,[o(E,{label:t.payment_status,color:s(P)(t.payment_status)},null,8,["label","color"])]),e("td",yt,a(t.created_at),1),e("td",bt,a(t.deleted_at),1),e("td",kt,[o(w,{text:"",size:"sm",onClick:Z=>{C(),c.value=t}},{default:n(()=>[Ct]),_:2},1032,["onClick"]),!t.deleted_at&&(t.appointment_status==="Pending"||l.$page.props.auth.user.is_admin)?(i(),V(w,{key:0,onClick:b(Z=>{k(),c.value=t},["prevent"]),text:"",size:"sm",color:"error"},{default:n(()=>[At]),_:2},1032,["onClick"])):d("",!0)])],2)}),128)),_.appointments.length==0?(i(),p("tr",St,Dt)):d("",!0)])])]),jt]),j.value?(i(),V(O,{key:3,onClose:C},{title:n(()=>[$t,zt]),body:n(()=>[Mt,e("p",It," Full Name: "+a(c.value.patient.full_name),1),e("p",Nt," Email: "+a(c.value.patient.email),1),e("p",Tt," Gender: "+a(c.value.patient.gender),1),Bt,e("p",Lt," Schedule: "+a(c.value.schedule),1),e("p",Pt," Message: "+a(c.value.message),1),e("p",Ft," Created: "+a(c.value.created_at),1),Ht,(i(!0),p(z,null,L(c.value.services,t=>(i(),p("p",{class:"text-sm",key:t.id},a(t.service.service)+" - "+a(s(F)(t.service.price)),1))),128))]),footer:n(()=>[o(w,{onClick:b(C,["prevent"]),text:"",size:"sm",color:"gray"},{default:n(()=>[Ot]),_:1},8,["onClick"]),c.value.appointment_status=="Pending"&&c.value.appointment_status!="Cancelled"&&l.$page.props.auth.user.is_admin?(i(),V(w,{key:0,onClick:b(Q,["prevent"]),text:"",size:"sm",color:"success"},{default:n(()=>[Et]),_:1},8,["onClick"])):d("",!0)]),_:1})):d("",!0),D.value?(i(),V(O,{key:4,onClose:k},{title:n(()=>[Ut]),body:n(()=>[qt]),footer:n(()=>[o(w,{onClick:b(k,["prevent"]),text:"",size:"sm",color:"gray"},{default:n(()=>[Kt]),_:1},8,["onClick"]),o(w,{onClick:b(X,["prevent"]),text:"",size:"sm",color:"error"},{default:n(()=>[Gt]),_:1},8,["onClick"])]),_:1})):d("",!0)])]),_:1})],64))}};export{ns as default};
