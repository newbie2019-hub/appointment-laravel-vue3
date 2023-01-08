import{o,q as y,g as m,i as a,b as n,e as s,j as i,m as c,s as h,A as x,y as f}from"./app.fc873133.js";import{_ as g}from"./Button.6de11eb6.js";import{_ as v}from"./Modal.8df71df5.js";import{_ as d}from"./Radio.02e8f620.js";const b=a("p",{class:"text-xl font-bold"},"Health Declaration Form",-1),V=a("p",{class:"text-sm font-regular mt-2"}," To ensure the safety of our customers, please fill-up this health declaration form honestly. ",-1),k={class:"overflow-x-auto w-full"},w={class:"w-full divide-y divide-gray-300"},C=a("thead",{class:"bg-gray-50"},[a("tr",{class:"[&>*]:uppercase font-medium text-xs text-gray-500"},[a("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6"}),a("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left sm:pl-6"}," Answer ")])],-1),N={class:"bg-white divide-y divide-gray-200"},O={class:"hover:bg-gray-50"},U=a("td",{class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"}," 1. Are you experiencing (nakakaranas ka ba ng): Soar Throat, Body Pains, Headache, Fever ",-1),Y={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},S={key:0,class:"flex gap-x-4 ml-4"},A={key:1,class:"text-gray-600"},B={class:"hover:bg-gray-50"},H=a("td",{class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"}," 2. Have you come in contact or stayed together in the same close environment of a confirmed COVID-19 case? (May nakasama ka ba o nakatrabahong tao na kumpirmadong me COVID-19/may impeksyon ng novel corona virus?) ",-1),D={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},I={key:0,class:"flex gap-x-4 ml-4"},M={key:1,class:"text-gray-600"},_={class:"hover:bg-gray-50"},$=a("td",{class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"}," 3. Have you had any contact with anyone with fever, cough, colds or sore throat in the past 2 weeks? (Mayroon ka bang nakasama na may lagnat, ubo, sipon o sakit ng lalamunan sa nakalipas na dalawang linggo?) ",-1),F={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},T={key:0,class:"flex gap-x-4 ml-4"},j={key:1,class:"text-gray-600"},z={class:"hover:bg-gray-50"},P=a("td",{class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"}," 4. Have you travelled to an area where there are high COVID-19 cases in the last 14 days? (Ikaw ba ay pumunta o nagbyahe sa lugar na mayroong mataas na kaso ng COVID-19 sa nakalipas na labing-apat na araw?) ",-1),E={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},W={key:0,class:"flex gap-x-4 ml-4"},G={key:1,class:"text-gray-600"},J={class:"hover:bg-gray-50"},K=a("td",{class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"}," 5. Have you travelled to any area aside from your home location? (Ikaw ba ay nagpunta sa iba pang parte o lugar bukod sa iyong bahay?) Specify (Sabihin kung saan) ",-1),L={class:"py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"},Q={key:0,class:"flex gap-x-4 ml-4"},R={key:1,class:"text-gray-600"},X=f("Close"),Z=f("Save Appointment"),oe={__name:"HealthForm",props:{data:{type:Object,required:!0},viewOnly:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},maxWidth:{type:[Number,String],default:400}},emits:["emitClose","saveAppointment"],setup(e,{emit:r}){const u=()=>r("emitClose"),q=()=>r("emitSaveAppointment");return(p,t)=>(o(),y(v,x(p.$attrs,{onClose:u}),{title:m(()=>[b,V]),body:m(()=>[a("div",k,[a("table",w,[C,a("tbody",N,[a("tr",O,[U,a("td",Y,[e.viewOnly?(o(),n("p",A,i(e.data.q1),1)):(o(),n("div",S,[s(d,{modelValue:e.data.q1,"onUpdate:modelValue":t[0]||(t[0]=l=>e.data.q1=l),for:"q1yes",id:"q1yes",label:"Yes",value:"Yes",name:"q1"},null,8,["modelValue"]),s(d,{modelValue:e.data.q1,"onUpdate:modelValue":t[1]||(t[1]=l=>e.data.q1=l),for:"q1no",id:"q1no",label:"No",value:"No",name:"q1"},null,8,["modelValue"])]))])]),a("tr",B,[H,a("td",D,[e.viewOnly?(o(),n("p",M,i(e.data.q2),1)):(o(),n("div",I,[s(d,{modelValue:e.data.q2,"onUpdate:modelValue":t[2]||(t[2]=l=>e.data.q2=l),for:"q2yes",id:"q2yes",label:"Yes",value:"Yes",name:"q2"},null,8,["modelValue"]),s(d,{modelValue:e.data.q2,"onUpdate:modelValue":t[3]||(t[3]=l=>e.data.q2=l),for:"q2no",id:"q2no",label:"No",value:"No",name:"q2"},null,8,["modelValue"])]))])]),a("tr",_,[$,a("td",F,[e.viewOnly?(o(),n("p",j,i(e.data.q3),1)):(o(),n("div",T,[s(d,{modelValue:e.data.q3,"onUpdate:modelValue":t[4]||(t[4]=l=>e.data.q3=l),for:"q3yes",id:"q3yes",label:"Yes",value:"Yes",name:"q3"},null,8,["modelValue"]),s(d,{modelValue:e.data.q3,"onUpdate:modelValue":t[5]||(t[5]=l=>e.data.q3=l),for:"q3no",id:"q3no",label:"No",value:"No",name:"q3"},null,8,["modelValue"])]))])]),a("tr",z,[P,a("td",E,[e.viewOnly?(o(),n("p",G,i(e.data.q4),1)):(o(),n("div",W,[s(d,{modelValue:e.data.q4,"onUpdate:modelValue":t[6]||(t[6]=l=>e.data.q4=l),for:"q4yes",id:"q4yes",label:"Yes",value:"Yes",name:"q4"},null,8,["modelValue"]),s(d,{modelValue:e.data.q4,"onUpdate:modelValue":t[7]||(t[7]=l=>e.data.q4=l),for:"q4no",id:"q4no",label:"No",value:"No",name:"q4"},null,8,["modelValue"])]))])]),a("tr",J,[K,a("td",L,[e.viewOnly?(o(),n("p",R,i(e.data.q5),1)):(o(),n("div",Q,[s(d,{modelValue:e.data.q5,"onUpdate:modelValue":t[8]||(t[8]=l=>e.data.q5=l),for:"q5yes",id:"q5yes",label:"Yes",value:"Yes",name:"q5"},null,8,["modelValue"]),s(d,{modelValue:e.data.q5,"onUpdate:modelValue":t[9]||(t[9]=l=>e.data.q5=l),for:"q5no",id:"q5no",label:"No",value:"No",name:"q5"},null,8,["modelValue"])]))])])])])])]),footer:m(()=>[s(g,{onClick:c(u,["prevent"]),text:"",size:"sm",color:"gray"},{default:m(()=>[X]),_:1},8,["onClick"]),e.viewOnly?h("",!0):(o(),y(g,{key:0,onClick:c(q,["prevent"]),text:"",size:"sm",color:"success"},{default:m(()=>[Z]),_:1},8,["onClick"]))]),_:1},16))}};export{oe as _};
