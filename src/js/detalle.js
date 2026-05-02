import ingredientesData from "/src/assets/ingredientes.json";

export function createDetalleContent(data) {
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const precio = data.precio;
  const id = data.id;
  const imagen = data.imagen;


  const platos = ingredientesData.oferta;

  const sectionIngredients = document.querySelector(".ingredientes");

  const detallePicture = document.getElementById("detalle-picture");
  const detalleTitulo = document.getElementById("detalle-titulo");
  const detallePrecio = document.getElementById("detalle-precio");
  const detalleDescripcion = document.getElementById("detalle-descripcion");
  const detalleIngredientes = document.getElementById("detalle-ingredientes");

  if (
    !detallePicture ||
    !detalleTitulo ||
    !detallePrecio ||
    !detalleDescripcion ||
    !detalleIngredientes
  ) {
    return;
  }

  detallePicture.innerHTML = "";

  const sourceMobil = document.createElement("source");
  sourceMobil.media = "(max-width: 600px)";
  sourceMobil.srcset = `/mobil/${id}_mobil.png`;

  const sourceDesktop = document.createElement("source");
  sourceDesktop.media = "(min-width: 601px)";
  sourceDesktop.srcset = imagen;

  const img = document.createElement("img");
  img.src = imagen;
  img.alt = titulo;

  detallePicture.appendChild(sourceMobil);
  detallePicture.appendChild(sourceDesktop);
  detallePicture.appendChild(img);
  detalleTitulo.textContent = titulo;
  detallePrecio.textContent = precio;
  detalleDescripcion.textContent = descripcion;

  const platoFilter = platos.find((plato) => plato.nombre === titulo);
  if (platoFilter) {
    sectionIngredients.classList.remove("hidden");
    const ingredientes = platoFilter.ingredientes;
    const ingrMayus = ingredientes.map(
      (ingrediente) =>
        ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1),
    );
    detalleIngredientes.innerHTML = ingrMayus
      .map((ingrediente) => `<p>${ingrediente}</p>`)
      .join("");
  } else {
    sectionIngredients.classList.add("hidden");
  }
}
