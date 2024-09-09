document.addEventListener('DOMContentLoaded', () => {
    const screenOutput = document.getElementById('screen-output');

    // Función para mostrar contenido en la pantalla
    function mostrarPantalla(mensaje) {
        screenOutput.innerHTML = `<p>${mensaje}</p>`;
    }

    // Asignar eventos a los botones
    document.getElementById('consultar-saldo').addEventListener('click', () => {
        mostrarPantalla('Tu saldo disponible es $350,000.');
    });

    document.getElementById('retirar-dinero').addEventListener('click', () => {
        mostrarPantalla('Por favor, selecciona el monto que deseas retirar.');
    });

    document.getElementById('depositar-dinero').addEventListener('click', () => {
        mostrarPantalla('Ingresa el monto que deseas depositar.');
    });

    document.getElementById('transferencias').addEventListener('click', () => {
        mostrarPantalla('Ingresa los datos de la cuenta a transferir.');
    });

    document.getElementById('cambio-clave').addEventListener('click', () => {
        mostrarPantalla('Ingresa tu clave actual y la nueva clave.');
    });

    document.getElementById('salir').addEventListener('click', () => {
        mostrarPantalla('Gracias por usar el simulador. ¡No olvides retirar tu tarjeta!');
    });
});
