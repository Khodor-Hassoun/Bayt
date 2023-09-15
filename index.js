// Varaibles to add and remove the list on click
const dropDownBtm = document.querySelector(
  "#navigation-list-mobile-dropdown-button"
);
const navigationDropDownList = document.querySelector(
  ".navigation-list-mobile-dropdown-list"
);

// Variable to scroll up
const scrollUpBtn = document.querySelector(".footer-up");

// Add or remove class to display the dropdown menu
dropDownBtm.addEventListener("click", (e) => {
  navigationDropDownList.classList.toggle("navigation-display-hide");
});

// Remove the dropdown in case of desktop window size
window.addEventListener("resize", () => {
  let width = window.innerWidth;
  if (width >= 640) {
    navigationDropDownList.classList.add("navigation-display-hide");
  }
});

// Scroll to the top
scrollUpBtn.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
