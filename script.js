// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 800);
  }
});

// ==========================
// AOS
// ==========================

if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 80
  });
}

// ==========================
// TYPING EFFECT
// ==========================

if (document.querySelector(".typing")) {
  new Typed(".typing", {
    strings: [
      "Frontend Developer",
      "Creative Web Designer",
      "UI Designer",
      "Freelancer"
    ],
    typeSpeed: 80,
    backSpeed: 45,
    backDelay: 1500,
    loop: true
  });
}

// ==========================
// PROGRESS BAR
// ==========================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

  if (!progressBar) return;

  const total =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    (window.pageYOffset / total) * 100;

  progressBar.style.width = progress + "%";

});

// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");

if (menuBtn && menu) {

  menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

  });

}

// ==========================
// ACTIVE MENU
// ==========================

const navLinks =
document.querySelectorAll(".menu a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item =>
      item.classList.remove("active"));

    link.classList.add("active");

    if(menu){
      menu.classList.remove("active");
    }

  });

});

// ==========================
// COUNTER
// ==========================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

  const target =
  parseInt(counter.innerText);

  let count = 0;

  const speed = target / 100;

  function update(){

    count += speed;

    if(count < target){

      counter.innerText =
      Math.floor(count) + "+";

      requestAnimationFrame(update);

    }else{

      counter.innerText =
      target + "+";

    }

  }

  update();

});

// ==========================
// CUSTOM CURSOR
// ==========================

const cursor = document.getElementById("cursor");

if (cursor) {

document.addEventListener("mousemove", (e) => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

}

// ==========================
// FAQ
// ==========================

const faqItems = document.querySelectorAll(".faqItem");

faqItems.forEach(item => {

item.addEventListener("click", () => {

item.classList.toggle("open");

});

});

// ==========================
// NAVBAR EFFECT
// ==========================

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if (!header) return;

if (window.scrollY > 80) {

header.style.background = "rgba(0,0,0,.9)";

} else {

header.style.background = "rgba(0,0,0,.6)";

}

});

// ==========================
// BUTTON EFFECT
// ==========================

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn => {

btn.addEventListener("mouseenter", () => {

btn.style.transform = "translateY(-6px)";

});

btn.addEventListener("mouseleave", () => {

btn.style.transform = "translateY(0)";

});

});

// ==========================
// EMAILJS
// ==========================

emailjs.init({
publicKey: "uoMEm03hDSzw3fedd"
});

const form = document.querySelector(".contactForm");

if (form) {

form.addEventListener("submit", function (e) {

e.preventDefault();

emailjs.sendForm(
"service_dvq2yru",
"template_1h9k5aj",
this
)

.then(() => {

alert("✅ Message Sent Successfully!");

form.reset();

})

.catch((error) => {

console.log(error);

alert("❌ Message Failed!");

});

});

}

// ==========================
// CONSOLE
// ==========================

console.log("%cKrishna Portfolio Loaded Successfully 🚀",
"color:#00ff99;font-size:18px;font-weight:bold;");