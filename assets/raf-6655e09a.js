import{d as v}from"./@babel-30feca43.js";import{p as g}from"./performance-now-0eeb1480.js";var i={},w={get exports(){return i},set exports(n){i=n}},x=g,r=typeof window>"u"?v:window,s=["moz","webkit"],t="AnimationFrame",o=r["request"+t],l=r["cancel"+t]||r["cancelRequest"+t];for(var c=0;!o&&c<s.length;c++)o=r[s[c]+"Request"+t],l=r[s[c]+"Cancel"+t]||r[s[c]+"CancelRequest"+t];if(!o||!l){var p=0,d=0,e=[],y=1e3/60;o=function(n){if(e.length===0){var a=x(),h=Math.max(0,y-(a-p));p=h+a,setTimeout(function(){var m=e.slice(0);e.length=0;for(var f=0;f<m.length;f++)if(!m[f].cancelled)try{m[f].callback(p)}catch(u){setTimeout(function(){throw u},0)}},Math.round(h))}return e.push({handle:++d,callback:n,cancelled:!1}),d},l=function(n){for(var a=0;a<e.length;a++)e[a].handle===n&&(e[a].cancelled=!0)}}w.exports=function(n){return o.call(r,n)};i.cancel=function(){l.apply(r,arguments)};i.polyfill=function(n){n||(n=r),n.requestAnimationFrame=o,n.cancelAnimationFrame=l};export{i as r};
