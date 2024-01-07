const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav-icon-middle');
const navMobil = document.querySelector('.nav-mobil');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon');
	nav.classList.toggle('nav-icon--active');
	navMobil.classList.toggle('nav-mobil--active');
});