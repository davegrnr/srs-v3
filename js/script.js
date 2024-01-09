let navbar = document.getElementById("navbar");
let navbarContainer = document.getElementById("navbar-container");
let isSticky = false;

window.addEventListener("scroll", function () {
  if (window.scrollY > navbarContainer.offsetTop) {
    if (!isSticky) {
      navbar.classList.add("sticky");
      isSticky = true;
    }
  } else {
    if (isSticky) {
      navbar.classList.remove("sticky");
      isSticky = false;
    }
  }
});
