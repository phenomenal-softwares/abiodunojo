let navbarCollapse = document.getElementById("navbarCollapse"),
  navbarToggler = document.querySelector(".navbar-toggler"),
  navLinks = document.querySelectorAll(".nav-link");

navbarToggler.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
navbarCollapse.style.display = "none";
navbarCollapse.style.transition = "max-height 0.4s ease";
navbarCollapse.style.overflow = "hidden";
navbarCollapse.style.maxHeight = "0";

function hidenav() {
  navbarCollapse.style.maxHeight = "0";
  navbarToggler.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
}

function shownav() {
  navbarCollapse.style.display = "block";
  // Get the scrollHeight to set maxHeight for smooth transition
  navbarCollapse.style.maxHeight = navbarCollapse.scrollHeight + "px";
  navbarToggler.innerHTML = '<i class="fa-solid fa-xmark"></i>';
}

// Optional: Hide display after transition ends for better accessibility
navbarCollapse.addEventListener("transitionend", function () {
  if (navbarCollapse.style.maxHeight === "0px") {
    navbarCollapse.style.display = "none";
  }
});

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

