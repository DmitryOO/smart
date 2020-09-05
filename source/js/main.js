'use strict';

// (function () {
//   var header = document.querySelector('.page-header');
//   var logo = document.querySelector('.page-header__logo');
//   var menu = document.querySelector('.header-menu');
//   var toggle = document.querySelector('.page-header__toggle');
//   var menuItems = document.querySelectorAll('.header-menu__item a');

//   var activateJS = function () {
//     header.classList.remove('page-header--noJS');
//     logo.classList.remove('page-header__logo--noJS');
//     menu.classList.remove('header-menu--noJS');
//     toggle.classList.remove('page-header__toggle--noJS');
//     toggle.addEventListener('click', onOpenMenu);
//   };

//   var onOpenMenu = function () {
//     menu.style.display = 'block';
//     menu.style.position = 'fixed';
//     menu.style.top = '0';
//     menu.style.left = '0';
//     menu.style.height = '100%';
//     menu.style.zIndex = '1000';
//     logo.style.display = 'none';
//     toggle.style.position = 'fixed';
//     toggle.style.right = '0';
//     toggle.style.zIndex = '1001';
//     toggle.classList.add('page-header__toggle--close');
//     toggle.addEventListener('click', onCloseMenu);
//     toggle.removeEventListener('click', onOpenMenu);
//     menuItems.forEach(function (item) {
//       item.addEventListener('click', onCloseMenu);
//     });
//   };

//   var onCloseMenu = function () {
//     menu.style.display = 'none';
//     logo.style.display = 'block';
//     toggle.style.position = 'static';
//     toggle.classList.remove('page-header__toggle--close');
//     toggle.addEventListener('click', onOpenMenu);
//     toggle.removeEventListener('click', onCloseMenu);
//     menuItems.forEach(function (item) {
//       item.removeEventListener('click', onCloseMenu);
//     });
//   };

//   var onResizeJS = function () {
//     if (window.innerWidth < 1024) {
//       activateJS();
//     } else {
//       header.classList.add('page-header--noJS');
//       logo.classList.add('page-header__logo--noJS');
//       menu.classList.add('header-menu--noJS');
//       toggle.classList.add('page-header__toggle--noJS');
//       toggle.removeEventListener('click', onOpenMenu);
//     }
//   };
//   if (window.innerWidth < 1024) {
//     activateJS();
//   }
//   window.addEventListener('resize', onResizeJS);
// })();

(function () {

  var cropElement = document.querySelectorAll('.about__crop-text');
  var  size = 200;
  var  endCharacter = '..';

  cropElement.forEach(el => {
      let text = el.innerHTML;

      if ((el.innerHTML.length > size) && (window.innerWidth < 1024)) {
          text = text.substr(0, size);
          el.innerHTML = text + endCharacter;
      }
  });
}());

(function () {
  var elements = document.querySelectorAll('#tel');
  for (var i = 0; i < elements.length; i++) {
    new IMask(elements[i], {
      mask: '00000000000',
    });
  }
})();
