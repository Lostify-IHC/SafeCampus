document.addEventListener("DOMContentLoaded", () => {
    const modoOscuroSwitch = document.querySelectorAll('.switch input')[0];
    const idiomaSelect = document.querySelector('select');


    const modoOscuroGuardado = localStorage.getItem('modoOscuro');
    if (modoOscuroGuardado === 'true') {
        document.body.classList.add('dark-mode');
        modoOscuroSwitch.checked = true;
    }
    modoOscuroSwitch.addEventListener('change', () => {
    if (modoOscuroSwitch.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('modoOscuro', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('modoOscuro', 'false');
    }
});



    idiomaSelect.addEventListener('change', () => {
        if (idiomaSelect.value === 'Ingles') {
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
        localStorage.setItem("idioma", idiomaSelect.value);
    });


});


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
        window.location.href = 'login.html';
    }
}

function cargarDatosPerfil() {
        const datosGuardados = localStorage.getItem('perfilUsuario');
        
        if (datosGuardados) {
          const datos = JSON.parse(datosGuardados);
          
          document.getElementById('nombres-perfil').textContent = datos.nombres || 'Oliver';
          document.getElementById('apellidos-perfil').textContent = datos.apellidos || 'Martinez';
          document.getElementById('celular-perfil').textContent = datos.celular || '+51 927594756';
          document.getElementById('correo-perfil').textContent = datos.correo || 'u202415895@upc.edu.pe';
          document.getElementById('universidad-perfil').textContent = datos.universidad || 'Universidad Peruana de Ciencias Aplicadas';
          document.getElementById('sede-perfil').textContent = datos.sede || 'San Miguel';
          document.getElementById('nombre-imagen').textContent = datos.imagen || 'mifoto.png';
          
          const iniciales = (datos.nombres?.charAt(0) || 'O') + (datos.apellidos?.charAt(0) || 'M');
          document.getElementById('iniciales-usuario').textContent = iniciales.toUpperCase();
        }
      }

      function initDarkMode() {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        
        if (savedDarkMode) {
          document.body.classList.add('dark-mode');
          darkModeToggle.checked = true;
        }
        
        darkModeToggle.addEventListener('change', function() {
          if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
          } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
          }
        });
      }

      window.addEventListener('load', function() {
        cargarDatosPerfil();
        initDarkMode();
      });
