import { setLocal } from "../utils/setLocal";

/* -----------------------------------
Click en cardsCartelera
-------------------------------------- */

export function clickCardCartelera(cards) {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const idBanda = card.id;

      const isSave = setLocal(idBanda);
      if (!isSave) {
        return;
      } else {
        window.location.href = "/pages/detalle_cartelera.html";
      }
    });
  });
}
