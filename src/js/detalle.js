export function createDetalleContent(data){
    const titulo = data.titulo;
    const descripcion = data.descripcion;
    const precio = data.precio;
    const imagen = data.imagen;

    const detalleImg = document.getElementById('detalle-img');
    const detalleTitulo = document.getElementById('detalle-titulo');
    const detallePrecio = document.getElementById('detalle-precio');
    const detalleDescripcion = document.getElementById('detalle-descripcion');

    detalleImg.src = imagen;
    detalleTitulo.textContent = titulo;
    detallePrecio.textContent = precio;
    detalleDescripcion.textContent = descripcion;
}