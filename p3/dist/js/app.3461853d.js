(function(e){function t(t){for(var a,s,o=t[0],c=t[1],u=t[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},i=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1999:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"app"}},[r("HeaderPage"),r("div",{staticClass:"text-center"},[r("nav",{staticClass:"nav navbar bg-navbar",attrs:{nav:""}},[r("ul",{staticClass:"nav  justify-content-center"},e._l(e.links,(function(t){return r("li",{key:t,staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link active",attrs:{to:{name:t},exact:""}},[e._v(e._s(t.toUpperCase()))])],1)})),0)]),r("router-view")],1),r("br"),r("FooterPage")],1)},i=[],s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"jumbotron text-center"},[r("h2",{staticClass:"display-4"},[e._v("Middle School Talent Show")]),r("h4",[e._v("Nashua, New Hampshire")])])}],c={name:"HeaderPage",data:function(){return{}},methods:{}},u=c,l=r("2877"),d=Object(l["a"])(u,s,o,!1,null,"4095d52e",null),m=d.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center bg-footer"},[e._v(" Copyright © - Gate City Events, New Hampshire "+e._s(e.getCopyRightYear())),r("br"),e._v(" Homepage video by "),r("a",{attrs:{href:"https://www.postermywall.com/",target:"_blank"}},[e._v("www.postermywall.com")])])},v=[],f=(r("d3b7"),r("25f0"),{name:"FooterPage",data:function(){return{}},methods:{getCopyRightYear:function(){var e=new Date;return e.getFullYear().toString()}},mounted:function(){}}),h=f,g=(r("83e7"),Object(l["a"])(h,p,v,!1,null,"55296a6b",null)),_=g.exports,b={name:"App",components:{HeaderPage:m,FooterPage:_},data:function(){return{links:["home","program","credits","add item"],program:null}},computed:{items:function(){return this.$store.state.items},itemCount:function(){return this.$store.getters.getItemCount()}},mounted:function(){this.$store.dispatch("setItems")}},y=b,$=(r("5c0b"),Object(l["a"])(y,n,i,!1,null,null,null)),w=$.exports,C=r("8c4f"),x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",{staticClass:"text-center"},[e._v("Items")]),r("transition",{attrs:{name:"fade"}},[e.deleted?r("div",{staticClass:"alert",attrs:{"data-test":"item-deleted-confirmation"}},[e._v("Item was deleted!")]):e._e()]),r("table",{staticClass:"table"},[e._m(0),r("tbody",e._l(e.items,(function(t,a,n){return r("tr",{key:t.title},[r("th",{attrs:{scope:"row"}},[e._v(e._s(n+1))]),r("td",[e._v(e._s(t.title))]),r("td",[e._v(e._s(t.type))]),r("td",[e._v(e._s(e.getPerformers(t)))]),r("td",[e._v(e._s(t.description))]),r("td",[r("button",{staticClass:"btn",attrs:{title:"Delete item"},on:{click:function(r){return e.deleteItem(t,a)}}},[r("i",{staticClass:"fa fa-trash"})])])])})),0)])],1)},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",{staticClass:"thead-light"},[r("tr",[r("th",{attrs:{scope:"col"}},[e._v("#")]),r("th",{attrs:{scope:"col"}},[e._v("Title")]),r("th",{attrs:{scope:"col"}},[e._v("Type")]),r("th",{attrs:{scope:"col"}},[e._v("Performers")]),r("th",{attrs:{scope:"col"}},[e._v("Description")]),r("th",{attrs:{scope:"col"}},[r("i",{staticClass:"fas fa-trash-alt"})])])])}],j=(r("7db0"),r("4160"),r("159b"),r("96cf"),r("1da1")),P=r("d4ec"),I=r("bee2"),O=r("59ca"),E=(r("e71f"),function(){function e(t){Object(P["a"])(this,e),O["initializeApp"]({apiKey:t.apiKey,authDomain:t.projectId+".firebaseapp.com",databaseURL:"https://"+t.projectId+".firebaseio.com",projectId:t.projectId}),this.api=O["firestore"]()}return Object(I["a"])(e,[{key:"find",value:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,r,a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(r,"==",a).get();case 3:return n=e.sent,e.abrupt("return",n.docs.shift().data());case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r,a){return e.apply(this,arguments)}return t}()},{key:"filter",value:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,r,a,n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).where(r,a,n).get();case 3:return i=e.sent,e.abrupt("return",i.docs);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error getting documents: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r,a,n){return e.apply(this,arguments)}return t}()},{key:"get",value:function(e,t){return this.find(e,"id",t)}},{key:"all",value:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r={},e.next=3,this.api.collection(t).get();case 3:return a=e.sent,a.forEach((function(e){r[e.id]=e.data()})),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"add",value:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).add(r);case 3:return a=e.sent,e.abrupt("return",a.id);case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return","Error adding document: "+e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(e,t){this.api.collection(e).doc(t).delete()}},{key:"deleteAsync",value:function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.collection(t).doc(r).delete();case 3:return a=e.sent,console.log("Delete successful"),e.abrupt("return",a);case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return","Error deleting document: "+e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(t,r){return e.apply(this,arguments)}return t}()}]),e}()),S={firebase:{apiKey:"AIzaSyCkaZeNdz_IUsGUUwR_y6U-Vywo7Bg0tW4",projectId:"e28-talent-show"}},N=new E({apiKey:S.firebase.apiKey,projectId:S.firebase.projectId}),M={name:"ProgramPage",props:{},data:function(){return{deleted:!1,title:"Program"}},methods:{getPerformers:function(e){var t="";if(1==e.performers.length)t=e.performers[0];else for(var r=0;r<e.performers.length;r++){var a=e.performers[r];t+=r>0?",":"",t+=a}return t},deleteItem:function(e,t){var r=this;console.log("Deleting item ",e," with ",t);var a=N.deleteAsync("items",t);console.log("ref is ",a),a.then((function(){console.log("Delete from collection was successful"),r.$store.dispatch("setItems"),r.deleted=!0,setTimeout((function(){r.deleted=!1}),4e3)}))}},computed:{items:function(){return this.$store.state.items}},mounted:function(){var e=this.$store.state.items;console.log("Final program is ",e)}},R=M,T=Object(l["a"])(R,x,k,!1,null,"3f985450",null),q=T.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("h1",[e._v(e._s(e.credits))]),r("h2",[e._v("Nashua High School Talent Show")]),r("h3",[e._v("Our fabulous organizing team")]),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm"},[r("ul",{staticClass:"list-group"},[r("h4",{staticClass:"text-center"},[e._v("Staff")]),e._l(e.staffList,(function(t){return r("li",{key:t,staticClass:"list-group-item"},[e._v(" "+e._s(t)+" ")])}))],2)]),r("div",{staticClass:"col-sm"},[r("h4",{staticClass:"text-center"},[e._v("Students")]),r("ul",{staticClass:"list-group"},e._l(e.studentList,(function(t){return r("li",{key:t.name,staticClass:"list-group-item"},[e._v(" "+e._s(t.name)+", Grade:"+e._s(t.grade)+" ")])})),0)])])])])},A=[];r("b0c0"),r("a4d3"),r("e01a"),r("99af"),r("d81d"),r("6770");function D(e,t){return Math.floor(Math.random()*(t-e+1))+e}var G=r("359c"),L={name:"HomePage",props:{msg:String},data:function(){return{title:"Now Playing",credits:"Thanks to the staff",staffCount:8,studentCount:8,staffList:[],studentList:[]}},mounted:function(){for(var e=0;e<this.staffCount;e++)this.staffList.push(G.name.findName());for(var t=0;t<this.studentCount;t++)this.studentList.push({name:G.name.firstName()+" "+G.name.lastName(),grade:D(9,12)})}},V=L,B=Object(l["a"])(V,H,A,!1,null,"5b5a289f",null),F=B.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-center"},[r("h2",[e._v(e._s(e.title))]),r("h4",[e._v(e._s(e.event_date)+" at Nashua High School North Auditorium")]),r("h6",{staticClass:"text-center text-danger"},[e._v("Come see our talented students in action with a half hour musical by our talented teachers too")]),r("h5",{staticClass:"text-info font-weight-bold"},[e._v("Start time: 3:00 pm sharp. Seating begins at 2:30pm")]),e._m(0)])},z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"event-details container-fluid row"},[a("div",{staticClass:"col-sm"},[a("video",{attrs:{width:"480",autoplay:"",loop:""}},[a("source",{attrs:{src:r("61fa"),type:"video/mp4"}}),e._v(" Your browser does not support the video tag. ")])]),a("div",{staticClass:"col-sm"},[a("h3",{staticClass:"text-info"},[e._v("Tickets")]),a("h5",[e._v("Early bird rates until "),a("span",{staticClass:"text-success"},[e._v("9/28")])]),a("h5",[e._v("Regular rates available until "),a("span",{staticClass:"text-danger"},[e._v("11/1")])]),a("h5",[e._v("Event day prices apply after "),a("span",{staticClass:"text-danger font-weight-bold"},[e._v("11/1")])]),a("table",{staticClass:"table table-striped table-bordered table-hover"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[e._v("Category")]),a("th",{attrs:{scope:"col"}},[e._v("Early bird")]),a("th",{attrs:{scope:"col"}},[e._v("Regular")]),a("th",{attrs:{scope:"col"}},[e._v("Event day")])])]),a("tbody",[a("tr",[a("td",[e._v("Students(K-12)")]),a("td",[e._v("$5")]),a("td",[e._v("$7")]),a("td",[e._v("$10")])]),a("tr",[a("td",[e._v("Adults")]),a("td",[e._v("$10")]),a("td",[e._v("$12")]),a("td",[e._v("$15")])])])]),a("div",{staticClass:"text-info"},[a("address",[e._v(" For tickets email "),a("a",{attrs:{href:"mailto:gsylvie@example.com"}},[e._v("Mrs.Gail Sylvie")]),e._v("."),a("br")])])])])}],U={name:"HomePage",props:{msg:String},data:function(){return{title:"Gate City Fall Event",event_date:"7th November 2020"}},computed:{itemCount:function(){return this.$store.getters.getItemCount()}},methods:{getItemCount:function(){return this.$store.getters.getItemCount()}}},W=U,Y=(r("eaeb"),Object(l["a"])(W,K,z,!1,null,"37f9d7e7",null)),J=Y.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Add a new Item")]),e._m(0),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.item.title.$model,expression:"$v.item.title.$model"}],class:{"form-input-error":e.$v.item.title.$error},attrs:{type:"text",id:"title"},domProps:{value:e.$v.item.title.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.item.title,"$model",t.target.value)}}}),r("br"),e.$v.item.title.$error?r("div",[r("div",{staticClass:"form-feedback-error"},[e.$v.item.title.required?r("div",[e._v(" Minimum 6 chars ")]):r("div",[e._v(" Title is required ")])])]):e._e(),r("label",{attrs:{for:"type"}},[e._v("Item type")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.item.type.$model,expression:"$v.item.type.$model"}],class:{"form-input-error":e.$v.item.type.$error},attrs:{type:"text",id:"type"},domProps:{value:e.$v.item.type.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.item.type,"$model",t.target.value)}}}),e.$v.item.type.$error?r("div",[r("div",{staticClass:"form-feedback-error"},[e.$v.item.type.required?r("div",[e._v(" Type has to be alphabetic chars ")]):r("div",[e._v(" Title is required ")])])]):e._e(),e._m(1),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.item.duration.$model,expression:"$v.item.duration.$model"}],class:{"form-input-error":e.$v.item.duration.$error},attrs:{type:"text",id:"duration"},domProps:{value:e.$v.item.duration.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.item.duration,"$model",t.target.value)}}}),e.$v.item.duration.$error?r("div",[r("div",{staticClass:"form-feedback-error"},[e.$v.item.duration.integer?e.$v.item.duration.minValue?e.$v.item.duration.maxValue?e._e():r("div",[e._v(" Max value is 6 ")]):r("div",[e._v(" Minimum value is 2 ")]):r("div",[e._v(" Value has to be an integer ")])])]):e._e(),r("label",{attrs:{for:"performers"}},[e._v("Performers(Enter comma separated names)")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.item.performers.$model,expression:"$v.item.performers.$model"}],class:{"form-input-error":e.$v.item.performers.$error},attrs:{type:"text",id:"performers"},domProps:{value:e.$v.item.performers.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.item.performers,"$model",t.target.value)}}}),e.$v.item.performers.$error?r("div",[r("div",{staticClass:"form-feedback-error"},[e._v(" Performer names are required ")])]):e._e(),r("label",{attrs:{for:"description"}},[e._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.$v.item.description.$model,expression:"$v.item.description.$model"}],class:{"form-input-error":e.$v.item.description.$error},attrs:{id:"description"},domProps:{value:e.$v.item.description.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.item.description,"$model",t.target.value)}}}),e.$v.item.description.$error?r("div",[r("div",{staticClass:"form-feedback-error"},[e._v(" Item description is required ")])]):e._e(),e.$v.$anyError?r("div",{staticClass:"form-feedback-error"},[e._v("Please correct the form errors")]):e._e(),r("input",{attrs:{type:"submit",value:"Add"},on:{click:function(t){return e.addNewItem()}}}),r("br"),r("transition",{attrs:{name:"fade"}},[e.added?r("div",{staticClass:"alert",attrs:{"data-test":"item-added-confirmation"}},[e._v("New item was added!")]):e._e()])],1)},Z=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:"title"}},[e._v("Title "),r("small",[e._v("6 chars min")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{attrs:{for:"duration"}},[e._v("Performance time(in minutes) "),r("small",[e._v("2-6 minutes")])])}],X=(r("caad"),r("2532"),r("b5ae")),ee={name:"",data:function(){return{added:!1,item:{title:"",type:"",duration:"",performers:[],description:""}}},validations:{item:{title:{required:X["required"],minLength:Object(X["minLength"])(6)},duration:{integer:X["integer"],minValue:Object(X["minValue"])(2),maxValue:Object(X["maxValue"])(6)},type:{required:X["required"],alpha:X["alpha"]},performers:{required:X["required"]},description:{required:X["required"]}}},methods:{addNewItem:function(){var e=this;this.$v.$touch(),0==this.$v.$anyError&&this.item.title.length>0&&N.add("items",this.item).then((function(t){t.includes("Error")?alert(t):(e.added=!0,setTimeout((function(){return e.added=!1}),4e3),e.item={title:"",type:"",duration:"",performers:[],description:""},e.$v.$reset(),e.$store.dispatch("setItems"))}))}}},te=ee,re=(r("a6a1"),Object(l["a"])(te,Q,Z,!1,null,"3d2f7e2b",null)),ae=re.exports,ne=r("1dce"),ie=r.n(ne),se=(r("b64b"),r("2f62"));a["a"].use(se["a"]);var oe=new se["a"].Store({state:{featuredItem:"",items:[],itemCount:0},mutations:{setFeaturedItem:function(e,t){e.featuredItem=t},updateItems:function(e,t){e.items=t,e.itemCount=e.items.length}},actions:{setItems:function(e){N.all("items").then((function(t){e.commit("updateItems",t)}))}},getters:{getItemByName:function(e){return function(t){for(var r=0,a=Object.keys(e.items);r<a.length;r++){var n=a[r];if(e.products[n].name==t)return e.items[n]}}},getItemCount:function(e){return function(){return e.itemCount}}}});a["a"].config.productionTip=!1,a["a"].use(C["a"]),a["a"].use(ie.a);var ce=[{path:"/",component:J,name:"home"},{path:"/program",component:q,name:"program"},{path:"/credits",component:F,name:"credits"},{path:"/add-item",component:ae,name:"add item"}],ue=new C["a"]({routes:ce,mode:"history"});new a["a"]({store:oe,router:ue,render:function(e){return e(w)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("9c0c"),n=r.n(a);n.a},"61fa":function(e,t,r){e.exports=r.p+"media/SchoolTalentShowSquareVideo-MadewithPosterMyWall.0cba3e6a.mp4"},6770:function(e){e.exports=JSON.parse('[{"title":"Grand Opening","type":"band","description":"National anthem followed by Victory March","performers":["Honors Jazz Band"],"duration":"4"},{"title":"Twirlers","type":"dance","description":"Aerobatic dance","performers":["Helen Pittman","Mandy Travis"],"duration":"5"},{"title":"Carolina in the morning","type":"vocal","description":"Lyrics by Gus Kahn and music by Walter Donaldson","performers":["Maurice Biggs"],"duration":"3"},{"title":"Darktown Strutters Ball","type":"dance","description":"by Shelton Brooks","performers":["Glenn Yarbrough","Kris Carter","Amya Rath","Elena Feil"],"duration":"4"},{"title":"Barbershop Quartet","type":"vocal","description":"by the Rockland Crooners","performers":["Sidney McKinney","Dwight Malone","George Grimes","Billy Wooley"],"duration":"4"},{"title":"Louisiana Hayride","type":"band","description":"Made famous by Elvis Presley","performers":["Concert Band"],"duration":"6"},{"title":"Old Man River","type":"instrument","description":"Guitar Solo","performers":["Wilbur Holden"],"duration":"3"}]')},"784e":function(e,t,r){},"83e7":function(e,t,r){"use strict";var a=r("784e"),n=r.n(a);n.a},"98d6":function(e,t,r){},"9c0c":function(e,t,r){},a6a1:function(e,t,r){"use strict";var a=r("1999"),n=r.n(a);n.a},eaeb:function(e,t,r){"use strict";var a=r("98d6"),n=r.n(a);n.a}});
//# sourceMappingURL=app.3461853d.js.map