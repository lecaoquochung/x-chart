!function(c){function e(e){for(var t,i,a=e[0],r=e[1],o=e[2],n=0,s=[];n<a.length;n++)i=a[n],u[i]&&s.push(u[i][0]),u[i]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(c[t]=r[t]);for(h&&h(e);s.length;)s.shift()();return d.push.apply(d,o||[]),l()}function l(){for(var e,t=0;t<d.length;t++){for(var i=d[t],a=!0,r=1;r<i.length;r++){var o=i[r];0!==u[o]&&(a=!1)}a&&(d.splice(t--,1),e=n(n.s=i[0]))}return e}var i={},u={app:0},d=[];function n(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return c[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=c,n.c=i,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/x-chart/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var h=a;d.push([0,"chunk-vendors"]),l()}({0:function(e,t,i){e.exports=i("cd49")},"0132":function(e,t,i){"use strict";var a=i("6163");i.n(a).a},"0c9b":function(e,t,i){"use strict";var a=i("2920");i.n(a).a},"0f08":function(e){e.exports={data:{chartType:"x-line-area",columns:[{type:"x",field:"course_name",name:"Course Name"},{type:"y",field:"difficulty",name:"Enrols"}],rows:[{difficulty:9408.81,course_name:"Course1"},{difficulty:8024.02,course_name:"Course2"},{difficulty:7729.59,course_name:"Course3"},{difficulty:6430.59,course_name:"Course4"},{difficulty:6140.94,course_name:"Course5"},{difficulty:6065.3,course_name:"Course6"},{difficulty:6025.71,course_name:"Course7"},{difficulty:4780.8,course_name:"Course8"},{difficulty:4724.57,course_name:"Course9"},{difficulty:4634.27,course_name:"Course10"}]},error_code:0,error_msg:""}},"19f7":function(e,t,i){"use strict";var a=i("c4cd");i.n(a).a},"1f89":function(e,t,i){var a={"./dashboard.json":"7d6a","./x-bar.json":"2980","./x-circle.json":"32c8","./x-hbar.json":"678e","./x-line-area.json":"0f08","./x-line.json":"33bf","./x-number.json":"be42","./x-pie.json":"6467"};function r(e){var t=o(e);return i(t)}function o(e){var t=a[e];if(t+1)return t;var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}r.keys=function(){return Object.keys(a)},r.resolve=o,(e.exports=r).id="1f89"},2106:function(e,t,i){},2920:function(e,t,i){},2980:function(e){e.exports={data:{chartType:"x-bar",columns:[{type:"x",field:"course_name",name:"Course Name"},{type:"y",field:"difficulty",name:"Enrols"}],rows:[{difficulty:9408.81,course_name:"Course1"},{difficulty:8024.02,course_name:"Course2"},{difficulty:7729.59,course_name:"Course3"},{difficulty:6430.59,course_name:"Course4"},{difficulty:6140.94,course_name:"Course5"},{difficulty:6065.3,course_name:"Course6"},{difficulty:6025.71,course_name:"Course7"},{difficulty:4780.8,course_name:"Course8"},{difficulty:4724.57,course_name:"Course9"},{difficulty:4634.27,course_name:"Course10"}]},error_code:0,error_msg:""}},"32c8":function(e){e.exports={data:{chartType:"x-circle",columns:[{type:"x",field:"post_name",name:"Top Name"},{type:"y",field:"learn_time",name:"Video learn duration"}],rows:[{learn_time:9408.81,post_name:"Course1"},{learn_time:8024.02,post_name:"Course2"},{learn_time:7729.59,post_name:"Course3"},{learn_time:6430.59,post_name:"Course4"},{learn_time:6140.94,post_name:"Course5"},{learn_time:6065.3,post_name:"Course6"}]},error_code:0,error_msg:""}},"33bf":function(e){e.exports={data:{chartType:"x-line",columns:[{type:"x",field:"course_name",name:"Course Name"},{type:"y",field:"difficulty",name:"Enrols"}],rows:[{difficulty:9408.81,course_name:"Course1"},{difficulty:8024.02,course_name:"Course2"},{difficulty:7729.59,course_name:"Course3"},{difficulty:6430.59,course_name:"Course4"},{difficulty:6140.94,course_name:"Course5"},{difficulty:6065.3,course_name:"Course6"},{difficulty:6025.71,course_name:"Course7"},{difficulty:4780.8,course_name:"Course8"},{difficulty:4724.57,course_name:"Course9"},{difficulty:4634.27,course_name:"Course10"}]},error_code:0,error_msg:""}},3854:function(e,t,i){},"398d":function(e,t,i){},"3e87":function(e){e.exports={version:1,themeName:"xuetangx",theme:{seriesCnt:"4",backgroundColor:"rgba(252,252,252,0)",titleColor:"#4d4d4d",subtitleColor:"#9fa9bb",textColorShow:!1,textColor:"#9fa9bb",markTextColor:"#ffffff",color:["#7956EC","#009FC5","#F23673","#5134B2","#2FB9F8","#FFC066","#3CECB0","#B175EB"],borderColor:"#ccc",borderWidth:0,visualMapColor:["#516b91","#59c4e6","#a5e7f0"],toolbox:{iconStyle:{normal:{borderColor:"#2ec7c9"}}},tooltip:{backgroundColor:"rgba(50,50,50,0.5)",axisPointer:{type:"line",lineStyle:{color:"#008acd"},crossStyle:{color:"#008acd"},shadowStyle:{color:"rgba(200,200,200,0.2)"}}},dataZoom:{dataBackgroundColor:"#efefff",fillerColor:"rgba(182,162,222,0.2)",handleColor:"#008acd"},grid:{borderColor:"#eee"},legendTextColor:"#9fa9bb",kColor:"#edafda",kColor0:"transparent",kBorderColor:"#d680bc",kBorderColor0:"#8fd3e8",kBorderWidth:"2",lineWidth:"2",symbolSize:"6",symbol:"emptyCircle",symbolBorderWidth:"2",lineSmooth:!0,graphLineWidth:1,graphLineColor:"#aaa",mapLabelColor:"#000000",mapLabelColorE:"#115599",mapBorderColor:"#516b91",mapBorderColorE:"#516b91",mapBorderWidth:.5,mapBorderWidthE:"1",mapAreaColor:"#f3f3f3",mapAreaColorE:"rgba(165,231,240,1)",axes:[{type:"all",name:"通用坐标轴",axisLineShow:!0,axisLineColor:"#f1f2f7",axisTickShow:!0,axisTickColor:"#f1f2f7",axisLabelShow:!0,axisLabelColor:"#9FA9BB",splitLineShow:!1,splitLineColor:["#f1f2f7"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.05)","rgba(200,200,200,0.02)"]},{type:"category",name:"类目坐标轴",axisLineShow:!0,axisLineColor:"#F1F2F7",axisTickShow:!0,axisTickColor:"#F1F2F7",axisLabelShow:!0,axisLabelColor:"#9FA9BB",splitLineShow:!1,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"value",name:"数值坐标轴",axisLineShow:!0,axisLineColor:"#F1F2F7",axisTickShow:!0,axisTickColor:"#F1F2F7",axisLabelShow:!0,axisLabelColor:"#9FA9BB",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"log",name:"对数坐标轴",axisLineShow:!0,axisLineColor:"#F1F2F7",axisTickShow:!0,axisTickColor:"#F1F2F7",axisLabelShow:!0,axisLabelColor:"#9FA9BB",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]},{type:"time",name:"时间坐标轴",axisLineShow:!0,axisLineColor:"#F1F2F7",axisTickShow:!0,axisTickColor:"#F1F2F7",axisLabelShow:!0,axisLabelColor:"#9FA9BB",splitLineShow:!0,splitLineColor:["#ccc"],splitAreaShow:!1,splitAreaColor:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}],axisSeperateSetting:!1,toolboxColor:"#888888",toolboxEmpasisColor:"#888888",tooltipAxisColor:"#cccccc",tooltipAxisWidth:"0",timelineLineColor:"#8fd3e8",timelineLineWidth:1,timelineItemColor:"#8fd3e8",timelineItemColorE:"#8fd3e8",timelineCheckColor:"#8fd3e8",timelineCheckBorderColor:"rgba(138,124,168,0.37)",timelineItemBorderWidth:1,timelineControlColor:"#8fd3e8",timelineControlBorderColor:"#8fd3e8",timelineControlBorderWidth:.5,timelineLabelColor:"#8fd3e8",datazoomBackgroundColor:"rgba(0,0,0,0)",datazoomDataColor:"rgba(255,255,255,0.3)",datazoomFillColor:"rgba(167,183,204,0.4)",datazoomHandleColor:"#a7b7cc",datazoomHandleWidth:"100",datazoomLabelColor:"#333333"}}},"4b76":function(e,t,i){},"543f":function(e,t,i){},6163:function(e,t,i){},6467:function(e){e.exports={data:{chartType:"x-pie",columns:[{type:"x",field:"post_name",name:"Topic Name"},{type:"y",field:"learn_time",name:"Video learn duration"}],rows:[{learn_time:9408.81,post_name:"Course1"},{learn_time:8024.02,post_name:"Course2"},{learn_time:7729.59,post_name:"Course3"},{learn_time:6430.59,post_name:"Course4"},{learn_time:6140.94,post_name:"Course5"},{learn_time:6065.3,post_name:"Course6"}]},error_code:0,error_msg:""}},"678e":function(e){e.exports={data:{chartType:"x-hbar",columns:[{type:"x",field:"course_name",name:"Course Name"},{type:"y",field:"difficulty",name:"Enrols"}],rows:[{difficulty:9408.81,course_name:"Course1"},{difficulty:8024.02,course_name:"Course2"},{difficulty:7729.59,course_name:"Course3"},{difficulty:6430.59,course_name:"Course4"},{difficulty:6140.94,course_name:"Course5"},{difficulty:6065.3,course_name:"Course6"},{difficulty:6025.71,course_name:"Course7"},{difficulty:4780.8,course_name:"Course8"},{difficulty:4724.57,course_name:"Course9"},{difficulty:4634.27,course_name:"Course10"}]},error_code:0,error_msg:""}},"78d4":function(e,t,i){"use strict";var a=i("398d");i.n(a).a},"7d6a":function(e){e.exports={error_code:0,error_msg:"",data:{slices:[{sliceId:1,x:0,y:0,w:12,h:6,width:360,height:210,i:"number1",chartType:"x-number",title:"Number1"},{sliceId:2,x:12,y:0,w:12,h:6,width:360,height:210,i:"number2",chartType:"x-number",title:"Number2"},{sliceId:3,x:24,y:0,w:12,h:6,width:360,height:210,i:"number3",chartType:"x-number",title:"Number3"},{sliceId:4,x:0,y:6,w:12,h:8,width:360,height:290,i:"chart1",chartType:"x-bar",title:"Bar"},{sliceId:5,x:12,y:6,w:12,h:8,width:360,height:290,i:"chart2",chartType:"x-line",title:"Line"},{sliceId:6,x:24,y:6,w:12,h:8,width:360,height:290,i:"chart3",chartType:"x-line-area",title:"Line Area"},{sliceId:7,x:0,y:14,w:12,h:8,width:360,height:290,i:"chart4",chartType:"x-pie",title:"Pie"},{sliceId:8,x:12,y:14,w:12,h:8,width:360,height:290,i:"chart5",chartType:"x-circle",title:"Circle"},{sliceId:9,x:24,y:14,w:12,h:8,width:360,height:290,i:"chart6",chartType:"x-hbar",title:"Horizontal Bar"}]}}},"8a42":function(e,t,i){},9952:function(e,t,i){"use strict";var a=i("3854");i.n(a).a},"999f":function(e,t,i){},"9a29":function(e,t,i){"use strict";var a=i("aebf");i.n(a).a},"9e30":function(e,t,i){"use strict";var a=i("8a42");i.n(a).a},a1a3:function(e,t,i){},a3b4:function(e,t,i){"use strict";var a=i("2106");i.n(a).a},aebf:function(e,t,i){},b041:function(e,t,i){"use strict";var a=i("543f");i.n(a).a},b1a3:function(e,t,i){"use strict";var a=i("fd5f");i.n(a).a},b2ab:function(e,t,i){"use strict";var a=i("4b76");i.n(a).a},b832:function(e,t,i){"use strict";var a=i("999f");i.n(a).a},be42:function(e){e.exports={data:{chartType:"x-number",columns:[{type:"y",field:"enroll_number",name:"Enroll Number",unit:"Persion"}],rows:[{enroll_number:32778}]},error_code:0,error_msg:""}},c4cd:function(e,t,i){},cd49:function(e,t,r){"use strict";r.r(t);var o=r("be94"),a=(r("cadf"),r("551c"),r("097d"),r("f5df"),r("a1a3"),r("94b1"),r("ef97"),r("c037"),r("007d"),r("d28f"),r("a026")),i=r("4328"),n=r("d2d7"),s=r("8c4f"),c=r("d4ec"),l=r("99de"),u=r("7e84"),d=r("262e"),h=r("9ab4"),f=(r("96cf"),r("1da1")),p=r("bee2"),m=r("2903"),b=r("60a3"),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).expanded=!1,e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"expandClick",value:function(){this.expanded=!this.expanded,this.$parent.$emit("expand",{expand:this.expanded,targetRef:this.expandTarget})}}]),t}(b.c);h.a([Object(b.b)({default:!1})],g.prototype,"white",void 0),h.a([Object(b.b)({default:""})],g.prototype,"expandTarget",void 0);var y=g=h.a([b.a],g),x=(r("a3b4"),r("2877")),v=Object(x.a)(y,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"x-expand",on:{click:e.expandClick}},[i("el-tooltip",{attrs:{content:e.expanded?"Exit focus mode":"Into focus mode",placement:"top"}},[i("i",{staticClass:"icon",class:{"icon-fullscreen":!e.expanded,"icon-fullscreen-exit":e.expanded},style:{color:e.white?"#fff":"#888"}})])],1)},[],!1,null,"70787300",null);v.options.__file="expand-btn.vue";var C=v.exports,_=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"switchLegend",value:function(){this.$emit("update:legend",!this.legend)}}]),t}(b.c);h.a([Object(b.b)({default:!0})],_.prototype,"legend",void 0);var w=_=h.a([b.a],_),O=(r("b2ab"),Object(x.a)(w,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-tooltip",{attrs:{content:(e.legend?"Hide":"Show")+" legend",placement:"top"}},[i("div",{staticClass:"x-legend",on:{click:e.switchLegend}},[i("i",{class:e.legend?"icon-smile":"icon-frown"})])])},[],!1,null,"668b2dca",null));O.options.__file="legend-btn.vue";var j=O.exports,L=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).disabled=!1,e.count=3,e.timer=null,e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"syncData",value:function(){var e=this;this.disabled||(this.$emit("sync"),this.disabled=!0,this.timer=setInterval(function(){e.count-=1,0===e.count&&(e.count=3,e.disabled=!1,clearInterval(e.timer),e.timer=null)},1e3))}}]),t}(b.c);h.a([Object(b.b)({default:!1})],L.prototype,"white",void 0);var k=L=h.a([b.a],L),S=(r("19f7"),Object(x.a)(k,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-tooltip",{attrs:{content:e.disabled?"Can Sync after "+e.count+"s":"Sync Chart Data",placement:"top"}},[i("div",{staticClass:"x-legend",class:{disabled:e.disabled},on:{click:e.syncData}},[i("i",{staticClass:"icon-sync",style:{color:e.white?"#fff":"#888"}})])])},[],!1,null,"432e595f",null));S.options.__file="sync-btn.vue";var E,T=S.exports,B=(r("f751"),r("7f7f"),r("ac6a"),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).$refs={chart:HTMLDivElement},e.chartType="",e.hasAxis=!0,e.chart={setOption:function(){},resize:function(){}},e.direction="vertical",e.initOptions={renderer:"canvas"},e.xColumn={},e.yColumns=[],e.categories=[],e.seriesData=[],e.options={},e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"onApiDataChanged",value:function(){this.loading||this.initChart()}},{key:"onColorStartChanged",value:function(){this.initChart()}},{key:"onColorEndChanged",value:function(){this.initChart()}},{key:"onLegendChange",value:function(e){this.chart.setOption({legend:{show:e}})}},{key:"handleChartClick",value:function(e){}},{key:"chartInit",value:function(e){var t=this;this.chart=e,this.$nextTick(function(){t.resizeChart()})}},{key:"emitInit",value:function(){this.chart=this.$refs.chart.chart,this.$emit("init",{chart:this.chart,chartData:this.apiData})}},{key:"resizeChart",value:function(){this.chart&&this.chart.resize()}},{key:"convertData",value:function(){var a=this,r=this.apiData;this.yColumns=[],this.categories=[],this.seriesData=[],this.apiData.columns.forEach(function(e){"x"===e.type&&(a.xColumn=e),"y"===e.type&&a.yColumns.push(e)}),this.yColumns.forEach(function(t){var i=[];r.rows.forEach(function(e){a.xColumn&&a.xColumn.field&&a.categories.length<r.rows.length&&a.categories.push(e[a.xColumn.field]),t&&t.field&&i.push(Object(o.a)({},{name:e[a.xColumn.field],value:e[t.field]},e))}),a.seriesData.push(i)})}},{key:"initChart",value:function(){var a,r=this;this.convertData(),this.options.series=[],a=this.hasAxis?("horizontal"===this.direction?this.options.yAxis[0].data=this.categories:this.options.xAxis[0].data=this.categories,1<this.seriesData.length?{}:this.itemStyle):{},this.seriesData.forEach(function(e,t){var i=E.createEchartsSeriesItem(r.chartType,r.yColumns[t].name,e,a);r.options.series.push(i)})}},{key:"mounted",value:(i=Object(f.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.emitInit();case 1:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"itemStyle",get:function(){var e={normal:{color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:this.colorStart},{offset:1,color:this.colorEnd}]}}};return"x-bar"===this.chartType&&(e.normal.color.x2=0,e.normal.color.y2=1),e}}],[{key:"createEchartsSeriesItem",value:function(e,t,i,a){var r,o={name:t,data:i,itemStyle:a,smooth:!0};switch(e){case"x-bar":case"x-hbar":r={type:"bar"};break;case"x-line-area":r={type:"line",areaStyle:{normal:{opacity:.3}}};break;case"x-pie":r={type:"pie",radius:"60%",center:["50%","50%"],label:{normal:{show:!1,formatter:"{b}: {d}%",color:"#9FA9BB"}},labelLine:{normal:{show:!1,lineStyle:{color:"#9FA9BB"}}}};break;case"x-circle":r={type:"pie",radius:["50%","60%"],center:["50%","50%"],label:{normal:{show:!1,formatter:"{b}: {d}%",color:"#9FA9BB"}},labelLine:{normal:{show:!1,lineStyle:{color:"#9FA9BB"}}}};break;default:r={type:"line"}}return Object.assign({},o,r)}}]),t;var i}(b.c));h.a([Object(b.b)({default:!0})],B.prototype,"loading",void 0),h.a([Object(b.b)({default:!0})],B.prototype,"legend",void 0),h.a([Object(b.b)({default:{columns:[],rows:[]}})],B.prototype,"apiData",void 0),h.a([Object(b.b)({default:""})],B.prototype,"title",void 0),h.a([Object(b.b)({default:"#7956EC"})],B.prototype,"colorStart",void 0),h.a([Object(b.b)({default:"#3CECCF"})],B.prototype,"colorEnd",void 0),h.a([Object(b.d)("apiData",{immediate:!0})],B.prototype,"onApiDataChanged",null),h.a([Object(b.d)("colorStart")],B.prototype,"onColorStartChanged",null),h.a([Object(b.d)("colorEnd")],B.prototype,"onColorEndChanged",null),h.a([Object(b.d)("legend")],B.prototype,"onLegendChange",null);var F=B=E=h.a([Object(b.a)({})],B),A=(r("456d"),r("53ca")),I=(r("a481"),/<\/?([^<|^>]*)>/g);function D(e,t){if(!e)return"";for(var i="".concat(e),a=0,r=(i=i.replace(I,"")).length,o="",n=0;n<r;n+=1){var s=i.charAt(n);if(a+=1,4<encodeURI(s).length&&(a+=1),o=o.concat(s),t<a)return o=o.concat("...");if(a===t)return o}return a<t?i:""}var $=r("65d9"),P=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).chartType="x-line",e.options={title:{show:!1,text:e.title,textStyle:{align:"center",verticalAlign:"middle"},top:10,left:"10"},legend:{show:!0,top:10},tooltip:{trigger:"item",axisPointer:{type:"line"},confine:!0},grid:{show:!0,top:40,left:20,right:20,bottom:10,containLabel:!0},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#9FA9BB"}},data:[],axisLabel:{rotate:75,showMaxLabel:!0,formatter:function(e){return D(e,5)}}}],yAxis:[{type:"value",axisLine:{lineStyle:{color:"#9FA9BB"}}}],series:[]},e}return Object(d.a)(t,e),t}(Object($.mixins)(F)),M=(r("9e30"),Object(x.a)(P,function(){var e=this,t=e.$createElement;return(e._self._c||t)("echarts",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"chart",staticClass:"chart",attrs:{"element-loading-text":"Loading...",theme:e.theme,"auto-resize":!0,options:e.options},on:{click:e.handleChartClick,init:e.chartInit}})},[],!1,null,"4cfad443",null));M.options.__file="x-line.vue";var N=M.exports,z=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).chartType="x-line-area",e.options={title:{show:!1,text:e.title,textStyle:{align:"center",verticalAlign:"middle"},top:10,left:"10"},legend:{show:!0,top:10},tooltip:{trigger:"item",axisPointer:{type:"line"},confine:!0},grid:{show:!0,top:40,left:20,right:20,bottom:10,containLabel:!0},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#9FA9BB"}},data:[],axisLabel:{rotate:75,showMaxLabel:!0,formatter:function(e){return D(e,5)}}}],yAxis:[{type:"value",axisLine:{lineStyle:{color:"#9FA9BB"}}}],series:[]},e}return Object(d.a)(t,e),t}(Object($.mixins)(F)),R=(r("0132"),Object(x.a)(z,function(){var e=this,t=e.$createElement;return(e._self._c||t)("echarts",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"chart",staticClass:"chart",attrs:{"element-loading-text":"Loading...",theme:e.theme,"auto-resize":!0,options:e.options},on:{click:e.handleChartClick,init:e.chartInit}})},[],!1,null,"350a2ccc",null));R.options.__file="x-line-area.vue";var H=R.exports,X=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).chartType="x-bar",e.options={title:{show:!1,text:e.title,textStyle:{align:"center",verticalAlign:"middle"},top:10,left:"10"},legend:{show:!0,top:10},tooltip:{trigger:"item",axisPointer:{type:"line"},confine:!0},grid:{show:!0,top:40,left:20,right:20,bottom:10,containLabel:!0},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#9FA9BB"}},data:[],axisLabel:{rotate:75,showMaxLabel:!0,formatter:function(e){return D(e,5)}}}],yAxis:[{type:"value",axisLine:{lineStyle:{color:"#9FA9BB"}}}],series:[]},e}return Object(d.a)(t,e),t}(Object($.mixins)(F)),W=X=h.a([b.a],X),U=(r("b832"),Object(x.a)(W,function(){var e=this,t=e.$createElement;return(e._self._c||t)("echarts",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"chart",staticClass:"chart",attrs:{"element-loading-text":"Loading...",theme:e.theme,"auto-resize":!0,initOptions:e.initOptions,options:e.options},on:{click:e.handleChartClick,init:e.chartInit}})},[],!1,null,"4d507116",null));U.options.__file="x-bar.vue";var G=U.exports,J=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).chartType="x-hbar",e.direction="horizontal",e.options={title:{show:!1,text:e.title,textStyle:{align:"center",verticalAlign:"middle"},top:10,left:"10"},legend:{show:!0,top:10},tooltip:{trigger:"item",axisPointer:{type:"line"}},grid:{show:!0,top:40,left:20,right:20,bottom:10,containLabel:!0},xAxis:[{type:"value",position:"top",axisLine:{lineStyle:{color:"#9FA9BB"}}}],yAxis:[{type:"category",axisLine:{lineStyle:{color:"#9FA9BB"}},inverse:!0,data:[],axisLabel:{rotate:0,showMaxLabel:!0,formatter:function(e){return D(e,5)}}}],series:[]},e}return Object(d.a)(t,e),t}(Object($.mixins)(F)),V=(r("b1a3"),Object(x.a)(J,function(){var e=this,t=e.$createElement;return(e._self._c||t)("echarts",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"chart",staticClass:"chart",attrs:{"element-loading-text":"Loading...",theme:e.theme,"auto-resize":!0,options:e.options},on:{click:e.handleChartClick,init:e.chartInit}})},[],!1,null,"2c5e7c26",null));V.options.__file="x-hbar.vue";var q=V.exports,Y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).hasAxis=!1,e.chartType="x-pie",e.options={title:{show:!1,text:e.title,textStyle:{align:"center",verticalAlign:"middle"},top:10,left:"10"},legend:{show:!0,top:10},tooltip:{trigger:"item",confine:!0},grid:{show:!1,left:20,right:20,bottom:40,containLabel:!0},series:[]},e}return Object(d.a)(t,e),t}(Object($.mixins)(F)),Z=(r("78d4"),Object(x.a)(Y,function(){var e=this,t=e.$createElement;return(e._self._c||t)("echarts",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"chart",staticClass:"chart",attrs:{"element-loading-text":"Loading...",theme:e.theme,"auto-resize":!0,options:e.options},on:{init:e.chartInit}})},[],!1,null,"e3392104",null));Z.options.__file="x-pie.vue";var K=Z.exports,Q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).hasAxis=!1,e.chartType="x-circle",e.options={title:{show:!1,text:e.title,textStyle:{align:"center",verticalAlign:"middle"},top:10,left:"10"},legend:{show:!0,top:10},tooltip:{trigger:"item",confine:!0},grid:{show:!1,top:40,left:20,right:20,bottom:10,containLabel:!0},series:[]},e}return Object(d.a)(t,e),t}(Object($.mixins)(F)),ee=Q=h.a([b.a],Q),te=(r("b041"),Object(x.a)(ee,function(){var e=this,t=e.$createElement;return(e._self._c||t)("echarts",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"chart",staticClass:"chart",attrs:{"element-loading-text":"Loading...",theme:e.theme,"auto-resize":!0,options:e.options},on:{init:e.chartInit}})},[],!1,null,"0fa90802",null));te.options.__file="x-circle.vue";var ie=te.exports,ae=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).chartType="x-number",e.number="",e.unit="",e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"initChart",value:function(){this.convertData(),this.number=this.apiData.rows[0][this.yColumns[0].field],this.unit=this.yColumns[0].unit}},{key:"style",get:function(){return{fontSize:"".concat((this.height-60)/160*16,"px"),height:"".concat(this.height-60,"px")}}}]),t}(Object($.mixins)(F));h.a([Object(b.b)({required:!0})],ae.prototype,"height",void 0);var re=ae=h.a([b.a],ae),oe=(r("f60f"),Object(x.a)(re,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"x-number",style:e.style},[i("h3",{staticClass:"title"},[e._v(e._s(e.title))]),i("span",{staticClass:"number"},[e._v(e._s(e.loading?"Loading...":e.number))]),i("span",{staticClass:"unit"},[e._v(e._s(e.unit))])])},[],!1,null,"0ac0a86f",null));oe.options.__file="x-number.vue";var ne=oe.exports,se={"x-line":"XLine","x-line-area":"XLineArea","x-bar":"XBar","x-hbar":"XHbar","x-pie":"XPie","x-circle":"XCircle","x-number":"XNumber"},ce=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).loading=!0,e.chart=null,e.chartData={columns:[],rows:[]},e.legend=!0,e.apiData=null,e.ChartComponentMap=se,e.canLegendType=["x-line","x-line-area","x-bar","x-hbar","x-pie","x-circle"],e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"getData",value:(i=Object(f.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.prev=1,e.next=4,this.$http.get("/chart_data",{sliceId:this.item.sliceId,chartType:this.item.chartType});case 4:t=e.sent,this.apiData=t.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1);case 11:this.loading=!1;case 12:case"end":return e.stop()}},e,this,[[1,8]])})),function(){return i.apply(this,arguments)})},{key:"handleFocus",value:function(e){this.$emit("expand",e)}},{key:"chartInit",value:function(e){this.chart=e.chart,this.chartData=e.chartData}},{key:"mounted",value:function(){this.getData()}}]),t;var i}(b.c);h.a([Object(b.b)({default:{}})],ce.prototype,"item",void 0),h.a([Object(b.b)({default:"#7956EC"})],ce.prototype,"colorStart",void 0),h.a([Object(b.b)({default:"#3CECCF"})],ce.prototype,"colorEnd",void 0);var le=ce=h.a([Object(b.a)({components:{XLine:N,XLineArea:H,XBar:G,XHbar:q,XPie:K,XCircle:ie,XNumber:ne,ExpandBtn:C,LegendBtn:j,SyncBtn:T}})],ce),ue=(r("9a29"),Object(x.a)(le,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"container",staticClass:"slice-wrapper"},[i("header",{ref:"header",staticClass:"card-header",class:{center:"x-number"===t.item.chartType}},["x-number"!==t.item.chartType?i("span",{staticClass:"card-title"},[t._v(t._s(t.item.title))]):t._e(),i("div",{staticClass:"right-buttons"},[-1!==t.canLegendType.indexOf(t.item.chartType)?i("legend-btn",{staticClass:"x-btn",attrs:{legend:t.legend},on:{"update:legend":function(e){t.legend=e}}}):t._e(),i("sync-btn",{staticClass:"x-btn",attrs:{white:"x-number"===t.item.chartType},on:{sync:t.getData}}),i("expand-btn",{staticClass:"x-btn",attrs:{"expand-target":t.item.i,white:"x-number"===t.item.chartType},on:{expand:t.handleFocus}})],1)]),i(t.ChartComponentMap[t.item.chartType],{tag:"component",attrs:{loading:t.loading,legend:t.legend,"api-data":t.apiData,title:t.item.title,colorStart:t.colorStart,colorEnd:t.colorEnd,width:t.item.width,height:t.item.height},on:{init:t.chartInit}})],1)},[],!1,null,"39971bcd",null));ue.options.__file="slice.vue";var de=ue.exports,he=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).$refs={dashboard:HTMLDivElement},e.loading=!1,e.showSavePopup=!1,e.showModal=!1,e.gridDraggable=!0,e.gridResizable=!0,e.gridColNum=36,e.gridRowHeight=10,e.gridMargin=[30,30,30,30],e.cachePosition={x:0,y:0,w:0,h:0},e.layoutUpdating=!1,e.slices=[],e}return Object(d.a)(t,e),Object(p.a)(t,[{key:"created",value:function(){this.getDashboard()}},{key:"gridItemBackground",value:function(e,t,i){return{background:"x-number"===e?"linear-gradient(to right, ".concat(t,", ").concat(i,")"):"#fff"}}},{key:"getDashboard",value:(i=Object(f.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,this.layoutUpdating=!0,e.prev=2,e.next=5,this.$http.get("/dashboard");case 5:t=e.sent,this.slices=t.data.slices,this.loading=!1,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),this.loading=!1;case 14:case"end":return e.stop()}},e,this,[[2,10]])})),function(){return i.apply(this,arguments)})},{key:"calPopPosition",value:function(e){var t=16.875,i=(e.$parent.width-this.gridMargin[0]*(this.gridColNum+1))/this.gridColNum,a=Math.round(30*i+Math.max(0,29)*this.gridMargin[0]),r=Math.round(this.gridRowHeight*t+Math.max(0,t-1)*this.gridMargin[1]),o=window.innerHeight,n=(Math.round((o-r)/2)-this.$refs.dashboard.getBoundingClientRect().top-this.gridMargin[1])/(this.gridRowHeight+this.gridMargin[1]);return{popX:(this.gridColNum-30)/2,popY:n,popW:30,popH:t,width:a,height:r}}},{key:"storePosition",value:function(e){this.cachePosition={x:e.x,y:e.y,w:e.w,h:e.h,width:e.width,height:e.height}}},{key:"restorePosition",value:function(e){return e.width=this.cachePosition.width,e.height=this.cachePosition.height,e.x=this.cachePosition.x,e.y=this.cachePosition.y,e.w=this.cachePosition.w,e.h=this.cachePosition.h,e}},{key:"handleFocus",value:function(e){var i=this,t=e.expand,a=e.targetRef,r=this.$refs[a][0];t?(this.gridDraggable=!1,this.gridResizable=!1,this.$nextTick(function(){r.$el.classList.add("popup"),i.slices=i.slices.map(function(e){if(e.i===a){i.storePosition(e);var t=i.calPopPosition(r);e.x=t.popX,e.y=t.popY,e.w=t.popW,e.h=t.popH,e.width=t.width,e.height=t.height}return e}),i.showModal=!0})):(this.gridDraggable=!0,this.gridResizable=!0,this.$nextTick(function(){i.slices=i.slices.map(function(e){return e.i===a&&(e=i.restorePosition(e)),e}),i.showModal=!1,setTimeout(function(){r.$el.classList.remove("popup")},1e3)}))}},{key:"initEvent",value:function(t,e,i,a,r){this.slices=this.slices.map(function(e){return e.i===t&&(e.width=r,e.height=a),e})}},{key:"resizedEvent",value:function(t,e,i,a,r){this.slices=this.slices.map(function(e){return e.i===t&&(e.width=r,e.height=a),e}),this.showSavePopup=!0}},{key:"movedEvent",value:function(e,t,i){this.showSavePopup=!0}}]),t;var i}(b.c);h.a([Object(b.b)({default:"#7956EC"})],he.prototype,"colorStart",void 0),h.a([Object(b.b)({default:"#3CECCF"})],he.prototype,"colorEnd",void 0);var fe=he=h.a([Object(b.a)({components:{GridLayout:m.GridLayout,GridItem:m.GridItem,Slice:de}})],he),pe=(r("0c9b"),Object(x.a)(fe,function(){var i=this,e=i.$createElement,a=i._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:i.loading,expression:"loading",modifiers:{fullscreen:!0}}],ref:"dashboard",staticClass:"dashboard",attrs:{"element-loading-text":"Loading..."}},[a("grid-layout",{attrs:{layout:i.slices,"col-num":i.gridColNum,"row-height":i.gridRowHeight,"is-draggable":i.gridDraggable,"is-resizable":i.gridResizable,"vertical-compact":!0,margin:i.gridMargin,"use-css-transforms":!0}},i._l(i.slices,function(t){return a("grid-item",{key:t.sliceId,ref:t.i,refInFor:!0,staticClass:"chart-item",style:i.gridItemBackground(t.chartType,i.colorStart,i.colorEnd),attrs:{x:t.x,y:t.y,w:t.w,h:t.h,i:t.i,dragIgnoreFrom:".echarts,.x-number,.card-title,.right-buttons"},on:{"update:x":function(e){i.$set(t,"x",e)},"update:y":function(e){i.$set(t,"y",e)},"update:w":function(e){i.$set(t,"w",e)},"update:h":function(e){i.$set(t,"h",e)},init:i.initEvent,resized:i.resizedEvent,moved:i.movedEvent}},[a("Slice",{attrs:{item:t,colorStart:i.colorStart,colorEnd:i.colorEnd},on:{expand:i.handleFocus}})],1)})),a("div",{directives:[{name:"show",rawName:"v-show",value:i.showModal,expression:"showModal"}],staticClass:"grip-modal"})],1)},[],!1,null,"115e6922",null));pe.options.__file="dashboard.vue";var me=pe.exports,be=[{name:"Theme1",colorStart:"#7956EC",colorEnd:"#2FB9F8"},{name:"Theme2",colorStart:"#F23673",colorEnd:"#FFC066"},{name:"Theme3",colorStart:"#009FC5",colorEnd:"#3CECB0"},{name:"Theme4",colorStart:"#5134B2",colorEnd:"#B175EB"}],ge=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).apply(this,arguments))).themes=be,e.themeIndex=0,e}return Object(d.a)(t,e),t}(b.c),ye=ge=h.a([Object(b.a)({components:{Dashboard:me}})],ge),xe=(r("9952"),Object(x.a)(ye,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper index-page"},[i("h1",[t._v("x-chart")]),i("div",{staticClass:"select-wrapper"},[i("el-select",{model:{value:t.themeIndex,callback:function(e){t.themeIndex=e},expression:"themeIndex"}},t._l(t.themes,function(e,t){return i("el-option",{key:t,attrs:{value:t,label:e.name}})}))],1),i("Dashboard",{attrs:{colorStart:t.themes[t.themeIndex].colorStart,colorEnd:t.themes[t.themeIndex].colorEnd}}),t._m(0)],1)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",[i("a",{attrs:{href:"//github.com/yugasun"}},[e._v("@yugasun")]),e._v("|\n    "),i("a",{attrs:{href:"//github.com/yugasun/x-chart/blob/master/LICENSE"}},[e._v("MIT License")]),e._v("|\n    "),i("a",{attrs:{href:"//github.com/yugasun/x-chart"}},[e._v("View on GitHub")])])}],!1,null,"2d1acfe6",null));xe.options.__file="index.vue";var ve=xe.exports;a.default.use(s.a);var Ce=[{path:"/",name:"Index",component:ve}],_e=new s.a({routes:Ce}),we=r("2f62"),Oe={state:{theme:0,pageId:0},mutations:{UPDATE_THEME:function(e,t){e.pageId=t.theme}},actions:{updateTheme:function(e,t){(0,e.commit)("UPDATE_THEME",t)}}},je={state:{logs:[]},mutations:{ADD_ERROR_LOG:function(e,t){e.logs.push(t)}},actions:{addErrorLog:function(e,t){(0,e.commit)("ADD_ERROR_LOG",t)}}},Le={colors:function(e){return be[e.app.theme]}};a.default.use(we.a);var ke=new we.a.Store({modules:{app:Oe,errorLog:je},getters:Le}),Se=r("5c96"),Ee=r("2651"),Te=r.n(Ee),Be=r("3e87");Te.a.registerTheme(Be.themeName,Be.theme);var Fe=function(){function e(){Object(c.a)(this,e)}return Object(p.a)(e,null,[{key:"install",value:function(e){e.prototype.theme=Be.themeName,e.component("echarts",Te.a),e.prototype.$message=Se.Message,e.prototype.$notify=Se.Notification,e.use(Se.Loading.directive),e.use(Se.Tooltip),e.use(Se.Select),e.use(Se.Option)}}]),e}(),Ae=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),t}(b.c),Ie=Ae=h.a([b.a],Ae),De=Object(x.a)(Ie,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},[],!1,null,null,null);De.options.__file="App.vue";var $e=De.exports;a.default.config.errorHandler=function(e,t,i){a.default.nextTick(function(){ke.dispatch("addErrorLog",{err:e,vm:t,info:i,url:window.location.href})})};var Pe=r("96eb"),Me=r.n(Pe);r("28a5");var Ne=function(){return r("7d6a")},ze=function(e){var t,i,a=(t=e.url||"",(i=t.split("?")[1])?JSON.parse('{"'.concat(decodeURIComponent(i).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"'),'"}')):{chartType:""}).chartType||"x-line";return r("1f89")("./".concat(a,".json"))};Me.a.setup({timeout:"350-600"}),Me.a.mock(/\/dashboard/,"get",Ne),Me.a.mock(/\/chart_data/,"get",ze),Me.a,a.default.config.productionTip=!1,a.default.use(n.a,{headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return Object(i.stringify)(function(t){if(!t||"object"!==Object(A.a)(t))return t;var i=Object.assign(t);return Object.keys(i).forEach(function(e){"object"===Object(A.a)(t[e])&&(i[e]=JSON.stringify(t[e]))}),i}(e))}],resHandleFunc:function(e){var t=e.data;return Object(o.a)({status:e.status||500},t)}}),a.default.use(Fe),new a.default({el:"#app",router:_e,store:ke,template:"<App/>",components:{App:$e}})},f540:function(e,t,i){},f60f:function(e,t,i){"use strict";var a=i("f540");i.n(a).a},fd5f:function(e,t,i){}});