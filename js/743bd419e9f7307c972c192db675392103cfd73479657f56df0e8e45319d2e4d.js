var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(e){"use strict";function t(e,t){let o;return(...i)=>{clearTimeout(o),o=setTimeout((()=>{e(...i)}),t)}}class o{constructor(){this.callbacks=[],window.addEventListener("DOMContentLoaded",(()=>this.onDOMContentLoaded()))}onDOMContentLoaded(){this.callbacks.sort(((e,t)=>e.priority-t.priority)).forEach((({callback:e})=>e()))}runOnLoad(e){"loading"===document.readyState?this.callbacks.push(e):e.callback()}}class i{constructor(e){this.items=[],this.previousWidth=document.documentElement.clientWidth,this.previousHeight=window.innerHeight;const t=e((()=>this.onWindowResize()),100);window.addEventListener("resize",t)}onWindowResize(){const e=document.documentElement.clientWidth,t=window.innerHeight,o=this.previousWidth!==e,i=this.previousHeight!==t;this.items.forEach((e=>{const t=()=>{e.callback(),e.executed=!0};(!e.executed||o&&e.options.runOnWidthChange||i&&e.options.runOnHeightChange)&&t()})),this.previousWidth=e,this.previousHeight=t}runOnResize(e,t){this.items.push({callback:e,options:t,executed:t.runOnLoad}),this.items.sort(((e,t)=>e.options.priority-t.options.priority)),t.runOnLoad&&function(e,t=Number.MAX_VALUE){var i;(window.canva_scriptExecutor=null!==(i=window.canva_scriptExecutor)&&void 0!==i?i:new o).runOnLoad({callback:e,priority:t})}(e,t.priority)}}const n=[{name:"CodeSandbox",schemes:["https://web.archive.org/web/20230722113948/http://codesandbox.io/*","https://web.archive.org/web/20230722113948/https://codesandbox.io/*"].map(s)},{name:"Typeform",schemes:["http://*.typeform.com/*","https://*.typeform.com/*"].map(s)},{name:"Tally Forms",schemes:["https://web.archive.org/web/20230722113948/http://tally.so/*","https://web.archive.org/web/20230722113948/https://tally.so/*"].map(s)},{name:"Flourish",schemes:["https?://public.flourish.studio/*"].map(s)},{name:"Flourish App",schemes:["https?://(app.flourish.studio|flourish-user-preview.com)/api/canva/embed/(visualisation|story)/[0-9]+/[A-Za-z0-9_-]{64}/"].map(s)},{name:"Google Forms",schemes:["https?://docs.google.com/forms/*","https?://forms.gle/*"].map(s)},{name:"Google Docs",schemes:["https?://docs.google.com/document/*"].map(s)},{name:"Google Sheets",schemes:["https?://docs.google.com/spreadsheets/*"].map(s)},{name:"Google Slides",schemes:["https?://docs.google.com/presentation/*"].map(s)}];function s(e){const t=e.replace(/[.]/g,"\\.").replace(/[*]/g,".*");return new RegExp(`^${t}$`)}function a(e){return n.some((t=>t.schemes.some((t=>t.test(e)))))}const c=new Map,r=new Map,h=new Map,l=()=>document.querySelectorAll('[id^="embed-"]');function d(e,t){e.contentWindow&&(!function(e){const t=e.clientWidth,o=e.clientHeight,i=t/o;r.set(e,{width:t,height:o,contentHeight:o,aspectRatio:i})}(t),c.set(e.contentWindow,t),1===c.size&&window.addEventListener("message",u))}function u(e){const o=e.source,i=c.get(o);if(!i||"https://web.archive.org/web/20230722113948/https://cdn.iframe.ly"!==e.origin)return;const n=function(e){const t="string"==typeof e?JSON.parse(e):e,{method:o,url:i}=t;if("resize"===o){return parseFloat(t.height)?{type:"height",height:t.height,url:i}:void 0}if("setIframelyEmbedData"===o||"setIframelyWidgetSize"===o){const{data:e}=t;if(e&&e.media){const t=parseFloat(e.media["aspect-ratio"]),o=parseFloat(e.media.height);if(t)return{type:"aspectRatio",aspectRatio:t,url:i};if(o)return{type:"height",height:o,url:i}}}}(e.data);if(null==n)return;a(n.url)||("aspectRatio"===n.type?p(n,i):function(e,o,i){let n=h.get(i);n||(n=t((e=>{p(e,o),h.delete(i)}),300));h.set(i,n),n(e)}(n,i,o))}function p(e,t){const o=r.get(t);if(null==o)return;let i;switch(e.type){case"height":i=e.height;break;case"aspectRatio":i=o.width/e.aspectRatio;break;default:return}const n=t.querySelector("div");if(s=i,a=o.contentHeight,Math.abs(s-a)<5||null==n)return;var s,a;const{height:c,aspectRatio:h}=o,l=c/i,d=i*h;t.style.overflow="hidden",t.style.position="relative",n.style.height=`${i}px`,n.style.width=`${d}px`,n.style.transform=`scale(${l})`,n.style.position="absolute",n.style.transformOrigin="0px 0px",r.set(t,{...o,contentHeight:i})}function m(){l().forEach((e=>{const t=e.querySelector("div");if(t){t.style.width="100%",t.style.height="100%",t.style.transform="scale(1)";const o=e.clientWidth,i=e.clientHeight,n=o/i;r.set(e,{width:o,height:i,contentHeight:i,aspectRatio:n})}}))}l().forEach((e=>{const t=e.querySelector("iframe"),o=document.createElement("div");null!=t&&(e.replaceChildren(),o.appendChild(t),e.appendChild(o),d(t,e))})),function(e,o,n=t){var s;(window.canva_debounceResize=null!==(s=window.canva_debounceResize)&&void 0!==s?s:new i(n)).runOnResize(e,{runOnLoad:!1,runOnWidthChange:!0,runOnHeightChange:!1,priority:Number.MAX_VALUE,...o})}(m,{runOnLoad:!0}),e.checkFreeformResizing=a,Object.defineProperty(e,"__esModule",{value:!0})}({});


}
/*
     FILE ARCHIVED ON 11:39:48 Jul 22, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:42:43 Sep 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.535
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.015
  esindex: 0.01
  cdx.remote: 32.573
  LoadShardBlock: 203.479 (3)
  PetaboxLoader3.resolve: 92.133 (2)
  PetaboxLoader3.datanode: 73.495 (5)
  load_resource: 86.644
  loaddict: 40.713
*/