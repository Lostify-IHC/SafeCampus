document.addEventListener("DOMContentLoaded", () => {
    const modoOscuroSwitch = document.querySelectorAll('.switch input')[0];
    const idiomaSelect = document.querySelector('select');

    // Aplicar estado guardado de modo oscuro al cargar
    const modoOscuroGuardado = localStorage.getItem('modoOscuro');
    if (modoOscuroGuardado === 'true') {
        document.body.classList.add('dark-mode');
        modoOscuroSwitch.checked = true;
    }

    // Funcionalidad Modo Oscuro
    modoOscuroSwitch.addEventListener('change', () => {
        if (modoOscuroSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('modoOscuro', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('modoOscuro', 'false');
        }
    });

    // Funcionalidad cambio de idioma (simulada)
    idiomaSelect.addEventListener('change', () => {
        if (idiomaSelect.value === 'Inglés') {
            document.querySelector('.profile-header').innerText = 'My Profile';
            document.querySelector('label[for="nombres"]').innerText = 'First Name';
            document.querySelector('label[for="apellidos"]').innerText = 'Last Name';
            document.querySelector('label[for="celular"]').innerText = 'Phone';
            document.querySelector('label[for="correo"]').innerText = 'Email';
            document.querySelector('label[for="universidad"]').innerText = 'University';
            document.querySelector('label[for="sede"]').innerText = 'Campus';
            document.querySelector('label[for="modoOscuro"]').innerText = 'Dark Mode';
            document.querySelector('label[for="notificaciones"]').innerText = 'Notifications';
            document.querySelector('label[for="idioma"]').innerText = 'Language';
        } else {
            document.querySelector('.profile-header').innerText = 'Mi Perfil';
            document.querySelector('label[for="nombres"]').innerText = 'Nombres';
            document.querySelector('label[for="apellidos"]').innerText = 'Apellidos';
            document.querySelector('label[for="celular"]').innerText = 'Celular';
            document.querySelector('label[for="correo"]').innerText = 'Correo electrónico';
            document.querySelector('label[for="universidad"]').innerText = 'Universidad';
            document.querySelector('label[for="sede"]').innerText = 'Sede';
            document.querySelector('label[for="modoOscuro"]').innerText = 'Modo Oscuro';
            document.querySelector('label[for="notificaciones"]').innerText = 'Notificaciones';
            document.querySelector('label[for="idioma"]').innerText = 'Idioma';
        }
    });

    // Cargar idioma desde localStorage si deseas en un futuro
});

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
        localStorage.removeItem('favoritos');
        alert('Sesión cerrada');
        // Redirigir al login
        window.location.href = 'login.html';
    }
}
