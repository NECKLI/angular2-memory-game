webpackJsonp([1],{"+Exm":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("/oeL"),i=e("p5Ee"),r=e("NiLF"),a=e("fc+i");i.a.production&&e.i(l.enableProdMode)(),e.i(a.a)().bootstrapModuleFactory(r.a),document.head.removeChild(document.querySelector("#splash-spinner")),document.body.removeChild(document.querySelector(".spinner"))},"0ODS":function(n,t,e){"use strict";function l(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,1,"logo",[],null,null,null,u.a,u.b)),a["ɵdid"](49152,null,0,o.a,[],null,null),(n()(),a["ɵted"](null,["\n"])),(n()(),a["ɵeld"](0,null,null,2,"info",[["title","Remains"]],null,null,null,d.a,d.b)),a["ɵdid"](49152,null,0,c.a,[],{title:[0,"title"],text:[1,"text"]},null),a["ɵpid"](131072,s.i,[a.ChangeDetectorRef]),(n()(),a["ɵted"](null,["\n"])),(n()(),a["ɵeld"](0,null,null,2,"info",[["title","Top"]],null,null,null,d.a,d.b)),a["ɵdid"](49152,null,0,c.a,[],{title:[0,"title"],text:[1,"text"]},null),a["ɵpid"](131072,s.i,[a.ChangeDetectorRef])],function(n,t){var e=t.component;n(t,4,0,"Remains",a["ɵunv"](t,4,1,a["ɵnov"](t,5).transform(e.remains$)));n(t,8,0,"Top",a["ɵunv"](t,8,1,a["ɵnov"](t,9).transform(e.highestSpeed$)))},null)}function i(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,1,"dashboard",[],null,null,null,l,m)),a["ɵdid"](49152,null,0,p.a,[],null,null)],null,null)}var r=e("Jn7z"),a=e("/oeL"),u=e("ti+z"),o=e("awc7"),d=e("uHQy"),c=e("zlLU"),s=e("qbdv"),p=e("oGCx");e.d(t,"b",function(){return m}),t.a=l;var f=[r.a],m=a["ɵcrt"]({encapsulation:0,styles:f,data:{}});a["ɵccf"]("dashboard",p.a,i,{},{},[])},1:function(n,t,e){n.exports=e("+Exm")},"2h2Q":function(n,t,e){"use strict";var l=e("5DUY"),i=e("8tBk");e.d(t,"a",function(){return r});var r=function(){function n(n){this.actions=n}return n.prototype.ngOnInit=function(){this.actions.updateStatus(i.STATUS.READY),this.actions.reset()},n.ctorParameters=function(){return[{type:l.a}]},n}()},"3mr3":function(n,t,e){"use strict";function l(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,5,"div",[["class","card"]],[[2,"flipped",null]],[[null,"click"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==i.flip(i.info)&&l}return l},null,null)),(n()(),a["ɵted"](null,["\n    "])),(n()(),a["ɵeld"](0,null,null,0,"img",[["class","front"]],[[8,"src",4]],null,null,null,null)),(n()(),a["ɵted"](null,["\n    "])),(n()(),a["ɵeld"](0,null,null,0,"img",[["class","back"]],[[8,"src",4]],null,null,null,null)),(n()(),a["ɵted"](null,["\n"]))],null,function(n,t){var e=t.component;n(t,0,0,e.info.flipped),n(t,2,0,a["ɵinlineInterpolate"](1,"",e.info.url,"")),n(t,4,0,a["ɵinlineInterpolate"](1,"",e.backCard.url,""))})}function i(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,1,"card",[],null,null,null,l,d)),a["ɵdid"](49152,null,0,u.a,[],null,null)],null,null)}var r=e("fJ+W"),a=e("/oeL"),u=e("Cpvq");e.d(t,"b",function(){return d}),t.a=l;var o=[r.a],d=a["ɵcrt"]({encapsulation:0,styles:o,data:{}});a["ɵccf"]("card",u.a,i,{info:"info"},{flipped:"flipped"},[])},"5DUY":function(n,t,e){"use strict";var l=e("kKZY"),i=(e.n(l),e("Jg+i")),r=e("8tBk");e.d(t,"a",function(){return a});var a=function(){function n(n){this.ngRedux=n}return n.prototype.reset=function(){this.ngRedux.dispatch({type:n.RESET})},n.prototype.updateStatus=function(t){var e=this;this.ngRedux.dispatch({type:n.UPDATE_STATUS,payload:t}),t===r.STATUS.PLAYING?this.timerId=setInterval(function(){e.ngRedux.dispatch({type:n.UPDATE_ELAPSED,payload:+e.ngRedux.getState().elapsedMs+1})},1e3):t===r.STATUS.PASS&&(clearInterval(this.timerId),this.ngRedux.dispatch({type:n.UPDATE_HIGHESTSPEED,payload:this.ngRedux.getState().elapsedMs}))},n.prototype.updateLastSelectedCard=function(t){this.ngRedux.dispatch({type:n.UPDATE_LAST_SELECTED_CARD,payload:t})},n.prototype.updateCardFlipped=function(t){this.ngRedux.dispatch({type:n.UPDATE_CARD_FLIPPED,payload:t})},n.prototype.match=function(){this.ngRedux.dispatch({type:n.UPDATE_REMAINS,payload:+this.ngRedux.getState().remains-1})},n.prototype.flipCard=function(n){var t=this,l=this.ngRedux.getState();if(this.updateCardFlipped(n),l.status===r.STATUS.READY&&this.updateStatus(r.STATUS.PLAYING),e.i(i.a)(l.lastSelectedCard))return this.updateLastSelectedCard(n);if(l.lastSelectedCard.name===n.name){this.updateLastSelectedCard(null),this.match();return+l.remains-1||this.updateStatus(r.STATUS.PASS)}var a=l.lastSelectedCard;this.updateLastSelectedCard(null),setTimeout(function(){t.updateCardFlipped(a),t.updateCardFlipped(n)},1e3)},n.ctorParameters=function(){return[{type:l.NgRedux}]},n.RESET="RESET",n.UPDATE_STATUS="UPDATE_STATUS",n.UPDATE_LAST_SELECTED_CARD="UPDATE_LAST_SELECTED_CARD",n.UPDATE_CARD_FLIPPED="UPDATE_CARD_FLIPPED",n.UPDATE_REMAINS="UPDATE_REMAINS",n.UPDATE_ELAPSED="UPDATE_ELAPSED",n.UPDATE_HIGHESTSPEED="UPDATE_HIGHESTSPEED",n}()},"61X8":function(n,t){},"6Fg5":function(n,t,e){"use strict";function l(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,1,"dashboard",[],null,null,null,u.a,u.b)),a["ɵdid"](49152,null,0,o.a,[],null,null),(n()(),a["ɵted"](null,["\n"])),(n()(),a["ɵeld"](0,null,null,1,"chessboard",[],null,null,null,d.a,d.b)),a["ɵdid"](49152,null,0,c.a,[s.a],null,null),(n()(),a["ɵted"](null,["\n"])),(n()(),a["ɵeld"](0,null,null,1,"status",[],null,null,null,p.a,p.b)),a["ɵdid"](49152,null,0,f.a,[s.a],null,null)],null,null)}function i(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,1,"memory-game",[],null,null,null,l,g)),a["ɵdid"](114688,null,0,m.a,[s.a],null,null)],function(n,t){n(t,1,0)},null)}var r=e("NmaQ"),a=e("/oeL"),u=e("0ODS"),o=e("oGCx"),d=e("OJyq"),c=e("kJTP"),s=e("5DUY"),p=e("Tcwi"),f=e("ArUT"),m=e("2h2Q");e.d(t,"a",function(){return b});var h=[r.a],g=a["ɵcrt"]({encapsulation:0,styles:h,data:{}}),b=a["ɵccf"]("memory-game",m.a,i,{},{},[])},"8tBk":function(n,t,e){"use strict";var l=e("CdnK");e.n(l);e.o(l,"STATUS")&&e.d(t,"STATUS",function(){return l.STATUS});var i=e("61X8");e.n(i);e.o(i,"STATUS")&&e.d(t,"STATUS",function(){return i.STATUS});var r=e("MEsn");e.d(t,"STATUS",function(){return r.a})},ArUT:function(n,t,e){"use strict";var l=e("kKZY"),i=(e.n(l),e("bKpL")),r=(e.n(i),e("5DUY")),a=e("PV+H"),u=e("8tBk");e.d(t,"a",function(){return c});var o=this&&this.__decorate||function(n,t,e,l){var i,r=arguments.length,a=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,l);else for(var u=n.length-1;u>=0;u--)(i=n[u])&&(a=(r<3?i(a):r>3?i(t,e,a):i(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},d=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},c=function(){function n(n){this.actions=n,this.status=u.STATUS}return n.prototype.reset=function(n){e.i(a.a)(n),this.actions.reset()},n.ctorParameters=function(){return[{type:r.a}]},o([e.i(l.select)(),d("design:type","function"==typeof(t=void 0!==i.Observable&&i.Observable)&&t||Object)],n.prototype,"status$",void 0),o([e.i(l.select)(),d("design:type","function"==typeof(c=void 0!==i.Observable&&i.Observable)&&c||Object)],n.prototype,"elapsedMs$",void 0),n;var t,c}()},"BT+e":function(n,t,e){"use strict";function l(){return u.concat(u).map(function(n,t){return{_id:t,name:n.name,flipped:n.flipped,url:n.url}})}var i=e("p5Ee");e.d(t,"b",function(){return a}),t.a=l;var r=["8-ball","baked-potato","dinosaur","kronos","rocket","skinny-unicorn","that-guy","zeppelin","back"],a=r.map(function(n){return{name:n,flipped:!1,url:i.a.deployUrl+"assets/"+n+".png"}}),u=a.filter(function(n){return"back"!==n.name})},CdnK:function(n,t){},Cpvq:function(n,t,e){"use strict";var l=e("/oeL"),i=e("BT+e");e.d(t,"a",function(){return r});var r=function(){function n(){this.flipped=new l.EventEmitter,this.backCard=i.b.find(function(n){return"back"===n.name})}return n.prototype.flip=function(n){n.flipped||this.flipped.emit(n)},n.ctorParameters=function(){return[]},n}()},DCt8:function(n,t,e){"use strict";function l(n){for(var t=n.slice(),e=t.length;e;e-=1){var l=Math.floor(Math.random()*e),i=t[e-1];t[e-1]=t[l],t[l]=i}return t}t.a=l},Drs9:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=["[_nghost-%COMP%]{width:120px;padding:10px;background-color:#bbada0;border-radius:5px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#eae0d1}.text[_ngcontent-%COMP%]{color:#fff}@media screen and (max-width:450px){[_nghost-%COMP%]{width:105px}}@media screen and (max-width:380px){[_nghost-%COMP%]{width:95px}h2[_ngcontent-%COMP%]{font-size:20px}}@media screen and (max-width:360px){[_nghost-%COMP%]{width:90px}}"]},Hqoi:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=["[_nghost-%COMP%]{margin-top:20px;width:100%;background-color:#fff;height:530px;border-radius:4px;padding:10px 5px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:distribute;align-content:space-around}card[_ngcontent-%COMP%]:nth-child(4n){margin-right:0}@media screen and (max-width:450px){[_nghost-%COMP%]{height:480px;padding:10px 0}}@media screen and (max-width:370px){[_nghost-%COMP%]{height:450px}}"]},"Jg+i":function(n,t,e){"use strict";function l(n){return null===n||void 0===n}function i(n){return void 0===n}t.a=l,t.b=i},Jn7z:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=["[_nghost-%COMP%]{width:100%;height:100px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-ms-flex-negative:0;flex-shrink:0}"]},MEsn:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l;!function(n){n[n.READY=0]="READY",n[n.PLAYING=1]="PLAYING",n[n.PASS=2]="PASS"}(l||(l={}))},NiLF:function(n,t,e){"use strict";var l=e("/oeL"),i=e("ndGf"),r=e("2h2Q"),a=e("6Fg5"),u=e("qbdv"),o=e("fc+i"),d=e("5ySN"),c=(e.n(d),e("mkgw")),s=(e.n(c),e("5DUY")),p=e("ALdi"),f=(e.n(p),e("sLRG"));e.d(t,"a",function(){return m});var m=l["ɵcmf"](i.a,[r.a],function(n){return l["ɵmod"]([l["ɵmpd"](512,l.ComponentFactoryResolver,l["ɵCodegenComponentFactoryResolver"],[[8,[a.a]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["ɵmpd"](5120,l.LOCALE_ID,l["ɵm"],[[3,l.LOCALE_ID]]),l["ɵmpd"](4608,u.a,u.b,[l.LOCALE_ID]),l["ɵmpd"](4608,l.Compiler,l.Compiler,[]),l["ɵmpd"](5120,l.APP_ID,l["ɵf"],[]),l["ɵmpd"](5120,l.IterableDiffers,l["ɵk"],[]),l["ɵmpd"](5120,l.KeyValueDiffers,l["ɵl"],[]),l["ɵmpd"](4608,o.b,o.c,[u.c]),l["ɵmpd"](6144,l.Sanitizer,null,[o.b]),l["ɵmpd"](4608,o.d,o.e,[]),l["ɵmpd"](5120,o.f,function(n,t,e,l){return[new o.g(n),new o.h(t),new o.i(e,l)]},[u.c,u.c,u.c,o.d]),l["ɵmpd"](4608,o.j,o.j,[o.f,l.NgZone]),l["ɵmpd"](135680,o.k,o.k,[u.c]),l["ɵmpd"](4608,o.l,o.l,[o.j,o.k]),l["ɵmpd"](6144,l.RendererFactory2,null,[o.l]),l["ɵmpd"](6144,o.m,null,[o.k]),l["ɵmpd"](4608,l.Testability,l.Testability,[l.NgZone]),l["ɵmpd"](4608,o.n,o.n,[u.c]),l["ɵmpd"](4608,o.o,o.o,[u.c]),l["ɵmpd"](4608,d.DevToolsExtension,d.DevToolsExtension,[l.ApplicationRef,c.NgRedux]),l["ɵmpd"](4608,s.a,s.a,[c.NgRedux]),l["ɵmpd"](512,u.d,u.d,[]),l["ɵmpd"](1024,l.ErrorHandler,o.p,[]),l["ɵmpd"](1024,l.APP_INITIALIZER,function(n,t){return[o.q(n,t)]},[[2,o.r],[2,l.NgProbeToken]]),l["ɵmpd"](512,l.ApplicationInitStatus,l.ApplicationInitStatus,[[2,l.APP_INITIALIZER]]),l["ɵmpd"](131584,l["ɵe"],l["ɵe"],[l.NgZone,l["ɵConsole"],l.Injector,l.ErrorHandler,l.ComponentFactoryResolver,l.ApplicationInitStatus]),l["ɵmpd"](2048,l.ApplicationRef,null,[l["ɵe"]]),l["ɵmpd"](512,l.ApplicationModule,l.ApplicationModule,[l.ApplicationRef]),l["ɵmpd"](512,o.s,o.s,[[3,o.s]]),l["ɵmpd"](512,p.NgReduxModule,p.NgReduxModule,[]),l["ɵmpd"](1024,c.NgRedux,p._ngReduxFactory,[l.NgZone]),l["ɵmpd"](512,f.a,f.a,[c.NgRedux]),l["ɵmpd"](512,i.a,i.a,[])])})},NmaQ:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=["[_nghost-%COMP%]{width:450px;height:670px;border:4px solid #bdbdbd;border-radius:2px;background-color:#faf8ef;padding:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media screen and (max-width:450px){[_nghost-%COMP%]{width:100%;height:100%;-ms-flex-pack:distribute;justify-content:space-around}} a{text-decoration:none;color:#fff}"]},OJyq:function(n,t,e){"use strict";function l(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"card",[],null,[[null,"flipped"]],function(n,t,e){var l=!0,i=n.component;if("flipped"===t){l=!1!==i.actions.flipCard(e)&&l}return l},o.a,o.b)),u["ɵdid"](49152,null,0,d.a,[],{info:[0,"info"]},{flipped:"flipped"})],function(n,t){n(t,1,0,t.context.$implicit)},null)}function i(n){return u["ɵvid"](0,[(n()(),u["ɵand"](16777216,null,null,2,null,l)),u["ɵdid"](802816,null,0,c.j,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),u["ɵpid"](131072,c.i,[u.ChangeDetectorRef])],function(n,t){var e=t.component;n(t,1,0,u["ɵunv"](t,1,0,u["ɵnov"](t,2).transform(e.cards$)),e.trackByCards)},null)}function r(n){return u["ɵvid"](0,[(n()(),u["ɵeld"](0,null,null,1,"chessboard",[],null,null,null,i,m)),u["ɵdid"](49152,null,0,s.a,[p.a],null,null)],null,null)}var a=e("Hqoi"),u=e("/oeL"),o=e("3mr3"),d=e("Cpvq"),c=e("qbdv"),s=e("kJTP"),p=e("5DUY");e.d(t,"b",function(){return m}),t.a=i;var f=[a.a],m=u["ɵcrt"]({encapsulation:0,styles:f,data:{}});u["ɵccf"]("chessboard",s.a,r,{},{},[])},"PV+H":function(n,t,e){"use strict";function l(n){n&&(n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault())}t.a=l},Tcwi:function(n,t,e){"use strict";function l(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(n()(),d["ɵted"](null,["Ready"]))],null,null)}function i(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(n()(),d["ɵted"](null,["Playing"]))],null,null)}function r(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,null,null,1,"span",[["class","hand"]],null,[[null,"click"]],function(n,t,e){var l=!0,i=n.component;if("click"===t){l=!1!==i.reset(e)&&l}return l},null,null)),(n()(),d["ɵted"](null,["Play again"]))],null,null)}function a(n){return d["ɵvid"](0,[(n()(),d["ɵted"](null,["\n"])),(n()(),d["ɵand"](16777216,null,null,2,null,l)),d["ɵdid"](16384,null,0,c.h,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),d["ɵpid"](131072,c.i,[d.ChangeDetectorRef]),(n()(),d["ɵted"](null,["\n"])),(n()(),d["ɵand"](16777216,null,null,2,null,i)),d["ɵdid"](16384,null,0,c.h,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),d["ɵpid"](131072,c.i,[d.ChangeDetectorRef]),(n()(),d["ɵted"](null,["\n"])),(n()(),d["ɵand"](16777216,null,null,2,null,r)),d["ɵdid"](16384,null,0,c.h,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),d["ɵpid"](131072,c.i,[d.ChangeDetectorRef]),(n()(),d["ɵted"](null,["\n"])),(n()(),d["ɵeld"](0,null,null,2,"span",[["class","elapsed"]],null,null,null,null,null)),(n()(),d["ɵted"](null,[""," s"])),d["ɵpid"](131072,c.i,[d.ChangeDetectorRef]),(n()(),d["ɵted"](null,["\n"]))],function(n,t){var e=t.component;n(t,2,0,d["ɵunv"](t,2,0,d["ɵnov"](t,3).transform(e.status$))===e.status.READY),n(t,6,0,d["ɵunv"](t,6,0,d["ɵnov"](t,7).transform(e.status$))===e.status.PLAYING),n(t,10,0,d["ɵunv"](t,10,0,d["ɵnov"](t,11).transform(e.status$))===e.status.PASS)},function(n,t){var e=t.component;n(t,14,0,d["ɵunv"](t,14,0,d["ɵnov"](t,15).transform(e.elapsedMs$)))})}function u(n){return d["ɵvid"](0,[(n()(),d["ɵeld"](0,null,null,1,"status",[],null,null,null,a,m)),d["ɵdid"](49152,null,0,s.a,[p.a],null,null)],null,null)}var o=e("vXpX"),d=e("/oeL"),c=e("qbdv"),s=e("ArUT"),p=e("5DUY");e.d(t,"b",function(){return m}),t.a=a;var f=[o.a],m=d["ɵcrt"]({encapsulation:0,styles:f,data:{}});d["ɵccf"]("status",s.a,u,{},{},[])},awc7:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},"fJ+W":function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=["[_nghost-%COMP%]{width:100px;height:121px;margin-right:3px;cursor:pointer;position:relative;-webkit-perspective:800px;perspective:800px}.card[_ngcontent-%COMP%]{width:100%;height:100%;transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s,-webkit-transform 1s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.card.flipped[_ngcontent-%COMP%]{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;height:100%;width:100%;position:absolute;backface-visibility:hidden;-webkit-backface-visibility:hidden}.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]{background:blue;-webkit-transform:rotateY(0deg);transform:rotateY(0deg)}.card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%]{background:blue;-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}@media screen and (max-width:450px){[_nghost-%COMP%]{width:92px;height:111px;margin-right:1px}}@media screen and (max-width:380px){[_nghost-%COMP%]{width:85px;height:102px;margin-right:1px}}@media screen and (max-width:360px){[_nghost-%COMP%]{width:70px;height:84px;margin-right:1px}}"]},kJTP:function(n,t,e){"use strict";var l=e("kKZY"),i=(e.n(l),e("bKpL")),r=(e.n(i),e("5DUY"));e.d(t,"a",function(){return o});var a=this&&this.__decorate||function(n,t,e,l){var i,r=arguments.length,a=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,l);else for(var u=n.length-1;u>=0;u--)(i=n[u])&&(a=(r<3?i(a):r>3?i(t,e,a):i(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},u=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},o=function(){function n(n){this.actions=n}return n.prototype.trackByCards=function(n,t){return t._id},n.ctorParameters=function(){return[{type:r.a}]},a([e.i(l.select)(),u("design:type","function"==typeof(t=void 0!==i.Observable&&i.Observable)&&t||Object)],n.prototype,"cards$",void 0),n;var t}()},ndGf:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()},oGCx:function(n,t,e){"use strict";var l=e("kKZY"),i=(e.n(l),e("bKpL"));e.n(i);e.d(t,"a",function(){return u});var r=this&&this.__decorate||function(n,t,e,l){var i,r=arguments.length,a=r<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,e):l;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,e,l);else for(var u=n.length-1;u>=0;u--)(i=n[u])&&(a=(r<3?i(a):r>3?i(t,e,a):i(t,e))||a);return r>3&&a&&Object.defineProperty(t,e,a),a},a=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},u=function(){function n(){}return r([e.i(l.select)(),a("design:type","function"==typeof(t=void 0!==i.Observable&&i.Observable)&&t||Object)],n.prototype,"remains$",void 0),r([e.i(l.select)(),a("design:type","function"==typeof(u=void 0!==i.Observable&&i.Observable)&&u||Object)],n.prototype,"highestSpeed$",void 0),n;var t,u}()},p5Ee:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l={production:!0,deployUrl:"/angular2-memory-game/"}},qtrl:function(n,t){function e(n){throw new Error("Cannot find module '"+n+"'.")}e.keys=function(){return[]},e.resolve=e,n.exports=e,e.id="qtrl"},sLRG:function(n,t,e){"use strict";var l=e("kKZY"),i=(e.n(l),e("vHpC"));e.d(t,"a",function(){return r});var r=function(){function n(n){this.ngRedux=n,this.ngRedux.configureStore(i.a,{},[],[])}return n.ctorParameters=function(){return[{type:l.NgRedux}]},n}()},"ti+z":function(n,t,e){"use strict";function l(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,4,"h1",[["class","logo"]],null,null,null,null,null)),(n()(),a["ɵted"](null,["\n    "])),(n()(),a["ɵeld"](0,null,null,1,"a",[["href","https://github.com/leftstick/angular2-memory-game"],["target","_blank"]],null,null,null,null,null)),(n()(),a["ɵted"](null,["Memory"])),(n()(),a["ɵted"](null,["\n"]))],null,null)}function i(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,1,"logo",[],null,null,null,l,d)),a["ɵdid"](49152,null,0,u.a,[],null,null)],null,null)}var r=e("wZ2Z"),a=e("/oeL"),u=e("awc7");e.d(t,"b",function(){return d}),t.a=l;var o=[r.a],d=a["ɵcrt"]({encapsulation:0,styles:o,data:{}});a["ɵccf"]("logo",u.a,i,{},{},[])},uHQy:function(n,t,e){"use strict";function l(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),a["ɵted"](null,["",""])),(n()(),a["ɵted"](null,["\n"])),(n()(),a["ɵeld"](0,null,null,1,"h3",[["class","text"]],null,null,null,null,null)),(n()(),a["ɵted"](null,["",""]))],null,function(n,t){var e=t.component;n(t,1,0,e.title),n(t,4,0,e.text)})}function i(n){return a["ɵvid"](0,[(n()(),a["ɵeld"](0,null,null,1,"info",[],null,null,null,l,d)),a["ɵdid"](49152,null,0,u.a,[],null,null)],null,null)}var r=e("Drs9"),a=e("/oeL"),u=e("zlLU");e.d(t,"b",function(){return d}),t.a=l;var o=[r.a],d=a["ɵcrt"]({encapsulation:0,styles:o,data:{}});a["ɵccf"]("info",u.a,i,{title:"title",text:"text"},{},[])},vHpC:function(n,t,e){"use strict";function l(n,t){return t.type===m.a.RESET||e.i(s.a)(n)?8:t.type===m.a.UPDATE_REMAINS?t.payload:n}function i(n,t){if(t.type===m.a.RESET||e.i(s.a)(n))return localStorage.getItem("highestSpeed")||9999;if(t.type===m.a.UPDATE_HIGHESTSPEED){if(!localStorage.getItem("highestSpeed"))return localStorage.setItem("highestSpeed",t.payload)||t.payload;if(localStorage.getItem("highestSpeed")>t.payload)return localStorage.setItem("highestSpeed",t.payload)||t.payload}return n}function r(n,t){return t.type===m.a.RESET||e.i(s.a)(n)?p.STATUS.READY:t.type===m.a.UPDATE_STATUS?t.payload:n}function a(n,t){return t.type===m.a.RESET||e.i(s.a)(n)?e.i(c.a)(e.i(f.a)()):t.type===m.a.UPDATE_CARD_FLIPPED?n.map(function(n){return n._id===t.payload._id?{_id:n._id,name:n.name,flipped:!n.flipped,url:n.url}:n}):n}function u(n,t){return t.type===m.a.RESET||e.i(s.b)(n)?null:t.type===m.a.UPDATE_LAST_SELECTED_CARD?t.payload:n}function o(n,t){return t.type===m.a.RESET||e.i(s.a)(n)?0:t.type===m.a.UPDATE_ELAPSED?t.payload:n}var d=e("AYro"),c=e("DCt8"),s=e("Jg+i"),p=e("8tBk"),f=e("BT+e"),m=e("5DUY");e.d(t,"a",function(){return h});var h=e.i(d.combineReducers)({remains:l,highestSpeed:i,status:r,cards:a,lastSelectedCard:u,elapsedMs:o})},vXpX:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=["[_nghost-%COMP%]{position:relative;margin-top:10px;width:100%;height:20px;text-align:center;font-size:18px;font-weight:700}.hand[_ngcontent-%COMP%]{cursor:pointer}.elapsed[_ngcontent-%COMP%]{position:absolute;right:10px;font-size:15px;font-weight:400}"]},wZ2Z:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=["[_nghost-%COMP%]{width:160px;padding:5px;border-radius:5px;background-color:#5979ac;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media screen and (max-width:450px){[_nghost-%COMP%]{width:150px}}@media screen and (max-width:380px){[_nghost-%COMP%]{width:140px}}@media screen and (max-width:360px){[_nghost-%COMP%]{width:110px}a[_ngcontent-%COMP%]{font-size:18px}}"]},zlLU:function(n,t,e){"use strict";e.d(t,"a",function(){return l});var l=function(){function n(){}return n}()}},[1]);