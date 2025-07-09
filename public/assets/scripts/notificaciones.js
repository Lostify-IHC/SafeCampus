    function desactivarNotificaciones() {
      const confirmacion = confirm('¿Estás seguro de que quieres desactivar todas las notificaciones?');
      
      if (confirmacion) {
        const listaNotificaciones = document.querySelector('.lista-notificaciones');
        const btnDesactivar = document.querySelector('.btn-desactivar');
        
        const notificaciones = document.querySelectorAll('.lista-notificaciones li');
        notificaciones.forEach((notif, index) => {
          setTimeout(() => {
            notif.style.opacity = '0';
            notif.style.transform = 'translateX(-100%)';
            setTimeout(() => {
              notif.style.display = 'none';
            }, 300);
          }, index * 100);
        });
        
        setTimeout(() => {
          btnDesactivar.textContent = 'Notificaciones Desactivadas';
          btnDesactivar.style.backgroundColor = '#95a5a6';
          btnDesactivar.disabled = true;
          btnDesactivar.style.cursor = 'not-allowed';
        }, 1000);
        
        setTimeout(() => {
          listaNotificaciones.innerHTML = '<li style="text-align: center; border-left: none; font-style: italic; color: #7f8c8d;">Las notificaciones han sido desactivadas</li>';
        }, 1500);
      }
    }