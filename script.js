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

document.addEventListener("scroll", function () {
  const scrollPercentage =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  document.querySelector(".scroll_line").style.width = `${scrollPercentage}%`;
});
