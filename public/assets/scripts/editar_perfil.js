    window.addEventListener('load', function() {
      const datosGuardados = localStorage.getItem('perfilUsuario');
      if (datosGuardados) {
        const datos = JSON.parse(datosGuardados);
        document.getElementById('nombres').value = datos.nombres || 'Oliver';
        document.getElementById('apellidos').value = datos.apellidos || 'Martinez';
        document.getElementById('celular').value = datos.celular || '+51 927594756';
        document.getElementById('correo').value = datos.correo || 'u202415895@upc.edu.pe';
        document.getElementById('universidad').value = datos.universidad || 'Universidad Peruana de Ciencias Aplicadas';
        document.getElementById('sede').value = datos.sede || 'San Miguel';
        document.getElementById('imagen').value = datos.imagen || 'mifoto.png';
      }
      
      initDarkMode();
    });

    function initDarkMode() {
      const savedDarkMode = localStorage.getItem('modoOscuro');
      
      if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
      }
    }

    document.getElementById('form-editar-perfil').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const datos = {
        nombres: document.getElementById('nombres').value,
        apellidos: document.getElementById('apellidos').value,
        celular: document.getElementById('celular').value,
        correo: document.getElementById('correo').value,
        universidad: document.getElementById('universidad').value,
        sede: document.getElementById('sede').value,
        imagen: document.getElementById('imagen').value
      };
      
      
      localStorage.setItem('perfilUsuario', JSON.stringify(datos));
      
      mostrarModal();
    });

    function mostrarModal() {
      const modal = document.getElementById('modal-confirmacion');
      const contador = document.getElementById('contador');
      const btnIrPerfil = document.getElementById('btn-ir-perfil');
      
      modal.style.display = 'flex';
      
      let tiempo = 3;
      const intervalo = setInterval(() => {
        tiempo--;
        contador.textContent = tiempo;
        
        if (tiempo <= 0) {
          clearInterval(intervalo);
          window.location.href = 'perfil_editado.html';
        }
      }, 1000);
      
      btnIrPerfil.addEventListener('click', function() {
        clearInterval(intervalo);
        window.location.href = 'perfil_editado.html';
      });
    }