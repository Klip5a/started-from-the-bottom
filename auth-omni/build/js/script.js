"use strict";var pole1=document.getElementById("phone"),pole2=document.getElementById("password"),button=document.getElementById("btn");function checkParams(){19==pole1.value.length&&5==pole2.value.length?button.disabled=!1:button.setAttribute("disabled","disabled")}function mask(e){var t="8 ( ___ ) ___-__-__",n=0,l=t.replace(/\D/g,""),a=this.value.replace(/\D/g,"");l.length>=a.length&&(a=l),this.value=t.replace(/./g,function(e){return/[_\d]/.test(e)&&n<a.length?a.charAt(n++):n>=a.length?"":e})}button.setAttribute("disabled","disabled"),pole1.addEventListener("input",mask,!1);