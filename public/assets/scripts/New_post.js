// Este es el código completo y corregido para tu archivo: New_post.js
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('new-post-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // --- INICIO: FILTRO DE MODERACIÓN ---

    // 1. Define la lista de palabras no permitidas (puedes añadir más)
    const badWords = ['carajo', 'tonto', 'idiota', 'etc'];

    // 2. Junta el texto de todos los campos que quieres revisar
    const nombreObjeto = document.getElementById('nombre').value.toLowerCase();
    const descripcionObjeto = document.getElementById('descripcion_objeto').value.toLowerCase();
    const descripcionHallazgo = document.getElementById('descripcion_hallazgo').value.toLowerCase();

    const textoCompleto = nombreObjeto + ' ' + descripcionObjeto + ' ' + descripcionHallazgo;

    // 3. Revisa si alguna palabra prohibida está en el texto
    const contienePalabraMala = badWords.some(word => textoCompleto.includes(word));

    // 4. Si se encuentra una palabra mala, detiene el proceso y muestra un error
    if (contienePalabraMala) {
      alert('Error: Tu publicación fue rechazada por no cumplir las normas');
      return; // Detiene el envío del formulario
    }

    // --- FIN: FILTRO DE MODERACIÓN ---


    // Si el texto está limpio, el código continúa como antes...
    const newObjectName = document.getElementById('nombre').value;

    if (!newObjectName) {
      alert('Por favor, ingresa el nombre del objeto.');
      return;
    }

    const newPostData = {
      objeto: newObjectName,
      sede: document.getElementById('sede').value,
      area: document.getElementById('area').value,
      fecha: document.getElementById('fecha').value,
      descripcion: document.getElementById('descripcion_objeto').value,
      hallazgo: document.getElementById('descripcion_hallazgo').value,
      status: document.getElementById('estado').value,
      usuario: 'Usted',
      imagen: 'assets/images/posts/default.png'
    };

    const publicacionesGuardadas = localStorage.getItem('publicacionesData');
    const publicacionesData = publicacionesGuardadas ? JSON.parse(publicacionesGuardadas) : {};

    const nuevoId = 'post_' + Date.now();
    publicacionesData[nuevoId] = newPostData;

    localStorage.setItem('publicacionesData', JSON.stringify(publicacionesData));

    alert('Publicación guardada');
    window.location.href = 'Posts.html';
  });
});