import{o as B,G as L,i as p,e as m,f as o,r as w,b as U,c as R,a as J,l as Q,d as M,g as l,H as X,h as n,F as S,u as Z,j as e,k as s,L as ee,m as z,p as $,q as te,v as u,z as r,s as C,n as y}from"./app.0003ba5e.js";import{_ as se}from"./Authenticated.957d24f0.js";import{f as j,c as V,s as oe,a as T}from"./Utilities.5f54765f.js";import{_ as ae}from"./FloatingSelect.6b50903b.js";import{_ as I,a as le}from"./FormInput.ff8c0edc.js";import{_ as N}from"./Modal.9f6a6e14.js";import{_ as h}from"./Button.b219d5ab.js";import{_ as ne,a as D}from"./Calendar.8a187936.js";import"./vue-multiselect.esm.0c79ea29.js";/* empty css                                              */const ie={id:"chart"},re={__name:"PolarCharts",props:{series:{type:[Object,Array],default:[]},labels:{type:[Object,Array],default:[]},chartOptions:{type:Object,default:{chart:{width:"100%",type:"polarArea"},labels:[],fill:{opacity:1},stroke:{width:1,colors:void 0},yaxis:{show:!1},legend:{position:"right"},plotOptions:{polarArea:{rings:{strokeWidth:0},spokes:{strokeWidth:0}}},theme:{monochrome:{enabled:!0,shadeTo:"light",shadeIntensity:.6}}}}},setup(i){const d=i;return B(()=>{d.chartOptions.labels=d.labels}),(_,x)=>{const a=L("apexchart");return p(),m("div",ie,[o(a,{type:"polarArea",class:"w-full",options:i.chartOptions,series:i.series},null,8,["options","series"])])}}},ce={id:"chart"},pe={__name:"AreaChart",props:{series:{type:[Object,Array],default:[{name:"Weekly Income",data:[]}]},labels:{type:[Object,Array],default:[]},chartOptions:{type:Object,default:{chart:{type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"date",categories:[],convertedCatToNumeric:!1},fill:{colors:["#22a34a"]},markers:{colors:["#22a34a"]},tooltip:{x:{format:"YYYY-MM-DD"}}}}},setup(i){const d=i;return B(()=>{d.chartOptions.xaxis.categories=d.labels}),(_,x)=>{const a=L("apexchart");return p(),m("div",ce,[o(a,{type:"area",class:"w-full",options:i.chartOptions,series:i.series},null,8,["options","series"])])}}},de={class:"max-w-7xl mx-auto px-6 lg:px-8"},me=e("div",{class:"bg-white overflow-hidden sm:rounded-lg"},[e("div",{class:"p-6"},[e("p",{class:"text-xl font-medium"},"Welcome to Dashboard"),e("p",{class:"text-sm text-gray-600"},"Shown below are the summary of your transactions and records.")])],-1),ue={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-y-4 gap-x-4"},he={class:"bg-green-600 flex-1 p-4 text-white rounded-md md:max-w-md"},_e={class:"flex justify-between"},xe={class:"text-9xl flex items-center"},fe=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})]),e("p",{class:"uppercase font-medium tracking-wider leading-5 text-right"},[r("Total "),e("br"),r("Services")])],-1),ve=e("span",{class:"sr-only"},"Total Services",-1),we={class:"bg-blue-600 flex-1 p-4 text-white rounded-md md:max-w-md"},ye={class:"flex justify-between"},ge={class:"text-9xl flex items-center"},be=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})]),e("p",{class:"uppercase font-medium tracking-wider leading-5 text-right"},[r("Total "),e("br"),r("Patients")])],-1),ke=e("span",{class:"sr-only"},"Total Patients",-1),Ce={class:"bg-orange-600 flex-1 p-4 text-white rounded-md"},Ae={class:"flex justify-between"},Se={class:"text-9xl flex items-center"},je=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-9 w-9",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})]),e("p",{class:"uppercase font-medium tracking-wider leading-5 text-right"},[r("Today's "),e("br"),r("Appointments")])],-1),Oe=e("span",{class:"sr-only"},"Today's Appointments",-1),Me={class:"max-w-7xl mx-auto px-6 lg:px-8"},ze={class:"md:flex gap-x-2"},$e={class:"flex-1 w-full md:w-1/2"},Ve=e("div",{class:"mt-8 mb-8"},[e("p",{class:"font-medium text-xl"},"Services Summary"),e("p",{class:"text-sm"},"Monthly overview of services booked by patients.")],-1),Te={class:"flex-1 w-full md:w-1/2"},Ie=e("div",{class:"mt-8 mb-8"},[e("p",{class:"font-medium text-xl"},"Completed Appointments"),e("p",{class:"text-sm"},"Here is an overview of your completed appointments for this week.")],-1),Ne={class:"max-w-7xl mx-auto px-6 lg:px-8"},De=e("div",{class:"mt-8 mb-6"},[e("p",{class:"font-medium text-xl"},"Appointment Calendar"),e("p",null,"Here is an overview of your appointments.")],-1),Be={class:"flex-1 w-full"},Le={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 bg-white border-gray-200 rounded-lg pb-6 mt-10"},Pe={class:"flex justify-between items-center"},He=e("div",null,[e("p",{class:"text-xl font-medium"},"Latest Appointments"),e("p",{class:"text-sm text-gray-700"},"Shown below are the latest appointments.")],-1),Fe=r(" View All "),Ee=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),We={class:"flex justify-between mt-7 gap-x-2 mb-6"},Ye=e("option",{value:"with"},"All Appointments",-1),qe=e("option",{value:""},"Active Appointments",-1),Ge=e("option",{value:"only"},"Trashed Appointments",-1),Ke={class:"flex gap-x-2"},Ue={class:"overflow-x-auto"},Re={class:"min-w-full divide-y divide-gray-300"},Je=e("thead",{class:"bg-gray-50"},[e("tr",{class:"[&>*]:uppercase font-medium text-xs text-gray-500"},[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Status"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Patient"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Email"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Schedule"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Message"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Sub Total"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Payment"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Created On"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Deleted On"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 sm:pl-6 text-left"},"Actions")])],-1),Qe={class:"divide-y divide-gray-200 bg-white"},Xe={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},Ze={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 gap-x-2"},et={class:"flex items-center gap-x-2"},tt={class:"rounded-full bg-blue-500 w-8 h-8 border-gray-100 flex items-center justify-center"},st={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10 text-white",viewBox:"0 0 20 20",fill:"currentColor"},ot=e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"},null,-1),at=[ot],lt=["src"],nt={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},it={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},rt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},ct={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},pt={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},dt={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},mt={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},ut={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-sm sm:pr-6"},ht=r("Details"),_t=r("Trash"),xt={key:0},ft=e("td",{colspan:"9"},[e("div",{class:"mx-auto text-center py-4 font-medium text-gray-600"},"No data available ..")],-1),vt=[ft],wt=e("p",{class:"text-sm mt-2 text-gray-500"},"Showing the latest entry of appointments from patients.",-1),yt=e("p",{class:"font-bold text-xl"},"Appointment Information",-1),gt=e("p",{class:"text-sm text-gray-600"},"Here are the informations for this appointment",-1),bt=e("p",{class:"mb-2 mt-3"},"Patient Information",-1),kt={class:"text-sm"},Ct={class:"text-sm"},At={class:"text-sm"},St=e("p",{class:"mb-2 mt-4"},"Appointment Information",-1),jt={class:"text-sm"},Ot={class:"text-sm"},Mt={class:"text-sm"},zt=e("p",{class:"mb-2 mt-4"},"Services Selected",-1),$t=r("Close"),Vt=r("Approve"),Tt=e("p",{class:"font-bold text-xl"},"Confirm Delete",-1),It=e("p",{class:"text-sm text-gray-600"},"Are you sure you want to move this appointment to trash? Once moved to trash the appointment status will be marked as cancelled and cannot be restored.",-1),Nt=r("Close"),Dt=r("Confirm"),Kt={__name:"Dashboard",props:{totalInquiries:Number,patientsCount:Number,servicesCount:Number,todaysAppointment:Number,appointments:Object,filters:Object,chartServices:Object,appointmentsIncome:[Object,Array]},setup(i){const d=i,_=w(!1),x=w(!1),a=w({id:null,message:null,schedule:null,patient:{first_name:null,last_name:null}}),P=U({id:null,service:null,price:null,subtotal:0,selected_services:[],user_id:null,message:"",schedule:""}),H=d.chartServices.map(c=>c.service),F=d.chartServices.map(c=>c.monthly_appointments_count),E=d.appointmentsIncome.map(c=>c.date),W=[{name:"Income",data:d.appointmentsIncome.map(c=>String(c.subtotal))}],Y=()=>{P.put(`/appointments/approve/${a.value.id}`,{preserveState:!0,onError:()=>{A.error("Something went wrong")},onSuccess:()=>{A.success("Appointment has been approved successfully!"),b()}})},q=()=>{M.Inertia.delete(`/appointments/${a.value.id}`,{preserveState:!0,onSuccess:()=>{A.success("Appointment has been moved to trash successfully!"),g()}})},g=()=>{_.value=!_.value},b=()=>{x.value=!x.value};R(()=>{var c;return(c=Z().props.value.errors.error)!=null?c:"Something went wrong"});const A=J();let f=w(d.filters.search),v=w(d.filters.trashed);const O=Q.exports.debounce(()=>{M.Inertia.get("/dashboard",{search:f.value,trashed:v.value},{preserveState:!0,only:["appointments"]})},300);return(c,k)=>(p(),m(S,null,[o(l(X),{title:"Dashboard"}),o(se,null,{default:n(()=>[e("div",de,[me,e("div",ue,[e("div",he,[e("div",_e,[e("div",xe,s(l(j)(i.servicesCount)),1),fe]),ve]),e("div",we,[e("div",ye,[e("div",ge,s(l(j)(i.patientsCount)),1),be]),ke]),e("div",Ce,[e("div",Ae,[e("div",Se,s(l(j)(i.todaysAppointment)),1),je]),Oe])]),e("div",Me,[e("div",ze,[e("div",$e,[Ve,o(re,{labels:l(H),series:l(F)},null,8,["labels","series"])]),e("div",Te,[Ie,o(pe,{labels:l(E),series:W},null,8,["labels"])])])]),e("div",Ne,[De,e("div",Be,[o(ne,{data:i.appointments},null,8,["data"])])]),e("div",Le,[e("div",Pe,[He,o(l(ee),{href:c.route("appointments.index"),class:"font-medium duration-200 ease-in-out transition hover:translate-x-1 hover:text-blue-500 flex items-center gap-x-1"},{default:n(()=>[Fe,Ee]),_:1},8,["href"])]),e("div",We,[o(I,{label:"Filter Service",class:"w-48"},{default:n(()=>[o(ae,{onChange:l(O),modelValue:l(v),"onUpdate:modelValue":k[0]||(k[0]=t=>z(v)?v.value=t:v=t)},{default:n(()=>[Ye,qe,Ge]),_:1},8,["onChange","modelValue"])]),_:1}),e("div",Ke,[o(I,{label:"Search Appointment",for:"search"},{default:n(()=>[o(le,{modelValue:l(f),"onUpdate:modelValue":k[1]||(k[1]=t=>z(f)?f.value=t:f=t),id:"search",onKeyup:l(O)},null,8,["modelValue","onKeyup"])]),_:1})])]),e("div",Ue,[e("table",Re,[Je,e("tbody",Qe,[(p(!0),m(S,null,$(i.appointments,(t,G)=>(p(),m("tr",{key:G,class:te(["hover:bg-gray-200",{"bg-red-100":t.deleted_at}])},[e("td",Xe,[o(D,{label:t.appointment_status,color:l(V)(t.appointment_status)},null,8,["label","color"])]),e("td",Ze,[e("div",et,[e("div",tt,[t.patient.image?u("",!0):(p(),m("svg",st,at)),e("img",{src:`images/profile/${t.patient.image}`,class:"object-fit rounded-full h-full",alt:""},null,8,lt)]),r(" "+s(t.patient.full_name),1)])]),e("td",nt,s(t.patient.email),1),e("td",it,s(t.schedule),1),e("td",rt,s(l(oe)(t.message)),1),e("td",ct,s(l(T)(t.subtotal)),1),e("td",pt,[o(D,{label:t.payment_status,color:l(V)(t.payment_status)},null,8,["label","color"])]),e("td",dt,s(t.created_at),1),e("td",mt,s(t.deleted_at),1),e("td",ut,[o(h,{text:"",size:"sm",onClick:K=>{b(),a.value=t}},{default:n(()=>[ht]),_:2},1032,["onClick"]),t.deleted_at?u("",!0):(p(),C(h,{key:0,onClick:y(K=>{g(),a.value=t},["prevent"]),text:"",size:"sm",color:"error"},{default:n(()=>[_t]),_:2},1032,["onClick"]))])],2))),128)),i.appointments.length==0?(p(),m("tr",xt,vt)):u("",!0)])])]),wt]),x.value?(p(),C(N,{key:0,onClose:b},{title:n(()=>[yt,gt]),body:n(()=>[bt,e("p",kt,"Full Name: "+s(a.value.patient.full_name),1),e("p",Ct,"Email: "+s(a.value.patient.email),1),e("p",At,"Gender: "+s(a.value.patient.gender),1),St,e("p",jt,"Schedule: "+s(a.value.schedule),1),e("p",Ot,"Message: "+s(a.value.message),1),e("p",Mt,"Created: "+s(a.value.created_at),1),zt,(p(!0),m(S,null,$(a.value.services,t=>(p(),m("p",{class:"text-sm",key:t.id},s(t.service.service)+" - "+s(l(T)(t.service.price)),1))),128))]),footer:n(()=>[o(h,{onClick:y(b,["prevent"]),text:"",size:"sm",color:"gray"},{default:n(()=>[$t]),_:1},8,["onClick"]),a.value.appointment_status=="Pending"&&a.value.appointment_status!="Cancelled"&&c.$page.props.auth.user.is_admin?(p(),C(h,{key:0,onClick:y(Y,["prevent"]),text:"",size:"sm",color:"success"},{default:n(()=>[Vt]),_:1},8,["onClick"])):u("",!0)]),_:1})):u("",!0),_.value?(p(),C(N,{key:1,onClose:g},{title:n(()=>[Tt]),body:n(()=>[It]),footer:n(()=>[o(h,{onClick:y(g,["prevent"]),text:"",size:"sm",color:"gray"},{default:n(()=>[Nt]),_:1},8,["onClick"]),o(h,{onClick:y(q,["prevent"]),text:"",size:"sm",color:"error"},{default:n(()=>[Dt]),_:1},8,["onClick"])]),_:1})):u("",!0)])]),_:1})],64))}};export{Kt as default};
