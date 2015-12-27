(function(){angular.module("blackfire",["ngAnimate","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}).call(this),function(){angular.module("blackfire").service("webDevTec",function(){"ngInject";var e,t;e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}],t=function(){return e},this.getTec=t})}.call(this),function(){angular.module("blackfire").directive("appSlide",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.myInterval=3e3,e.slides=[{image:"assets/banner.png"},{image:"assets/banner.png"},{image:"assets/banner.png"},{image:"assets/banner.png"}]},e={restrict:"A",templateUrl:"app/components/slide/slide.html",controller:t,controllerAs:"sl",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appPress",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.data={title:"Press",description:"People have already discovered Blackfire Technology. See what the press is saying about our products, technology, and partners.",presses:[{image:"assets/press_1.png",date:"DEC 28, 2015",description:"Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo."},{image:"assets/press_2.png",date:"JAN 02, 2016",description:"Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo."},{image:"assets/press_3.png",date:"JUL 15, 2016",description:"Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo."}],viewmore:"View More"}},e={restrict:"A",templateUrl:"app/components/press/press.html",controller:t,controllerAs:"pr",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("acmeNavbar",function(){var e,t;return e=["moment",function(e){"ngInject";var t;t=this,t.relativeDate=e(t.creationDate).fromNow()}],t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("acmeMalarkey",function(){var e,t,i;return e=["$log","githubContributor",function(e,t){"ngInject";var i,a,s;s=this,i=function(){return a().then(function(){e.info("Activated Contributors View")})},a=function(){return t.getContributors(10).then(function(e){return s.contributors=e,s.contributors})},s.contributors=[],i()}],i=function(e,t,i,a){var s,o;o=void 0,s=malarkey(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),t.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(e){s.type(e).pause()["delete"]()}),o=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(e){s.type(e.login).pause()["delete"]()})}),e.$on("$destroy",function(){o()})},t={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:i,controller:e,controllerAs:"vm"}})}.call(this),function(){angular.module("blackfire").directive("appHeader",function(){var e,t;return t=["$rootScope","$scope",function(e,t){"ngInject";var i;i=this,i.global=e.global,i.menus=[{title:"Company",state:"company"},{title:"Solution",state:"solution"},{title:"Technology",state:"technology"},{title:"Press",state:"press"},{title:"Contact",state:"contact"}]}],e={restrict:"A",templateUrl:"app/components/header/header.html",controller:t,controllerAs:"hd",bindToController:!0}})}.call(this),function(){angular.module("blackfire").factory("githubContributor",["$log","$http",function(e,t){"ngInject";var i,a,s;return i="https://api.github.com/repos/Swiip/generator-gulp-angular",a=function(a){var s,o;return null==a&&(a=30),s=function(e){return e.data},o=function(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))},t.get(i+"/contributors?per_page="+a).then(s)["catch"](o)},s={apiHost:i,getContributors:a}}])}.call(this),function(){angular.module("blackfire").directive("appFooter",function(){var e,t;return t=["$rootScope","$scope",function(e,t){"ngInject";var i;i=this,i.devices=[{image:"assets/icon-mobile.png",title:"Mobile"},{image:"assets/icon-speaker.png",title:"Speakers"},{image:"assets/icon-tv.png",title:"TV"},{image:"assets/icon-tablet.png",title:"Tablet"},{image:"assets/icon-thermostat.png",title:"Thermostat"},{image:"assets/icon-router.png",title:"Router"},{image:"assets/icon-earphone.png",title:"Ear Phone"},{image:"assets/icon-smarthome.png",title:"Smart Home"}],i.techs=[{id:1,image:"assets/icon-wifi.png"},{id:2,image:"assets/icon-android.png"},{id:3,image:"assets/icon-apple.png"}],i.otherMenus=[{state:"home",title:"Terms of Use"},{state:"home",title:"Privacy Policy"},{state:"home",title:"SiteMap"}],i.menus=[{title:"BlackFire",items:[{state:"home",title:"Overview"},{state:"home",title:"Advantage"},{state:"home",title:"Support"}]},{title:"SiteMap",items:[{state:"home",title:"Home"},{state:"home",title:"About Us"},{state:"home",title:"Audio and Video"},{state:"home",title:"Connected home"},{state:"home",title:"Company"},{state:"home",title:"Solution"},{state:"home",title:"Industry"},{state:"home",title:"Partners"},{state:"home",title:"Contact"}]},{title:"Careers",items:[{state:"home",title:"Become a partner"},{state:"home",title:"Partners Information"},{state:"home",title:"Partner List"}]},{title:"QIContact Form",items:[{state:"home",title:"Terms of Use"},{state:"home",title:"Privacy Policy"},{state:"home",title:"Sitemap"},{state:"home",title:"Careers"}]}],i.socials=[{href:"",image:"assets/icon-twitter.png"},{href:"",image:"assets/icon-facebook.png"},{href:"",image:"assets/icon-linkedin.png"},{href:"",image:"assets/icon-youtube.png"},{href:"",image:"assets/icon-googleplus.png"},{href:"",image:"assets/icon-instagram.png"},{href:"",image:"assets/icon-t.png"}],i.about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt tristique nunc ut lacinia. Integer tempus nisl et dolor malesuada, sit amet interdum ipsum posuere."}],e={restrict:"A",templateUrl:"app/components/footer/footer.html",controller:t,controllerAs:"ft",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appGallery",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.title="Easy as Blackfire",e.description="Enjoying a truly seamless real-time media experience on multiple devices has never been this easy. Our technology works with almost any hardware platform.",e.gallery=[{image:"http://lorempixel.com/300/800/technics/",width:1},{image:"http://lorempixel.com/300/400/technics/",width:1},{image:"http://lorempixel.com/600/400/technics/",width:2},{image:"http://lorempixel.com/300/400/nightlife/",width:1},{image:"http://lorempixel.com/300/400/transport/",width:1},{image:"http://lorempixel.com/300/400/fashion/",width:1},{image:"http://lorempixel.com/600/400/nightlife/",width:2}]},e={restrict:"A",templateUrl:"app/components/gallery/gallery.html",controller:t,controllerAs:"gl",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appFeatures",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.features=[{image:"assets/multichanel.png",title:"Multichannel",description:["Multi-room and multi-channel streaming to Wi-Fi speakers and SmartTVs for surround sound and multi-room experiences","Flawlessly stream audio and video from your Home Theatre PC"]},{image:"assets/multidevice.png",title:"Multidevice",description:["Enjoy perfect audio from your wireless headsets","Turn your smartwatch indo a mobile music hub"]},{image:"assets/multiroom.png",title:"Multiroom",description:["Stream to your smartphone/tablet… or from your smartphone/tablet!","Connect multiple devices to the same stream for a multi-screen experience"]}]},e={restrict:"A",templateUrl:"app/components/features/features.html",controller:t,controllerAs:"ft",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appFavourites",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.data={title:"Supports your Favourite Streaming Services",favourites:[{image:"assets/spotify.png",title:"Spotify"},{image:"assets/google_play_music.png",title:"Google Play Music"},{image:"assets/rdio.png",title:"Rdio"},{image:"assets/nrpone.png",title:"NRpone"},{image:"assets/7_digital.png",title:"7 digital"},{image:"assets/tune_in.png",title:"TuneIn"}]}},e={restrict:"A",templateUrl:"app/components/favourites/favourites.html",controller:t,controllerAs:"fv",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appConnected",function(){var e,t;return e=function(){"ngInject";var e;e=this,e.data={cta:{title:"Always connected",description:"What’s the point of wireless if you always need to pair your device? With Blackfire you can get the music going from any room."}}},t={restrict:"A",templateUrl:"app/components/connected/connected.html",controller:e,controllerAs:"cn",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appAbout",function(){var e,t;return e=function(){"ngInject";var e;e=this,e.data=[{description:"Stream media to anywhere in the house, or to the whole house. It works the way you need it to work. The idea is brilliantly simple.",cta:"We call it Blackfire"},{title:"The Power of Blackfire",description:"You can stream audio and video in your home with complete freedom",content:[{image:"assets/solution-1.png",description:"Stream audio to one device, video to another. Multichannel transforms into multiroom."},{image:"assets/solution-2.png",description:"Stream to multiple tablets through Blackfire. Everyone gets to watch."}]},{title:"TV, PC, Smartphone, all in in perfect rhythm",description:"Because sometimes life just needs a soundtrack. Blackfire makes sure that you don’t miss a beat.",image:"assets/about.png"},{title:"Get Connected With Blackfire"}]},t={restrict:"A",templateUrl:"app/components/about/about.html",controller:e,controllerAs:"ab",bindToController:!0}})}.call(this),function(){angular.module("blackfire").controller("TechnologyController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").controller("TechnologyController",["$scope",function(e){"ngInject";e.data={title:"Chip and OS Agnostic",content:["Blackfire works perfectly with hardware from many Wi-Fi chipset vendors including Broadcom, and RealTek.","It supports Linux, Android, iOS, Windows, ThreadEx and other RTOS operating systems."],technologies:[{image:"assets/technology-1.png",title:"RPM",subtitle:"Realtime Packmmmtet Management",description:"RPM streams lossless 24-bit/96kHz Studio Quality HD audio and HD video to any device, any room — it’s how we make sure that there are no gaps or drop-outs in your music."},{image:"assets/technology-2.png",title:"TIS",subtitle:"Traffic Independent Synchronization",description:"No matter how much bandwidth you are using on your network, Blackfire will ensure that there is always enough room to serve your media. It always stays in synch."},{image:"assets/technology-3.png",title:"DSB",subtitle:"Dynamic Stream Balancing",description:"When streaming to multiple devices, DSM keeps it all in balance. This ensures that your media streams are rendered accurately on each device."}]},e.footer={title:"Lorem ipsum dolor",description:"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Cras et leo hendrerit risus porta"}}])}.call(this),function(){angular.module("blackfire").controller("SolutionController",["$scope",function(e){"ngInject";e.data={title:"The Media Internet of Things",content:"Blackfire amplifies the Internet of Things by delivvering seamless audio and beautiful visuals to any room of your house. We call it the Media Internet of Things (MIoT).  Our technology provides solutions to light up all the media devices in your home, from multi-room smart speakers to smartwatches and smart TVs."}}])}.call(this),function(){angular.module("blackfire").controller("PressController",["$scope",function(e){"ngInject";e.data={more:"More Press",list:[{date:"Dec 8th,2015",image:"/assets/press-1.png",title:"Lorem Ipsum is simply",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the lea."},{date:"Dec 8th,2015",image:"/assets/press-1.png",title:"Lorem Ipsum is simply",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the lea."},{date:"Dec 8th,2015",image:"/assets/press-1.png",title:"Lorem Ipsum is simply",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the lea."}]}}])}.call(this),function(){angular.module("blackfire").controller("MainController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").controller("MainController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").controller("ContactController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").controller("ContactController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").controller("CompanyController",["$scope",function(e){"ngInject";e.data=[{title:"About Blackfire Research",content:"We are a San Francisco-based startup who believe that everything should be connected. Mainstream connected-home technology wasn’t doing enough. Our thermostat, door, and even toaster (don’t ask) are connected in the Internet of Things, but what we really want is seamless access to our media, from any screen and any speaker. And we want it without the lag, disruptions and out-of-synch audio that you get with the current solutions."},{title:"We fixed it, and we made it easy",content:"Blackfire created what we call the Media Internet of Things (Media IoT) by syncing video and audio over the universal Wi-Fi standard. Now you can watch your favorite shows in any room, through different speakers and multiple screens – all in perfect sync. Want to extend your house party to the backyard while having your music hit each beat perfectly? Or set up a surround sound system with multiple wireless speakers in your living room? With Blackfire you can."},{title:"Everything is connected",content:"We are a San Francisco-based startup who believe that everything should be connected. Mainstream connected-home technology wasn’t doing enough. Our thermostat, door, and even toaster (don’t ask) are connected in the Internet of Things, but what we really want is seamless access to our media, from any screen and any speaker. And we want it without the lag, disruptions and out-of-synch audio that you get with the current solutions."}]}])}.call(this),function(){angular.module("blackfire").run(["$log","$rootScope","$timeout","$window",function(e,t,i,a){"ngInject";var s,o;return angular.element(a).bind("scroll",function(){return t.pageYOffset=a.pageYOffset,t.$apply(),o()}),t.global={scrollTop:function(){return t.pageYOffset},toggleMenu:function(){return t.showMenu=!t.showMenu}},o=function(){return $(".fade-in-up-item").each(function(){return s($(this),"animated fadeInUp")}),$(".fade-in-item").each(function(){return s($(this),"animated fadeIn")}),$(".fade-in-left-item").each(function(){return s($(this),"animated fadeInLeft")}),$(".fade-in-right-item").each(function(){return s($(this),"animated fadeInRight")})},s=function(e,t){var i,a;return i=e.offset().top+e.outerHeight(),a=$(window).scrollTop()+$(window).height(),e.outerHeight()>50&&(i=e.offset().top+50),a>i?e.addClass(t):void 0},t.$on("$stateChangeStart",function(e,a,s,n,l){return t.showMenu=!1,i(function(){return o()},300)})}])}.call(this),function(){angular.module("blackfire").config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";return e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("company",{url:"/company",templateUrl:"app/company/company.html",controller:"CompanyController",controllerAs:"company"}).state("solution",{url:"/solution",templateUrl:"app/solution/solution.html",controller:"SolutionController",controllerAs:"solution"}).state("technology",{url:"/technology",templateUrl:"app/technology/technology.html",controller:"TechnologyController",controllerAs:"technology"}).state("press",{url:"/press",templateUrl:"app/press/press.html",controller:"PressController",controllerAs:"press"}).state("contact",{url:"/contact",templateUrl:"app/contact/contact.html",controller:"ContactController",controllerAs:"contact"}),t.otherwise("/")}])}.call(this),function(){angular.module("blackfire").constant("malarkey",malarkey).constant("moment",moment)}.call(this),function(){angular.module("blackfire").config(["$logProvider","toastrConfig",function(e,t){"ngInject";return e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}])}.call(this),angular.module("blackfire").run(["$templateCache",function(e){e.put("app/company/company.html",'<div class="app-company"><div class="fullwidth-image fade-in-item hidden-xs"><img src="assets/company-banner.png"></div><div class="fullwidth-image fade-in-item visible-xs"><img src="assets/company-banner-xs.png"><div class="line-company-xs fade-in-up-item visible-xs"></div></div><div class="about fs-4 fs-p"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center"><div class="fade-in-up-item hd">{{data[0].title}}</div><div class="fade-in-up-item ct">{{data[0].content}}</div></div><div class="clearfix"></div><div class="line-company-1 fade-in-up-item hidden-xs"></div></div><div class="col-md-6"><div class="row"><div class="fullwidth-image fade-in-item"><img src="assets/company-1.png"></div></div></div><div class="col-md-6 hidden-xs"><div class="row"><div class="fullwidth-image fade-in-item"><img src="assets/company-2.png"></div></div></div><div class="clearfix"></div><div class="company-banner"><div class="col-sm-6 hidden-xs"><div class="fullwidth-image fade-in-item row"><img src="assets/company-3.png"></div></div><div class="col-sm-6 relative hidden-xs"><div class="fullwidth-image fade-in-item row"><img src="assets/company-4.png"></div><div class="cta vertical-center fs-3"><div class="fade-in-up-item hd">{{data[1].title}}</div><div class="fade-in-up-item ct">{{data[1].content}}</div></div></div><div class="visible-xs text-center fs-3 fs-p"><div class="fade-in-up-item hd">{{data[1].title}}</div><div class="fade-in-up-item ct">{{data[1].content}}</div></div><div class="clearfix"></div><div class="line-company-2 fade-in-up-item hidden-xs"></div><div class="line-company-xs fade-in-up-item visible-xs"></div></div><div class="about fs-4 fs-p"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center"><div class="fade-in-up-item hd">{{data[2].title}}</div><div class="fade-in-up-item ct">{{data[2].content}}</div></div><div class="clearfix"></div></div></div>'),e.put("app/contact/contact.html",'<div class="app-contact"><div class="fullwidth-image fade-in-item"><img src="assets/contact-banner.png"></div><div class="about"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center"><h2 class="fade-in-up-item">Want your device to be a part of the Media Internet Of Things?</h2><p class="fade-in-up-item">Blackfire-enabled devices allow consumers to stream any media between any devices, through multiple channels, and even in different rooms.</p><p class="fade-in-up-item">Now that we found a way to seamlessly sync media over WiFi, devices fall into two categories: pre-Blackfire and Blackfire-enabled.</p></div><div class="clearfix"></div></div><div class="clearfix"></div><div class="contact-form"><form ng-submit="contact()"><div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1 text-center"><h2 class="fade-in-up-item">Contact us today to join the Media IOT.</h2><div class="row"><div class="col-md-4"><input type="text" class="form-control name fade-in-up-item" placeholder="Name" ng-model="name"></div><div class="col-md-4"><input type="email" class="form-control fade-in-up-item" placeholder="E-mail" ng-model="email"></div><div class="col-md-4"><select class="form-control fade-in-up-item" ng-model="subject"><option disabled="disabled">Subject</option></select></div><div class="col-md-12"><textarea class="form-control fade-in-up-item" rows="6" placeholder="Message"></textarea></div><div class="col-md-12 text-left"><button type="submit" class="btn fade-in-up-item">SEND</button></div></div></div><div class="clearfix"></div></form></div></div>'),e.put("app/main/main.html",'<div app-slide=""></div><div app-favourites=""></div><div app-about=""></div><div app-press=""></div><div app-connected=""></div>'),e.put("app/press/press.html",'<div app-press=""></div><div class="more-press fs-1"><div class="hd text-center">{{data.more}}</div><div class="list" ng-repeat="item in data.list"><div class="left-area"><div class="date ct">{{item.date}}</div><div class="image fullwidth-image"><img ng-src="{{item.image}}"></div></div><div class="right-area"><strong class="ct">{{item.title}}</strong><div class="ct">{{item.content}}</div></div></div></div>'),e.put("app/solution/solution.html",'<div class="page-solution"><div class="solution-banner"><div class="cta fs-1"><div class="v-center"><div class="hd">{{data.title}}</div><div class="ct">{{data.content}}</div></div></div></div><div app-favourites=""></div><div app-connected=""></div><div app-features=""></div><div app-gallery=""></div></div>'),e.put("app/technology/technology.html",'<div class="technology"><div class="banner fullwidth-image"><img src="/assets/technology-banner.png"><div class="cta fs-1"><div class="v-center"><div><div class="hd text">{{data.title}}</div><div class="clearfix"></div></div><div class="ct" ng-repeat="item in data.content">{{item}}</div></div></div></div><div class="col-md-4" ng-repeat="item in data.list"><div class="row fullwidth-image detail"><img ng-src="{{item.image}}" class="fade-in-item"><div class="cta fs-1"><div class="fade-in-up-item hd">{{item.title}}</div><div class="fade-in-up-item hd sub">{{item.subtitle}}</div><div class="fade-in-up-item ct">{{item.description}}</div></div></div></div><div class="clearfix"></div><div app-favourites=""></div><div class="technology-footer fs-1 fs-p"><div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center"><div class="fade-in-up-item hd">{{footer.title}}</div><div class="fade-in-up-item ct">{{footer.description}}</div></div><div class="clearfix"></div></div></div>'),e.put("app/components/about/about.html",'<div class="app-about"><div class="bl-group-1 text-center fs-2"><div class="bl-description col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item">{{ab.data[0].description}}</div><div class="clearfix"></div><div class="bl-cta fade-in-up-item"><button ui-sref="main">{{ab.data[0].cta}}</button></div></div><div class="bl-group-2 text-center"><div class="fs-3"><div class="col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item hd">{{ab.data[1].title}}</div><div class="col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item ct bl-description">{{ab.data[1].description}}</div><div class="line-about-1 fade-in-up-item hidden-xs"></div></div><div class="clearfix"></div><div class="col-md-6 bl-list fs-1" ng-repeat="item in ab.data[1].content"><div class="row"><img ng-src="{{item.image}}"><div class="bl-description col-lg-8 col-xs-10 col-lg-offset-2 col-xs-offset-1 fade-in-up-item"><div class="v-center ct">{{item.description}}</div></div></div></div><div class="clearfix"></div></div><div class="bl-group-3 fs-1"><div class="row"><div class="col-lg-3 col-lg-offset-3 col-md-4 col-md-offset-2 col-sm-5 col-sm-offset-1 cta"><div><div class="v-center"><div class="fade-in-up-item hd">{{ab.data[2].title}}</div><div class="fade-in-up-item ct">{{ab.data[2].description}}</div></div></div></div><div class="bl-image col-lg-3 col-md-4 col-sm-5"><img ng-src="{{ab.data[2].image}}" class="fade-in-up-item"><div class="line-about-2 fade-in-up-item"></div></div><div class="clearfix"></div></div></div><div class="bl-group-4 text-center fs-2 fs-p"><div class="fade-in-up-item">{{ab.data[3].title}}</div></div></div>'),e.put("app/components/connected/connected.html",'<div class="app-connected fs-1"><div class="bl-main"><video autoplay="" poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" loop=""><source src="//demosthenes.info/assets/videos/polina.webm" type="video/webm"><source src="//demosthenes.info/assets/videos/polina.mp4" type="video/mp4"></video><div class="bl-cta text-center"><div class="fade-in-up-item hd">{{cn.data.cta.title}}</div><div class="fade-in-up-item ct">{{cn.data.cta.description}}</div></div></div></div>'),e.put("app/components/favourites/favourites.html",'<div class="app-favourites fs-4 fs-p"><div class="hd col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item">{{fv.data.title}}</div><div class="clearfix"></div><ul><li ng-repeat="item in fv.data.favourites" class="fade-in-up-item hidden-xs"><img ng-src="{{item.image}}"> {{item.title}}</li></ul><carousel interval="myInterval" class="visible-xs fade-in-up-item"><slide ng-repeat="item in fv.data.favourites" active="item.active"><img ng-src="{{item.image}}"> {{item.title}}</slide></carousel></div>'),e.put("app/components/features/features.html",'<div class="app-features"><ul class="list-unstyled"><li ng-repeat="item in ft.features" class="col-sm-4"><div class="row"><img ng-src="{{item.image}}" class="fade-in-item"><div class="cta fs-1 col-xs-12 text-center"><div class="fade-in-up-item"><span class="hd">{{item.title}}</span></div><div class="fade-in-up-item ct" ng-repeat="text in item.description | limitTo: 2">{{text}}</div></div></div></li></ul><div class="clearfix"></div></div>'),e.put("app/components/footer/footer.html",'<div class="app-footer"><div class="container"><div class="top-area row"><div class="col-sm-12 hidden-xs"><ul class="list-inline text-center"><li ng-repeat="item in ft.devices" class="fade-in-up-item"><img ng-src="{{item.image}}"><br><br>{{item.title}}</li></ul></div><div class="clearfix"></div></div><div class="bottom-area text-center"><div class="row"><div class="social text-center col-md-4"><img ng-src="{{item.image}}" ng-repeat="item in ft.techs" class="fade-in-up-item"><div class="fade-in-up-item">©2015 Blackfire Research, Inc.</div><ul class="other-menus list-inline"><li ng-repeat="item in ft.socials" class="fade-in-up-item"><a href="{{item.href}}"><img ng-src="{{item.image}}"></a></li></ul><ul class="other-menus list-inline"><li ng-repeat="item in ft.otherMenus" class="fade-in-up-item"><a ui-sref="{{item.state}}">{{item.title}}</a> <span class="divider">|</span></li></ul><div class="about">{{ft.about}}</div></div><div ng-repeat="menu in ft.menus" class="col-md-2 col-sm-3 col-xs-6 text-left menus"><div class="title fade-in-up-item">{{menu.title}}</div><ul class="list-unstyled"><li ng-repeat="item in menu.items" class="fade-in-up-item"><a ui-sref="{{item.state}}">{{item.title}}</a></li></ul></div></div></div></div></div>'),e.put("app/components/gallery/gallery.html",'<div class="app-gallery"><div class="fs-4 fs-p"><div class="fade-in-up-item hd">{{gl.title}}</div><div class="fade-in-up-item ct">{{gl.description}}</div></div><ul class="list-unstyled"><li class="fade-in-item" ng-repeat="item in gl.gallery" ng-class="\'w-\'+item.width"><img ng-src="{{item.image}}"></li></ul><div class="clearfix"></div></div>'),e.put("app/components/header/header.html",'<div class="app-header" ng-class="{\'header-collapsed\':hd.global.scrollTop()>0}"><div class="bl-logo"><a ui-sref="home"><img src="assets/logo.png"></a></div><ul class="bl-menu hidden-xs"><li ng-repeat="item in hd.menus"><a ui-sref="{{item.state}}">{{item.title}}</a></li><li><a href="javascript:;" ng-click="showSearch()"><img src="/assets/icon-search.png"></a></li></ul><div class="bl-menu-xs visible-xs"><a href="javascript:;" ng-click="showSearch()"><img src="/assets/icon-search.png"></a> <a href="javascript:;" ng-click="global.toggleMenu()"><img src="/assets/icon-menu.png"></a></div><div class="menu-xs visible-xs"><ul class="bl-menu-right-xs list-unstyled"><li ng-repeat="item in hd.menus"><a ui-sref="{{item.state}}">{{item.title}}</a></li></ul></div></div>'),e.put("app/components/press/press.html",'<div class="app-press fs-4 fs-p"><div class="hd fade-in-up-item text-center">{{pr.data.title}}</div><div class="ct col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item text-center">{{pr.data.description}}</div><div class="clearfix"></div><ul class="row list-inline hidden-xs"><li ng-repeat="item in pr.data.presses"><div class="bl-container fade-in-up-item"><img ng-src="{{item.image}}"><div class="bl-cta"><div class="bl-date ct">{{item.date}}</div><div class="bl-desciption ct">{{item.description}}</div></div></div></li></ul><carousel interval="myInterval" class="visible-xs fade-in-up-item"><slide ng-repeat="item in pr.data.presses" active="item.active"><div class="bl-container"><img ng-src="{{item.image}}"><div class="bl-cta"><div class="bl-date ct">{{item.date}}</div><div class="bl-desciption ct">{{item.description}}</div></div></div></slide></carousel><div class="bl-viewmore fade-in-up-item"><a ui-sref="main" class="ct">{{pr.data.viewmore}}</a></div></div>'),e.put("app/components/slide/slide.html",'<div class="app-slide fade-in-item"><carousel interval="myInterval"><slide ng-repeat="slide in sl.slides" active="slide.active"><img ng-src="{{slide.image}}"></slide></carousel></div>')}]);
//# sourceMappingURL=../maps/scripts/app-6dfec14c1d.js.map
