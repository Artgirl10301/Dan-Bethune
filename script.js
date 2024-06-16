let slideIndex = 0;
showSlides();

function showSlides() {
    const images = [
        'Chrome Throated Cicada.jpg',
        'I LIke The Way The Lines Run.jpg',
        'Something In Between my toes4w8d3t.jpg',
        'Acquisition of Inevitability v1 sm.jpg',
        'IMG_0753.JPG',
        'Buttunssm.jpg',
        // Add more images as needed
    ];

    slideIndex = (slideIndex + 1) % images.length;

    const container = document.querySelector('.container');
    container.style.backgroundImage = `url('${images[slideIndex]}')`;

    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.opacity = 1;
            slide.style.zIndex = 1;
        } else {
            slide.style.opacity = 0;
            slide.style.zIndex = -1;
        }
    });

    setTimeout(showSlides, 6000); // Change image every 6 seconds
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
  