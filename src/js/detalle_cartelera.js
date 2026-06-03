import bandasJSON from "/src/assets/detalle_bandas.json";

export function createDetalleCarteleraContent(dataCartelera) {
  const detallePicture = document.querySelector("#detalle-picture");
  const tituloBanda = document.querySelector("#tituloBanda");
  const descriBanda = document.querySelector("#bandaDescripcion");
  const bandaDiscografia = document.querySelector("#bandaDiscografia");
  const bandaVideo = document.querySelector("#bandaVideo");

  const idBanda = dataCartelera;

  const bandas = bandasJSON.bandas;
  const bandaFilter = bandas.find((banda) => banda.id === idBanda);

  if (bandaFilter) {
    const imgDesktop = bandaFilter.imagen;
    const imgMobile = bandaFilter.imagenMobil;
    const titulo = bandaFilter.nombre;
    const descripcion = bandaFilter.resena;
    const discografia = bandaFilter.discografia;
    const video = bandaFilter.video;

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

    const sourceMobil = document.createElement("source");
    sourceMobil.media = "(max-width: 600px)";
    sourceMobil.srcset = `/mobil/${imgMobile}`;

    const sourceDesktop = document.createElement("source");
    sourceDesktop.media = "(min-width: 601px)";
    sourceDesktop.srcset = `/${imgDesktop}`;

    const img = document.createElement("img");
    img.src = `/${imgDesktop}`;
    img.alt = titulo;
    img.loading = "lazy";

    detallePicture.appendChild(sourceMobil);
    detallePicture.appendChild(sourceDesktop);
    detallePicture.appendChild(img);

    tituloBanda.textContent = titulo;
    descriBanda.textContent = descripcion;
    bandaVideo.setAttribute("src", video);
  }
}
