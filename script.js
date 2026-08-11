// ---------------------------------------------
// SLIDESHOW
// Reads slides directly from the DOM instead of a hardcoded
// image list, so it can never fall out of sync with the HTML.
// Crossfade is handled purely by toggling the .is-active class;
// CSS transitions do the actual fading (see styles.css).
// ---------------------------------------------
(function () {
  const slides = document.querySelectorAll('.slide');
  if (!slides.length) return;

  let currentIndex = 0;
  slides[0].classList.add('is-active');

  const SLIDE_INTERVAL = 6000; // ms

  function nextSlide() {
    slides[currentIndex].classList.remove('is-active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('is-active');
  }

  setInterval(nextSlide, SLIDE_INTERVAL);
})();

// ---------------------------------------------
// ACTIVE NAV LINK
// Highlights the nav link matching the current page path.
// ---------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;
  const currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  document.querySelectorAll('.navbar a').forEach((link) => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || linkPage === path) {
      link.classList.add('active');
    }
  });
});
