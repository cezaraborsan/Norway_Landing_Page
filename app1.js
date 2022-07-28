const menu = document.querySelector(".links");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const screenWidth = screen.width;

if (screenWidth < 1000) {
  hamburgerMenu.addEventListener("click", () => {
    menu.style.transform = "translateX(0)";
    overlay.style.display = "block";
    closeBtn.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    menu.style.transform = "translateX(100%)";
    overlay.style.display = "none";
    closeBtn.style.display = "none";
  });

  window.addEventListener("mouseup", function (event) {
    if (event.target != menu) {
      menu.style.transform = "translateX(100%)";
      overlay.style.display = "none";
      closeBtn.style.display = "none";
    }
  });
}
