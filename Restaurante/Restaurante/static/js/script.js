let index = 0;

function cambiarImagen(n) {
    const imagenes = document.querySelector('.imagenes');
    const totalGrupos = 4;

    index = (index + n + totalGrupos) % totalGrupos;

    const desplazamiento = -index * 100;
    imagenes.style.transform = `translateX(${desplazamiento}%)`;
}

// Función para cambiar de imagen automáticamente
function carruselAutomatico() {
    cambiarImagen(1); // Mueve una imagen a la derecha cada vez
}

// Llama a la función carruselAutomatico cada 3 segundos (3000 ms)
setInterval(carruselAutomatico, 3000);
