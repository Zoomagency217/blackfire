(function(){angular.module("blackfire",["ngAnimate","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}).call(this),function(){angular.module("blackfire").service("webDevTec",function(){"ngInject";var e,t;e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}],t=function(){return e},this.getTec=t})}.call(this),function(){angular.module("blackfire").directive("appSlide",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.myInterval=3e3,e.slides=[{image:"assets/images/banner.png"},{image:"assets/images/banner.png"},{image:"assets/images/banner.png"},{image:"assets/images/banner.png"}]},e={restrict:"A",templateUrl:"app/components/slide/slide.html",controller:t,controllerAs:"sl",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appPress",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.data={title:"Press",description:"People have already discovered Blackfire Technology. See what the press is saying about our products, technology, and partners.",presses:[{image:"assets/images/press_1.png",date:"DEC 28, 2015",description:"Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo."},{image:"assets/images/press_2.png",date:"JAN 02, 2016",description:"Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo."},{image:"assets/images/press_3.png",date:"JUL 15, 2016",description:"Lorem ipsum dolor sit amet, ma consectetur adipiscing elit bar. augue sed commodo."}],viewmore:"View More"}},e={restrict:"A",templateUrl:"app/components/press/press.html",controller:t,controllerAs:"pr",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("acmeNavbar",function(){var e,t;return e=["moment",function(e){"ngInject";var t;t=this,t.relativeDate=e(t.creationDate).fromNow()}],t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("acmeMalarkey",function(){var e,t,i;return e=["$log","githubContributor",function(e,t){"ngInject";var i,a,o;o=this,i=function(){return a().then(function(){e.info("Activated Contributors View")})},a=function(){return t.getContributors(10).then(function(e){return o.contributors=e,o.contributors})},o.contributors=[],i()}],i=function(e,t,i,a){var o,s;s=void 0,o=malarkey(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),t.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(e){o.type(e).pause()["delete"]()}),s=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(e){o.type(e.login).pause()["delete"]()})}),e.$on("$destroy",function(){s()})},t={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:i,controller:e,controllerAs:"vm"}})}.call(this),function(){angular.module("blackfire").directive("appHeader",function(){var e,t;return t=["$rootScope","$scope",function(e,t){"ngInject";var i;i=this,i.global=e.global,i.menus=[{id:1,title:"Company",state:"company"},{id:2,title:"Solution",state:"solution"},{id:3,title:"Technology",state:"technology"},{id:4,title:"Contact",state:"contact"}]}],e={restrict:"A",templateUrl:"app/components/header/header.html",controller:t,controllerAs:"hd",bindToController:!0}})}.call(this),function(){angular.module("blackfire").factory("githubContributor",["$log","$http",function(e,t){"ngInject";var i,a,o;return i="https://api.github.com/repos/Swiip/generator-gulp-angular",a=function(a){var o,s;return null==a&&(a=30),o=function(e){return e.data},s=function(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))},t.get(i+"/contributors?per_page="+a).then(o)["catch"](s)},o={apiHost:i,getContributors:a}}])}.call(this),function(){angular.module("blackfire").directive("appGallery",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.title="Always connected",e.description="What’s the point of wireless if you always need to pair your device.",e.gallery=[{image:"http://lorempixel.com/300/800/technics/",width:1},{image:"http://lorempixel.com/300/400/technics/",width:1},{image:"http://lorempixel.com/600/400/technics/",width:2},{image:"http://lorempixel.com/300/400/nightlife/",width:1},{image:"http://lorempixel.com/300/400/transport/",width:1},{image:"http://lorempixel.com/300/400/fashion/",width:1},{image:"http://lorempixel.com/600/400/nightlife/",width:2}]},e={restrict:"A",templateUrl:"app/components/gallery/gallery.html",controller:t,controllerAs:"gl",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appFooter",function(){var e,t;return t=["$rootScope","$scope",function(e,t){"ngInject";var i;i=this,i.devices=[[{image:"assets/images/icon-mobile.png",title:"Mobile"},{image:"assets/images/icon-speaker.png",title:"Speakers"},{image:"assets/images/icon-tv.png",title:"TV"},{image:"assets/images/icon-tablet.png",title:"Tablet"}],[{image:"assets/images/icon-thermostat.png",title:"Thermostat"},{image:"assets/images/icon-router.png",title:"Router"},{image:"assets/images/icon-earphone.png",title:"Ear Phone"},{image:"assets/images/icon-smarthome.png",title:"Smart Home"}]],i.techs=[{id:1,image:"assets/images/icon-wifi.png"},{id:2,image:"assets/images/icon-android.png"},{id:3,image:"assets/images/icon-apple.png"}],i.otherMenus=[{state:"home",title:"Terms of Use"},{state:"home",title:"Privacy Policy"},{state:"home",title:"SiteMap"}],i.menus=[{title:"BlackFire",items:[{state:"home",title:"Overview"},{state:"home",title:"Advantage"},{state:"home",title:"Support"}]},{title:"SiteMap",items:[{state:"home",title:"Home"},{state:"home",title:"About Us"},{state:"home",title:"Audio and Video"},{state:"home",title:"Connected home"},{state:"home",title:"Company"},{state:"home",title:"Solution"},{state:"home",title:"Industry"},{state:"home",title:"Partners"},{state:"home",title:"Contact"}]},{title:"Careers",items:[{state:"home",title:"Become a partner"},{state:"home",title:"Partners Information"},{state:"home",title:"Partner List"}]},{title:"QIContact Form",items:[{state:"home",title:"Terms of Use"},{state:"home",title:"Privacy Policy"},{state:"home",title:"Sitemap"},{state:"home",title:"Careers"}]}],i.socials=[{href:"",image:"assets/images/icon-twitter.png"},{href:"",image:"assets/images/icon-facebook.png"},{href:"",image:"assets/images/icon-linkedin.png"},{href:"",image:"assets/images/icon-youtube.png"},{href:"",image:"assets/images/icon-googleplus.png"},{href:"",image:"assets/images/icon-instagram.png"},{href:"",image:"assets/images/icon-t.png"}],i.about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt tristique nunc ut lacinia. Integer tempus nisl et dolor malesuada, sit amet interdum ipsum posuere."}],e={restrict:"A",templateUrl:"app/components/footer/footer.html",controller:t,controllerAs:"ft",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appFeatures",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.features=[{image:"assets/images/multichanel.png",title:"Multichannel",description:"Want surround sound? Or add a subwoofer? That’s"},{image:"assets/images/multidevice.png",title:"Multidevice",description:"20 speaker dream set-up? No problem."},{image:"assets/images/multiroom.png",title:"Multiroom",description:"If it gets Wi-Fi, it’ll work with Blackfire."}]},e={restrict:"A",templateUrl:"app/components/features/features.html",controller:t,controllerAs:"ft",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appFavourites",function(){var e,t;return t=function(){"ngInject";var e;e=this,e.favourites=[{image:"assets/images/spotify.png",title:"Spotify"},{image:"assets/images/google_play_music.png",title:"Google Play Music"},{image:"assets/images/rdio.png",title:"Rdio"},{image:"assets/images/nrpone.png",title:"NRpone"},{image:"assets/images/7_digital.png",title:"7 digital"},{image:"assets/images/tune_in.png",title:"TuneIn"}]},e={restrict:"A",templateUrl:"app/components/favourites/favourites.html",controller:t,controllerAs:"fv",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appConnected",function(){var e,t;return e=function(){"ngInject";var e;e=this,e.data={cta:{title:"Always connected",description:"What’s the point of wireless if you always need to pair your device? With Blackfire you can get the music going from any room."}}},t={restrict:"A",templateUrl:"app/components/connected/connected.html",controller:e,controllerAs:"cn",bindToController:!0}})}.call(this),function(){angular.module("blackfire").directive("appAbout",function(){var e,t;return e=function(){"ngInject";var e;e=this,e.data=[{description:"Stream media to anywhere in the house, or to the whole house. It works the way you need it to work. The idea is brilliantly simple.",cta:"We call it Blackfire"},{title:"The Power of Blackfire",description:"You can stream audio and video in your home with complete freedom",content:[{image:"assets/images/solution-1.png",description:"Stream audio to one device, video to another. Multichannel transforms into multiroom."},{image:"assets/images/solution-2.png",description:"Stream to multiple tablets through Blackfire. Everyone gets to watch."}]},{title:"TV, PC, Smartphone, all in in perfect rhythm",description:"Because sometimes life just needs a soundtrack. Blackfire makes sure that you don’t miss a beat.",image:"assets/images/about.png"},{title:"Get Connected With Blackfire"}]},t={restrict:"A",templateUrl:"app/components/about/about.html",controller:e,controllerAs:"ab",bindToController:!0}})}.call(this),function(){angular.module("blackfire").controller("TechnologyController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").controller("TechnologyController",["$scope",function(e){"ngInject";e.technologies=[{image:"assets/images/technology-1.png",title:"RPM",subtitle:"Realtime Packmmmtet Management",description:"RPM streams lossless 24-bit/96kHz Studio Quality HD audio and HD video to any device, any room — it’s how we make sure that there are no gaps or drop-outs in your music."},{image:"assets/images/technology-2.png",title:"TIS",subtitle:"Traffic Independent Synchronization",description:"No matter how much bandwidth you are using on your network, Blackfire will ensure that there is always enough room to serve your media. It always stays in synch."},{image:"assets/images/technology-3.png",title:"DSB",subtitle:"Dynamic Stream Balancing",description:"When streaming to multiple devices, DSM keeps it all in balance. This ensures that your media streams are rendered accurately on each device."}],e.footer={title:"Lorem ipsum dolor",description:"Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Cras et leo hendrerit risus porta"}}])}.call(this),function(){angular.module("blackfire").controller("SolutionController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").controller("MainController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").controller("MainController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").controller("ContactController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").controller("CompanyController",["$scope",function(e){"ngInject"}])}.call(this),function(){angular.module("blackfire").run(["$log","$rootScope","$timeout","$window",function(e,t,i,a){"ngInject";var o,s;return angular.element(a).bind("scroll",function(){return t.pageYOffset=a.pageYOffset,t.$apply(),s()}),t.global={scrollTop:function(){return t.pageYOffset}},s=function(){return $(".fade-in-up-item").each(function(){return o($(this),"animated fadeInUp")}),$(".fade-in-item").each(function(){return o($(this),"animated fadeIn")}),$(".fade-in-left-item").each(function(){return o($(this),"animated fadeInLeft")}),$(".fade-in-right-item").each(function(){return o($(this),"animated fadeInRight")})},o=function(e,t){var i,a;return i=e.offset().top+e.outerHeight(),a=$(window).scrollTop()+$(window).height(),a>i?e.addClass(t):void 0},t.$on("$stateChangeStart",function(e,t,a,o,n){return console.log("here"),i(function(){return s()},300)})}])}.call(this),function(){angular.module("blackfire").config(["$stateProvider","$urlRouterProvider",function(e,t){"ngInject";return e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("company",{url:"/company",templateUrl:"app/company/company.html",controller:"CompanyController",controllerAs:"company"}).state("solution",{url:"/solution",templateUrl:"app/solution/solution.html",controller:"SolutionController",controllerAs:"solution"}).state("technology",{url:"/technology",templateUrl:"app/technology/technology.html",controller:"TechnologyController",controllerAs:"technology"}).state("contact",{url:"/contact",templateUrl:"app/contact/contact.html",controller:"ContactController",controllerAs:"contact"}),t.otherwise("/")}])}.call(this),function(){angular.module("blackfire").constant("malarkey",malarkey).constant("moment",moment)}.call(this),function(){angular.module("blackfire").config(["$logProvider","toastrConfig",function(e,t){"ngInject";return e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}])}.call(this),angular.module("blackfire").run(["$templateCache",function(e){e.put("app/company/company.html",'<div class="company"><div class="fullwidth-image fade-in-item"><img src="assets/images/company-banner.png"></div><div class="about"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center"><h2 class="fade-in-up-item">About Blackfire Research</h2><p class="fade-in-up-item">We are a San Francisco-based startup who believe that everything should be connected. Mainstream connected-home technology wasn’t doing enough. Our thermostat, door, and even toaster (don’t ask) are connected in the Internet of Things, but what we really want is seamless access to our media, from any screen and any speaker. And we want it without the lag, disruptions and out-of-synch audio that you get with the current solutions.</p></div><div class="clearfix"></div></div><div class="col-md-6"><div class="row"><div class="fullwidth-image fade-in-item"><img src="assets/images/company-1.png"></div></div></div><div class="col-md-6"><div class="row"><div class="fullwidth-image fade-in-item"><img src="assets/images/company-2.png"></div></div></div><div class="clearfix"></div><div class="company-banner relative"><div class="fullwidth-image fade-in-item"><img src="assets/images/company-3.png"></div><div class="cta vertical-center"><h2 class="fade-in-up-item">We fixed it, and we made it easy</h2><p class="fade-in-up-item">Blackfire created what we call the Media Internet of Things (Media IoT) by syncing video and audio over the universal Wi-Fi standard. Now you can watch your favorite shows in any room, through different speakers and multiple screens – all in perfect sync. Want to extend your house party to the backyard while having your music hit each beat perfectly? Or set up a surround sound system with multiple wireless speakers in your living room? With Blackfire you can.</p></div></div><div class="about"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center"><h2 class="fade-in-up-item">Everything is connected</h2><p class="fade-in-up-item">We are a San Francisco-based startup who believe that everything should be connected. Mainstream connected-home technology wasn’t doing enough. Our thermostat, door, and even toaster (don’t ask) are connected in the Internet of Things, but what we really want is seamless access to our media, from any screen and any speaker. And we want it without the lag, disruptions and out-of-synch audio that you get with the current solutions.</p></div><div class="clearfix"></div></div></div>'),e.put("app/contact/contact.html",'<div class="contact"><div class="fullwidth-image fade-in-item"><img src="assets/images/contact-banner.png"></div><div class="about"><div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center"><h2 class="fade-in-up-item">Want your device to be a part of the Media Internet Of Things?</h2><p class="fade-in-up-item">Blackfire-enabled devices allow consumers to stream any media between any devices, through multiple channels, and even in different rooms.</p><p class="fade-in-up-item">Now that we found a way to seamlessly sync media over WiFi, devices fall into two categories: pre-Blackfire and Blackfire-enabled.</p></div><div class="clearfix"></div></div><div class="clearfix"></div><div class="contact-form"><form ng-submit="contact()"><div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1 text-center"><h2 class="fade-in-up-item">Contact us today to join the Media IOT.</h2><div class="row"><div class="col-md-4"><input type="text" class="form-control name fade-in-up-item" placeholder="Name" ng-model="name"></div><div class="col-md-4"><input type="email" class="form-control fade-in-up-item" placeholder="E-mail" ng-model="email"></div><div class="col-md-4"><select class="form-control fade-in-up-item" ng-model="subject"><option disabled="disabled">Subject</option></select></div><div class="col-md-12"><textarea class="form-control fade-in-up-item" rows="6" placeholder="Message"></textarea></div><div class="col-md-12 text-left"><button type="submit" class="btn fade-in-up-item">SEND</button></div></div></div><div class="clearfix"></div></form></div></div>'),e.put("app/main/main.html",'<div app-slide=""></div><div app-favourites=""></div><div app-about=""></div><div app-press=""></div><div app-connected=""></div>'),e.put("app/solution/solution.html",'<div app-slide=""></div><div app-favourites=""></div><div app-connected=""></div><div app-features=""></div><div app-gallery=""></div>'),e.put("app/technology/technology.html",'<div class="technology"><div class="col-md-4" ng-repeat="item in technologies"><div class="row fullwidth-image detail"><img ng-src="{{item.image}}" class="fade-in-item"><div class="cta"><h3 class="fade-in-up-item">{{item.title}}</h3><h4 class="fade-in-up-item">{{item.subtitle}}</h4><p class="fade-in-up-item">{{item.description}}</p></div></div></div><div class="clearfix"></div><div app-favourites=""></div><div class="technology-footer"><div class="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 text-center"><h3 class="fade-in-up-item">{{footer.title}}</h3><p class="fade-in-up-item">{{footer.description}}</p></div><div class="clearfix"></div></div></div>'),e.put("app/components/about/about.html",'<div class="app-about"><div class="bl-group-1 text-center"><div class="bl-description col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item">{{ab.data[0].description}}</div><div class="clearfix"></div><div class="bl-cta fade-in-up-item"><button ui-sref="main">{{ab.data[0].cta}}</button></div></div><div class="bl-group-2 text-center"><div class="bl-title col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item">{{ab.data[1].title}}</div><div class="bl-description col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item">{{ab.data[1].description}}</div><div class="col-md-6 bl-list" ng-repeat="item in ab.data[1].content"><div class="row"><img ng-src="{{item.image}}"><div class="bl-description col-lg-8 col-xs-10 col-lg-offset-2 col-xs-offset-1 fade-in-up-item">{{item.description}}</div></div></div><div class="clearfix"></div></div><div class="bl-group-3"><div class="row"><div class="col-lg-3 col-lg-offset-3 col-md-4 col-md-offset-2 col-sm-5 col-sm-offset-1"><div class="bl-title fade-in-up-item">{{ab.data[2].title}}</div><div class="bl-description fade-in-up-item">{{ab.data[2].description}}</div></div><div class="bl-image col-lg-3 col-md-4 col-sm-5"><img ng-src="{{ab.data[2].image}}"></div><div class="clearfix"></div></div></div><div class="bl-group-4 text-center"><div class="bl-title fade-in-up-item">{{ab.data[3].title}}</div></div></div>'),e.put("app/components/connected/connected.html",'<div class="app-connected"><div class="bl-main"><video autoplay="" poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" loop=""><source src="//demosthenes.info/assets/videos/polina.webm" type="video/webm"><source src="//demosthenes.info/assets/videos/polina.mp4" type="video/mp4"></video><div class="bl-cta"><h2 class="fade-in-up-item">{{cn.data.cta.title}}</h2><p class="fade-in-up-item">{{cn.data.cta.description}}</p></div></div></div>'),e.put("app/components/favourites/favourites.html",'<div class="app-favourites"><h2 class="fade-in-up-item">Supports your Favourite Streaming Services</h2><ul><li ng-repeat="item in fv.favourites" class="fade-in-up-item"><img ng-src="{{item.image}}"> {{item.title}}</li></ul></div>'),e.put("app/components/features/features.html",'<div class="app-features"><ul class="row list-unstyled"><li ng-repeat="item in ft.features" class="col-sm-4"><div class="row"><img ng-src="{{item.image}}" class="fade-in-item"><div class="cta"><h2 class="fade-in-up-item">{{item.title}}</h2><p class="fade-in-up-item">{{item.description}}</p></div></div></li></ul></div>'),e.put("app/components/footer/footer.html",'<div class="app-footer"><div class="container"><div class="top-area row"><div class="col-lg-5 col-sm-6 hidden-xs text-right"><ul class="list-inline"><li ng-repeat="item in ft.devices[0]" class="text-center fade-in-up-item"><img ng-src="{{item.image}}"><br>{{item.title}}</li></ul></div><div class="col-lg-2 hidden-md hidden-sm text-center logo fade-in-up-item"><a ui-sref="home"><img src="assets/images/logo.png"></a></div><div class="col-lg-5 col-sm-6 hidden-xs text-left fade-in-up-item"><ul class="list-inline"><li ng-repeat="item in ft.devices[1]" class="text-center"><img ng-src="{{item.image}}"><br>{{item.title}}</li></ul></div><div class="clearfix"></div></div><div class="bottom-area text-center"><div class="row"><div class="social text-center col-md-4"><img ng-src="{{item.image}}" ng-repeat="item in ft.techs" class="fade-in-up-item"><div class="fade-in-up-item">©2015 Blackfire Research, Inc.</div><ul class="other-menus list-inline"><li ng-repeat="item in ft.socials" class="fade-in-up-item"><a href="{{item.href}}"><img ng-src="{{item.image}}"></a></li></ul><ul class="other-menus list-inline"><li ng-repeat="item in ft.otherMenus" class="fade-in-up-item"><a ui-sref="{{item.state}}">{{item.title}}</a> <span class="divider">|</span></li></ul><div class="about">{{ft.about}}</div></div><div ng-repeat="menu in ft.menus" class="col-md-2 col-sm-3 col-xs-6 text-left menus"><div class="title fade-in-up-item">{{menu.title}}</div><ul class="list-unstyled"><li ng-repeat="item in menu.items" class="fade-in-up-item"><a ui-sref="{{item.state}}">{{item.title}}</a></li></ul></div></div></div></div></div>'),e.put("app/components/gallery/gallery.html",'<div class="app-gallery"><h2 class="fade-in-up-item">{{gl.title}}</h2><div class="description fade-in-up-item">{{gl.description}}</div><ul class="list-unstyled"><li class="fade-in-item" ng-repeat="item in gl.gallery" ng-class="\'w-\'+item.width"><img ng-src="{{item.image}}"></li></ul><div class="clearfix"></div></div>'),e.put("app/components/header/header.html",'<div class="app-header" ng-class="{\'header-collapsed\':hd.global.scrollTop()>0}"><div class="logo"><a ui-sref="home"><img src="assets/images/logo.png"></a></div><ul class="menu"><li ng-repeat="item in hd.menus"><a ui-sref="{{item.state}}">{{item.title}}</a></li></ul></div>'),e.put("app/components/press/press.html",'<div class="app-press"><div class="bl-title fade-in-up-item">{{pr.data.title}}</div><div class="bl-description col-lg-6 col-md-8 col-sm-10 col-lg-offset-3 col-md-offset-2 col-sm-offset-1 fade-in-up-item">{{pr.data.description}}</div><div class="clearfix"></div><ul class="row list-inline"><li ng-repeat="item in pr.data.presses"><div class="bl-container fade-in-up-item"><img ng-src="{{item.image}}"><div class="bl-cta"><div class="bl-date">{{item.date}}</div><div class="bl-description">{{item.description}}</div></div></div></li></ul><div class="bl-viewmore fade-in-up-item"><a ui-sref="main">{{pr.data.viewmore}}</a></div></div>'),e.put("app/components/slide/slide.html",'<div class="app-slide fade-in-item"><carousel interval="myInterval"><slide ng-repeat="slide in sl.slides" active="slide.active"><img ng-src="{{slide.image}}"></slide></carousel></div>')}]);
//# sourceMappingURL=../maps/scripts/app-023ab94d09.js.map
