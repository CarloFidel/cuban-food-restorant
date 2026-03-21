import { gsap } from "gsap";

export function openElement(element) {
  const height = element.scrollHeight;

  gsap.fromTo(
    element,
    { height: 20 },
    {
      height: height,
      duration: 0.3,
      ease: "power1.out",
      onComplete: () => {
        element.style.height = "auto";
      },
    },
  );
}

export function closeElement(element) {
  const height = element.scrollHeight;

  gsap.fromTo(
    element,
    {
      height: height,
    },
    {
      height: "20px",
      duration: 0.3,
      ease: "ease",
    },
  );
}
