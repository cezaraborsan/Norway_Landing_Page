const menu = document.querySelector(".links");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");

hamburgerMenu.addEventListener("click", () => {
  menu.style.transform = "translateX(0)";
  overlay.style.display = "block";
  console.log("clicked");
});
