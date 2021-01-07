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
  }
};
Custom.toggleMobNav();
