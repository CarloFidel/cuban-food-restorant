import { gsap } from "gsap";

export function fadeIn(element) {
  gsap.fromTo(
    element,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.3,
      ease: "power2.in",

      stagger: 0.15,
    },
  );
}

export function fadeOut(element) {
  gsap.fromTo(
    element,
    {
      opacity: 1,
    },
    {
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",

      stagger: 0.1,
    },
  );
}
