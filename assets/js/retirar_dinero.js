// Procesar montos predefinidos
function retirarDinero(monto) {
    if (monto === 0) {
        mostrarOtroMonto();  // Si es 0, mostramos el campo para otro monto
    } else {
        confirmarRetiro(monto);  // Si no, confirmamos el retiro con el monto predefinido
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
        confirmarRetiro(monto);
    }
}

// Función para confirmar retiro y usar Sweet Alert para confirmar
function confirmarRetiro(monto) {
    const saldoActual = obtenerSaldo();  // Esta función obtiene el saldo actual

    if (monto > saldoActual) {
        Swal.fire({
            title: 'Error',
            text: 'Saldo insuficiente para esta operación.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    } else {
        Swal.fire({
            title: 'Confirmar Operación',
            text: `¿Desea retirar $${monto}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, retirar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const nuevoSaldo = saldoActual - monto;
                actualizarSaldo(nuevoSaldo);  // Actualiza el saldo en el almacenamiento local

                Swal.fire({
                    title: 'Operación Exitosa',
                    text: `Has retirado $${monto}. Tu nuevo saldo es $${nuevoSaldo.toFixed(2)}`,
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
}
