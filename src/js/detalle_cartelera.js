import bandasJSON from "/src/assets/detalle_bandas.json";

export function createDetalleCarteleraContent(dataCartelera) {
  const bandaImg = document.querySelector("#bandaImagen");
  const tituloBanda = document.querySelector("#tituloBanda");
  const descriBanda = document.querySelector("#banda-descripcion");
  const bandaDiscografia = document.querySelector("#bandaDiscografia");

  const idBanda = dataCartelera;

  const bandas = bandasJSON.bandas;
  const bandaFilter = bandas.find((banda) => banda.id === idBanda);

  if (bandaFilter) {
    const img = bandaFilter.imagen;
    const titulo = bandaFilter.nombre;
    const descripcion = bandaFilter.resena;
    const discografia = bandaFilter.discografia;

    discografia.forEach((album) => {
      const divAlbum = document.createElement("div");
      divAlbum.classList.add("album");
      const albumTitulo = document.createElement("h4");
      albumTitulo.textContent = album.titulo;
      const albumAnio = document.createElement("p");
      albumAnio.textContent = `Año: ${album.año}`;

      divAlbum.appendChild(albumTitulo);
      divAlbum.appendChild(albumAnio);
      bandaDiscografia.appendChild(divAlbum);
    });

    bandaImg.src = `/${img}`;
    tituloBanda.textContent = titulo;
    descriBanda.textContent = descripcion;
  }
}
