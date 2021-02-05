
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
AOS.init({
  once: true
});

// Get the navbar
let navbar = document.getElementById("navbar");

// Get mobile
let mobile = document.getElementById("mobile");

// Get the offset position of the navbar
let sticky = navbar.offsetHeight;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  console.log(sticky, scrollY);

  if (window.scrollY >= sticky) {
    mobile.classList.add('display');
  } else {
    mobile.classList.remove('display');
  }
}

window.addEventListener('scroll', myFunction);
});