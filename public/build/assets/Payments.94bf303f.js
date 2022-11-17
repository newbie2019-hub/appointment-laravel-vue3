import{_ as V}from"./Authenticated.e6231275.js";import{_}from"./Button.941dc518.js";import{c as j,a as C,r as f,b as T,l as N,d as S,e as r,f as c,g as o,H as B,h as d,F as y,u as M,i as l,j as t,k as s,m as R,p as z,s as w,v as H,z as n}from"./app.c91643f5.js";import{_ as O}from"./FloatingInput.e9ba1f8e.js";import{_ as A}from"./FormInput.e0d266c9.js";import{P as D}from"./Pagination.a8d6641e.js";/* empty css                                              */import{f as g,a as p}from"./Utilities.5f54765f.js";const F={class:"px-6 mx-auto max-w-8xl lg:px-8"},I=t("div",{class:"mx-auto mt-6 sm:px-6 lg:px-8"},[t("p",{class:"text-xl font-medium"},"Payments Summary"),t("p",null,"Here is an overview of your transactions.")],-1),L={class:"flex flex-wrap py-8 mx-auto max-w-8xl sm:px-6 lg:px-8 gap-y-4 gap-x-4"},$={class:"flex-1 p-4 text-white bg-orange-500 rounded-md md:max-w-md"},K={class:"flex justify-between"},E={class:"flex items-center text-9xl"},U=t("div",{class:"flex flex-col items-end gap-y-8"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})]),t("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[n("Monthly "),t("br"),n("Transactions")])],-1),q=t("span",{class:"sr-only"},"Monthly Transactions",-1),G={class:"flex-1 p-4 text-white bg-green-600 rounded-md md:max-w-md"},J={class:"flex justify-between"},Q={class:"flex items-center text-9xl"},W=t("div",{class:"flex flex-col items-end gap-y-8"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})]),t("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[n("Total "),t("br"),n("Payments")])],-1),X=t("span",{class:"sr-only"},"Total Payments",-1),Y={class:"px-6 mx-auto max-w-8xl lg:px-8"},Z={class:"py-8"},tt={class:"mx-auto max-w-8xl sm:px-6 lg:px-8"},et={class:"overflow-x-auto shadow-sm sm:rounded-lg"},st={class:""},at={class:"pb-6 mx-auto bg-white rounded-lg max-w-8xl"},ot=t("p",{class:"text-xl font-medium"},"Payment Records",-1),lt=t("p",{class:"text-sm text-gray-700"},"Shown below are the records of your payment transactions.",-1),nt={class:"flex justify-end mt-7 mb-7"},it={class:"overflow-x-auto"},ct={class:"min-w-full divide-y divide-gray-300"},rt=t("thead",{class:"bg-gray-50"},[t("tr",{class:"[&>*]:uppercase font-medium text-xs text-gray-500"},[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6"},"ID"),t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Appt. ID"),t("th",{scope:"col",class:"px-3 py-3.5 text-left whitespace-nowrap"},"Patient"),t("th",{scope:"col",class:"px-3 py-3.5 text-left whitespace-nowrap"},"Schedule"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Payment Type"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Total"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Amount Tendered"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Change"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Receipt")])],-1),dt={class:"bg-white divide-y divide-gray-300"},pt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},mt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},ht={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},xt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},ut={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},_t={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},ft={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},yt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},wt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},gt=n("View Receipt"),vt=n("View Receipt"),bt={key:0},kt=t("td",{colspan:"8"},[t("div",{class:"py-4 mx-auto font-medium text-center text-gray-600"},"No data available ..")],-1),Pt=[kt],Vt={class:"mt-2 text-sm text-gray-500"},zt={__name:"Payments",props:{monthlyPaymentsCount:Number,paymentsCount:[Object,Number],payments:Object,errors:Object,filters:Object},setup(a){const v=a;j(()=>M().props.value.flash.message),C();let i=f(v.filters.search);f(!1),T({id:null,first_name:null,middle_name:null,last_name:null,gender:null,address:null,birthday:null});const b=N.exports.debounce(()=>{S.Inertia.get("/patients",{search:i.value},{replace:!0,preserveState:!0})},300);return(k,m)=>(l(),r(y,null,[c(o(B),{title:"Payments"}),c(V,null,{default:d(()=>{var h,x,u;return[t("div",F,[I,t("div",L,[t("div",$,[t("div",K,[t("div",E,s(o(g)(a.monthlyPaymentsCount)),1),U]),q]),t("div",G,[t("div",J,[t("div",Q,s(o(g)(a.paymentsCount)),1),W]),X])])]),t("div",Y,[t("div",Z,[t("div",tt,[t("div",et,[t("div",st,[t("div",at,[ot,lt,t("div",nt,[c(A,{label:"Search Payment",for:"search"},{default:d(()=>[c(O,{modelValue:o(i),"onUpdate:modelValue":m[0]||(m[0]=e=>R(i)?i.value=e:i=e),onKeyup:o(b),id:"search"},null,8,["modelValue","onKeyup"])]),_:1})]),t("div",it,[t("table",ct,[rt,t("tbody",dt,[(l(!0),r(y,null,z(a.payments.data,(e,P)=>(l(),r("tr",{key:P,class:"hover:bg-gray-100"},[t("td",pt,s(e.id),1),t("td",mt,s(e.appointment.id),1),t("td",ht,s(e.appointment.patient.full_name),1),t("td",xt,s(e.appointment.schedule),1),t("td",ut,s(e.payment_type),1),t("td",_t,s(o(p)(e.total)),1),t("td",ft,s(o(p)(e.amount_tendered)),1),t("td",yt,s(o(p)(e.change)),1),t("td",wt,[e.payment_type=="Stripe"?(l(),w(_,{key:0,text:"","is-link":"",color:"success",size:"sm",href:e.receipt_url,target:"_"},{default:d(()=>[gt]),_:2},1032,["href"])):(l(),w(_,{key:1,"is-link":"",href:k.route("invoice.generate",e.appointment.id),text:"",size:"sm",color:"success"},{default:d(()=>[vt]),_:2},1032,["href"]))])]))),128)),a.payments.data.length==0?(l(),r("tr",bt,Pt)):H("",!0)])])]),t("p",Vt,"Showing "+s((h=a.payments.from)!=null?h:0)+" to "+s((x=a.payments.to)!=null?x:0)+" out of "+s((u=a.payments.total)!=null?u:0)+" payment records.",1),c(D,{links:a.payments.links,right:""},null,8,["links"])])])])])])])]}),_:1})],64))}};export{zt as default};
