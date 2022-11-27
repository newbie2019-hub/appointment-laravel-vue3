import{r as f,a as G,c as R,u as W,l as J,d as z,o as i,b as p,e as n,f as a,H as Q,g as l,F as S,h as X,i as e,s as d,j as s,L as Y,k as M,n as V,p as Z,y as r,q as b,m as v}from"./app.a9bf51d5.js";import{_ as ee}from"./Authenticated.4410648f.js";import{f as $,c as N,s as te,a as T}from"./Utilities.5f54765f.js";import{_ as se}from"./FloatingSelect.2184c225.js";import{_ as I}from"./FormInput.c87e0c32.js";import{_ as B}from"./Modal.3db3b606.js";import{_ as oe}from"./FloatingInput.cb12f430.js";import{_}from"./Button.7fbf1d30.js";import{_ as D}from"./Chip.96b31716.js";import{_ as ae}from"./Calendar.538015ce.js";import"./vue-multiselect.esm.60a90da5.js";import{_ as le,a as ne}from"./AreaChart.fd9f4359.js";/* empty css                                              */import"./moment.9709ab41.js";const ie={class:"px-6 max-w-8xl lg:px-8"},re={key:0,class:"overflow-hidden bg-white sm:rounded-lg"},ce=e("div",{class:"p-6"},[e("p",{class:"text-xl font-medium"},"Welcome to Dashboard"),e("p",{class:"text-sm text-gray-600"},"Shown below are the summary of your transactions and records.")],-1),pe=[ce],de={key:1,class:"flex flex-wrap max-w-8xl sm:px-6 lg:px-8 gap-y-4 gap-x-4"},me={class:"flex-1 p-4 text-white bg-green-600 rounded-md md:max-w-md"},ue={class:"flex justify-between"},_e={class:"flex items-center text-9xl"},he=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})]),e("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[r("Total "),e("br"),r("Services")])],-1),xe=e("span",{class:"sr-only"},"Total Services",-1),fe={class:"flex-1 p-4 text-white bg-blue-600 rounded-md md:max-w-md"},ve={class:"flex justify-between"},we={class:"flex items-center text-9xl"},ge=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})]),e("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[r("Total "),e("br"),r("Patients")])],-1),ye=e("span",{class:"sr-only"},"Total Patients",-1),be={class:"flex-1 p-4 text-white bg-orange-600 rounded-md"},ke={class:"flex justify-between"},Ce={class:"flex items-center text-9xl"},Ae=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-9 w-9",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})]),e("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[r("Today's "),e("br"),r("Appointments")])],-1),Se=e("span",{class:"sr-only"},"Today's Appointments",-1),$e={key:2,class:"px-6 max-w-8xl lg:px-8"},je={class:"md:flex gap-x-2"},ze={class:"flex-1 w-full md:w-1/2"},Me=e("div",{class:"mt-8 mb-8"},[e("p",{class:"text-xl font-medium"},"Services Summary"),e("p",{class:"text-sm"},"Monthly overview of services booked by patients.")],-1),Ve={class:"flex-1 w-full md:w-1/2"},Ne=e("div",{class:"mt-8 mb-8"},[e("p",{class:"text-xl font-medium"},"Completed Appointments"),e("p",{class:"text-sm"},"Here is an overview of your completed appointments for this week.")],-1),Te={class:"px-6 max-w-8xl lg:px-8"},Ie=e("div",{class:"mt-8 mb-6"},[e("p",{class:"text-xl font-medium"},"Appointment Calendar"),e("p",null,"Here is an overview of your appointments.")],-1),Be={class:"flex-1 w-full"},De={class:"pb-6 mt-10 bg-white border-gray-200 rounded-lg max-w-8xl sm:px-6 lg:px-8"},Le={class:"flex items-center justify-between"},Pe=e("div",null,[e("p",{class:"text-xl font-medium"},"Latest Appointments"),e("p",{class:"text-sm text-gray-700"},"Shown below are the latest appointments.")],-1),He=r(" View All "),Oe=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Fe={class:"flex justify-between mb-6 mt-7 gap-x-2"},Ee=e("option",{value:"with"},"All Appointments",-1),qe=e("option",{value:""},"Active Appointments",-1),Ke=e("option",{value:"only"},"Trashed Appointments",-1),Ue={class:"flex gap-x-2"},Ge={class:"overflow-x-auto"},Re={class:"min-w-full divide-y divide-gray-300"},We=e("thead",{class:"bg-gray-50"},[e("tr",{class:"[&>*]:uppercase font-medium text-xs text-gray-500"},[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Status"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Patient"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Email"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Schedule"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Message"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Sub Total"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Payment"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Created On"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Deleted On"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 sm:pl-6 text-left"},"Actions")])],-1),Je={class:"bg-white divide-y divide-gray-200"},Qe={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},Xe={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6 gap-x-2"},Ye={class:"flex items-center gap-x-2"},Ze={class:"flex items-center justify-center w-8 h-8 bg-blue-500 border-gray-100 rounded-full"},et={key:0,xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10 text-white",viewBox:"0 0 20 20",fill:"currentColor"},tt=e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"},null,-1),st=[tt],ot=["src"],at={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},lt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},nt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},it={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},rt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},ct={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},pt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},dt={class:"relative py-4 pl-3 pr-4 text-sm whitespace-nowrap sm:pr-6"},mt=r("Details"),ut=r("Trash"),_t={key:0},ht=e("td",{colspan:"9"},[e("div",{class:"py-4 mx-auto font-medium text-center text-gray-600"},"No data available ..")],-1),xt=[ht],ft=e("p",{class:"mt-2 text-sm text-gray-500"},"Showing the latest entry of appointments from patients.",-1),vt=e("p",{class:"text-xl font-bold"},"Appointment Information",-1),wt=e("p",{class:"text-sm text-gray-600"},"Here are the informations for this appointment",-1),gt=e("p",{class:"mt-3 mb-2"},"Patient Information",-1),yt={class:"text-sm"},bt={class:"text-sm"},kt={class:"text-sm"},Ct=e("p",{class:"mt-4 mb-2"},"Appointment Information",-1),At={class:"text-sm"},St={class:"text-sm"},$t={class:"text-sm"},jt=e("p",{class:"mt-4 mb-2"},"Services Selected",-1),zt=r("Close"),Mt=r("Approve"),Vt=e("p",{class:"text-xl font-bold"},"Confirm Delete",-1),Nt=e("p",{class:"text-sm text-gray-600"},"Are you sure you want to move this appointment to trash? Once moved to trash the appointment status will be marked as cancelled and cannot be restored.",-1),Tt=r("Close"),It=r("Confirm"),Jt={__name:"Dashboard",props:{totalInquiries:Number,patientsCount:Number,servicesCount:Number,todaysAppointment:Number,appointments:Object,filters:Object,chartServices:Object,appointmentsIncome:[Object,Array]},setup(m){const u=m,k=f(!1),C=f(!1),c=f({id:null,message:null,schedule:null,patient:{first_name:null,last_name:null}}),L=G({id:null,service:null,price:null,subtotal:0,selected_services:[],user_id:null,message:"",schedule:""}),P=u.chartServices.map(o=>o.service),H=u.chartServices.map(o=>o.monthly_appointments_count),O=u.appointmentsIncome.map(o=>o.date),F=[{name:"Income",data:u.appointmentsIncome.map(o=>String(o.subtotal))}],E=()=>{L.put(`/appointments/approve/${c.value.id}`,{preserveState:!0,onError:()=>{A.error("Something went wrong")},onSuccess:()=>{A.success("Appointment has been approved successfully!"),g()}})},q=()=>{z.Inertia.delete(`/appointments/${c.value.id}`,{preserveState:!0,onSuccess:()=>{A.success("Appointment has been moved to trash successfully!"),w()}})},w=()=>{k.value=!k.value},g=()=>{C.value=!C.value};R(()=>{var o;return(o=X().props.value.errors.error)!=null?o:"Something went wrong"});const A=W();let h=f(u.filters.search),x=f(u.filters.trashed);const j=J.exports.debounce(()=>{z.Inertia.get("/dashboard",{search:h.value,trashed:x.value},{preserveState:!0,only:["appointments"]})},300);return(o,y)=>(i(),p(S,null,[n(a(Q),{title:"Dashboard"}),n(ee,null,{default:l(()=>[e("div",ie,[o.$page.props.auth.user.is_admin?(i(),p("div",re,pe)):d("",!0),o.$page.props.auth.user.is_admin?(i(),p("div",de,[e("div",me,[e("div",ue,[e("div",_e,s(a($)(m.servicesCount)),1),he]),xe]),e("div",fe,[e("div",ve,[e("div",we,s(a($)(m.patientsCount)),1),ge]),ye]),e("div",be,[e("div",ke,[e("div",Ce,s(a($)(m.todaysAppointment)),1),Ae]),Se])])):d("",!0),o.$page.props.auth.user.is_admin?(i(),p("div",$e,[e("div",je,[e("div",ze,[Me,n(le,{labels:a(P),series:a(H)},null,8,["labels","series"])]),e("div",Ve,[Ne,n(ne,{labels:a(O),series:F},null,8,["labels"])])])])):d("",!0),e("div",Te,[Ie,e("div",Be,[n(ae,{data:m.appointments},null,8,["data"])])]),e("div",De,[e("div",Le,[Pe,n(a(Y),{href:o.route("appointments.index"),class:"flex items-center font-medium transition duration-200 ease-in-out hover:translate-x-1 hover:text-blue-500 gap-x-1"},{default:l(()=>[He,Oe]),_:1},8,["href"])]),e("div",Fe,[n(I,{label:"Filter Appointment",class:"w-52"},{default:l(()=>[n(se,{onChange:a(j),modelValue:a(x),"onUpdate:modelValue":y[0]||(y[0]=t=>M(x)?x.value=t:x=t)},{default:l(()=>[Ee,qe,Ke]),_:1},8,["onChange","modelValue"])]),_:1}),e("div",Ue,[n(I,{label:"Search Appointment",for:"search"},{default:l(()=>[n(oe,{modelValue:a(h),"onUpdate:modelValue":y[1]||(y[1]=t=>M(h)?h.value=t:h=t),id:"search",onKeyup:a(j)},null,8,["modelValue","onKeyup"])]),_:1})])]),e("div",Ge,[e("table",Re,[We,e("tbody",Je,[(i(!0),p(S,null,V(m.appointments,(t,K)=>(i(),p("tr",{key:K,class:Z(["hover:bg-gray-100",{"bg-red-100":t.deleted_at}])},[e("td",Qe,[n(D,{label:t.appointment_status,color:a(N)(t.appointment_status)},null,8,["label","color"])]),e("td",Xe,[e("div",Ye,[e("div",Ze,[t.patient.image?d("",!0):(i(),p("svg",et,st)),e("img",{src:`images/profile/${t.patient.image}`,class:"h-full rounded-full object-fit",alt:""},null,8,ot)]),r(" "+s(t.patient.full_name),1)])]),e("td",at,s(t.patient.email),1),e("td",lt,s(t.schedule),1),e("td",nt,s(a(te)(t.message)),1),e("td",it,s(a(T)(t.subtotal)),1),e("td",rt,[n(D,{label:t.payment_status,color:a(N)(t.payment_status)},null,8,["label","color"])]),e("td",ct,s(t.created_at),1),e("td",pt,s(t.deleted_at),1),e("td",dt,[n(_,{text:"",size:"sm",onClick:U=>{g(),c.value=t}},{default:l(()=>[mt]),_:2},1032,["onClick"]),!t.deleted_at&&(t.appointment_status==="Pending"||o.$page.props.auth.user.is_admin)?(i(),b(_,{key:0,onClick:v(U=>{w(),c.value=t},["prevent"]),text:"",size:"sm",color:"error"},{default:l(()=>[ut]),_:2},1032,["onClick"])):d("",!0)])],2))),128)),m.appointments.length==0?(i(),p("tr",_t,xt)):d("",!0)])])]),ft]),C.value?(i(),b(B,{key:3,onClose:g},{title:l(()=>[vt,wt]),body:l(()=>[gt,e("p",yt,"Full Name: "+s(c.value.patient.full_name),1),e("p",bt,"Email: "+s(c.value.patient.email),1),e("p",kt,"Gender: "+s(c.value.patient.gender),1),Ct,e("p",At,"Schedule: "+s(c.value.schedule),1),e("p",St,"Message: "+s(c.value.message),1),e("p",$t,"Created: "+s(c.value.created_at),1),jt,(i(!0),p(S,null,V(c.value.services,t=>(i(),p("p",{class:"text-sm",key:t.id},s(t.service.service)+" - "+s(a(T)(t.service.price)),1))),128))]),footer:l(()=>[n(_,{onClick:v(g,["prevent"]),text:"",size:"sm",color:"gray"},{default:l(()=>[zt]),_:1},8,["onClick"]),c.value.appointment_status=="Pending"&&c.value.appointment_status!="Cancelled"&&o.$page.props.auth.user.is_admin?(i(),b(_,{key:0,onClick:v(E,["prevent"]),text:"",size:"sm",color:"success"},{default:l(()=>[Mt]),_:1},8,["onClick"])):d("",!0)]),_:1})):d("",!0),k.value?(i(),b(B,{key:4,onClose:w},{title:l(()=>[Vt]),body:l(()=>[Nt]),footer:l(()=>[n(_,{onClick:v(w,["prevent"]),text:"",size:"sm",color:"gray"},{default:l(()=>[Tt]),_:1},8,["onClick"]),n(_,{onClick:v(q,["prevent"]),text:"",size:"sm",color:"error"},{default:l(()=>[It]),_:1},8,["onClick"])]),_:1})):d("",!0)])]),_:1})],64))}};export{Jt as default};