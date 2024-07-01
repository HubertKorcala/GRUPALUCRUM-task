document.addEventListener("click", function (event) {
  var dropdowns = document.getElementsByClassName(
    "header-container-dropdown-content"
  );
  var isClickInside = event.target.closest(".header-container-dropdown");

  if (!isClickInside) {
    for (var i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.display = "none";
    }
  }
});

document
  .querySelector(".header-container-nav-dropdown__button")
  .addEventListener("click", function (event) {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelectorAll(".nav-link").forEach((nav) => {
      nav.classList.remove("header-container-nav__active");
    });

    this.classList.add("header-container-nav__active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li.nav-link a");
  const sections = document.querySelectorAll("section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      navLinks.forEach((link) =>
        link.parentElement.classList.remove("header-container-nav__active")
      );

      link.parentElement.classList.add("header-container-nav__active");

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li.nav-link a");
  const sections = document.querySelectorAll("section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      navLinks.forEach((link) =>
        link.parentElement.classList.remove("header-container-nav__active")
      );

      link.parentElement.classList.add("header-container-nav__active");

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      const navLink = document.querySelector(
        `nav ul li.nav-link a[href="#${entry.target.id}"]`
      );
      if (entry.isIntersecting) {
        navLinks.forEach((link) =>
          link.parentElement.classList.remove("header-container-nav__active")
        );

        navLink.parentElement.classList.add("header-container-nav__active");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.5,
  });

  sections.forEach((section) => observer.observe(section));
});
