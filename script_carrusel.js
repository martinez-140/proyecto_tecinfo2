let indice = 0;

function cambiarImagen(direccion) {
    const imagenes = document.querySelectorAll('.imagen');
    const totalImagenes = imagenes.length;

    indice += direccion;

    if (indice < 0) {
        indice = totalImagenes - 1;
    } else if (indice >= totalImagenes) {
        indice = 0;
    }

    const carrusel = document.querySelector('.carrusel');
    const desplazamiento = -indice * 100; // Desplaza 100% de la imagen actual
    carrusel.style.transform = `translateX(${desplazamiento}%)`;
}

// Configurar un intervalo para cambiar las imágenes automáticamente cada 3 segundos
setInterval(() => cambiarImagen(1), 3000);
