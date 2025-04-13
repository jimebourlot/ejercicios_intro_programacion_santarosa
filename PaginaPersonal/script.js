// Selecciona el botón y el párrafo donde se mostrará el mensaje
const button = document.getElementById("show-message");
const message = document.getElementById("dynamic-message");

// Agrega un evento al botón
button.addEventListener("click", () => {
    // Cambia el contenido del mensaje y lo muestra
    message.textContent = "¡Gracias por tu interés! Estoy emocionada de seguir aprendiendo y creciendo en el mundo de la ciencia de datos. Además soy ingeniera en informática :)";
    message.style.display = "block"; // Muestra el mensaje
});