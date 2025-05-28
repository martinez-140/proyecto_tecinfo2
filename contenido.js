const steps = [
    {
        titulo: "Paso 1: Recolección del papel",
        descripcion: "Reúne todo el papel usado, como hojas impresas, cuadernos viejos o periódicos. Evita papeles encerados o con restos de comida.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Paper_collection.jpg/640px-Paper_collection.jpg"
    },
    {
        titulo: "Paso 2: Eliminación de grapas y clips",
        descripcion: "Quita todos los objetos metálicos como grapas, clips o cintas adhesivas, ya que pueden dañar las máquinas recicladoras.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Paperclip_removal.jpg/640px-Paperclip_removal.jpg"
    },
    {
        titulo: "Paso 3: Clasificación del papel",
        descripcion: "Separa el papel blanco del de color, ya que requieren procesos distintos de reciclaje.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Paper_sorting.jpg/640px-Paper_sorting.jpg"
    },
    {
        titulo: "Paso 4: Compactado o corte",
        descripcion: "Si es posible, corta el papel en pedazos más pequeños para facilitar el reciclaje.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Shredded_paper.jpg/640px-Shredded_paper.jpg"
    },
    {
        titulo: "Paso 5: Almacenamiento seco",
        descripcion: "Guarda el papel en un lugar seco hasta llevarlo al centro de reciclaje más cercano.",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Paper_storage.jpg/640px-Paper_storage.jpg"
    }
];

const container = document.getElementById('steps-container');

steps.forEach((step, index) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <img src="${step.imagen}" alt="${step.titulo}">
        <div class="card-content">
            <h3>${step.titulo}</h3>
            <p id="desc-${index}">${step.descripcion}</p>
            <button onclick="toggleDescription(${index})">Mostrar más</button>
        </div>
    `;

    container.appendChild(card);
});

function toggleDescription(index) {
    const desc = document.getElementById(`desc-${index}`);
    const btn = desc.nextElementSibling;
    if (desc.style.display === "block") {
        desc.style.display = "none";
        btn.textContent = "Mostrar más";
    } else {
        desc.style.display = "block";
        btn.textContent = "Mostrar menos";
    }
}
