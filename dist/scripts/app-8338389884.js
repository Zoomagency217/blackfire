(function(){angular.module("blackfire",["ngAnimate","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr","ngScrollbars"])}).call(this),function(){angular.module("blackfire").directive("appSlide",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.myInterval=3e3,e.slides=[{image:"./assets/images/banner-1-bg.png",items:[{image:"./assets/images/banner-1-item-1.png",top:"7.8vw",left:"35vw",bottom:"auto",right:"auto",width:"34.7vw","class":"fade-in-down-item"},{image:"assets/images/banner-1-item-2.png",top:"3.4vw",left:"23.2vw",bottom:"auto",right:"auto",width:"54.4vw","class":"fade-in-item"},{image:"./assets/images/banner-1-item-3.png",top:"20vw",left:"77vw",bottom:"auto",right:"auto",width:"20vw","class":"fade-in-right-item"}],title:"Connected Home Media",description:"Audio & Video - Beyond Multi Room"},{image:"./assets/images/banner-2-bg.png",items:[],title:"Your media, your way",description:"5 speakers in 5 rooms or a 5 speaker home theatre setup. You decide."},{image:"./assets/images/banner-3-bg.png",items:[{image:"./assets/images/banner-3-item-1.png",top:"8vw",left:"40vw",bottom:"auto",right:"auto",width:"29vw","class":"fade-in-down-item"}],title:"Powering the best streaming media",description:"Wi-Fi speakers always break signal… until now.<br><small>We’ve partnered with Harmon Kardon to integrate in their new Omni Wireless HD audio system.</small>"}]},e={restrict:"A",templateUrl:"app/components/slide/slide.html",controller:t,controllerAs:"sl",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appPress",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.data={title:"Press",description:"People have already discovered Blackfire Technology. See what the press is saying about our products, technology, and partners.",presses:[{image:"assets/images/press_1.png",date:"DEC 28, 2015",description:"Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo."},{image:"assets/images/press_2.png",date:"JAN 02, 2016",description:"Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo."},{image:"assets/images/press_3.png",date:"JUL 15, 2016",description:"Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo."}],viewmore:"View More"}},e={restrict:"A",templateUrl:"app/components/press/press.html",controller:t,controllerAs:"pr",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appHeader",function(){var e,t;return t=["$rootScope","$scope",function(e,t){"ngInject";var i;i=this,i.global=e.global,i.menus=[{title:"Company",state:"company"},{title:"Solution",state:"solution"},{title:"Technology",state:"technology"},{title:"Press",state:"press"},{title:"Contact",state:"contact"}]}],e={restrict:"A",templateUrl:"app/components/header/header.html",controller:t,controllerAs:"hd",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appGallery",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.title="Easy as Blackfire",e.description="Enjoying a truly seamless real-time media experience on multiple devices has never been this easy. Our technology works with almost any hardware platform.",e.gallery=[{image:"http://lorempixel.com/300/800/technics/",width:1},{image:"http://lorempixel.com/300/400/technics/",width:1},{image:"http://lorempixel.com/600/400/technics/",width:2},{image:"http://lorempixel.com/300/400/nightlife/",width:1},{image:"http://lorempixel.com/300/400/transport/",width:1},{image:"http://lorempixel.com/300/400/fashion/",width:1},{image:"http://lorempixel.com/600/400/nightlife/",width:2}]},e={restrict:"A",templateUrl:"app/components/gallery/gallery.html",controller:t,controllerAs:"gl",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appFooter",function(){var e,t;return t=["$rootScope","$scope",function(e,t){"ngInject";var i;i=this,i.devices=[{image:"assets/images/icon-mobile.png",title:"Mobile"},{image:"assets/images/icon-speaker.png",title:"Speakers"},{image:"assets/images/icon-tv.png",title:"TV"},{image:"assets/images/icon-tablet.png",title:"Tablet"},{image:"assets/images/icon-thermostat.png",title:"Thermostat"},{image:"assets/images/icon-router.png",title:"Router"},{image:"assets/images/icon-earphone.png",title:"Ear Phone"},{image:"assets/images/icon-smarthome.png",title:"Smart Home"}],i.techs=[{image:"assets/images/icon-blackfire.png"},{image:"assets/images/icon-wifi.png"},{image:"assets/images/icon-android.png"},{image:"assets/images/icon-apple.png"}],i.otherMenus=[{state:"home",title:"Terms of Use"},{state:"home",title:"Privacy Policy"},{state:"home",title:"SiteMap"}],i.menus=[{title:"BlackFire",items:[{state:"home",title:"Overview"},{state:"home",title:"Advantage"},{state:"home",title:"Support"}]},{title:"SiteMap",items:[{state:"home",title:"Home"},{state:"home",title:"About Us"},{state:"home",title:"Audio and Video"},{state:"home",title:"Connected home"},{state:"home",title:"Company"},{state:"home",title:"Solution"},{state:"home",title:"Industry"},{state:"home",title:"Partners"},{state:"home",title:"Contact"}]},{title:"Careers",items:[{state:"home",title:"Become a partner"},{state:"home",title:"Partners Information"},{state:"home",title:"Partner List"}]},{title:"QIContact Form",items:[{state:"home",title:"Terms of Use"},{state:"home",title:"Privacy Policy"},{state:"home",title:"Sitemap"},{state:"home",title:"Careers"}]}],i.socials=[{href:"",image:"assets/images/icon-twitter.png"},{href:"",image:"assets/images/icon-facebook.png"},{href:"",image:"assets/images/icon-linkedin.png"},{href:"",image:"assets/images/icon-youtube.png"},{href:"",image:"assets/images/icon-googleplus.png"},{href:"",image:"assets/images/icon-instagram.png"},{href:"",image:"assets/images/icon-t.png"}],i.about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt tristique nunc ut lacinia. Integer tempus nisl et dolor malesuada, sit amet interdum ipsum posuere."}],e={restrict:"A",templateUrl:"app/components/footer/footer.html",controller:t,controllerAs:"ft",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appFeatures",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.features=[{image:"assets/images/multichanel.png",title:"Multichannel",description:["Multi-room and multi-channel streaming to Wi-Fi speakers and SmartTVs for surround sound and multi-room experiences","Flawlessly stream audio and video from your Home Theatre PC"]},{image:"assets/images/multidevice.png",title:"Multidevice",description:["Enjoy perfect audio from your wireless headsets","Turn your smartwatch indo a mobile music hub"]},{image:"assets/images/multiroom.png",title:"Multiroom",description:["Stream to your smartphone/tablet… or from your smartphone/tablet!","Connect multiple devices to the same stream for a multi-screen experience"]}]},e={restrict:"A",templateUrl:"app/components/features/features.html",controller:t,controllerAs:"ft",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appFavourites",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.data={title:"Supports your Favourite Streaming Services",favourites:[{image:"assets/images/spotify.png",title:"Spotify"},{image:"assets/images/google_play_music.png",title:"Google Play Music"},{image:"assets/images/rdio.png",title:"Rdio"},{image:"assets/images/nrpone.png",title:"NRpone"},{image:"assets/images/7_digital.png",title:"7 digital"},{image:"assets/images/tune_in.png",title:"TuneIn"}]},e.config={autoHideScrollbar:!1,theme:"rounded-dots-dark",advanced:{updateOnContentResize:!0},setHeight:210,mouseWheel:{enable:!0,axis:"x"},scrollButtons:{enable:!0}}},e={restrict:"A",templateUrl:"app/components/favourites/favourites.html",controller:t,controllerAs:"fv",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appConnected",function(){var e,t;return e=function(){"ngInject";var e;e=this,e.data={cta:{title:"Always connected",description:"What’s the point of wireless if you always need to pair your device? With Blackfire you can get the music going from any room."}}},t={restrict:"A",templateUrl:"app/components/connected/connected.html",controller:e,controllerAs:"cn",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appAbout",function(){var e,t;return e=function(){"ngInject";var e;e=this,e.data=[{description:"Stream media to anywhere in the house, or to the whole house. It works the way you need it to work. The idea is brilliantly simple.",cta:"We call it Blackfire"},{title:"The Power of Blackfire",description:"You can stream audio and video in your home with complete freedom",content:[{image:"assets/images/solution-1.png",description:"Stream audio to one device, video to another. Multichannel transforms into multiroom."},{image:"assets/images/solution-2.png",description:"Stream to multiple tablets through Blackfire. Everyone gets to watch."}]},{title:"TV, PC, Smartphone, all in in perfect rhythm",description:"Because sometimes life just needs a soundtrack. Blackfire makes sure that you don’t miss a beat.",image:"assets/images/about.png"},{title:"Get Connected With Blackfire"}]},t={restrict:"A",templateUrl:"app/components/about/about.html",controller:e,controllerAs:"ab",bindToController:!0}})}.call(this),function(){angular.module("blackfire").controller("TechnologyController",["$scope",function(e){"ngInject";var t;e.dragPos=40,t=!1,e.startDrag=function(e){return t=!0},e.draging=function(i){return t?e.dragPos=i.clientX/i.currentTarget.clientWidth*100:void 0},e.stopDrag=function(e){return t=!1},e.data={title:"Chip and OS Agnostic",content:["Blackfire works perfectly with hardware from many Wi-Fi chipset vendors including Broadcom, and RealTek.","It supports Linux, Android, iOS, Windows, ThreadEx and other RTOS operating systems."],list:[{background:"../assets/images/technology-bg-1.png",image:"./assets/images/technology-1.png",title:"RPM",description:"Realtime Packmmmtet Management<br><small>RPM streams lossless 24-bit/96kHz Studio Quality HD audio and HD video to any device, any room — it’s how we make sure that there are no gaps or drop-outs in your music.</small>"},{background:"../assets/images/technology-bg-2.png",image:"./assets/images/technology-2.png",title:"TIS",description:"Traffic Independent Synchronization<br><small>No matter how much bandwidth you are using on your network, Blackfire will ensure that there is always enough room to serve your media. It always stays in synch.</small>"},{background:"../assets/images/technology-bg-3.png",image:"./assets/images/technology-3.png",title:"DSB",description:"Dynamic Stream Balancing<br><small>When streaming to multiple devices, DSM keeps it all in balance. This ensures that your media streams are rendered accurately on each device.</small>"}],blueprint:{cover:{title:"Ask For Blackfire",description:"Blackfire FireCast Wi-Fi<br><small>Our technology works with any Wi-Fi chipset, so whatever hardware or OS you have - Blackfire’s technology can light it up and deliver a seamless media experience.</small>",list:[{title:"Features",images:"./assets/images/technology-features.png",details:["24-bit/96kHz","Multiroom","MultiChannel","1, 2.1, 5.1 Home Theater","BT & Aux Rebroadcast","24But/96 KHZ, Lossy, Lossless"]},{title:"Specifications",images:"./assets/images/technology-specifications.png",details:["802.11n 2.4 Ghz","24 Bit / 96 Khz Music","12S Audio output","12S in 16bit, 44 Khz","Support GPIO or UART Control"]},{title:"Input & Output",images:"./assets/images/technology-input-output.png",details:["Bluetooth Input","AUX Input","Low Cost"]}]},background:[{top:9.5,left:58.5,width:25,title:"DSB",description:"Dynamic Stream Balancing<br><small>When streaming to multiple devices, DSM keeps it all in balance. This acts as the conductor in your media orchestra, ensuring that your media is rendered accurately on each device.</small>",x:"bl-left",y:"bl-top"},{top:24,left:59,width:25,title:"DSB",description:"Dynamic Stream Balancing<br><small>When streaming to multiple devices, DSM keeps it all in balance. This acts as the conductor in your media orchestra, ensuring that your media is rendered accurately on each device.</small>",x:"bl-left",y:"bl-bottom"},{top:30,left:38,width:20,title:"DSB",description:"Dynamic Stream Balancing<br><small>When streaming to multiple devices, DSM keeps it all in balance. This acts as the conductor in your media orchestra, ensuring that your media is rendered accurately on each device.</small>",x:"bl-right",y:"bl-bottom"}]},footer:{title:"Lorem ipsum dolor",description:"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Cras et leo hendrerit risus porta"}}}])}.call(this),function(){angular.module("blackfire").controller("SolutionController",["$scope",function(e){"ngInject";e.data={title:"The Media Internet of Things",content:"Blackfire amplifies the Internet of Things by delivvering seamless audio and beautiful visuals to any room of your house. We call it the Media Internet of Things (MIoT).  Our technology provides solutions to light up all the media devices in your home, from multi-room smart speakers to smartwatches and smart TVs."}}])}.call(this),function(){angular.module("blackfire").controller("PressController",["$scope",function(e){"ngInject";e.data={more:"More Press",list:[{date:"Dec 8th,2015",image:"/assets/images/press-1.png",title:"Lorem Ipsum is simply",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the lea."},{date:"Dec 8th,2015",image:"/assets/images/press-2.png",title:"Lorem Ipsum is simply",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the lea."},{date:"Dec 8th,2015",image:"/assets/images/press-1.png",title:"Lorem Ipsum is simply",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the lea."}]}}])}.call(this),function(){angular.module("blackfire").controller("MainController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").controller("ContactController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").controller("CompanyController",["$scope",function(e){"ngInject";e.data=[{title:"About Blackfire Research",content:"We are a San Francisco-based startup who believe that everything should be connected. Mainstream connected-home technology wasn’t doing enough. Our thermostat, door, and even toaster (don’t ask) are connected in the Internet of Things, but what we really want is seamless access to our media, from any screen and any speaker. And we want it without the lag, disruptions and out-of-synch audio that you get with the current solutions."},{title:"We fixed it, and we made it easy",content:"Blackfire created what we call the Media Internet of Things (Media IoT) by syncing video and audio over the universal Wi-Fi standard. Now you can watch your favorite shows in any room, through different speakers and multiple screens – all in perfect sync. Want to extend your house party to the backyard while having your music hit each beat perfectly? Or set up a surround sound system with multiple wireless speakers in your living room? With Blackfire you can."},{title:"Everything is connected",content:"We are a San Francisco-based startup who believe that everything should be connected. Mainstream connected-home technology wasn’t doing enough. Our thermostat, door, and even toaster (don’t ask) are connected in the Internet of Things, but what we really want is seamless access to our media, from any screen and any speaker. And we want it without the lag, disruptions and out-of-synch audio that you get with the current solutions."}]}])}.call(this),function(){angular.module("blackfire").run(["$log","$rootScope","$timeout","$window",function(e,t,i,s){"ngInject";var a,o;return t.toggleSearch=function(){return t.onSearch=!t.onSearch,i(function(){return $("#search-input").focus()},300)},angular.element(s).bind("scroll",function(){return t.pageYOffset=s.pageYOffset,t.$apply(),o()}),t.global={scrollTop:function(){return t.pageYOffset},toggleMenu:function(){return t.showMenu=!t.showMenu}},o=function(){return $(".fade-in-up-item").each(function(){return a($(this),"animated fadeInUp")}),$(".fade-in-down-item").each(function(){return a($(this),"animated fadeInDown")}),$(".fade-in-item").each(function(){return a($(this),"animated fadeIn")}),$(".fade-in-left-item").each(function(){return a($(this),"animated fadeInLeft")}),$(".fade-in-right-item").each(function(){return a($(this),"animated fadeInRight")})},a=function(e,t){var i,s;return i=e.offset().top+e.outerHeight(),s=$(window).scrollTop()+$(window).height(),e.outerHeight()>50&&(i=e.offset().top+50),s>i?e.addClass(t):void 0},t.$on("$stateChangeStart",function(e,s,a,l,n){return t.showMenu=!1,i(function(){return o()},300)})}])}.call(this),function(){angular.module("blackfire").config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";return e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("company",{url:"/company",templateUrl:"app/company/company.html",controller:"CompanyController",controllerAs:"company"}).state("solution",{url:"/solution",templateUrl:"app/solution/solution.html",controller:"SolutionController",controllerAs:"solution"}).state("technology",{url:"/technology",templateUrl:"app/technology/technology.html",controller:"TechnologyController",controllerAs:"technology"}).state("press",{url:"/press",templateUrl:"app/press/press.html",controller:"PressController",controllerAs:"press"}).state("contact",{url:"/contact",templateUrl:"app/contact/contact.html",controller:"ContactController",controllerAs:"contact"}),t.otherwise("/")}])}.call(this),function(){angular.module("blackfire").constant("malarkey",malarkey).constant("moment",moment)}.call(this),function(){angular.module("blackfire").config(["$logProvider","toastrConfig",function(e,t){"ngInject";return e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}])}.call(this),angular.module("blackfire").run(["$templateCache",function(e){e.put("app/company/company.html",'<div class="app-company"><div class="fullwidth-image fade-in-item hidden-xs"><img src="./assets/images/company-banner.png"></div><div class="fullwidth-image fade-in-item visible-xs"><img src="./assets/images/company-banner-xs.png"><div class="line-company-xs fade-in-up-item visible-xs"></div></div><div class="about fs-4 fs-p"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center"><div class="fade-in-up-item hd">{{data[0].title}}</div><div class="fade-in-up-item ct">{{data[0].content}}</div></div><div class="clearfix"></div><div class="line-company-1 fade-in-up-item hidden-xs"></div></div><div class="col-md-6"><div class="row"><div class="fullwidth-image fade-in-item"><img src="./assets/images/company-1.png"></div></div></div><div class="col-md-6 hidden-xs"><div class="row"><div class="fullwidth-image fade-in-item"><img src="./assets/images/company-2.png"></div></div></div><div class="clearfix"></div><div class="company-banner"><div class="col-sm-6 hidden-xs"><div class="fullwidth-image fade-in-item row"><img src="./assets/images/company-3.png"></div></div><div class="col-sm-6 relative hidden-xs"><div class="fullwidth-image fade-in-item row"><img src="./assets/images/company-4.png"></div><div class="cta vertical-center fs-3"><div class="fade-in-up-item hd">{{data[1].title}}</div><div class="fade-in-up-item ct">{{data[1].content}}</div></div></div><div class="visible-xs text-center fs-3 fs-p"><div class="fade-in-up-item hd">{{data[1].title}}</div><div class="fade-in-up-item ct">{{data[1].content}}</div></div><div class="clearfix"></div><div class="line-company-2 fade-in-up-item hidden-xs"></div><div class="line-company-xs fade-in-up-item visible-xs"></div></div><div class="about fs-4 fs-p"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center"><div class="fade-in-up-item hd">{{data[2].title}}</div><div class="fade-in-up-item ct">{{data[2].content}}</div></div><div class="clearfix"></div></div></div>'),e.put("app/contact/contact.html",'<div class="app-contact"><div class="fullwidth-image fade-in-item"><img src="./assets/images/contact-banner.png"></div><div class="about"><div class="contact-line"></div><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center fs-4"><div class="fade-in-up-item hd">Want your device to be a part of the Media Internet Of Things?</div><div class="fade-in-up-item ct">Blackfire-enabled devices allow consumers to stream any media between any devices, through multiple channels, and even in different rooms.</div><div class="fade-in-up-item ct">Now that we found a way to seamlessly sync media over WiFi, devices fall into two categories: pre-Blackfire and Blackfire-enabled.</div></div><div class="clearfix"></div></div><div class="clearfix"></div><div class="contact-form"><form ng-submit="contact()"><div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1 text-center fs-3"><div class="fade-in-up-item hd">Contact us today to join the Media IOT.</div><div class="row"><div class="col-md-4"><input type="text" class="form-control name fade-in-up-item" placeholder="Name" ng-model="name"></div><div class="col-md-4"><input type="email" class="form-control fade-in-up-item" placeholder="E-mail" ng-model="email"></div><div class="col-md-4"><select class="form-control fade-in-up-item" ng-model="subject"><option disabled="disabled">Subject</option></select></div><div class="col-md-12"><textarea class="form-control fade-in-up-item" rows="6" placeholder="Message"></textarea></div><div class="col-md-12 text-left"><button type="submit" class="btn fade-in-up-item">SEND</button></div></div></div><div class="clearfix"></div></form></div></div>'),e.put("app/main/main.html",'<div app-slide=""></div><div app-favourites=""></div><div app-about=""></div><div app-press=""></div><div app-connected=""></div>'),e.put("app/press/press.html",'<div class="page-press"><div app-press=""></div><div class="main-press"><div class="press-top-line-1 fade-in-up-item"></div><div class="press-top-line-2 fade-in-up-item"></div><div class="press-top-line-3 fade-in-up-item"></div><div class="press-bottom-line fade-in-up-item"></div><div class="more-press fs-1"><div class="hd text-center fade-in-up-item">{{data.more}}</div><div class="list" ng-repeat="item in data.list"><div class="left-area"><div class="date ct fade-in-up-item">{{item.date}}</div><div class="image fullwidth-image fade-in-up-item"><img ng-src="{{item.image}}"></div></div><div class="right-area"><strong class="ct fade-in-up-item">{{item.title}}</strong><div class="ct fade-in-up-item">{{item.content}}</div></div></div></div></div></div>'),e.put("app/solution/solution.html",'<div class="page-solution"><div class="solution-banner"><div class="cta fs-1"><div class="v-center"><div class="hd">{{data.title}}</div><div class="ct">{{data.content}}</div></div></div></div><div app-favourites=""></div><div app-connected=""></div><div app-features=""></div><div app-gallery=""></div></div>'),e.put("app/technology/technology.html",'<div class="technology"><div class="banner fullwidth-image"><img src="./assets/images/technology-banner.png"><div class="cta fs-1"><div class="v-center"><div><div class="hd text">{{data.title}}</div><div class="clearfix"></div></div><div class="ct" ng-repeat="item in data.content">{{item}}</div></div></div></div><div class="col-sm-4" ng-repeat="item in data.list"><div class="row fullwidth-image detail" ng-style="{\'background-image\':\'url(\'+item.background+\')\'}"><img ng-src="{{item.image}}" class="fade-in-up-item"><div class="cta fs-1"><div class="fade-in-up-item hd">{{item.title}}</div><div class="fade-in-up-item hd sub">{{item.subtitle}}</div><div class="fade-in-up-item ct">{{item.description}}</div></div></div></div><div class="clearfix"></div><div class="blueprint" ng-mousemove="draging($event)"><div id="action-button" ng-style="{\'left\': dragPos+\'vw\'}"><button ng-mousedown="startDrag()" ng-mouseup="stopDrag()" ng-mouseleave="stopDrag()">&nbsp;</button></div><div class="cover"><div class="fullwidth-image"><img src="./assets/images/technology-blueprint-cover.png"></div><div class="main-content"><div class="cta fs-4"><div class="col-sm-12"><div class="hd">{{data.blueprint.cover.title}}</div><div class="subtitle">{{data.blueprint.cover.subtitle}}</div><div class="ct">{{data.blueprint.cover.description}}</div></div><div class="clearfix"></div><div class="bl-list"><div ng-repeat="item in data.blueprint.cover.list" class="bl-group col-sm-4"><img ng-src="{{item.image}}"><br>{{item.title}}<div ng-repeat="dt in item.details" class="bl-detail">{{dt}}</div></div><div class="clearfix"></div></div></div></div></div><div class="background" ng-style="{\'right\': (100-dragPos)+\'vw\'}"><div class="main-content fullwidth-image" ng-style="{\'margin-left\': (100-dragPos)+\'vw\'}"><div class="center-content"><img src="./assets/images/technology-blueprint.png"><div ng-repeat="item in data.blueprint.background" ng-style="{\'top\': item.top+\'vw\', left: item.left+\'vw\'}" class="blueprint-item"><button>+</button><div class="cta fs-1" ng-style="{width: item.width+\'vw\'}" ng-class="item.x + \' \' + item.y"><div class="hd" ng-bind-html="item.title"></div><div class="ct" ng-bind-html="item.description"></div></div></div></div></div></div></div><div app-favourites=""></div><div class="technology-footer fs-1 fs-p"><div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center"><div class="fade-in-up-item hd">{{data.footer.title}}</div><div class="fade-in-up-item ct">{{data.footer.description}}</div></div><div class="clearfix"></div></div></div>'),e.put("app/components/about/about.html",'<div class="app-about"><div class="bl-group-1 text-center fs-2"><div class="bl-description col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item">{{ab.data[0].description}}</div><div class="clearfix"></div><div class="bl-cta fade-in-up-item"><button ui-sref="main">{{ab.data[0].cta}}</button></div></div><div class="bl-group-2 text-center"><div class="fs-3"><div class="col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item hd">{{ab.data[1].title}}</div><div class="col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item ct bl-description">{{ab.data[1].description}}</div><div class="line-about-1 fade-in-up-item hidden-xs"></div></div><div class="clearfix"></div><div class="col-sm-6 bl-list fs-1" ng-repeat="item in ab.data[1].content"><div class="row"><img ng-src="{{item.image}}"><div class="bl-description col-lg-8 col-xs-10 col-lg-offset-2 col-xs-offset-1 fade-in-up-item"><div class="v-center ct">{{item.description}}</div></div></div></div><div class="clearfix"></div></div><div class="bl-group-3 fs-1"><div><div class="col-lg-3 col-lg-offset-3 col-md-4 col-md-offset-2 col-sm-5 col-sm-offset-1 cta"><div><div class="v-center"><div class="fade-in-up-item hd">{{ab.data[2].title}}</div><div class="fade-in-up-item ct">{{ab.data[2].description}}</div></div></div></div><div class="bl-image col-lg-3 col-md-4 col-sm-5"><img ng-src="{{ab.data[2].image}}" class="fade-in-up-item"><div class="line-about-2 fade-in-up-item"></div></div><div class="clearfix"></div></div></div><div class="bl-group-4 text-center fs-2 fs-p"><div class="fade-in-up-item">{{ab.data[3].title}}</div></div></div>'),e.put("app/components/connected/connected.html",'<div class="app-connected fs-1"><div class="bl-main"><video autoplay="" poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" loop=""><source src="//www.w3schools.com/html/mov_bbb.webm" type="video/webm"><source src="//www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></video><div class="bl-cta text-center"><div class="col-xs-10 col-xs-offset-1 fade-in-up-item hd">{{cn.data.cta.title}}</div><div class="col-xs-10 col-xs-offset-1 fade-in-up-item ct">{{cn.data.cta.description}}</div></div></div></div>'),e.put("app/components/favourites/favourites.html",'<div class="app-favourites fs-4 fs-p"><div class="hd col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item">{{fv.data.title}}</div><div class="clearfix"></div><div ng-scrollbars="" ng-scrollbars-config="fv.config" class="col-xs-10 col-xs-offset-1 hidden-xs"><ul class="list list-inline"><li ng-repeat="item in fv.data.favourites" class="fade-in-up-item"><img ng-src="{{item.image}}"> {{item.title}}</li></ul></div><carousel interval="myInterval" class="visible-xs fade-in-up-item"><slide ng-repeat="item in fv.data.favourites" active="item.active"><img ng-src="{{item.image}}"> {{item.title}}</slide></carousel><div class="clearfix"></div></div>'),e.put("app/components/features/features.html",'<div class="app-features"><ul class="list-unstyled"><li ng-repeat="item in ft.features" class="col-sm-4"><div class="row"><img ng-src="{{item.image}}" class="fade-in-item"><div class="cta fs-1 col-xs-12 text-center"><div class="fade-in-up-item"><span class="hd">{{item.title}}</span></div><div class="fade-in-up-item ct" ng-repeat="text in item.description | limitTo: 2">{{text}}</div></div></div></li></ul><div class="clearfix"></div></div>'),e.put("app/components/footer/footer.html",'<div class="app-footer"><div class="container"><div class="top-area row"><div class="col-sm-12 hidden-xs"><ul class="list-inline text-center"><li ng-repeat="item in ft.devices" class="fade-in-up-item"><img ng-src="{{item.image}}"><br><br>{{item.title}}</li></ul></div><div class="clearfix"></div></div><div class="bottom-area text-center"><div class="row"><div class="social text-center col-md-4"><img ng-src="{{item.image}}" ng-repeat="item in ft.techs" class="fade-in-up-item"><div class="fade-in-up-item">©2015 Blackfire Research, Inc.</div><ul class="other-menus list-inline"><li ng-repeat="item in ft.socials" class="fade-in-up-item"><a href="{{item.href}}"><img ng-src="{{item.image}}"></a></li></ul><ul class="other-menus list-inline"><li ng-repeat="item in ft.otherMenus" class="fade-in-up-item"><a ui-sref="{{item.state}}">{{item.title}}</a> <span class="divider">|</span></li></ul><div class="about">{{ft.about}}</div></div><div ng-repeat="menu in ft.menus" class="col-md-2 col-sm-3 col-xs-6 text-left menus"><div class="title fade-in-up-item">{{menu.title}}</div><ul class="list-unstyled"><li ng-repeat="item in menu.items" class="fade-in-up-item"><a ui-sref="{{item.state}}">{{item.title}}</a></li></ul></div></div></div></div></div>'),e.put("app/components/gallery/gallery.html",'<div class="app-gallery"><div class="fs-4 fs-p"><div class="fade-in-up-item hd">{{gl.title}}</div><div class="fade-in-up-item ct">{{gl.description}}</div></div><ul class="list-unstyled"><li class="fade-in-item" ng-repeat="item in gl.gallery" ng-class="\'w-\'+item.width"><img ng-src="{{item.image}}"></li></ul><div class="clearfix"></div></div>'),e.put("app/components/header/header.html",'<div class="app-header" ng-class="{\'header-collapsed\':hd.global.scrollTop()>0}"><div class="bl-logo"><a ui-sref="home"><img src="./assets/images/logo.png"></a></div><ul class="bl-menu hidden-xs"><li ng-repeat="item in hd.menus"><a ui-sref="{{item.state}}">{{item.title}}</a></li><li><a href="javascript:;" ng-click="toggleSearch()"><img src="/assets/images/icon-search.png"></a></li></ul><div class="bl-menu-xs visible-xs"><a href="javascript:;" ng-click="toggleSearch()"><img src="/assets/images/icon-search.png"></a> <a href="javascript:;" ng-click="global.toggleMenu()"><img src="/assets/images/icon-menu.png"></a></div><div class="menu-xs visible-xs"><ul class="bl-menu-right-xs list-unstyled"><li ng-repeat="item in hd.menus"><a ui-sref="{{item.state}}">{{item.title}}</a></li></ul></div><div ng-include="\'app/components/search/search.html\'"></div></div>'),
e.put("app/components/press/press.html",'<div class="app-press fs-4 fs-p"><div class="hd fade-in-up-item text-center">{{pr.data.title}}</div><div class="ct col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item text-center">{{pr.data.description}}</div><div class="clearfix"></div><ul class="list-inline hidden-xs"><li ng-repeat="item in pr.data.presses"><div class="bl-container fade-in-up-item"><img ng-src="{{item.image}}"><div class="bl-cta"><div class="bl-date ct">{{item.date}}</div><div class="bl-desciption ct">{{item.description}}</div></div></div></li></ul><carousel interval="myInterval" class="visible-xs fade-in-up-item"><slide ng-repeat="item in pr.data.presses" active="item.active"><div class="bl-container"><img ng-src="{{item.image}}"><div class="bl-cta"><div class="bl-date ct">{{item.date}}</div><div class="bl-desciption ct">{{item.description}}</div></div></div></slide></carousel><div class="bl-viewmore fade-in-up-item"><a ui-sref="main" class="ct">{{pr.data.viewmore}}</a></div></div>'),e.put("app/components/search/search.html",'<form role="search" class="navbar-search"><div class="search-group"><div id="search" class="search_area" ng-class="{\'open\': onSearch}"><div class="search-container"><form class="search-form"><input id="search-input" type="search" placeholder="Search..." class="search-input"><i class="fa fa-search"></i></form><div class="search-content"><div class="dummy-row"><div class="dummy-column"><h2>Pages</h2><a href="#" class="dummy-media-object no-image"><h3>Sara Soueidan</h3><em>on http://www.bfrx.com/audio-video.php</em></a> <a href="#" class="dummy-media-object no-image"><h3>Rachel Smith</h3><em>on http://www.bfrx.com/audio-video.php</em></a></div><div class="dummy-column"><h2>White Papers</h2><a href="#" class="dummy-media-object"><img src="/assets/images/icon-pdf.png"><h3>Sara Soueidan</h3><em>on http://www.bfrx.com/audio-video.php</em></a> <a href="#" class="dummy-media-object"><img src="/assets/images/icon-pdf.png"><h3>Rachel Smith</h3><em>on http://www.bfrx.com/audio-video.php</em></a> <a href="#" class="dummy-media-object"><img src="/assets/images/icon-pdf.png"><h3>Peter Finlan</h3><em>on http://www.bfrx.com/audio-video.php</em></a> <a href="#" class="dummy-media-object"><img src="/assets/images/icon-pdf.png"><h3>Patrick Cox</h3><em>on http://www.bfrx.com/audio-video.php</em></a> <a href="#" class="dummy-media-object"><img src="/assets/images/icon-pdf.png"><h3>Tim Holman</h3><em>on http://www.bfrx.com/audio-video.php</em></a></div><div class="dummy-column"><h2>Media</h2><a href="#" class="dummy-media-object"><img src="/assets/images/icon-video.png"><h3>Sara Soueidan</h3><em>on http://www.bfrx.com/audio-video.php</em></a> <a href="#" class="dummy-media-object"><img src="/assets/images/icon-video.png"><h3>Rachel Smith</h3><em>on http://www.bfrx.com/audio-video.php</em></a> <a href="#" class="dummy-media-object"><img src="/assets/images/icon-video.png"><h3>Peter Finlan</h3><em>on http://www.bfrx.com/audio-video.php</em></a></div></div></div><span class="search-close" ng-click="toggleSearch()"></span></div></div></div></form>'),e.put("app/components/slide/slide.html",'<div class="app-slide"><carousel interval="myInterval"><slide ng-repeat="slide in sl.slides" active="slide.active"><img ng-src="{{slide.image}}"><div ng-repeat="(index, item) in slide.items" class="bl-item fullwidth-image" ng-style="{\'top\': item.top, \'left\': item.left, \'bottom\': item.bottom, \'right\': item.right, \'width\': item.width, \'z-index\': \'index\'}" ng-class="item.class"><img ng-src="{{item.image}}"></div><div class="cta fs-1"><div class="v-center"><div class="fade-in-down-item text-left"><div class="hd text" ng-bind-html="slide.title"></div><div class="clearfix"></div></div><div class="fade-in-up-item text-left"><div class="ct text" ng-bind-html="slide.description"></div><div class="clearfix"></div></div></div></div></slide></carousel></div>')}]);
//# sourceMappingURL=../maps/scripts/app-8338389884.js.map
