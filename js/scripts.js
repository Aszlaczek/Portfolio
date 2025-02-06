const listOfButtons = document.getElementsByClassName("list-item");
const contactButton = listOfButtons.item(listOfButtons.length - 1);
const emailPop = document.createElement("a");
emailPop.innerHTML = "awzorek23@wp.pl";
emailPop.classList.add("email");
emailPop.href = "mailto:awzorek23@wp.pl";

function showEmail() {
  contactButton.classList.toggle("open");
  if (contactButton.classList.contains("open")) {
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
