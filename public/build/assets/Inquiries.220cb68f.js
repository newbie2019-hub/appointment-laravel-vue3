import{u as B,r as p,l as T,d as I,o as r,b as x,e as l,f as n,H,g as s,F as C,i as e,j as t,n as F,m as d,s as w,q as V,y as o}from"./app.a9bf51d5.js";import{_ as L}from"./Authenticated.4410648f.js";import{_ as m}from"./Button.7fbf1d30.js";import{_ as A}from"./FloatingInput.cb12f430.js";import{_ as E}from"./FormInput.c87e0c32.js";import{P as K}from"./Pagination.0a2a24dc.js";import{_ as S}from"./Modal.3db3b606.js";import{f as j,s as O}from"./Utilities.5f54765f.js";/* empty css                                              */const P={class:"max-w-8xl mx-auto px-6 lg:px-8"},U=e("div",{class:"sm:px-6 lg:px-8 mt-6 mx-auto"},[e("p",{class:"font-medium text-xl"},"Inquiry Summary"),e("p",null,"Here is an overview of your inquiries.")],-1),Y={class:"py-8 max-w-8xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-x-4 gap-y-4"},G={class:"bg-green-600 flex-1 p-4 text-white rounded-md md:max-w-md"},J={class:"flex justify-between"},Q={class:"text-9xl flex items-center"},R=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})]),e("p",{class:"uppercase font-medium tracking-wider leading-5 text-right"},[o("Total "),e("br"),o("Inquiries")])],-1),W=e("span",{class:"sr-only"},"Total Inquiries",-1),X={class:"bg-blue-600 flex-1 p-4 text-white rounded-md md:max-w-md"},Z={class:"flex justify-between"},ee={class:"text-9xl flex items-center"},te=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-9 w-9",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})]),e("p",{class:"uppercase font-medium tracking-wider leading-5 text-right"},[o("Today's "),e("br"),o("Inquiry")])],-1),se=e("span",{class:"sr-only"},"Today's Inquiry",-1),oe={class:"max-w-8xl mx-auto px-6 lg:px-8"},ae={class:"py-12"},le={class:"max-w-8xl mx-auto sm:px-6 lg:px-8"},ie={class:"overflow-x-auto shadow-sm sm:rounded-lg"},ne={class:""},re={class:"max-w-8xl mx-auto bg-white rounded-lg pb-6"},ce=e("p",{class:"text-xl font-medium"},"User Inquiries",-1),de=e("p",{class:"text-sm text-gray-700"},"Shown below are the inquiries of your users.",-1),me={class:"flex justify-end mt-8"},ue={class:"overflow-x-auto mt-10"},pe={class:"min-w-full divide-y divide-gray-300"},xe=e("thead",{class:"bg-gray-50"},[e("tr",{class:"[&>*]:uppercase font-medium text-xs text-gray-500"},[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6"},"ID"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Email"),e("th",{scope:"col",class:"px-3 py-3.5 text-left whitespace-nowrap"},"Full Name"),e("th",{scope:"col",class:"px-3 py-3.5 text-left whitespace-nowrap"},"Subject"),e("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Message"),e("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Date Created"),e("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-6 text-left"},"Actions")])],-1),_e={class:"divide-y divide-gray-200 bg-white"},he={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},fe={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-900"},ye={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},ge={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},we={class:"px-3 py-4 text-sm text-gray-900"},ve={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-900"},be={class:"relative whitespace-nowrap py-4 pr-4 text-sm sm:pr-6"},ke=o("View"),qe=o("Delete"),Ie={key:0},Ce=e("td",{colspan:"7"},[e("div",{class:"mx-auto text-center py-4 font-medium text-gray-600"},"No data available ..")],-1),Ve=[Ce],Se={class:"text-sm mt-2 text-gray-500"},je=e("p",{class:"font-bold text-xl"},"Inquiry Info",-1),Me={class:"text-sm"},Ne={class:"text-sm"},De={class:"text-sm"},$e=e("p",{class:"mt-4"},"Message:",-1),ze={class:"text-sm mt-2 text-gray-600"},Be=o("Close"),Te=e("p",{class:"font-bold text-xl"},"Confirm Delete",-1),He=e("p",{class:"text-sm text-gray-600"},[o(" Are you sure you want to delete this user inquiry? "),e("span",{class:"text-sm text-red-500"},[e("br"),o("Note: You cannot undo this action.")])],-1),Fe=o("Close"),Le=o("Confirm"),Qe={__name:"Inquiries",props:{inquiries:Object,errors:Object,todaysInquiry:Number,totalInquiries:Number},setup(i){const M=B(),_=p(""),h=p(null);let f=p(!1),y=p(!1);const g=()=>{y.value=!y.value},u=()=>{f.value=!f.value},N=()=>{I.Inertia.delete(`/inquiries/${h.value}`,{preserveState:!0,onSuccess:()=>{M.success("Inquiry has been deleted successfully!"),h.value=null,u()}})},D=T.exports.debounce(()=>{I.Inertia.get("/inquiries",{search:_.value},{replace:!0,preserveState:!0})},300);return(c,v)=>(r(),x(C,null,[l(n(H),{title:"Dashboard"}),l(L,null,{default:s(()=>{var b,k,q;return[e("div",P,[U,e("div",Y,[e("div",G,[e("div",J,[e("div",Q,t(n(j)(i.totalInquiries)),1),R]),W]),e("div",X,[e("div",Z,[e("div",ee,t(n(j)(i.todaysInquiry)),1),te]),se])])]),e("div",oe,[e("div",ae,[e("div",le,[e("div",ie,[e("div",ne,[e("div",re,[ce,de,e("div",me,[l(E,{label:"Search Inquiry",for:"search"},{default:s(()=>[l(A,{id:"search",modelValue:_.value,"onUpdate:modelValue":v[0]||(v[0]=a=>_.value=a),onKeyup:n(D)},null,8,["modelValue","onKeyup"])]),_:1})]),e("div",ue,[e("table",pe,[xe,e("tbody",_e,[(r(!0),x(C,null,F(i.inquiries.data,(a,$)=>(r(),x("tr",{key:$,class:"hover:bg-gray-100"},[e("td",he,t(a.id),1),e("td",fe,t(a.email),1),e("td",ye,t(a.full_name),1),e("td",ge,t(a.subject),1),e("td",we,t(n(O)(a.message,30)),1),e("td",ve,t(a.created_at),1),e("td",be,[l(m,{onClick:d(z=>{g(),c.selectedInquiry={...a}},["prevent"]),text:"",size:"sm",color:"primary"},{default:s(()=>[ke]),_:2},1032,["onClick"]),l(m,{onClick:d(z=>{u(),h.value=a.id},["prevent"]),text:"",size:"sm",color:"error"},{default:s(()=>[qe]),_:2},1032,["onClick"])])]))),128)),i.inquiries.data.length==0?(r(),x("tr",Ie,Ve)):w("",!0)])])]),e("p",Se,"Showing "+t((b=i.inquiries.from)!=null?b:0)+" to "+t((k=i.inquiries.to)!=null?k:0)+" out of "+t((q=i.inquiries.total)!=null?q:0)+" inquiries.",1),l(K,{links:i.inquiries.links,right:""},null,8,["links"])])])])])]),n(y)?(r(),V(S,{key:0,onClose:g},{title:s(()=>[je]),body:s(()=>[e("p",Me,"Sender: \xA0"+t(c.selectedInquiry.full_name),1),e("p",Ne,"Subject: \xA0"+t(c.selectedInquiry.subject),1),e("p",De,"Created: \xA0"+t(c.selectedInquiry.created_at),1),$e,e("p",ze,t(c.selectedInquiry.message),1)]),footer:s(()=>[l(m,{onClick:d(g,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[Be]),_:1},8,["onClick"])]),_:1})):w("",!0),n(f)?(r(),V(S,{key:1,onClose:u},{title:s(()=>[Te]),body:s(()=>[He]),footer:s(()=>[l(m,{onClick:d(u,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[Fe]),_:1},8,["onClick"]),l(m,{onClick:d(N,["prevent"]),text:"",size:"sm",color:"error"},{default:s(()=>[Le]),_:1},8,["onClick"])]),_:1})):w("",!0)])]}),_:1})],64))}};export{Qe as default};
