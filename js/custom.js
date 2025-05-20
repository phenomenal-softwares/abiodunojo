let navbarCollapse = document.getElementById("navbarCollapse"),
  navbarToggler = document.querySelector(".navbar-toggler"),
  navLinks = document.querySelectorAll(".nav-link");

navbarToggler.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';

navLinks.forEach((link) => {
  link.addEventListener("click", hidenav);
});


navbarToggler.addEventListener("click", function () {
  if (
    navbarCollapse.style.display === "none" ||
    navbarCollapse.style.display === ""
  ) {
    shownav();
  } else {
    hidenav();
  }
});

function hidenav() {
  navbarCollapse.style.display = "none";
  navbarToggler.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
}

function shownav() {
  navbarCollapse.style.display = "block";
  navbarToggler.innerHTML = '<i class="fa-solid fa-xmark"></i>';
}
