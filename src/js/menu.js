import { fadeIn, fadeOut } from "../animation/fadeIn_fadOut";

export function OpenCloseTag(element) {
  const elementAccordion = element.querySelector(".accordeon");

  if (elementAccordion.classList.contains("openTag")) {
    closeElement(elementAccordion);
    fadeOut(elementAccordion.children)
  } else {
    openElement(elementAccordion);
    fadeIn(elementAccordion.children)
  }
}

function openElement(element) {
  element.classList.remove("closeTag");
  element.classList.add("openTag");
}

function closeElement(element) {
    element.classList.remove("openTag");
}
