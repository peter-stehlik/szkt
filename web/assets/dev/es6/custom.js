let Custom = {
	toggleMobNav: () => {
		let $links = document.querySelectorAll(".js-nav-toggler");
		let toggleNav = function () {
			this.classList.toggle("is-active");

			let $topnav = document.getElementById("topNav");
			if ($topnav) {
				$topnav.classList.toggle("is-active");
			} else {
				alert("Top Navigation NOT Included!");
			}
		};

		$links.forEach(el => el.addEventListener("click", toggleNav));
	},
}

Custom.toggleMobNav();