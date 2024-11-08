function mostrarFormulario() {
    const rolSeleccionado = document.getElementById('rol').value;
    document.getElementById('form-cliente').style.display = 'none';
    document.getElementById('form-repartidor').style.display = 'none';

    if (rolSeleccionado === 'cliente') {
        document.getElementById('form-cliente').style.display = 'block';
    } else if (rolSeleccionado === 'repartidor') {
        document.getElementById('form-repartidor').style.display = 'block';
    }
}
