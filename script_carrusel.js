let imagenIndex = 0;

const imagenes = [
    'qwerty1.jpg',
    'qwerty2.jpg',
    'qwerty3.jpeg',
    'qwerty4.jpeg',
    'qwerty5.jpeg',
    'qwerty6.jpeg'
];

const imagen = document.getElementById('mi-imagen');


function cambiarImagen() {
    imagenIndex++;

    if (imagenIndex >= imagenes.length) {
        imagenIndex = 0;
    }

    document.getElementById('mi-imagen').src = imagenes[imagenIndex];
}

    
