# Informe de configuración del proyecto — La Isla Viva

**Asignatura:** Desarrollo Front-end  
**Actividad:** PEC1 — Actividad 1  
**Repositorio:** https://github.com/CarloFidel/cuban-food-restorant  
**Fecha:** Marzo 2026

---

## 1. Descripción del proyecto

El proyecto consiste en el desarrollo de un sitio web estático para un restaurante de cocina cubana llamado **La Isla Viva**. El objetivo es presentar la propuesta gastronómica, el ambiente del local y facilitar la reserva de mesas a través de una interfaz moderna, accesible y con identidad visual propia.

El sitio se construye con tecnologías web estándar —HTML5, CSS3 y JavaScript vanilla— sin recurrir a frameworks de interfaz como React o Vue, en consonancia con los contenidos de la asignatura.

---

## 2. Elección del bundler: Parcel v2

### Decisión
Se ha utilizado **Parcel v2** (`parcel ^2.14.0`) como herramienta de empaquetado y servidor de desarrollo.

### Justificación
Parcel es un bundler de configuración cero (*zero-config*). A diferencia de Webpack, que requiere un fichero de configuración extenso, o de Vite, que está más orientado al ecosistema de frameworks, Parcel detecta automáticamente los tipos de archivos del proyecto y aplica las transformaciones necesarias (transpilación de JS, autoprefijado de CSS, optimización de imágenes, etc.) sin necesidad de configuración adicional.

Esta característica lo convierte en una opción idónea para un proyecto académico de alcance medio, donde el foco debe estar en el código fuente y no en la infraestructura de herramientas.

### Punto de entrada
En lugar de pasar el archivo HTML como argumento en la línea de comandos, se ha declarado el punto de entrada en `package.json` mediante el campo `"source"`:

```json
"source": "src/index.html"
```

Esta es la forma recomendada en Parcel v2, ya que desacopla la configuración del comando CLI y permite añadir múltiples entradas en el futuro simplemente modificando ese campo.

---

## 3. Estructura de directorios

```
cuban-food-restorant/
├── src/                    ← Todo el código fuente
│   ├── index.html          ← Punto de entrada principal
│   ├── style.css           ← Estilos globales
│   └── partials/           ← Fragmentos HTML reutilizables
│       ├── header.html
│       └── footer.html
├── dist/                   ← Salida de producción (generada por Parcel)
├── .parcel-cache/          ← Caché interna de Parcel
├── node_modules/           ← Dependencias de npm
├── .gitignore
├── package.json
├── package-lock.json
├── CONTEXT.md              ← Contexto del proyecto para agentes IA
└── REPORT.md               ← Este documento
```

### Decisión sobre `src/`
Todo el código fuente se agrupa bajo `src/` para separar claramente los archivos editables de los generados. Parcel escribe el resultado del proceso de construcción en `dist/`, que nunca debe editarse manualmente.

---

## 4. Scripts npm

Los scripts definidos en `package.json` cubren los tres flujos de trabajo habituales:

| Script | Comando real | Propósito |
|--------|-------------|-----------|
| `npm start` / `npm run parcel:dev` | `parcel` | Arranca el servidor de desarrollo con recarga en caliente (HMR) en `localhost:1234` |
| `npm run build` / `npm run parcel:build` | `parcel build` | Genera la versión de producción en `dist/`, con minificación y *hashing* de archivos |
| `npm run clean` | `rimraf dist .parcel-cache` | Elimina los artefactos de construcción y la caché |

### Decisión sobre `rimraf`
Se utiliza `rimraf` para el comando de limpieza en lugar de `rm -rf`, ya que `rimraf` es compatible con todos los sistemas operativos (incluido Windows), haciendo el proyecto más portable.

### Decisión sobre `npm-run-all`
Se incluye `npm-run-all` como dependencia de desarrollo para poder encadenar y paralelizar scripts npm de forma sencilla en el futuro (por ejemplo, ejecutar linting y el servidor de desarrollo simultáneamente).

---

## 5. Compatibilidad de navegadores: Browserslist

En `package.json` se ha definido el campo `"browserslist"`:

```json
"browserslist": "> 0.5%, last 2 versions, not dead"
```

### Qué hace
Esta configuración es leída automáticamente por Parcel para determinar:
- El nivel de transpilación de JavaScript (a través de Babel).
- Los prefijos de vendor que debe añadir Autoprefixer al CSS.

### Por qué este valor
La regla `> 0.5%, last 2 versions, not dead` es el estándar de facto de la industria. Cubre los navegadores con cuota de uso relevante y sus dos últimas versiones, excluyendo navegadores sin soporte activo. Es un equilibrio entre compatibilidad amplia y no generar código innecesariamente verbose.

---

## 6. Parciales HTML: `posthtml-include`

