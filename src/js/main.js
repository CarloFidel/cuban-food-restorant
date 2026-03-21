import { getLocal } from "../utils/getLocal.js";
import { createDetalleContent } from "./detalle.js";
import { clickCard, OpenCloseTag } from "./menu.js";
import { hideMenu, showMenu } from "./sideMenu.js";

const hamburgerIcon = document.querySelector("#openMenuIcon");
const closeMenuIcon = document.querySelector("#closeMenuIcon");

hamburgerIcon.addEventListener("click", showMenu);

closeMenuIcon.addEventListener("click", hideMenu);
/* -----------------------------------
Accordeon en index.html
-------------------------------------- */
const nuestrosPlatos = document.querySelector("#sectionPlatos");
const nuestrosBebidas = document.querySelector("#sectionBebidas");
const nuestrosPostres = document.querySelector("#sectionPostres");

if (nuestrosPlatos && nuestrosBebidas && nuestrosPostres) {
  nuestrosPlatos.addEventListener("click", () => OpenCloseTag(nuestrosPlatos));
  nuestrosBebidas.addEventListener("click", () =>
    OpenCloseTag(nuestrosBebidas),
  );
  nuestrosPostres.addEventListener("click", () =>
    OpenCloseTag(nuestrosPostres),
  );
}

/* -----------------------------------
Click en cards de menu.html
-------------------------------------- */

const cards = document.querySelectorAll("article:not(.carousel)");
if (cards) {
  clickCard(cards);
}

/* -----------------------------------
Construccion del contenido de detalles
-------------------------------------- */
const url = window.location.href;
if (url.includes("detalle.html")) {
  const data = getLocal();
  createDetalleContent(data);
}
