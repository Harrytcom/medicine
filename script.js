var toggleButton = document.querySelector('.toggle-menu-js');
const menu = document.querySelector('.menu');

var navBar = document.querySelector('.nav-bar');

toggleButton.addEventListener('click', function () {
    menu.classList.add('menu_active-js');
  }
);