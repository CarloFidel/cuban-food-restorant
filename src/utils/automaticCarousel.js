import { fadeIn, fadeOut } from "../animation/fadeIn_fadOut";

export function automaticCarousel(carousel, interval) {
    let currentIndex = 0;
    const slides = carousel.querySelectorAll("img");
    const totalSlides = slides.length;

    setInterval(() => {
        const currentSlide = slides[currentIndex];
        fadeOut(currentSlide);

        setTimeout(() => {
            currentSlide.style.display = "none";

            currentIndex = (currentIndex + 1) % totalSlides;
            const nextSlide = slides[currentIndex];

            nextSlide.style.display = "block";
            fadeIn(nextSlide);
        }, 200);
    }, interval);

}