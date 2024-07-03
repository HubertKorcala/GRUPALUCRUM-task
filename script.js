document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li.nav-link a");
  const sections = document.querySelectorAll("section");
  const dropdownButtons = document.querySelectorAll(
    ".header-container-nav-dropdown__button"
  );
  const menuButton = document.querySelector(".headear-container-nav-menu img");
  const mobileMenu = document.querySelector("#mobile-menu");
  const closeButton = document.querySelector("#mobile-menu .close");

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.add("show");
  });

  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.remove("show");
  });

  document.addEventListener("click", (e) => {
    if (
      mobileMenu.classList.contains("show") &&
      !e.target.closest("#mobile-menu") &&
      !e.target.closest(".headear-container-nav-menu img")
    ) {
      mobileMenu.classList.remove("show");
    }
  });

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const dropdownContent = button.nextElementSibling;

      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
        dropdownContent.classList.add("hide");
        setTimeout(() => {
          dropdownContent.classList.remove("hide");
          dropdownContent.style.visibility = "hidden";
        }, 300);
      } else {
        dropdownContent.classList.remove("hide");
        dropdownContent.classList.add("show");
        dropdownContent.style.visibility = "visible";
      }
    });
  });

  document.addEventListener("click", (event) => {
    const dropdowns = document.getElementsByClassName(
      "header-container-dropdown-content"
    );
    const isClickInside = event.target.closest(".header-container-dropdown");

    if (!isClickInside) {
      Array.from(dropdowns).forEach((dropdown) => {
        if (dropdown.classList.contains("show")) {
          dropdown.classList.remove("show");
          dropdown.classList.add("hide");
          setTimeout(() => {
            dropdown.classList.remove("hide");
            dropdown.style.visibility = "hidden";
          }, 300);
        }
      });
    }
  });

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
        mobileMenu.classList.remove("show");
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
