const track = document.querySelector(".carusel-track");
const slides = Array.from(track.children);
const nextBurron = document.querySelector(".carusel_button-right");
const prevBurron = document.querySelector(".carusel_button-left");
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;
slides.forEach((slide, index) => {
  slide.getElementsByClassName.left = slideWidth * index + "px";
});
