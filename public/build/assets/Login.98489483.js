import{c as v,o as c,b as w,v as y,a1 as k,f as t,i as e,k as V,j as u,u as S,a as j,q as p,g as f,e as r,H as $,s as b,m as B,L as _,y as h}from"./app.a9bf51d5.js";import{_ as C}from"./Guest.e27423a4.js";import{_ as x,a as g}from"./Label.0afba1ff.js";const L={class:"inline-flex items-center gap-x-1"},N=["id","value"],U=["for"],q={__name:"Checkbox",props:{for:{type:[String,Number],default:null},checked:{type:[Array,Boolean],default:!1},value:{default:null},label:{type:String,default:""}},emits:["update:checked"],setup(o,{emit:m}){const n=o,s=v({get(){return n.checked},set(i){m("update:checked",i)}});return(i,a)=>(c(),w("div",L,[y(e("input",{id:n.for,type:"checkbox",value:o.value,"onUpdate:modelValue":a[0]||(a[0]=l=>V(s)?s.value=l:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,N),[[k,t(s)]]),e("label",{for:n.for},u(o.label),9,U)]))}},P={key:0,class:"mb-4 font-medium text-sm text-green-600"},R={class:"flex w-full"},D={class:"flex flex-col flex-1 h-screen items-center justify-center bg-white w-full text-left md:max-w-xl"},E={class:"w-full md:max-w-sm shadow-lg bg-white max-w-sm px-10 py-8 rounded-lg md:p-0 md:shadow-none"},F=e("div",null,[e("p",{class:"text-3xl font-bold mt-2"},"Sign-in to your account"),e("p",{class:"text-sm mb-4 mt-1"},"Please enter your login credentials to proceed to your account.")],-1),A=["onSubmit"],H={class:"text-sm text-red-500"},M={class:"mt-4"},T={class:"text-sm text-red-500"},O={class:"mt-4 flex justify-between items-center"},z={class:"flex items-center"},G=e("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),I=h(" Forgot your password? "),J={class:"flex items-center justify-end mt-12 mb-4"},K=["disabled"],Q=e("hr",{class:"mt-10 mb-6"},null,-1),W={class:"mt-4 text-center"},X=e("span",{class:"text-sm"},"Don't have an account?",-1),Y=h(),Z=h(" Sign-Up"),ee=e("div",{class:"hidden md:block flex-1 w-96"},[e("img",{src:"images/alwayssmile.jpg",class:"h-screen object-fit w-full blur-[1px]",alt:""})],-1),ae={__name:"Login",props:{canResetPassword:Boolean,status:String,errors:Object},setup(o){const m=o,n=S(),s=j({email:"",password:"",remember:!1}),i=()=>{s.post(route("login"),{onFinish:()=>s.reset("password"),onError:()=>{var a;n.error((a=m.errors.auth)!=null?a:"Something went wrong!")}})};return(a,l)=>(c(),p(C,null,{default:f(()=>[r(t($),{title:"Log in"}),o.status?(c(),w("div",P,u(o.status),1)):b("",!0),e("div",R,[e("div",D,[e("div",E,[F,e("form",{onSubmit:B(i,["prevent"])},[e("div",null,[r(x,{for:"email",value:"Email"}),r(g,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:t(s).email,"onUpdate:modelValue":l[0]||(l[0]=d=>t(s).email=d),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),e("p",H,u(o.errors.email),1)]),e("div",M,[r(x,{for:"password",value:"Password"}),r(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:t(s).password,"onUpdate:modelValue":l[1]||(l[1]=d=>t(s).password=d),required:"",autocomplete:"current-password"},null,8,["modelValue"]),e("p",T,u(o.errors.password),1)]),e("div",O,[e("label",z,[r(q,{name:"remember",checked:t(s).remember,"onUpdate:checked":l[2]||(l[2]=d=>t(s).remember=d)},null,8,["checked"]),G]),o.canResetPassword?(c(),p(t(_),{key:0,href:a.route("password.request"),class:"hover:underline text-sm text-blue-400 hover:text-blue-700"},{default:f(()=>[I]),_:1},8,["href"])):b("",!0)]),e("div",J,[e("button",{disabled:t(s).processing,type:"submit",class:"bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 duration-200 ease-in-out rounded-lg w-full disabled:bg-blue-400 disabled:cursor-progress"},"Log-in Account",8,K)])],40,A),Q,e("div",W,[X,Y,r(t(_),{href:a.route("register"),class:"text-sm text-gray-600 hover:text-blue-500 relative"},{default:f(()=>[Z]),_:1},8,["href"])])])]),ee])]),_:1}))}};export{ae as default};
