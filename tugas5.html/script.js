/* =========================
   PORTFOLIO PREMIUM JS
========================= */

/* CARD EFFECT */

const card =
document.querySelector(".card3d");

const glow =
document.querySelector(".glow");

document.addEventListener("mousemove",(e)=>{

  let x =
  (window.innerWidth / 2 - e.pageX) / 30;

  let y =
  (window.innerHeight / 2 - e.pageY) / 30;

  /* CARD ROTATE */

  card.style.transform = `
  rotateY(${x}deg)
  rotateX(${y}deg)
  translateY(-10px)
  scale(1.03)
  `;

  /* GLOW EFFECT */

  glow.style.left =
  e.pageX / 6 + "px";

  glow.style.top =
  e.pageY / 6 + "px";

});

/* RESET */

document.addEventListener("mouseleave",()=>{

  card.style.transform = `
  rotateY(0deg)
  rotateX(0deg)
  translateY(0px)
  scale(1)
  `;

});

/* =========================
   SMOOTH SCROLL
========================= */

document
.querySelectorAll("a[href^='#']")
.forEach(anchor=>{

  anchor.addEventListener("click",

  function(e){

    e.preventDefault();

    document.querySelector(
    this.getAttribute("href")
    ).scrollIntoView({

      behavior:"smooth"

    });

  });

});

/* =========================
   TYPING EFFECT
========================= */

const text =
"Daffa Ar Raafi";

const typing =
document.querySelector(".hero-text span");

let index = 0;

function typeText(){

  if(index < text.length){

    typing.innerHTML +=
    text.charAt(index);

    index++;

    setTimeout(typeText,120);

  }

}

typing.innerHTML = "";

typeText();

/* =========================
   SCROLL ANIMATION
========================= */

const reveals =
document.querySelectorAll(
".hero-text, .card3d, .edu-card, .exp-card, .hobby-card, .skills span"
);

window.addEventListener("scroll",
revealSection);

function revealSection(){

  for(let i=0;
  i<reveals.length;
  i++){

    let windowHeight =
    window.innerHeight;

    let revealTop =
    reveals[i]
    .getBoundingClientRect().top;

    let revealPoint = 100;

    if(revealTop <
    windowHeight - revealPoint){

      reveals[i]
      .classList.add("active");

    }

  }

}

/* =========================
   PARTICLE EFFECT
========================= */

const body =
document.querySelector("body");

for(let i=0;i<25;i++){

  let bubble =
  document.createElement("span");

  bubble.classList.add("bubble");

  let size =
  Math.random() * 20 + "px";

  bubble.style.width = size;
  bubble.style.height = size;

  bubble.style.left =
  Math.random() * innerWidth + "px";

  bubble.style.animationDuration =
  Math.random() * 10 + 5 + "s";

  body.appendChild(bubble);

}

/* =========================
   AUTO TEXT CHANGE
========================= */

const roles = [

  "Front-End Developer",
  "UI/UX Designer",
  "Web Designer",
  "Mahasiswa Informatika"

];

let roleIndex = 0;

const roleText =
document.querySelector(".hero-text h2");

setInterval(()=>{

  roleIndex++;

  if(roleIndex >= roles.length){

    roleIndex = 0;

  }

  roleText.style.opacity = "0";

  setTimeout(()=>{

    roleText.innerHTML =
    roles[roleIndex];

    roleText.style.opacity = "1";

  },500);

},3000);

/* =========================
   NAVBAR SHADOW
========================= */

window.addEventListener("scroll",()=>{

  const navbar =
  document.querySelector(".navbar");

  navbar.classList.toggle(
  "sticky",
  window.scrollY > 20
  );

});