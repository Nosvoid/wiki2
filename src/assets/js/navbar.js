// Reponsive Burger Menu 

function burgerMenu() {
  var body = document.querySelector("body");
  var burgerIcon = document.getElementById("burger");
  var closeIcon = document.getElementById("close");
  var wikiNavbarMenu = document.getElementById('wiki-navbar-menu');
  body.classList.toggle("open");

  if (body.classList.contains("open")) {
    burgerIcon.style.display = "none";
    closeIcon.style.display = "block";
    wikiNavbarMenu.style.transform = "translateY(0)";
    wikiNavbarMenu.style.opacity = "1";
  } else {
    burgerIcon.style.display = "block";
    closeIcon.style.display = "none";
    wikiNavbarMenu.style.transform = "translateY(-100%)";
    wikiNavbarMenu.style.opacity = "0";
  }
}

// Dropdown

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});