/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){"use strict";function t(){}function n(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}function r(){}function i(){var e=function(e,n){for(var r=new C(n),i=e.length,o=0;o<i;o++){var a=e[o];a.nodeType===m&&t(a,r)}},t=function r(e,t){if(se.has(e))e.dispatchEvent(t);else for(var n=e.children,i=n.length,o=0;o<i;o++)r(n[o],t)};try{new MutationObserver(function(t){for(var n=t.length,r=0;r<n;r++){var i=t[r];e(i.removedNodes,b),e(i.addedNodes,y)}}).observe(document,{subtree:!0,childList:!0})}catch(n){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],b)},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],y)},!1)}}function o(e){var t=Se.get(this);return t&&t.template===K(e)?u.apply(t.updates,arguments):a.apply(this,arguments),this}function a(e){e=K(e);var t=o.adopt,n=Te.get(e)||l.call(this,e),r=void 0,i=void 0;t?i=Ee.create(this,n.paths,t):(r=q(this.ownerDocument,n.fragment),i=Ee.create(r,n.paths,t)),Se.set(this,{template:e,updates:i}),u.apply(i,arguments),t||(this.textContent="",this.appendChild(r))}function u(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}function l(e){var t=[],n=I(this,e.join(E));Ee.find(n,t,e.slice());var r={fragment:n,paths:t};return Te.set(e,r),r}function c(e){return arguments.length<2?null==e?Oe("html"):"string"==typeof e?Me(null,e):"raw"in e?Oe("html")(e):"nodeType"in e?De(e):je(e,"html"):("raw"in e?Oe("html"):Me).apply(null,arguments)}var s=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||(this[e]=t.call(this,e))},set:function(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}},f={},d=[],h=f.hasOwnProperty,v=0,p={define:function(e,t){e in f||(v=d.push(e)),f[e]=t},invoke:function(e,t){for(var n=0;n<v;n++){var r=d[n];if(h.call(e,r))return f[r](e[r],t)}}},g=document.defaultView,m=1,N="http://www.w3.org/2000/svg",y="connected",b="dis"+y,w=/^style|textarea$/i,x="_hyper: "+(Math.random()*new Date|0)+";",E="\x3c!--"+x+"--\x3e",C=g.Event;try{new C("Event")}catch(Pe){C=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}var S=g.Map||function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}},T=g.WeakMap||function(){return{get:function(e){return e[x]},set:function(e,t){Object.defineProperty(e,x,{configurable:!0,value:t})}}},A=g.WeakSet||function(){var e=new T;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}},M=Array.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}({}.toString),O=x.trim||function(){return this.replace(/^\s+|\s+$/g,"")},j=function(e,t){return k(e).createElement(t)},k=function(e){return e.ownerDocument||e},L=function(e){return k(e).createDocumentFragment()},D=function(e,t){return k(e).createTextNode(t)},$=L(document),P="append"in $,_="content"in j(document,"template");$.appendChild(D($,"g")),$.appendChild(D($,""));var B=1===$.cloneNode(!0).childNodes.length,H="importNode"in document,R=P?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},z="[^\\S]+[^ \\f\\n\\r\\t\\/>\"'=]+",F=new RegExp("(<[a-z]+[a-z0-9:_-]*)((?:"+z+"(?:=(?:'.*?'|\".*?\"|<.+?>|\\S+))?)+)([^\\S]*/?>)","gi"),V=new RegExp("("+z+"=)(['\"]?)"+E+"\\2","gi"),Z=function(e,t,n,r){return t+n.replace(V,G)+r},G=function(e,t,n){return t+(n||'"')+x+(n||'"')},I=function(e,t){return("ownerSVGElement"in e?X:U)(e,t.replace(F,Z))},W=B?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(W(n[i]));return t}:function(e){return e.cloneNode(!0)},q=H?function(e,t){return e.importNode(t,!0)}:function(e,t){return W(t)},J=[].slice,K=function(e){return Q(e)},Q=function(e){if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((g.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var t={};Q=function(e){var n="_"+e.join(x);return t[n]||(t[n]=e)}}else Q=function(e){return e};return Q(e)},U=_?function(e,t){var n=j(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=j(e,"template"),r=L(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",R(r,J.call(n.querySelectorAll(i)))}else n.innerHTML=t,R(r,J.call(n.childNodes));return r},X=_?function(e,t){var n=L(e),r=k(e).createElementNS(N,"svg");return r.innerHTML=t,R(n,J.call(r.childNodes)),n}:function(e,t){var n=L(e),r=j(e,"div");return r.innerHTML='<svg xmlns="'+N+'">'+t+"</svg>",R(n,J.call(r.firstChild.childNodes)),n};n.prototype.insert=function(){var e=L(this.first);return R(e,this.childNodes),e},n.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=k(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var Y=function(e){var t=[],n=void 0;switch(e.nodeType){case m:case 11:n=e;break;case 8:n=e.parentNode,ee(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)ee(t,n,e);return t},ee=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},te={create:function(e,t,n){return{type:e,name:n,node:t,path:Y(t)}},find:function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return{node:e,childNodes:[]}}},ne=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,re=function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),ie(r,n)}return ie(e.style,n)},ie=function(e,t){var n=void 0,r=void 0;return function(i){switch(typeof i){case"object":if(i){if("object"===n){if(!t&&r!==i)for(var o in r)o in i||(e[o]="")}else t?e.value="":e.cssText="";var a=t?{}:e;for(var u in i){var l=i[u];a[u]="number"!=typeof l||ne.test(u)?l:l+"px"}n="object",t?e.value=ue(r=a):r=i;break}default:r!=i&&(n="string",r=i,t?e.value=i||"":e.cssText=i||"")}}},oe=/([^A-Z])([A-Z]+)/g,ae=function(e,t,n){return t+"-"+n.toLowerCase()},ue=function(e){var t=[];for(var n in e)t.push(n.replace(oe,ae),":",e[n],";");return t.join("")},le=function(e){return e},ce=function(e,t,n,r,i){for(var o=r||le,a=null==i?null:o(i,0),u=0,l=0,c=t.length-1,s=t[0],f=t[c],d=n.length-1,h=n[0],v=n[d];u<=c&&l<=d;)if(null==s)s=t[++u];else if(null==f)f=t[--c];else if(null==h)h=n[++l];else if(null==v)v=n[--d];else if(s==h)s=t[++u],h=n[++l];else if(f==v)f=t[--c],v=n[--d];else if(s==v)e.insertBefore(o(s,1),o(f,-0).nextSibling),s=t[++u],v=n[--d];else if(f==h)e.insertBefore(o(f,1),o(s,0)),f=t[--c],h=n[++l];else{var p=t.indexOf(h);if(p<0)e.insertBefore(o(h,1),o(s,0)),h=n[++l];else{var g=t[p];t[p]=null,e.insertBefore(o(g,1),o(s,0)),h=n[++l]}}if(u>c)for(var m=n[d+1],N=null!=m?o(m,0):a;l<=d;){var y=n[l++];null!=y&&e.insertBefore(o(y,1),N)}else if(l>d)for(;u<=c;){var b=t[u++];null!=b&&e.removeChild(o(b,-1))}return n},se=new A;r.prototype=Object.create(null);var fe=function(e){return{html:e}},de=function _e(e,t){return"ELEMENT_NODE"in e?e:e.constructor===n?1/t<0?t?e.remove():e.last:t?e.insert():e.first:_e(e.render(),t)},he=function(e){return"ELEMENT_NODE"in e||e instanceof n||e instanceof t},ve=function(e,t,n){for(var r=n?[]:null,i=[],o=t.length,a=0;a<o;a++){var u=t[a],l=n?me(e,u.path,r):te.find(e,u.path),c=l.node,s=l.childNodes;switch(u.type){case"any":i.push(be(c,s));break;case"attr":i.push(we(c,u.name,n?c.getAttributeNode(u.name):u.node,n));break;case"text":i.push(xe(n?s[0]:c))}}return i},pe=function Be(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;o++){var a=r[o];switch(a.nodeType){case m:ge(a,t,n),Be(a,t,n);break;case 8:a.textContent===x&&(n.shift(),t.push(w.test(e.nodeName)?te.create("text",e):te.create("any",a)));break;case 3:w.test(e.nodeName)&&O.call(a.textContent)===E&&(n.shift(),t.push(te.create("text",e)))}}},ge=function(e,t,n){for(var i=new r,o=e.attributes,a=J.call(o),u=[],l=a.length,c=0;c<l;c++){var s=a[c];if(s.value===x){var f=s.name;if(!(f in i)){var d=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[f]=o[d]||o[d.toLowerCase()],t.push(te.create("attr",i[f],d))}u.push(s)}}for(var h=u.length,v=0;v<h;v++)e.removeAttributeNode(u[v]);var p=e.nodeName;if(/^script$/i.test(p)){for(var g=j(e,p),m=0;m<o.length;m++)g.setAttributeNode(o[m].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e)}},me=function(e,t,n){for(var r=[],i=t.length,o=0;o<i;o++){var a=t[o]+(n[o]||0);if(e=e.childNodes[a],e.nodeType===Node.COMMENT_NODE&&/^\u0001:[0-9a-zA-Z]+$/.test(e.textContent))for(var u=e.textContent;(e=e.nextSibling)&&(a++,e.nodeType!==Node.COMMENT_NODE||e.textContent!==u);)r.push(e);n[o]=a-t[o]}return{node:e,childNodes:r}},Ne=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(fe).then(t):Promise.resolve(p.invoke(e,t)).then(t)},ye=function(e){return null!=e&&"then"in e},be=function(e,t){var n=!1,r=void 0;return function i(o){switch(typeof o){case"string":case"number":case"boolean":n?r!==o&&(r=o,t[0].textContent=o):(n=!0,r=o,t=ce(e.parentNode,t,[D(e,o)],de,e));break;case"object":case"undefined":if(null==o){n=!1,t=ce(e.parentNode,t,[],de,e);break}default:if(n=!1,r=o,M(o))if(0===o.length)t.length&&(t=ce(e.parentNode,t,[],de,e));else switch(typeof o[0]){case"string":case"number":case"boolean":i({html:o});break;case"object":if(M(o[0])&&(o=o.concat.apply([],o)),ye(o[0])){Promise.all(o).then(i);break}default:t=ce(e.parentNode,t,o,de,e)}else he(o)?t=ce(e.parentNode,t,11===o.nodeType?J.call(o.childNodes):[o],de,e):ye(o)?o.then(i):"placeholder"in o?Ne(o,i):"text"in o?i(String(o.text)):"any"in o?i(o.any):"html"in o?t=ce(e.parentNode,t,J.call(I(e,[].concat(o.html).join("")).childNodes),de,e):i("length"in o?J.call(o):p.invoke(o,i))}}},we=function(e,t,n,r){var o="ownerSVGElement"in e,a=void 0;if("style"===t)return r&&e.removeAttribute(t),re(e,n,o);if(/^on/.test(t)){var u=t.slice(2);return u===y||u===b?(Ce&&(Ce=!1,i()),se.add(e)):t.toLowerCase()in e&&(u=u.toLowerCase()),r&&e.removeAttribute(t),function(t){a!==t&&(a&&e.removeEventListener(u,a,!1),a=t,t&&e.addEventListener(u,t,!1))}}if("data"===t||!o&&t in e)return function(n){r?(r=!1,a=e[t]):a!==n&&(a=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};var l=r,c=r?n:n.cloneNode(!0);return function(t){a!==t&&(a=t,c.value!==t&&(null==t?(l&&(l=!1,e.removeAttributeNode(c)),c.value=t):(c.value=t,l||(l=!0,e.setAttributeNode(c)))))}},xe=function(e){var t=void 0;return function n(r){t!==r&&(t=r,"object"==typeof r&&r?ye(r)?r.then(n):"placeholder"in r?Ne(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?J.call(r).join(""):p.invoke(r,n)):e.textContent=null==r?"":r)}},Ee={create:ve,find:pe},Ce=!0,Se=new T,Te=new S,Ae=new T,Me=function(e,t){return null==e?Oe(t||"html"):je(e,t||"html")},Oe=function(e){var t=void 0,n=void 0,r=void 0,i=void 0,a=void 0;return function(u){u=K(u);var l=i!==u;return l&&(i=u,r=L(document),n="svg"===e?document.createElementNS(N,"svg"):r,a=o.bind(n)),a.apply(null,arguments),l&&("svg"===e&&R(r,J.call(n.childNodes)),t=ke(r)),t}},je=function(e,t){var n=t.indexOf(":"),r=Ae.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||Ae.set(e,r={}),r[i]||(r[i]=Oe(t))},ke=function(e){for(var t=e.childNodes,r=t.length,i=[],o=0;o<r;o++){var a=t[o];a.nodeType!==m&&0===O.call(a.textContent).length||i.push(a)}return 1===i.length?i[0]:new n(i)},Le=function(e){return function(){return o.adopt=!0,o.apply(e,arguments)}},De=function(e){return function(){return o.adopt=!1,o.apply(e,arguments)}},$e=p.define;return c.Component=t,c.adopt=Le,c.bind=De,c.define=$e,c.diff=ce,c.hyper=c,c.wire=Me,function(e){Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:s("html",e),svg:s("svg",e),state:s("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},setState:{value:function(e){var t=this.state,n="function"==typeof e?e.call(this,t):e;for(var r in n)t[r]=n[r];this.render()}}})}(Oe),c}(window);
