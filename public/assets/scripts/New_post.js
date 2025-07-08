document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('new-post-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const newObjectName = document.getElementById('nombre').value;

    if (!newObjectName) {
      alert('Por favor, ingresa el nombre del objeto.');
      return;
    }

    // 1. Recolecta los datos del formulario
    const newPostData = {
      objeto: newObjectName,
      sede: document.getElementById('sede').value,
      area: document.getElementById('area').value,
      fecha: document.getElementById('fecha').value,
      descripcion: document.getElementById('descripcion_objeto').value,
      hallazgo: document.getElementById('descripcion_hallazgo').value,
      status: document.getElementById('estado').value,
      usuario: 'Usted',
      imagen: 'assets/images/posts/default.png' // Imagen por defecto
    };

    // 2. Lee la "base de datos" actual desde localStorage
    const publicacionesGuardadas = localStorage.getItem('publicacionesData');
    const publicacionesData = publicacionesGuardadas ? JSON.parse(publicacionesGuardadas) : {};

    // --- CAMBIO CLAVE AQUÍ ---
    // 3. Calcula el nuevo ID numérico
    const ids = Object.keys(publicacionesData).map(Number); // Convierte todos los IDs a números
    const maxId = ids.length > 0 ? Math.max(...ids) : 0; // Encuentra el ID más alto
    const nuevoId = maxId + 1; // El nuevo ID será el siguiente número

    // 4. Añade la nueva publicación con su nuevo ID numérico
    publicacionesData[nuevoId] = newPostData;

    // 5. Guarda la base de datos actualizada
    localStorage.setItem('publicacionesData', JSON.stringify(publicacionesData));

    // 6. Muestra el mensaje y redirige
    alert('Publicación guardada');
    window.location.href = 'Posts.html';
  });
});