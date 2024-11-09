document.addEventListener('DOMContentLoaded', function() {
    let index = 0;

    // Función para cambiar las imágenes del carrusel
    function cambiarImagen(n) {
        const imagenes = document.querySelector('.imagenes');
        if (imagenes) {  // Verifica que el contenedor exista
            const totalGrupos = 4;
            index = (index + n + totalGrupos) % totalGrupos;
            const desplazamiento = -index * 100;
            imagenes.style.transform = `translateX(${desplazamiento}%)`;
        } else {
            console.error("No se encontró el contenedor .imagenes");
        }
    }

    // Función para el carrusel automático
    function carruselAutomatico() {
        cambiarImagen(1);  // Mueve una imagen a la derecha cada vez
    }

    // Llama a la función carruselAutomatico cada 3 segundos (3000 ms)
    setInterval(carruselAutomatico, 3000);    
});
