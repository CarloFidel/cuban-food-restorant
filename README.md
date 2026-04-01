# La Isla Viva - Front-end

Proyecto web de restaurante temático cubano desarrollado con HTML, CSS y JavaScript modular. Incluye carta de platos y bebidas, cartelera musical, páginas de detalle y animaciones de interacción.

## Objetivo

Construir una experiencia de navegación simple y visual para:

- Mostrar la propuesta gastronómica.
- Presentar cartelera de bandas.
- Navegar entre listados y páginas de detalle.
- Aplicar animaciones suaves en menú lateral, acordeón y carruseles.

## Tecnologías

- HTML5
- CSS3 (arquitectura por capas y componentes)
- JavaScript ES Modules
- GSAP (animaciones fade in/out)
- Parcel 2 (entorno de desarrollo y build)
- posthtml-include (inclusión de fragmentos HTML)

## Requisitos

- Node.js 18 o superior recomendado
- npm

## Instalación

1. Instalar dependencias:

```
npm install
```

2. Iniciar entorno de desarrollo:
```
npm run start
```

3. Generar build de producción:
```
npm run build
```

4. Limpiar artefactos de build:
```
npm run clean
```

## Scripts disponibles

- npm run start: levanta Parcel en modo desarrollo.
- npm run build: genera distribución optimizada.
- npm run parcel:dev: alias de desarrollo.
- npm run parcel:build: alias de build.
- npm run clean: elimina dist y caché de Parcel.

## Estructura del proyecto

- src/index.html: página principal.
- src/pages/menu.html: carta de comida y bebida.
- src/pages/cartelera.html: listado de bandas.
- src/pages/detalle.html: detalle de plato o bebida.
- src/pages/detalle_cartelera.html: detalle de banda.
- src/pages/chefs.html: sección de chefs.
- src/js/main.js: orquestación de eventos y lógica por página.
- src/js/menu.js: acordeón y click en cards de menú.
- src/js/cartelera.js: click en cards de cartelera.
- src/js/detalle.js: render de detalle gastronómico.
- src/js/detalle_cartelera.js: render de detalle de bandas.
- src/js/sideMenu.js: apertura/cierre del menú lateral.
- src/utils/automaticCarousel.js: carrusel automático del hero.
- src/utils/handleSlide.js: slide horizontal en sugerencias.
- src/animation/fadeIn_fadOut.js: animaciones fadeIn/fadeOut con GSAP.
- src/assets/ingredientes.json: datos de ingredientes por plato.
- src/assets/detalle_bandas.json: datos de bandas y discografía.
- src/styles: estilos organizados por abstract, base, components, layout y pages.

## Flujo funcional

1. En menú y cartelera, al hacer click en una card se guarda información en localStorage con la clave data.
2. La app redirige a la página de detalle correspondiente.
3. En la página de detalle, se recupera data desde localStorage y se pinta el contenido dinámicamente.
4. Las animaciones de transición se aplican con GSAP para mejorar la percepción de interacción.

## Datos dinámicos

- Detalle gastronómico:
  - Se cruza el título seleccionado con src/assets/ingredientes.json.
  - Si hay coincidencia, se muestra la sección de ingredientes.
- Detalle de cartelera:
  - Se busca la banda por id en src/assets/detalle_bandas.json.
  - Se renderiza imagen, nombre, reseña y discografía.

## Convenciones actuales

- Código JavaScript modular por responsabilidad.
- Uso de includes para header, footer y side menu.
- Estilos separados por tipo (base, componentes, páginas).
- Persistencia temporal en localStorage para navegación entre páginas.

## Mejoras recomendadas

- Accesibilidad:
  - Revisar controles interactivos en elementos no semánticos.
  - Mejorar textos alternativos y nombres accesibles.
- Calidad de código:
  - Eliminar console.log de producción.
  - Unificar nombres y ortografía de archivos (por ejemplo fadeIn_fadOut).
- Robustez:
  - Añadir validaciones cuando localStorage no tenga datos.
  - Incorporar estados vacíos y mensajes de error en detalle.
- Testing:
  - Añadir pruebas unitarias para utilidades y render dinámico.

## Autoría y contexto académico

Trabajo realizado para la asignatura de Front-end (UOC), centrado en maquetación, modularidad y comportamiento interactivo en cliente.
