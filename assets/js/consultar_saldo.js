// Función para mostrar el saldo actualizado
function consultarSaldo() {
    // Mostrar el mensaje de "Procesando..."
    document.getElementById("procesando").style.display = "block";

    // Simular un tiempo de procesamiento de 3 segundos
    setTimeout(() => {
        // Ocultar el mensaje de "Procesando..."
        document.getElementById("procesando").style.display = "none";
        
        // Mostrar el saldo actualizado con SweetAlert
        Swal.fire({
            title: 'Saldo Disponible',
            text: `Tu saldo actual es de $${obtenerSaldo().toFixed(2)}`,
            icon: 'info',
            confirmButtonText: 'OK'
        }).then(() => {
            // Preguntar si desea imprimir comprobante
            Swal.fire({
                title: 'Imprimir Comprobante',
                text: '¿Desea imprimir el comprobante?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí, imprimir',
                cancelButtonText: 'No'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: 'Comprobante Impreso',
                        text: 'Tu comprobante ha sido impreso.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        window.location.href = 'menu_principal.html';  // Redirige al menú principal
                    });
                } else {
                    window.location.href = 'menu_principal.html';  // Redirige al menú principal si no se imprime
                }
            });
        });
    }, 3000);  // Simula un tiempo de espera de 3 segundos
}
