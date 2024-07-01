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
