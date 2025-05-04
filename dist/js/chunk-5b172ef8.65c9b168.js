(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b172ef8"],{"0160":function(e,t,n){e.exports=n.p+"img/avatar-s-20.32972323.jpg"},"07ac":function(e,t,n){var r=n("23e7"),i=n("6f53").values;r({target:"Object",stat:!0},{values:function(e){return i(e)}})},"0d19":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-content content",class:[{"show-overlay":e.$store.state.app.shallShowOverlay},e.$route.meta.contentClass]},[n("div",{staticClass:"content-overlay"}),n("div",{staticClass:"header-navbar-shadow"}),n("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[n("div",{staticClass:"content-wrapper clearfix",class:"boxed"===e.contentWidth?"container p-0":null},[e._t("breadcrumb",(function(){return[n("app-breadcrumb")]})),n("div",{staticClass:"content-detached content-right"},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"content-body"},[e._t("default")],2)])]),n("portal-target",{attrs:{name:"content-renderer-sidebar-detached-left",slim:""}})],2)])],1)},i=[],o=n("3033"),a=n("b8f2"),s={components:{AppBreadcrumb:o["a"]},setup:function(){var e=Object(a["a"])(),t=e.routerTransition,n=e.contentWidth;return{routerTransition:t,contentWidth:n}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,i,!1,null,null,null);t["a"]=u.exports},"0e20":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));n("b680"),n("d3b7"),n("25f0"),n("ac1f"),n("1276"),n("159b"),n("fb6a"),n("a15b9"),n("d81d"),n("5319"),n("ca6e");var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!e)return"";var n=e.toString(),r=n.split(t),i=[];return r.forEach((function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);i.push(t)})),i.join(" ")},i=function(e){if(!e)return"";var t=e.split(" ");return t.map((function(e){return e.charAt(0).toUpperCase()})).join("")}},1148:function(e,t,n){"use strict";var r=n("a691"),i=n("1d80");e.exports="".repeat||function(e){var t=String(i(this)),n="",o=r(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),o=n("825a"),a=n("1d80"),s=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("14c3"),d=n("9263"),h=n("d039"),p=[].push,f=Math.min,m=4294967295,g=!h((function(){return!RegExp(m,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),o=void 0===n?m:n>>>0;if(0===o)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,o);var s,c,l,u=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,g=new RegExp(e.source,h+"g");while(s=d.call(g,r)){if(c=g.lastIndex,c>f&&(u.push(r.slice(f,s.index)),s.length>1&&s.index<r.length&&p.apply(u,s.slice(1)),l=s[0].length,f=c,u.length>=o))break;g.lastIndex===s.index&&g.lastIndex++}return f===r.length?!l&&g.test("")||u.push(""):u.push(r.slice(f)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=a(this),o=void 0==t?void 0:t[e];return void 0!==o?o.call(t,i,n):r.call(String(i),t,n)},function(e,i){var a=n(r,e,this,i,r!==t);if(a.done)return a.value;var d=o(e),h=String(this),p=s(d,RegExp),v=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),y=new p(g?d:"^(?:"+d.source+")",b),k=void 0===i?m:i>>>0;if(0===k)return[];if(0===h.length)return null===u(y,h)?[h]:[];var A=0,w=0,I=[];while(w<h.length){y.lastIndex=g?w:0;var _,C=u(y,g?h:h.slice(w));if(null===C||(_=f(l(y.lastIndex+(g?0:w)),h.length))===A)w=c(h,w,v);else{if(I.push(h.slice(A,w)),I.length===k)return I;for(var S=1;S<=C.length-1;S++)if(I.push(C[S]),I.length===k)return I;w=A=_}}return I.push(h.slice(A)),I}]}),!g)},1568:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAMAAADfNcjQAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAJAAAAABZBsQzAAABIFBMVEUAAAD///+AgP+qqv+AgP+Aav+Ac/J5bfN7aPZ5a/JzZ/NzafB2bPBzavF0a/F2afF3avJ1aPJ3avJ1afJza/N0aPN2avN0aPN2a/R0afB2Z/B1avB3aPF1avFzafF0afF1aPJ0avJ0Z/JzavNzZ/N1afB0aPB0afFzaPF1Z/F1afJzafB0aPB1aPBzZ/F1afF0aPF0afJzaPJ0aPB0aPFzZ/F1Z/FzaPJ0Z/B0Z/B1aPF0Z/F0aPFzZ/F0aPJ0aPBzaPF0afFzaPF0aPF0Z/F0Z/B0aPF0aPF0Z/F0Z/FzaPB0aPB0Z/B0Z/B0aPF0aPF0aPBzZ/B0Z/BzaPB0Z/BzaPB0Z/B0Z/BzaPB0Z/FzaPF0Z/FzZ/FzZ/F0aPFzZ/Ap4araAAAAX3RSTlMAAQIDBgwUFRsmKjM0NTc4Ojs8PT5AQUJDREVGR0hJS0xNT1JUVVZcXV5kZmdpamtucnN7fX6Dh4iKjo+Rkpian6GkqbnBwsTGy9Dg4ePl6u7v8PHy8/T19vf4+fr8/fSe/wUAAAEXSURBVDjL5dRZU8IwFAXgQ7XuoijgirizKIJKxQVFUdEi7guI0vv//4VJB7EkvT764nnInJl8k2QykwAwizXqysMIvDEqpOZx1AsWSc9T0AMsZfL5Qw5jP6CggOqSFC/jPEC8KUWIB1iQ4nWSB4i9i/IW5gHmXBHhAWYaotaneIDpuuiNMA8QlaLgA2432ikzoCv/COy3eylD5+nkzpWodj6RvdbAag+lkBwMXNBuYGB++EzbwgWtG2Qusf7pt4UL7G0c5mHT0d6J/wroTTdzqFLMHNJWiPYLcOcQlZElmlDBwbKxJs8gqhNBcLNPBbnQ1j0drziyt0qp2cTpX1619RuwmOffSdz/A+mkYsgHoH1B36kVTeALdSRFZCBJDaYAAAAASUVORK5CYII="},"185c":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r={};n.r(r),n.d(r,"can",(function(){return a})),n.d(r,"canViewVerticalNavMenuLink",(function(){return s})),n.d(r,"canViewVerticalNavMenuGroup",(function(){return c})),n.d(r,"canViewVerticalNavMenuHeader",(function(){return l})),n.d(r,"canViewHorizontalNavMenuLink",(function(){return u})),n.d(r,"canViewHorizontalNavMenuHeaderLink",(function(){return d})),n.d(r,"canViewHorizontalNavMenuGroup",(function(){return h})),n.d(r,"canViewHorizontalNavMenuHeaderGroup",(function(){return p}));var i=n("5530"),o=n("a6f4"),a=function(e,t){var n=Object(o["getCurrentInstance"])().proxy;return!n.$can||n.$can(e,t)},s=function(e){return a(e.action,e.resource)},c=function(e){var t=e.children.some((function(e){return a(e.action,e.resource)}));return e.action&&e.resource?a(e.action,e.resource)&&t:t},l=function(e){return a(e.action,e.resource)},u=function(e){return a(e.action,e.resource)},d=function(e){return a(e.action,e.resource)},h=function(e){var t=e.children.some((function(e){return a(e.action,e.resource)}));return e.action&&e.resource?a(e.action,e.resource)&&t:t},p=function(e){var t=e.children.some((function(e){return e.children?h(e):u(e)}));return e.action&&e.resource?a(e.action,e.resource)&&t:t},f=function(){return Object(i["a"])({},r)}},"1ae3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-content content",class:[{"show-overlay":e.$store.state.app.shallShowOverlay},e.$route.meta.contentClass]},[n("div",{staticClass:"content-overlay"}),n("div",{staticClass:"header-navbar-shadow"}),n("div",{staticClass:"content-wrapper",class:"boxed"===e.contentWidth?"container p-0":null},[e._t("breadcrumb",(function(){return[n("app-breadcrumb")]})),n("div",{staticClass:"content-body"},[n("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[e._t("default")],2)],1)],2)])},i=[],o=n("3033"),a=n("b8f2"),s={components:{AppBreadcrumb:o["a"]},setup:function(){var e=Object(a["a"])(),t=e.routerTransition,n=e.contentWidth;return{routerTransition:t,contentWidth:n}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,i,!1,null,null,null);t["a"]=u.exports},2565:function(e,t,n){e.exports=n.p+"img/avatar-s-25.50ed9b46.jpg"},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),i=n("825a"),o=n("d039"),a=n("ad6d"),s="toString",c=RegExp.prototype,l=c[s],u=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=s;(u||d)&&r(RegExp.prototype,s,(function(){var e=i(this),t=String(e.source),n=e.flags,r=String(void 0===n&&e instanceof RegExp&&!("flags"in c)?a.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"26fc":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDBAMAAACYZb3pAAAAHlBMVEUpQqK2q8384OL3qa/tKTkAI5Wrt9z////5t7ztKTlzpJCAAAAABXRSTlP++vjs1BQWlgsAAAAxSURBVHgBYmRAA4yKaAJCAugqQgHtyzENAAAAAiD7pzaDr4MfRVEURVGU36IoipK5FLWNJ6UFusbWAAAAAElFTkSuQmCC"},"270f":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("4de4"),n("2ca0"),n("fb6a"),n("99af"),n("b64b"),n("159b");var r=n("a6f4");function i(e){var t=Object(r["ref"])({}),n=function(t,n){var r=t.data.filter((function(e){return e[t.key].toLowerCase().startsWith(n.toLowerCase())})),i=t.data.filter((function(e){return!e[t.key].toLowerCase().startsWith(n.toLowerCase())&&e[t.key].toLowerCase().indexOf(n.toLowerCase())>-1}));return r.concat(i).slice(0,e.searchLimit)},i=Object(r["ref"])(""),o=function(){i.value=""},a=function(r){if(""===r)t.value={};else{var i={},o=Object.keys(e.data);o.forEach((function(t,a){i[o[a]]=n(e.data[t],r)})),t.value=i}};return Object(r["watch"])(i,(function(e){return a(e)})),{searchQuery:i,resetsearchQuery:o,filteredData:t}}},"2c28":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-menu menu-fixed menu-accordion menu-shadow",class:[{expanded:!e.isVerticalMenuCollapsed||e.isVerticalMenuCollapsed&&e.isMouseHovered},"semi-dark"===e.skin?"menu-dark":"menu-light"],attrs:{width:"auto"},on:{mouseenter:function(t){return e.updateMouseHovered(!0)},mouseleave:function(t){return e.updateMouseHovered(!1)}}},[n("div",{staticClass:"navbar-header expanded"},[e._t("header",(function(){return[n("ul",{staticClass:"nav navbar-nav flex-row justify-content-center"},[n("li",{staticClass:"nav-item mr-auto"},[n("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("span",{staticClass:"brand-logo"},[n("b-img",{attrs:{src:e.appLogoImage,alt:"logo"}})],1),n("h2",{staticClass:"brand-text mb-0"},[e._v(" "+e._s(e.appName)+" ")])])],1),n("li",{staticClass:"nav-item nav-toggle"},[n("b-link",{staticClass:"nav-link modern-nav-toggle"},[n("feather-icon",{staticClass:"d-block d-xl-none",attrs:{icon:"XIcon",size:"20"},on:{click:e.toggleVerticalMenuActive}}),n("feather-icon",{staticClass:"d-none d-xl-block collapse-toggle-icon",attrs:{icon:e.collapseTogglerIconFeather,size:"20"},on:{click:e.toggleCollapsed}})],1)],1)])]}),{toggleVerticalMenuActive:e.toggleVerticalMenuActive,toggleCollapsed:e.toggleCollapsed,collapseTogglerIcon:e.collapseTogglerIcon})],2),n("div",{staticClass:"shadow-bottom",class:{"d-block":e.shallShadowBottom}}),n("vue-perfect-scrollbar",{staticClass:"main-menu-content scroll-area",attrs:{settings:e.perfectScrollbarSettings,tagname:"ul"},on:{"ps-scroll-y":function(t){e.shallShadowBottom=t.srcElement.scrollTop>0}}},[n("vertical-nav-menu-items",{ref:"vertical-menu",staticClass:"navigation navigation-main",attrs:{items:e.navMenuItems}})],1)],1)},i=[],o=n("9d63"),a=n.n(o),s=n("aa59"),c=n("4918"),l=n("a6f4"),u=n("b8f2"),d=n("1dff"),h=n("2909"),p=[{title:" Employees",route:"employees",icon:"UsersIcon",action:"browes"},{title:"Devices",route:"devices",icon:"UsersIcon",action:"browes"}],f=Object(h["a"])(p),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.items,(function(t){return n(e.resolveNavItemComponent(t),{key:t.header||t.title,tag:"component",attrs:{item:t}})})),1)},g=[],v=n("5959"),b=n("42cb"),y=n("185c"),k=Object(b["a"])(),A=k.t,w=Object(y["a"])(),I=w.canViewVerticalNavMenuHeader,_={props:{item:{type:Object,required:!0}},render:function(e){var t=e("span",{},A(this.item.header)),n=e("feather-icon",{props:{icon:"MoreHorizontalIcon",size:"18"}});return I(this.item)?e("li",{class:"navigation-header text-truncate"},[t,n]):e()}},C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewVerticalNavMenuLink(e.item)?n("li",{staticClass:"nav-item",class:{active:e.isActive,disabled:e.item.disabled}},[n("b-link",e._b({staticClass:"d-flex align-items-center"},"b-link",e.linkProps,!1),[n("font-awesome-icon",{staticClass:"text-primary",attrs:{icon:e.item.icon||"fa-regular fa-circle"}}),e._v(" "),n("span",{staticClass:"menu-title text-truncate"},[e._v(e._s(e.t(e.item.title)))]),e.item.tag?n("b-badge",{staticClass:"mr-1 ml-auto",attrs:{pill:"",variant:e.item.tagVariant||"primary"}},[e._v(" "+e._s(e.item.tag)+" ")]):e._e()],1)],1):e._e()},S=[],T=n("e98b");function E(e){var t=Object(l["ref"])(!1),n=Object(v["c"])(e),r=function(){t.value=Object(v["b"])(e)};return{isActive:t,linkProps:n,updateIsActive:r}}var O={watch:{$route:{immediate:!0,handler:function(){this.updateIsActive()}}}},R={components:{BLink:s["a"],BBadge:T["a"]},mixins:[O],props:{item:{type:Object,required:!0}},setup:function(e){var t=E(e.item),n=t.isActive,r=t.linkProps,i=t.updateIsActive,o=Object(b["a"])(),a=o.t,s=Object(y["a"])(),c=s.canViewVerticalNavMenuLink;return{isActive:n,linkProps:r,updateIsActive:i,canViewVerticalNavMenuLink:c,t:a}}},x=R,N=(n("75ec"),n("2877")),B=Object(N["a"])(x,C,S,!1,null,null,null),M=B.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.canViewVerticalNavMenuGroup(e.item)?n("li",{staticClass:"nav-item has-sub",class:{open:e.isOpen,disabled:e.item.disabled,"sidebar-group-active":e.isActive}},[n("b-link",{staticClass:"d-flex align-items-center",on:{click:function(){return e.updateGroupOpen(!e.isOpen)}}},[n("font-awesome-icon",{staticClass:"text-primary",attrs:{icon:e.item.icon||"fa-regular fa-circle"}}),n("span",{staticClass:"menu-title text-truncate"},[e._v(e._s(e.t(e.item.title)))]),e.item.tag?n("b-badge",{staticClass:"mr-1 ml-auto",attrs:{pill:"",variant:e.item.tagVariant||"primary"}},[e._v(" "+e._s(e.item.tag)+" ")]):e._e()],1),n("b-collapse",{staticClass:"menu-content",attrs:{tag:"ul"},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},e._l(e.item.children,(function(t){return n(e.resolveNavItemComponent(t),{key:t.header||t.title,ref:"groupChild",refInFor:!0,tag:"component",attrs:{item:t}})})),1)],1):e._e()},P=[],V=n("5843"),j=n("4360");function D(e){var t=Object(l["computed"])((function(){return j["a"].state.verticalMenu.isVerticalMenuCollapsed}));Object(l["watch"])(t,(function(e){n.value||(e?i.value=!1:!e&&a.value&&(i.value=!0))}));var n=Object(l["inject"])("isMouseHovered");Object(l["watch"])(n,(function(e){t.value&&(i.value=e&&a.value)}));var r=Object(l["inject"])("openGroups");Object(l["watch"])(r,(function(t){var n=t[t.length-1];n===e.title||a.value||c(n)||(i.value=!1)}));var i=Object(l["ref"])(!1);Object(l["watch"])(i,(function(t){t&&r.value.push(e.title)}));var o=function(e){i.value=e},a=Object(l["ref"])(!1);Object(l["watch"])(a,(function(e){e&&t.value||(i.value=e)}));var s=function(){a.value=Object(v["a"])(e.children)},c=function(t){return e.children.some((function(e){return e.title===t}))};return{isOpen:i,isActive:a,updateGroupOpen:o,openGroups:r,isMouseHovered:n,updateIsActive:s}}var U={watch:{$route:{immediate:!0,handler:function(){this.updateIsActive()}}}},F={name:"VerticalNavMenuGroup",components:{VerticalNavMenuHeader:_,VerticalNavMenuLink:M,BLink:s["a"],BBadge:T["a"],BCollapse:V["a"]},mixins:[U],props:{item:{type:Object,required:!0}},setup:function(e){var t=D(e.item),n=t.isOpen,r=t.isActive,i=t.updateGroupOpen,o=t.updateIsActive,a=Object(b["a"])(),s=a.t,c=Object(y["a"])(),l=c.canViewVerticalNavMenuGroup;return{resolveNavItemComponent:v["e"],isOpen:n,isActive:r,updateGroupOpen:i,updateIsActive:o,canViewVerticalNavMenuGroup:l,t:s}}},W=F,H=(n("70ba"),Object(N["a"])(W,L,P,!1,null,null,null)),z=H.exports,X={components:{VerticalNavMenuHeader:_,VerticalNavMenuLink:M,VerticalNavMenuGroup:z},props:{items:{type:Array,required:!0}},setup:function(){return Object(l["provide"])("openGroups",Object(l["ref"])([])),{resolveNavItemComponent:v["e"]}}},G=X,Y=Object(N["a"])(G,m,g,!1,null,null,null),Q=Y.exports;function K(e){var t=Object(l["computed"])({get:function(){return j["a"].state.verticalMenu.isVerticalMenuCollapsed},set:function(e){j["a"].commit("verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED",e)}}),n=Object(l["computed"])((function(){return e.isVerticalMenuActive?t.value?"unpinned":"pinned":"close"})),r=Object(l["ref"])(!1),i=function(e){r.value=e},o=function(){t.value=!t.value};return{isMouseHovered:r,isVerticalMenuCollapsed:t,collapseTogglerIcon:n,toggleCollapsed:o,updateMouseHovered:i}}var q={components:{VuePerfectScrollbar:a.a,VerticalNavMenuItems:Q,BLink:s["a"],BImg:c["a"]},props:{isVerticalMenuActive:{type:Boolean,required:!0},toggleVerticalMenuActive:{type:Function,required:!0}},setup:function(e){var t=K(e),n=t.isMouseHovered,r=t.isVerticalMenuCollapsed,i=t.collapseTogglerIcon,o=t.toggleCollapsed,a=t.updateMouseHovered,s=Object(u["a"])(),c=s.skin,h=Object(l["ref"])(!1);Object(l["provide"])("isMouseHovered",n);var p={maxScrollbarLength:60,wheelPropagation:!1},m=Object(l["computed"])((function(){return"unpinned"===i.value?"CircleIcon":"DiscIcon"})),g=d["c"].app,v=g.appName,b=g.appLogoImage;return{navMenuItems:f,perfectScrollbarSettings:p,isVerticalMenuCollapsed:r,collapseTogglerIcon:i,toggleCollapsed:o,isMouseHovered:n,updateMouseHovered:a,collapseTogglerIconFeather:m,shallShadowBottom:h,skin:c,appName:v,appLogoImage:b}}},J=q,Z=(n("bc96"),Object(N["a"])(J,r,i,!1,null,null,null));t["a"]=Z.exports},"2c69":function(e,t,n){},"2ca0":function(e,t,n){"use strict";var r=n("23e7"),i=n("06cf").f,o=n("50c4"),a=n("5a34"),s=n("1d80"),c=n("ab13"),l=n("c430"),u="".startsWith,d=Math.min,h=c("startsWith"),p=!l&&!h&&!!function(){var e=i(String.prototype,"startsWith");return e&&!e.writable}();r({target:"String",proto:!0,forced:!p&&!h},{startsWith:function(e){var t=String(s(this));a(e);var n=o(d(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return u?u.call(t,r,n):t.slice(n,n+r.length)===r}})},"2ca06":function(e,t,n){},3033:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.$route.meta.breadcrumb||e.$route.meta.pageTitle?n("b-row",{staticClass:"content-header"},[n("b-col",{staticClass:"content-header-left mb-2",attrs:{cols:"12",md:"9"}},[n("b-row",{staticClass:"breadcrumbs-top"},[n("b-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"content-header-title float-left pr-1 mb-0"},[e._v(" "+e._s(e.$route.meta.pageTitle)+" ")]),n("div",{staticClass:"breadcrumb-wrapper"},[n("b-breadcrumb",[n("b-breadcrumb-item",{attrs:{to:"/"}},[n("feather-icon",{staticClass:"align-text-top",attrs:{icon:"HomeIcon",size:"16"}})],1),e._l(e.$route.meta.breadcrumb,(function(t){return n("b-breadcrumb-item",{key:t.text,attrs:{active:t.active,to:t.to}},[e._v(" "+e._s(t.text)+" ")])}))],2)],1)])],1)],1)],1):e._e()},i=[],o=n("e235"),a=n("a148"),s=n("a15b"),c=n("b28b"),l=n("e009"),u={directives:{Ripple:l["a"]},components:{BBreadcrumb:o["a"],BBreadcrumbItem:a["a"],BRow:s["a"],BCol:c["a"]}},d=u,h=n("2877"),p=Object(h["a"])(d,r,i,!1,null,null,null);t["a"]=p.exports},"32b8":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a6f4"),i=n("4360");function o(e,t){var n=Object(r["ref"])(!0),o=function(){n.value=!n.value},a=Object(r["ref"])("xl"),s=Object(r["computed"])((function(){return i["a"].state.verticalMenu.isVerticalMenuCollapsed})),c=Object(r["computed"])((function(){var r=[];return"xl"===a.value?(r.push("vertical-menu-modern"),r.push(s.value?"menu-collapsed":"menu-expanded")):(r.push("vertical-overlay-menu"),r.push(n.value?"menu-open":"menu-hide")),r.push("navbar-".concat(e.value)),"sticky"===t.value&&r.push("footer-fixed"),"static"===t.value&&r.push("footer-static"),"hidden"===t.value&&r.push("footer-hidden"),r}));Object(r["watch"])(a,(function(e){n.value="xl"===e}));var l=function(){window.innerWidth>=1200?a.value="xl":window.innerWidth>=992?a.value="lg":window.innerWidth>=768?a.value="md":window.innerWidth>=576?a.value="sm":a.value="xs"},u=Object(r["computed"])((function(){return"xl"!==a.value&&n.value?"show":null})),d=Object(r["computed"])((function(){return"sticky"===e.value?"fixed-top":"static"===e.value?"navbar-static-top":"hidden"===e.value?"d-none":"floating-nav"})),h=Object(r["computed"])((function(){return"static"===t.value?"footer-static":"hidden"===t.value?"d-none":""}));return{isVerticalMenuActive:n,toggleVerticalMenuActive:o,isVerticalMenuCollapsed:s,layoutClasses:c,overlayClasses:u,navbarTypeClass:d,footerTypeClass:h,resizeHandler:l}}},3423:function(e,t,n){e.exports=n.p+"img/avatar-s-2.da5e73c7.jpg"},"351c":function(e,t,n){e.exports=n.p+"img/avatar-s-10.64aa61a3.jpg"},3835:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done);a=!0)if(o.push(r.value),t&&o.length===t)break}catch(c){s=!0,i=c}finally{try{a||null==n["return"]||n["return"]()}finally{if(s)throw i}}return o}}var o=n("06c5");function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){return r(e)||i(e,t)||Object(o["a"])(e,t)||a()}},"408a":function(e,t,n){var r=n("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"42cb":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r={};n.r(r),n.d(r,"t",(function(){return a})),n.d(r,"_",(function(){return s}));var i=n("5530"),o=n("a6f4"),a=function(e){var t=Object(o["getCurrentInstance"])().proxy;return t.$t?t.$t(e):e},s=null,c=function(){return Object(i["a"])({},r)}},"493f":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAMAAAAw96PuAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIaADAAQAAAABAAAAJAAAAADeoA9wAAABdFBMVEUAAAD/////gID/VVX/gID/Zmb/bW3/YGD/VVX/Zmb/XV3/VVXwWlrxVVXyXl7yWVnzVVXzXV30WVn0VVXrXFzuVVXvWFjwV1fxVVXqWlrrV1frVVXsWVnuV1fvV1fqWFjrV1frWFjsV1fsVVXtVVXtWFjqVlbrVVXrWFjrVlbsWFjsVlbtVVXrV1ftVVXqVFfqVlbrVFfsVlbsVVXsVFftVFfqVlbqVVXrVVXsVVXsVFfsVlbsVFfqVlbqVVXrVFfsVFbsVVXsVFbqVVXqVFbrVlbrVFbrVFbsVVXqVlbqVFbrVVXrVFbrVVXrVFbrVlbrVlbrVVXqVFbqVlbrVlbrVFbrVFXrVVbqVVXrVFXrVFXrVVXrVFXqVFXrVFXrVFXqVVXqVVbqVFXqVVXqVVbrVVXrVVbrVFXrVVXqVVXqVFXqVVbrVVbrVVbrVFXqVVbrVVbrVVXrVVbrVFXqVVbqVFXqVVbqVFXrVVXrVFXrVFXqVFVr4Xo3AAAAe3RSTlMAAQIDBAUHCAkKCwwREhMUFRYXGBkeICMkJSYnKCwvMTI0NTY5Oj4/QEFDREVMVFVWWFxdXmFiY2Zpamttbm9wdnh5e3x9f4KEhoiKi42Oj5ucoKGkqbCyt7y/wMLFyM7P0NHS09XW19jb3d/i5ebr7vDx8vT19/j5+/7Qd/Y4AAABPUlEQVQ4y2NgYGAwTqisRgFODKjAthoDOKMoYC7GVFHtiqxCBl02H0S4IamQR1ehng4i3fGokBJOA1EeeFQwCKWCaE88KhgEU0AMLzwqGASSQSwfPCoY+JNATF+wCgWsKhj4EkBsb9xmMDDwxgPZWVjNcLWAAMcKqAr5ajxgBKoAhVixnYm5GygmSrwN7eOAdKm/kUEQsopcBilDUQa/6mJpLgNxltDqPFFmLS13VBV21WVKTLkuDOHVRcIiVQZM0Wi2gFRU+zGEqXEAOaYM2QJK1dhUeDFEKnMDOeYM2Wyq2FSUy7EXWDLEVFeICVWrsCZiqFCwkmAKqM7h4bNRZAypjmXn1DcLRFZRoKup55ABZORYaxhFAelMW22dIPqGugw+FSk4SwcYCMZVwsBAqSQkZ2CUUlBQGCELlAUAu2ahYvZLVcAAAAAASUVORK5CYII="},"4fad":function(e,t,n){var r=n("23e7"),i=n("6f53").entries;r({target:"Object",stat:!0},{entries:function(e){return i(e)}})},5319:function(e,t,n){"use strict";var r=n("d784"),i=n("825a"),o=n("7b0b"),a=n("50c4"),s=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("14c3"),d=Math.max,h=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,y=v?"$":"$0";return[function(n,r){var i=c(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,i,r):t.call(String(i),n,r)},function(e,r){if(!v&&b||"string"===typeof r&&-1===r.indexOf(y)){var o=n(t,e,this,r);if(o.done)return o.value}var c=i(e),p=String(this),f="function"===typeof r;f||(r=String(r));var m=c.global;if(m){var A=c.unicode;c.lastIndex=0}var w=[];while(1){var I=u(c,p);if(null===I)break;if(w.push(I),!m)break;var _=String(I[0]);""===_&&(c.lastIndex=l(p,a(c.lastIndex),A))}for(var C="",S=0,T=0;T<w.length;T++){I=w[T];for(var E=String(I[0]),O=d(h(s(I.index),p.length),0),R=[],x=1;x<I.length;x++)R.push(g(I[x]));var N=I.groups;if(f){var B=[E].concat(R,O,p);void 0!==N&&B.push(N);var M=String(r.apply(void 0,B))}else M=k(E,p,O,R,N,r);O>=S&&(C+=p.slice(S,O)+M,S=O+E.length)}return C+p.slice(S)}];function k(e,n,r,i,a,s){var c=r+e.length,l=i.length,u=m;return void 0!==a&&(a=o(a),u=f),t.call(s,u,(function(t,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":s=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>l){var d=p(u/10);return 0===d?t:d<=l?void 0===i[d-1]?o.charAt(1):i[d-1]+o.charAt(1):t}s=i[u-1]}return void 0===s?"":s}))}}))},5959:function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return d}));n("b0c0");var r=n("ca6e"),i=n("a6f4"),o=n("a18c"),a=function(e){return e.header?"vertical-nav-menu-header":e.children?"vertical-nav-menu-group":"vertical-nav-menu-link"},s=function(e){return e.children?"horizontal-nav-menu-group":"horizontal-nav-menu-link"},c=function(e){if(Object(r["a"])(e.route)){var t=o["a"].resolve(e.route),n=t.route;return n.name}return e.route},l=function(e){var t=o["a"].currentRoute.matched,n=c(e);return!!n&&t.some((function(e){return e.name===n||e.meta.navActiveLink===n}))},u=function e(t){var n=o["a"].currentRoute.matched;return t.some((function(t){return t.children?e(t.children):l(t,n)}))},d=function(e){return Object(i["computed"])((function(){var t={};return e.route?t.to="string"===typeof e.route?{name:e.route}:e.route:(t.href=e.href,t.target="_blank",t.rel="nofollow"),t.target||(t.target=e.target||null),t}))}},"5c02":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav-item-dropdown",{staticClass:"dropdown-notification mr-25",attrs:{"menu-class":"dropdown-menu-media",right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("feather-icon",{staticClass:"text-body",attrs:{badge:"6","badge-classes":"bg-danger",icon:"BellIcon",size:"21"}})]},proxy:!0}])},[n("li",{staticClass:"dropdown-menu-header"},[n("div",{staticClass:"dropdown-header d-flex"},[n("h4",{staticClass:"notification-title mb-0 mr-auto"},[e._v(" Notifications ")]),n("b-badge",{attrs:{pill:"",variant:"light-primary"}},[e._v(" 6 New ")])],1)]),e._m(0),n("li",{staticClass:"dropdown-menu-footer"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary",block:""}},[e._v("Read all notifications")])],1)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-perfect-scrollbar",{staticClass:"scrollable-container media-list scroll-area",attrs:{settings:e.perfectScrollbarSettings,tagname:"li"}},[e._l(e.notifications,(function(t){return n("b-link",{key:t.subtitle},[n("b-media",{scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-avatar",{attrs:{size:"32",src:t.avatar,text:t.avatar,variant:t.type}})]},proxy:!0}],null,!0)},[n("p",{staticClass:"media-heading"},[n("span",{staticClass:"font-weight-bolder"},[e._v(" "+e._s(t.title)+" ")])]),n("small",{staticClass:"notification-text"},[e._v(e._s(t.subtitle))])])],1)})),n("div",{staticClass:"media d-flex align-items-center"},[n("h6",{staticClass:"font-weight-bolder mr-auto mb-0"},[e._v(" System Notifications ")]),n("b-form-checkbox",{attrs:{checked:!0,switch:""}})],1),e._l(e.systemNotifications,(function(t){return n("b-link",{key:t.subtitle},[n("b-media",{scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-avatar",{attrs:{size:"32",variant:t.type}},[n("feather-icon",{attrs:{icon:t.icon}})],1)]},proxy:!0}],null,!0)},[n("p",{staticClass:"media-heading"},[n("span",{staticClass:"font-weight-bolder"},[e._v(" "+e._s(t.title)+" ")])]),n("small",{staticClass:"notification-text"},[e._v(e._s(t.subtitle))])])],1)}))],2)}],o=n("ede5"),a=n("e98b"),s=n("34b6"),c=n("aa59"),l=n("e8a3"),u=n("1947"),d=n("c3e6"),h=n("9d63"),p=n.n(h),f=n("e009"),m={components:{BNavItemDropdown:o["a"],BBadge:a["a"],BMedia:s["a"],BLink:c["a"],BAvatar:l["a"],VuePerfectScrollbar:p.a,BButton:u["a"],BFormCheckbox:d["a"]},directives:{Ripple:f["a"]},setup:function(){var e=[{title:"Congratulation Sam 🎉",avatar:n("73bb"),subtitle:"Won the monthly best seller badge",type:"light-success"},{title:"New message received",avatar:n("f8f8"),subtitle:"You have 10 unread messages",type:"light-info"},{title:"Revised Order 👋",avatar:"MD",subtitle:"MD Inc. order updated",type:"light-danger"}],t=[{title:"Server down",subtitle:"USA Server is down due to hight CPU usage",type:"light-danger",icon:"XIcon"},{title:"Sales report generated",subtitle:"Last month sales report generated",type:"light-success",icon:"CheckIcon"},{title:"High memory usage",subtitle:"BLR Server using high memory",type:"light-warning",icon:"AlertTriangleIcon"}],r={maxScrollbarLength:60,wheelPropagation:!1};return{notifications:e,systemNotifications:t,perfectScrollbarSettings:r}}},g=m,v=n("2877"),b=Object(v["a"])(g,r,i,!1,null,null,null);t["a"]=b.exports},"5e3c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABDCAYAAABqS6DaAAAJfklEQVR4Ae3cA5QcaQLA8V/3tMYIxpnwYt2tbm3bNs5en23bXNu2vfGFG00ys8n0ONPT3VVn5mzU/73vqerxV8YXm3ScIf/BLb3Scv9HxZwr9B9c+HX/V8X9c4qKQCKQqAgkAomKQCKQqAgkKgKJQKIikAgkKgKJQKIikAJytGBxM1kMIoxA/nWVFzlvNl89kCuP5drjuPJ0ui5n2XUsv4J5X2TZGXSWEkQg/5y2HckPj+DhN3PpIRz0Kqa1kExQkiARI1ZKeiY1B5N+L10PsehbrJ9BGIH8Y2or46v784PT2WMWW4a57jEuuIrtPs2h36Ojn/QaGg+g+pUU30rXzRSGGXEAQ1cx7/NkR/ufKcG/vn3beN8BTBrDC0u58yE+8ziFEkACAWLEUIOKHK7/xeiOs/HNBEfTehIbZjD0bhofiUD+6t68HeftQibFZfdw8T0MBIA8QkCOnh4291KHIiCORMCYz9D1bVZ+iNEHMvAFNn6Jhm9GIH9xJ0/ntbswOET2nvfba/UG94zqMqI4ShwQA8CWZ/uFxVBwQYVugBAIA7qSnUYuH6Xnjible71T95vIv0zrjRHIn+2VVZwxm2yWTb1Mf3GFztz35NvoWcCrbgYAOqaw7gCCkJF3Ur8YgBDPHEF+Ghs207DidVaNorKVnrdiGa2LIpA/2g6VfOYokkkGt9A3QFEo20oyTXHS1ntHTwODdUBvEw2/ARGgfzxhGfk2Rg1QU6S8nKCKl75A7gImPosIZOs+dRQ77EChwMAAtWuJhYGqVgr1VC6hiDgAysooG4UYpWUEAAhQ20TfRMraic8P5D/Lqm2I7U/tKFa8nYknRiBbtXsdQZFVqxg1iupqEgm6k3ET3oeQkoCus8+WmDMHQDzs1TjcSxiK71Ole59KwhAUnn5ay8d/KIgDuZNKZD5HWyWbN1BexkAd6yto7gcAEcgRsxk5knXr6OxEjLpayoKY+nagiN7ddlN78skA+gbzVi3dDGZMqFNTmQLQ9dWvqvnhD8UBq0Nyd1C+iXG3selSJu3DwHn4FADRjWGRhjrKysiHbL8906bSlSUI/MnmL+9y2nsecPp7H/DE/A5/qvgQ09/DxC/QvILKaygUGJxFAYAIpCrGtBbWbOQ9d3DjA6TTTJ9GPBb6U2VSJdKpuPLSpLJMwp8qhhgAqm5ncAPpGWQzACKQg6ZSXcmaLh7p5OIbufEennueMGRLhsV7UbB1cyeP/PmY0FJppzkNfr8CFu7HcJximoUXsPJAOstIhwTLSdfQvyeA6Bwyto7eXjIBXz2I8fWMGUEuRy4IPPh6UqNZO45twhAAxGL86IN7YuuCIPDAeWTGs3YakwRSJ5DPsHkNQ8sYyBD0/2IdQLSHzBlFGDJnCqNreXYV33yIi64nF4RKR5ArUllHGIbO/+yTxh5ymVPefb/nlmyyw+k3/Hw88Gy7cz/0kDEH/8gbP/4oKKulr0DpSGI5ku8g9y22LCE1hsa5lJSQ3ZYw2kMQMrKcXI5FL3H+zazJIYUin1BUVqBiPPEsIVZt6AWLV2UNDRf9eHX3z88lueHA0jU9SuJxy9b2CKaEKpBpI1yGMDT2XtL30ouOZto/QflkBkYQgwiEte20bMP4kOvewLL1rO2ivYuyF5ImvhsIseUHcfvt0OrGB1Y789ApZk2sM6a+wnAhsM20kQ7aaYyLvvikt500S7J7rSkfJQboeHOJpa9HC7Fm0mNJp0ml2PIyAeL/9yBxlg6ze5qVHXRsobWOfWcTD0gtTkgDihgaGnLOyVPstV2T8c1V4KFvHqpQDIyozjj/1NmO2mvcz5d1fflBacQAymMSJ5AMKWxgaCn5Giq3YdLzxKM9BFidpaSEviJvugNFmsrZYzyXlCfUI4ESFObNg19jrGrv86kfzAOvO2aaaeNrf70sWLpUDJBHrjJu8DKarqN8GWUBS75DEJBYFZ3UAdy2hJ4+pjQSD5CiPc+PfszzFSUKAEg+9phCoQCg/eUBdz6x9ucn9DUb+wEMDw9L33kngDxSM+Nqj2ToAGoD+ktITmWom8p7IxAA2SKL1tJaz+FTABBwbWKtQk2NYoz2ZvoTz+r54hcBjGmoEAQMDBWMbaoE0PeVr+ipXqK9gQD51lbJuUtN2obKC5n3KTYdQ0UjuQXUDkYgAJSwqJNUioOmMKmC87fnSwdw5vb36TnhMN0NZM9n01Gsf+JiHVdcIQxDrfUVvnDBjj7x5u1NGVsjCAIvX3aZtU9doPNwus+nr5beEw7X1XE/qG+g5XR6ziIep3whiei3aACgroSbTycVJ1lKXRUv97KmEz1HmfGln8Lsm9VfRn05I99NfPdTlLzudZIzZgiDQH7ePMFP94zco5fpeS8be6keoOqBRvmP76okc6WhfqbPJR6no4OXljL5AGoGIpCtuulwtpnDilXcvpAfPs+aAaT4Vtub7fril4UH55V9i+aHgTyKJSXCMJQMAgnA6t3Jn07x2oz88W/WdsjHlJayZg19ffzUUEkJD93GdgeRid6HbN0bbuFHVUyaSAw7voINvazL8mD319S/8g3mfvy7mhZlASSRLBb9fm0P0JkdreeIc4UPfMqLiDeRqaK7m4ULGT2apuP+KEb0XdaaAu+6m02baWtjqI85rZy8I+85eMi4wz9rw8cO0374oYbjccU/9nVpPK79mKNkP34kx35Y5SVbtO7E6GZ6NjN5MoMDLP0uE/ujqTX+bGfO5ML9SWb44i1sHmZCHRVJ6iupLWtSt/lgDU/FpRaskdm8WYjcyJHyM9tkX1VUSN0iPrCeXuIDlLfTW03L6WS7KX6QCVeRFoH8RZ3/as7akcoqrn+CS26nF4LfjDSaS2t87sh6NdlQ7SUdRmzsUTZIKqAECXRV0v5x6o+gt5Pyr9L4ZX9NEQgcMp5L9+MVbSxawQ0v8vknGI4DYJgbT6NtAxNOpAIQoq+EdRfiYBom07mQqvfQdH/0be/f1M0rOeUyrn+EhhG842AeeT1f2Y8jJ5DKYRghAbqwsZylJ/Pi11j/MCPfTKaWtVdRf/I/BiOanilk10ZetxPTW6iuBHr6WbmO+hrkSRSoaqS0lDBkYBP5F6n7Mk1PEwMRyD+ugLo4p27DrEaqS0kUGV1NUCDRRTqPTZTOo/r7jOgjARCB/JMroMiMWq7+xWek0sgg7l9fBBLNKBcVgURFIBFIVAQSgURFIBFIVAQSgURFIFERSAQS9V8NEpWY1CPnP7vl/o/6CaDUlct44FEiAAAAAElFTkSuQmCC"},"600d":function(e,t,n){},"62cb":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"clearfix mb-0"},[n("span",{staticClass:"float-md-left d-block d-md-inline-block mt-25"},[e._v(" COPYRIGHT © "+e._s((new Date).getFullYear())+" "),n("b-link",{staticClass:"ml-25",attrs:{target:"_blank"}},[e._v("Rojetah")]),n("span",{staticClass:"d-none d-sm-inline-block"},[e._v(", All rights Reserved")])],1),n("span",{staticClass:"float-md-right d-none d-md-block"},[e._v("Hand-crafted & Made By Technocloud "),n("feather-icon",{staticClass:"text-danger stroke-current",attrs:{icon:"HeartIcon",size:"21"}})],1)])},i=[],o=n("aa59"),a={components:{BLink:o["a"]}},s=a,c=n("2877"),l=Object(c["a"])(s,r,i,!1,null,null,null);t["a"]=l.exports},"63bb":function(e,t,n){e.exports=n.p+"img/avatar-s-24.61de186b.jpg"},6957:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar-nav",{staticClass:"nav"},[e._l(e.bookmarks,(function(e,t){return n("b-nav-item",{key:t,attrs:{id:"bookmark-"+t,to:e.route}},[n("feather-icon",{attrs:{icon:e.icon,size:"21"}}),n("b-tooltip",{attrs:{triggers:"hover",target:"bookmark-"+t,title:e.title,delay:{show:1e3,hide:50}}})],1)})),n("b-nav-item-dropdown",{attrs:{"link-classes":"bookmark-star",lazy:""},on:{hidden:e.resetsearchQuery}},[n("feather-icon",{staticClass:"text-warning",attrs:{slot:"button-content",icon:"StarIcon",size:"21"},slot:"button-content"}),n("li",{staticStyle:{"min-width":"300px"}},[n("div",{staticClass:"p-1"},[n("b-form-input",{attrs:{id:"boomark-search-input",placeholder:"Explore Vuexy...",autofocus:""},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1),n("vue-perfect-scrollbar",{staticClass:"search-list search-list-bookmark scroll-area",class:{show:e.filteredData.pages&&e.filteredData.pages.length},attrs:{settings:e.perfectScrollbarSettings,tagname:"ul"}},[e._l(e.filteredData.pages||e.bookmarks,(function(t,r){return n("b-dropdown-item",{key:r,staticClass:"suggestion-group-suggestion cursor-pointer",attrs:{"link-class":"d-flex align-items-center",to:t.route},on:{mouseenter:function(t){e.currentSelected=r}}},[n("feather-icon",{staticClass:"mr-75",attrs:{icon:t.icon,size:"18"}}),n("span",{staticClass:"align-middle"},[e._v(e._s(t.title))]),n("feather-icon",{staticClass:"ml-auto",class:{"text-warning":t.isBookmarked},attrs:{icon:"StarIcon",size:"16"},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),e.toggleBookmarked(t)}}})],1)})),n("b-dropdown-item",{directives:[{name:"show",rawName:"v-show",value:!(e.filteredData.pages&&e.filteredData.pages.length)&&e.searchQuery,expression:"!(filteredData.pages && filteredData.pages.length) && searchQuery"}],attrs:{disabled:""}},[e._v(" No Results Found. ")])],2)],1)],1)],2)},i=[],o=(n("4de4"),n("c740"),n("a434"),n("042b")),a=n("4711"),s=n("b4ae"),c=n("ede5"),l=n("4797"),u=n("9eaa"),d=n("9d63"),h=n.n(d),p=n("270f"),f=n("a6f4"),m=n("a18c"),g=n("4360"),v=n("cee9"),b={components:{BNavbarNav:o["a"],BNavItem:a["a"],BTooltip:s["a"],BNavItemDropdown:c["a"],BFormInput:l["a"],VuePerfectScrollbar:h.a,BDropdownItem:u["a"]},setup:function(){var e=Object(f["ref"])(v["a"].pages),t=Object(f["ref"])(v["a"].pages.data.filter((function(e){return e.isBookmarked}))),n=Object(f["ref"])(-1),r={maxScrollbarLength:60},i=Object(p["a"])({data:{pages:e.value},searchLimit:6}),o=i.searchQuery,a=i.resetsearchQuery,s=i.filteredData;Object(f["watch"])(o,(function(e){g["a"].commit("app/TOGGLE_OVERLAY",Boolean(e))})),Object(f["watch"])(s,(function(e){n.value=e.pages&&!e.pages.length?-1:0}));var c=function(){var e=s.value.pages[n.value];m["a"].push(e.route).catch((function(){})),a()},l=function(e){var n=t.value.findIndex((function(t){return t.route===e.route}));n>-1?(t.value[n].isBookmarked=!1,t.value.splice(n,1)):(t.value.push(e),t.value[t.value.length-1].isBookmarked=!0)};return{bookmarks:t,perfectScrollbarSettings:r,currentSelected:n,suggestionSelected:c,toggleBookmarked:l,searchQuery:o,resetsearchQuery:a,filteredData:s}}},y=b,k=(n("dddd"),n("2877")),A=Object(k["a"])(y,r,i,!1,null,"1134b199",null);t["a"]=A.exports},"6efd":function(e,t,n){},"6f53":function(e,t,n){var r=n("83ab"),i=n("df75"),o=n("fc6a"),a=n("d1e7").f,s=function(e){return function(t){var n,s=o(t),c=i(s),l=c.length,u=0,d=[];while(l>u)n=c[u++],r&&!a.call(s,n)||d.push(e?[n,s[n]]:s[n]);return d}};e.exports={entries:s(!0),values:s(!1)}},"70ba":function(e,t,n){"use strict";n("600d")},7100:function(e,t,n){"use strict";var r=n("5530");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var s=n("ade3"),c=(n("99af"),n("d3b7"),n("4de4"),{loginEndpoint:"/jwt/login",registerEndpoint:"/jwt/register",refreshEndpoint:"/jwt/refresh-token",logoutEndpoint:"/jwt/logout",tokenType:"Bearer",storageTokenKeyName:"accessToken",storageRefreshTokenKeyName:"refreshToken"}),l=function(){function e(t,n){var o=this;i(this,e),Object(s["a"])(this,"axiosIns",null),Object(s["a"])(this,"jwtConfig",Object(r["a"])({},c)),Object(s["a"])(this,"isAlreadyFetchingAccessToken",!1),Object(s["a"])(this,"subscribers",[]),this.axiosIns=t,this.jwtConfig=Object(r["a"])(Object(r["a"])({},this.jwtConfig),n),this.axiosIns.interceptors.request.use((function(e){var t=o.getToken();return t&&(e.headers.Authorization="".concat(o.jwtConfig.tokenType," ").concat(t)),e}),(function(e){return Promise.reject(e)})),this.axiosIns.interceptors.response.use((function(e){return e}),(function(e){var t=e.config,n=e.response,r=t;if(n&&401===n.status){o.isAlreadyFetchingAccessToken||(o.isAlreadyFetchingAccessToken=!0,o.refreshToken().then((function(e){o.isAlreadyFetchingAccessToken=!1,o.setToken(e.data.accessToken),o.setRefreshToken(e.data.refreshToken),o.onAccessTokenFetched(e.data.accessToken)})));var i=new Promise((function(e){o.addSubscriber((function(t){r.headers.Authorization="".concat(o.jwtConfig.tokenType," ").concat(t),e(o.axiosIns(r))}))}));return i}return Promise.reject(e)}))}return a(e,[{key:"onAccessTokenFetched",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t(e)}))}},{key:"addSubscriber",value:function(e){this.subscribers.push(e)}},{key:"getToken",value:function(){return localStorage.getItem(this.jwtConfig.storageTokenKeyName)}},{key:"getRefreshToken",value:function(){return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)}},{key:"setToken",value:function(e){localStorage.setItem(this.jwtConfig.storageTokenKeyName,e)}},{key:"setRefreshToken",value:function(e){localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName,e)}},{key:"login",value:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=this.axiosIns).post.apply(e,[this.jwtConfig.loginEndpoint].concat(n))}},{key:"register",value:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=this.axiosIns).post.apply(e,[this.jwtConfig.registerEndpoint].concat(n))}},{key:"refreshToken",value:function(){return this.axiosIns.post(this.jwtConfig.refreshEndpoint,{refreshToken:this.getRefreshToken()})}}]),e}();function u(e,t){var n=new l(e,t);return{jwt:n}}var d=n("2b0e"),h=n("bc3a"),p=n.n(h),f=p.a.create({});d["default"].prototype.$http=f;var m=f,g=u(m,{}),v=g.jwt;t["a"]=v},"72fe":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8AgMAAADtUfddAAAACVBMVEUAAADdAAD/zgDGIigcAAAAHElEQVR4AWMAgVEwCkJxgRElMyqzChcYSTKjMgBDzfIcJWmM/AAAAABJRU5ErkJggg=="},"73bb":function(e,t,n){e.exports=n.p+"img/6-small.c9b47a98.png"},"75ec":function(e,t,n){"use strict";n("8d13")},"7db0":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").find,o=n("44d2"),a=n("ae40"),s="find",c=!0,l=a(s);s in[]&&Array(1)[s]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!l},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},"809a":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"nav-item nav-search"},[n("a",{staticClass:"nav-link nav-link-search",attrs:{href:"javascript:void(0)"},on:{click:function(t){e.showSearchBar=!0}}},[n("feather-icon",{attrs:{icon:"SearchIcon",size:"21"}})],1),n("div",{staticClass:"search-input",class:{open:e.showSearchBar}},[n("div",{staticClass:"search-input-icon"},[n("feather-icon",{attrs:{icon:"SearchIcon"}})],1),e.showSearchBar?n("b-form-input",{attrs:{placeholder:"Explore Vuexy",autofocus:"",autocomplete:"off"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.increaseIndex(!1)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increaseIndex.apply(null,arguments)},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.showSearchBar=!1,e.resetsearchQuery()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.suggestionSelected.apply(null,arguments)}],blur:function(t){t.stopPropagation(),e.showSearchBar=!1,e.resetsearchQuery()}},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}):e._e(),n("div",{staticClass:"search-input-close",on:{click:function(t){e.showSearchBar=!1,e.resetsearchQuery()}}},[n("feather-icon",{attrs:{icon:"XIcon"}})],1),n("vue-perfect-scrollbar",{staticClass:"search-list search-list-main scroll-area overflow-hidden",class:{show:e.searchQuery},attrs:{settings:e.perfectScrollbarSettings,tagname:"ul"}},e._l(e.filteredData,(function(t,r,i){return n("li",{key:i,staticClass:"suggestions-groups-list"},[n("p",{staticClass:"suggestion-group-title"},[n("span",[e._v(" "+e._s(e.title(r))+" ")])]),n("ul",[e._l(t,(function(t,o){return n("li",{key:o,staticClass:"suggestion-group-suggestion cursor-pointer",class:{"suggestion-current-selected":e.currentSelected===i+"."+o},on:{mouseenter:function(t){e.currentSelected=i+"."+o},mousedown:function(n){return n.preventDefault(),e.suggestionSelected(r,t)}}},["pages"===r?n("b-link",{staticClass:"p-0"},[n("feather-icon",{staticClass:"mr-75",attrs:{icon:t.icon}}),n("span",{staticClass:"align-middle"},[e._v(e._s(t.title))])],1):"files"===r?[n("div",{staticClass:"d-flex align-items-center"},[n("b-img",{staticClass:"mr-1",attrs:{src:t.icon,height:"32"}}),n("div",[n("p",[e._v(e._s(t.file_name))]),n("small",[e._v("by "+e._s(t.from))])]),n("small",{staticClass:"ml-auto"},[e._v(e._s(t.size))])],1)]:"contacts"===r?[n("div",{staticClass:"d-flex align-items-center"},[n("b-avatar",{staticClass:"mr-1",attrs:{src:t.img,size:"32"}}),n("div",[n("p",[e._v(e._s(t.name))]),n("small",[e._v(e._s(t.email))])]),n("small",{staticClass:"ml-auto"},[e._v(e._s(t.time))])],1)]:e._e()],2)})),!t.length&&e.searchQuery?n("li",{staticClass:"suggestion-group-suggestion no-results"},[n("p",[e._v("No Results Found.")])]):e._e()],2)])})),0)],1)])},i=[],o=(n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("06c5"));function a(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Object(o["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,a=e},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw a}}}}var s=n("3835"),c=(n("ac1f"),n("1276"),n("b64b"),n("07ac"),n("4fad"),n("99af"),n("a9e3"),n("4797")),l=n("aa59"),u=n("4918"),d=n("e8a3"),h=n("a6f4"),p=n("9d63"),f=n.n(p),m=n("270f"),g=n("0e20"),v=n("a18c"),b=n("4360"),y=n("cee9"),k={components:{BFormInput:c["a"],BLink:l["a"],BImg:u["a"],BAvatar:d["a"],VuePerfectScrollbar:f.a},setup:function(){var e=Object(h["ref"])(!1),t={maxScrollbarLength:60},n=function(t,n){if(!n&&-1!==l.value){var r=l.value.split("."),i=Object(s["a"])(r,2),a=i[0],u=i[1];t=Object.keys(c.value)[a],n=c.value[t][u]}"pages"===t&&v["a"].push(n.route).catch((function(){})),o(),e.value=!1},r=Object(m["a"])({data:y["a"],searchLimit:4}),i=r.searchQuery,o=r.resetsearchQuery,c=r.filteredData;Object(h["watch"])(i,(function(e){b["a"].commit("app/TOGGLE_OVERLAY",Boolean(e))}));var l=Object(h["ref"])(-1);Object(h["watch"])(c,(function(e){if(Object.values(e).some((function(e){return e.length}))){var t,n=null,r=a(Object.values(e).entries());try{for(r.s();!(t=r.n()).done;){var i=Object(s["a"])(t.value,2),o=i[0],c=i[1];if(c.length){n=o;break}}}catch(u){r.e(u)}finally{r.f()}null!==n&&(l.value="".concat(n,".0"))}else l.value=-1}));var u=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(Object.values(c.value).some((function(e){return e.length}))){var t=l.value.split("."),n=Object(s["a"])(t,2),r=n[0],i=n[1],o=Object.entries(c.value),a=o[r][1].length;if(e){if(a-1>i)l.value="".concat(r,".").concat(Number(i)+1);else if(r<o.length-1)for(var u=Number(r)+1;u<o.length;u++)if(o[u][1].length>0){l.value="".concat(Number(u),".0");break}}else if(Number(i))l.value="".concat(r,".").concat(Number(i)-1);else if(Number(r))for(var d=Number(r)-1;d>=0;d--)if(o[d][1].length>0){l.value="".concat(d,".").concat(o[d][1].length-1);break}}};return{showSearchBar:e,perfectScrollbarSettings:t,searchAndBookmarkData:y["a"],title:g["b"],suggestionSelected:n,currentSelected:l,increaseIndex:u,searchQuery:i,resetsearchQuery:o,filteredData:c}}},A=k,w=(n("e180"),n("2877")),I=Object(w["a"])(A,r,i,!1,null,"0e8a7f4f",null);t["a"]=I.exports},"843a":function(e,t,n){},"8a2e":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav-item-dropdown",{staticClass:"dropdown-cart mr-25",attrs:{"menu-class":"dropdown-menu-media",right:""},on:{show:e.fetchItems},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("feather-icon",{staticClass:"text-body",attrs:{badge:e.$store.state["app-ecommerce"].cartItemsCount,icon:"ShoppingCartIcon",size:"21"}})]},proxy:!0}])},[n("li",{staticClass:"dropdown-menu-header"},[n("div",{staticClass:"dropdown-header d-flex"},[n("h4",{staticClass:"notification-title mb-0 mr-auto"},[e._v(" My Cart ")]),n("b-badge",{attrs:{pill:"",variant:"light-primary"}},[e._v(" "+e._s(e.$store.state["app-ecommerce"].cartItemsCount)+" Items ")])],1)]),e.items.length?n("vue-perfect-scrollbar",{staticClass:"scrollable-container media-list scroll-area",attrs:{settings:e.perfectScrollbarSettings,tagname:"li"}},e._l(e.items,(function(t){return n("b-media",{key:t.name,scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-img",{attrs:{src:t.image,alt:t.name,rounded:"",width:"62px"}})]},proxy:!0}],null,!0)},[n("feather-icon",{staticClass:"cart-item-remove cursor-pointer",attrs:{icon:"XIcon"},on:{click:function(n){return n.stopPropagation(),e.removeItemFromCart(t.id)}}}),n("div",{staticClass:"media-heading"},[n("h6",{staticClass:"cart-item-title"},[n("b-link",{staticClass:"text-body"},[e._v(" "+e._s(t.name)+" ")])],1),n("small",{staticClass:"cart-item-by"},[e._v("By "+e._s(t.brand))])]),n("div",{staticClass:"cart-item-qty ml-1"},[n("b-form-spinbutton",{attrs:{min:"1",size:"sm"},model:{value:t.qty,callback:function(n){e.$set(t,"qty",n)},expression:"item.qty"}})],1),n("h5",{staticClass:"cart-item-price"},[e._v(" $"+e._s(t.price)+" ")])],1)})),1):e._e(),e.items.length?n("li",{staticClass:"dropdown-menu-footer"},[n("div",{staticClass:"d-flex justify-content-between mb-1"},[n("h6",{staticClass:"font-weight-bolder mb-0"},[e._v(" Total: ")]),n("h6",{staticClass:"text-primary font-weight-bolder mb-0"},[e._v(" $"+e._s(e.totalAmount)+" ")])]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary",block:"",to:{name:"apps-e-commerce-checkout"}}},[e._v(" Checkout ")])],1):e._e(),e.items.length?e._e():n("p",{staticClass:"m-0 p-1 text-center"},[e._v(" Your cart is empty ")])],1)},i=[],o=(n("159b"),n("c740"),n("a434"),n("ede5")),a=n("e98b"),s=n("34b6"),c=n("aa59"),l=n("4918"),u=n("93aa"),d=n("1947"),h=n("9d63"),p=n.n(h),f=n("e009"),m={components:{BNavItemDropdown:o["a"],BBadge:a["a"],BMedia:s["a"],BLink:c["a"],BImg:l["a"],BFormSpinbutton:u["a"],VuePerfectScrollbar:p.a,BButton:d["a"]},directives:{Ripple:f["a"]},data:function(){return{items:[],perfectScrollbarSettings:{maxScrollbarLength:60,wheelPropagation:!1}}},computed:{totalAmount:function(){var e=0;return this.items.forEach((function(t){e+=t.price})),e}},methods:{fetchItems:function(){var e=this;this.$store.dispatch("app-ecommerce/fetchCartProducts").then((function(t){e.items=t.data.products}))},removeItemFromCart:function(e){var t=this;this.$store.dispatch("app-ecommerce/removeProductFromCart",{productId:e}).then((function(){var n=t.items.findIndex((function(t){return t.id===e}));t.items.splice(n,1),t.$store.commit("app-ecommerce/UPDATE_CART_ITEMS_COUNT",t.items.length)}))}}},g=m,v=(n("a0cb"),n("2877")),b=Object(v["a"])(g,r,i,!1,null,"a58fee00",null);t["a"]=b.exports},"8d13":function(e,t,n){},9996:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA1CAMAAACA7r40AAAA/FBMVEWyIjNPN2Y8O27///8/PnBOTXxycpY9PG9RUX5HR3dIR3dLSnlPTny4uMpWVYFFRHVwb5VlZIx7e52DgqOIh6aIiKc+PXBJSHhTUn9hYYqyIjReXohgX4lYV4Lr6/C2tcjPdYB0c5haWYRYV4Nra5GJiac+PW/FxdTHYG1RUH3eoajltbtOTXvty89BQHHg3+hSUX6GYoC6usyVlbFycZa7u8yUk6+sq8FCQXO0tMe1tMhiYYpMS3pDQnNvbpTExNN8fJ7GxdTGxtWCgqLHx9WXlrLXi5SYl7Kiobrg4Oiiorrn5u3n5+2jo7ukpLvw8PTx8fX09Pf19firqsC5sMNxAAAAAnRSTlPQ9qN1Xw4AAAGlSURBVHhe7ZXFiiRBFEVjznvp5W7t7j3u7m7//y8D1dAMGbnI4jW5KOpsgjibCxFcrrtVEmcBGAGQJHB98d3EgEM/ygsg/nwRAy15rxQ4Ywh3JQX49hVgKA/Ad1hDkkGTMSQJjGkOEmo133FmwAEQyl8FfSj3gFgkzjsQAw6AZ796AP2fGcDBS8/ZQ7ZQlJ2d+bEFqp6zhuh9Cf9/pDtKkTs04KBTD4jgx3eICOodoshz1p7M6UUAUQ+Ap2Pf2UMI5UBBX18/Ut7ZQ84Jui10QKsbcA7dt77jxIBDt+sxMNzrD4HL+rZS4Iw9iTZkCjRFmsBUHkcUOGMI7dkpKezuQsrprM3zR76zN572ekdBX623gaONJ0d5B5sGHAA1+QTwRQJgX2Q/7+w9GZGlDZKERpoxgkbDc8s0WscGSo+WGMiNVlgwWuFNjdafPsDe7wzg3RvP2UNCFGVtbX6EoOo7PhgoO1rGnswHiquB4mqgfIcxpBTGkNslMf2JVMAShRxXgJtUwBKFbFbAqicL4U4qYNWThXCHFbDqyUK4swpY9WQhXBX8A2rVjaQ6HWXmAAAAAElFTkSuQmCC"},"9a5e":function(e,t,n){e.exports=n.p+"img/avatar-s-5.50ed9b46.jpg"},"9ab4":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return d}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function s(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(a,s)}c((r=r.apply(e,t||[])).next())}))}function c(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(i=a.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(s){o=[6,s],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function l(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a}function d(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create},"9d63":function(e,t){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=2)}([function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){n(10);var r=n(7)(n(3),n(8),null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r);t.default=i.a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6);t.default={name:"vue-perfect-scrollbar",props:{settings:{default:void 0},tagname:{type:String,default:"section"}},data:function(){return{ps:null}},methods:{update:function(){this.ps&&this.ps.update()},__init:function(){this.ps||(this.ps=new r.a(this.$el,this.settings))},__uninit:function(){this.ps&&(this.ps.destroy(),this.ps=null)}},watch:{$route:function(){this.update()}},mounted:function(){this.$isServer||this.__init()},updated:function(){this.$nextTick(this.update)},activated:function(){this.__init()},deactivated:function(){this.__uninit()},beforeDestroy:function(){this.__uninit()}}},function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{height:15px;bottom:0}.ps__rail-x,.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;position:absolute}.ps__rail-y{width:15px;right:0}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}",""])},function(e,t,n){t=e.exports=n(0)(),t.i(n(4),""),t.push([e.i,".ps-container{position:relative}",""])},function(e,t,n){"use strict";
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */function r(e){return getComputedStyle(e)}function i(e,t){for(var n in t){var r=t[n];"number"==typeof r&&(r+="px"),e.style[n]=r}return e}function o(e){var t=document.createElement("div");return t.className=e,t}function a(e,t){if(!k)throw new Error("No element matching method supported");return k.call(e,t)}function s(e){e.remove?e.remove():e.parentNode&&e.parentNode.removeChild(e)}function c(e,t){return Array.prototype.filter.call(e.children,(function(e){return a(e,t)}))}function l(e,t){var n=e.element.classList,r=A.state.scrolling(t);n.contains(r)?clearTimeout(w[t]):n.add(r)}function u(e,t){w[t]=setTimeout((function(){return e.isAlive&&e.element.classList.remove(A.state.scrolling(t))}),e.settings.scrollingThreshold)}function d(e,t){l(e,t),u(e,t)}function h(e){if("function"==typeof window.CustomEvent)return new CustomEvent(e);var t=document.createEvent("CustomEvent");return t.initCustomEvent(e,!1,!1,void 0),t}function p(e,t,n,r,i){var o=n[0],a=n[1],s=n[2],c=n[3],l=n[4],u=n[5];void 0===r&&(r=!0),void 0===i&&(i=!1);var p=e.element;e.reach[c]=null,p[s]<1&&(e.reach[c]="start"),p[s]>e[o]-e[a]-1&&(e.reach[c]="end"),t&&(p.dispatchEvent(h("ps-scroll-"+c)),t<0?p.dispatchEvent(h("ps-scroll-"+l)):t>0&&p.dispatchEvent(h("ps-scroll-"+u)),r&&d(e,c)),e.reach[c]&&(t||i)&&p.dispatchEvent(h("ps-"+c+"-reach-"+e.reach[c]))}function f(e){return parseInt(e,10)||0}function m(e){return a(e,"input,[contenteditable]")||a(e,"select,[contenteditable]")||a(e,"textarea,[contenteditable]")||a(e,"button,[contenteditable]")}function g(e){var t=r(e);return f(t.width)+f(t.paddingLeft)+f(t.paddingRight)+f(t.borderLeftWidth)+f(t.borderRightWidth)}function v(e,t){return e.settings.minScrollbarLength&&(t=Math.max(t,e.settings.minScrollbarLength)),e.settings.maxScrollbarLength&&(t=Math.min(t,e.settings.maxScrollbarLength)),t}function b(e,t){var n={width:t.railXWidth},r=Math.floor(e.scrollTop);t.isRtl?n.left=t.negativeScrollAdjustment+e.scrollLeft+t.containerWidth-t.contentWidth:n.left=e.scrollLeft,t.isScrollbarXUsingBottom?n.bottom=t.scrollbarXBottom-r:n.top=t.scrollbarXTop+r,i(t.scrollbarXRail,n);var o={top:r,height:t.railYHeight};t.isScrollbarYUsingRight?t.isRtl?o.right=t.contentWidth-(t.negativeScrollAdjustment+e.scrollLeft)-t.scrollbarYRight-t.scrollbarYOuterWidth:o.right=t.scrollbarYRight-e.scrollLeft:t.isRtl?o.left=t.negativeScrollAdjustment+e.scrollLeft+2*t.containerWidth-t.contentWidth-t.scrollbarYLeft-t.scrollbarYOuterWidth:o.left=t.scrollbarYLeft+e.scrollLeft,i(t.scrollbarYRail,o),i(t.scrollbarX,{left:t.scrollbarXLeft,width:t.scrollbarXWidth-t.railBorderXWidth}),i(t.scrollbarY,{top:t.scrollbarYTop,height:t.scrollbarYHeight-t.railBorderYWidth})}function y(e,t){function n(t){m[h]=g+b*(t[a]-v),l(e,p),E(e),t.stopPropagation(),t.preventDefault()}function r(){u(e,p),e[f].classList.remove(A.state.clicking),e.event.unbind(e.ownerDocument,"mousemove",n)}var i=t[0],o=t[1],a=t[2],s=t[3],c=t[4],d=t[5],h=t[6],p=t[7],f=t[8],m=e.element,g=null,v=null,b=null;e.event.bind(e[c],"mousedown",(function(t){g=m[h],v=t[a],b=(e[o]-e[i])/(e[s]-e[d]),e.event.bind(e.ownerDocument,"mousemove",n),e.event.once(e.ownerDocument,"mouseup",r),e[f].classList.add(A.state.clicking),t.stopPropagation(),t.preventDefault()}))}var k="undefined"!=typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),A={main:"ps",element:{thumb:function(e){return"ps__thumb-"+e},rail:function(e){return"ps__rail-"+e},consuming:"ps__child--consume"},state:{focus:"ps--focus",clicking:"ps--clicking",active:function(e){return"ps--active-"+e},scrolling:function(e){return"ps--scrolling-"+e}}},w={x:null,y:null},I=function(e){this.element=e,this.handlers={}},_={isEmpty:{configurable:!0}};I.prototype.bind=function(e,t){void 0===this.handlers[e]&&(this.handlers[e]=[]),this.handlers[e].push(t),this.element.addEventListener(e,t,!1)},I.prototype.unbind=function(e,t){var n=this;this.handlers[e]=this.handlers[e].filter((function(r){return!(!t||r===t)||(n.element.removeEventListener(e,r,!1),!1)}))},I.prototype.unbindAll=function(){var e=this;for(var t in e.handlers)e.unbind(t)},_.isEmpty.get=function(){var e=this;return Object.keys(this.handlers).every((function(t){return 0===e.handlers[t].length}))},Object.defineProperties(I.prototype,_);var C=function(){this.eventElements=[]};C.prototype.eventElement=function(e){var t=this.eventElements.filter((function(t){return t.element===e}))[0];return t||(t=new I(e),this.eventElements.push(t)),t},C.prototype.bind=function(e,t,n){this.eventElement(e).bind(t,n)},C.prototype.unbind=function(e,t,n){var r=this.eventElement(e);r.unbind(t,n),r.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(r),1)},C.prototype.unbindAll=function(){this.eventElements.forEach((function(e){return e.unbindAll()})),this.eventElements=[]},C.prototype.once=function(e,t,n){var r=this.eventElement(e),i=function(e){r.unbind(t,i),n(e)};r.bind(t,i)};var S=function(e,t,n,r,i){var o;if(void 0===r&&(r=!0),void 0===i&&(i=!1),"top"===t)o=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==t)throw new Error("A proper axis should be provided");o=["contentWidth","containerWidth","scrollLeft","x","left","right"]}p(e,n,o,r,i)},T={isWebKit:"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!=typeof window&&("ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!=typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!=typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)},E=function(e){var t=e.element,n=Math.floor(t.scrollTop);e.containerWidth=t.clientWidth,e.containerHeight=t.clientHeight,e.contentWidth=t.scrollWidth,e.contentHeight=t.scrollHeight,t.contains(e.scrollbarXRail)||(c(t,A.element.rail("x")).forEach((function(e){return s(e)})),t.appendChild(e.scrollbarXRail)),t.contains(e.scrollbarYRail)||(c(t,A.element.rail("y")).forEach((function(e){return s(e)})),t.appendChild(e.scrollbarYRail)),!e.settings.suppressScrollX&&e.containerWidth+e.settings.scrollXMarginOffset<e.contentWidth?(e.scrollbarXActive=!0,e.railXWidth=e.containerWidth-e.railXMarginWidth,e.railXRatio=e.containerWidth/e.railXWidth,e.scrollbarXWidth=v(e,f(e.railXWidth*e.containerWidth/e.contentWidth)),e.scrollbarXLeft=f((e.negativeScrollAdjustment+t.scrollLeft)*(e.railXWidth-e.scrollbarXWidth)/(e.contentWidth-e.containerWidth))):e.scrollbarXActive=!1,!e.settings.suppressScrollY&&e.containerHeight+e.settings.scrollYMarginOffset<e.contentHeight?(e.scrollbarYActive=!0,e.railYHeight=e.containerHeight-e.railYMarginHeight,e.railYRatio=e.containerHeight/e.railYHeight,e.scrollbarYHeight=v(e,f(e.railYHeight*e.containerHeight/e.contentHeight)),e.scrollbarYTop=f(n*(e.railYHeight-e.scrollbarYHeight)/(e.contentHeight-e.containerHeight))):e.scrollbarYActive=!1,e.scrollbarXLeft>=e.railXWidth-e.scrollbarXWidth&&(e.scrollbarXLeft=e.railXWidth-e.scrollbarXWidth),e.scrollbarYTop>=e.railYHeight-e.scrollbarYHeight&&(e.scrollbarYTop=e.railYHeight-e.scrollbarYHeight),b(t,e),e.scrollbarXActive?t.classList.add(A.state.active("x")):(t.classList.remove(A.state.active("x")),e.scrollbarXWidth=0,e.scrollbarXLeft=0,t.scrollLeft=0),e.scrollbarYActive?t.classList.add(A.state.active("y")):(t.classList.remove(A.state.active("y")),e.scrollbarYHeight=0,e.scrollbarYTop=0,t.scrollTop=0)},O=function(e){e.event.bind(e.scrollbarY,"mousedown",(function(e){return e.stopPropagation()})),e.event.bind(e.scrollbarYRail,"mousedown",(function(t){var n=t.pageY-window.pageYOffset-e.scrollbarYRail.getBoundingClientRect().top,r=n>e.scrollbarYTop?1:-1;e.element.scrollTop+=r*e.containerHeight,E(e),t.stopPropagation()})),e.event.bind(e.scrollbarX,"mousedown",(function(e){return e.stopPropagation()})),e.event.bind(e.scrollbarXRail,"mousedown",(function(t){var n=t.pageX-window.pageXOffset-e.scrollbarXRail.getBoundingClientRect().left,r=n>e.scrollbarXLeft?1:-1;e.element.scrollLeft+=r*e.containerWidth,E(e),t.stopPropagation()}))},R=function(e){y(e,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),y(e,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},x=function(e){function t(t,r){var i=Math.floor(n.scrollTop);if(0===t){if(!e.scrollbarYActive)return!1;if(0===i&&r>0||i>=e.contentHeight-e.containerHeight&&r<0)return!e.settings.wheelPropagation}var o=n.scrollLeft;if(0===r){if(!e.scrollbarXActive)return!1;if(0===o&&t<0||o>=e.contentWidth-e.containerWidth&&t>0)return!e.settings.wheelPropagation}return!0}var n=e.element,r=function(){return a(n,":hover")},i=function(){return a(e.scrollbarX,":focus")||a(e.scrollbarY,":focus")};e.event.bind(e.ownerDocument,"keydown",(function(o){if(!(o.isDefaultPrevented&&o.isDefaultPrevented()||o.defaultPrevented)&&(r()||i())){var a=document.activeElement?document.activeElement:e.ownerDocument.activeElement;if(a){if("IFRAME"===a.tagName)a=a.contentDocument.activeElement;else for(;a.shadowRoot;)a=a.shadowRoot.activeElement;if(m(a))return}var s=0,c=0;switch(o.which){case 37:s=o.metaKey?-e.contentWidth:o.altKey?-e.containerWidth:-30;break;case 38:c=o.metaKey?e.contentHeight:o.altKey?e.containerHeight:30;break;case 39:s=o.metaKey?e.contentWidth:o.altKey?e.containerWidth:30;break;case 40:c=o.metaKey?-e.contentHeight:o.altKey?-e.containerHeight:-30;break;case 32:c=o.shiftKey?e.containerHeight:-e.containerHeight;break;case 33:c=e.containerHeight;break;case 34:c=-e.containerHeight;break;case 36:c=e.contentHeight;break;case 35:c=-e.contentHeight;break;default:return}e.settings.suppressScrollX&&0!==s||e.settings.suppressScrollY&&0!==c||(n.scrollTop-=c,n.scrollLeft+=s,E(e),t(s,c)&&o.preventDefault())}}))},N=function(e){function t(t,n){var r=Math.floor(a.scrollTop),i=0===a.scrollTop,o=r+a.offsetHeight===a.scrollHeight,s=0===a.scrollLeft,c=a.scrollLeft+a.offsetWidth===a.scrollWidth;return!(Math.abs(n)>Math.abs(t)?i||o:s||c)||!e.settings.wheelPropagation}function n(e){var t=e.deltaX,n=-1*e.deltaY;return void 0!==t&&void 0!==n||(t=-1*e.wheelDeltaX/6,n=e.wheelDeltaY/6),e.deltaMode&&1===e.deltaMode&&(t*=10,n*=10),t!==t&&n!==n&&(t=0,n=e.wheelDelta),e.shiftKey?[-n,-t]:[t,n]}function i(e,t,n){if(!T.isWebKit&&a.querySelector("select:focus"))return!0;if(!a.contains(e))return!1;for(var i=e;i&&i!==a;){if(i.classList.contains(A.element.consuming))return!0;var o=r(i);if([o.overflow,o.overflowX,o.overflowY].join("").match(/(scroll|auto)/)){var s=i.scrollHeight-i.clientHeight;if(s>0&&!(0===i.scrollTop&&n>0||i.scrollTop===s&&n<0))return!0;var c=i.scrollWidth-i.clientWidth;if(c>0&&!(0===i.scrollLeft&&t<0||i.scrollLeft===c&&t>0))return!0}i=i.parentNode}return!1}function o(r){var o=n(r),s=o[0],c=o[1];if(!i(r.target,s,c)){var l=!1;e.settings.useBothWheelAxes?e.scrollbarYActive&&!e.scrollbarXActive?(c?a.scrollTop-=c*e.settings.wheelSpeed:a.scrollTop+=s*e.settings.wheelSpeed,l=!0):e.scrollbarXActive&&!e.scrollbarYActive&&(s?a.scrollLeft+=s*e.settings.wheelSpeed:a.scrollLeft-=c*e.settings.wheelSpeed,l=!0):(a.scrollTop-=c*e.settings.wheelSpeed,a.scrollLeft+=s*e.settings.wheelSpeed),E(e),l=l||t(s,c),l&&!r.ctrlKey&&(r.stopPropagation(),r.preventDefault())}}var a=e.element;void 0!==window.onwheel?e.event.bind(a,"wheel",o):void 0!==window.onmousewheel&&e.event.bind(a,"mousewheel",o)},B=function(e){function t(t,n){var r=Math.floor(u.scrollTop),i=u.scrollLeft,o=Math.abs(t),a=Math.abs(n);if(a>o){if(n<0&&r===e.contentHeight-e.containerHeight||n>0&&0===r)return 0===window.scrollY&&n>0&&T.isChrome}else if(o>a&&(t<0&&i===e.contentWidth-e.containerWidth||t>0&&0===i))return!0;return!0}function n(t,n){u.scrollTop-=n,u.scrollLeft-=t,E(e)}function i(e){return e.targetTouches?e.targetTouches[0]:e}function o(e){return(!e.pointerType||"pen"!==e.pointerType||0!==e.buttons)&&(!(!e.targetTouches||1!==e.targetTouches.length)||!(!e.pointerType||"mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))}function a(e){if(o(e)){var t=i(e);d.pageX=t.pageX,d.pageY=t.pageY,h=(new Date).getTime(),null!==f&&clearInterval(f)}}function s(e,t,n){if(!u.contains(e))return!1;for(var i=e;i&&i!==u;){if(i.classList.contains(A.element.consuming))return!0;var o=r(i);if([o.overflow,o.overflowX,o.overflowY].join("").match(/(scroll|auto)/)){var a=i.scrollHeight-i.clientHeight;if(a>0&&!(0===i.scrollTop&&n>0||i.scrollTop===a&&n<0))return!0;var s=i.scrollLeft-i.clientWidth;if(s>0&&!(0===i.scrollLeft&&t<0||i.scrollLeft===s&&t>0))return!0}i=i.parentNode}return!1}function c(e){if(o(e)){var r=i(e),a={pageX:r.pageX,pageY:r.pageY},c=a.pageX-d.pageX,l=a.pageY-d.pageY;if(s(e.target,c,l))return;n(c,l),d=a;var u=(new Date).getTime(),f=u-h;f>0&&(p.x=c/f,p.y=l/f,h=u),t(c,l)&&e.preventDefault()}}function l(){e.settings.swipeEasing&&(clearInterval(f),f=setInterval((function(){return e.isInitialized?void clearInterval(f):p.x||p.y?Math.abs(p.x)<.01&&Math.abs(p.y)<.01?void clearInterval(f):(n(30*p.x,30*p.y),p.x*=.8,void(p.y*=.8)):void clearInterval(f)}),10))}if(T.supportsTouch||T.supportsIePointer){var u=e.element,d={},h=0,p={},f=null;T.supportsTouch?(e.event.bind(u,"touchstart",a),e.event.bind(u,"touchmove",c),e.event.bind(u,"touchend",l)):T.supportsIePointer&&(window.PointerEvent?(e.event.bind(u,"pointerdown",a),e.event.bind(u,"pointermove",c),e.event.bind(u,"pointerup",l)):window.MSPointerEvent&&(e.event.bind(u,"MSPointerDown",a),e.event.bind(u,"MSPointerMove",c),e.event.bind(u,"MSPointerUp",l)))}},M=function(){return{handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1}},L={"click-rail":O,"drag-thumb":R,keyboard:x,wheel:N,touch:B},P=function(e,t){var n=this;if(void 0===t&&(t={}),"string"==typeof e&&(e=document.querySelector(e)),!e||!e.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var a in this.element=e,e.classList.add(A.main),this.settings=M(),t)n.settings[a]=t[a];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return e.classList.add(A.state.focus)},c=function(){return e.classList.remove(A.state.focus)};this.isRtl="rtl"===r(e).direction,this.isNegativeScroll=function(){var t=e.scrollLeft,n=null;return e.scrollLeft=-1,n=e.scrollLeft<0,e.scrollLeft=t,n}(),this.negativeScrollAdjustment=this.isNegativeScroll?e.scrollWidth-e.clientWidth:0,this.event=new C,this.ownerDocument=e.ownerDocument||document,this.scrollbarXRail=o(A.element.rail("x")),e.appendChild(this.scrollbarXRail),this.scrollbarX=o(A.element.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",c),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var l=r(this.scrollbarXRail);this.scrollbarXBottom=parseInt(l.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=f(l.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=f(l.borderLeftWidth)+f(l.borderRightWidth),i(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=f(l.marginLeft)+f(l.marginRight),i(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=o(A.element.rail("y")),e.appendChild(this.scrollbarYRail),this.scrollbarY=o(A.element.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",c),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var u=r(this.scrollbarYRail);this.scrollbarYRight=parseInt(u.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=f(u.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?g(this.scrollbarY):null,this.railBorderYWidth=f(u.borderTopWidth)+f(u.borderBottomWidth),i(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=f(u.marginTop)+f(u.marginBottom),i(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:e.scrollLeft<=0?"start":e.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:e.scrollTop<=0?"start":e.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(e){return L[e](n)})),this.lastScrollTop=Math.floor(e.scrollTop),this.lastScrollLeft=e.scrollLeft,this.event.bind(this.element,"scroll",(function(e){return n.onScroll(e)})),E(this)};P.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,i(this.scrollbarXRail,{display:"block"}),i(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=f(r(this.scrollbarXRail).marginLeft)+f(r(this.scrollbarXRail).marginRight),this.railYMarginHeight=f(r(this.scrollbarYRail).marginTop)+f(r(this.scrollbarYRail).marginBottom),i(this.scrollbarXRail,{display:"none"}),i(this.scrollbarYRail,{display:"none"}),E(this),S(this,"top",0,!1,!0),S(this,"left",0,!1,!0),i(this.scrollbarXRail,{display:""}),i(this.scrollbarYRail,{display:""}))},P.prototype.onScroll=function(e){this.isAlive&&(E(this),S(this,"top",this.element.scrollTop-this.lastScrollTop),S(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},P.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),s(this.scrollbarX),s(this.scrollbarY),s(this.scrollbarXRail),s(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},P.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(e){return!e.match(/^ps([-_].+|)$/)})).join(" ")},t.a=P},function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var s="function"==typeof o?o.options:o;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var c=s.computed||(s.computed={});Object.keys(r).forEach((function(e){var t=r[e];c[e]=function(){return t}}))}return{esModule:i,exports:o,options:s}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.$props.tagname,e._g({tag:"section",staticClass:"ps-container",on:{"~mouseover":function(t){return e.update(t)}}},e.$listeners),[e._t("default")],2)},staticRenderFns:[]}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=u[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(s(r.parts[o],t))}else{var a=[];for(o=0;o<r.parts.length;o++)a.push(s(r.parts[o],t));u[r.id]={id:r.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],s=i[2],c=i[3],l={css:a,media:s,sourceMap:c};n[o]?n[o].parts.push(l):t.push(n[o]={id:o,parts:[l]})}return t}function i(e,t){var n=p(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e,t){var n,r,i;if(t.singleton){var s=m++;n=f||(f=a(t)),r=c.bind(null,n,s,!1),i=c.bind(null,n,s,!0)}else n=a(t),r=l.bind(null,n),i=function(){o(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function c(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function l(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u={},d=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},h=d((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),p=d((function(){return document.head||document.getElementsByTagName("head")[0]})),f=null,m=0,g=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},void 0===t.singleton&&(t.singleton=h()),void 0===t.insertAt&&(t.insertAt="bottom");var i=r(e);return n(i,t),function(e){for(var o=[],a=0;a<i.length;a++){var s=i[a],c=u[s.id];c.refs--,o.push(c)}e&&n(r(e),t);for(a=0;a<o.length;a++){c=o[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete u[c.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]),n(9)(r,{}),r.locals&&(e.exports=r.locals)}])},"9f5c":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav-item",{on:{click:function(t){e.skin=e.isDark?"light":"dark"}}},[n("feather-icon",{attrs:{size:"21",icon:(e.isDark?"Sun":"Moon")+"Icon"}})],1)},i=[],o=n("b8f2"),a=n("a6f4"),s=n("4711"),c={components:{BNavItem:s["a"]},setup:function(){var e=Object(o["a"])(),t=e.skin,n=Object(a["computed"])((function(){return"dark"===t.value}));return{skin:t,isDark:n}}},l=c,u=n("2877"),d=Object(u["a"])(l,r,i,!1,null,null,null);t["a"]=d.exports},a0cb:function(e,t,n){"use strict";n("6efd")},a15b9:function(e,t,n){"use strict";var r=n("23e7"),i=n("44ad"),o=n("fc6a"),a=n("a640"),s=[].join,c=i!=Object,l=a("join",",");r({target:"Array",proto:!0,forced:c||!l},{join:function(e){return s.call(o(this),void 0===e?",":e)}})},a434:function(e,t,n){"use strict";var r=n("23e7"),i=n("23cb"),o=n("a691"),a=n("50c4"),s=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),d=n("ae40"),h=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,m=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!h||!p},{splice:function(e,t){var n,r,u,d,h,p,b=s(this),y=a(b.length),k=i(e,y),A=arguments.length;if(0===A?n=r=0:1===A?(n=0,r=y-k):(n=A-2,r=m(f(o(t),0),y-k)),y+n-r>g)throw TypeError(v);for(u=c(b,r),d=0;d<r;d++)h=k+d,h in b&&l(u,d,b[h]);if(u.length=r,n<r){for(d=k;d<y-r;d++)h=d+r,p=d+n,h in b?b[p]=b[h]:delete b[p];for(d=y;d>y-r+n;d--)delete b[d-1]}else if(n>r)for(d=y-r;d>k;d--)h=d+r-1,p=d+n-1,h in b?b[p]=b[h]:delete b[p];for(d=0;d<n;d++)b[d+k]=arguments[d+2];return b.length=y-r+n,u}})},a8e9:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return C})),n.d(t,"f",(function(){return k})),n.d(t,"g",(function(){return _})),n.d(t,"h",(function(){return O})),n.d(t,"i",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return p})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return h})),n.d(t,"o",(function(){return w})),n.d(t,"p",(function(){return I}));var r=n("9ab4"),i=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},o=function(e){var t=[],n=0,r=0;while(n<e.length){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){o=e[n++];var a=e[n++],s=e[n++],c=((7&i)<<18|(63&o)<<12|(63&a)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{o=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=o>>2,d=(3&o)<<4|s>>4,h=(15&s)<<2|l>>6,p=63&l;c||(p=64,a||(h=64)),r.push(n[u],n[d],n[h],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):o(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var o=n[e.charAt(i++)],a=i<e.length,s=a?n[e.charAt(i)]:0;++i;var c=i<e.length,l=c?n[e.charAt(i)]:64;++i;var u=i<e.length,d=u?n[e.charAt(i)]:64;if(++i,null==o||null==s||null==l||null==d)throw Error();var h=o<<2|s>>4;if(r.push(h),64!==l){var p=s<<4&240|l>>2;if(r.push(p),64!==d){var f=l<<6&192|d;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){try{return a.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var c=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"===typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function d(){var e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function h(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){var e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var f="FirebaseError",m=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name=f,Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,g.prototype.create),o}return Object(r["c"])(t,e),t}(Error),g=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?v(o,r):"Error",s=this.serviceName+": "+a+" ("+i+").",c=new m(i,s,r);return c},e}();function v(e,t){return e.replace(b,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var b=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function k(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,o=n;i<o.length;i++){var a=o[i];if(!r.includes(a))return!1;var s=e[a],c=t[a];if(A(s)&&A(c)){if(!k(s,c))return!1}else if(s!==c)return!1}for(var l=0,u=r;l<u.length;l++){a=u[l];if(!n.includes(a))return!1}return!0}function A(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var o=i[r],a=o[0],s=o[1];n(a,s)}return t.length?"&"+t.join("&"):""}function I(e){var t={},n=e.replace(/^\?/,"").split("&");return n.forEach((function(e){if(e){var n=e.split("="),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function _(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"===typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,a,s=this.chain_[0],c=this.chain_[1],l=this.chain_[2],u=this.chain_[3],d=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=u^c&(l^u),a=1518500249):(o=c^l^u,a=1859775393):r<60?(o=c&l|u&(c|l),a=2400959708):(o=c^l^u,a=3395469782);i=(s<<5|s>>>27)+o+d+a+n[r]&4294967295;d=u,u=l,l=4294967295&(c<<30|c>>>2),c=s,s=i}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;while(r<t){if(0===o)while(r<=n)this.compress_(e,r),r+=this.blockSize;if("string"===typeof e){while(r<t)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else while(r<t)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e}})();function C(e,t){var n=new S(e,t);return n.subscribe.bind(n)}var S=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=T(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=E),void 0===r.error&&(r.error=E),void 0===r.complete&&(r.complete=E);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!==typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function T(e,t){if("object"!==typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"===typeof e[i])return!0}return!1}function E(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},b680:function(e,t,n){"use strict";var r=n("23e7"),i=n("a691"),o=n("408a"),a=n("1148"),s=n("d039"),c=1..toFixed,l=Math.floor,u=function(e,t,n){return 0===t?n:t%2===1?u(e,t-1,n*e):u(e*e,t/2,n)},d=function(e){var t=0,n=e;while(n>=4096)t+=12,n/=4096;while(n>=2)t+=1,n/=2;return t},h=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));r({target:"Number",proto:!0,forced:h},{toFixed:function(e){var t,n,r,s,c=o(this),h=i(e),p=[0,0,0,0,0,0],f="",m="0",g=function(e,t){var n=-1,r=t;while(++n<6)r+=e*p[n],p[n]=r%1e7,r=l(r/1e7)},v=function(e){var t=6,n=0;while(--t>=0)n+=p[t],p[t]=l(n/e),n=n%e*1e7},b=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==p[e]){var n=String(p[e]);t=""===t?n:t+a.call("0",7-n.length)+n}return t};if(h<0||h>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(f="-",c=-c),c>1e-21)if(t=d(c*u(2,69,1))-69,n=t<0?c*u(2,-t,1):c/u(2,t,1),n*=4503599627370496,t=52-t,t>0){g(0,n),r=h;while(r>=7)g(1e7,0),r-=7;g(u(10,r,1),0),r=t-1;while(r>=23)v(1<<23),r-=23;v(1<<r),g(1,1),v(2),m=b()}else g(0,n),g(1<<-t,0),m=b()+a.call("0",h);return h>0?(s=m.length,m=f+(s<=h?"0."+a.call("0",h-s)+m:m.slice(0,s-h)+"."+m.slice(s-h))):m=f+m,m}})},b690:function(e,t,n){e.exports=n.p+"img/avatar-s-7.cb1b1e65.jpg"},bc96:function(e,t,n){"use strict";n("843a")},c614:function(e,t,n){},c740:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").findIndex,o=n("44d2"),a=n("ae40"),s="findIndex",c=!0,l=a(s);s in[]&&Array(1)[s]((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!l},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(s)},ca6e:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));n("5530"),n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n("a6f4"),n("a18c");var i=function(e){return"object"===r(e)&&null!==e},o=function(e){var t=new Date;return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}},cb50:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-container d-flex content align-items-center"},[n("ul",{staticClass:"nav navbar-nav d-xl-none"},[n("li",{staticClass:"nav-item"},[n("b-link",{staticClass:"nav-link",on:{click:e.toggleVerticalMenuActive}},[n("feather-icon",{attrs:{icon:"MenuIcon",size:"21"}})],1)],1)]),n("div",{staticClass:"bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"},[n("dark-Toggler",{staticClass:"d-none d-lg-block"})],1),n("b-navbar-nav",{staticClass:"nav align-items-center ml-auto"},[n("b-nav-item-dropdown",{staticClass:"dropdown-user",attrs:{right:"","toggle-class":"d-flex align-items-center dropdown-user-link"},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("div",{staticClass:"d-sm-flex d-none user-nav"},[n("p",{staticClass:"user-name font-weight-bolder mb-0"},[e._v(" "+e._s(e.accountForm.name)+" ")])]),n("b-avatar",{staticClass:"badge-minimal",attrs:{size:"40",variant:"light-primary",badge:"",src:e.accountForm.avatar_url,"badge-variant":"success"}})]},proxy:!0}])},[n("b-dropdown-item",{attrs:{"link-class":"d-flex align-items-center"},on:{click:e.logout}},[n("feather-icon",{staticClass:"mr-50",attrs:{size:"16",icon:"LogOutIcon"}}),n("span",[e._v("Logout")])],1)],1)],1)],1)},i=[],o=n("5530"),a=n("aa59"),s=n("042b"),c=n("ede5"),l=n("9eaa"),u=n("f47c"),d=n("e8a3"),h=n("9f5c"),p=n("2f62"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav-item-dropdown",{staticClass:"dropdown-language",attrs:{id:"dropdown-grouped",variant:"link",right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("b-img",{attrs:{src:e.currentCountry.flag_image,height:"14px",width:"22px",alt:e.currentCountry.name}}),n("span",{staticClass:"ml-50 font-weight-bold"},[e._v(e._s(e.currentCountry.name))])]},proxy:!0}])},e._l(e.countries,(function(t){return n("b-dropdown-item",{key:t.id,on:{click:function(n){return e.storeCountry(t)}}},[n("b-img",{attrs:{src:t.flag_image,height:"14px",width:"22px",alt:t.name}}),n("span",{staticClass:"ml-50"},[e._v(e._s(t.name))])],1)})),1)},m=[],g=n("1da1"),v=(n("96cf"),n("7db0"),n("b8f2")),b=n("bc3a"),y=n.n(b),k=n("a6f4"),A={computed:Object(o["a"])({},Object(p["b"])({currentCountry:"app/getCountry"})),setup:function(){var e=Object(k["ref"])([]),t=Object(v["a"])(),n=t.isRTL;return{countries:e,isRTL:n}},mounted:function(){this.getCountries()},methods:{getCountries:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("admin/countries").then((function(t){var n;200===t.status&&(e.countries=null===(n=t.data)||void 0===n?void 0:n.data.countries,e.storeCountry(e.countries.find((function(e){return 1===e.id}))))}));case 2:case"end":return t.stop()}}),t)})))()},storeCountry:function(e){this.$store.commit("app/setCountry",e)}}},w=A,I=n("2877"),_=Object(I["a"])(w,f,m,!1,null,null,null),C=_.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav-item-dropdown",{staticClass:"dropdown-notification mr-25",attrs:{"menu-class":"dropdown-menu-media",right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("feather-icon",{staticClass:"text-body",attrs:{badge:"3","badge-classes":"bg-danger",icon:"BellIcon",size:"21"}})]},proxy:!0}])},[n("li",{staticClass:"dropdown-menu-header"},[n("div",{staticClass:"dropdown-header d-flex"},[n("h4",{staticClass:"notification-title mb-0 mr-auto"},[e._v(" Notifications ")]),n("b-badge",{attrs:{pill:"",variant:"light-primary"}},[e._v(" 6 New ")])],1)]),e._m(0),n("li",{staticClass:"dropdown-menu-footer"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary",block:"",to:"/notifications"}},[e._v("Read all notifications")])],1)],1)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-perfect-scrollbar",{staticClass:"scrollable-container media-list scroll-area",attrs:{settings:e.perfectScrollbarSettings,tagname:"li"}},e._l(e.notifications,(function(t){return n("b-link",{key:t.subtitle},[n("b-media",{scopedSlots:e._u([{key:"aside",fn:function(){return[n("b-avatar",{attrs:{size:"32",src:t.avatar,text:t.avatar,variant:t.type}})]},proxy:!0}],null,!0)},[n("p",{staticClass:"media-heading"},[n("span",{staticClass:"font-weight-bolder"},[e._v(" "+e._s(t.title)+" ")])]),n("small",{staticClass:"notification-text"},[e._v(e._s(t.subtitle))])])],1)})),1)}],E=n("e98b"),O=n("34b6"),R=n("1947"),x=n("9d63"),N=n.n(x),B=n("e009"),M={components:{BNavItemDropdown:c["a"],BBadge:E["a"],BMedia:O["a"],BLink:a["a"],BAvatar:d["a"],VuePerfectScrollbar:N.a,BButton:R["a"]},directives:{Ripple:B["a"]},setup:function(){var e=[{title:"Congratulation Sam 🎉",avatar:n("73bb"),subtitle:"Won the monthly best seller badge",type:"light-success"},{title:"New message received",avatar:n("f8f8"),subtitle:"You have 10 unread messages",type:"light-info"},{title:"Revised Order 👋",avatar:"MD",subtitle:"MD Inc. order updated",type:"light-danger"}],t={maxScrollbarLength:60,wheelPropagation:!1};return{notifications:e,perfectScrollbarSettings:t}}},L=M,P=Object(I["a"])(L,S,T,!1,null,null,null),V=P.exports,j={components:{BLink:a["a"],BNavbarNav:s["a"],BNavItemDropdown:c["a"],BDropdownItem:l["a"],BDropdownDivider:u["a"],BAvatar:d["a"],countries:C,DarkToggler:h["a"],NotificationDropdown:V},props:{toggleVerticalMenuActive:{type:Function,default:function(){}}},data:function(){return{countries:{},country_id:1}},computed:Object(o["a"])({},Object(p["b"])({accountForm:"login/userInfo"})),mounted:function(){},methods:{logout:function(){localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("user_info"),this.$router.push({name:"login"})}}},D=j,U=(n("fd23"),Object(I["a"])(D,r,i,!1,null,"4263d0d6",null));t["a"]=U.exports},cee9:function(e,t,n){"use strict";t["a"]={pages:{key:"title",data:[{title:"Access Control",route:{name:"access-control"},icon:"ShieldIcon",isBookmarked:!1},{title:"Account Settings",route:{name:"pages-account-setting"},icon:"SettingsIcon",isBookmarked:!1},{title:"Advance Card",route:{name:"card-advance"},icon:"CreditCardIcon",isBookmarked:!1},{title:"Alerts",route:{name:"components-alert"},icon:"AlertTriangleIcon",isBookmarked:!1},{title:"Analytics Cards",route:{name:"card-analytic"},icon:"CreditCardIcon",isBookmarked:!1},{title:"Apex Chart",route:{name:"charts-apex-chart"},icon:"PieChartIcon",isBookmarked:!1},{title:"Aspect",route:{name:"components-aspect"},icon:"AirplayIcon",isBookmarked:!1},{title:"Auto Suggest",route:{name:"extensions-auto-suggest"},icon:"AlignLeftIcon",isBookmarked:!1},{title:"Avatar",route:{name:"components-avatar"},icon:"UserIcon",isBookmarked:!1},{title:"Badge",route:{name:"components-badge"},icon:"TagIcon",isBookmarked:!1},{title:"Basic Card",route:{name:"card-basic"},icon:"CreditCardIcon",isBookmarked:!1},{title:"Blog Detail",route:{name:"pages-blog-detail",params:{id:1}},icon:"FileTextIcon",isBookmarked:!1},{title:"Blog Edit",route:{name:"pages-blog-edit",params:{id:1}},icon:"FileTextIcon",isBookmarked:!1},{title:"Blog List",route:{name:"pages-blog-list"},icon:"FileTextIcon",isBookmarked:!1},{title:"Breadcrumb",route:{name:"components-breadcrumb"},icon:"HomeIcon",isBookmarked:!1},{title:"BS Table",route:{name:"table-bs-table"},icon:"GridIcon",isBookmarked:!1},{title:"Button Group",route:{name:"components-button-group"},icon:"BoldIcon",isBookmarked:!1},{title:"Button Toolbar",route:{name:"components-button-toolbar"},icon:"BoldIcon",isBookmarked:!1},{title:"Button",route:{name:"components-button"},icon:"BoldIcon",isBookmarked:!1},{title:"Calendar App",route:{name:"apps-calendar"},icon:"CalendarIcon",isBookmarked:!0},{title:"Calendar Component",route:{name:"components-calendar"},icon:"CalendarIcon",isBookmarked:!1},{title:"Card Actions",route:{name:"card-action"},icon:"CreditCardIcon",isBookmarked:!1},{title:"Carousel",route:{name:"components-carousel"},icon:"CopyIcon",isBookmarked:!1},{title:"Chartjs",route:{name:"charts-chartjs"},icon:"PieChartIcon",isBookmarked:!1},{title:"Chat",route:{name:"apps-chat"},icon:"MessageSquareIcon",isBookmarked:!0},{title:"Checkbox",route:{name:"forms-element-checkbox"},icon:"CheckSquareIcon",isBookmarked:!1},{title:"Checkout",route:{name:"apps-e-commerce-checkout"},icon:"DollarSignIcon",isBookmarked:!1},{title:"Clipboard",route:{name:"extensions-clipboard"},icon:"ClipboardIcon",isBookmarked:!1},{title:"Collapse",route:{name:"components-collapse"},icon:"PlusIcon",isBookmarked:!1},{title:"Colors",route:{name:"ui-colors"},icon:"DropletIcon",isBookmarked:!1},{title:"Coming Soon",route:{name:"misc-coming-soon"},icon:"ClockIcon",isBookmarked:!1},{title:"Context Menu",route:{name:"extensions-context-menu"},icon:"MoreVerticalIcon",isBookmarked:!1},{title:"Dashboard Analytics",route:{name:"dashboard-analytics"},icon:"ActivityIcon",isBookmarked:!1},{title:"Dashboard ECommerce",route:{name:"dashboard-ecommerce"},icon:"ShoppingCartIcon",isBookmarked:!1},{title:"Date Time Picker",route:{name:"extensions-date-time-picker"},icon:"ClockIcon",isBookmarked:!1},{title:"Drag & Drop",route:{name:"extensions-drag-and-drop"},icon:"CopyIcon",isBookmarked:!1},{title:"Dropdown",route:{name:"components-dropdown"},icon:"MoreHorizontalIcon",isBookmarked:!1},{title:"Echart",route:{name:"charts-echart"},icon:"PieChartIcon",isBookmarked:!1},{title:"Email",route:{name:"apps-email"},icon:"MailIcon",isBookmarked:!0},{title:"Embed",route:{name:"components-embed"},icon:"TvIcon",isBookmarked:!1},{title:"Error 404",route:{name:"error-404"},icon:"AlertTriangleIcon",isBookmarked:!1},{title:"Error",route:{name:"misc-error"},icon:"AlertTriangleIcon",isBookmarked:!1},{title:"FAQ",route:{name:"pages-faq"},icon:"HelpCircleIcon",isBookmarked:!1},{title:"Feather",route:{name:"ui-feather"},icon:"FeatherIcon",isBookmarked:!1},{title:"File Input",route:{name:"forms-element-file-input"},icon:"FileIcon",isBookmarked:!1},{title:"Forgot Password V1",route:{name:"auth-forgot-password-v1"},icon:"KeyIcon",isBookmarked:!1},{title:"Forgot Password V2",route:{name:"auth-forgot-password-v2"},icon:"KeyIcon",isBookmarked:!1},{title:"Form Datepicker",route:{name:"forms-element-datepicker"},icon:"ClockIcon",isBookmarked:!1},{title:"Form Layout",route:{name:"form-layout"},icon:"GridIcon",isBookmarked:!1},{title:"Form Rating",route:{name:"forms-element-rating"},icon:"StarIcon",isBookmarked:!1},{title:"Form Repeater",route:{name:"form-repeater"},icon:"StarIcon",isBookmarked:!1},{title:"Form Tag",route:{name:"forms-element-tag"},icon:"TagIcon",isBookmarked:!1},{title:"Form Timepicker",route:{name:"forms-element-timepicker"},icon:"ClockIcon",isBookmarked:!1},{title:"Form Validation",route:{name:"form-validation"},icon:"CheckCircleIcon",isBookmarked:!1},{title:"Form Wizard",route:{name:"form-wizard"},icon:"GitCommitIcon",isBookmarked:!1},{title:"Good Table",route:{name:"table-good-table"},icon:"GridIcon",isBookmarked:!1},{title:"I18n",route:{name:"extensions-i18n"},icon:"GlobeIcon",isBookmarked:!1},{title:"Image",route:{name:"components-image"},icon:"ImageIcon",isBookmarked:!1},{title:"Input Group",route:{name:"forms-element-input-group"},icon:"TypeIcon",isBookmarked:!1},{title:"Input Mask",route:{name:"forms-element-input-mask"},icon:"TypeIcon",isBookmarked:!1},{title:"Input",route:{name:"forms-element-input"},icon:"TypeIcon",isBookmarked:!1},{title:"Invoice Add",route:{name:"apps-invoice-add"},icon:"FileTextIcon",isBookmarked:!1},{title:"Invoice Edit",route:{name:"apps-invoice-edit",params:{id:4987}},icon:"FileTextIcon",isBookmarked:!1},{title:"Invoice List",route:{name:"apps-invoice-list"},icon:"FileTextIcon",isBookmarked:!1},{title:"Invoice Preview",route:{name:"apps-invoice-preview",params:{id:4987}},icon:"FileTextIcon",isBookmarked:!1},{title:"Knowledge Base Category",route:{name:"pages-knowledge-base-category"},icon:"InfoIcon",isBookmarked:!1},{title:"Knowledge Base Question",route:{name:"pages-knowledge-base-question"},icon:"InfoIcon",isBookmarked:!1},{title:"Knowledge Base",route:{name:"pages-knowledge-base"},icon:"InfoIcon",isBookmarked:!1},{title:"Leaflet",route:{name:"maps-leaflet"},icon:"MapPinIcon",isBookmarked:!1},{title:"List Group",route:{name:"components-list-group"},icon:"ListIcon",isBookmarked:!1},{title:"Login V1",route:{name:"auth-login-v1"},icon:"LogInIcon",isBookmarked:!1},{title:"Login V2",route:{name:"auth-login-v2"},icon:"LogInIcon",isBookmarked:!1},{title:"Media Objects",route:{name:"components-media"},icon:"ImageIcon",isBookmarked:!1},{title:"Modal",route:{name:"components-modal"},icon:"CopyIcon",isBookmarked:!1},{title:"Nav",route:{name:"components-nav"},icon:"CreditCardIcon",isBookmarked:!1},{title:"Not Authorized",route:{name:"misc-not-authorized"},icon:"XOctagonIcon",isBookmarked:!1},{title:"Overlay",route:{name:"components-overlay"},icon:"CopyIcon",isBookmarked:!1},{title:"Pagination Nav",route:{name:"components-pagination-nav"},icon:"HashIcon",isBookmarked:!1},{title:"Pagination",route:{name:"components-pagination"},icon:"HashIcon",isBookmarked:!1},{title:"Pill Badge",route:{name:"components-pill-badge"},icon:"TagIcon",isBookmarked:!1},{title:"Pill",route:{name:"components-pill"},icon:"TagIcon",isBookmarked:!1},{title:"Popover",route:{name:"components-popover"},icon:"TagIcon",isBookmarked:!1},{title:"Pricing",route:{name:"pages-pricing"},icon:"DollarSignIcon",isBookmarked:!1},{title:"Product Details",route:{name:"apps-e-commerce-product-details",params:{slug:"apple-watch-series-5-27"}},icon:"BoxIcon",isBookmarked:!1},{title:"Profile",route:{name:"pages-profile"},icon:"UserIcon",isBookmarked:!1},{title:"Progress",route:{name:"components-progress"},icon:"ChevronsRightIcon",isBookmarked:!1},{title:"Quill Editor",route:{name:"extensions-quill-editor"},icon:"TypeIcon",isBookmarked:!1},{title:"Radio",route:{name:"forms-element-radio"},icon:"DiscIcon",isBookmarked:!1},{title:"Register V1",route:{name:"auth-register-v1"},icon:"UserPlusIcon",isBookmarked:!1},{title:"Register V2",route:{name:"auth-register-v2"},icon:"UserPlusIcon",isBookmarked:!1},{title:"Reset Password V1",route:{name:"auth-reset-password-v1"},icon:"KeyIcon",isBookmarked:!1},{title:"Reset Password V2",route:{name:"auth-reset-password-v2"},icon:"KeyIcon",isBookmarked:!1},{title:"Select",route:{name:"forms-element-select"},icon:"AlignCenterIcon",isBookmarked:!1},{title:"Shop",route:{name:"apps-e-commerce-shop"},icon:"ArchiveIcon",isBookmarked:!1},{title:"Sidebar",route:{name:"components-sidebar"},icon:"SidebarIcon",isBookmarked:!1},{title:"Slider",route:{name:"extensions-slider"},icon:"GitCommitIcon",isBookmarked:!1},{title:"Spinbutton",route:{name:"forms-element-spinbutton"},icon:"TypeIcon",isBookmarked:!1},{title:"Spinner",route:{name:"components-spinner"},icon:"LoaderIcon",isBookmarked:!1},{title:"Statistics Cards",route:{name:"card-statistic"},icon:"CreditCardIcon",isBookmarked:!1},{title:"Sweet Alert",route:{name:"extensions-sweet-alert"},icon:"BellIcon",isBookmarked:!1},{title:"Swiper",route:{name:"extensions-swiper"},icon:"ImageIcon",isBookmarked:!1},{title:"Switch",route:{name:"forms-element-switch"},icon:"ToggleRightIcon",isBookmarked:!1},{title:"Tab",route:{name:"components-tab"},icon:"CreditCardIcon",isBookmarked:!1},{title:"Textarea",route:{name:"forms-element-textarea"},icon:"TypeIcon",isBookmarked:!1},{title:"Time",route:{name:"components-time"},icon:"ClockIcon",isBookmarked:!1},{title:"Timeline",route:{name:"components-timeline"},icon:"GitCommitIcon",isBookmarked:!1},{title:"Toastification",route:{name:"extensions-toastification"},icon:"BellIcon",isBookmarked:!1},{title:"Toasts",route:{name:"components-toasts"},icon:"BellIcon",isBookmarked:!1},{title:"Todo",route:{name:"apps-todo"},icon:"CheckSquareIcon",isBookmarked:!0},{title:"Tooltip",route:{name:"components-tooltip"},icon:"CopyIcon",isBookmarked:!1},{title:"Tour",route:{name:"extensions-tour"},icon:"GlobeIcon",isBookmarked:!1},{title:"Typography",route:{name:"ui-typography"},icon:"TypeIcon",isBookmarked:!1},{title:"Under Maintenance",route:{name:"misc-under-maintenance"},icon:"MonitorIcon",isBookmarked:!1},{title:"Users Edit",route:{name:"apps-users-edit",params:{id:21}},icon:"UserIcon",isBookmarked:!1},{title:"Users List",route:{name:"apps-users-list"},icon:"UserIcon",isBookmarked:!1},{title:"Users View",route:{name:"apps-users-view",params:{id:21}},icon:"UserIcon",isBookmarked:!1},{title:"Vue Select",route:{name:"extensions-vue-select"},icon:"AlignCenterIcon",isBookmarked:!1},{title:"Wishlist",route:{name:"apps-e-commerce-wishlist"},icon:"HeartIcon",isBookmarked:!1}]},files:{key:"file_name",data:[{file_name:"Joe's CV",from:"Stacy Watson",icon:n("493f"),size:"1.7 mb"},{file_name:"Passport Image",from:"Ben Sinitiere",icon:n("1568"),size:" 52 kb"},{file_name:"Questions",from:"Charleen Patti",icon:n("493f"),size:"1.5 gb"},{file_name:"Parenting Guide",from:"Doyle Blatteau",icon:n("493f"),size:"2.3 mb"},{file_name:"Class Notes",from:"Gwen Greenlow",icon:n("493f"),size:" 30 kb"},{file_name:"Class Attendance",from:"Tom Alred",icon:n("d75a"),size:"52 mb"},{file_name:"Company Salary",from:"Nellie Dezan",icon:n("d75a"),size:"29 mb"},{file_name:"Company Logo",from:"Steve Sheldon",icon:n("1568"),size:"1.3 mb"},{file_name:"Crime Rates",from:"Sherlock Holmes",icon:n("d75a"),size:"37 kb"},{file_name:"Ulysses",from:"Theresia Wrenne",icon:n("f35f"),size:"7.2 mb"},{file_name:"War and Peace",from:"Goldie Highnote",icon:n("f35f"),size:"10.5 mb"},{file_name:"Vedas",from:"Ajay Patel",icon:n("f35f"),size:"8.3 mb"},{file_name:"The Trial",from:"Sirena Linkert",icon:n("f35f"),size:"1.5 mb"}]},contacts:{key:"name",data:[{img:n("fbb2"),name:"Rena Brant",email:"nephrod@preany.co.uk",time:"21/05/2019"},{img:n("3423"),name:"Mariano Packard",email:"seek@sparaxis.org",time:"14/01/2018"},{img:n("63bb"),name:"Risa Montufar",email:"vagary@unblist.org",time:"10/08/2019"},{img:n("e4ed"),name:"Maragaret Cimo",email:"designed@insanely.net",time:"01/12/2019"},{img:n("b690"),name:"Jona Prattis",email:"unwieldable@unblist.org",time:"21/05/2019"},{img:n("9a5e"),name:"Edmond Chicon",email:"museist@anaphyte.co.uk",time:"15/11/2019"},{img:n("2565"),name:"Abbey Darden",email:"astema@defectively.co.uk",time:"07/05/2019"},{img:n("351c"),name:"Seema Moallankamp",email:"fernando@storkish.co.uk",time:"13/08/2017"},{img:n("3423"),name:"Charleen Warmington",email:"furphy@cannibal.net",time:"11/08/1891"},{img:n("2565"),name:"Geri Linch",email:"insignia@markab.org",time:"18/01/2015"},{img:n("d0db"),name:"Shellie Muster",email:"maxillary@equalize.co.uk",time:"26/07/2019"},{img:n("0160"),name:"Jesenia Vanbramer",email:"hypotony@phonetist.net",time:"12/09/2017"},{img:n("d0db"),name:"Mardell Channey",email:"peseta@myrica.com",time:"11/11/2019"}]}}},d0db:function(e,t,n){e.exports=n.p+"img/avatar-s-23.6128b34a.jpg"},d75a:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAACACAYAAADwKbyHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAACRZJREFUeJztnXlwVdUZwH/35GUlJJCwhBggEjZZS8ISsRQoKkWohrBYqxZaBxkQO7Y6ZRGk0ini1MGl1hHUdjrIvoOVsihUqNAQhGBIkS0hC2BISIkJJC8v7/YPhpibl5DkLfee8M7vv/ud7+b75v3y7j33vJcTjXpYvB9bRRHjNUjRdZIRxAqIqC+3pTJ82Cg0Tas51mFzpyulTwwefKzKin5E3cC8zfykopgMobFN05guBL3vNgn1ocGkyzERa9PTkwKtqP+9CB1t/iZe0XR2CehjRTNWY6WMGhHzN7MIeNXsBmTDKhkCYMFGxqEk1GCFDLF4P7ZqneVmFWwpmC1D2IuZIAS9zSjW0jBThgBSfF2kJWOWDKFDsi8L3A1oMOlSTPg6X8oQmpNYX/3wuwmBSPWlDIGgtS9+8N2IL2W4PFkr7oyvZCgRbuALGUqEm3hbhhLhAd6UoUR4iLdkKBFeQCBSr8S0Xu+JDCXCa2gTPZGhRHgV92UoEV7HPRlKhE9ovgwlwmc0T4YS4VOaLkOJ8Dm3ZGzInBJ0pywlwhS0iWFtrq67kwwlwjTuLMNvRei6bkHVhmX4rQiHw5JvVtKQDL8VcbPihoXVXWX4rYjvykot7sAow29FXLtWZHUL1JbhtyLKykopKy+zug1AmxgWWbTeb0XoQM7Fc1a3cQuNFL8VAXC9tIS8/Gyr2wD8+B5xm7z8HLJzzuF0Oi3tw2ZpdQnQgUtX8ii6VkhMx1jatokiNCQMIQJM7cPvRdzGbq8kNy+b3DxrLlV+f2mSBSVCEpQISVAiJEGJkAQlQhKUCElQIiRBiZAEJUISlAhJUCIkQYmQBCVCEpQISVAiJEGJkAQlQhKUCElQIiRBiZAEJUISlAhJUCIkQYmQBCVCEpQISWix331Niv8VY+57xRBbc2QK+SVHLerIM1qsiBBbBG3CuhpitoBgi7rxHHVpkgQlQhKUCElQIiRBiZCEFjtrcgdNE3SM6EvHiP60Cm5PgAjE7ijnfzcukl9ylPLKq5b1ZoqISUl/pVenRwyx3OLDrD6cio7rLjFRrRKYMfIAAeL7jb8qqq6z8sAIyioLm11faDaSE55jRM8XiQzt3GBeTtFBDp55g9OXd9bbly8xRcTerEX0vSeVkMDImlif2BQGdvk5J3JXG3I1NFKTPiQyNM4Q//TkS25JsAWE8FTyFnrGjGs0N77dCOLbjeB47iq2HHuGaqd5O9iYco8ovVnAzoxfu8THD3iLsKBoQ2zIvTPo1n6UIXYyfz0ZdYQ1lbH9XmuShNoM6vI0Y/stc6ueu5h2sz5xcRWnL+80xFoFt+ORAW/UHEeGxjGu1jHckrj9+Cy3LhWhQW1J7jbbENN1J8dzV7Htq5lsSp/O3lMLyb+WZsg5++1uDp4x9uFrTLtZ6+hs/WomLzz0Q0KD2tbEE7tO5/jFVVy4up+UxPcJthn/wcvG9GnctJe4VTOu7RAChHGzsD2nFvCvb143xA6cXsqQbs8yfsCb7M6cx+Hz76Lr5u5EYOr09buKy+w4McclnpK4gsT4X9IrZrwh/u+zb3K+8DO369WVClB685JLTEcn7cIK/rQrni/PvWO6BLDgOeJk3lpOFWwxxKLDuzMp6SND7NvSTHafWuBRrdIK1xd9wsC3SE6YTWhQlMuYO5MBb2G6CB2d7cdnUV7Z8MZV1U47G9KewlFd4VGtgpJjLnVCg6J49Ad/YeGEq8wafZiH+y0lvt0IhGbu3ht1seTJuqyykB0nZjc4vufUy1y+nuFxnWqnnX1Zi+od0zRB56hkRvWaz7Mjv2De+ALG9ltGq+D2Htd1B8uWOL7O38i5wr0u8cqqUg6ff9drddIurODz/y5pdNYVHtyRkb3m8tuHT9O9w4Neq99ULBPRLrwnXaMfcIkHB0bw4zqfvHmCjs6+rMW89/lQTl3ailN33DE/NCiKXwzfSUxkf6/10BQsEREgApk69GMCA8LqHR/Zcy5dou/3as2CknRWH05l6ScxrE97kqPZH1BcVv9WcraAEB7s8wev1m8MSxb9RvdeSFzbIQ2Oa5pgyuC/8+fPBmF3lHu19g17MRl5a8jIWwNAh4g+JHebTXLCc4a8Hh0fQtOEaVNZ098RnaOSGdX7ZUPsXOE+TuavN8Siw3t4dZmh9gJibQpLs9hxYo7LmldgQBhBtnCv1W8MU0UE2cJ5fOjHhqmi3VHO1mMz+EfGC1RUXTfk358wh4QOYzyum9BhDC+OPcuAuMcbzKm9IAng1Kupcpi3W7Kpl6bxA5YT1SrBENudOY+SGzkA/DNzLimD3jeMTx78N97e299FUlOwBYQwtu9SHujxGwB+NmwdAzo/QdalbRSVncHprCIi9B76x02ld6cJhnMLStIbvbF7E9NE3NfpUYbcO8MQyyk6xJEL79UcH83+gMQu0ww36sjQzkwY+Dab0qc3u+aPev6uRsJt+sQ+Rp/Yxxo999DZ5c2u5wmmXJrCgzuSmvShIeaormDLsWcMN0Ndd7Lt+EyX38TErtOa9OLV5YtvXiezYHOzzzt0djmZ+RubfZ4n+FyEhsakwR+5PLHuy1pMUdkZl/wr17+udwk6JXFls596Hc5K1h6ZwoajT1NYmtVofkl5NuvTnmTXyZdM/4ROm7/JtxU1TRBsi3CJVzpKG5waCs1W74ylqvoG1U47ADYRjC0g1DBud5Q1eF3X0GjXuhddoocTHd6dsKBobCKISkcZJeXZXCz+kvySNEtWXsEEEYqmob5OIwlKhCQoEZKgREiCEiEJSoQkKBGSoERIghIhCUqEJCgRkqBESIISIQlKhCQoEZKgREiCEiEJSoQkKBGSoERIghIhCUqEJCgRkqBESIISIQnCCXarm/B7nFQK4STf6j78HkGe0AVpjWcqfMx/hKbR/D8gUHgVp8ZmUVzEdpxcsLoZf0V3cjYkip1i5UyqdMHzVjfkt2jMeXU0DgGwbDKfovNHq3vyN3SdJcumsAdqPUe8NplFSoZ56DpLlk3m97ePtboJCzYyTtd4B+huZmN+g84ZHZ6//U64jYsIgMX7sVVc46dCZxIwDCedEbTcreitxEmlDrmaxhEnbL6g88nGqVTXTfs/hWz5HgEECPQAAAAASUVORK5CYII="},d81d:function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").map,o=n("1dde"),a=n("ae40"),s=o("map"),c=a("map");r({target:"Array",proto:!0,forced:!s||!c},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},dddd:function(e,t,n){"use strict";n("2ca06")},e009:function(e,t,n){"use strict";var r={bind:function(e,t){var n={event:"mousedown",transition:600};i(Object.keys(t.modifiers),n),e.addEventListener(n.event,(function(n){s(n,e,t.value)}));var o=t.value||r.color||"rgba(0, 0, 0, 0.35)",a=r.zIndex||"9999";function s(e,t){var r=t,i=parseInt(getComputedStyle(r).borderWidth.replace("px","")),s=r.getBoundingClientRect(),c=s.left,l=s.top,u=r.offsetWidth,d=r.offsetHeight,h=e.clientX-c,p=e.clientY-l,f=Math.max(h,u-h),m=Math.max(p,d-p),g=window.getComputedStyle(r),v=Math.sqrt(f*f+m*m),b=i>0?i:0,y=document.createElement("div"),k=document.createElement("div");k.className="ripple-container",y.className="ripple",y.style.marginTop="0px",y.style.marginLeft="0px",y.style.width="1px",y.style.height="1px",y.style.transition="all "+n.transition+"ms cubic-bezier(0.4, 0, 0.2, 1)",y.style.borderRadius="50%",y.style.pointerEvents="none",y.style.position="relative",y.style.zIndex=a,y.style.backgroundColor=o,k.style.position="absolute",k.style.left=0-b+"px",k.style.top=0-b+"px",k.style.height="0",k.style.width="0",k.style.pointerEvents="none",k.style.overflow="hidden";var A=r.style.position.length>0?r.style.position:getComputedStyle(r).position;function w(){setTimeout((function(){y.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((function(){k.parentNode.removeChild(k)}),850),t.removeEventListener("mouseup",w,!1),setTimeout((function(){for(var e=!0,t=0;t<r.childNodes.length;t++)"ripple-container"===r.childNodes[t].className&&(e=!1);e&&(r.style.position="static"!==A?A:"")}),n.transition+250)}"relative"!==A&&(r.style.position="relative"),k.appendChild(y),r.appendChild(k),y.style.marginLeft=h+"px",y.style.marginTop=p+"px",k.style.width=u+"px",k.style.height=d+"px",k.style.borderTopLeftRadius=g.borderTopLeftRadius,k.style.borderTopRightRadius=g.borderTopRightRadius,k.style.borderBottomLeftRadius=g.borderBottomLeftRadius,k.style.borderBottomRightRadius=g.borderBottomRightRadius,k.style.direction="ltr",setTimeout((function(){y.style.width=2*v+"px",y.style.height=2*v+"px",y.style.marginLeft=h-v+"px",y.style.marginTop=p-v+"px"}),0),"mousedown"===e.type?t.addEventListener("mouseup",w,!1):w()}}};function i(e,t){e.forEach((function(e){isNaN(Number(e))?t.event=e:t.transition=e}))}t["a"]=r},e08f:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-content content",class:[{"show-overlay":e.$store.state.app.shallShowOverlay},e.$route.meta.contentClass]},[n("div",{staticClass:"content-overlay"}),n("div",{staticClass:"header-navbar-shadow"}),n("transition",{attrs:{name:e.routerTransition,mode:"out-in"}},[n("div",{staticClass:"content-area-wrapper",class:"boxed"===e.contentWidth?"container p-0":null},[e._t("breadcrumb",(function(){return[n("app-breadcrumb")]})),n("portal-target",{attrs:{name:"content-renderer-sidebar-left",slim:""}}),n("div",{staticClass:"content-right"},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"content-body"},[e._t("default")],2)])])],2)])],1)},i=[],o=n("3033"),a=n("b8f2"),s={components:{AppBreadcrumb:o["a"]},setup:function(){var e=Object(a["a"])(),t=e.routerTransition,n=e.contentWidth;return{routerTransition:t,contentWidth:n}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,i,!1,null,null,null);t["a"]=u.exports},e180:function(e,t,n){"use strict";n("2c69")},e2f5:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav-item-dropdown",{staticClass:"dropdown-language",attrs:{id:"dropdown-grouped",variant:"link",right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("b-img",{attrs:{src:e.currentLocale.img,height:"14px",width:"22px",alt:e.currentLocale.locale}}),n("span",{staticClass:"ml-50 text-body"},[e._v(e._s(e.currentLocale.name))])]},proxy:!0}])},e._l(e.locales,(function(t){return n("b-dropdown-item",{key:t.locale,on:{click:function(n){e.$i18n.locale=t.locale}}},[n("b-img",{attrs:{src:t.img,height:"14px",width:"22px",alt:t.locale}}),n("span",{staticClass:"ml-50"},[e._v(e._s(t.name))])],1)})),1)},i=[],o=(n("7db0"),n("ede5")),a=n("9eaa"),s=n("4918"),c={components:{BNavItemDropdown:o["a"],BDropdownItem:a["a"],BImg:s["a"]},computed:{currentLocale:function(){var e=this;return this.locales.find((function(t){return t.locale===e.$i18n.locale}))}},setup:function(){var e=[{locale:"en",img:n("9996"),name:"English"},{locale:"fr",img:n("26fc"),name:"French"},{locale:"de",img:n("72fe"),name:"German"},{locale:"pt",img:n("5e3c"),name:"Portuguese"}];return{locales:e}}},l=c,u=n("2877"),d=Object(u["a"])(l,r,i,!1,null,null,null);t["a"]=d.exports},e4ed:function(e,t,n){e.exports=n.p+"img/avatar-s-15.d50eb9cb.jpg"},eef9:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-nav-item-dropdown",{staticClass:"dropdown-user",attrs:{right:"","toggle-class":"d-flex align-items-center dropdown-user-link"},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("div",{staticClass:"d-sm-flex d-none user-nav"},[n("p",{staticClass:"user-name font-weight-bolder mb-0"},[e._v(" "+e._s(e.userData.fullName||e.userData.username)+" ")]),n("span",{staticClass:"user-status"},[e._v(e._s(e.userData.role))])]),n("b-avatar",{staticClass:"badge-minimal",attrs:{size:"40",src:e.userData.avatar,variant:"light-primary",badge:"","badge-variant":"success"}},[e.userData.fullName?e._e():n("feather-icon",{attrs:{icon:"UserIcon",size:"22"}})],1)]},proxy:!0}])},[n("b-dropdown-item",{attrs:{to:{name:"pages-profile"},"link-class":"d-flex align-items-center"}},[n("feather-icon",{staticClass:"mr-50",attrs:{size:"16",icon:"UserIcon"}}),n("span",[e._v("Profile")])],1),n("b-dropdown-item",{attrs:{to:{name:"apps-email"},"link-class":"d-flex align-items-center"}},[n("feather-icon",{staticClass:"mr-50",attrs:{size:"16",icon:"MailIcon"}}),n("span",[e._v("Inbox")])],1),n("b-dropdown-item",{attrs:{to:{name:"apps-todo"},"link-class":"d-flex align-items-center"}},[n("feather-icon",{staticClass:"mr-50",attrs:{size:"16",icon:"CheckSquareIcon"}}),n("span",[e._v("Task")])],1),n("b-dropdown-item",{attrs:{to:{name:"apps-chat"},"link-class":"d-flex align-items-center"}},[n("feather-icon",{staticClass:"mr-50",attrs:{size:"16",icon:"MessageSquareIcon"}}),n("span",[e._v("Chat")])],1),n("b-dropdown-divider"),n("b-dropdown-item",{attrs:{to:{name:"pages-account-setting"},"link-class":"d-flex align-items-center"}},[n("feather-icon",{staticClass:"mr-50",attrs:{size:"16",icon:"SettingsIcon"}}),n("span",[e._v("Settings")])],1),n("b-dropdown-item",{attrs:{to:{name:"pages-pricing"},"link-class":"d-flex align-items-center"}},[n("feather-icon",{staticClass:"mr-50",attrs:{size:"16",icon:"CreditCardIcon"}}),n("span",[e._v("Pricing")])],1),n("b-dropdown-item",{attrs:{to:{name:"pages-faq"},"link-class":"d-flex align-items-center"}},[n("feather-icon",{staticClass:"mr-50",attrs:{size:"16",icon:"HelpCircleIcon"}}),n("span",[e._v("FAQ")])],1),n("b-dropdown-item",{attrs:{"link-class":"d-flex align-items-center"},on:{click:e.logout}},[n("feather-icon",{staticClass:"mr-50",attrs:{size:"16",icon:"LogOutIcon"}}),n("span",[e._v("Logout")])],1)],1)},i=[],o=n("a8e9"),a=n("9ab4"),s=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),c="[DEFAULT]",l=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new o["a"];if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(d(e))try{this.getOrInitializeService({instanceIdentifier:c})}catch(p){}try{for(var r=Object(a["h"])(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=Object(a["e"])(i.value,2),s=o[0],l=o[1],u=this.normalizeInstanceIdentifier(s);try{var h=this.getOrInitializeService({instanceIdentifier:u});l.resolve(h)}catch(p){}}}catch(f){t={error:f}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=c),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Object(a["b"])(this,void 0,void 0,(function(){var e;return Object(a["d"])(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Object(a["g"])(Object(a["g"])([],Object(a["e"])(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Object(a["e"])(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=c),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=c),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var s=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var c=Object(a["h"])(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var u=Object(a["e"])(l.value,2),d=u[0],h=u[1],p=this.normalizeInstanceIdentifier(d);o===p&&h.resolve(s)}}catch(f){t={error:f}}finally{try{l&&!l.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}return s},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var o=Object(a["h"])(i),s=o.next();!s.done;s=o.next()){var c=s.value;try{c(e,t)}catch(l){}}}catch(u){n={error:u}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,n=e.options,r=void 0===n?{}:n,i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:u(t),options:r}),this.instances.set(t,i),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(o){}return i||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=c),this.component?this.component.multipleInstances?e:c:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();function u(e){return e===c?void 0:e}function d(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */(function(){function e(e){this.name=e,this.providers=new Map}e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new l(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())}})();function p(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var f,m=[];(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(f||(f={}));var g={debug:f.DEBUG,verbose:f.VERBOSE,info:f.INFO,warn:f.WARN,error:f.ERROR,silent:f.SILENT},v=f.INFO,b=(h={},h[f.DEBUG]="log",h[f.VERBOSE]="log",h[f.INFO]="info",h[f.WARN]="warn",h[f.ERROR]="error",h),y=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=b[t];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[o].apply(console,p(["["+i+"]  "+e.name+":"],n))}},k=function(){function e(e){this.name=e,this._logLevel=v,this._logHandler=y,this._userLogHandler=null,m.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in f))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"===typeof e?g[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,p([this,f.DEBUG],e)),this._logHandler.apply(this,p([this,f.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,p([this,f.VERBOSE],e)),this._logHandler.apply(this,p([this,f.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,p([this,f.INFO],e)),this._logHandler.apply(this,p([this,f.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,p([this,f.WARN],e)),this._logHandler.apply(this,p([this,f.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,p([this,f.ERROR],e)),this._logHandler.apply(this,p([this,f.ERROR],e))},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(w(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function w(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const I="@firebase/app",_="0.7.0",C=new k("@firebase/app"),S="@firebase/app-compat",T="@firebase/analytics-compat",E="@firebase/analytics",O="@firebase/app-check-compat",R="@firebase/app-check",x="@firebase/auth",N="@firebase/auth-compat",B="@firebase/database",M="@firebase/database-compat",L="@firebase/functions",P="@firebase/functions-compat",V="@firebase/installations",j="@firebase/installations-compat",D="@firebase/messaging",U="@firebase/messaging-compat",F="@firebase/performance",W="@firebase/performance-compat",H="@firebase/remote-config",z="@firebase/remote-config-compat",X="@firebase/storage",G="@firebase/storage-compat",Y="@firebase/firestore",Q="@firebase/firestore-compat",K="firebase",q="9.0.0",J="[DEFAULT]",Z={[I]:"fire-core",[S]:"fire-core-compat",[E]:"fire-analytics",[T]:"fire-analytics-compat",[R]:"fire-app-check",[O]:"fire-app-check-compat",[x]:"fire-auth",[N]:"fire-auth-compat",[B]:"fire-rtdb",[M]:"fire-rtdb-compat",[L]:"fire-fn",[P]:"fire-fn-compat",[V]:"fire-iid",[j]:"fire-iid-compat",[D]:"fire-fcm",[U]:"fire-fcm-compat",[F]:"fire-perf",[W]:"fire-perf-compat",[H]:"fire-rc",[z]:"fire-rc-compat",[X]:"fire-gcs",[G]:"fire-gcs-compat",[Y]:"fire-fst",[Q]:"fire-fst-compat","fire-js":"fire-js",[K]:"fire-js-all"},$=new Map,ee=new Map;function te(e,t){try{e.container.addComponent(t)}catch(n){C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ne(e){const t=e.name;if(ee.has(t))return C.debug(`There were multiple attempts to register component ${t}.`),!1;ee.set(t,e);for(const n of $.values())te(n,e);return!0}function re(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ie={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},oe=new o["b"]("app","Firebase",ie);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ae=q;function se(e=J){const t=$.get(e);if(!t)throw oe.create("no-app",{appName:e});return t}function ce(e,t,n){var r;let i=null!==(r=Z[e])&&void 0!==r?r:e;n&&(i+="-"+n);const o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void C.warn(e.join(" "))}ne(new s(i+"-version",()=>({library:i,version:t}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(e){ne(new s("platform-logger",e=>new A(e),"PRIVATE")),ce(I,_,e),ce("fire-js","")}le();function ue(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const de=new o["b"]("auth","Firebase",ue()),he=new k("@firebase/auth");function pe(e,...t){he.logLevel<=f.ERROR&&he.error(`Auth (${ae}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e,...t){throw ge(e,...t)}function me(e,...t){return ge(e,...t)}function ge(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return de.create(e,...t)}function ve(e,t,...n){if(!e)throw ge(t,...n)}function be(e){const t="INTERNAL ASSERTION FAILED: "+e;throw pe(t),new Error(t)}function ye(e,t){e||be(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=new Map;function Ae(e){ye(e instanceof Function,"Expected a class definition");let t=ke.get(e);return t?(ye(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ke.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,t){const n=re(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),r=n.getOptions();if(Object(o["f"])(r,null!==t&&void 0!==t?t:{}))return e;fe(e,"already-initialized")}const r=n.initialize({options:t});return r}function Ie(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ae);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ce(){return"http:"===Se()||"https:"===Se()}function Se(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(Ce()||Object(o["j"])()||"connection"in navigator))||navigator.onLine}function Ee(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.shortDelay=e,this.longDelay=t,ye(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(o["m"])()||Object(o["n"])()}get(){return Te()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t){ye(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded"},Be=new Oe(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Le(e,t,n,r,i={}){return Pe(e,i,()=>{let i={},a={};r&&("GET"===t?a=r:i={body:JSON.stringify(r)});const s=Object(o["o"])(Object.assign({key:e.config.apiKey},a)).slice(1),c=new(xe.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),xe.fetch()(je(e,e.config.apiHost,n,s),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Pe(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ne),t);try{const t=new De(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ue(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const t=i.ok?o.errorMessage:o.error.message,n=t.split(" : ")[0];if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ue(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw Ue(e,"email-already-in-use",o);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");fe(e,a)}}catch(i){if(i instanceof o["c"])throw i;fe(e,"network-request-failed")}}async function Ve(e,t,n,r,i={}){const o=await Le(e,t,n,r,i);return"mfaPendingCredential"in o&&fe(e,"multi-factor-auth-required",{serverResponse:o}),o}function je(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Re(e.config,i):`${e.config.apiScheme}://${i}`}class De{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(me(this.auth,"timeout")),Be.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ue(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=me(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return Le(e,"POST","/v1/accounts:delete",t)}async function We(e,t){return Le(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(e,t=!1){const n=Object(o["h"])(e),r=await n.getIdToken(t),i=Ge(r);ve(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"===typeof i.firebase?i.firebase:void 0,s=null===a||void 0===a?void 0:a["sign_in_provider"];return{claims:i,token:r,authTime:He(Xe(i.auth_time)),issuedAtTime:He(Xe(i.iat)),expirationTime:He(Xe(i.exp)),signInProvider:s||null,signInSecondFactor:(null===a||void 0===a?void 0:a["sign_in_second_factor"])||null}}function Xe(e){return 1e3*Number(e)}function Ge(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return pe("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(o["d"])(n);return e?JSON.parse(e):(pe("Failed to decode base64 JWT payload"),null)}catch(i){return pe("Caught error parsing JWT payload as JSON",i),null}}function Ye(e){const t=Ge(e);return ve(t,"internal-error"),ve("undefined"!==typeof t.exp,"internal-error"),ve("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof o["c"]&&Ke(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Ke({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=He(this.lastLoginAt),this.creationTime=He(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Qe(e,We(n,{idToken:r}));ve(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?tt(o.providerUserInfo):[],s=et(e.providerData,a),c=e.isAnonymous,l=!(e.email&&o.passwordHash)&&!(null===s||void 0===s?void 0:s.length),u=!!c&&l,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Je(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function $e(e){const t=Object(o["h"])(e);await Ze(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function et(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function tt(e){return e.map(e=>{var{providerId:t}=e,n=Object(a["f"])(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){const n=await Pe(e,{},()=>{const n=Object(o["o"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=je(e,r,"/v1/token","key="+i);return xe.fetch()(a,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve("undefined"!==typeof e.idToken,"internal-error"),ve("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Ye(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ve(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await nt(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new rt;return n&&(ve("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(ve("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(ve("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return be("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e,t){ve("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ot{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Object(a["f"])(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new qe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Je(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Qe(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ze(this,e)}reload(){return $e(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ze(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Qe(this,Fe(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,a,s,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,f=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:y,isAnonymous:k,providerData:A,stsTokenManager:w}=t;ve(b&&w,e,"internal-error");const I=rt.fromJSON(this.name,w);ve("string"===typeof b,e,"internal-error"),it(u,e.name),it(d,e.name),ve("boolean"===typeof y,e,"internal-error"),ve("boolean"===typeof k,e,"internal-error"),it(h,e.name),it(p,e.name),it(f,e.name),it(m,e.name),it(g,e.name),it(v,e.name);const _=new ot({uid:b,auth:e,email:d,emailVerified:y,displayName:u,isAnonymous:k,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:I,createdAt:g,lastLoginAt:v});return A&&Array.isArray(A)&&(_.providerData=A.map(e=>Object.assign({},e))),m&&(_._redirectEventId=m),_}static async _fromIdTokenResponse(e,t,n=!1){const r=new rt;r.updateFromServerResponse(t);const i=new ot({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Ze(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}at.type="NONE";const st=at;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,t,n){return`firebase:${e}:${t}:${n}`}class lt{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ct(this.userKey,r.apiKey,i),this.fullPersistenceKey=ct("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new lt(Ae(st),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||Ae(st);const o=ct(n,e.config.apiKey,e.name);let a=null;for(const l of t)try{const t=await l._get(o);if(t){const n=ot._fromJSON(e,t);l!==i&&(a=n),i=l;break}}catch(c){}const s=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&s.length?(i=s[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new lt(i,e,n)):new lt(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ft(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(dt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gt(t))return"Blackberry";if(vt(t))return"Webos";if(ht(t))return"Safari";if((t.includes("chrome/")||pt(t))&&!t.includes("edge/"))return"Chrome";if(mt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function dt(e=Object(o["i"])()){return/firefox\//i.test(e)}function ht(e=Object(o["i"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pt(e=Object(o["i"])()){return/crios\//i.test(e)}function ft(e=Object(o["i"])()){return/iemobile/i.test(e)}function mt(e=Object(o["i"])()){return/android/i.test(e)}function gt(e=Object(o["i"])()){return/blackberry/i.test(e)}function vt(e=Object(o["i"])()){return/webos/i.test(e)}function bt(e=Object(o["i"])()){return/iphone|ipad|ipod/i.test(e)}function yt(e=Object(o["i"])()){var t;return bt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function kt(){return Object(o["l"])()&&10===document.documentMode}function At(e=Object(o["i"])()){return bt(e)||mt(e)||vt(e)||gt(e)||/windows phone/i.test(e)||ft(e)}function wt(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(e,t=[]){let n;switch(e){case"Browser":n=ut(Object(o["i"])());break;case"Worker":n=`${ut(Object(o["i"])())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ae}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new St(this),this.idTokenSubscription=new St(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=de,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ae(t)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await lt.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ze(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ee()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(o["h"])(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new o["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ae(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[Ae(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ve(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=It(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Ct(e){return Object(o["h"])(e)}class St{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(o["e"])(e=>this.observer=e)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return be("not implemented")}_getIdTokenResponse(e){return be("not implemented")}_linkToIdToken(e,t){return be("not implemented")}_getReauthenticationResolver(e){return be("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(e,t){return Le(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(e,t){return Ve(e,"POST","/v1/accounts:signInWithPassword",Me(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rt(e,t){return Ve(e,"POST","/v1/accounts:signInWithEmailLink",Me(e,t))}async function xt(e,t){return Ve(e,"POST","/v1/accounts:signInWithEmailLink",Me(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Tt{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Nt(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Nt(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ot(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Rt(e,{email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Et(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xt(e,{idToken:t,email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(e,t){return Ve(e,"POST","/v1/accounts:signInWithIdp",Me(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="http://localhost";class Lt extends Tt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Object(a["f"])(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Lt(n,r);return Object.assign(o,i),o}_getIdTokenResponse(e){const t=this.buildRequest();return Bt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Bt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bt(e,t)}buildRequest(){const e={requestUri:Mt,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(o["o"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t){return Le(e,"POST","/v1/accounts:sendVerificationCode",Me(e,t))}async function Vt(e,t){return Ve(e,"POST","/v1/accounts:signInWithPhoneNumber",Me(e,t))}async function jt(e,t){const n=await Ve(e,"POST","/v1/accounts:signInWithPhoneNumber",Me(e,t));if(n.temporaryProof)throw Ue(e,"account-exists-with-different-credential",n);return n}const Dt={["USER_NOT_FOUND"]:"user-not-found"};async function Ut(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Ve(e,"POST","/v1/accounts:signInWithPhoneNumber",Me(e,n),Dt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Tt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ft({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ft({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Vt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return jt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ut(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ft({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ht(e){const t=Object(o["p"])(Object(o["g"])(e))["link"],n=t?Object(o["p"])(Object(o["g"])(t))["deep_link_id"]:null,r=Object(o["p"])(Object(o["g"])(e))["deep_link_id"],i=r?Object(o["p"])(Object(o["g"])(r))["link"]:null;return i||r||n||t||e}class zt{constructor(e){var t,n,r,i,a,s;const c=Object(o["p"])(Object(o["g"])(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=Wt(null!==(r=c["mode"])&&void 0!==r?r:null);ve(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=null!==(i=c["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(a=c["languageCode"])&&void 0!==a?a:null,this.tenantId=null!==(s=c["tenantId"])&&void 0!==s?s:null}static parseLink(e){const t=Ht(e);try{return new zt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt{constructor(){this.providerId=Xt.PROVIDER_ID}static credential(e,t){return Nt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=zt.parseLink(t);return ve(n,"argument-error"),Nt._fromEmailAndCode(e,n.code,n.tenantId)}}Xt.PROVIDER_ID="password",Xt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Gt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends Yt{constructor(){super("facebook.com")}static credential(e){return Lt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch(t){return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Qt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kt extends Yt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Lt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Kt.credential(t,n)}catch(r){return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com",Kt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt extends Yt{constructor(){super("github.com")}static credential(e){return Lt._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch(t){return null}}}qt.GITHUB_SIGN_IN_METHOD="github.com",qt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jt extends Yt{constructor(){super("twitter.com")}static credential(e,t){return Lt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Jt.credential(t,n)}catch(r){return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com",Jt.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ot._fromIdTokenResponse(e,n,r),o=$t(n),a=new Zt({user:i,providerId:o,_tokenResponse:n,operationType:t});return a}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=$t(n);return new Zt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function $t(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en extends o["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,en.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new en(e,t,n,r)}}function tn(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw en._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,t,n=!1){const r=await Qe(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Zt._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function rn(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await Qe(e,tn(r,i,t,e),n);ve(o.idToken,r,"internal-error");const a=Ge(o.idToken);ve(a,r,"internal-error");const{sub:s}=a;return ve(e.uid===s,r,"user-mismatch"),Zt._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&fe(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(e,t,n=!1){const r="signIn",i=await tn(e,r,t),o=await Zt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function an(e){return Object(o["h"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(e,t){return Le(e,"POST","/v2/accounts/mfaEnrollment:start",Object.assign({tenantId:e.tenantId},t))}new WeakMap;const cn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(cn,"1"),this.storage.removeItem(cn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){const e=Object(o["i"])();return ht(e)||bt(e)}const dn=1e3,hn=10;class pn extends ln{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=un()&&wt(),this.fallbackToPolling=At(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);kt()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,hn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},dn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pn.type="LOCAL";const fn=pn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ln{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mn.type="SESSION";const gn=mn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new bn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async e=>e(t.origin,i)),s=await vn(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.receivers=[];class kn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,s)=>{const c=yn("",20);r.port1.start();const l=setTimeout(()=>{s(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(l),clearTimeout(i),s(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function wn(e){An().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return"undefined"!==typeof An()["WorkerGlobalScope"]&&"function"===typeof An()["importScripts"]}async function _n(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Cn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Sn(){return In()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn="firebaseLocalStorageDb",En=1,On="firebaseLocalStorage",Rn="fbase_key";class xn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nn(e,t){return e.transaction([On],t?"readwrite":"readonly").objectStore(On)}function Bn(){const e=indexedDB.deleteDatabase(Tn);return new xn(e).toPromise()}function Mn(){const e=indexedDB.open(Tn,En);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(On,{keyPath:Rn})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(On)?t(n):(n.close(),await Bn(),t(await Mn()))})})}async function Ln(e,t,n){const r=Nn(e,!0).put({[Rn]:t,value:n});return new xn(r).toPromise()}async function Pn(e,t){const n=Nn(e,!1).get(t),r=await new xn(n).toPromise();return void 0===r?null:r.value}function Vn(e,t){const n=Nn(e,!0).delete(t);return new xn(n).toPromise()}const jn=800,Dn=3;class Un{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Mn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Dn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return In()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bn._getInstance(Sn()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _n(),!this.activeServiceWorker)return;this.sender=new kn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Cn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mn();return await Ln(e,cn,"1"),await Vn(e,cn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ln(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Pn(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vn(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Nn(e,!1).getAll();return new xn(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Un.type="LOCAL";const Fn=Un;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(e,t){return Le(e,"POST","/v2/accounts/mfaSignIn:start",Object.assign({tenantId:e.tenantId},t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function zn(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=me("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Hn().appendChild(r)})}function Xn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Xn("rcb"),new Oe(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gn="recaptcha";async function Yn(e,t,n){var r;const i=await n.verify();try{let o;if(ve("string"===typeof i,e,"argument-error"),ve(n.type===Gn,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){ve("enroll"===t.type,e,"internal-error");const n=await sn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{ve("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;ve(n,e,"missing-multi-factor-info");const a=await Wn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Pt(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qn{constructor(e){this.providerId=Qn.PROVIDER_ID,this.auth=Ct(e)}verifyPhoneNumber(e,t){return Yn(this.auth,e,Object(o["h"])(t))}static credential(e,t){return Ft._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Qn.credentialFromTaggedObject(t)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ft._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kn(e,t){return t?Ae(t):(ve(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn.PROVIDER_ID="phone",Qn.PHONE_SIGN_IN_METHOD="phone";class qn extends Tt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Jn(e){return on(e.auth,new qn(e),e.bypassAuthState)}function Zn(e){const{auth:t,user:n}=e;return ve(n,t,"internal-error"),rn(n,new qn(e),e.bypassAuthState)}async function $n(e){const{auth:t,user:n}=e;return ve(n,t,"internal-error"),nn(n,new qn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jn;case"linkViaPopup":case"linkViaRedirect":return $n;case"reauthViaPopup":case"reauthViaRedirect":return Zn;default:fe(this.auth,"internal-error")}}resolve(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Oe(2e3,1e4);class nr extends er{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){ye(1===this.filter.length,"Popup operations only handle one event");const e=yn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,tr.get())};e()}}nr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rr="pendingRedirect",ir=new Map;class or extends er{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ir.get(this.auth._key());if(!e){try{const t=await ar(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ir.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function ar(e,t){const n=cr(t),r="true"===await sr(e)._get(n);return await sr(e)._remove(n),r}function sr(e){return Ae(e._redirectPersistence)}function cr(e){return ct(rr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(e,t,n=!1){const r=Ct(e),i=Kn(r,t),o=new or(r,i,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ur=6e5;class dr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!pr(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(me(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ur&&this.cachedEventUids.clear(),this.cachedEventUids.has(hr(e))}saveEventToCache(e){this.cachedEventUids.add(hr(e)),this.lastProcessedEventTime=Date.now()}}function hr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function pr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function fr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(e,t={}){return Le(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vr=/^https?/;async function br(e){if(e.config.emulator)return;const{authorizedDomains:t}=await mr(e);for(const r of t)try{if(yr(r))return}catch(n){}fe(e,"unauthorized-domain")}function yr(e){const t=_e(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!vr.test(n))return!1;if(gr.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Oe(3e4,6e4);function Ar(){const e=An().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function wr(e){return new Promise((t,n)=>{var r,i,o;function a(){Ar(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ar(),n(me(e,"network-request-failed"))},timeout:kr.get()})}if(null===(i=null===(r=An().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=An().gapi)||void 0===o?void 0:o.load)){const t=Xn("iframefcb");return An()[t]=()=>{gapi.load?a():n(me(e,"network-request-failed"))},zn("https://apis.google.com/js/api.js?onload="+t)}a()}}).catch(e=>{throw Ir=null,e})}let Ir=null;function _r(e){return Ir=Ir||wr(e),Ir}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Oe(5e3,15e3),Sr="__/auth/iframe",Tr="emulator/auth/iframe",Er={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Or=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rr(e){const t=e.config;ve(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Re(t,Tr):`https://${e.config.authDomain}/${Sr}`,r={apiKey:t.apiKey,appName:e.name,v:ae},i=Or.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Object(o["o"])(r).slice(1)}`}async function xr(e){const t=await _r(e),n=An().gapi;return ve(n,e,"internal-error"),t.open({where:document.body,url:Rr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Er,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=me(e,"network-request-failed"),o=An().setTimeout(()=>{r(i)},Cr.get());function a(){An().clearTimeout(o),n(t)}t.ping(a).then(a,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Br=500,Mr=600,Lr="_blank",Pr="http://localhost";class Vr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function jr(e,t,n,r=Br,i=Mr){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Nr),{width:r.toString(),height:i.toString(),top:a,left:s}),u=Object(o["i"])().toLowerCase();n&&(c=pt(u)?Lr:n),dt(u)&&(t=t||Pr,l.scrollbars="yes");const d=Object.entries(l).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(yt(u)&&"_self"!==c)return Dr(t||"",c),new Vr(null);const h=window.open(t||"",c,d);ve(h,e,"popup-blocked");try{h.focus()}catch(p){}return new Vr(h)}function Dr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="__/auth/handler",Fr="emulator/auth/handler";function Wr(e,t,n,r,i,a){ve(e.config.authDomain,e,"auth-domain-config-required"),ve(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:ae,eventId:i};if(t instanceof Gt){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Object(o["k"])(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))s[e]=t}if(t instanceof Yt){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const c=s;for(const o of Object.keys(c))void 0===c[o]&&delete c[o];return`${Hr(e)}?${Object(o["o"])(c).slice(1)}`}function Hr({config:e}){return e.emulator?Re(e,Fr):`https://${e.authDomain}/${Ur}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="webStorageSupport";class Xr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gn,this._completeRedirectFn=lr}async _openPopup(e,t,n,r){var i;ye(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Wr(e,t,n,_e(),r);return jr(e,o,yn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),wn(Wr(e,t,n,_e(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ye(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await xr(e),n=new dr(e);return t.register("authEvent",t=>{ve(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(zr,{type:zr},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[zr];void 0!==i&&t(!!i),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=br(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return At()||ht()||bt()}}const Gr=Xr;var Yr="@firebase/auth",Qr="0.17.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jr(e){ne(new s("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{ve(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),ve(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:It(e)},a=new _t(t,r);return Ie(a,n),a})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),ne(new s("auth-internal",e=>{const t=Ct(e.getProvider("auth").getImmediate());return(e=>new Kr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ce(Yr,Qr,qr(e))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(e=se()){const t=re(e,"auth");return t.isInitialized()?t.getImmediate():we(e,{popupRedirectResolver:Gr,persistence:[Fn,fn,gn]})}Jr("Browser");var $r=n("ede5"),ei=n("9eaa"),ti=n("f47c"),ni=n("e8a3"),ri=n("0e20"),ii=(n("7100"),{components:{BNavItemDropdown:$r["a"],BDropdownItem:ei["a"],BDropdownDivider:ti["a"],BAvatar:ni["a"]},data:function(){return{userData:JSON.parse(localStorage.getItem("userData")),avatarText:ri["a"]}},methods:{logout:function(){var e=this,t=Zr();localStorage.removeItem("access_token"),an(t).then((function(){e.$router.push({name:"login"})}))}}}),oi=ii,ai=n("2877"),si=Object(ai["a"])(oi,r,i,!1,null,null,null);t["a"]=si.exports},f35f:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABdCAYAAADzCKvfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODA4M0IxNEM4MzdEODk1OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQTY5RDZFNjk2NDUxMUU5QjgzM0NGNjBGOUVEM0JBMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQTY5RDZFNTk2NDUxMUU5QjgzM0NGNjBGOUVEM0JBMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE4MDExNzQwNzIwNjgxMTgwODNCMTRDODM3RDg5NTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTgwODNCMTRDODM3RDg5NTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4beZrOAAAF7klEQVR42uydCWwUVRjH/zs7sy03RG3wSNFYsChRFJCmIRIkEeUQiYaAiBIFISWLCBEPUCLEKAgkdAGNFxAPgkIIJLoRFUnwQFHSRDCBoqhNEQmoaFm6O5ffN2+2uy3aUizH7nxf8vp2Znaafb/3nTM7b0Ou64Kl3jRLHNu+g7ep9UQeSAio1nU9XhCJHGjNeTr/SdTXR23bZhBR5JHwdKdMM0ZdZWvA6PXJZEk2EE3TEAqFchsGabvjOOnNKIFBa8Dolm3P4BMZQyQSyXkgLAwklYHSAIb2xNtFIvEWoaR9ihYO5wWQpqLRmBw1xqhFYOpdt7qwoKBZjdEanJKmIR8lTJOtG0aDxpiWNYNdRouONt9FpwnXCIzvWxgMa0+8fWFhPLBQ0gHEIJ9pplIeGAouSCSTaF9QEA8sFM+UyL+wxiR9jbFJYxKuW0IaE/tXnxIUYd8ZITB+SPHyM87T8h5KS1GUTUnPpB8KzMmT0cBAsRvnK41MydOYNBjH6XnCB5O35hP2UwxO5Dja2H4+1hSengXGYTCJRDRvHS0P1qbo4mkLRRpuZsunRSlUx/JWU3juqdZhB9J6oHkdacgsCkljXDIhTvWd5gumBv8TiDyFw3CY/Uwz77HYr/hQApennFb2KwgEikARKAJFoAgUgSJQBIpAESgCRaCICBSBIlAEikARKAJFoDSRkJkSKGkx9lXBGGJA79wBxrAu0Or+ECh48RFgJ/dzgEQC4VXzBQoOfKH6Hr2Au6LAnq8ECo6lPwV9jB7XiE/xpLvfn/ibb/gCXYsuCCjn9wb7JX3ozx7gSC1/uxm4vIdoCq69WfU/EJhvtwNFVwgUlN6k+k0fAO98CRT3FCi4rr/qf0MmCgUdill6I9Als20VCxQVcUaW+1oDuJECgeJJWjv2Utq/a5tA0ZIngTfWZHYsnSVQwpteyzhZls17YXzzaYChuA4Q8zVj+dOeT/Fk4aTzfinhvEExtr4L7Ib3LWD73pnAivfVga2HoFc+HkQoLrBkono5dzKcjp1hlt1Grx9U++atgLF+ZbCgGB+uBz7z8UyZm8lTnloFTBuuNibNhLF6UUAKQvYlL/ha8sR9sLLqHZeKQmvJRuipkRSVPgEq5sHYsRmYvZwyvSRwuAb4/QhQn6BGkatdB6qXLqMaqj/Mq3rnLhRjyxp1tY1l6rOnfqDag8CQMcBGgnKcdqzbRa285f97zw2wX90Op7BjbkHxosrCqX6UmQ6zezHCxw5D+2gDmRM52m0fAwebnHQxtaNZ2zzmWQ8DA4fyE04U0kl7PqeCcs12hMdvhjN8Qm5B0d9a5mWunrTvBGNcXy83aZAyaiPuBPoMpBA9AHZpP3LCnZQPWvoAsIMg1NF7FrwC3LKaSoSZqqicQiH9x6+VA2+Lyfurrq6S+ig/NKSfxQe2w38ehVZ6qTKJhksHDGEcDXAU7PJhBKBL8yZSRd55IwF5ex3w66nT6/xSC7vbmV29sxwHlnoKNXZONMXYuZVmd4ICQlww/zlg0HCYV/dpXVXddxDAbeFaGPu/A74nf3PoZ352Hxg16YyBnFPzMX7aBzxzP/De7qz65iWYYyb/XwWH2et6gFvu5CkujLWLgd6kCcdrgfTKAiOuJCAP4UKXNofCEcZ4lELqNErKJlAoLRsNpNegWLRJ5fUXuOhtrSH69GHAm+QQR1MyNXE2cPvd6lDl/Fb7kLyAYrz+vALC97WefJlC5mB1YGw/mFnpfLDMZ5l/L3jyHGD8YJV0Ue5hr4znhNmcHShd/f6xxSozHVoEZ0MN5R/dkEvSpubjbKmBtp4q3f1VwIBbYY2tgGtEkGvSplDsi7rDrliAXBf5epdAESgCRaAIFIEiUASKQBEoAkWgCBQRgXI6UFzHCTSI7PFrWihUzS94bUUroGB43Dx+Dwjx0PkXCPwF973Vwi0gL1dF/08Nabz6aIx56LzAPh2o5OVJ4f+ggOu6QVSYmKHr3g8OhNIAUpZVwgvVerYVIE0hDVBrS2padUTXvXuZ/wgwACqjAW/Ht+8LAAAAAElFTkSuQmCC"},f8f8:function(e,t,n){e.exports=n.p+"img/9-small.30df7a62.png"},fbb2:function(e,t,n){e.exports=n.p+"img/avatar-s-4.61de186b.jpg"},fd23:function(e,t,n){"use strict";n("c614")}}]);
//# sourceMappingURL=chunk-5b172ef8.65c9b168.js.map