/* Set the width of the side navigation to 350px */
function openNav() {
  document.getElementById("mysidenav").style.width = "350px";
  document.getElementById("mysidenav").classList.add("open");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mysidenav").style.width = "0";
  document.getElementById("mysidenav").classList.remove("open");
}

// Close sidenav when clicking outside of it (but not when clicking the hamburger or inside the nav)
document.addEventListener('click', function(event) {
  var sidenav = document.getElementById('mysidenav');
  var hambrgr = document.querySelector('.hambrgr-container');
  var isNavOpen = sidenav.classList.contains('open');
  if (!isNavOpen) return;

  // If click is NOT inside sidenav or hamburger, close nav
  if (!sidenav.contains(event.target) && !(hambrgr && hambrgr.contains(event.target))) {
    closeNav();
  }
});

// Slideshow logic-------------------------------------------------
let slideIndex = 1;

// Initialize the slideshow when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// End slideshow logic-----------------------------------------------