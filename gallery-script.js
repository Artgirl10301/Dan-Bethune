const galleryContainer = document.getElementById('messyPile');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaptionContainer = document.getElementById('lightbox-caption-container');
const closeBtn = document.querySelector('.close-btn');
const lightboxContent = document.getElementById('lightbox-content');

let currentZoom = 1;

// ---------------------------------------------
// LIGHTBOX
// ---------------------------------------------
galleryContainer.addEventListener('click', function (event) {
  if (event.target.tagName === 'IMG') {
    lightbox.style.display = 'flex';
    lightboxImg.src = event.target.src;

    lightboxCaptionContainer.innerHTML = '';
    const figcaption = event.target.nextElementSibling;
    if (figcaption) {
      const captionParagraph = document.createElement('p');
      captionParagraph.textContent = figcaption.textContent;
      lightboxCaptionContainer.appendChild(captionParagraph);
    }
  }
});

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

function closeLightbox() {
  lightbox.style.display = 'none';
  lightboxImg.style.transform = 'scale(1)';
  currentZoom = 1;
}

// ---------------------------------------------
// ZOOM (scroll wheel inside the lightbox)
// ---------------------------------------------
lightboxContent.addEventListener('wheel', function (event) {
  event.preventDefault();
  const delta = event.deltaY || event.detail || event.wheelDelta;
  const rect = lightboxImg.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const scale = delta > 0 ? 0.9 : 1.1;

  currentZoom *= scale;
  currentZoom = Math.max(0.1, Math.min(currentZoom, 3));

  lightboxImg.style.transformOrigin = `${offsetX}px ${offsetY}px`;
  lightboxImg.style.transform = `scale(${currentZoom})`;
});

// ---------------------------------------------
// ACTIVE NAV LINK
// The gallery itself no longer needs JS to lay out:
// CSS column-width handles the responsive Pinterest-style
// reflow on its own, so no resize listener is needed here.
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
