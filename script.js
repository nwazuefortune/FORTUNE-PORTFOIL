const themeBtn = document.getElementById("themeBtn");
const navbar = document.querySelector(".navbar");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        navbar.classList.remove("navbar-dark", "bg-dark");
        navbar.classList.add("navbar-light", "bg-light");

        themeBtn.textContent = "☾ Dark Mode";
    } else {
        navbar.classList.remove("navbar-light", "bg-light");
        navbar.classList.add("navbar-dark", "bg-dark");

        themeBtn.textContent = "☀ Light Mode";
    }
});

const typing = document.getElementById("typing");

const words = [
    "BEAUTIFUL WEBSITES",
    "RESPONSIVE WEBSITES",
    "RESPONSIVE DESIGNS"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    let word = words[wordIndex];

    if (deleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typing.textContent = word.substring(0, letterIndex);

    if (!deleting && letterIndex === word.length) {
        deleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (deleting && letterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, deleting ? 40 : 80);
}

typeEffect();


const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.textContent =
        "THANK YOU!  MESSAGE RECEIVED SUCCESSFULLY.";

    formMessage.className = "text-info mt-3 mb-0";

    contactForm.reset();
});




document.getElementById("year").textContent =
    new Date().getFullYear();
