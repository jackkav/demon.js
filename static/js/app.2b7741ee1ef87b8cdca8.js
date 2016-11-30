webpackJsonp([2,0],{0:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=s(253),o=(n(i),s(241)),a=n(o),l=s(9),r=n(l),d=s(259),u=n(d),c=s(266),h=n(c),f=s(201),p=n(f);s(200),r.default.use(h.default),r.default.use(a.default);var j=new h.default({routes:p.default});new r.default({el:"#app",render:function(e){return e(u.default)},router:j}).$mount("#app")},158:function(e,t,s){var n,i;s(254),n=s(205);var o=s(262);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=n},200:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=s(9),o=n(i),a=s(182),l=n(a);o.default.config.debug=!1,l.default.defaults.baseURL={NODE_ENV:"production"}.API_LOCATION||"http://120.131.8.223:49960/api/",l.default.defaults.headers.common.Accept="application/json",l.default.defaults.timeout=1e4,o.default.prototype.$http=l.default},201:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={template:"<p>about page</p>"};t.default=[{path:"/",component:s(158)},{path:"/about",component:n},{path:"/settings",component:s(260)},{path:"/*",redirect:"/"}]},202:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(158),o=n(i),a=s(261),l=n(a);t.default={name:"app",components:{TorrentTable:o.default,TopBar:l.default}}},203:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(33),o=n(i);t.default={data:function(){return{dislikedShows:JSON.parse(localStorage.getItem("demon.disliked"))||[],likedShows:JSON.parse(localStorage.getItem("demon.liked"))||[]}},methods:{handleLikedClose:function(e){this.likedShows.splice(this.likedShows.indexOf(e),1),localStorage.setItem("demon.liked",(0,o.default)(this.likedShows))},handleDislikedClose:function(e){this.dislikedShows.splice(this.dislikedShows.indexOf(e),1),localStorage.setItem("demon.disliked",(0,o.default)(this.dislikedShows))}}}},204:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{handleSelect:function(e,t){console.log(e,t)}}}},205:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(33),o=n(i),a=s(206),l=n(a),r=s(1),d=n(r);t.default={created:function(){this.fetchShows()},methods:{fetchShows:function(){var e=this,t=this;t.loading=!0,this.$http.get("/shows").then(function(s){t.loading=!1;var n=!0,i=!1,o=void 0;try{for(var a,r=(0,l.default)(s.data);!(n=(a=r.next()).done);n=!0){var u=a.value;e.dislikedShows.includes(u.title)||(u.released=(0,d.default)(u.addedOn).fromNow(),t.likedShows&&t.likedShows.indexOf(u.title)&&(u.star=!0),t.showList.push(u),t.filteredShowList.push(u))}}catch(e){i=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(i)throw o}}}).catch(function(e){t.loading=!1,console.log(e)})},downloading:function(e,t){e.clicks+=1;var s={title:"Downloading...",message:e.name,duration:3e3};this.$notify.success(s);var n={clicks:e.clicks};this.$http.put("/shows/"+e.hash,n).catch(function(e){console.log(e)})},handleDelete:function(e,t){var s=this;event.stopPropagation(),this.dislikedShows.includes(t.title)||this.dislikedShows.push(t.title),localStorage.setItem("demon.disliked",(0,o.default)(this.dislikedShows)),this.filteredShowList=this.showList.filter(function(e){return!s.dislikedShows.includes(e.title)}),this.likedShows=this.likedShows.filter(function(e){return e!==t.title}),localStorage.setItem("demon.liked",(0,o.default)(this.likedShows));var n={message:"Hidden "+t.title,type:"warning"};this.$message(n)},handleStar:function(e,t){event.stopPropagation(),this.likedShows.includes(t.title)||this.likedShows.push(t.title),localStorage.setItem("demon.liked",(0,o.default)(this.likedShows));var s={message:"Liked "+t.title,type:"success"};this.$message(s)},likedRowHighlight:function(e,t){return this.likedShows.includes(e.title)?"info-row":""},qualitySwitch:function(e){var t=e;t?this.filteredShowList=this.showList.filter(function(e){return"720p"===e.quality}):this.filteredShowList=this.showList.filter(function(e){return"720p"!==e.quality})}},data:function(){return{loading:!1,showList:[],filteredShowList:[],dislikedShows:JSON.parse(localStorage.getItem("demon.disliked"))||[],likedShows:JSON.parse(localStorage.getItem("demon.liked"))||[],show720p:!1}}}},253:function(e,t){},254:function(e,t){},255:function(e,t){},256:function(e,t){},257:function(e,t,s){function n(e){return s(i(e))}function i(e){return o[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var o={"./af":47,"./af.js":47,"./ar":53,"./ar-dz":48,"./ar-dz.js":48,"./ar-ly":49,"./ar-ly.js":49,"./ar-ma":50,"./ar-ma.js":50,"./ar-sa":51,"./ar-sa.js":51,"./ar-tn":52,"./ar-tn.js":52,"./ar.js":53,"./az":54,"./az.js":54,"./be":55,"./be.js":55,"./bg":57,"./bg-x":56,"./bg-x.js":56,"./bg.js":57,"./bn":58,"./bn.js":58,"./bo":59,"./bo.js":59,"./br":60,"./br.js":60,"./bs":61,"./bs.js":61,"./ca":62,"./ca.js":62,"./cs":63,"./cs.js":63,"./cv":64,"./cv.js":64,"./cy":65,"./cy.js":65,"./da":66,"./da.js":66,"./de":68,"./de-at":67,"./de-at.js":67,"./de.js":68,"./dv":69,"./dv.js":69,"./el":70,"./el.js":70,"./en-au":71,"./en-au.js":71,"./en-ca":72,"./en-ca.js":72,"./en-gb":73,"./en-gb.js":73,"./en-ie":74,"./en-ie.js":74,"./en-nz":75,"./en-nz.js":75,"./eo":76,"./eo.js":76,"./es":78,"./es-do":77,"./es-do.js":77,"./es.js":78,"./et":79,"./et.js":79,"./eu":80,"./eu.js":80,"./fa":81,"./fa.js":81,"./fi":82,"./fi.js":82,"./fo":83,"./fo.js":83,"./fr":86,"./fr-ca":84,"./fr-ca.js":84,"./fr-ch":85,"./fr-ch.js":85,"./fr.js":86,"./fy":87,"./fy.js":87,"./gd":88,"./gd.js":88,"./gl":89,"./gl.js":89,"./he":90,"./he.js":90,"./hi":91,"./hi.js":91,"./hr":92,"./hr.js":92,"./hu":93,"./hu.js":93,"./hy-am":94,"./hy-am.js":94,"./id":95,"./id.js":95,"./is":96,"./is.js":96,"./it":97,"./it.js":97,"./ja":98,"./ja.js":98,"./jv":99,"./jv.js":99,"./ka":100,"./ka.js":100,"./kk":101,"./kk.js":101,"./km":102,"./km.js":102,"./ko":103,"./ko.js":103,"./ky":104,"./ky.js":104,"./lb":105,"./lb.js":105,"./lo":106,"./lo.js":106,"./lt":107,"./lt.js":107,"./lv":108,"./lv.js":108,"./me":109,"./me.js":109,"./mi":110,"./mi.js":110,"./mk":111,"./mk.js":111,"./ml":112,"./ml.js":112,"./mr":113,"./mr.js":113,"./ms":115,"./ms-my":114,"./ms-my.js":114,"./ms.js":115,"./my":116,"./my.js":116,"./nb":117,"./nb.js":117,"./ne":118,"./ne.js":118,"./nl":120,"./nl-be":119,"./nl-be.js":119,"./nl.js":120,"./nn":121,"./nn.js":121,"./pa-in":122,"./pa-in.js":122,"./pl":123,"./pl.js":123,"./pt":125,"./pt-br":124,"./pt-br.js":124,"./pt.js":125,"./ro":126,"./ro.js":126,"./ru":127,"./ru.js":127,"./se":128,"./se.js":128,"./si":129,"./si.js":129,"./sk":130,"./sk.js":130,"./sl":131,"./sl.js":131,"./sq":132,"./sq.js":132,"./sr":134,"./sr-cyrl":133,"./sr-cyrl.js":133,"./sr.js":134,"./ss":135,"./ss.js":135,"./sv":136,"./sv.js":136,"./sw":137,"./sw.js":137,"./ta":138,"./ta.js":138,"./te":139,"./te.js":139,"./tet":140,"./tet.js":140,"./th":141,"./th.js":141,"./tl-ph":142,"./tl-ph.js":142,"./tlh":143,"./tlh.js":143,"./tr":144,"./tr.js":144,"./tzl":145,"./tzl.js":145,"./tzm":147,"./tzm-latn":146,"./tzm-latn.js":146,"./tzm.js":147,"./uk":148,"./uk.js":148,"./uz":149,"./uz.js":149,"./vi":150,"./vi.js":150,"./x-pseudo":151,"./x-pseudo.js":151,"./yo":152,"./yo.js":152,"./zh-cn":153,"./zh-cn.js":153,"./zh-hk":154,"./zh-hk.js":154,"./zh-tw":155,"./zh-tw.js":155};n.keys=function(){return Object.keys(o)},n.resolve=i,e.exports=n,n.id=257},259:function(e,t,s){var n,i;s(256),n=s(202);var o=s(264);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=n},260:function(e,t,s){var n,i;n=s(203);var o=s(265);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,e.exports=n},261:function(e,t,s){var n,i;s(255),n=s(204);var o=s(263);i=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(i=n=n.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-16d88018",e.exports=n},262:function(e,t){e.exports={render:function(){var e=this;return e._h("div",[e._h("div",[e._h("el-switch",{directives:[{name:"model",rawName:"v-model",value:e.show720p,expression:"show720p"}],attrs:{"on-text":"720p","off-text":"HDTV",width:70},domProps:{value:e.show720p},on:{change:e.qualitySwitch,input:function(t){e.show720p=t}}})," ",e._h("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticStyle:{width:"100%",cursor:"pointer"},attrs:{"element-loading-text":"Loading...",data:e.filteredShowList,border:"","row-class-name":e.likedRowHighlight},on:{"current-change":e.downloading}},[e._h("el-table-column",{attrs:{prop:"name",label:"Name",align:"left"},on:{click:e.downloading}})," ",e._h("el-table-column",{attrs:{prop:"quality",label:"Quality",width:"120"}})," ",e._h("el-table-column",{attrs:{prop:"size",label:"Size",width:"120"}})," ",e._h("el-table-column",{attrs:{prop:"released",label:"Released",width:"160"}})," ",e._h("el-table-column",{attrs:{prop:"clicks",label:"Downloaded",width:"125"}})," ",e._h("el-table-column",{attrs:{width:"160",context:e._self},inlineTemplate:{render:function(){var e=this;return e._h("div",[e._h("el-button",{attrs:{size:"small",type:"success"},on:{click:function(t){e.handleStar(e.$index,e.row)}}},["\n            Star\n          "])," ",e._h("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){e.handleDelete(e.$index,e.row)}}},["\n            Hide\n          "])])},staticRenderFns:[]}})])])])},staticRenderFns:[]}},263:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{staticClass:"headerWrapper"},[e._h("el-row",[e._h("el-menu",{staticClass:"header-home",attrs:{theme:"dark","default-active":"1",mode:"horizontal"},on:{select:e.handleSelect}},[e._h("el-col",{attrs:{span:18}},[e._h("el-menu-item",{attrs:{index:"home"}},[e._h("router-link",{attrs:{to:"/"}},["Home page"])])," ",e._h("el-menu-item",{attrs:{index:"settings"}},[e._h("router-link",{attrs:{to:"/settings"}},["Settings"])])," ",e._h("el-menu-item",{attrs:{index:"about"}},[e._h("router-link",{attrs:{to:"/about"}},["About"])])])," "," "])])])},staticRenderFns:[]}},264:function(e,t){e.exports={render:function(){var e=this;return e._h("div",{attrs:{id:"app"}},[e._h("top-bar")," ",e._h("router-view")])},staticRenderFns:[]}},265:function(e,t){e.exports={render:function(){var e=this;return e._h("div",[e._h("p",["liked shows:\n    ",e._l(e.likedShows,function(t){return e._h("el-tag",{key:t,attrs:{closable:!0,type:"primary","close-transition":!1},on:{close:function(s){e.handleLikedClose(t)}}},["\n      "+e._s(t)+"\n    "])})])," ",e._h("p",["disliked shows:\n    ",e._l(e.dislikedShows,function(t){return e._h("el-tag",{key:t,attrs:{closable:!0,type:"danger","close-transition":!1},on:{close:function(s){e.handleDislikedClose(t)}}},["\n      "+e._s(t)+"\n    "])})])])},staticRenderFns:[]}}});
//# sourceMappingURL=app.2b7741ee1ef87b8cdca8.js.map