import { fadeIn, fadeOut } from "../animation/fadeIn_fadOut";

export function handleSlide(buttonRight, buttonLeft, slideContainer) {
  const getStep = () => slideContainer.clientWidth;
  let clickCount = 0;
  buttonLeft.style.visibility = "hidden";

  buttonRight.addEventListener("click", () => {
    if (buttonLeft.style.visibility === "hidden") {
      fadeIn(buttonLeft, 500);
      buttonLeft.style.visibility = "visible";
    }
    slideContainer.scrollBy({
      left: getStep(),
      behavior: "smooth",
    });
    clickCount++;
    if (clickCount === 4) {
      fadeOut(buttonRight, 500);
      setTimeout(() => {
        buttonRight.style.visibility = "hidden";
      }, 500);
    }
  });

  buttonLeft.addEventListener("click", () => {
    if (buttonRight.style.visibility === "hidden") {
      fadeIn(buttonRight, 500);
      buttonRight.style.visibility = "visible";
    }

    slideContainer.scrollBy({
      left: -getStep(),
      behavior: "smooth",
    });
    clickCount--;
    if (clickCount === 0) {
      fadeOut(buttonLeft, 500);
      setTimeout(() => {
        buttonLeft.style.visibility = "hidden";
      }, 500);
    }
  });
}
