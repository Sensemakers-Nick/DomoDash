function t(){return angular.injector(["ng"]).get("$http").get("config.json").then(function(t){c.constant("CONFIG",t.data),c.constant("HOSTLOGIN","username="+t.data.username+"&password="+t.data.password+"&")},function(t){c.constant("CONFIG",void 0)})}function e(){angular.element(document).ready(function(){angular.bootstrap(document,["main"])})}function n(t,e,n,a,o){function i(t,e){n.get(e.location).then(function(e){var n=(new X2JS).xml_str2json(e.data);r.newstitle[t]=n.rss.channel.title,r.news[t]=s(n.rss.channel.item),o(function(){r.changed=!1},1e3)})}function s(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),a=t[e];t[e]=t[n],t[n]=a}return t}var r=this;r.news=[],r.newstitle=[],r.newslimit=1,r.newssources=a.news,r.changed=!0,r.getNews=i,e.$on("$reload",function(t,e){r.changed=!0,angular.forEach(a.news,function(t,e){i(e,t)})})}function a(t,e,n,a){function o(){n.get("../config.json").then(function(t){i.settings=t.data,i.settings.username=a.decode(t.data.username),i.settings.password=a.decode(t.data.password),i.settings.news||(i.settings.news=[]),i.settings.colums||(i.settings.colums=[]),i.settings.blocks||(i.settings.blocks=[]),i.settings.tabs||(i.settings.tabs=[])})}var i=this;i.settings={},i.load=e.load,i.username="",i.password="",i.isActive=!1,i.saveSettings=function(){i.settings.username=a.encode(i.settings.username),i.settings.password=a.encode(i.settings.password),n.post("settings/settings.save.php",i.settings).then(function(t){o()})},i.editNews=function(t,e){if("add"===e)i.settings.news.push({location:""});else{var n=[];angular.forEach(i.settings.news,function(t){t.selected||n.push(t)}),i.settings.news=n}},i.editColums=function(t,e){if("add"===e)i.settings.colums.push({colum:"",class:""});else{var n=[];angular.forEach(i.settings.colums,function(t){t.selected||n.push(t)}),i.settings.colums=n}},i.editBlocks=function(t,e){if("add"===e)i.settings.blocks.push({type:"",class:"",colum:"",title:""});else{var n=[];angular.forEach(i.settings.blocks,function(t){t.selected||n.push(t)}),i.settings.blocks=n}},i.editTabs=function(t,e){if("add"===e)i.settings.tabs.push({tab:"",type:"",class:"",title:""});else{var n=[];angular.forEach(i.settings.tabs,function(t){t.selected||n.push(t)}),i.settings.tabs=n}},i.toggle=function(){i.isActive=!i.isActive},o()}function o(t,e,n,a,o){function i(){n.get(a.hostname+"/json.htm?"+o+"type=devices&filter=light&used=true&order=Name").then(function(t){s.switches=t.data.result})}var s=this;s.switches=[],s.switchDevice=function(t){if("Off"===t.Status)e="On";else var e="Off";n.get(a.hostname+"/json.htm?"+o+"type=command&param=switchlight&idx="+t.idx+"&switchcmd="+e).then(function(){i()})},s.getIcon=function(t){if("Dimmer"===t.SwitchType||"Media Player"===t.SwitchType||"On/Off"===t.SwitchType||"Selector"===t.SwitchType)switch(t.Image){case"Light":return"fa-lightbulb-o";case"Alarm":return"fa-bell";case"Amplifier":return"fa-bullhorn";case"ChristmasTree":return"fa-tree";case"Computer":return"fa-laptop";case"ComputerPC":return"fa-desktop";case"Cooling":return"fa-snowflake-o";case"Fan":return"fa-refresh";case"Fireplace":return"fa-fire";case"Generic":return"fa-power-off";case"Harddisk":return"fa-hdd-o";case"Heating":return"fa-thermometer-full";case"Media":return"fa-youtube-play";case"Phone":return"fa-mobile";case"Printer":return"fa-print";case"Speaker":return"fa-volume-up";case"TV":return"fa-television";case"WallSocket":return"fa-plug";case"Water":return"fa-tint"}else switch(t.SwitchType){case"Blinds":case"Blinds Inverted":case"Blinds Percentage":case"Blinds Percentage Inverted":return"fa-bars";case"Contact":return"fa-exchange";case"Door Lock":return"fa-lock";case"Doorbell":return"fa-bell-o";case"Dusk Sensor":return"fa-sun-o";case"Motion Sensor":return"fa-assistive-listening-systems";case"Push Off Button":return"fa-toggle-off";case"Push On Button":return"fa-toggle-on";case"Smoke Detector":return"fa-cloud";case"Venetian Blinds EU":case"Venetian Blinds US":return"fa-bars";case"X10 Siren":return"fa-bullhorn"}},i(),e.$on("$reload",function(t,e){i()})}function i(t,e,n,a,o,i,s){function r(){n.get("Almere-Haven.json").then(function(t){f.weather=t.data.current_observation,f.location=f.weather.display_location.city,u(f.weather.icon,"")})}function c(){n.get("Almere-Haven2.json").then(function(t){f.forecast=t.data.forecast.simpleforecast.forecastday})}function l(){f.time=i("date")(new Date,"HH:mm:ss"),f.day=i("date")(new Date,"EEEE"),f.date=i("date")(new Date,"dd - MM - yyyy")}function u(t,e){o(function(){var n=new Skycons({color:"white"}),a="icon"+e;"chanceflurries"==t&&n.add(a,Skycons.WIND),"chancerain"==t&&n.add(a,Skycons.RAIN),"chancesleet"==t&&n.add(a,Skycons.SLEET),"chancesnow"==t&&n.add(a,Skycons.SNOW),"chancetstorms"==t&&n.add(a,Skycons.WIND),"clear"==t&&n.add(a,Skycons.CLEAR_DAY),"cloudy"==t&&n.add(a,Skycons.CLOUDY),"flurries"==t&&n.add(a,Skycons.WIND),"fog"==t&&n.add(a,Skycons.FOG),"hazy"==t&&n.add(a,Skycons.PARTLY_CLOUDY_DAY),"mostlycloudy"==t&&n.add(a,Skycons.CLOUDY),"mostlysunny"==t&&n.add(a,Skycons.CLEAR_DAY),"partlycloudy"==t&&n.add(a,Skycons.PARTLY_CLOUDY_DAY),"partlysunny"==t&&n.add(a,Skycons.PARTLY_CLOUDY_DAY),"sleet"==t&&n.add(a,Skycons.SLEET),"rain"==t&&n.add(a,Skycons.RAIN),"snow"==t&&n.add(a,Skycons.SNOW),"sunny"==t&&n.add(a,Skycons.CLEAR_DAY),"tstorms"==t&&n.add(a,Skycons.WIND),n.play()},0)}var f=this;f.time="",f.day="",f.date="",f.active=(l(),r(),void c()),f.getIcon=u;a(function(){r(),c()},s.weather_refresh),a(function(){l()},1e3)}function s(t,e,n,a,o,i){var s=this;s.tabs=i.tabs,s.activetab=0,s.setTab=function(t){s.activetab=t},s.isSet=function(t){return s.activetab===t}}function r(t,e,n,a,o,i){function s(){n.get(r.url).then(function(t){r.traffic=t.data.roadEntries,r.newtrafficlist={},angular.forEach(r.traffic,function(t){r.newtrafficlist=t,angular.forEach(t.events,function(t,e){0!=t.length&&"roadWorks"==e?angular.merge(r.newtrafficlist,{roadwork:t}):0!=t.length&&"trafficJams"==e&&angular.merge(r.newtrafficlist,{trafficjam:t})})})})}var r=this;r.traffic=[],r.newtrafficlist=[],r.url=a.traffic_url,r.activestate="trafficjam",s(),e.$on("$reload",function(t,e){s()})}n.$inject=["$scope","$rootScope","$http","CONFIG","$timeout"],a.$inject=["$scope","$rootScope","$http","base64"],o.$inject=["$scope","$rootScope","$http","CONFIG","HOSTLOGIN"],i.$inject=["$scope","$rootScope","$http","$interval","$timeout","$filter","CONFIG"],s.$inject=["$scope","$element","$rootScope","$http","$compile","CONFIG"],r.$inject=["$scope","$rootScope","$http","CONFIG","$timeout","$filter"];var c=angular.module("main",["ab-base64"]);console.log("hi"),t().then(e),angular.module("main").filter("removeHTMLTags",function(){return function(t){return t?String(t).replace(/<[^>]+>/gm,""):""}}),angular.module("main").run(["$interval","$rootScope","CONFIG","HOSTLOGIN",function(t,e,n,a){if(void 0===n){e.load=!1;var o=5e3,i=1;e.background=1}else{e.load=!0;var o=n.refresh,i=n.bgimages;e.background=n.bgimages}t(function(){e.background=Math.floor(Math.random()*i)+1,e.$broadcast("$reload")},o)}]),angular.module("main").controller("NewsController",n),angular.module("main").directive("news",function(){return{scope:{},controller:"NewsController",controllerAs:"vm",templateUrl:"app/news/news.tpl.html"}}),function(t){"use strict";function e(t,e,n,a){t.beginPath(),t.arc(e,n,a,0,p,!1),t.fill()}function n(t,e,n,a,o){t.beginPath(),t.moveTo(e,n),t.lineTo(a,o),t.stroke()}function a(t,n,a,o,i,s,r,c){var l=Math.cos(n*p);e(t,a-Math.sin(n*p)*i,o+l*s+.5*(c-=r),r+(1-.5*l)*c)}function o(t,e,n,o,i,s,r,c){var l;for(l=5;l--;)a(t,e+l/5,n,o,i,s,r,c)}function i(t,e,n,a,i,s,r){e/=3e4;var c=.21*i,l=.12*i,u=.24*i,f=.28*i;t.fillStyle=r,o(t,e,n,a,c,l,u,f),t.globalCompositeOperation="destination-out",o(t,e,n,a,c,l,u-s,f-s),t.globalCompositeOperation="source-over"}function s(t,e,a,o,i,s,r){e/=12e4;var c,l,u,f,d=.25*i-.5*s,h=.32*i+.5*s,m=.5*i-.5*s;for(t.strokeStyle=r,t.lineWidth=s,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.arc(a,o,d,0,p,!1),t.stroke(),c=8;c--;)l=(e+c/8)*p,n(t,a+(u=Math.cos(l))*h,o+(f=Math.sin(l))*h,a+u*m,o+f*m)}function r(t,e,n,a,o,i,s){e/=15e3;var r=.29*o-.5*i,c=.05*o,l=Math.cos(e*p),u=l*p/-16;t.strokeStyle=s,t.lineWidth=i,t.lineCap="round",t.lineJoin="round",n+=l*c,t.beginPath(),t.arc(n,a,r,u+p/8,u+7*p/8,!1),t.arc(n+Math.cos(u)*r*v,a+Math.sin(u)*r*v,r,u+5*p/8,u+3*p/8,!0),t.closePath(),t.stroke()}function c(t,e,n,a,o,i,s){e/=1350;var r,c,l,u,f=.16*o,d=11*p/12,h=7*p/12;for(t.fillStyle=s,r=4;r--;)c=(e+r/4)%1,l=n+(r-1.5)/1.5*(1===r||2===r?-1:1)*f,u=a+c*c*o,t.beginPath(),t.moveTo(l,u-1.5*i),t.arc(l,u,.75*i,d,h,!1),t.fill()}function l(t,e,a,o,i,s,r){e/=750;var c,l,u,f,d=.1875*i;for(t.strokeStyle=r,t.lineWidth=.5*s,t.lineCap="round",t.lineJoin="round",c=4;c--;)l=(e+c/4)%1,n(t,u=Math.floor(a+(c-1.5)/1.5*(1===c||2===c?-1:1)*d)+.5,(f=o+l*i)-1.5*s,u,f+1.5*s)}function u(t,e,a,o,i,s,r){var c,l,u,f,d=.16*i,h=.75*s,m=(e/=3e3)*p*.7,g=Math.cos(m)*h,v=Math.sin(m)*h,w=m+p/3,b=Math.cos(w)*h,y=Math.sin(w)*h,k=m+2*p/3,S=Math.cos(k)*h,C=Math.sin(k)*h;for(t.strokeStyle=r,t.lineWidth=.5*s,t.lineCap="round",t.lineJoin="round",c=4;c--;)l=(e+c/4)%1,n(t,(u=a+Math.sin((l+c/4)*p)*d)-g,(f=o+l*i)-v,u+g,f+v),n(t,u-b,f-y,u+b,f+y),n(t,u-S,f-C,u+S,f+C)}function f(t,e,n,a,i,s,r){e/=3e4;var c=.21*i,l=.06*i,u=.21*i,f=.28*i;t.fillStyle=r,o(t,e,n,a,c,l,u,f),t.globalCompositeOperation="destination-out",o(t,e,n,a,c,l,u-s,f-s),t.globalCompositeOperation="source-over"}function d(t,e,n,a,o,i,s){var r=o/8,c=r/3,l=2*c,u=e%1*p,f=Math.cos(u),d=Math.sin(u);t.fillStyle=s,t.strokeStyle=s,t.lineWidth=i,t.lineCap="round",t.lineJoin="round",t.beginPath(),t.arc(n,a,r,u,u+Math.PI,!1),t.arc(n-c*f,a-c*d,l,u+Math.PI,u,!1),t.arc(n+l*f,a+l*d,c,u+Math.PI,u,!0),t.globalCompositeOperation="destination-out",t.fill(),t.globalCompositeOperation="source-over",t.stroke()}function h(t,e,n,a,o,i,s,r,c){e/=2500;var l,u,f,h,m=w[s],g=(e+s-b[s].start)%r,p=(e+s-b[s].end)%r,v=(e+s)%r;if(t.strokeStyle=c,t.lineWidth=i,t.lineCap="round",t.lineJoin="round",g<1){if(t.beginPath(),g*=m.length/2-1,l=Math.floor(g),g-=l,l*=2,l+=2,t.moveTo(n+(m[l-2]*(1-g)+m[l]*g)*o,a+(m[l-1]*(1-g)+m[l+1]*g)*o),p<1){for(p*=m.length/2-1,p-=u=Math.floor(p),u*=2,u+=2,h=l;h!==u;h+=2)t.lineTo(n+m[h]*o,a+m[h+1]*o);t.lineTo(n+(m[u-2]*(1-p)+m[u]*p)*o,a+(m[u-1]*(1-p)+m[u+1]*p)*o)}else for(h=l;h!==m.length;h+=2)t.lineTo(n+m[h]*o,a+m[h+1]*o);t.stroke()}else if(p<1){for(t.beginPath(),p*=m.length/2-1,p-=u=Math.floor(p),u*=2,u+=2,t.moveTo(n+m[0]*o,a+m[1]*o),h=2;h!==u;h+=2)t.lineTo(n+m[h]*o,a+m[h+1]*o);t.lineTo(n+(m[u-2]*(1-p)+m[u]*p)*o,a+(m[u-1]*(1-p)+m[u+1]*p)*o),t.stroke()}v<1&&(v*=m.length/2-1,v-=f=Math.floor(v),f*=2,d(t,e,n+(m[(f+=2)-2]*(1-v)+m[f]*v)*o,a+(m[f-1]*(1-v)+m[f+1]*v)*o,o,i,c))}var m,g;!function(){var e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame,n=t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||t.msCancelAnimationFrame;e&&n?(m=function(t){function n(){a.value=e(n),t()}var a={value:null};return n(),a},g=function(t){n(t.value)}):(m=setInterval,g=clearInterval)}();var p=2*Math.PI,v=2/Math.sqrt(2),w=[[-.75,-.18,-.7219,-.1527,-.6971,-.1225,-.6739,-.091,-.6516,-.0588,-.6298,-.0262,-.6083,.0065,-.5868,.0396,-.5643,.0731,-.5372,.1041,-.5033,.1259,-.4662,.1406,-.4275,.1493,-.3881,.153,-.3487,.1526,-.3095,.1488,-.2708,.1421,-.2319,.1342,-.1943,.1217,-.16,.1025,-.129,.0785,-.1012,.0509,-.0764,.0206,-.0547,-.012,-.0378,-.0472,-.0324,-.0857,-.0389,-.1241,-.0546,-.1599,-.0814,-.1876,-.1193,-.1964,-.1582,-.1935,-.1931,-.1769,-.2157,-.1453,-.229,-.1085,-.2327,-.0697,-.224,-.0317,-.2064,.0033,-.1853,.0362,-.1613,.0672,-.135,.0961,-.1051,.1213,-.0706,.1397,-.0332,.1512,.0053,.158,.0442,.1624,.0833,.1636,.1224,.1615,.1613,.1565,.1999,.15,.2378,.1402,.2749,.1279,.3118,.1147,.3487,.1015,.3858,.0892,.4236,.0787,.4621,.0715,.5012,.0702,.5398,.0766,.5768,.089,.6123,.1055,.6466,.1244,.6805,.144,.7147,.163,.75,.18],[-.75,0,-.7033,.0195,-.6569,.0399,-.6104,.06,-.5634,.0789,-.5155,.0954,-.4667,.1089,-.4174,.1206,-.3676,.1299,-.3174,.1365,-.2669,.1398,-.2162,.1391,-.1658,.1347,-.1157,.1271,-.0661,.1169,-.017,.1046,.0316,.0903,.0791,.0728,.1259,.0534,.1723,.0331,.2188,.0129,.2656,-.0064,.3122,-.0263,.3586,-.0466,.4052,-.0665,.4525,-.0847,.5007,-.1002,.5497,-.113,.5991,-.124,.6491,-.1325,.6994,-.138,.75,-.14]],b=[{start:.36,end:.11},{start:.56,end:.16}],y=function(t){this.list=[],this.interval=null,this.color=t&&t.color?t.color:"black",this.resizeClear=!(!t||!t.resizeClear)};y.CLEAR_DAY=function(t,e,n){var a=t.canvas.width,o=t.canvas.height,i=Math.min(a,o);s(t,e,.5*a,.5*o,i,.08*i,n)},y.CLEAR_NIGHT=function(t,e,n){var a=t.canvas.width,o=t.canvas.height,i=Math.min(a,o);r(t,e,.5*a,.5*o,i,.08*i,n)},y.PARTLY_CLOUDY_DAY=function(t,e,n){var a=t.canvas.width,o=t.canvas.height,r=Math.min(a,o);s(t,e,.625*a,.375*o,.75*r,.08*r,n),i(t,e,.375*a,.625*o,.75*r,.08*r,n)},y.PARTLY_CLOUDY_NIGHT=function(t,e,n){var a=t.canvas.width,o=t.canvas.height,s=Math.min(a,o);r(t,e,.667*a,.375*o,.75*s,.08*s,n),i(t,e,.375*a,.625*o,.75*s,.08*s,n)},y.CLOUDY=function(t,e,n){var a=t.canvas.width,o=t.canvas.height,s=Math.min(a,o);i(t,e,.5*a,.5*o,s,.08*s,n)},y.RAIN=function(t,e,n){var a=t.canvas.width,o=t.canvas.height,s=Math.min(a,o);c(t,e,.5*a,.37*o,.9*s,.08*s,n),i(t,e,.5*a,.37*o,.9*s,.08*s,n)},y.SLEET=function(t,e,n){var a=t.canvas.width,o=t.canvas.height,s=Math.min(a,o);l(t,e,.5*a,.37*o,.9*s,.08*s,n),i(t,e,.5*a,.37*o,.9*s,.08*s,n)},y.SNOW=function(t,e,n){var a=t.canvas.width,o=t.canvas.height,s=Math.min(a,o);u(t,e,.5*a,.37*o,.9*s,.08*s,n),i(t,e,.5*a,.37*o,.9*s,.08*s,n)},y.WIND=function(t,e,n){var a=t.canvas.width,o=t.canvas.height,i=Math.min(a,o);h(t,e,.5*a,.5*o,i,.08*i,0,2,n),h(t,e,.5*a,.5*o,i,.08*i,1,2,n)},y.FOG=function(t,e,a){var o=t.canvas.width,i=t.canvas.height,s=Math.min(o,i),r=.08*s;f(t,e,.5*o,.32*i,.75*s,r,a),e/=5e3;var c=Math.cos(e*p)*s*.02,l=Math.cos((e+.25)*p)*s*.02,u=Math.cos((e+.5)*p)*s*.02,d=Math.cos((e+.75)*p)*s*.02,h=.936*i,m=Math.floor(h-.5*r)+.5,g=Math.floor(h-2.5*r)+.5;t.strokeStyle=a,t.lineWidth=r,t.lineCap="round",t.lineJoin="round",n(t,c+.2*o+.5*r,m,l+.8*o-.5*r,m),n(t,u+.2*o+.5*r,g,d+.8*o-.5*r,g)},y.prototype={_determineDrawingFunction:function(t){return"string"==typeof t&&(t=y[t.toUpperCase().replace(/-/g,"_")]||null),t},add:function(t,e){var n;"string"==typeof t&&(t=document.getElementById(t)),null!==t&&"function"==typeof(e=this._determineDrawingFunction(e))&&(n={element:t,context:t.getContext("2d"),drawing:e},this.list.push(n),this.draw(n,500))},set:function(t,e){var n;for("string"==typeof t&&(t=document.getElementById(t)),n=this.list.length;n--;)if(this.list[n].element===t)return this.list[n].drawing=this._determineDrawingFunction(e),void this.draw(this.list[n],500);this.add(t,e)},remove:function(t){var e;for("string"==typeof t&&(t=document.getElementById(t)),e=this.list.length;e--;)if(this.list[e].element===t)return void this.list.splice(e,1)},draw:function(t,e){var n=t.context.canvas;this.resizeClear?n.width=n.width:t.context.clearRect(0,0,n.width,n.height),t.drawing(t.context,e,this.color)},play:function(){var t=this;this.pause(),this.interval=m(function(){var e,n=Date.now();for(e=t.list.length;e--;)t.draw(t.list[e],n)},1e3/60)},pause:function(){this.interval&&(g(this.interval),this.interval=null)}},t.Skycons=y}(this),angular.module("main").directive("grid",["$compile","CONFIG",function(t,e){return{scope:{},link:function(n,a){function o(t){switch(t.type){case"Heading":angular.element(document.getElementById(t.colum)).append('<div class="heading '+t.class+'">'+t.title+"</div>");break;case"Switches":angular.element(document.getElementById(t.colum)).append('<block class="block '+t.class+'"><switches></switches></block>');break;case"News":angular.element(document.getElementById(t.colum)).append('<block class="block '+t.class+'"><news></news></block>');break;case"Tabs":angular.element(document.getElementById(t.colum)).append('<block class="block '+t.class+'"><tabs id="tabs"></tabs></block>');break;case"Weather":angular.element(document.getElementById(t.colum)).append('<block class="block '+t.class+'"><weather></weather></block>');break;case"Traffic":angular.element(document.getElementById(t.colum)).append('<block class="block '+t.class+'"><traffic></traffic></block>')}}var i=this;i.colums=e.colums,i.blocks=e.blocks,angular.forEach(i.colums,function(t){angular.element(document.getElementById("colums")).append('<div id="colum'+t.colum+'" class="colum '+t.class+'"></div>')}),t(a.contents())(n),angular.forEach(i.blocks,function(t){o(t)}),t(a.contents())(n)}}}]),angular.module("main").directive("settings",function(){return{scope:{},controller:"SettingsController",controllerAs:"vm",templateUrl:"app/settings/settings.tpl.html"}}),angular.module("main").controller("SettingsController",a),angular.module("main").controller("SwitchesController",o),angular.module("main").directive("switches",function(){return{scope:{},controller:"SwitchesController",controllerAs:"vm",templateUrl:"app/switches/switches.tpl.html"}}),angular.module("main").controller("WeatherController",i),angular.module("main").directive("weather",function(){return{scope:{},controller:"WeatherController",controllerAs:"vm",templateUrl:"app/weather/weather.tpl.html"}}),angular.module("main").controller("TabsController",s),angular.module("main").directive("tabs",function(){return{scope:{},controller:"TabsController",controllerAs:"vm",templateUrl:"app/tabs/tabs.tpl.html"}}),angular.module("main").controller("TrafficController",r),angular.module("main").directive("traffic",function(){return{scope:{},controller:"TrafficController",controllerAs:"vm",templateUrl:"app/traffic/traffic.tpl.html"}});