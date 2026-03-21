import { OpenCloseTag } from "./menu.js";
import { hideMenu, showMenu } from "./sideMenu.js";

const hamburgerIcon = document.querySelector('#openMenuIcon');
const closeMenuIcon = document.querySelector('#closeMenuIcon');

hamburgerIcon.addEventListener('click', showMenu);

closeMenuIcon.addEventListener('click', hideMenu);

const nuestrosPlatos = document.querySelector('#sectionPlatos')
const nuestrosBebidas = document.querySelector('#sectionBebidas')
const nuestrosPostres = document.querySelector('#sectionPostres')

nuestrosPlatos.addEventListener('click', () => OpenCloseTag(nuestrosPlatos))
nuestrosBebidas.addEventListener('click', () => OpenCloseTag(nuestrosBebidas))
nuestrosPostres.addEventListener('click', () => OpenCloseTag(nuestrosPostres))

