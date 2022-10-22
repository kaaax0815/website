const headHeight = document.querySelector(".ds-header").offsetHeight;
document.querySelector(".ds-banner,.ds-main-section").style.marginTop = `${headHeight}px`;

window.addEventListener('scroll', () => {
	if (window.scrollY >= 10) {
		document.querySelector(".ds-header").classList.add('ds-fixed-header');
	} else {
		document.querySelector(".ds-header").classList.remove('ds-fixed-header');
	}
});