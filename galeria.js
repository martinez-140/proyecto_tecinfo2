document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(".galeria img");

    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            alert(`Has hecho clic en: ${img.alt}`);
        });

        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
            img.style.boxShadow = "none";
        });
    });
});
