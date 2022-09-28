let r = document.querySelector(':root');

function setDarkMode() {
	r.style.setProperty('--color', 'white');
	r.style.setProperty('--background', '#1f1f1f');
}

function setLightMode() {
	r.style.setProperty('--color', '#212121');
	r.style.setProperty('--background', '#ffffff');
}

function collapse(id) {
	let elem = document.getElementById(id);
	let elemHeader = document.getElementById(id + "-header");
	if (elem.classList.contains('section-visible')) {
		elem.classList.remove('section-visible');
		elemHeader.classList.remove('expanded-header');
	}
	else {
		elem.classList.add('section-visible');
		elemHeader.classList.add('expanded-header');
	}
}

function openSidebar() {
	document.getElementById('sidebar').classList.remove('sidebar-hide');
}

function closeSidebar() {
	document.getElementById('sidebar').classList.add('sidebar-hide');
}
