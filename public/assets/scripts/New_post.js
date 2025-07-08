// Este código se ejecuta en tu página New_post.html
document.addEventListener('DOMContentLoaded', function() {
  
  const form = document.getElementById('new-post-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const newObjectName = document.getElementById('nombre').value;

    // Se asegura que el usuario ponga un nombre al objeto
    if (!newObjectName) {
      alert('Por favor, ingresa el nombre del objeto.');
      return;
    }

    // 1. Recolecta todos los datos del formulario
    const newPostData = {
      objeto: newObjectName,
      sede: document.getElementById('sede').value,
      area: document.getElementById('area').value,
      fecha: document.getElementById('fecha').value,
      descripcion: document.getElementById('descripcion_objeto').value,
      hallazgo: document.getElementById('descripcion_hallazgo').value,
      status: document.getElementById('estado').value,
      usuario: 'Usted', // Puedes cambiar esto si tienes un sistema de usuarios
      imagen: 'assets/images/posts/default.png' // Una imagen por defecto para los nuevos posts
    };

    // 2. Lee la "base de datos" actual desde la memoria del navegador
    const publicacionesGuardadas = localStorage.getItem('publicacionesData');
    const publicacionesData = publicacionesGuardadas ? JSON.parse(publicacionesGuardadas) : {};

    // 3. Crea un ID nuevo y único para la publicación
    const nuevoId = 'post_' + Date.now(); // Un ID simple basado en la fecha y hora

    // 4. Añade la nueva publicación a la base de datos
    publicacionesData[nuevoId] = newPostData;

    // 5. Guarda la base de datos actualizada en la memoria
    localStorage.setItem('publicacionesData', JSON.stringify(publicacionesData));

    // 6. Muestra el mensaje de éxito y redirige
    alert('Publicación guardada');
    window.location.href = 'Posts.html'; // Redirige a la página de lista de tu compañero
  });
});