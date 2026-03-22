import { getLocal } from "../utils/getLocal.js";
import { clickCardCartelera } from "./cartelera.js";
import { createDetalleContent } from "./detalle.js";
import { createDetalleCarteleraContent } from "./detalle_cartelera.js";
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

const cards = document.querySelectorAll(
  "article:not(.carousel):not(.card-bandas)",
);
if (cards) {
  clickCard(cards); //La función clickCard se encarga de agregar el evento
  // click a cada card, para luego guardar la información en
  // localStorage y redirigir a detalle.html.
}

/* -----------------------------------
Construccion del contenido de detalles.html
-------------------------------------- */
const url = window.location.href;
if (url.includes("detalle.html")) {
  const data = getLocal();
  createDetalleContent(data);
}

/* -----------------------------------
Click en cards de cartelera.html
-------------------------------------- */
const sectionCartelera = document.querySelector("#sectionCartelera");
if (sectionCartelera) {
  const cardsCartelera = sectionCartelera.querySelectorAll("article");
  if (cardsCartelera) {
    clickCardCartelera(cardsCartelera);
  }
}

/* -------------------------------------------------------
Construccion del contenido de detalles_cartelera.html
---------------------------------------------------------- */
const urlCartelera = window.location.href;
if (urlCartelera.includes("detalle_cartelera.html")) {
  const dataCartelera = getLocal();
  createDetalleCarteleraContent(dataCartelera);
}
