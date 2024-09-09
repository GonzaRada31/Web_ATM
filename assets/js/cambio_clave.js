function cambiarClave() {
    const claveActual = document.getElementById('clave-actual').value;
    const nuevaClave = document.getElementById('nueva-clave').value;
    const confirmarClave = document.getElementById('confirmar-clave').value;

    // Validación de los campos de clave
    if (!claveActual || !nuevaClave || !confirmarClave) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, completa todos los campos.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    if (nuevaClave !== confirmarClave) {
        Swal.fire({
            title: 'Error',
            text: 'Las nuevas claves no coinciden.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    // Confirmar el cambio de clave
    Swal.fire({
        title: 'Confirmar Cambio de Clave',
        text: '¿Estás seguro de que deseas cambiar tu clave?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, cambiar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Simula el cambio de clave
            Swal.fire({
                title: 'Clave Cambiada',
                text: 'Tu clave ha sido cambiada exitosamente.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = 'menu_principal.html';  // Regresa al menú
            });
        }
    });
}
