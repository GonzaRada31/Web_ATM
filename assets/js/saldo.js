// Definir el saldo inicial si no existe en localStorage
if (!localStorage.getItem('saldo')) {
    localStorage.setItem('saldo', '350000');  // Valor inicial de saldo
}

// Función para obtener el saldo
function obtenerSaldo() {
    return parseFloat(localStorage.getItem('saldo'));
}

// Función para actualizar el saldo en localStorage
function actualizarSaldo(nuevoSaldo) {
    localStorage.setItem('saldo', nuevoSaldo.toString());
}
