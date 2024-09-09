// Procesar montos predefinidos
function depositarDinero(monto) {
    if (monto === 0) {
        mostrarOtroMonto();  // Si es 0, mostramos el campo para otro monto
    } else {
        confirmarDeposito(monto);  // Si no, confirmamos el depósito con el monto predefinido
    }
}

// Mostrar el input para ingresar otro monto
function mostrarOtroMonto() {
    document.getElementById("otro-monto-container").style.display = "block";
}

// Procesar el monto ingresado manualmente
function procesarOtroMonto() {
    const monto = parseFloat(document.getElementById('otro-monto').value);
    
    if (isNaN(monto) || monto <= 0) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor ingresa un monto válido.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    } else {
        confirmarDeposito(monto);
    }
}

// Función para confirmar depósito y usar Sweet Alert para confirmar
function confirmarDeposito(monto) {
    Swal.fire({
        title: 'Confirmar Depósito',
        text: `¿Desea depositar $${monto}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, depositar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const saldoActual = obtenerSaldo();
            const nuevoSaldo = saldoActual + monto;
            actualizarSaldo(nuevoSaldo);  // Actualiza el saldo en el almacenamiento local

            Swal.fire({
                title: 'Depósito Exitoso',
                text: `Has depositado $${monto}. Tu nuevo saldo es $${nuevoSaldo.toFixed(2)}`,
                icon: 'success',
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
        }
    });
}
