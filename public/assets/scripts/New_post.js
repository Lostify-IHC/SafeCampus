document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('new-post-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const badWords = ['carajo', 'tonto', 'idiota', 'etc'];

    const nombreObjeto = document.getElementById('nombre').value.toLowerCase();
    const descripcionObjeto = document.getElementById('descripcion_objeto').value.toLowerCase();
    const descripcionHallazgo = document.getElementById('descripcion_hallazgo').value.toLowerCase();

    const textoCompleto = nombreObjeto + ' ' + descripcionObjeto + ' ' + descripcionHallazgo;

    const contienePalabraMala = badWords.some(word => textoCompleto.includes(word));

    if (contienePalabraMala) {
      alert('Error: Tu publicación fue rechazada por no cumplir las normas');
      return;
    }

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