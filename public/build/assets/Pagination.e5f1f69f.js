import{L as m,G as _,i as n,e as t,j as p,F as c,p as f,s as b,q as d,v as g}from"./app.56e246d3.js";var v=(s,a)=>{const e=s.__vccOpts||s;for(const[o,l]of a)e[o]=l;return e};const x={components:{Link:m},props:{links:Array,right:{type:Boolean,value:!1}}},h={key:0},k=["innerHTML"];function y(s,a,e,o,l,L){const u=_("Link");return e.links.length>3?(n(),t("div",h,[p("div",{class:d(["flex flex-wrap -mb-1 mt-4",{"justify-end":e.right}])},[(n(!0),t(c,null,f(e.links,(r,i)=>(n(),t(c,null,[r.url===null?(n(),t("div",{key:i,class:"mb-1 px-4 py-3 text-gray-400 text-sm leading-4 border",innerHTML:r.label},null,8,k)):(n(),b(u,{key:`link-${i}`,class:d(["mb-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-indigo-500",{"border-2 border-blue-500":r.active}]),href:r.url,innerHTML:r.label},null,8,["class","href","innerHTML"]))],64))),256))],2)])):g("",!0)}var H=v(x,[["render",y]]);export{H as P};
