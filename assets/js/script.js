
const toggler = S('#nav-toggle');
const overlay = S('.black-overlay');
const navList = S('.nav-list');
const loginBtn = S('.btn-login');
const loginForm = S('.login-form');
loginBtn.addEventListener('click', function(e) {
  e.preventDefault();
  if(loginForm.checkValidity()) {
    // Before submit code ...
    loginForm.submit();
  } else {
    loginForm.reportValidity();
  }
})
if (window.innerWidth <= 800) {
  toggler.addEventListener('click', function() {
    if(toggler.classList.contains('change')) {
      toggler.classList.remove('change');
      navList.style.display = 'none';
      overlay.style.opacity = 0;
      overlay.style.zIndex = 0;
      return;
    }
    toggler.classList.add('change');
    overlay.style.zIndex = 3;
    overlay.style.opacity = 1;
    navList.style.display = 'block';
  });
}

function S(query) {
  return document.querySelector(query);
}
