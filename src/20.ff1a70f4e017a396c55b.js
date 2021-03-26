!function(){document&&document.currentScript&&document.currentScript.src;(window.webpackJsonpruntime=window.webpackJsonpruntime||[]).push([[20],{"94Vr":function(e,t,n){"use strict";n.r(t);var r={t:!1,i:!1,o:15e3},i=window,a=i.console,o=document,c=i.navigator,u=i.performance,s=function(){return c.deviceMemory},f=function(){return c.hardwareConcurrency},l=function(){return u&&!!u.getEntriesByType&&!!u.now&&!!u.mark},d="4g",p=!1,m=function(){return!!(f()&&f()<=4)||!!(s()&&s()<=4)},v=function(e,t){return!!m()||!!["slow-2g","2g","3g"].includes(e)||!!t},y={u:!1},k=function(e){o.hidden&&(e(),y.u=o.hidden)},T=function(e){return parseFloat(e.toFixed(2))},g=function(e){return"number"!=typeof e?null:T(e/Math.pow(1024,2))},h=[1e3,2500],w=[2500,4e3],b=[100,300],S=[.1,.25],E=[300,600],_={fp:h,fcp:h,lcp:w,lcpFinal:w,fid:b,fidVitals:b,cls:S,clsFinal:S,tbt:E,tbt5S:E,tbt10S:E,tbtFinal:E},F=function(e,t){return _[e]?t<=_[e][0]?"good":t<=_[e][1]?"needsImprovement":"poor":null},B=function(e,t,n){var a;a=function(){y.u&&e.indexOf("Final")<0||!r.analyticsTracker||r.analyticsTracker({metricName:e,data:t,eventProperties:n||{},navigatorInformation:c?{deviceMemory:s()||0,hardwareConcurrency:f()||0,serviceWorkerStatus:"serviceWorker"in c?c.serviceWorker.controller?"controlled":"supported":"unsupported",isLowEndDevice:m(),isLowEndExperience:v(d,p)}:{},vitalsScore:F(e,t)})},"requestIdleCallback"in i?i.requestIdleCallback(a,{timeout:3e3}):a()},D=function(e,t,n){Object.keys(t).forEach((function(e){"number"==typeof t[e]&&(t[e]=T(t[e]))})),B(e,t,n)},q=function(e,t,n){var i=T(e);i<=r.o&&i>=0&&B(t,i,n)},x={},M={value:0},L={value:0},z={value:0},C={value:{beacon:0,css:0,fetch:0,img:0,other:0,script:0,total:0,xmlhttprequest:0}},I={value:0},P=function(e){var t=e.pop();t&&!t.s&&t.value&&(M.value+=t.value)},R={},W=function(e,t){try{var n=new PerformanceObserver((function(e){t(e.getEntries())}));return n.observe({type:e,buffered:!0}),n}catch(e){a.warn("Perfume.js:",e)}return null},O=function(e){R[e]&&R[e].disconnect(),delete R[e]},j=function(e){var t=e.pop();t&&(q(t.processingStart-t.startTime,"fidVitals",{performanceEntry:t}),q(t.duration,"fid",{performanceEntry:t})),O(1),q(z.value,"lcp"),R[3]&&"function"==typeof R[3].takeRecords&&R[3].takeRecords(),q(M.value,"cls"),q(I.value,"tbt"),setTimeout((function(){q(I.value,"tbt5S")}),5e3),setTimeout((function(){q(I.value,"tbt10S"),D("dataConsumption",C.value)}),1e4)},V=function(e){e.forEach((function(e){if(!("self"!==e.name||e.startTime<L.value)){var t=e.duration-50;t>0&&(I.value+=t)}}))},J=function(e){e.forEach((function(e){"first-paint"===e.name?q(e.startTime,"fp"):"first-contentful-paint"===e.name&&(L.value=e.startTime,q(L.value,"fcp"),R[4]=W("longtask",V),O(0))}))},N=function(e){var t=e.pop();t&&(z.value=t.renderTime||t.loadTime)},A=function(e){e.forEach((function(e){e.identifier&&q(e.startTime,e.identifier)}))},G=function(e){e.forEach((function(e){if(r.t&&D("resourceTiming",e),e.decodedBodySize&&e.initiatorType){var t=e.decodedBodySize/1e3;C.value[e.initiatorType]+=t,C.value.total+=t}}))},H=function(){R[2]&&(q(z.value,"lcpFinal"),O(2)),R[3]&&("function"==typeof R[3].takeRecords&&R[3].takeRecords(),q(M.value,"clsFinal"),O(3)),R[4]&&(q(I.value,"tbtFinal"),O(4))},K=function(e){var t="usageDetails"in e?e.usageDetails:{};D("storageEstimate",{quota:g(e.quota),usage:g(e.usage),caches:g(t.caches),indexedDB:g(t.indexedDB),serviceWorker:g(t.serviceWorkerRegistrations)})},Q=function(){function e(e){void 0===e&&(e={}),this.l="5.3.0",r.analyticsTracker=e.analyticsTracker,r.t=!!e.resourceTiming,r.i=!!e.elementTiming,r.o=e.maxMeasureTime||r.o,l()&&("PerformanceObserver"in i&&(R[0]=W("paint",J),R[1]=W("first-input",j),R[2]=W("largest-contentful-paint",N),r.t&&W("resource",G),R[3]=W("layout-shift",P),r.i&&W("element",A)),void 0!==o.hidden&&o.addEventListener("visibilitychange",k.bind(this,H)),D("navigationTiming",function(){if(!l())return{};var e=u.getEntriesByType("navigation")[0];if(!e)return{};var t=e.responseStart,n=e.responseEnd;return{fetchTime:n-e.fetchStart,workerTime:e.workerStart>0?n-e.workerStart:0,totalTime:n-e.requestStart,downloadTime:n-t,timeToFirstByte:t-e.requestStart,headerSize:e.transferSize-e.encodedBodySize||0,dnsLookupTime:e.domainLookupEnd-e.domainLookupStart}}()),D("networkInformation",function(){if("connection"in c){var e=c.connection;return"object"!=typeof e?{}:(d=e.effectiveType,p=!!e.saveData,{downlink:e.downlink,effectiveType:e.effectiveType,rtt:e.rtt,saveData:!!e.saveData})}return{}}()),c&&c.storage&&"function"==typeof c.storage.estimate&&c.storage.estimate().then(K))}return e.prototype.start=function(e){l()&&!x[e]&&(x[e]=!0,u.mark("mark_"+e+"_start"),y.u=!1)},e.prototype.end=function(e,t){void 0===t&&(t={}),l()&&x[e]&&(u.mark("mark_"+e+"_end"),delete x[e],D(e,T(function(e){u.measure(e,"mark_"+e+"_start","mark_"+e+"_end");var t=u.getEntriesByName(e).pop();return t&&"measure"===t.entryType?t.duration:-1}(e)),t))},e.prototype.endPaint=function(e,t){var n=this;setTimeout((function(){n.end(e,t)}))},e.prototype.clear=function(e){delete x[e],u.clearMarks&&(u.clearMarks("mark_"+e+"_start"),u.clearMarks("mark_"+e+"_end"))},e}();t.default=Q}}])}();