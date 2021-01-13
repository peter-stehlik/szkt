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
	prepareMobSubNav: () => {
		let $menuLi = document.querySelectorAll(".top-nav > li");
		let addSubmenu = function(el){
			let $submenu = el.querySelector("ul");

			if( $submenu ) {
				// let html = `<a href="javascript:void(0);" class="submenu-toggler js-submenu-toggler"></a>`;
				let $submenuToggler = document.createElement("a");
				$submenuToggler.setAttribute("href", "javascript:void(0)");
				$submenuToggler.setAttribute("class", "submenu-toggler js-submenu-toggler");
				el.prepend($submenuToggler);
			}
		};

		$menuLi.forEach(el => addSubmenu(el));

		Custom.toggleMobSubNav();
	},
	toggleMobSubNav: () => {
		let $links = document.querySelectorAll(".js-submenu-toggler");
		let toggleSubNav = function(){
			this.classList.toggle("is-active");

			let $subnav = this.closest("li").querySelector("ul");
			if ($subnav) {
				$subnav.classList.toggle("is-active");
			}
		}

		$links.forEach(el => el.addEventListener("click", toggleSubNav));
	},
	scrollToTop: () => {
		const scrollTopIcon = document.getElementsByClassName('back-to-top')[0];
		const backToTop = document.getElementsByClassName('back-to-top')[0];

		document.addEventListener('scroll', () => {
			let position = window.scrollY;
			(position >= 150 ) ?
				backToTop.classList.add('back-to-top-visible')
			:
				backToTop.classList.remove('back-to-top-visible')
		})

		const scrollToTop = () => {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
		scrollTopIcon.addEventListener('click', scrollToTop);
	},
	carousel: () => {
		var glide = new Glide('.glide', {
			type: 'carousel',
			startAt: 0,
			perView: 3,
			keyboard: true,
			animationTimingFunc: 'ease',
			animationDuration: 600,
			breakpoints: {
				768: {
					perView: 1
				}
			}
		})

		glide.mount();
	}
}

Custom.toggleMobNav();
Custom.prepareMobSubNav();
Custom.scrollToTop();
Custom.carousel();

lightGallery(document.getElementById('lightgallery'));
