// Menu toggle
let menuBtn = document.getElementById("menuBtn");
let nav = document.getElementById("nav");

menuBtn.onclick = () => {
  nav.classList.toggle("active");
};

// Dark mode
let modeBtn = document.getElementById("modeBtn");

modeBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

// Lightbox
let imgs = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightboxImg");

imgs.forEach(img=>{
  img.onclick = ()=>{
    lightbox.style.display="flex";
    lightboxImg.src = img.src;
  }
});

lightbox.onclick = ()=>{
  lightbox.style.display="none";
};

// Scroll animation
window.addEventListener("scroll", ()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    let top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});