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

const addAnimation = (id, section) => {
  if (!listOfSections[id].getAttribute("aria-haspopup")) {
    listOfSections[id]
      .querySelector(`.${section}-left`)
      .classList.add("showSide");
    listOfSections[id]
      .querySelector(`.${section}-right`)
      .classList.add("showUp");
    listOfSections[id].setAttribute("aria-haspopup", "true");
  }
};

function checkMainPage() {
  const validNumber = window.innerWidth > 750 ? 500 : 350;
  if (listOfSections[0].getBoundingClientRect().top <= validNumber) {
    removeActive(0);
    addAnimation(0, "home");
    listOfListItems[0].classList.add("active");
    listOfSections[0].querySelectorAll("h1")[0].classList.add("active-header");
    listOfSections[0].querySelectorAll("h1")[1].classList.add("active-header");
  }
  if (listOfSections[1].getBoundingClientRect().top <= validNumber) {
    removeActive(1);
    listOfListItems[1].classList.add("active");
    listOfSections[1].querySelector("h1").classList.add("active-header");
    addAnimation(1, "about");
  }
  if (listOfSections[2].getBoundingClientRect().top <= validNumber) {
    removeActive(2);
    listOfListItems[2].classList.add("active");
    listOfSections[2].querySelector("h1").classList.add("active-header");
    addAnimation(2, "projects");
  }
  if (listOfSections[3].getBoundingClientRect().top <= validNumber) {
    removeActive(3);
    listOfListItems[3].classList.add("active");
    listOfSections[3].querySelector("h1").classList.add("active-header");

    for (let i of listOfSections[3].querySelectorAll(".icons-item")) {
      i.classList.add("add-animation");
    }
    addAnimation(3, "ability");
  }
  if (listOfSections[4].getBoundingClientRect().top <= validNumber) {
    removeActive(4);
    listOfListItems[4].classList.add("active");
    listOfSections[4].querySelectorAll("h1")[0].classList.add("active-header");
    listOfSections[4].querySelectorAll("h1")[1].classList.add("active-header");
    addAnimation(4, "cv");
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
