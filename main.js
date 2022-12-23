(()=>{"use strict";function e(e,t){const n=document.createElement("button");return n.setAttribute("id",e),n.textContent=t,n.classList.add("tab"),n}const t=function(){!function(e){const t=document.querySelector(".tab.active");t&&t.classList.remove("active"),document.getElementById("nav1").classList.add("active")}();const e=document.createElement("img");e.src="images/cafe.jpg",e.alt="Cafe with lights";const t=document.querySelector("#main");t.textContent="";const n=document.createElement("h1");n.textContent="Cosmic Time Cafe";const a=function(e){const t=document.createElement("p");return t.textContent="Have you ever been to a cafe that changed your life? Cosmic Time Cafe strives to offer the optimal cafe experience. We have a view of the milky way out of our window and we are a very popular choice for time travelers to visit. Interested in what the future looks like? Stop on by today!",t}();t.appendChild(n),t.appendChild(e),t.appendChild(a)};function n(e){const t=document.createElement("div");return t.setAttribute("id",e),t}function a(e,t,n){const a=document.createElement("img");return a.setAttribute("id",e),a.src=t,a.alt=n,a}const c=function(){!function(e){const t=document.querySelector(".tab.active");t&&t.classList.remove("active"),document.getElementById("nav2").classList.add("active")}();const e=document.querySelector("#main");e.textContent="";const t=document.createElement("h2"),c=document.createElement("h4"),o=document.createElement("h4");t.textContent="Menu",c.textContent="Food",o.textContent="Beverages";const i=n("menu"),d=n("item1"),m=n("item2"),s=n("item3"),l=n("item4"),u=n("item5"),r=a("image1","images/latte.jpg","A latte"),p=a("image2","images/iceLatte.jpg","An iced latte"),h=a("image3","images/matcha.jpg","A matcha latte"),C=a("image4","images/toast.jpg","Toast with jam"),v=a("image5","images/cookies.jpg","Plate of cookies");d.appendChild(r),m.appendChild(p),s.appendChild(h),l.appendChild(C),u.appendChild(v),e.appendChild(t),e.appendChild(o),i.appendChild(d),i.appendChild(m),i.appendChild(s),i.appendChild(c),i.appendChild(l),i.appendChild(u),e.appendChild(i)},o=function(){!function(e){const t=document.querySelector(".tab.active");t&&t.classList.remove("active"),document.getElementById("nav3").classList.add("active")}();const e=document.querySelector("#main");e.textContent="";const t=document.createElement("p");t.textContent="Contact",e.appendChild(t)};(function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("nav"),n=e("nav1","Home"),a=e("nav2","Menu"),c=e("nav3","Contact");return t.appendChild(n),t.appendChild(a),t.appendChild(c),t}());const n=function(e){const t=document.createElement("main");return t.setAttribute("id","main"),t}();t.appendChild(n)})(),t(),function(){const e=document.getElementById("nav1"),n=document.getElementById("nav2"),a=document.getElementById("nav3");e.addEventListener("click",t),n.addEventListener("click",c),a.addEventListener("click",o)}()})();