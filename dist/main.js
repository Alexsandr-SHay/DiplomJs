(()=>{"use strict";console.log("Проверка запуска"),(()=>{const e=document.querySelector(".modal-callback"),o=document.querySelector(".modal-overlay"),t=document.querySelectorAll(".callback-btn"),l=t=>{t?(e.style.display="block",o.style.display="block"):(e.style.display="none",o.style.display="none")};t.forEach((o=>{o.addEventListener("click",(()=>{l(!0),function({timing:e,draw:o,duration:t}){const l=performance.now();requestAnimationFrame((function c(n){let r=(n-l)/t;r>1&&(r=1);const s=e(r);o(s),r<1&&requestAnimationFrame(c)}))}({duration:1e3,timing:e=>e,draw(o){e.style.opacity=o}})}))})),o.addEventListener("click",(e=>{e.target.closest(".modal-callback")||l(!1)})),e.addEventListener("click",(e=>{e.target.closest(".modal-close")&&l(!1)}))})(),(()=>{const e=document.querySelectorAll("a[href^='#']");for(let o of e)o.addEventListener("click",(e=>{e.preventDefault();const t=o.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}));const o=document.querySelector(".up");console.log(o),window.onscroll=()=>{t()};const t=()=>{document.body.scrollTop>300||document.documentElement.scrollTop>300?o.style.display="block":o.style.display="none"};o.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})}))})()})();