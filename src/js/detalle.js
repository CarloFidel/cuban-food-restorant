import ingredientesData from "/src/assets/ingredientes.json";

export function createDetalleContent(data) {
  const titulo = data.titulo;
  const descripcion = data.descripcion;
  const precio = data.precio;
  const imagen = data.imagen;

  const platos = ingredientesData.oferta;

  const sectionIngredients = document.querySelector(".ingredientes");

  const detalleImg = document.getElementById("detalle-img");
  const detalleTitulo = document.getElementById("detalle-titulo");
  const detallePrecio = document.getElementById("detalle-precio");
  const detalleDescripcion = document.getElementById("detalle-descripcion");
  const detalleIngredientes = document.getElementById(
    "detalle-ingredientes",
  );

  if (
    !detalleImg ||
    !detalleTitulo ||
    !detallePrecio ||
    !detalleDescripcion ||
    !detalleIngredientes
  ) {
    console.error("No se encontraron los elementos del detalle en el DOM.");
    return;
  }

  detalleImg.src = imagen;
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
