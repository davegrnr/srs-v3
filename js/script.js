window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var header = document.querySelector("header");
  var main = document.querySelector("main");
  var sticky = header.offsetHeight;

  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
