// DOM elements
const btnToggle = document.querySelector(".btn-toggle");
const nav = document.querySelector(".nav");
const topHeader = document.querySelector(".top-header");

// Toggle menu

btnToggle.addEventListener("click", () => {
	btnToggle.classList.toggle("active");
	nav.classList.toggle("active");
	topHeader.classList.toggle("fixed");
});

// const swiper = new Swiper(".swiper", {
// 	loop: true,
// });
