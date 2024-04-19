 const profileSpan = document.querySelector('#profile-span');
 const dropdownProfile = document.querySelector('#dropdown-profile');

 dropdownProfile.style.visibility = 'hidden';

 let isTrue = false;

 profileSpan.addEventListener('click', function() {
     if (!isTrue) {
         dropdownProfile.style.visibility = 'visible';
         isTrue = true;
     } else {
         dropdownProfile.style.visibility = 'hidden';
         isTrue = false;
     }
 });
 //  m
 const rejects = document.querySelector('#reject');
 const sections = document.querySelector('#section');

 let cookieRejected = false;

 rejects.addEventListener('click', function() {
     if (!cookieRejected) {
         sections.style.visibility = 'hidden'
     } else {
         sections.style.visibility = 'visible'
     }

 })

 const closed = document.querySelector('#close');

 let cookieCloses = false;

 closed.addEventListener('click', () => {
     if (!cookieCloses) {
         sections.style.visibility = 'hidden'
     } else {
         sections.style.visibility = 'visible'
     }
 })

 setCookie = (cName, cValue, expdays) => {
     let date = new Date();
     date.setTime(data, getTime() + (expdays * 24 * 60 * 1000));
     const expires = 'expires=' + date.toUTCString();
     document.cookie = cName + "=" + cValue + "; " + expires + "; path=/ , path=/learnmore"
 }

 getCookie = (cName) => {
     const name = cName + "=";
     const cDecoded = decodeURIComponent(document.cookie);
     const cArr = cDecoded.split("; ");
     let value;
     cArr.forEach(val => {
         if (val.indexOf(name) === 0) value = val.substring(name.length);
     })
     return false;
 }

 document.querySelector('#accept').addEventListener('click', () => {
     document.querySelector('#section').style.display = 'none';
     setCookie('cookie', true, 15);
 })

 cookieMessage = () => {
     if (!getCookie("cookie"))
         document.querySelector('#section').style.display = 'block';
 }

 window.addEventListener("load", cookieMessage);