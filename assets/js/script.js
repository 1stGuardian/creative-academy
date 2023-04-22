let navbar = document.querySelector("nav.navbar");
let navToggle = document.querySelector("nav .navbar-toggler");
let navLink = document.querySelectorAll(
  "nav.navbar .navbar-nav>.nav-item>.nav-link"
);
let navSuccess;

window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    navbar.classList.replace("bg-transparent", "bg-success");
  } else {
    navbar.classList.replace("bg-success", "bg-transparent");
  }
});

window.addEventListener("load", () => {
  if (window.scrollY > 150) {
    navbar.classList.replace("bg-transparent", "bg-success");
  }
});

navToggle.addEventListener("click", () => {
  if (navToggle.classList.contains("collapsed")) {
    // Event saat menutup
    if (!navSuccess) {
      navbar.classList.replace("bg-success", "bg-transparent");
    }
  } else {
    // Event saat membuka
    if (navbar.classList.contains("bg-success")) {
      navSuccess = true;
    } else {
      navSuccess = false;
    }
    navbar.classList.replace("bg-transparent", "bg-success");
  }
});

navLink.forEach((e, i, arr) => {
  e.addEventListener("click", () => {
    arr.forEach((e) => {
      e.classList.remove("active", "fw-7");
    });
    e.classList.add("active", "fw-7");
  });
});
