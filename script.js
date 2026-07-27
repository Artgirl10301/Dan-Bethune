let slideIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlides() {
        // Hide all slides
        slides.forEach(slide => {
            slide.style.opacity = 0;
            slide.style.zIndex = -1;
        });

        // Show current slide
        slides[slideIndex].style.opacity = 1;
        slides[slideIndex].style.zIndex = 1;

        // Move to next slide
        slideIndex = (slideIndex + 1) % totalSlides;

        setTimeout(showSlides, 6000); // 6 seconds per slide
    }

    showSlides();

    // Highlight active navbar link
    const path = window.location.pathname.split("/").pop();
    const link = document.querySelector(`.navbar a[href='${path}']`);
    if (link) link.classList.add("active");
});
