/* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if (document.documentElement.scrollTop < 30) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
			const shouldOpen = _d.matches(":hover");
			_m.classList.toggle("show", shouldOpen);
			_d.classList.toggle("show", shouldOpen);

			_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) {
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	// On click
	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}


/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});


/* Filter - Isotope */
const gridCheck = document.querySelector('.grid');

if (gridCheck !== null) {
	// init Isotope
	var iso = new Isotope('.grid', {
		itemSelector: '.element-item',
		layoutMode: 'fitRows'
	});

	// bind filter button click
	var filtersElem = document.querySelector('.filters-button-group');
	filtersElem.addEventListener('click', function (event) {
		// only work with buttons
		if (!matchesSelector(event.target, 'button')) {
			return;
		}
		var filterValue = event.target.getAttribute('data-filter');
		// use matching filter function
		iso.arrange({ filter: filterValue });
	});

	// change is-checked class on buttons
	var buttonGroups = document.querySelectorAll('.button-group');
	for (var i = 0, len = buttonGroups.length; i < len; i++) {
		var buttonGroup = buttonGroups[i];
		radioButtonGroup(buttonGroup);
	}

	function radioButtonGroup(buttonGroup) {
		buttonGroup.addEventListener('click', function (event) {
			// only work with buttons
			if (!matchesSelector(event.target, 'button')) {
				return;
			}
			buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
			event.target.classList.add('is-checked');
		});
	}
}


/* Revenir au top  */
// Get the button
myButton = document.getElementById("myBtn");

// Afficher le bouton revenir en avant
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}
/*function myFunction() {
	let btn = document.createElement("button");
	btn.innerHTML = "Click Me";
	document.body.appendChild(btn);
};*/

// revenir au top
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}
//creation de bouton
function myFunction() {
	let btn = document.createElement("button");
	btn.innerHTML = "Click Me";
	btn.style.backgroundColor = randomColor();
	let element = document.getElementById("navbar1");
	element.insertAdjacentElement('beforebegin', btn);
	//document.getElementById("navbar1").innerHTML="click me";
	//document.getElementById(id).onclick = function(){code}
};
function init() {

	var menu = document.getElementById( 'bt-menu' ),
		trigger = menu.querySelector( 'a.bt-menu-trigger' ),
		// triggerPlay only for demo 6
		triggerPlay = document.querySelector( 'a.bt-menu-trigger-out' ),
		// event type (if mobile use touch events)
		eventtype = mobilecheck() ? 'touchstart' : 'click',
		resetMenu = function() {
			classie.remove( menu, 'bt-menu-open' );
			classie.add( menu, 'bt-menu-close' );
		},
		closeClickFn = function( ev ) {
			resetMenu();
			overlay.removeEventListener( eventtype, closeClickFn );
		};

	var overlay = document.createElement('div');
	overlay.className = 'bt-overlay';
	menu.appendChild( overlay );

	trigger.addEventListener( eventtype, function( ev ) {
		ev.stopPropagation();
		ev.preventDefault();
		
		if( classie.has( menu, 'bt-menu-open' ) ) {
			resetMenu();
		}
		else {
			classie.remove( menu, 'bt-menu-close' );
			classie.add( menu, 'bt-menu-open' );
			overlay.addEventListener( eventtype, closeClickFn );
		}
	});

	if( triggerPlay ) {
		triggerPlay.addEventListener( eventtype, function( ev ) {
			ev.stopPropagation();
			ev.preventDefault();

			classie.remove( menu, 'bt-menu-close' );
			classie.add( menu, 'bt-menu-open' );
			overlay.addEventListener( eventtype, closeClickFn );
		});
	}

}

init();
//

