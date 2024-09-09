document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "Recordá que tus claves son personales, no las compartas con nadie",
        "Asegúrate de recoger tu tarjeta de débito o crédito, dinero en efectivo y comprobante de operación",
        "Nunca digite la clave en presencia de desconocidos"
    ];
    
    let currentIndex = 0;
    const messageElement = document.getElementById('mensaje');
    
    function showMessage() {
        messageElement.textContent = messages[currentIndex];
        currentIndex = (currentIndex + 1) % messages.length;
    }
    
    showMessage(); // Mostrar el primer mensaje al cargar la página
    setInterval(showMessage, 6000); // Cambiar mensaje cada 6 segundos
});

function navigateTo(page) {
    window.location.href = page;
}
