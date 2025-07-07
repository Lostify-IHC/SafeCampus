// Espera a que todo el contenido de la página se cargue
document.addEventListener('DOMContentLoaded', function() {

  // Busca el formulario por su ID
  const form = document.getElementById('contact-form');

  // Se activa cuando se presiona el botón "Enviar"
  form.addEventListener('submit', function(event) {
    
    // 1. Evita que la página se recargue
    event.preventDefault();

    // 2. Muestra el mensaje de éxito
    alert('¡Formulario enviado correctamente!');

    // 3. Redirige a la página de "Mis publicaciones"
    // CAMBIO: Esta línea te lleva a la nueva página.
    // Asegúrate que 'Posts.html' sea el nombre correcto de tu archivo.
    window.location.href = 'Posts.html'; 
  });

});