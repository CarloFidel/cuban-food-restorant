// 1) Solo lo mínimo común al arrancar
async function initCommonUI() {
  const hamburgerIcon = document.querySelector("#openMenuIcon");
  const closeMenuIcon = document.querySelector("#closeMenuIcon");

  if (hamburgerIcon && closeMenuIcon) {
    const { showMenu, hideMenu } = await import("./sideMenu.js");
    hamburgerIcon.addEventListener("click", showMenu);
    closeMenuIcon.addEventListener("click", hideMenu);
  }
}

// 2) Home (index)
async function initIndex() {
  const sectionHero = document.querySelector("#sectionHero");
  const buttonRight = document.querySelector("#sugerenciasRightButton");
  const buttonLeft = document.querySelector("#sugerenciasLeftButton");
  const slideContainer = document.querySelector(".div-sugerencias");

  if (sectionHero) {
    const carousel = sectionHero.querySelector(".carousel");
    if (carousel) {
      const { automaticCarousel } = await import("../utils/automaticCarousel.js");
      automaticCarousel(carousel, 5000);
    }
  }

  if (buttonRight && buttonLeft && slideContainer) {
    const { handleSlide } = await import("../utils/handleSlide.js");
    handleSlide(buttonRight, buttonLeft, slideContainer);
  }
}

// 3) Menú (acordeón + click cards)
async function initMenuPage() {
  const nuestrosPlatos = document.querySelector("#sectionPlatos");
  const nuestrosBebidas = document.querySelector("#sectionBebidas");
  const nuestrosPostres = document.querySelector("#sectionPostres");

  if (nuestrosPlatos && nuestrosBebidas && nuestrosPostres) {
    const { OpenCloseTag } = await import("./menu.js");
    nuestrosPlatos.addEventListener("click", () => OpenCloseTag(nuestrosPlatos));
    nuestrosBebidas.addEventListener("click", () => OpenCloseTag(nuestrosBebidas));
    nuestrosPostres.addEventListener("click", () => OpenCloseTag(nuestrosPostres));
  }

  const cards = document.querySelectorAll("article:not(.carousel):not(.card-bandas)");
  if (cards.length) {
    const { clickCard } = await import("./menu.js");
    clickCard(cards);
  }
}

// 4) Detalle de platos
async function initDetallePage() {
  const { getLocal } = await import("../utils/getLocal.js");
  const { createDetalleContent } = await import("./detalle.js");
  const data = getLocal();
  createDetalleContent(data);
}

// 5) Cartelera
async function initCarteleraPage() {
  const sectionCartelera = document.querySelector("#sectionCartelera");
  if (!sectionCartelera) return;

  const cardsCartelera = sectionCartelera.querySelectorAll("article");
  if (cardsCartelera.length) {
    const { clickCardCartelera } = await import("./cartelera.js");
    clickCardCartelera(cardsCartelera);
  }
}

// 6) Detalle cartelera
async function initDetalleCarteleraPage() {
  const { getLocal } = await import("../utils/getLocal.js");
  const { createDetalleCarteleraContent } = await import("./detalle_cartelera.js");
  const dataCartelera = getLocal();
  createDetalleCarteleraContent(dataCartelera);
}




// Router simple por URL + DOM
(async function bootstrap() {
  await initCommonUI();

  const path = window.location.pathname;

  if (path.endsWith("/index.html") || document.querySelector("#sectionHero")) {
    await initIndex();
  }

  if (path.endsWith("/menu.html") || document.querySelector("#sectionPlatos")) {
    await initMenuPage();
  }

  if (path.endsWith("/detalle.html")) {
    await initDetallePage();
  }

  if (path.endsWith("/cartelera.html") || document.querySelector("#sectionCartelera")) {
    await initCarteleraPage();
  }

  if (path.endsWith("/detalle_cartelera.html")) {
    await initDetalleCarteleraPage();
  }
})();