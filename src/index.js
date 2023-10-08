import axios from "axios";
// Varaibles to add and remove the list on click
const dropDownBtm = document.querySelector(
  "#navigation-list-mobile-dropdown-button"
);
const navigationDropDownList = document.querySelector(
  ".navigation-list-mobile-dropdown-list"
);

// Variable to scroll up
const scrollUpBtn = document.querySelector(".footer-up");

// Variable for form
const contactForm = document.querySelector(".section-contact-form");

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

// Log the form data
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  console.log(formData.get("checkbox") === "on");
});

// Phase 3 exercises
const jobSection = document.querySelector(".section-jobs");

async function getData() {
  return axios
    .get("http://localhost:3000/work", {
      params: { format: "xml" },
    })
    .then((res) => {
      // console.log(res.data);
      return res.data;
      // xmlDoc = parser.parseFromString(res.data, "text/xml");
      // console.log(xmlDoc);
    })
    .catch((e) => {
      console.log(e);
    });
}

async function readData() {
  const parser = new DOMParser();
  const data = await getData();
  const xmlDoc = parser.parseFromString(data, "text/xml");
  console.log(xmlDoc);
  const itemElements = xmlDoc.querySelectorAll("item");

  itemElements.forEach((itemElement) => {
    // Extract data from XML elements
    const title = itemElement.querySelector("title").textContent;
    const link = itemElement.querySelector("link").textContent;
    const description = itemElement.querySelector("description").textContent;
    const country = itemElement.querySelector("country").textContent;

    // Create a div element to hold the item
    const itemDiv = document.createElement("div");

    // Create and populate elements for title, link, description, and country
    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const linkElement = document.createElement("a");
    linkElement.href = link;
    linkElement.textContent = "Read more"; // You can customize the text

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;

    const countryElement = document.createElement("p");
    countryElement.textContent = `Country: ${country}`;

    // Append elements to the item div
    itemDiv.appendChild(titleElement);
    itemDiv.appendChild(linkElement);
    // itemDiv.appendChild(descriptionElement);
    itemDiv.appendChild(countryElement);

    // Append the item div to the section
    jobSection.appendChild(itemDiv);
  });
}

readData();
console.log(process.env.API_LINK);
