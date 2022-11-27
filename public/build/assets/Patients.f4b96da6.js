import{c as W,a as X,r as v,b as Y,l as Z,d as ee,e as g,f as a,g as l,H as te,h as o,F as R,u as se,i as u,j as e,k as d,m as E,p as oe,q as I,v as _,z as n,s as f,n as m,L as le}from"./app.e7bbbd2e.js";import{_ as ae}from"./Authenticated.2a6ab4b3.js";import{_ as p}from"./Button.ebb59778.js";import{_ as w}from"./FloatingInput.4406e185.js";import{_ as H}from"./FloatingSelect.1de3faf4.js";import{_ as x}from"./FormInput.a1bdbb22.js";import{P as re}from"./Pagination.e6fb0e11.js";import{_ as C}from"./Modal.2cb71e5a.js";import{f as O,s as ne}from"./Utilities.5f54765f.js";/* empty css                                              */const ie={class:"max-w-8xl mx-auto px-6 lg:px-8"},de=e("div",{class:"sm:px-6 lg:px-8 mt-6 mx-auto"},[e("p",{class:"font-medium text-xl"},"Patients Summary"),e("p",null,"Here is an overview of your patients.")],-1),ce={class:"py-8 max-w-8xl mx-auto sm:px-6 lg:px-8 flex flex-wrap gap-y-4 gap-x-4"},ue={class:"bg-red-500 flex-1 p-4 text-white rounded-md md:max-w-md"},me={class:"flex justify-between"},pe={class:"text-9xl flex items-center"},_e=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})]),e("p",{class:"uppercase font-medium tracking-wider leading-5"},[n("Trashed "),e("br"),n("Patients")])],-1),he=e("span",{class:"sr-only"},"Trashed Patients",-1),fe={class:"bg-green-600 flex-1 p-4 text-white rounded-md md:max-w-md"},xe={class:"flex justify-between"},ve={class:"text-9xl flex items-center"},ge=e("div",{class:"flex flex-col items-end gap-y-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13 10V3L4 14h7v7l9-11h-7z"})]),e("p",{class:"uppercase font-medium tracking-wider leading-5 text-right"},[n("Total "),e("br"),n("Patients")])],-1),we=e("span",{class:"sr-only"},"Total Patients",-1),ye={class:"max-w-8xl mx-auto px-6 lg:px-8"},be={class:"py-8"},ke={class:"max-w-8xl mx-auto sm:px-6 lg:px-8"},Ce={class:"overflow-x-auto sm:rounded-lg"},Ve={class:""},ze={class:"max-w-8xl mx-auto bg-white rounded-lg pb-6"},Ae=e("p",{class:"text-xl font-medium"},"Patients Record",-1),Se=e("p",{class:"text-sm text-gray-700"},"Shown below are the records of your patients.",-1),Pe={class:"flex justify-between mt-7 mb-7"},Me=e("option",{value:"with"},"All Patients",-1),$e=e("option",{value:""},"Active Patients",-1),je=e("option",{value:"only"},"Trashed Patients",-1),Ue={class:"overflow-x-auto"},Ne={class:"min-w-full divide-y divide-gray-300"},Fe=e("thead",{class:"bg-gray-50"},[e("tr",{class:"[&>*]:uppercase font-medium text-xs text-gray-500"},[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6"},"ID"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6 whitespace-nowrap"},"Full Name"),e("th",{scope:"col",class:"px-3 py-3.5 text-left whitespace-nowrap"},"Address"),e("th",{scope:"col",class:"px-3 py-3.5 text-left whitespace-nowrap"},"Contact Number"),e("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Gender"),e("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Email"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6"},"Approved"),e("th",{scope:"col",class:"px-3 py-3.5 text-left"},"Created On"),e("th",{scope:"col",class:"px-3 py-3.5 text-left whitespace-nowrap"},"Deleted At"),e("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-6 text-left"},"Actions")])],-1),Be={class:"divide-y divide-gray-300 bg-white"},Te={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},De={class:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 flex items-center gap-x-2"},Le={class:"rounded-full bg-blue-400 w-8 h-8 border-gray-100 flex items-center justify-center"},Re={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-white",viewBox:"0 0 20 20",fill:"currentColor"},Ee=e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"},null,-1),Ie=[Ee],He=["src"],Oe={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-900"},Ge={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-900"},qe={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-900 capitalize"},Ke={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-900"},Je={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-900"},Qe={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-900"},We={class:"whitespace-nowrap px-3 py-4 text-sm text-gray-900"},Xe={class:"relative whitespace-nowrap py-4 pl-3 pr-4 text-sm sm:pr-6"},Ye=n("Approve"),Ze=n("View"),et=n("Update"),tt=n("Trash"),st=n("Restore"),ot={key:0},lt=e("td",{colspan:"9"},[e("div",{class:"mx-auto text-center py-4 font-medium text-gray-600"},"No data available ..")],-1),at=[lt],rt={class:"text-sm mt-2 text-gray-500"},nt=e("p",{class:"font-bold text-xl"},"Confirm Approve",-1),it=e("p",{class:"text-sm mt-2"},"Are you sure you want to approve this account?",-1),dt=n("Cancel"),ct=n("Approve"),ut=e("p",{class:"font-bold text-xl"},"Patient Information",-1),mt=e("p",{class:"text-sm"},"Here are the informations of the patient",-1),pt={class:"rounded-full bg-blue-400 w-16 h-16 border-gray-100 flex items-center justify-center mx-auto mt-4"},_t={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-10 w-10 text-white",viewBox:"0 0 20 20",fill:"currentColor"},ht=e("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"},null,-1),ft=[ht],xt=["src"],vt={class:"text-center"},gt={class:"mt-2 font-medium"},wt={class:"text-sm"},yt={class:"flex mt-4 gap-x-2"},bt={class:"w-1/2"},kt={class:"text-sm font-medium"},Ct={class:"text-sm font-medium"},Vt={class:"w-1/2"},zt={class:"text-sm font-medium"},At={class:"text-sm font-medium"},St=n("Close"),Pt=n("View Transactions"),Mt=e("p",{class:"font-bold text-xl"},"Confirm Delete",-1),$t=e("p",{class:"text-sm text-gray-600"},[n(" Are you sure you want to trash this service? "),e("span",{class:"text-sm text-red-500"},[e("br"),n("Note: This data can still be restored.")])],-1),jt=n("Close"),Ut=n("Confirm"),Nt=e("p",{class:"font-bold text-xl"},"Update User",-1),Ft=e("p",{class:"text-sm"},"All input fields are required.",-1),Bt={class:"w-full"},Tt={class:"flex gap-x-2"},Dt={class:"w-1/2"},Lt={class:"w-1/2"},Rt={class:"w-full"},Et={class:"flex w-full gap-x-2"},It={class:"w-1/2"},Ht=e("option",{value:"Male",class:"font-medium"},"Male",-1),Ot=e("option",{value:"Female",class:"font-medium"},"Female",-1),Gt={class:"w-1/2"},qt=n("Close"),Kt=n("Save Changes"),Jt=e("p",{class:"font-bold text-xl"},"Confirm Restore",-1),Qt=e("p",{class:"text-sm text-gray-600"},"Are you sure you want to restore this account? All of its transaction data will be restored as well.",-1),Wt=n("Close"),Xt=n("Restore"),is={__name:"Patients",props:{patients:Object,errors:Object,filters:Object,trashedPatientsCount:Number},setup(c){const N=c,F=W(()=>se().props.value.flash.message),h=X();let y=v(N.filters.search),b=v(N.filters.trashed);const k=v(!1),P=v(!1),M=v(!1),$=v(!1),j=v(!1);let t=Y({id:null,first_name:null,middle_name:null,last_name:null,gender:null,address:null,birthday:null});const V=()=>{P.value=!P.value},z=()=>{M.value=!M.value},U=()=>{$.value=!$.value},A=(r=null)=>{t.id=r==null?void 0:r.id,t.first_name=r==null?void 0:r.first_name,t.middle_name=r==null?void 0:r.middle_name,t.last_name=r==null?void 0:r.last_name,t.gender=r==null?void 0:r.gender,t.address=r==null?void 0:r.address,t.birthday=r==null?void 0:r.birthday,j.value=!j.value},G=()=>{t.put(`/approve/${t.value.id}`,{preserveState:!0,onFinish:()=>{k.value=!1},onSuccess:()=>{h.success("Account has been approved successfully!")},onError:()=>{h.error("Something went wrong!")}})},q=()=>{t.delete(`/patients/${t.value.id}`,{preserveState:!0,onFinish:()=>{z()},onSuccess:()=>{h.success(F.value)},onError:()=>{h.error("Something went wrong!")}})},K=()=>{t.transform(r=>({...r})).put(`patients/${t.id}`,{preserveState:!0,onSuccess:()=>{h.success(`${F.value}`),A()},onError:()=>{h.error("Something went wrong!")}})},J=()=>{t.put(`/patients/restore/${t.value.id}`,{preserveState:!0,onFinish:()=>{V()},onSuccess:()=>{h.success("Account has been restored successfully!")},onError:()=>{h.error("Something went wrong!")}})},B=Z.exports.debounce(()=>{ee.Inertia.get("/patients",{search:y.value,trashed:b.value},{replace:!0,preserveState:!0})},300);return(r,i)=>(u(),g(R,null,[a(l(te),{title:"Dashboard"}),a(ae,null,{default:o(()=>{var T,D,L;return[e("div",ie,[de,e("div",ce,[e("div",ue,[e("div",me,[e("div",pe,d(l(O)(c.trashedPatientsCount)),1),_e]),he]),e("div",fe,[e("div",xe,[e("div",ve,d(l(O)(c.patients.data.length)),1),ge]),we])])]),e("div",ye,[e("div",be,[e("div",ke,[e("div",Ce,[e("div",Ve,[e("div",ze,[Ae,Se,e("div",Pe,[a(x,{label:"Filter Patients",class:"w-52"},{default:o(()=>[a(H,{onChange:l(B),modelValue:l(b),"onUpdate:modelValue":i[0]||(i[0]=s=>E(b)?b.value=s:b=s)},{default:o(()=>[Me,$e,je]),_:1},8,["onChange","modelValue"])]),_:1}),a(x,{label:"Search Patient",for:"search",class:"w-52 md:w-72"},{default:o(()=>[a(w,{modelValue:l(y),"onUpdate:modelValue":i[1]||(i[1]=s=>E(y)?y.value=s:y=s),onKeyup:l(B),id:"search"},null,8,["modelValue","onKeyup"])]),_:1})]),e("div",Ue,[e("table",Ne,[Fe,e("tbody",Be,[(u(!0),g(R,null,oe(c.patients.data,(s,Q)=>(u(),g("tr",{key:Q,class:I([{"bg-red-100":s.deleted_at},"hover:bg-gray-100"])},[e("td",Te,d(s.id),1),e("td",De,[e("div",Le,[s.image?_("",!0):(u(),g("svg",Re,Ie)),e("img",{src:`images/profile/${s.image}`,class:"object-fit rounded-full h-full",alt:""},null,8,He)]),n(" "+d(s.full_name),1)]),e("td",Oe,d(l(ne)(s.address)),1),e("td",Ge,d(s.contact_number),1),e("td",qe,d(s.gender),1),e("td",Ke,d(s.email),1),e("td",Je,[e("div",{class:I(["px-4 py-2 text-xs text-white rounded-full flex justify-center items-center",parseInt(s.is_approved)?"bg-green-600":"bg-red-600"])},d(parseInt(s.is_approved)?"Approved":"Pending"),3)]),e("td",Qe,d(s.created_at),1),e("td",We,d(s.deleted_at),1),e("td",Xe,[parseInt(s.is_approved)?_("",!0):(u(),f(p,{key:0,onClick:m(S=>{k.value=!0,l(t).value={...s}},["prevent"]),text:"",size:"sm",color:"success"},{default:o(()=>[Ye]),_:2},1032,["onClick"])),a(p,{onClick:m(S=>{U(),l(t).value={...s}},["prevent"]),text:"",size:"sm",color:""},{default:o(()=>[Ze]),_:2},1032,["onClick"]),a(p,{onClick:m(S=>{A(s)},["prevent"]),text:"",size:"sm",color:""},{default:o(()=>[et]),_:2},1032,["onClick"]),s.deleted_at?(u(),f(p,{key:2,onClick:m(S=>{l(t).value={...s},V()},["prevent"]),text:"",size:"sm",color:"success"},{default:o(()=>[st]),_:2},1032,["onClick"])):(u(),f(p,{key:1,onClick:m(S=>{z(),l(t).value={...s}},["prevent"]),text:"",size:"sm",color:"error"},{default:o(()=>[tt]),_:2},1032,["onClick"]))])],2))),128)),c.patients.data.length==0?(u(),g("tr",ot,at)):_("",!0)])])]),e("p",rt,"Showing "+d((T=c.patients.from)!=null?T:0)+" to "+d((D=c.patients.to)!=null?D:0)+" out of "+d((L=c.patients.total)!=null?L:0)+" patients.",1),a(re,{links:c.patients.links,right:""},null,8,["links"])])])])])])]),k.value?(u(),f(C,{key:0,onClose:i[3]||(i[3]=s=>k.value=!1)},{title:o(()=>[nt,it]),footer:o(()=>[a(p,{onClick:i[2]||(i[2]=m(s=>k.value=!1,["prevent"])),text:"",size:"sm",color:""},{default:o(()=>[dt]),_:1}),a(p,{onClick:m(G,["prevent"]),text:"",size:"sm",color:"success"},{default:o(()=>[ct]),_:1},8,["onClick"])]),_:1})):_("",!0),$.value?(u(),f(C,{key:1,onClose:U},{title:o(()=>[ut,mt]),body:o(()=>[e("div",pt,[l(t).value.image?_("",!0):(u(),g("svg",_t,ft)),e("img",{src:`images/profile/${l(t).value.image}`,class:"object-fit rounded-full h-full",alt:""},null,8,xt)]),e("div",vt,[e("p",gt,d(l(t).value.full_name),1),e("p",wt,d(l(t).value.email),1)]),e("div",yt,[e("div",bt,[e("p",kt,"Address: "+d(l(t).value.address),1),e("p",Ct,"Birthday: "+d(l(t).value.birthday),1)]),e("div",Vt,[e("p",zt,"Gender: "+d(l(t).value.gender),1),e("p",At,"Contact: "+d(l(t).value.contact_number),1)])])]),footer:o(()=>[a(p,{onClick:m(U,["prevent"]),text:"",size:"sm",color:"gray"},{default:o(()=>[St]),_:1},8,["onClick"]),a(l(le),{href:r.route("patients.show",l(t).value.id),class:"text-xs text-blue-600 px-4 py-2 hover:text-blue-700 flex justify-center items-center hover:bg-blue-100 uppercase font-medium rounded-sm"},{default:o(()=>[Pt]),_:1},8,["href"])]),_:1})):_("",!0),M.value?(u(),f(C,{key:2,onClose:z},{title:o(()=>[Mt]),body:o(()=>[$t]),footer:o(()=>[a(p,{onClick:m(z,["prevent"]),text:"",size:"sm",color:"gray"},{default:o(()=>[jt]),_:1},8,["onClick"]),a(p,{onClick:m(q,["prevent"]),text:"",size:"sm",color:"error"},{default:o(()=>[Ut]),_:1},8,["onClick"])]),_:1})):_("",!0),j.value?(u(),f(C,{key:3,onClose:A},{title:o(()=>[Nt,Ft]),body:o(()=>[e("div",Bt,[a(x,{for:"firstname",error:c.errors.first_name,label:"First Name",class:"mt-3"},{default:o(()=>[a(w,{type:"text",id:"firstname",modelValue:l(t).first_name,"onUpdate:modelValue":i[4]||(i[4]=s=>l(t).first_name=s),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",Tt,[e("div",Dt,[a(x,{for:"middlename",error:c.errors.middle_name,label:"Middle Name ",class:"mt-3"},{default:o(()=>[a(w,{type:"text",id:"middlename",modelValue:l(t).middle_name,"onUpdate:modelValue":i[5]||(i[5]=s=>l(t).middle_name=s),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",Lt,[a(x,{for:"lastname",error:c.errors.last_name,label:"Last Name",class:"mt-3"},{default:o(()=>[a(w,{type:"text",id:"lastname",modelValue:l(t).last_name,"onUpdate:modelValue":i[6]||(i[6]=s=>l(t).last_name=s),autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),_:1},8,["error"])])]),e("div",Rt,[a(x,{for:"address",error:c.errors.address,label:"Address",class:"mt-3"},{default:o(()=>[a(w,{type:"text",id:"address",modelValue:l(t).address,"onUpdate:modelValue":i[7]||(i[7]=s=>l(t).address=s),autofocus:"",autocomplete:"address"},null,8,["modelValue"])]),_:1},8,["error"])]),e("div",Et,[e("div",It,[a(x,{for:"gender",error:c.errors.gender,label:"Gender",class:"mt-3"},{default:o(()=>[a(H,{modelValue:l(t).gender,"onUpdate:modelValue":i[8]||(i[8]=s=>l(t).gender=s)},{default:o(()=>[Ht,Ot]),_:1},8,["modelValue"])]),_:1},8,["error"])]),e("div",Gt,[a(x,{for:"gender",error:c.errors.gender,label:"Date of Birth",class:"mt-3"},{default:o(()=>[a(w,{type:"date",modelValue:l(t).birthday,"onUpdate:modelValue":i[9]||(i[9]=s=>l(t).birthday=s)},null,8,["modelValue"])]),_:1},8,["error"])])])]),footer:o(()=>[a(p,{onClick:m(A,["prevent"]),text:"",size:"sm",color:"gray"},{default:o(()=>[qt]),_:1},8,["onClick"]),a(p,{onClick:m(K,["prevent"]),text:"",size:"sm",color:"success"},{default:o(()=>[Kt]),_:1},8,["onClick"])]),_:1})):_("",!0),P.value?(u(),f(C,{key:4,onClose:V},{title:o(()=>[Jt]),body:o(()=>[Qt]),footer:o(()=>[a(p,{onClick:m(V,["prevent"]),text:"",size:"sm",color:"gray"},{default:o(()=>[Wt]),_:1},8,["onClick"]),a(p,{onClick:m(J,["prevent"]),text:"",size:"sm",color:"success"},{default:o(()=>[Xt]),_:1},8,["onClick"])]),_:1})):_("",!0)]}),_:1})],64))}};export{is as default};