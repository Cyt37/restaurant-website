/* ====== 1. Hamburger Toggle ====== */
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.querySelector('.nav-links');

hamburgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ====== 2. Gallery Slider Logic ====== */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
};

document.getElementById('next-btn').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
});

document.getElementById('prev-btn').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
});

/* Optionally, auto‐rotate slider every 5 seconds */
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 5000);
