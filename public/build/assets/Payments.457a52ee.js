import{_ as b}from"./Authenticated.957d24f0.js";import{c as k,a as P,r as h,b as j,l as V,d as C,e as l,f as n,g as i,H as T,h as u,F as _,u as N,i as c,j as t,k as s,m as S,p as B,v as y,z as r}from"./app.0003ba5e.js";import{_ as M,a as H}from"./FormInput.ff8c0edc.js";import{P as O}from"./Pagination.9c430f27.js";/* empty css                                              */import{f}from"./Utilities.5f54765f.js";const A={class:"max-w-7xl mx-auto px-6 lg:px-8"},D=t("div",{class:"sm:px-6 lg:px-8 mt-6 mx-auto"},[t("p",{class:"font-medium text-xl"},"Payments Summary"),t("p",null,"Here is an overview of your transactions.")],-1),F={class:"py-8 max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-y-4 gap-x-4"},I={class:"bg-orange-500 flex-1 p-4 text-white rounded-md md:max-w-md"},L={class:"flex justify-between"},R={class:"text-9xl flex items-center"},z=t("div",{class:"flex flex-col items-end gap-y-8"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})]),t("p",{class:"uppercase font-medium tracking-wider leading-5 text-right"},[r("Monthly "),t("br"),r("Transactions")])],-1),K=t("span",{class:"sr-only"},"Monthly Transactions",-1),$={class:"bg-green-600 flex-1 p-4 text-white rounded-md md:max-w-md"},E={class:"flex justify-between"},U={class:"text-9xl flex items-center"},q=t("div",{class:"flex flex-col items-end gap-y-8"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})]),t("p",{class:"uppercase font-medium tracking-wider leading-5 text-right"},[r("Total "),t("br"),r("Payments")])],-1),G=t("span",{class:"sr-only"},"Total Payments",-1),J={class:"max-w-7xl mx-auto px-6 lg:px-8"},Q={class:"py-8"},W={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},X={class:"overflow-x-auto shadow-sm sm:rounded-lg"},Y={class:""},Z={class:"max-w-7xl mx-auto bg-white rounded-lg pb-6"},tt=t("p",{class:"text-xl font-medium"},"Payment Records",-1),et=t("p",{class:"text-sm text-gray-700"},"Shown below are the records of your payment transactions.",-1),st={class:"flex justify-end mt-7 mb-7"},at={class:"overflow-x-auto"},ot={class:"min-w-full divide-y divide-gray-300"},lt=t("thead",{class:"bg-gray-50"},[t("tr",{class:"[&>*]:uppercase font-medium text-xs text-gray-500"},[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6"},"ID"),t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Appointment ID"),t("th",{scope:"col",class:"px-3 py-3.5 text-left whitespace-nowrap"},"Patient"),t("th",{scope:"col",class:"px-3 py-3.5 text-left whitespace-nowrap"},"Schedule"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Payment Type"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Total"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Amount Tendered"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Change"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Receipt")])],-1),nt={class:"divide-y divide-gray-300 bg-white"},it={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},ct={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},rt={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},dt={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},pt={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},mt={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},xt={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},ht={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},ut={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},_t=["href"],yt={key:0},ft=t("td",{colspan:"8"},[t("div",{class:"mx-auto text-center py-4 font-medium text-gray-600"},"No data available ..")],-1),wt=[ft],gt={class:"text-sm mt-2 text-gray-500"},Tt={__name:"Payments",props:{monthlyPaymentsCount:Number,paymentsCount:[Object,Number],payments:Object,errors:Object,filters:Object},setup(a){const w=a;k(()=>N().props.value.flash.message),P();let o=h(w.filters.search);h(!1),j({id:null,first_name:null,middle_name:null,last_name:null,gender:null,address:null,birthday:null});const g=V.exports.debounce(()=>{C.Inertia.get("/patients",{search:o.value},{replace:!0,preserveState:!0})},300);return(vt,d)=>(c(),l(_,null,[n(i(T),{title:"Payments"}),n(b,null,{default:u(()=>{var p,m,x;return[t("div",A,[D,t("div",F,[t("div",I,[t("div",L,[t("div",R,s(i(f)(a.monthlyPaymentsCount)),1),z]),K]),t("div",$,[t("div",E,[t("div",U,s(i(f)(a.paymentsCount)),1),q]),G])])]),t("div",J,[t("div",Q,[t("div",W,[t("div",X,[t("div",Y,[t("div",Z,[tt,et,t("div",st,[n(M,{label:"Search Payment",for:"search"},{default:u(()=>[n(H,{modelValue:i(o),"onUpdate:modelValue":d[0]||(d[0]=e=>S(o)?o.value=e:o=e),onKeyup:i(g),id:"search"},null,8,["modelValue","onKeyup"])]),_:1})]),t("div",at,[t("table",ot,[lt,t("tbody",nt,[(c(!0),l(_,null,B(a.payments.data,(e,v)=>(c(),l("tr",{key:v,class:"hover:bg-gray-200"},[t("td",it,s(e.id),1),t("td",ct,s(e.appointment.id),1),t("td",rt,s(e.appointment.patient.full_name),1),t("td",dt,s(e.appointment.schedule),1),t("td",pt,s(e.payment_type),1),t("td",mt,s(e.total),1),t("td",xt,s(e.amount_tendered),1),t("td",ht,s(e.change),1),t("td",ut,[e.payment_type=="Stripe"?(c(),l("a",{key:0,href:e.receipt_url,target:"_"},"View",8,_t)):y("",!0)])]))),128)),a.payments.data.length==0?(c(),l("tr",yt,wt)):y("",!0)])])]),t("p",gt,"Showing "+s((p=a.payments.from)!=null?p:0)+" to "+s((m=a.payments.to)!=null?m:0)+" out of "+s((x=a.payments.total)!=null?x:0)+" payment records.",1),n(O,{links:a.payments.links,right:""},null,8,["links"])])])])])])])]}),_:1})],64))}};export{Tt as default};
