const listOfListItems = document.getElementsByClassName("list-item");
const listOfLinks = document.querySelector("a");
const contactButton = document.getElementById("contact-btn");
const navbar = document.getElementById("navigation");
const fullList = document.getElementsByTagName("ul");
const listOfSections = document.getElementsByTagName("section");
const email = document.createElement("a");
email.innerHTML = "awzorek23@wp.pl";
email.classList.add("email");
email.href = "mailto:awzorek23@wp.pl";

contactButton.addEventListener("click", () => showEmail());

function showEmail() {
  const box = document.querySelector(".contact-box");
  box.classList.toggle("showMail");
  if (box.classList.contains("showMail")) {
    box.appendChild(email);
  } else {
    email.remove();
  }
}

function showNavigation(item) {
  navbar.classList.toggle("openNav");
  item.classList.toggle("expanded");
  if (navbar.classList.contains("openNav")) {
    item.innerText = "Close";
  } else {
    item.innerText = "Open";
  }
}

function removeOpenButton() {
  if (window.innerWidth > 750) {
    const openButton = document.querySelector(".btn-open");
    if (openButton) {
      openButton.remove(".btn-open");
    }
  }
}

const createOpenButton = () => {
  if (window.innerWidth < 750 && !document.querySelector(".btn-open")) {
    const openButton = document.createElement("button");
    openButton.textContent = "Open";
    openButton.classList.add("btn-open");
    openButton.setAttribute("aria-expanded", "false");
    openButton.addEventListener("click", () => showNavigation(openButton));
    navbar.appendChild(openButton);
  }
};

const removeActive = (id) => {
  for (let i = 0; i < listOfListItems.length; i++) {
    if (listOfListItems[i].classList.contains("active") && i !== id) {
      listOfListItems[i].classList.remove("active");
      listOfSections[i].querySelector("h1").classList.remove("active-header");
    }
  }
};

function checkMainPage() {
  const validNumber = window.innerWidth > 750 ? 200 : 100;
  if (listOfSections[0].getBoundingClientRect().top <= validNumber) {
    removeActive(0);
    listOfListItems[0].classList.add("active");
    listOfSections[0].querySelectorAll("h1")[0].classList.add("active-header");
    listOfSections[0].querySelectorAll("h1")[1].classList.add("active-header");
    listOfSections[0].querySelector(".home-left").classList.add("showUp");
    listOfSections[0].querySelector(".home-right").classList.add("showSide");
  }
  if (listOfSections[1].getBoundingClientRect().top <= validNumber) {
    removeActive(1);
    listOfListItems[1].classList.add("active");
    listOfSections[1].querySelector("h1").classList.add("active-header");
    listOfSections[1].querySelector(".about-left").classList.add("showUp");
    listOfSections[1].querySelector(".about-right").classList.add("showSide");
  }
  if (listOfSections[2].getBoundingClientRect().top <= validNumber) {
    removeActive(2);
    listOfListItems[2].classList.add("active");
    listOfSections[2].querySelector("h1").classList.add("active-header");
    listOfSections[2].querySelector(".projects-left").classList.add("showUp");
    listOfSections[2]
      .querySelector(".projects-right")
      .classList.add("showSide");
  }
  if (listOfSections[3].getBoundingClientRect().top <= validNumber) {
    removeActive(3);
    listOfListItems[3].classList.add("active");
    listOfSections[3].querySelector("h1").classList.add("active-header");
    listOfSections[3].querySelector(".ability-left").classList.add("showUp");
    listOfSections[3].querySelector(".ability-right").classList.add("showSide");
  }
  if (listOfSections[4].getBoundingClientRect().bottom <= validNumber) {
    removeActive(4);
    listOfListItems[4].classList.add("active");
    listOfSections[4].querySelector("h1").classList.add("active-header");
  }
}

window.addEventListener("load", createOpenButton);
window.addEventListener("resize", () => {
  removeOpenButton();
  createOpenButton();
});
window.addEventListener("scroll", () => {
  checkMainPage();
});
