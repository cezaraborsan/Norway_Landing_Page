const menu = document.querySelector(".links");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const screenWidth = screen.width;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector("slider");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

//Hamburger menu functionalities

if (screenWidth < 1000) {
  hamburgerMenu.addEventListener("click", () => {
    menu.style.transform = "translateY(0)";
    overlay.style.display = "block";
    // closeBtn.style.display = "block";
  });

  // closeBtn.addEventListener("click", () => {
  //   menu.style.transform = "translateY(-100%)";
  //   overlay.style.display = "none";
  //   closeBtn.style.display = "none";
  // });

  // When click outside of menu to close

  window.addEventListener("mouseup", function (event) {
    if (event.target != menu) {
      menu.style.transform = "translateY(-100%)";
      overlay.style.display = "none";
      // closeBtn.style.display = "none";
    }
  });

  console.log("here");
}

// Slider functionalities

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  freemode: true,
  spaceBetween: 10,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
