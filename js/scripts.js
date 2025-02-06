const listOfButtons = document.getElementsByClassName("list-item");
const contactButton = listOfButtons.item(listOfButtons.length - 1);
const navbar = document.getElementById("navigation");
const fullList = document.getElementsByTagName("ul");

const emailPop = document.createElement("a");
emailPop.innerHTML = "awzorek23@wp.pl";
emailPop.classList.add("email");
emailPop.href = "mailto:awzorek23@wp.pl";

const openButton = document.createElement("button");
openButton.textContent = "Open";
openButton.classList.add("btn-open");

openButton.addEventListener("click", () => {
  openButton.classList.toggle("showList");
  if (openButton.classList.contains("showList")) {
    openButton.innerText = "Close";
    fullList[0].classList.add("showMenu");
    navbar.classList.add("openNav");
  } else {
    openButton.innerText = "Open";
    fullList[0].classList.remove("showMenu");
    navbar.classList.remove("openNav");
  }
});

const showOpen = () => {
  if (window.innerWidth < 750) {
    navbar.hasChildNodes(openButton) ? navbar.appendChild(openButton) : "";
  } else {
    navbar.hasChildNodes(openButton) ? navbar.removeChild(openButton) : "";
  }
};
window.onload = () => showOpen();
window.onresize = () => showOpen();

function showEmail() {
  contactButton.classList.toggle("show");
  if (contactButton.classList.contains("show")) {
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

contactButton.children[0].addEventListener("click", showEmail);
