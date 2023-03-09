function e(e){return e&&e.__esModule?e.default:e}function t({publishedDate:e,sectionName:t,articleTitle:n,shortDescription:c,urlOriginalArticle:o,imgUrl:s,articleId:r}){let i=c;if(c.length>110){const e=c.indexOf(" ",110);e>0&&(i=c.slice(0,e)+"...")}let a=n;if(n.length>58){const e=n.indexOf(" ",44);e>0&&(a=n.slice(0,e)+"...")}let l="Add to favorite";const d=localStorage.getItem("favorites");if(d){const e=JSON.parse(d),t=Object.keys(e);for(const n of t){const t=e[`${n}`],{id:c,_id:o,slug_name:s}=t;r===(c||o||s)&&(l="Remove from favorites")}}return`\n      <article class="card" id="${r}">\n        <div class="card__img-container">\n          <div class="card__blur">\n            <p class="card__already-read">\n              Already read ✓\n            </p>\n          </div>\n          <img class="card__img" src="${s}" alt="${n}">\n          <p class="card__section-name">\n            ${t}\n          </p>\n          <button class="card__btn" type="button">\n           ${l}\n          </button>\n          <svg class="fav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#4440F6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>\n        </div>\n        <h2 class="card__title">\n          ${a}\n        </h2>\n        <p class="card__text">${i}</p>\n        <div class="card__bottom">\n          <span class="card__date">\n            ${e}\n          </span>\n          <a class="card__read-more-search"\n            href="${o}" target="_blank"\n          >\n            Read more\n          </a>\n        </div>\n      </article>\n    `}document.querySelector(".search_mob_btn"),document.querySelector(".search_form"),document.querySelector(".search_input"),document.querySelector(".search_btn");var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e};function c(e){return function(e){return[o(e.getDate()),o(e.getMonth()+1),e.getFullYear()].join("/")}(new Date(e))}function o(e){return e.toString().padStart(2,"0")}document.querySelector(".news_container");const s=document.querySelector("body"),r=(document.querySelector(".body"),document.querySelector(".search_form"),document.querySelector(".without-news_container"));let i=[],a=[],l=[],d=[],u=[],h=[],m="",g="",_="",f="";function b(e,t,n){return n.indexOf(e)===t}read=localStorage.getItem("read"),read?(i=JSON.parse(read),function(e){const t=e,n=Object.keys(t);console.log(t),console.log(n);for(const e of n){const n=t[`${e}`];u.push(n);const{abstract:c,published_date:o,pub_date:s,section:r,section_name:i,title:d,headline:h,media:m,multimedia:g,url:_,web_url:f,id:p,_id:y,slug_name:S,dateOfReading:T}=n;u.forEach((e=>{a.push(e.dateOfReading)})),l=a.filter(b)}}(i)):r.style.display="block",console.log(u),function(e){read||(r.style.display="block");m="",e.forEach((e=>(function(e){_=`\n    <section class = "section container"\n    <div class = "section-title">\n    <p class = "section-title"__text>${e}</p>\n    <svg class="section-title__icon" width="12" height="8">\n        <use href="./images/symbol-defs.svg#"icon-Vector-Down"></use>\n    </svg>\n    </div>\n    <ul class = "news_container">`}(e),function(e){d=u.filter((t=>t.dateOfReading==e))}(e),function(e){const n=e,o=Object.keys(n);for(const e of o){const o=n[`${e}`];h.push(o);const{abstract:s,published_date:r,pub_date:i,section:a,section_name:l,title:d,headline:u,media:m,multimedia:g,url:_,web_url:b,id:p,_id:y,slug_name:S}=o,T=p||y||S,w=c(r||i),v=a||l,E=d||u.main,O=s,A=_||b;let D="";try{T===p&&(D=m[0]["media-metadata"][2].url),T===S&&(D=g[2].url),T===y&&(D="https://www.nytimes.com/"+g[0].url)}catch(e){D="https://t4.ftcdn.net/jpg/00/89/55/15/240_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"}f+=t({publishedDate:w,sectionName:v,articleTitle:E,shortDescription:O,urlOriginalArticle:A,imgUrl:D,articleId:T}),console.log(f)}}(d),g=_+f+"</ul></section>",m+=g,m)))}(l),s.insertAdjacentHTML("beforeend",m);const p=document.querySelector(".switch_input"),y=document.querySelector(".switch_input--mobile"),S=new class{renderTheme(){const e=this.getBoolean();e||(this.themeSwitcherEl.setAttribute("checked",!0),this.mobileSwitcherEl.setAttribute("checked",!0),this.changeBodyClass(this.Theme.DARK,this.Theme.LIGHT),"index"===this.currentPage&&(this.dataSelected.style.color="#F4F4F4")),e&&(this.changeBodyClass(this.Theme.LIGHT,this.Theme.DARK),"index"===this.currentPage&&(this.dataSelected.style.color="#111321"))}changeBodyClass(e,t){document.body.classList.add(e),document.body.classList.remove(t)}getBoolean(){const e=localStorage.getItem(this.THEME_STORAGE_KEY);return e===this.Theme.LIGHT||!e}constructor(t,c){e(n)(this,"onThemeToggle",(()=>{const e=this.getBoolean();e&&localStorage.setItem(this.THEME_STORAGE_KEY,this.Theme.DARK),e||localStorage.setItem(this.THEME_STORAGE_KEY,this.Theme.LIGHT),this.renderTheme()})),this.themeSwitcherEl=t,this.mobileSwitcherEl=c,this.dataSelected=document.querySelector(".data_selected"),this.currentPage=document.querySelector("body").getAttribute("data-current-page"),this.THEME_STORAGE_KEY="theme",this.Theme={LIGHT:"light",DARK:"dark"}}}(p,y);function c(e){return function(e){return[T(e.getDate()),T(e.getMonth()+1),e.getFullYear()].join("/")}(new Date(e))}function T(e){return e.toString().padStart(2,"0")}y.addEventListener("change",S.onThemeToggle),p.addEventListener("change",S.onThemeToggle),S.renderTheme();
//# sourceMappingURL=read.81c03152.js.map
