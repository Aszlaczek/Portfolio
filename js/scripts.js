const listOfListItems = document.getElementsByClassName("list-item");
const listOfLinks = document.getElementsByTagName("a");
const contactButton = listOfListItems.item(listOfListItems.length - 1);
const navbar = document.getElementById("navigation");
const fullList = document.getElementsByTagName("ul");
const listOfSections = $("section");
const about = document.getElementById("about");
const emailPop = document.createElement("a");
emailPop.innerHTML = "awzorek23@wp.pl";
emailPop.classList.add("email");
emailPop.href = "mailto:awzorek23@wp.pl";

for (let i = 0; i < listOfLinks.length; i++) {
  listOfLinks[i].addEventListener("click", () => toggleActiveClass(i));
}

function toggleActiveClass(element) {
  for (let i = 0; i < listOfLinks.length; i++) {
    if (listOfListItems[i].classList.contains("active")) {
      listOfListItems[i].classList.remove("active");
    }
  }
  listOfListItems[element].classList.add("active");
}

function showNavigation(item) {
  item.classList.toggle("showList");
  if (item.classList.contains("showList")) {
    item.innerText = "Close";
    fullList[0].classList.add("showMenu");
    navbar.classList.add("openNav");
  } else {
    item.innerText = "Open";
    fullList[0].classList.remove("showMenu");
    navbar.classList.remove("openNav");
  }
}

function removeOpenButton() {
  if (window.innerWidth > 750) {
    const openButton = document.querySelector(".btn-open");
    if (openButton) {
      openButton.remove();
    }
  }
}

const createOpenButton = () => {
  if (window.innerWidth < 750 && !document.querySelector(".btn-open")) {
    const openButton = document.createElement("button");
    openButton.textContent = "Open";
    openButton.classList.add("btn-open");
    openButton.addEventListener("click", () => showNavigation(openButton));
    navbar.appendChild(openButton);
  }
};

function showEmail() {
  contactButton.classList.toggle("showEmail");
  if (contactButton.classList.contains("showEmail")) {
    emailPop.classList.add("open");
    setTimeout(() => {
      contactButton.appendChild(emailPop);
    }, 200);
  } else {
    emailPop.classList.remove("open");
    emailPop.classList.add("close");
    setTimeout(() => {
      contactButton.removeChild(emailPop), emailPop.classList.toggle("close");
    }, 200);
  }
}

const removeActive = (id) => {
  for (let i of listOfListItems) {
    if (i.classList.contains("active") && i !== id) {
      i.classList.remove("active");
    }
  }
};

function checkMainPage() {
  const validNumber = window.innerWidth > 750 ? 100 : 50;
  if (listOfSections[0].getBoundingClientRect().top <= validNumber) {
    removeActive(0);
    listOfListItems[0].classList.add("active");
  }
  if (listOfSections[1].getBoundingClientRect().top <= validNumber) {
    removeActive(1);
    listOfListItems[1].classList.add("active");
  }
  if (listOfSections[2].getBoundingClientRect().top <= validNumber) {
    removeActive(2);
    listOfListItems[2].classList.add("active");
  }
  if (listOfSections[3].getBoundingClientRect().top <= validNumber) {
    removeActive(3);
    listOfListItems[3].classList.add("active");
  }
  if (listOfSections[4].getBoundingClientRect().bottom <= validNumber) {
    removeActive(4);
    listOfListItems[4].classList.add("active");
  }
  console.log(listOfSections[4].getBoundingClientRect().bottom);
}

console.log(listOfSections);
window.addEventListener("load", createOpenButton);
window.addEventListener("resize", () => {
  removeOpenButton();
  createOpenButton();
});
window.addEventListener("scroll", () => {
  checkMainPage();
});

contactButton.children[0].addEventListener("click", showEmail);
