// Navegación entre secciones
function switchSection(section) {
    if (section === 'mis-publicaciones') {
        window.location.href = 'Posts.html';
    } else if (section === 'publicaciones') {
        window.location.href = 'Search.html';
    } else if (section === 'otros') {
        window.location.href = 'otros.html';
    } else if (section === 'perfil') {
        window.location.href = 'profile.html';
    } else if (section === 'notificaciones') {
        window.location.href = 'notificaciones.html';
    }
    console.log(`Navegando a: ${section}`);
}

function logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        console.log('Cerrando sesión...');
        localStorage.removeItem('publicacionDetalle');
        alert('Sesión cerrada');
        // Redirigir al login
        window.location.href = 'login.html';
    }
}

function goBack() {
  window.location.href = 'Post_Details.html';
}
