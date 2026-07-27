let slideIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    function showSlides() {
        slides.forEach(slide => {
            slide.style.opacity = 0;
        });

        slides[slideIndex].style.opacity = 1;

        slideIndex = (slideIndex + 1) % totalSlides;

        setTimeout(showSlides, 6000);
    }

    showSlides();

    // Highlight active navbar link
    const path = window.location.pathname.split("/").pop();
    const link = document.querySelector(`.navbar a[href='${path}']`);
    if (link) link.classList.add("active");
});
