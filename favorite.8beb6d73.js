var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire7309;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire7309=o),o("2Fivl");var r=o("bUb57"),i=o("lMgIy");o("kzf4A");r=o("bUb57");var l=o("eUZtB"),c=o("1n11p"),a=o("2Fivl");const d=document.querySelector(".news_container"),s=document.querySelector(".without-news_container");document.querySelector(".search_form");let u="";document.querySelector(".search_mob_btn").addEventListener("click",r.onSearchClick);const m=document.querySelector(".switch_input"),f=document.querySelector(".switch_input--mobile"),h=new(0,i.ThemeSwitcher)(m,f);f.addEventListener("change",h.onThemeToggle),m.addEventListener("change",h.onThemeToggle),h.renderTheme();document.querySelector("body").addEventListener("click",a.onAddToFavoritesClick),function(){const e=localStorage.getItem("favorites");if(e){const t=JSON.parse(e),n=Object.keys(t);for(const e of n){const n=t[`${e}`],{abstract:o,published_date:r,pub_date:i,section:a,section_name:s,title:m,headline:f,media:h,multimedia:p,url:g,web_url:b,id:y,_id:w,slug_name:_}=n,v=y||w||_,T=(0,l.default)(r||i),S=a||s,q=m||f.main,E=o,k=g||b;let L="";try{v===y&&(L=h[0]["media-metadata"][2].url,console.log(L)),v===_&&(L=p[2].url,console.log(L)),v===w&&(L="https://www.nytimes.com/"+p[0].url,console.log(L))}catch(e){L="https://t4.ftcdn.net/jpg/00/89/55/15/240_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"}d.innerHTML=u+=(0,c.default)({publishedDate:T,sectionName:S,articleTitle:q,shortDescription:E,urlOriginalArticle:k,imgUrl:L,articleId:v})}}else s.style.display="block"}();
//# sourceMappingURL=favorite.8beb6d73.js.map
