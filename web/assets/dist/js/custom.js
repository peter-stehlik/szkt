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
  }
};
Custom.toggleMobNav();
Custom.prepareMobSubNav();
