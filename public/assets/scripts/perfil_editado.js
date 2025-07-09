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
      const savedDarkMode = localStorage.getItem('modoOscuro');
      
      if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
      }
      
      darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
          document.body.classList.add('dark-mode');
          localStorage.setItem('modoOscuro', 'true');
        } else {
          document.body.classList.remove('dark-mode');
          localStorage.setItem('modoOscuro', 'false');
        }
      });
    }

    window.addEventListener('load', function() {
      cargarDatosPerfil();
      initDarkMode();
    });