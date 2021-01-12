"use strict";

var Custom = {
  toggleMobNav: function toggleMobNav() {
    var $links = document.querySelectorAll(".js-nav-toggler");

    var toggleNav = function toggleNav() {
      this.classList.toggle("is-active");
      var $topnav = document.getElementById("topNav");

      if ($topnav) {
        $topnav.classList.toggle("is-active");
      } else {
        alert("Top Navigation NOT Included!");
      }
    };

    $links.forEach(function (el) {
      return el.addEventListener("click", toggleNav);
    });
  },
  prepareMobSubNav: function prepareMobSubNav() {
    var $menuLi = document.querySelectorAll(".top-nav > li");

    var addSubmenu = function addSubmenu(el) {
      var $submenu = el.querySelector("ul");

      if ($submenu) {
        // let html = `<a href="javascript:void(0);" class="submenu-toggler js-submenu-toggler"></a>`;
        var $submenuToggler = document.createElement("a");
        $submenuToggler.setAttribute("href", "javascript:void(0)");
        $submenuToggler.setAttribute("class", "submenu-toggler js-submenu-toggler");
        el.prepend($submenuToggler);
      }
    };

    $menuLi.forEach(function (el) {
      return addSubmenu(el);
    });
    Custom.toggleMobSubNav();
  },
  toggleMobSubNav: function toggleMobSubNav() {
    var $links = document.querySelectorAll(".js-submenu-toggler");

    var toggleSubNav = function toggleSubNav() {
      this.classList.toggle("is-active");
      var $subnav = this.closest("li").querySelector("ul");

      if ($subnav) {
        $subnav.classList.toggle("is-active");
      }
    };

    $links.forEach(function (el) {
      return el.addEventListener("click", toggleSubNav);
    });
  },
  scrollToTop: function scrollToTop() {
    var scrollTopIcon = document.getElementsByClassName('back-to-top')[0];
    var page = document.getElementsByClassName('hero')[0];
    var backToTop = document.getElementsByClassName('back-to-top')[0];
    var observer = new IntersectionObserver(function (entries) {
      var isIntersecting = entries[0].isIntersecting;
      !isIntersecting ? backToTop.classList.add('back-to-top-visible') : backToTop.classList.remove('back-to-top-visible');
    });
    observer.observe(page);

    var scrollToTop = function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    scrollTopIcon.addEventListener('click', scrollToTop);
  }
};
Custom.toggleMobNav();
Custom.prepareMobSubNav();
<<<<<<< HEAD
Custom.scrollToTop();
=======
>>>>>>> 0dd869d2aad3ddb2ea33bd32a6deaa77adcea0f1
