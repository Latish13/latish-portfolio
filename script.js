let hamburger = document.querySelector("#hamburger");
let cross = document.querySelector("#cross");
let navLinks = document.querySelector(".nav-links");
let navPart = document.querySelector(".nav-part-first");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navPart.classList.toggle("active");
});

cross.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navPart.classList.toggle("active");
});

// Typing Text Code
if(typeof Typed !== "undefined"){
    new Typed(".multiple-text", {
        strings: ["Front-end Developer", "Junior Web Developer", "Junior Web Designer"],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 1000,
        loop: true,
        showCursor: false,
    });
}
else{
    console.warn("Typed.js library is not loaded.");
};