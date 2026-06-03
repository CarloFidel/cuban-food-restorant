# Documentacion de cambios - Lazy Load

## Objetivo
Aplicar carga diferida de recursos visuales no criticos para mejorar el rendimiento inicial, reducir descargas innecesarias y optimizar la experiencia en dispositivos moviles.

## Criterio aplicado
Se ha usado el atributo loading="lazy" en recursos que no forman parte del contenido critico inicial (first viewport) y se ha mantenido carga normal en elementos hero y visuales principales de entrada.

## Alcance real detectado en el proyecto

### 1) Pagina de menu
Archivo: src/pages/menu.html

Secciones cubiertas:
- sectionPlatos
- sectionBebidas
- sectionPostres

Total de imagenes con loading="lazy": 20

Referencias de lineas:
- 57, 89, 120, 151, 182, 213, 244, 275, 306, 337
- 373, 404, 434, 465, 494
- 525, 550, 576, 604, 635

Exclusion justificada:
- En sectionHero-menu se mantiene la imagen principal sin lazy load para no penalizar el LCP.

### 2) Pagina principal (index)
Archivo: src/index.html

Zonas con loading="lazy":
- Tarjetas de section-categorias
- Tarjetas de section-sugerencias

Total de imagenes con loading="lazy": 8

Referencias de lineas:
- 83, 104, 128
- 156, 197, 239, 282, 325

Exclusion justificada:
- Las imagenes del carrusel principal en sectionHero se mantienen sin lazy load por ser contenido visible al cargar.

### 3) Pagina de cartelera
Archivo: src/pages/cartelera.html

Zonas con loading="lazy":
- Cards de bandas en sectionCartelera

Total de imagenes con loading="lazy": 4

Referencias de lineas:
- 57, 89, 121, 153

Exclusion justificada:
- La imagen hero de sectionHeroCartelera se mantiene sin lazy load por ser parte del contenido inicial.

### 4) Detalle de cartelera
Archivo: src/pages/detalle_cartelera.html

Recursos con loading="lazy":
- Iframe de video de banda

Total de recursos con loading="lazy": 1

Referencia de linea:
- 30

Justificacion:
- El iframe suele ser un recurso costoso (red + render), por lo que diferirlo reduce carga inicial.

## Resumen global
- Total de coincidencias loading="lazy" en HTML de src: 33
- Distribucion:
  - menu.html: 20
  - index.html: 8
  - cartelera.html: 4
  - detalle_cartelera.html: 1

## Justificacion tecnica
1. Rendimiento inicial:
	- Se reducen solicitudes de imagenes/iframes no visibles al inicio.
2. Experiencia en red movil:
	- Menor consumo de datos al primer render.
3. Priorizacion de contenido critico:
	- Se evita lazy load en imagenes hero para proteger metricas de render principal.
4. Escalabilidad:
	- El patron permite crecer catalogo y galerias sin degradar tanto la carga inicial.

## Verificacion recomendada
1. Abrir DevTools > Network.
2. Recargar cada pagina (index, menu, cartelera, detalle_cartelera).
3. Confirmar que los recursos no visibles no se descargan todos al inicio.
4. Hacer scroll y comprobar descarga progresiva.
5. Ejecutar Lighthouse antes/despues para comparar Performance y LCP.

## Nota de alcance
Esta documentacion se centra en lazy load de imagenes e iframe. La carga asincrona de modulos JavaScript por pagina se documenta aparte.
