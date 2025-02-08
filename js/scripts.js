const listOfListItems = document.getElementsByClassName("list-item");
const listOfLinks = document.getElementsByTagName("a");
const contactButton = listOfListItems.item(listOfListItems.length - 1);
const navbar = document.getElementById("navigation");
const fullList = document.getElementsByTagName("ul");
const home = document.getElementById("home");
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

window.addEventListener("load", createOpenButton);
window.addEventListener("resize", () => {
  removeOpenButton();
  createOpenButton();
});

contactButton.children[0].addEventListener("click", showEmail);
