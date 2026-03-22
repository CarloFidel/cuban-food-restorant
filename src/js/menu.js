import { fadeIn, fadeOut } from "../animation/fadeIn_fadOut";
import { closeElement, openElement } from "../utils/open_close";
import { setLocal } from "../utils/setLocal";

export function OpenCloseTag(element) {
  const elementAccordion = element.querySelector(".accordeon");

  if (elementAccordion.classList.contains("openTag")) {
    closeElement(elementAccordion);
    fadeOut(elementAccordion.children);
  } else {
    openElement(elementAccordion);
    fadeIn(elementAccordion.children);
  }
}

/* -----------------------------------
Click en cards
-------------------------------------- */

export function clickCard(cards) {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const titulo = card.querySelector("h3").textContent;
      const descripcion = card.querySelector(
        ".plato-descripcion p",
      ).textContent;
      const precio = card.querySelector(".plato-precio").textContent;
      const imagen = card.querySelector("img").src;

      const data = {
        titulo,
        descripcion,
        precio,
        imagen,
      };

      const isSave = setLocal(data);
      if (!isSave) {
        return;
      } else {
        window.location.href = "/pages/detalle.html";
      }
    });
  });
}
