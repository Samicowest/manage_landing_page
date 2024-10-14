const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const insideNav = document.getElementById("insideNav");

function ToggleHidden() {
  navbar.classList.toggle("hidden");
  menu.classList.toggle("marks");
}

function hideNavbar() {
  navbar.classList.add("hidden");
}

menu.addEventListener("click", (event) => {
  event.stopPropagation();
  ToggleHidden();
  console.log("hidden");
});

document.addEventListener("click", (event) => {
  if (!insideNav.classList.contains(event.target)) {
    hideNavbar();
  }
});

window.addEventListener("scroll", () => {
  hideNavbar();
});

window.addEventListener("scroll", function () {
  var navba = document.getElementById("navbar_contain");
  if (window.scrollY > 15) {
    navba.classList.add("scrolled");
  } else {
    navba.classList.remove("scrolled");
  }
});
