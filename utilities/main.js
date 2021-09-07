export const scroll = () => {
  const sticky = document.querySelector("#main").offsetTop;
  document.body.scrollTop = sticky - 5; // For Safari
  document.documentElement.scrollTop = sticky - 5;
};

// Modal functions

let slideIndex = 1;

export const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};
// Open the Modal
export const openModal = () => {
  document.getElementById("myModal").style.display = "block";
};

// Close the Modal
export const closeModal = () => {
  document.getElementById("myModal").style.display = "none";
};

// Next/previous controls
export const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

// Thumbnail image controls
export const currentSlide = (n) => {
  showSlides((slideIndex = n));
};
