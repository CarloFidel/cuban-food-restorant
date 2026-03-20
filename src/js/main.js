import { hideMenu, showMenu } from "./menu";

const hamburgerIcon = document.querySelector('#openMenuIcon');
const closeMenuIcon = document.querySelector('#closeMenuIcon');

hamburgerIcon.addEventListener('click', showMenu);

closeMenuIcon.addEventListener('click', hideMenu);
