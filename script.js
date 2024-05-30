
let menuIcon = document.querySelector('#menu-icon');
let menuX = document.getElementById('menu-x');
let header =  document.querySelector('header');
let scroll = document.getElementById('scroll-top');
let sections = document.querySelectorAll('section');
let navbar = document.querySelector('.navbar')
let navLinks = document.querySelectorAll('header nav a');



header.classList.toggle('sticky' , window.scrollY > 100);
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
 
}




ScrollReveal({
  reset : true,
  distance : '80px',
  duration : 2000,
  delay : 200
});



ScrollReveal().reveal('.section',{ origin : 'top' });
ScrollReveal().reveal('.section-reverse',{ origin : 'top' });
ScrollReveal().reveal('.section-column', { origin : 'top' });
ScrollReveal().reveal('.footerPart',{ origin : 'top' });
















const container = document.querySelector(".container");
const primaryNav = document.querySelector(".nav__list");
const toggleButton = document.querySelector(".nav-toggle");

toggleButton.addEventListener("click", () => {
    const isExpanded = primaryNav.getAttribute("aria-expanded");
    primaryNav.setAttribute(
        "aria-expanded",
        isExpanded === "false" ? "true" : "false"
    );
});

container.addEventListener("click", (e) => {
    if (!primaryNav.contains(e.target) && !toggleButton.contains(e.target)) {
        primaryNav.setAttribute("aria-expanded", "false");
    }
});






