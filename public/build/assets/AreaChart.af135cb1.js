import{J as s,B as o,o as r,b as c,e as l}from"./app.561a9f05.js";const p={id:"chart"},u={__name:"PolarCharts",props:{series:{type:[Object,Array],default:[]},labels:{type:[Object,Array],default:[]},chartOptions:{type:Object,default:{chart:{width:"100%",type:"polarArea"},labels:[],fill:{opacity:1},stroke:{width:1,colors:void 0},yaxis:{show:!1},legend:{position:"right"},plotOptions:{polarArea:{rings:{strokeWidth:0},spokes:{strokeWidth:0}}},theme:{monochrome:{enabled:!0,shadeTo:"light",shadeIntensity:.6}}}}},setup(e){const t=e;return s(()=>{t.chartOptions.labels=t.labels}),(n,i)=>{const a=o("apexchart");return r(),c("div",p,[l(a,{type:"polarArea",class:"w-full",options:e.chartOptions,series:e.series},null,8,["options","series"])])}}},h={id:"chart"},m={__name:"AreaChart",props:{series:{type:[Object,Array],default:[{name:"Weekly Income",data:[]}]},labels:{type:[Object,Array],default:[]},chartOptions:{type:Object,default:{chart:{type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"date",categories:[],convertedCatToNumeric:!1},fill:{colors:["#22a34a"]},markers:{colors:["#22a34a"]},tooltip:{x:{format:"YYYY-MM-DD"}}}}},setup(e){const t=e;return s(()=>{t.chartOptions.xaxis.categories=t.labels}),(n,i)=>{const a=o("apexchart");return r(),c("div",h,[l(a,{type:"area",class:"w-full",options:e.chartOptions,series:e.series},null,8,["options","series"])])}}};export{u as _,m as a};