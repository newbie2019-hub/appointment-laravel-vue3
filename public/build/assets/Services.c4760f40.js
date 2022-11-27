import{u as J,a as Q,r as p,l as W,d as S,o as c,b,e as o,f as v,H as X,g as s,F as R,i as e,j as n,k as I,m as d,n as Y,p as Z,q as _,s as x,y as l}from"./app.a9bf51d5.js";import{_ as ee}from"./Authenticated.4410648f.js";import{_ as u}from"./Button.7fbf1d30.js";import{_ as $}from"./FloatingInput.cb12f430.js";import{_ as k}from"./FormInput.c87e0c32.js";import{_ as se}from"./FloatingSelect.2184c225.js";import{P as te}from"./Pagination.0a2a24dc.js";import{_ as j}from"./Modal.3db3b606.js";import{f as U,a as oe}from"./Utilities.5f54765f.js";/* empty css                                              */const le={class:"max-w-8xl px-6 lg:px-8"},re=e("div",{class:"sm:px-6 lg:px-8 mt-6 mx-auto"},[e("p",{class:"font-medium text-xl"},"Services Summary"),e("p",null,"Here is an overview of your services.")],-1),ae={class:"py-8 max-w-8xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-y-4 gap-x-4"},ie={class:"bg-red-500 flex-1 p-4 text-white rounded-md md:max-w-md"},ce={class:"flex justify-between"},ne={class:"text-9xl flex items-center"},de=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})]),e("p",{class:"uppercase font-medium tracking-wider leading-5"},[l("Trashed "),e("br"),l("Services")])],-1),ue=e("span",{class:"sr-only"},"Trashed Services",-1),pe={class:"bg-green-600 flex-1 p-4 text-white rounded-md md:max-w-md"},ve={class:"flex justify-between"},me={class:"text-9xl flex items-center"},_e=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})]),e("p",{class:"uppercase font-medium tracking-wider leading-5 text-right"},[l("Total "),e("br"),l("Services")])],-1),he=e("span",{class:"sr-only"},"Total Services",-1),fe={class:"py-10"},xe={class:"max-w-8xl px-6 lg:px-8"},ye={class:"overflow-x-auto sm:rounded-lg"},ge={class:""},we={class:"max-w-8xl mx-auto sm:px-6 lg:px-8 bg-white border-gray-200 rounded-lg pb-6"},Se=e("p",{class:"text-xl font-medium"},"Offered Services",-1),be=e("p",{class:"text-sm text-gray-700"},"Shown below are the services you offer.",-1),ke={class:"flex justify-between mt-7 gap-x-2 mb-6"},Ce=e("option",{value:"with"},"All Services",-1),Ve=e("option",{value:""},"Active Services",-1),ze=e("option",{value:"only"},"Trashed Services",-1),Me={class:"flex gap-x-2"},Te=l("Add Service"),$e={class:"overflow-x-auto"},je={class:"min-w-full divide-y divide-gray-300"},Ne=e("thead",{class:"bg-gray-50"},[e("tr",{class:"[&>*]:uppercase font-medium text-xs text-gray-500"},[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6"},"ID"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Service Type"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Price"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Created On"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Deleted On"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 sm:pl-6 text-left"},"Actions")])],-1),Oe={class:"divide-y divide-gray-200 bg-white"},Ae={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6"},qe={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6"},Be={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6"},De={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6"},Re={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-900 sm:pl-6"},Ie={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-sm sm:pr-6"},Ue=l("Restore"),Fe=l("Update"),He=l("Trash"),Pe={key:0},Le=e("td",{colspan:"6"},[e("div",{class:"mx-auto text-center py-4 font-medium text-gray-600"},"No data available ..")],-1),Ke=[Le],Ee={class:"text-sm mt-2 text-gray-500"},Ge=e("p",{class:"font-bold text-xl"},"Offered Service",-1),Je=e("p",{class:"text-sm text-gray-600"},"All input fields are required",-1),Qe={action:"",class:"mt-2"},We=l("Close"),Xe=l("Save"),Ye=e("p",{class:"font-bold text-xl"},"Confirm Delete",-1),Ze=e("p",{class:"text-sm text-gray-600"},[l(" Are you sure you want to trash this service? "),e("span",{class:"text-sm text-red-500"},[e("br"),l("Note: This data can still be restored.")])],-1),es=l("Close"),ss=l("Confirm"),ts=e("p",{class:"font-bold text-xl"},"Confirm Restore",-1),os=e("p",{class:"text-sm text-gray-600"},"Are you sure you want to make this service available again?",-1),ls=l("Close"),rs=l("Restore"),fs={__name:"Services",props:{services:Object,servicesCount:[Object,Number],errors:Object,filters:Object,trashedServicesCount:Number},setup(a){const N=a,y=J(),F=Q({id:null,service:null,price:null});let h=p(N.filters.search),f=p(N.filters.trashed);const C=p(!1),V=p(!1),g=()=>{C.value=!C.value},m=()=>{V.value=!V.value},r=p({id:null,service:null,price:null}),z=p(null),M=p(!1),T=p(!1),w=()=>{T.value=!T.value},H=()=>{M.value?P():K()},P=()=>{S.Inertia.post("/services",r.value,{preserveState:!0,onSuccess:()=>{y.success("Service has been added successfully!"),r.value={id:null,service:null,price:null},m()}})},L=()=>{S.Inertia.delete(`/services/${z.value}`,{preserveState:!0,onSuccess:()=>{y.success("Service has been moved to trash successfully!"),z.value=null,g()}})},K=()=>{S.Inertia.put(`/services/${r.value.id}`,r.value,{preserveState:!0,onSuccess:()=>{y.success("Service has been updated successfully!"),r.value={id:null,service:null,price:null},m()}})},E=()=>{F.put(`/services/restore/${r.value.id}`,{preserveState:!0,onSuccess:()=>{y.success("Service has been restored successfully!"),w()}})},O=W.exports.debounce(()=>{S.Inertia.get("/services",{search:h.value,trashed:f.value},{preserveState:!0})},300);return(as,i)=>(c(),b(R,null,[o(v(X),{title:"Offered Services"}),o(ee,null,{default:s(()=>{var A,q,B;return[e("div",le,[re,e("div",ae,[e("div",ie,[e("div",ce,[e("div",ne,n(v(U)(a.trashedServicesCount)),1),de]),ue]),e("div",pe,[e("div",ve,[e("div",me,n(v(U)(a.servicesCount)),1),_e]),he])])]),e("div",fe,[e("div",xe,[e("div",ye,[e("div",ge,[e("div",we,[Se,be,e("div",ke,[o(k,{label:"Filter Service",class:"w-52"},{default:s(()=>[o(se,{onChange:v(O),modelValue:v(f),"onUpdate:modelValue":i[0]||(i[0]=t=>I(f)?f.value=t:f=t)},{default:s(()=>[Ce,Ve,ze]),_:1},8,["onChange","modelValue"])]),_:1}),e("div",Me,[o(u,{onClick:i[1]||(i[1]=d(t=>{m(),M.value=!0},["prevent"])),size:"sm",color:"success"},{default:s(()=>[Te]),_:1}),o(k,{label:"Search Service",for:"search",class:"w-52 md:w-72"},{default:s(()=>[o($,{modelValue:v(h),"onUpdate:modelValue":i[2]||(i[2]=t=>I(h)?h.value=t:h=t),id:"search",onKeyup:v(O)},null,8,["modelValue","onKeyup"])]),_:1})])]),e("div",$e,[e("table",je,[Ne,e("tbody",Oe,[(c(!0),b(R,null,Y(a.services.data,(t,G)=>(c(),b("tr",{key:G,class:Z([{"bg-red-100":t.deleted_at},"hover:bg-gray-100"])},[e("td",Ae,n(t.id),1),e("td",qe,n(t.service),1),e("td",Be,n(v(oe)(t.price)),1),e("td",De,n(t.created_at),1),e("td",Re,n(t.deleted_at),1),e("td",Ie,[t.deleted_at?(c(),_(u,{key:0,text:"",size:"sm",onClick:d(D=>{w(),r.value={...t}},["prevent"])},{default:s(()=>[Ue]),_:2},1032,["onClick"])):(c(),_(u,{key:1,text:"",size:"sm",onClick:d(D=>{M.value=!1,m(),r.value={...t}},["prevent"])},{default:s(()=>[Fe]),_:2},1032,["onClick"])),t.deleted_at==null?(c(),_(u,{key:2,text:"",size:"sm",color:"error",onClick:d(D=>{g(),z.value=t.id},["prevent"])},{default:s(()=>[He]),_:2},1032,["onClick"])):x("",!0)])],2))),128)),a.services.data.length==0?(c(),b("tr",Pe,Ke)):x("",!0)])])]),e("p",Ee,"Showing "+n((A=a.services.from)!=null?A:0)+" to "+n((q=a.services.to)!=null?q:0)+" out of "+n((B=a.services.total)!=null?B:0)+" services.",1),o(te,{links:a.services.links,right:""},null,8,["links"])])])])])]),V.value?(c(),_(j,{key:0,onClose:m},{title:s(()=>[Ge,Je]),body:s(()=>[e("form",Qe,[o(k,{label:"Service Type",for:"service",error:a.errors.service},{default:s(()=>[o($,{modelValue:r.value.service,"onUpdate:modelValue":i[3]||(i[3]=t=>r.value.service=t),id:"service",required:"","aria-required":""},null,8,["modelValue"])]),_:1},8,["error"]),o(k,{label:"Price",for:"price",class:"mt-3",error:a.errors.price},{default:s(()=>[o($,{type:"number",modelValue:r.value.price,"onUpdate:modelValue":i[4]||(i[4]=t=>r.value.price=t),id:"price",required:"","aria-required":""},null,8,["modelValue"])]),_:1},8,["error"])])]),footer:s(()=>[o(u,{onClick:d(m,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[We]),_:1},8,["onClick"]),o(u,{onClick:d(H,["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[Xe]),_:1},8,["onClick"])]),_:1})):x("",!0),C.value?(c(),_(j,{key:1,onClose:g},{title:s(()=>[Ye]),body:s(()=>[Ze]),footer:s(()=>[o(u,{onClick:d(g,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[es]),_:1},8,["onClick"]),o(u,{onClick:d(L,["prevent"]),text:"",size:"sm",color:"error"},{default:s(()=>[ss]),_:1},8,["onClick"])]),_:1})):x("",!0),T.value?(c(),_(j,{key:2,onClose:w},{title:s(()=>[ts]),body:s(()=>[os]),footer:s(()=>[o(u,{onClick:d(w,["prevent"]),text:"",size:"sm",color:"gray"},{default:s(()=>[ls]),_:1},8,["onClick"]),o(u,{onClick:d(E,["prevent"]),text:"",size:"sm",color:"success"},{default:s(()=>[rs]),_:1},8,["onClick"])]),_:1})):x("",!0)]}),_:1})],64))}};export{fs as default};
