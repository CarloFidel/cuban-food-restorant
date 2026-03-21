import { fadeIn, fadeOut } from "../animation/fadeIn_fadOut";

export function showMenu() {
  const darkCourtain = document.querySelector("#dark-curtain");
  darkCourtain.classList.remove("hidden");
  fadeIn(darkCourtain);

  setTimeout(() => {
    const menuListAll = document.querySelectorAll("#dark-curtain nav ul li");
    fadeIn(menuListAll);
  }, 200);
}

export function hideMenu() {
  const darkCourtain = document.querySelector("#dark-curtain");
  fadeOut(darkCourtain);
  const menuListAll = document.querySelectorAll("#dark-curtain nav ul li");
  fadeOut(menuListAll);

  setTimeout(() => {
    darkCourtain.classList.add("hidden");
  }, 500);
}
