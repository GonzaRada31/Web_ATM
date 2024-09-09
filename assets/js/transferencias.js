function seleccionarOpcion(opcion) {
    document.getElementById("transferencia-form").style.display = "block";
}

function procesarTransferencia() {
    const destinatario = document.getElementById('destinatario').value;
    const monto = parseFloat(document.getElementById('monto-transferencia').value);
    const saldoActual = obtenerSaldo();  // Obtener saldo desde saldo.js

    if (!destinatario || isNaN(monto) || monto <= 0) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, complete todos los campos correctamente.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    if (monto > saldoActual) {
        Swal.fire({
            title: 'Saldo insuficiente',
            text: 'No tienes suficiente saldo para realizar esta transferencia.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }

    Swal.fire({
        title: 'Confirmar Transferencia',
        text: `¿Estás seguro de transferir $${monto} a ${destinatario}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, transferir',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            const nuevoSaldo = saldoActual - monto;
            actualizarSaldo(nuevoSaldo);  // Actualizar saldo en saldo.js

            Swal.fire({
                title: 'Transferencia Exitosa',
                text: `Has transferido $${monto}. Tu nuevo saldo es $${nuevoSaldo.toFixed(2)}`,
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                imprimirComprobante();
            });
        }
    });
}

function imprimirComprobante() {
    Swal.fire({
        title: '¿Deseas imprimir el comprobante?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, imprimir',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Imprimiendo...',
                text: 'Tu comprobante está siendo impreso.',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                window.location.href = 'menu_principal.html';  // Regresar al menú
            });
        } else {
            window.location.href = 'menu_principal.html';  // Regresar al menú
        }
    });
}
