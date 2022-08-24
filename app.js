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
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// // Intersection Observer, section pop up when scoll into view

const options = {
  rootMargin: "-150px 0px",
};

const translateOnScroll = new IntersectionObserver(function (
  entries,
  translateOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("visible");
    }
  });
},
options);

sections.forEach((section) => {
  translateOnScroll.observe(section);
});
