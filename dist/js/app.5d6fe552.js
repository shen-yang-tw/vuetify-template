(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06c3":function(t,e,n){"use strict";var o=n("c2d4"),a=n.n(o);a.a},"072b":function(t,e,n){},"0875":function(t,e,n){"use strict";var o=n("e87d"),a=n.n(o);e["default"]=a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=n("6d68"),r=n("5320"),i=(n("1941"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{style:{fontSize:t.font.fontSize.toFixed(1)+"em"}},[n("v-app-bar",{attrs:{app:"",color:"#43a047",dark:"",src:"https://picsum.photos/1920/1080?random","fade-img-on-scroll":"","scroll-threshold":"500",fixed:"",dense:""},scopedSlots:t._u([{key:"img",fn:function(e){var o=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)",opacity:".5"}},"v-img",o,!1))]}},{key:"extension",fn:function(){},proxy:!0}])},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up"}),n("v-toolbar-title",[t._v("Title")]),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{text:""}},[t._v("Link One")]),n("v-btn",{attrs:{text:""}},[t._v("Link Two")]),n("v-btn",{attrs:{text:""}},[t._v("Link Three")]),n("v-btn",{attrs:{icon:"",disabled:t.font.fontSizePx>=t.font.maxFont},on:{click:t.fontPlus}},[n("v-icon",[t._v("mdi-magnify-plus-outline")])],1),n("v-btn",{attrs:{icon:""},on:{click:t.reset}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:"",disabled:t.font.fontSizePx<=t.font.minFont},on:{click:t.fontMinus}},[n("v-icon",[t._v("mdi-magnify-minus-outline")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1)],1),n("v-content",[n("v-sheet",{attrs:{"min-height":"1200"}},[n("CarouselImages",{attrs:{showArrows:t.carousel.arrows,hideDelimiters:t.carousel.hideDelimiters,cycle:t.carousel.cycle,items:t.carousel.slides,align:t.carousel.captionAlign,justify:t.carousel.captionJustify,color:t.carousel.captionBg,customClass:t.carousel.captionSheetClass}}),n("Tabs",{attrs:{tabs:t.tabs.tab,icons:t.tabs.icons,grow:t.tabs.grow,centered:t.tabs.centered,bgColor:t.tabs.bgColor,contents:t.tabs.contents}}),n("v-container",{attrs:{fluid:""}},[n("BreadCrumb",{attrs:{breadcrumb:t.breadcrumb.links,divider:t.breadcrumb.divider}}),t._v("\n        "+t._s(t.font.fontSize.toFixed(1))+"\n        "+t._s(t.font.resetFont)+"\n        "),n("router-view")],1)],1)],1),n("v-footer",{attrs:{app:""}}),n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.btnToTop.show,expression:"btnToTop.show"}],attrs:{fab:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[n("font-awesome-icon",{attrs:{icon:["fas","angle-up"],size:"lg"}})],1)],1)}),s=[],c=n("75fc"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-breadcrumbs",{attrs:{items:t.breadcrumb,divider:t.divider}})},u=[],d={name:"BreadCrumb",props:{breadcrumb:Array,divider:String}},f=d,p=n("2877"),m=n("6544"),b=n.n(m),v=n("2bc5"),h=Object(p["a"])(f,l,u,!1,null,null,null),g=h.exports;b()(h,{VBreadcrumbs:v["a"]});var y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-carousel",{attrs:{"show-arrows":t.showArrows,"hide-delimiters":t.hideDelimiters,cycle:t.cycle}},t._l(t.items,(function(e,o){return n("v-carousel-item",{key:o,attrs:{items:t.items,src:e.src,caption:e.caption}},[n("v-sheet",{attrs:{color:"transparent",height:"100%",tile:""}},[n("v-row",{staticClass:"fill-height",attrs:{align:t.align,justify:t.justify}},[n("v-sheet",{class:t.customClass,attrs:{color:t.color,tile:""}},[n("div",{staticClass:"display-3"},[t._v(t._s(e.caption)+t._s(o+1))])])],1)],1)],1)})),1)],1)},x=[],S={name:"CarouselImages",props:{showArrows:Boolean,hideDelimiters:Boolean,cycle:Boolean,items:Array,color:String,align:String,justify:String,customClass:String}},w=S,_=n("5e66"),T=n("3e35"),k=n("0fd9"),C=n("8dd9"),V=Object(p["a"])(w,y,x,!1,null,null,null),O=V.exports;b()(V,{VCarousel:_["a"],VCarouselItem:T["a"],VRow:k["a"],VSheet:C["a"]});var B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{attrs:{"v-model":t.vmodel,"background-color":t.bgColor,dark:t.dark,centered:t.centered,grow:t.grow,vertical:t.vertical,right:t.right,"prev-icon":t.prevIcon?"mdi-arrow-left-bold-box-outline":void 0,"next-icon":t.nextIcon?"mdi-arrow-right-bold-box-outline":void 0,"icons-and-text":t.icons,tabs:t.tabs,contents:t.contents}},[n("v-tabs-slider"),t._l(t.tabs,(function(e,o){return n("v-tab",{key:o,attrs:{icon:e.icon,name:e.name,href:"#tab"+o+(e.href?"-"+e.href:e.href)}},[t._v("\n    "+t._s(e.name)+"\n    "),t.icons?n("v-icon",[t._v("\n      "+t._s(e.icon)+"\n      ")]):t._e()],1)})),t._l(t.tabs,(function(e,o){return n("v-tab-item",{key:o,attrs:{value:"tab"+o+(e.href?"-"+e.href:e.href),text:e.text}},[t.contents?n("v-card",{attrs:{flat:"",tile:""}},[n("v-card-text",[t._v(t._s(e.text))])],1):t._e()],1)}))],2)},z=[],j={name:"Tabs",props:{vmodel:String,icons:Boolean,centered:Boolean,grow:Boolean,vertical:Boolean,prevIcon:Boolean,nextIcon:Boolean,right:Boolean,text:String,bgColor:String,dark:String,tabs:Array,contents:Boolean}},F=j,P=(n("6f10"),n("b0af")),I=n("99d9"),A=n("132d"),L=n("71a3"),$=n("c671"),M=n("fe57"),D=n("9a96"),q=Object(p["a"])(F,B,z,!1,null,null,null),E=q.exports;b()(q,{VCard:P["a"],VCardText:I["a"],VIcon:A["a"],VTab:L["a"],VTabItem:$["a"],VTabs:M["a"],VTabsSlider:D["a"]});var J={name:"App",components:{BreadCrumb:g,CarouselImages:O,Tabs:E},data:function(){return{breadcrumb:{links:[{disabled:!1,href:"breadcrumbs_dashboard",text:"Link1"},{disabled:!0,href:"breadcrumbs_dashboard",text:"Link2"}],divider:">"},carousel:{arrows:!0,hideDelimiters:!1,cycle:!0,slides:[{src:"https://picsum.photos/id/200/1920/600",caption:"Slide"},{src:"https://picsum.photos/id/310/1920/600",caption:"Slide"},{src:"https://picsum.photos/id/400/1920/600",caption:"Slide"}],captionAlign:"end",captionJustify:"center",captionBg:"rgba(255, 0, 0, 0.5)",captionSheetClass:"mb-12 px-4"},font:{fontSize:1,min:.5,max:5,fontSizePx:16,minFont:12,maxFont:24,resetFont:["smallFont","largeFont"],smallFont:"smallFont",largeFont:"largeFont"},appBar:{elevateOnScroll:!1,hideOnScroll:!1,fadeOnScroll:!1,fadeImgOnScroll:!1,invertedScroll:!1,collapse:!1,collapseOnScroll:!1,shrinkOnScroll:!1,extended:!1,color:"accent",colors:["primary","accent","warning lighten-2","teal","orange"]},btnToTop:{show:!1},tabs:{vmodel:"",centered:!0,bgColor:"transparent",contents:!0,grow:!0,icons:!1,tab:[{icon:"",name:"Tab1",href:"",text:"小代供家岸就要，國處際，觀變在令盡山發因了時老，簡有現表：學人發護中地手細力年。對是以影顯內在還請等家我舉空子麼天特？認有們。裡領吸天表時意不那出所條爸生也。"},{icon:"",name:"Tab2",href:"b",text:"去我走做動過性好身一文：書先寶。成利當說錯壓孩間一連他把。"},{icon:"",name:"Tab3",href:"c",text:"處生面我定舉人字以，了小便得類眼林發麼西類素那通到，自種到！論著行前經氣金上演這、山合來大市天足。"}]}}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.btnToTop.show=e>20}},toTop:function(){this.$vuetify.goTo(0)},fontPlus:function(){var t=document.querySelector("html"),e=this.font.fontSizePx+=1;e>=this.font.maxFont||(t.style.fontSize=e+"px")},fontMinus:function(){var t=document.querySelector("html"),e=this.font.fontSizePx-=1;e<=this.font.minFont||(t.style.fontSize=e+"px")},plus:function(){this.font.fontSize>=this.font.max||(this.font.fontSize+=.5)},minus:function(){this.font.fontSize<=this.font.min||(this.font.fontSize-=.5)},htmlClass:function(t,e){var n,o=document.querySelector("html");"resetFont"===t?(n=o.classList).remove.apply(n,Object(c["a"])(e)):(o.classList.add(t),o.classList.remove(e))},reset:function(){var t=document.querySelector("html");this.font.fontSizePx=16,t.style.fontSize=this.font.fontSizePx+"px"},open:function(){window.open("https://google.com","_blank")}},computed:{},created:function(){},mounted:function(){},destroyed:function(){}},N=J,R=(n("5c0b"),n("0875")),Y=(n("06c3"),n("7496")),G=n("40dc"),H=n("5bc1"),K=n("8336"),Q=n("a523"),U=n("a75b"),W=n("553a"),X=n("adda"),Z=n("2fa4"),tt=n("2a7f"),et=n("269a"),nt=n.n(et),ot=n("f977");function at(t){this["$style"]=R["default"].locals||R["default"]}var rt=Object(p["a"])(N,i,s,!1,at,"18b5d688",null),it=rt.exports;b()(rt,{VApp:Y["a"],VAppBar:G["a"],VAppBarNavIcon:H["a"],VBtn:K["a"],VContainer:Q["a"],VContent:U["a"],VFooter:W["a"],VIcon:A["a"],VImg:X["a"],VSheet:C["a"],VSpacer:Z["a"],VToolbarItems:tt["a"],VToolbarTitle:tt["b"]}),nt()(rt,{Scroll:ot["b"]});n("a481"),n("5363"),n("15f5");var st=n("f309"),ct=n("fcf4"),lt=n("ecee"),ut=n("ad3d"),dt=n("c074"),ft=n("b702"),pt=n("f2d1");o["a"].component("font-awesome-icon",ut["a"]),lt["c"].add(dt["a"],ft["a"],pt["a"]),o["a"].use(st["a"]);var mt=n("1f25"),bt=new mt({max:10,maxAge:36e5}),vt=new st["a"]({theme:{themes:{light:{primary:ct["a"].cyan,secondary:ct["a"].lime,accent:ct["a"].shades.black,anchor:ct["a"].cyan.darken3},dark:{primary:ct["a"].cyan.lighten2,secondary:ct["a"].lime.lighten2,accent:ct["a"].shades.white,anchor:ct["a"].cyan.lighten4}},options:{customProperties:!1,minifyTheme:function(t){return t.replace(/[\r\n|\r|\n]/g,"")},themeCache:bt}},icons:{iconfont:"mdi",values:{}}});n("ee44"),n("b107");o["a"].use(a["a"]),o["a"].use(r["a"]),o["a"].config.productionTip=!1,new o["a"]({vuetify:vt,render:function(t){return t(it)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("b263"),a=n.n(o);a.a},"6f10":function(t,e,n){"use strict";var o=n("072b"),a=n.n(o);a.a},b107:function(t,e,n){},b263:function(t,e,n){},c2d4:function(t,e,n){},e87d:function(t,e,n){},ee44:function(t,e,n){}});
//# sourceMappingURL=app.5d6fe552.js.map