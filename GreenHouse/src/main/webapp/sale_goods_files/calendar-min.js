/*
Copyright 2012, KISSY UI Library v1.20
MIT Licensed
build time: Jun 12 15:28
*/
KISSY.add("calendar/base",function(f,k,g,l){function e(a,b){this._init(a,b)}var c=g.Target,b=k.all;f.augment(e,{_init:function(a,i){var d=b(a);this.id=this.C_Id=this._stamp(d);this._buildParam(i);this.popup?(this.trigger=d,this.con=new k("<div>"),b(document.body).append(this.con),this.C_Id=this._stamp(this.con),this.con.css({top:"0px",position:"absolute",background:"white",visibility:"hidden"})):this.con=d;d=function(){};f.augment(d,c);d=new d;f.mix(this,d);this.render();this._buildEvent();return this},
render:function(a){var b,d,h,a=a||{};this._parseParam(a);this.con.addClass("ks-cal-call ks-clearfix multi-"+this.pages);this.ca=this.ca||[];for(a=0;a<this.ca.length;a++)this.ca[a].detachEvent();this.__shimEl&&(this.__shimEl.remove(),delete this.__shimEl);this.con.html("");this.ca.length=this.pages;var c=!1,e=!1;this.range&&(this.range.start&&(c=!0),this.range.end&&(e=!0));a=0;for(h=[this.year,this.month];a<this.pages;a++)0===a?(c&&(this._time=f.clone(this.range.start)),b=!0):(e&&(this._time=f.clone(this.range.end)),
b=!1,h=this._computeNextMonth(h)),d=a==this.pages-1,this.ca[a]=new this.Page({year:h[0],month:h[1],prevArrow:b,nextArrow:d,showTime:this.showTime},this),this.ca[a].render();this.popup&&6===f.UA.ie&&(this.__shimEl=new k("<iframe frameBorder='0' style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth-3);top: 0;left: 0;z-index: 0;height: expression(this.parentNode.offsetHeight-3);'></iframe>"),this.con.prepend(this.__shimEl));return this},destroy:function(){for(var a=0;a<
this.ca.length;a++)this.ca[a].detachEvent();f.each(this.EV,function(a){a&&a.target.detach(a.type,a.fn)});this.con.remove()},_stamp:function(a){a.attr("id")||a.attr("id",f.guid("K_Calendar"));return a.attr("id")},_showdate:function(a,b){var d=new Date(b-0+864E5*a),d=d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate();return new Date(d)},_buildEvent:function(){var a=this,c,d;if(!a.popup)return this;f.each(a.EV,function(a){a&&a.target.detach(a.type,a.fn)});a.EV=a.EV||[];c=a.EV[0]={target:b(document),
type:"click"};c.fn=function(c){var d=b(c.target);if(!(d.attr("id")===a.C_Id||(d.hasClass("ks-next")||d.hasClass("ks-prev"))&&"A"===d[0].tagName||d.attr("id")==a.id||"hidden"==a.con.css("visibility")))if(!a.con.contains(d)||!("option"===d[0].nodeName.toLowerCase()||"select"===d[0].nodeName.toLowerCase()))c=[c.pageX,c.pageY],d=[{x:a.con.offset().left,y:a.con.offset().top},{x:a.con.offset().left+a.con.width(),y:a.con.offset().top+a.con.height()}],c[0]>d[0].x&&c[0]<d[1].x&&c[1]>d[0].y&&c[1]<d[1].y||a.hide()};
c.target.on(c.type,c.fn);for(d=0;d<a.triggerType.length;d++)c=a.EV[d+1]={target:b("#"+a.id),type:a.triggerType[d],fn:function(c){c.target=b(c.target);c.preventDefault();var d=a.triggerType;f.inArray("click",d)&&f.inArray("focus",d)?"focus"==c.type&&a.toggle():f.inArray("click",d)&&!f.inArray("focus",d)?"click"==c.type&&a.toggle():!f.inArray("click",d)&&f.inArray("focus",d)?setTimeout(function(){a.toggle()},170):a.toggle()}},c.target.on(c.type,c.fn);return this},toggle:function(){"hidden"==this.con.css("visibility")?
this.show():this.hide()},show:function(){this.con.css("visibility","");var a=this.trigger.offset().left,b=this.trigger.outerHeight()||this.trigger.height(),b=this.trigger.offset().top+b;this.con.css("left",a.toString()+"px");this.con.css("top",b.toString()+"px");this.fire("show");return this},hide:function(){this.con.css("visibility","hidden");this.fire("hide");return this},_buildParam:function(a){function b(c,h){var i=a[h];d[h]=i===l||null===i?c:i}var d=this;if(a===l||null===a)a={};f.each({date:new Date,
startDay:0,pages:1,closable:!1,rangeSelect:!1,minDate:!1,maxDate:!1,multiSelect:!1,navigator:!0,popup:!1,showTime:!1,triggerType:["click"]},b);"string"===typeof a.triggerType&&(a.triggerType=[a.triggerType]);b(d.date,"selected");a.startDay&&(d.startDay=(7-a.startDay)%7);if(a.range!==l&&null!==a.range){var c=d._showdate(1,new Date(a.range.start.getFullYear()+"/"+(a.range.start.getMonth()+1)+"/"+a.range.start.getDate())),j=d._showdate(1,new Date(a.range.end.getFullYear()+"/"+(a.range.end.getMonth()+
1)+"/"+a.range.end.getDate()));d.range={start:c,end:j}}else d.range={start:null,end:null};d.EV=[];return this},_parseParam:function(a){var b;if(a===l||null===a)a={};for(b in a)this[b]=a[b];this._handleDate();return this},_templetShow:function(a,b){var c,h,j,e;if(b instanceof Array){c="";for(h=0;h<b.length;h++)c+=arguments.callee(a,b[h]);a=c}else if(c=a.match(/{\$(.*?)}/g),b!==l&&null!==c){h=0;for(j=c.length;h<j;h++)e=c[h].replace(/({\$)|}/g,""),e=b[e]!==l?b[e]:"",a=a.replace(c[h],e)}return a},_handleDate:function(){var a=
this.date;this.weekday=a.getDay()+1;this.day=a.getDate();this.month=a.getMonth();this.year=a.getFullYear();return this},_getHeadStr:function(a,b){return a.toString()+"\u5e74"+(Number(b)+1).toString()+"\u6708"},_monthAdd:function(){11==this.month?(this.year++,this.month=0):this.month++;this.date=new Date(this.year.toString()+"/"+(this.month+1).toString()+"/1");return this},_monthMinus:function(){0===this.month?(this.year--,this.month=11):this.month--;this.date=new Date(this.year.toString()+"/"+(this.month+1).toString()+
"/1");return this},_computeNextMonth:function(a){var b=a[0],a=a[1];11==a?(b++,a=0):a++;return[b,a]},_handleOffset:function(){for(var a="\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","),b=this.startDay,c=[],h=0;7>h;h++)c[h]={day:a[(h-b+7)%7]};return{day_html:this._templetShow("<span>{$day}</span>",c)}},_handleRange:function(a){null===this.range.start&&null===this.range.end||null!==this.range.start&&null!==this.range.end?(this.range.start=a,this.range.end=null,this.render()):null!==this.range.start&&null===this.range.end&&
(this.range.end=a,this.range.start.getTime()>this.range.end.getTime()&&(a=this.range.start,this.range.start=this.range.end,this.range.end=a),this.fire("rangeSelect",this.range),this.render());return this}});return e},{requires:["node","event"]});
KISSY.add("calendar/date",function(){var f=function(){var f=/w{1}|d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,g=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,l=/[^-+\dA-Z]/g,e=function(a,b){a=""+a;for(b=b||2;a.length<b;)a="0"+a;return a},c={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",longTime:"h:MM:ss TT Z",
isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUTCDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",localShortDate:"yy\u5e74mm\u6708dd\u65e5",localShortDateTime:"yy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",localLongDate:"yyyy\u5e74mm\u6708dd\u65e5",localLongDateTime:"yyyy\u5e74mm\u6708dd\u65e5 hh:MM:ss TT",localFullDate:"yyyy\u5e74mm\u6708dd\u65e5 w",localFullDateTime:"yyyy\u5e74mm\u6708dd\u65e5 w hh:MM:ss TT"},b="Sun,Mon,Tue,Wed,Thu,Fri,Sat,Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,\u661f\u671f\u65e5,\u661f\u671f\u4e00,\u661f\u671f\u4e8c,\u661f\u671f\u4e09,\u661f\u671f\u56db,\u661f\u671f\u4e94,\u661f\u671f\u516d".split(","),a="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,January,February,March,April,May,June,July,August,September,October,November,December".split(",");
return function(i,d,h){1==arguments.length&&"[object String]"==Object.prototype.toString.call(i)&&!/\d/.test(i)&&(d=i,i=void 0);i=i?new Date(i):new Date;if(isNaN(i))throw SyntaxError("invalid date");d=""+(c[d]||d||c["default"]);"UTC:"==d.slice(0,4)&&(d=d.slice(4),h=!0);var j=h?"getUTC":"get",n=i[j+"Date"](),p=i[j+"Day"](),o=i[j+"Month"](),r=i[j+"FullYear"](),m=i[j+"Hours"](),s=i[j+"Minutes"](),t=i[j+"Seconds"](),j=i[j+"Milliseconds"](),q=h?0:i.getTimezoneOffset(),u={d:n,dd:e(n,void 0),ddd:b[p],dddd:b[p+
7],w:b[p+14],m:o+1,mm:e(o+1,void 0),mmm:a[o],mmmm:a[o+12],yy:(""+r).slice(2),yyyy:r,h:m%12||12,hh:e(m%12||12,void 0),H:m,HH:e(m,void 0),M:s,MM:e(s,void 0),s:t,ss:e(t,void 0),l:e(j,3),L:e(99<j?Math.round(j/10):j,void 0),t:12>m?"a":"p",tt:12>m?"am":"pm",T:12>m?"A":"P",TT:12>m?"AM":"PM",Z:h?"UTC":((""+i).match(g)||[""]).pop().replace(l,""),o:(0<q?"-":"+")+e(100*Math.floor(Math.abs(q)/60)+Math.abs(q)%60,4),S:["th","st","nd","rd"][3<n%10?0:(10!=n%100-n%10)*n%10]};return d.replace(f,function(a){return a in
u?u[a]:a.slice(1,a.length-1)})}}();return{format:function(k,g,l){return f(k,g,l)},parse:function(f){var g=null;g instanceof Date?f=g:(g=new Date(f),f=g instanceof Date&&"Invalid Date"!=g&&!isNaN(g)?g:null);return f}}});
KISSY.add("calendar/page",function(f,k,g,l){f.augment(l,{Page:function(e,c){this.father=c;this.month=Number(e.month);this.year=Number(e.year);this.prevArrow=e.prevArrow;this.nextArrow=e.nextArrow;this.timmer=this.node=null;this.id="";this.EV=[];this.html=['<div class="ks-cal-box" id="{$id}"><div class="ks-cal-hd"><a href="javascript:void(0);" class="ks-prev {$prev}"><</a><a href="javascript:void(0);" class="ks-title">{$title}</a><a href="javascript:void(0);" class="ks-next {$next}">></a></div><div class="ks-cal-bd"><div class="ks-whd">',c._handleOffset().day_html,
'</div><div class="ks-dbd ks-clearfix">{$ds}</div></div><div class="ks-setime hidden"></div><div class="ks-cal-ft {$showtime}"><div class="ks-cal-time">\u65f6\u95f4\uff1a00:00 &hearts;</div></div><div class="ks-selectime hidden"></div></div><\!--#ks-cal-box--\>'].join("");this.nav_html='<p>\u6708<select value="{$the_month}"><option class="m1" value="1">01</option><option class="m2" value="2">02</option><option class="m3" value="3">03</option><option class="m4" value="4">04</option><option class="m5" value="5">05</option><option class="m6" value="6">06</option><option class="m7" value="7">07</option><option class="m8" value="8">08</option><option class="m9" value="9">09</option><option class="m10" value="10">10</option><option class="m11" value="11">11</option><option class="m12" value="12">12</option></select></p><p>\u5e74<input type="text" value="{$the_year}" onfocus="this.select()"/></p><p><button class="ok">\u786e\u5b9a</button><button class="cancel">\u53d6\u6d88</button></p>';
this.Verify=function(){return{isDay:function(b){if(!/^\d+$/i.test(b))return!1;b=Number(b);return!(1>b||31<b)},isYear:function(b){if(!/^\d+$/i.test(b))return!1;b=Number(b);return!(100>b||1E4<b)},isMonth:function(b){if(!/^\d+$/i.test(b))return!1;b=Number(b);return!(1>b||12<b)}}};this._renderUI=function(){var b={};this.HTML="";b.prev="";b.next="";b.title="";b.ds="";this.prevArrow||(b.prev="hidden");this.nextArrow||(b.next="hidden");this.father.showtime||(b.showtime="hidden");b.id=this.id="ks-cal-"+Math.random().toString().replace(/.\./i,
"");b.title=this.father._getHeadStr(this.year,this.month);this.createDS();b.ds=this.ds;this.father.con.append(this.father._templetShow(this.html,b));this.node=g.one("#"+this.id);this.father.showTime&&(b=this.node.one(".ks-cal-ft"),b.removeClass("hidden"),this.timmer=new this.father.TimeSelector(b,this.father));return this};this.detachEvent=function(){this.EV=this.EV||[];f.each(this.EV,function(b){b&&b.target.detach(b.type,b.fn)})};this._buildEvent=function(){function b(){c.target.on(c.type,c.fn)}
var a=this,c,d=g.one("#"+a.id);f.each(a.EV,function(a){a&&a.target.detach(a.type,a.fn)});a.EV=a.EV||[];c=a.EV[0]={target:d.one("div.ks-dbd"),type:"click",fn:function(b){b.target=g(b.target);if(!b.target.hasClass("ks-null")&&!b.target.hasClass("ks-disabled")){var b=Number(b.target.html()),c=new Date("2010/01/01");c.setYear(a.year);c.setMonth(a.month);c.setDate(b);a.father.dt_date=c;a.father.fire("select",{date:c});a.father.popup&&a.father.closable&&a.father.hide();a.father.rangeSelect&&(a.timmer&&
(c.setHours(a.timmer.get("h")),c.setMinutes(a.timmer.get("m")),c.setSeconds(a.timmer.get("s"))),a.father._handleRange(c));a.father.render({selected:c})}}};b();c=a.EV[1]={target:d.one("a.ks-prev"),type:"click",fn:function(b){b.preventDefault();a.father._monthMinus().render();a.father.fire("monthChange",{date:new Date(a.father.year+"/"+(a.father.month+1)+"/01")})}};b();c=a.EV[2]={target:d.one("a.ks-next"),type:"click",fn:function(b){b.preventDefault();a.father._monthAdd().render();a.father.fire("monthChange",
{date:new Date(a.father.year+"/"+(a.father.month+1)+"/01")})}};b();a.father.navigator&&(c=a.EV[3]={target:d.one("a.ks-title"),type:"click",fn:function(b){try{a.timmer.hidePopup(),b.preventDefault()}catch(c){}b.target=g(b.target);b=d.one(".ks-setime");b.html("");var f=a.father._templetShow(a.nav_html,{the_month:a.month+1,the_year:a.year});b.html(f);b.removeClass("hidden");d.one("input").on("keydown",function(b){b.target=g(b.target);38==b.keyCode&&(b.target.val(Number(b.target.val())+1),b.target[0].select());
40==b.keyCode&&(b.target.val(Number(b.target.val())-1),b.target[0].select());if(13==b.keyCode){var b=d.one(".ks-setime").one("select").val(),c=d.one(".ks-setime").one("input").val();d.one(".ks-setime").addClass("hidden");a.Verify().isYear(c)&&a.Verify().isMonth(b)&&(a.father.render({date:new Date(c+"/"+b+"/01")}),a.father.fire("monthChange",{date:new Date(c+"/"+b+"/01")}))}})}},b(),c=a.EV[4]={target:d.one(".ks-setime"),type:"click",fn:function(b){b.preventDefault();b.target=g(b.target);if(b.target.hasClass("ok")){var b=
d.one(".ks-setime").one("select").val(),c=d.one(".ks-setime").one("input").val();d.one(".ks-setime").addClass("hidden");a.Verify().isYear(c)&&a.Verify().isMonth(b)&&(a.father.render({date:new Date(c+"/"+b+"/01")}),a.father.fire("monthChange",{date:new Date(c+"/"+b+"/01")}))}else b.target.hasClass("cancel")&&d.one(".ks-setime").addClass("hidden")}},b());return this};this._getNode=function(){return this.node};this._getNumOfDays=function(b,a){return 32-(new Date(b,a-1,32)).getDate()};this.createDS=function(){var b=
"",a=(7-this.father.startDay+(new Date(this.year+"/"+(this.month+1)+"/01")).getDay())%7,c=this._getNumOfDays(this.year,this.month+1),d=this.father.selected,f=new Date,e;for(e=0;e<a;e++)b+='<a href="javascript:void(0);" class="ks-null">0</a>';for(e=1;e<=c;e++){var a="",g=new Date(this.year,this.month,e);this.father.minDate&&new Date(this.year,this.month,e+1)<=this.father.minDate||this.father.maxDate&&g>this.father.maxDate?a="ks-disabled":this.father.range&&g>=this.father.range.start&&g<=this.father.range.end?
a="ks-range":d&&d.getFullYear()==this.year&&d.getMonth()==this.month&&d.getDate()==e&&(a="ks-selected");f.getFullYear()==this.year&&f.getMonth()==this.month&&f.getDate()==e&&(a+=" ks-today");b+="<a "+(a?"class="+a:"")+' href="javascript:void(0);">'+e+"</a>"}this.ds=b;return this};this.render=function(){this._renderUI();this._buildEvent();return this}}});return l},{requires:["ua","node","calendar/base"]});
KISSY.add("calendar/time",function(f,k,g){f.augment(g,{TimeSelector:function(f,e){this.father=e;this.fcon=f.parent(".ks-cal-box");this.popupannel=this.fcon.one(".ks-selectime");"undefined"==typeof e._time&&(e._time=new Date);this.time=e._time;this.status="s";this.ctime=k('<div class="ks-cal-time">\u65f6\u95f4\uff1a<span class="h">h</span>:<span class="m">m</span>:<span class="s">s</span><\!--{{arrow--\><div class="cta"><button class="u"></button><button class="d"></button></div><\!--arrow}}--\></div>');this.button=
k('<button class="ct-ok">\u786e\u5b9a</button>');this.h_a="00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23".split(",");this.m_a="00,10,20,30,40,50".split(",");this.s_a="00,10,20,30,40,50".split(",");this.parseSubHtml=function(c){for(var b="",a=0;a<c.length;a++)b=b+('<a href="javascript:void(0);" class="item">'+c[a]+"</a>");return b+'<a href="javascript:void(0);" class="x">x</a>'};this.showPopup=function(c){this.popupannel.html(c);this.popupannel.removeClass("hidden");c=this.status;this.ctime.all("span").removeClass("on");
switch(c){case "h":this.ctime.all(".h").addClass("on");break;case "m":this.ctime.all(".m").addClass("on");break;case "s":this.ctime.all(".s").addClass("on")}};this.hidePopup=function(){this.popupannel.addClass("hidden")};this.render=function(){var c=this.get("h"),b=this.get("m"),a=this.get("s");this.father._time=this.time;this.ctime.all(".h").html(c);this.ctime.all(".m").html(b);this.ctime.all(".s").html(a);return this};this.set=function(c,b){b=Number(b);switch(c){case "h":this.time.setHours(b);break;
case "m":this.time.setMinutes(b);break;case "s":this.time.setSeconds(b)}this.render()};this.get=function(c){var b=this.time;switch(c){case "h":return b.getHours();case "m":return b.getMinutes();case "s":return b.getSeconds()}};this.add=function(){var c=this.status,b=this.get(c);b++;this.set(c,b)};this.minus=function(){var c=this.status,b=this.get(c);b--;this.set(c,b)};this._init=function(){var c=this;f.html("").append(c.ctime);f.append(c.button);c.render();c.popupannel.on("click",function(b){b=k(b.target);
if(b.hasClass("x"))c.hidePopup();else if(b.hasClass("item")){b=Number(b.html());c.set(c.status,b);c.hidePopup()}});c.button.on("click",function(){var b=typeof c.father.dt_date=="undefined"?c.father.date:c.father.dt_date;b.setHours(c.get("h"));b.setMinutes(c.get("m"));b.setSeconds(c.get("s"));c.father.fire("timeSelect",{date:b});c.father.popup&&c.father.closable&&c.father.hide()});c.ctime.on("keyup",function(b){if(b.keyCode==38||b.keyCode==37){b.preventDefault();c.add()}if(b.keyCode==40||b.keyCode==
39){b.preventDefault();c.minus()}});c.ctime.one(".u").on("click",function(){c.hidePopup();c.add()});c.ctime.one(".d").on("click",function(){c.hidePopup();c.minus()});c.ctime.one(".h").on("click",function(){var b=c.parseSubHtml(c.h_a);c.status="h";c.showPopup(b)});c.ctime.one(".m").on("click",function(){var b=c.parseSubHtml(c.m_a);c.status="m";c.showPopup(b)});c.ctime.one(".s").on("click",function(){var b=c.parseSubHtml(c.s_a);c.status="s";c.showPopup(b)})};this._init()}});return g},{requires:["node",
"calendar/base"]});KISSY.add("calendar",function(f,k,g,l,e){f.Calendar=k;f.Date=e;k.Date=e;return k},{requires:["calendar/base","calendar/page","calendar/time","calendar/date"]});