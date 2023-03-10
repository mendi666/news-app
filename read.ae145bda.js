!function(){function e(e){return e&&e.__esModule?e.default:e}var t="fav-icon-add";function n(e){var n=e.publishedDate,a=e.sectionName,r=e.articleTitle,o=e.shortDescription,i=e.urlOriginalArticle,c=e.imgUrl,l=e.articleId,s=o;if(o.length>110){var d=o.indexOf(" ",110);d>0&&(s=o.slice(0,d)+"...")}var u=r;if(r.length>58){var h=r.indexOf(" ",44);h>0&&(u=r.slice(0,h)+"...")}var v="Add to favorites",f=localStorage.getItem("favorites");if(f){var g=JSON.parse(f),m=Object.keys(g),_=!0,y=!1,b=void 0;try{for(var p,S=m[Symbol.iterator]();!(_=(p=S.next()).done);_=!0){var E=p.value,w=g["".concat(E)],T=w.id,k=w._id,A=w.slug_name;l===(T||k||A)?(v="Remove from favorites",t="fav-icon-remove"):t="fav-icon-add"}}catch(e){y=!0,b=e}finally{try{_||null==S.return||S.return()}finally{if(y)throw b}}}var O='<svg class="fav-icon '.concat(t,'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>');return'\n      <article class="card" id="'.concat(l,'">\n\n        <div class="card__img-container" >\n          <div class="card__blur" id_card="').concat(l,'">\n            <p class="card__already-read">\n              Already read ✓\n            </p>\n            </div>\n          <img class="card__img" src="').concat(c,'" alt="').concat(r,'">\n          <p class="card__section-name">\n            ').concat(a,'\n          </p>\n          <button class="card__btn" type="button">\n           ').concat(v,"\n          </button>\n          ").concat(O,'\n        </div>\n        <h2 class="card__title">\n          ').concat(u,'\n        </h2>\n        <p class="card__text">').concat(s,'</p>\n        <div class="card__bottom">\n          <span class="card__date">\n            ').concat(n,'\n          </span>\n          <a class="card__read-more-search"\n            href="').concat(i,'" target="_blank"\n          >\n            Read more\n          </a>\n        </div>\n      </article>\n    ')}document.querySelector(".search_mob_btn"),document.querySelector(".search_form"),document.querySelector(".search_input"),document.querySelector(".search_btn");var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var r={};function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,t,n){t&&o(e.prototype,t);n&&o(e,n);return e};var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};var c=function(){"use strict";function t(n,r){var o=this;e(a)(this,t),e(i)(this,"onThemeToggle",(function(){var e=o.getBoolean();e&&localStorage.setItem(o.THEME_STORAGE_KEY,o.Theme.DARK),e||localStorage.setItem(o.THEME_STORAGE_KEY,o.Theme.LIGHT),o.renderTheme()})),this.themeSwitcherEl=n,this.mobileSwitcherEl=r,this.dateField=document.querySelector(".date-field"),this.dataSelected=document.querySelector(".data_selected"),this.currentPage=document.querySelector("body").getAttribute("data-current-page"),this.THEME_STORAGE_KEY="theme",this.Theme={LIGHT:"light",DARK:"dark"}}return e(r)(t,[{key:"renderTheme",value:function(){var e=this.getBoolean();e||(this.themeSwitcherEl.setAttribute("checked",!0),this.mobileSwitcherEl.setAttribute("checked",!0),this.changeBodyClass(this.Theme.DARK,this.Theme.LIGHT),"index"===this.currentPage&&(this.dataSelected.style.color="#F4F4F4",this.dataSelected.style.backgroundColor="#2E2E2E",console.log(this.dataSelected.style.backgroundColor),this.dateField.style.backgroundColor="#2E2E2E")),e&&(this.changeBodyClass(this.Theme.LIGHT,this.Theme.DARK),"index"===this.currentPage&&(this.dataSelected.style.color="#111321",this.dataSelected.style.backgroundColor="#F4F4F4",this.dateField.style.backgroundColor="#F4F4F4"))}},{key:"changeBodyClass",value:function(e,t){document.body.classList.add(e),document.body.classList.remove(t)}},{key:"getBoolean",value:function(){var e=localStorage.getItem(this.THEME_STORAGE_KEY);return e===this.Theme.LIGHT||!e}}]),t}();function l(e){return function(e){return[s(e.getDate()),s(e.getMonth()+1),e.getFullYear()].join("/")}(new Date(e))}function s(e){return e.toString().padStart(2,"0")}function d(e){var t=e.resultsArr,n=e.clickedArticleId,a=e.evt,r="favorites";t.forEach((function(e){if(e.id==n||e.slug_name==n||e._id==n){var t=localStorage.getItem(r);if(t=t?JSON.parse(t):{},console.dir(a.target.nextElementSibling),t[n])return delete t["".concat(n)],"Remove from favorites"===a.target.textContent.trim()&&(a.target.textContent="Add to favorites"),void localStorage.setItem(r,JSON.stringify(t));t[n]=e,localStorage.setItem(r,JSON.stringify(t))}}))}function u(e){var t=e.resultsArr,n=e.clickedArticleId,a=(e.evt,"read");t.forEach((function(e){if(e.id==n||e.slug_name==n||e._id==n){var t=localStorage.getItem(a);t=t?JSON.parse(t):{},e.dateOfReading=(r=(new Date).getDate(),o=(new Date).getMonth()+1,i=(new Date).getFullYear(),"".concat(r,"/").concat(o,"/").concat(i)),t[n]=e,localStorage.setItem(a,JSON.stringify(t))}var r,o,i}))}document.querySelector(".news_container");var h=document.querySelector("body"),v=(document.querySelector(".body"),document.querySelector(".search_form"),document.querySelector(".without-news_container")),f=[],g=[],m=[],_=[],y="",b="",p="",S="",E="";function w(e,t,n){return n.indexOf(e)===t}!function(){if(y=localStorage.getItem("read")){!function(e){var t=e,n=Object.keys(t),a=!0,r=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var l=i.value,s=t["".concat(l)];_.push(s);s.abstract,s.published_date,s.pub_date,s.section,s.section_name,s.title,s.headline,s.media,s.multimedia,s.url,s.web_url,s.id,s._id,s.slug_name,s.dateOfReading;_.forEach((function(e){f.push(e.dateOfReading)})),g=f.filter(w)}}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}}(JSON.parse(y))}else v.style.display="block"}(),function(e){y||(v.style.display="block");b="",e.forEach((function(e){return function(e){S='\n    <section class = "section_read container"\n    <div class = "section-title container">\n    \n    <label class="checkbox-btn checkbox">\n  <input type="checkbox">\n  <span class="btn-label">'.concat(e,' <svg class=" date-list__btn-icon" width="14" height="9" aria-hidden="true" style="position: absolute;>\n  <symbol id="icon-vector-2-1"="" viewBox="0 0 50 32">\n  <path d="M5.867 0l-5.867 6.080 24.889 25.92 24.889-25.92-5.831-6.080-19.058 19.769-19.058-19.769z"></path>\n  </svg></button></span>\n  <div class="under_line"></div>\n\n    <div class = "news_container popup">')}(e),function(e){m=_.filter((function(t){return t.dateOfReading==e}))}(e),function(e){var t=e,a=Object.keys(t),r=!0,o=!1,i=void 0;try{for(var c,s=a[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){var d=c.value,u=t["".concat(d)];[].push(u);var h=u.abstract,v=u.published_date,f=u.pub_date,g=u.section,m=u.section_name,_=u.title,y=u.headline,b=u.media,p=u.multimedia,S=u.url,w=u.web_url,T=u.id,k=u._id,A=u.slug_name,O=(u.dateOfReading,T||k||A),x=l(v||f),I=g||m,R=_||y.main,C=h,L=S||w,q="";try{O===T&&(q=b[0]["media-metadata"][2].url),O===A&&(q=p[2].url),O===k&&(q="https://www.nytimes.com/"+p[0].url)}catch(e){q="https://t4.ftcdn.net/jpg/00/89/55/15/240_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"}E+=n({publishedDate:x,sectionName:I,articleTitle:R,shortDescription:C,urlOriginalArticle:L,imgUrl:q,articleId:O})}}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}}(m),p=S+E+"</ul></label> </section>",E="",b+=p}))}(g),h.insertAdjacentHTML("beforeend",b);var T=document.querySelector(".switch_input"),k=document.querySelector(".switch_input--mobile"),A=new c(T,k);k.addEventListener("change",A.onThemeToggle),T.addEventListener("change",A.onThemeToggle),A.renderTheme(),h.addEventListener("click",(function(e){if("card__btn"===e.target.className){var t,n,a,r=(null===(t=e.target.closest(".card"))||void 0===t?void 0:t.id)||(null===(n=e.target.closest(".card"))||void 0===n?void 0:n.slug_name)||(null===(a=e.target.closest(".card"))||void 0===a?void 0:a._id),o=e.target.textContent.trim();console.log(o),console.log("Add to favorites"),"Add to favorites"===o?(e.target.nextElementSibling.classList.remove("fav-icon-add"),e.target.nextElementSibling.classList.add("fav-icon-remove"),e.target.textContent="Remove from favorites"):(e.target.nextElementSibling.classList.remove("fav-icon-remove"),e.target.nextElementSibling.classList.add("fav-icon-add"),e.target.textContent="Add to favorites"),d({resultsArr:"",clickedArticleId:r,evt:e})}})),h.addEventListener("click",(function(e){if("card__read-more-search"===e.target.className){var t,n,a,r=(null===(t=e.target.closest(".card"))||void 0===t?void 0:t.id)||(null===(n=e.target.closest(".card"))||void 0===n?void 0:n.slug_name)||(null===(a=e.target.closest(".card"))||void 0===a?void 0:a._id),o=_;document.querySelector('[id_card="'.concat(r,'"]')).style.display="block",u({resultsArr:o,clickedArticleId:r,evt:e})}}))}();
//# sourceMappingURL=read.ae145bda.js.map
