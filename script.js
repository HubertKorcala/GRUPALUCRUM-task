document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li.nav-link a");
  const sections = document.querySelectorAll("section");
  const dropdownButton = document.querySelector(
    ".header-container-nav-dropdown__button"
  );
  const dropdownContent = dropdownButton
    ? dropdownButton.nextElementSibling
    : null;

  document.addEventListener("click", (event) => {
    const dropdowns = document.getElementsByClassName(
      "header-container-dropdown-content"
    );
    const isClickInside = event.target.closest(".header-container-dropdown");

    if (!isClickInside) {
      Array.from(dropdowns).forEach((dropdown) => {
        dropdown.style.display = "none";
      });
    }
  });

  if (dropdownButton && dropdownContent) {
    dropdownButton.addEventListener("click", (event) => {
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    });
  }

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
