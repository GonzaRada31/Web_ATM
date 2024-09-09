// Función para navegar a otras páginas
function navegar(pagina) {
    window.location.href = pagina;
}

// Función para confirmar salida
function salir() {
    Swal.fire({
        title: 'Confirmar Salida',
        text: '¿Estás seguro de que deseas salir?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Recuerda',
                text: 'No olvides retirar tu tarjeta.',
                icon: 'info',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = 'index.html';  // Redirige a la pantalla de inicio
            });
        }
    });
}
