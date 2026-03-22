// Mobile Menu Toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const sections = document.querySelectorAll(".section");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Typing Effect
const text = ["Web Developer", "Python Developer", "DSA Learner"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.querySelector(".typing").innerText = current.substring(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

function showEmail() {
  const email = "aksoni911190@gmail.com";

  const emailText = document.getElementById("email");
  emailText.innerText = email;
  emailText.style.display = "block";

  navigator.clipboard.writeText(email);

  // alert("Email copied to clipboard!");
}

const skillsSection = document.querySelector(".skills-section");

window.addEventListener("scroll", () => {
  const top = skillsSection.getBoundingClientRect().top;

  if (top < window.innerHeight - 100) {
    document.querySelectorAll(".progress").forEach(bar => {
      bar.style.width = bar.classList.contains("html") ? "90%" :
                        bar.classList.contains("css") ? "85%" :
                        bar.classList.contains("js") ? "75%" :
                        bar.classList.contains("python") ? "80%" :
                        bar.classList.contains("dsa") ? "70%" : "0";
    });
  }
});