### Decisión
Se ha instalado el plugin `posthtml-include` (`^2.0.1`) como dependencia de desarrollo:

```
npm install -D posthtml-include
```

### Por qué
Un sitio web de varias páginas comparte, por lo general, elementos comunes como la cabecera y el pie de página. Sin una herramienta de plantillas, estos elementos tendrían que duplicarse en cada fichero HTML, lo que dificulta el mantenimiento: cualquier cambio requeriría modificar todos los archivos.

`posthtml-include` resuelve este problema permitiendo extraer esos fragmentos a archivos separados (parciales) e incluirlos mediante una etiqueta declarativa:

```html
<include src="./partials/header.html"></include>
```

### Integración con Parcel
Parcel detecta automáticamente la presencia de `posthtml-include` en `node_modules` y lo aplica durante el proceso de transformación del HTML, sin necesidad de ningún fichero de configuración adicional (ni `.posthtmlrc` ni `parcel.config.js`). Esta es una de las ventajas del enfoque *zero-config* de Parcel.

Los parciales se ubican en `src/partials/` y son fragmentos HTML planos, sin `<!doctype>` ni etiqueta `<html>`.

---

## 7. Control de versiones con Git y GitHub

### Repositorio local
El proyecto se inicializó como repositorio Git desde el primer momento, lo que permite registrar el historial de cambios, revertir errores y colaborar de forma ordenada.

### `.gitignore`
Se han excluido del repositorio los siguientes directorios, ya que son generados automáticamente y no deben versionarse:

```
.parcel-cache/   ← Caché interna de Parcel (regenerable)
dist/            ← Salida de producción (regenerable con npm run build)
node_modules/    ← Dependencias de npm (reproducibles con npm install)
```

Incluir estos directorios inflaría el repositorio innecesariamente y generaría conflictos de fusión sin valor real.

### Repositorio remoto
Se ha vinculado el repositorio local con un repositorio remoto en GitHub:

```bash
git remote add origin https://github.com/CarloFidel/cuban-food-restorant.git
git branch -M main
git push -u origin main
```

La rama principal se llama `main`, en línea con la convención actual de GitHub (sustituyendo el nombre histórico `master`). El flag `-u` establece la rama remota como *upstream* para que los siguientes `git push` y `git pull` no requieran especificar el origen.

---

## 8. Estructura del HTML y decisiones de marcado

El archivo `src/index.html` sigue los siguientes principios:

### HTML semántico
Se utilizan elementos semánticos de HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) en lugar de `<div>` genéricos. Esto mejora:
- La **accesibilidad**, al permitir que lectores de pantalla interpreten la estructura del documento.
- El **SEO**, al proporcionar señales de estructura a los motores de búsqueda.

### Idioma del documento
Se ha declarado `lang="es"` en la etiqueta `<html>` para indicar que el contenido está en español, requisito esencial para las herramientas de accesibilidad.

### Tipografía web (Google Fonts)
Se han cargado las fuentes **Bebas Neue** (para titulares) y **Barlow** (para el cuerpo de texto) desde Google Fonts, usando la técnica de `<link rel="preconnect">` para reducir la latencia de la petición de fuentes.

### Accesibilidad
- Los elementos decorativos llevan `aria-hidden="true"` para ser ignorados por lectores de pantalla.
- Los formularios usan `<label>` correctamente asociados a sus campos mediante el atributo `for`.
- La navegación principal incluye `aria-label="Navegación principal"`.

### Secciones del sitio (página única con anclas)
El sitio adopta una arquitectura de **una sola página con desplazamiento por anclas** (`#inicio`, `#destacados`, `#menu`, `#reserva`, `#contacto`). Esto simplifica la navegación sin necesidad de JavaScript para el enrutado.

---

## 9. Resumen de decisiones clave

| Decisión | Alternativas consideradas | Motivo de elección |
|----------|--------------------------|-------------------|
| Parcel v2 como bundler | Webpack, Vite | Configuración cero, ideal para proyecto académico |
| Vanilla HTML/CSS/JS | React, Vue, Svelte | Coherencia con los contenidos de la asignatura |
| `posthtml-include` para parciales | Handlebars, EJS, Nunjucks | Integración nativa con Parcel sin configuración extra |
| `rimraf` para limpieza | `rm -rf` | Compatibilidad multiplataforma |
| `browserslist` estándar | Configuración personalizada | Cubre la mayoría de usuarios sin código redundante |
| Rama `main` en Git | `master` | Convención actual de GitHub |
| `.gitignore` para `dist/`, `node_modules/`, `.parcel-cache/` | Versionar todo | Evitar artefactos generables en el repositorio |
| HTML semántico y `lang="es"` | `<div>` genéricos | Accesibilidad y SEO |
