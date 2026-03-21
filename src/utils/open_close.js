export function openElement(element) {
  element.classList.remove("closeTag");
  element.classList.add("openTag");
}

export function closeElement(element) {
    element.classList.remove("openTag");
}
