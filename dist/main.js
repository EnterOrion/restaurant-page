(()=>{"use strict";function e(e,t){const n=document.createElement("button");return n.setAttribute("id",e),n.textContent=t,n}const t=function(){const e=document.createElement("img");e.src="images/cafe.jpg",e.alt="Cafe with lights";const t=document.querySelector("#main");t.textContent="";const n=document.createElement("h1");n.textContent="Cosmic Time Cafe";const o=function(e){const t=document.createElement("p");return t.textContent="Have you ever been to a cafe that changed your life? Cosmic Time Cafe strives to offer the optimal cafe experience. We have a view of the milky way out of our window and we are a very popular choice for time travelers to visit. Interested in what the future looks like? Stop on by today!",t}();t.appendChild(n),t.appendChild(e),t.appendChild(o)},n=function(){const e=document.querySelector("#main");e.textContent="";const t=document.createElement("p");t.textContent="Menu",e.appendChild(t)},o=function(){const e=document.querySelector("#main");e.textContent="";const t=document.createElement("p");t.textContent="Contact",e.appendChild(t)};(function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("nav"),n=e("nav1","Home"),o=e("nav2","Menu"),c=e("nav3","Contact");return t.appendChild(n),t.appendChild(o),t.appendChild(c),t}());const n=function(e){const t=document.createElement("main");return t.setAttribute("id","main"),t}();t.appendChild(n)})(),t(),function(){const e=document.getElementById("nav1"),c=document.getElementById("nav2"),a=document.getElementById("nav3");e.addEventListener("click",t),c.addEventListener("click",n),a.addEventListener("click",o)}()})();