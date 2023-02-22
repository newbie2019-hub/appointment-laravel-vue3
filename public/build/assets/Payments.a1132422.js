import{_ as C}from"./Authenticated.b3024453.js";import{_ as f}from"./Button.c441fe0c.js";import{c as T,u as N,r as w,a as S,l as B,d as M,o as l,b as r,e as c,f as o,H as R,g as d,F as g,h as F,i as t,j as s,k as H,n as O,q as v,s as z,y as n}from"./app.f130f165.js";import{_ as A,a as D}from"./Modal.vue_vue_type_style_index_0_lang.7ee58c17.js";import{P as I}from"./Pagination.c763d26a.js";import{f as b,a as p}from"./Utilities.5f54765f.js";import"./plugin-vue_export-helper.21dcd24c.js";const L={class:"px-6 mx-auto max-w-8xl lg:px-8"},$=t("div",{class:"mx-auto mt-6 sm:px-6 lg:px-8"},[t("p",{class:"text-xl font-medium"},"Payments Summary"),t("p",null,"Here is an overview of your transactions.")],-1),K={class:"flex flex-wrap py-8 mx-auto max-w-8xl sm:px-6 lg:px-8 gap-y-4 gap-x-4"},q={class:"flex-1 p-4 text-white bg-orange-500 rounded-md md:max-w-md"},E={class:"flex justify-between"},U={class:"flex items-center text-9xl"},G=t("div",{class:"flex flex-col items-end gap-y-8"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})]),t("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[n("Monthly "),t("br"),n("Transactions")])],-1),J=t("span",{class:"sr-only"},"Monthly Transactions",-1),Q={class:"flex-1 p-4 text-white bg-green-600 rounded-md md:max-w-md"},W={class:"flex justify-between"},X={class:"flex items-center text-9xl"},Y=t("div",{class:"flex flex-col items-end gap-y-8"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-10 h-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})]),t("p",{class:"font-medium leading-5 tracking-wider text-right uppercase"},[n("Total "),t("br"),n("Payments")])],-1),Z=t("span",{class:"sr-only"},"Total Payments",-1),tt={class:"px-6 mx-auto max-w-8xl lg:px-8"},et={class:"py-8"},st={class:"mx-auto max-w-8xl sm:px-6 lg:px-8"},at={class:"overflow-x-auto sm:rounded-lg"},ot={class:""},lt={class:"pb-6 mx-auto bg-white rounded-lg max-w-8xl"},nt=t("p",{class:"text-xl font-medium"},"Payment Records",-1),it=t("p",{class:"text-sm text-gray-700"},"Shown below are the records of your payment transactions.",-1),ct={class:"flex justify-end mt-7 mb-7"},rt={class:"overflow-x-auto"},dt={class:"min-w-full divide-y divide-gray-300"},pt=t("thead",{class:"bg-gray-50"},[t("tr",{class:"[&>*]:uppercase font-medium text-xs text-gray-500"},[t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6"},"ID"),t("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Appt. ID"),t("th",{scope:"col",class:"px-3 py-3.5 text-left whitespace-nowrap"},"Patient"),t("th",{scope:"col",class:"px-3 py-3.5 text-left whitespace-nowrap"},"Schedule"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Payment Type"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Total"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Amount Tendered"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Change"),t("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Receipt")])],-1),mt={class:"bg-white divide-y divide-gray-300"},ht={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},xt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},ut={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},_t={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},yt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},ft={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},wt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},gt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},vt={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap sm:pl-6"},bt=n("View Receipt"),kt=n("View Receipt"),Pt={key:0},Vt=t("td",{colspan:"8"},[t("div",{class:"py-4 mx-auto font-medium text-center text-gray-600"},"No data available ..")],-1),jt=[Vt],Ct={class:"mt-2 text-sm text-gray-500"},Ht={__name:"Payments",props:{monthlyPaymentsCount:Number,paymentsCount:[Object,Number],payments:Object,errors:Object,filters:Object},setup(a){const k=a;T(()=>F().props.value.flash.message),N();let i=w(k.filters.search);w(!1),S({id:null,first_name:null,middle_name:null,last_name:null,gender:null,address:null,birthday:null});const P=B.exports.debounce(()=>{M.Inertia.get("/payments",{search:i.value},{replace:!0,preserveState:!0})},300);return(V,m)=>(l(),r(g,null,[c(o(R),{title:"Payments"}),c(C,null,{default:d(()=>{var h,x,u;return[t("div",L,[$,t("div",K,[t("div",q,[t("div",E,[t("div",U,s(o(b)(a.monthlyPaymentsCount)),1),G]),J]),t("div",Q,[t("div",W,[t("div",X,s(o(b)(a.paymentsCount)),1),Y]),Z])])]),t("div",tt,[t("div",et,[t("div",st,[t("div",at,[t("div",ot,[t("div",lt,[nt,it,t("div",ct,[c(A,{label:"Search Payment",for:"search",class:"w-52 md:w-64"},{default:d(()=>[c(D,{modelValue:o(i),"onUpdate:modelValue":m[0]||(m[0]=e=>H(i)?i.value=e:i=e),onKeyup:o(P),id:"search"},null,8,["modelValue","onKeyup"])]),_:1})]),t("div",rt,[t("table",dt,[pt,t("tbody",mt,[(l(!0),r(g,null,O(a.payments.data,(e,j)=>{var _,y;return l(),r("tr",{key:j,class:"hover:bg-gray-100"},[t("td",ht,s(e.id),1),t("td",xt,s(e.appointment.id),1),t("td",ut,s((y=(_=e.appointment)==null?void 0:_.patient)==null?void 0:y.full_name),1),t("td",_t,s(e.appointment.schedule),1),t("td",yt,s(e.is_installment?"Partial Payment":"Full Payment"),1),t("td",ft,s(o(p)(e.total)),1),t("td",wt,s(o(p)(e.amount_tendered)),1),t("td",gt,s(o(p)(e.change)),1),t("td",vt,[e.payment_type=="Stripe"?(l(),v(f,{key:0,text:"","is-link":"",color:"success",size:"sm",href:e.receipt_url,target:"_"},{default:d(()=>[bt]),_:2},1032,["href"])):(l(),v(f,{key:1,"is-link":"",href:V.route("invoice.generate",e.appointment.id),text:"",size:"sm",color:"success"},{default:d(()=>[kt]),_:2},1032,["href"]))])])}),128)),a.payments.data.length==0?(l(),r("tr",Pt,jt)):z("",!0)])])]),t("p",Ct,"Showing "+s((h=a.payments.from)!=null?h:0)+" to "+s((x=a.payments.to)!=null?x:0)+" out of "+s((u=a.payments.total)!=null?u:0)+" payment records.",1),c(I,{links:a.payments.links,right:""},null,8,["links"])])])])])])])]}),_:1})],64))}};export{Ht as default};
