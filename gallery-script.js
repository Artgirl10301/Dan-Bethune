const galleryContainer = document.getElementById('messyPile');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaptionContainer = document.getElementById('lightbox-caption-container');
const closeBtn = document.querySelector('.close-btn');
const lightboxContent = document.getElementById('lightbox-content');
galleryContainer.addEventListener('click', function (event) {
  if (event.target.tagName === 'IMG') {
    // Display the clicked image and caption in the lightbox
    lightbox.style.display = 'flex';
    lightboxImg.src = event.target.src;

    // Clear previous captions
    lightboxCaptionContainer.innerHTML = '';

    // Get all associated captions and append them
    const figcaption = event.target.nextElementSibling; // Assuming figcaption is next to the image
    const captionParagraph = document.createElement('p');
    captionParagraph.textContent = figcaption.textContent;
    lightboxCaptionContainer.appendChild(captionParagraph);
  }
});

closeBtn.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', function (event) {
  // Close the lightbox when clicking outside the image or caption
  if (event.target === lightbox) {
    closeLightbox();
  }
});

function closeLightbox() {
  lightbox.style.display = 'none';
}






let currentZoom = 1; // Initial zoom level

lightboxContent.addEventListener('wheel', function (event) {
    event.preventDefault();

    const delta = event.deltaY || event.detail || event.wheelDelta;

    const rect = lightboxImg.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const scale = delta > 0 ? 0.9 : 1.1; // Adjust the scale factor as needed
    currentZoom *= scale;
    currentZoom = Math.max(0.1, Math.min(currentZoom, 3));

    lightboxImg.style.transformOrigin = `${offsetX}px ${offsetY}px`;
    lightboxImg.style.transform = `scale(${currentZoom})`;
});

// Reset zoom when the lightbox is closed
function closeLightbox() {
    lightbox.style.display = 'none';
    lightboxImg.style.transform = 'scale(1)';
    currentZoom = 1;
}

document.addEventListener("DOMContentLoaded", function () {
  // Get the current path
  const path = window.location.pathname;

  // Get the link corresponding to the current page
  const link = document.querySelector(`.navbar a[href='${path}']`);

  // Add the 'active' class to the current link
  if (link) {
      link.classList.add("active");
  }
});
