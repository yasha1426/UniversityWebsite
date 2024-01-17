document.addEventListener("DOMContentLoaded", function () {
  let currentLocation = window.location.href;
  let navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(function (link) {
    if (link.href === currentLocation) {
      link.classList.add("active");
      link.style.setProperty("--afterback", "none");
    }
  });
});
