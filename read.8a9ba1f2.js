function e(e){return e&&e.__esModule?e.default:e}function t({publishedDate:e,sectionName:t,articleTitle:n,shortDescription:r,urlOriginalArticle:c,imgUrl:a,articleId:o}){let s=r;if(r.length>110){const e=r.indexOf(" ",110);e>0&&(s=r.slice(0,e)+"...")}let i=n;if(n.length>58){const e=n.indexOf(" ",44);e>0&&(i=n.slice(0,e)+"...")}let l="Add to favorite";const d=localStorage.getItem("favorites");if(d){const e=JSON.parse(d),t=Object.keys(e);for(const n of t){const t=e[`${n}`],{id:r,_id:c,slug_name:a}=t;o===(r||c||a)&&(l="Remove from favorites")}}return`\n      <article class="card" id="${o}">\n\n        <div class="card__img-container" >\n          <div class="card__blur" id_card="${o}">\n            <p class="card__already-read">\n              Already read ✓\n            </p>\n          </div>\n          <img class="card__img" src="${a}" alt="${n}">\n          <p class="card__section-name">\n            ${t}\n          </p>\n          <button class="card__btn" type="button">\n           ${l}\n          </button>\n          <svg class="fav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#4440F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n        </div>\n        <h2 class="card__title">\n          ${i}\n        </h2>\n        <p class="card__text">${s}</p>\n        <div class="card__bottom">\n          <span class="card__date">\n            ${e}\n          </span>\n          <a class="card__read-more-search"\n            href="${c}" target="_blank"\n          >\n            Read more\n          </a>\n        </div>\n      </article>\n    `}document.querySelector(".search_mob_btn"),document.querySelector(".search_form"),document.querySelector(".search_input"),document.querySelector(".search_btn");var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};function r(e){return function(e){return[c(e.getDate()),c(e.getMonth()+1),e.getFullYear()].join("/")}(new Date(e))}function c(e){return e.toString().padStart(2,"0")}function a({resultsArr:e,clickedArticleId:t,evt:n}){const r="favorites";e.forEach((e=>{if(e.id==t||e.slug_name==t||e._id==t){let c=localStorage.getItem(r);if(c=c?JSON.parse(c):{},c[t])return delete c[`${t}`],n.target.textContent.contains="Remove from favorites",n.target.textContent="Add to favorites",void localStorage.setItem(r,JSON.stringify(c));c[t]=e,localStorage.setItem(r,JSON.stringify(c))}}))}function o({resultsArr:e,clickedArticleId:t,evt:n}){const r="read";e.forEach((e=>{if(e.id==t||e.slug_name==t||e._id==t){let n=localStorage.getItem(r);n=n?JSON.parse(n):{},e.dateOfReading=function(){const e=(new Date).getDate(),t=(new Date).getMonth()+1,n=(new Date).getFullYear();return DateOfRead=`${e}/${t}/${n}`,DateOfRead}(),n[t]=e,console.log(e),localStorage.setItem(r,JSON.stringify(n))}}))}document.querySelector(".news_container");const s=document.querySelector("body"),i=(document.querySelector(".body"),document.querySelector(".search_form"),document.querySelector(".without-news_container"));let l=[],d=[],u=[],h=[],g=[],m=[],_="",f="",S="",b="";function y(e,t,n){return n.indexOf(e)===t}read=localStorage.getItem("read"),read?(l=JSON.parse(read),function(e){const t=e,n=Object.keys(t);console.log(t),console.log(n);for(const e of n){const n=t[`${e}`];g.push(n);const{abstract:r,published_date:c,pub_date:a,section:o,section_name:s,title:i,headline:l,media:h,multimedia:m,url:_,web_url:f,id:S,_id:b,slug_name:p,dateOfReading:v}=n;g.forEach((e=>{d.push(e.dateOfReading)})),u=d.filter(y)}}(l)):i.style.display="block",console.log(g),function(e){read||(i.style.display="block");_="",e.forEach((e=>(function(e){S=`\n    <section class = "section container"\n    <div class = "section-title">\n    <p class = "section-title"__text>${e}</p>\n    <svg class="section-title__icon" width="12" height="8">\n        <use href="./images/symbol-defs.svg#"icon-Vector-Down"></use>\n    </svg>\n    </div>\n    <ul class = "news_container">`}(e),function(e){h=g.filter((t=>t.dateOfReading==e))}(e),function(e){const n=e,c=Object.keys(n);for(const e of c){const c=n[`${e}`];m.push(c);const{abstract:a,published_date:o,pub_date:s,section:i,section_name:l,title:d,headline:u,media:h,multimedia:g,url:_,web_url:f,id:S,_id:y,slug_name:p}=c,v=S||y||p,T=r(o||s),w=i||l,E=d||u.main,A=a,O=_||f;let I="";try{v===S&&(I=h[0]["media-metadata"][2].url),v===p&&(I=g[2].url),v===y&&(I="https://www.nytimes.com/"+g[0].url)}catch(e){I="https://t4.ftcdn.net/jpg/00/89/55/15/240_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"}b+=t({publishedDate:T,sectionName:w,articleTitle:E,shortDescription:A,urlOriginalArticle:O,imgUrl:I,articleId:v}),console.log(b)}}(h),f=S+b+"</ul></section>",_+=f,_)))}(u),s.insertAdjacentHTML("beforeend",_);const p=document.querySelector(".switch_input"),v=document.querySelector(".switch_input--mobile"),T=new class{renderTheme(){const e=this.getBoolean();e||(this.themeSwitcherEl.setAttribute("checked",!0),this.mobileSwitcherEl.setAttribute("checked",!0),this.changeBodyClass(this.Theme.DARK,this.Theme.LIGHT),"index"===this.currentPage&&(this.dataSelected.style.color="#F4F4F4")),e&&(this.changeBodyClass(this.Theme.LIGHT,this.Theme.DARK),"index"===this.currentPage&&(this.dataSelected.style.color="#111321"))}changeBodyClass(e,t){document.body.classList.add(e),document.body.classList.remove(t)}getBoolean(){const e=localStorage.getItem(this.THEME_STORAGE_KEY);return e===this.Theme.LIGHT||!e}constructor(t,r){e(n)(this,"onThemeToggle",(()=>{const e=this.getBoolean();e&&localStorage.setItem(this.THEME_STORAGE_KEY,this.Theme.DARK),e||localStorage.setItem(this.THEME_STORAGE_KEY,this.Theme.LIGHT),this.renderTheme()})),this.themeSwitcherEl=t,this.mobileSwitcherEl=r,this.dataSelected=document.querySelector(".data_selected"),this.currentPage=document.querySelector("body").getAttribute("data-current-page"),this.THEME_STORAGE_KEY="theme",this.Theme={LIGHT:"light",DARK:"dark"}}}(p,v);function r(e){return function(e){return[w(e.getDate()),w(e.getMonth()+1),e.getFullYear()].join("/")}(new Date(e))}function w(e){return e.toString().padStart(2,"0")}v.addEventListener("change",T.onThemeToggle),p.addEventListener("change",T.onThemeToggle),T.renderTheme(),s.addEventListener("click",(function(e){if("card__btn"===e.target.className){const t=e.target.closest(".card")?.id||e.target.closest(".card")?.slug_name||e.target.closest(".card")?._id,n=g;e.target.textContent.contains="Add to favorites",e.target.textContent="Remove from favorites",a({resultsArr:n,clickedArticleId:t,evt:e})}})),s.addEventListener("click",(function(e){if("card__read-more-search"===e.target.className){const t=e.target.closest(".card")?.id||e.target.closest(".card")?.slug_name||e.target.closest(".card")?._id,n=g;document.querySelector(`[id_card="${t}"]`).style.display="block",o({resultsArr:n,clickedArticleId:t,evt:e})}}));
//# sourceMappingURL=read.8a9ba1f2.js.map
