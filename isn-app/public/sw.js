if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let r={};const d=e=>n(e,s),f={module:{uri:s},exports:r,require:d};i[s]=Promise.all(c.map((e=>f[e]||d(e)))).then((e=>(o(...e),r)))}}define(["./workbox-98eb57eb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"images/icons/icon-128x128.png",revision:"a7ad081b871406dfc4f56592e23ce1e7"},{url:"images/icons/icon-144x144.png",revision:"ccc5ad0545bcfd83c727d5ea83db8394"},{url:"images/icons/icon-152x152.png",revision:"16efa777704533a84a8e1fe537da6642"},{url:"images/icons/icon-192x192.png",revision:"b7be24d848fd0c0d7c04faff859e04f1"},{url:"images/icons/icon-384x384.png",revision:"09f716774dce8abbb98e13ca8a580dff"},{url:"images/icons/icon-512x512.png",revision:"ecfc325b11ad922db6f68c897b2feb9f"},{url:"images/icons/icon-72x72.png",revision:"4ce8bc8665180bd4137114a40f803515"},{url:"images/icons/icon-96x96.png",revision:"b0d96aa6cefac2cd3166c5b034bc17f6"},{url:"index.html",revision:"85e59b60d2e47eba4df41d806226380b"},{url:"manifest.json",revision:"8240dd244f7a97bac0dabd0c0974bb7d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
