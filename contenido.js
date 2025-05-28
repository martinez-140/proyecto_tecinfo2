const steps = [
    {
        titulo: "Paso 1: Recolección del papel",
        descripcion: "Reúne todo el papel usado, como hojas impresas, cuadernos viejos o periódicos. Evita papeles encerados o con restos de comida.",
        imagen: "https://www.smurfitkappa.com/sv/-/m/images/blog-thumbnail-931-x-642/recycling.jpg?rev=-1"
    },
    {
        titulo: "Paso 2: Eliminación de grapas y clips",
        descripcion: "Quita todos los objetos metálicos como grapas, clips o cintas adhesivas, ya que pueden dañar las máquinas recicladoras.",
        imagen: "https://plasticosdetectables.com/wp-content/uploads/grapadora-grapas-papel-v10-005.jpg"
    },
    {
        titulo: "Paso 3: Clasificación del papel",
        descripcion: "Separa el papel blanco del de color, ya que requieren procesos distintos de reciclaje.",
        imagen: "https://us.123rf.com/450wm/mmalinika/mmalinika2004/mmalinika200400011/145379679-conjunto-de-botes-de-basura-con-basura-de-papel-reciclar-contenedores-de-basura-llenos-de-basura.jpg?ver=6"
    },
    {
        titulo: "Paso 4: Compactado o corte",
        descripcion: "Si es posible, corta el papel en pedazos más pequeños para facilitar el reciclaje.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgP2H2SqPV37IfgwxUS7be7voMzYCQYO0Dg&s"
    },
    {
        titulo: "Paso 5: Almacenamiento seco",
        descripcion: "Guarda el papel en un lugar seco hasta llevarlo al centro de reciclaje más cercano.",
        imagen: "https://embalajesseleccion.com/wp-content/uploads/2022/10/cajas-reci-1024x681.jpg"
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
