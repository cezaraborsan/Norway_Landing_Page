const menu = document.querySelector("nav");
const hamburgerMenu = document.querySelector(".hamburger-menu-icon");
const overlay = document.querySelector(".menu-open-overlay");
const closeBtn = document.querySelector(".close");
const screenWidth = screen.width;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector("slider");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const sections = document.querySelectorAll("section");
const dateInput = document.querySelector(".date-input");

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
const year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

const today = year + "-" + month + "-" + day;
dateInput.value = today;

// On load scroll on top

window.addEventListener("load", (event) => {
  scrollToTop();
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

//Hamburger menu functionalities

//add class open-nav when click to open the hamburger menu and add the overlay

hamburgerMenu.addEventListener("click", () => {
  menu.classList.add("open-nav");
  overlay.style.display = "block";
});

//remove class open-nav when click to close the hamburger menu and remove the overlay

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open-nav");
  overlay.style.display = "none";
});

// Close menu when click outside of it

window.addEventListener("mouseup", (e) => {
  if (e.target != menu) {
    menu.classList.remove("open-nav");
    overlay.style.display = "none";
  }
});

// Slider functionalities

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  freemode: true,
  spaceBetween: 10,
  grabCursor: true,
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// // Intersection Observer, section pop up when scoll into view

const elements = document.querySelectorAll("section");
const callback = (str) => {
  console.log(str);
};
const observer = new IntersectionObserver(handleIntersection);

elements.forEach((obs) => {
  observer.observe(obs);
});

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      callback("observer-" + entry.target.getAttribute(".translate"));
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("visible");
    }
  });
}

//LOADER

const loaderWrapper = document.querySelector(".loader-wrapper");
const loaderAnimation = document.querySelector(".loader");
const body = document.querySelector("body");

window.onload = (event) => {
  setTimeout(fadeOut, 2000);
};

function fadeOut() {
  body.style.overflowY = "scroll";
  loaderWrapper.style.opacity = "0";
  loaderWrapper.style.zIndex = "-9999";
}
