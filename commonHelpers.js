import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as S,i as l}from"./assets/vendor-77e16229.js";const c=document.getElementById("datetime-picker"),n=document.querySelector("[data-start]"),m=document.querySelector("[data-days]"),f=document.querySelector("[data-hours]"),h=document.querySelector("[data-minutes]"),y=document.querySelector("[data-seconds]");let d=new Date,u=0;const b={enableTime:!0,time_24hr:!0,dateFormat:"Y-m-d  H:i",defaultDate:new Date,minuteIncrement:1,onClose(t){d=t[0],d<new Date?(l.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):n.disabled=!1}};S(c,b);n.addEventListener("click",w);function w(){n.disabled=!0,c.disabled=!0,u=setInterval(()=>{const e=d-new Date;if(e<=0){clearInterval(u),l.success({title:"Completed",message:"The countdown has finished!"}),D();return}const{days:o,hours:s,minutes:i,seconds:r}=E(e);g({days:o,hours:s,minutes:i,seconds:r})},1e3)}function E(t){const r=Math.floor(t/864e5),C=Math.floor(t%864e5/36e5),p=Math.floor(t%864e5%36e5/6e4),x=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:C,minutes:p,seconds:x}}function a(t){return String(t).padStart(2,"0")}function g({days:t,hours:e,minutes:o,seconds:s}){m.textContent=t,f.textContent=a(e),h.textContent=a(o),y.textContent=a(s)}function D(){n.disabled=!0,c.disabled=!1,m.textContent="00",f.textContent="00",h.textContent="00",y.textContent="00"}
//# sourceMappingURL=commonHelpers.js.map