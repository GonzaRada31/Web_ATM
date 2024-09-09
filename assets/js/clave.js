function confirmarClave() {
    const claveInput = document.getElementById('clave');
    const clave = claveInput.value;

    // Verificar que la clave tenga exactamente 4 dígitos numéricos
    if (clave.length === 4 && /^\d+$/.test(clave)) {
        // Redirigir a la siguiente pantalla (menu principal)
        window.location.href = 'menu_principal.html';
    } else {
        // Mostrar alerta con SweetAlert si la clave es inválida
        Swal.fire({
            icon: 'error',
            title: 'Clave inválida',
            text: 'Por favor, ingrese una clave numérica de 4 dígitos.',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            claveInput.value = '';  // Limpiar el campo de entrada
            claveInput.focus();  // Colocar el foco en el campo de entrada
        });
    }
}
