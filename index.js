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