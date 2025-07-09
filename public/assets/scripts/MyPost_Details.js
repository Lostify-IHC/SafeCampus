
document.addEventListener('DOMContentLoaded', function() {
    cargarDatosPublicacion();
    

    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});


function cargarDatosPublicacion() {
    const publicacionData = localStorage.getItem('publicacionDetalle');
    
    if (publicacionData) {
        const publicacion = JSON.parse(publicacionData);
        

        document.getElementById('page-title').textContent = publicacion.objeto;

        document.getElementById('sede').textContent = publicacion.sede;
        document.getElementById('area').textContent = publicacion.area;
        document.getElementById('fecha').textContent = publicacion.fecha;
        document.getElementById('usuario').textContent = publicacion.usuario;
        

        document.getElementById('descripcion').textContent = publicacion.descripcion;
        document.getElementById('hallazgo').textContent = publicacion.hallazgo;
        

        const statusBtn = document.getElementById('status-btn');
        statusBtn.textContent = publicacion.status;
        

        statusBtn.className = 'status-btn';
        if (publicacion.status === 'En Objetos Perdidos') {
            statusBtn.classList.add('perdidos');
        } else if (publicacion.status === 'En mi posesión') {
            statusBtn.classList.add('posesion');
        } else if (publicacion.status === 'Entregado') {
            statusBtn.classList.add('entregado');
        }
        

        if (publicacion.imagen) {
            const imagenElement = document.getElementById('objeto-imagen');
            const placeholderText = document.getElementById('placeholder-text');
            
            imagenElement.src = publicacion.imagen;
            imagenElement.style.display = 'block';
            placeholderText.style.display = 'none';
            

            imagenElement.onerror = function() {
                this.style.display = 'none';
                placeholderText.style.display = 'block';
                placeholderText.textContent = 'Imagen no disponible';
            };
        }
        

        document.querySelector('.content').classList.add('fade-in');
    } else {

        alert('No se encontraron datos de la publicación');
        window.location.href = 'Posts.html';
    }
}


function goBack() {
    window.location.href = 'Posts.html';
}


function switchSection(section) {
    if (section === 'mis-publicaciones') {
        window.location.href = 'Posts.html';
    } else if (section === 'publicaciones') {
        window.location.href = 'Search.html';
    } else if (section === 'perfil') {
        window.location.href = 'profile.html';
    } else if (section === 'notificaciones') {
        window.location.href = 'notificaciones.html';
    } else if (section === 'otros') {
        window.location.href = 'otros.html';
    }
    console.log(`Navegando a: ${section}`);
}


function deletePost() {
    if (confirm('¿Estás seguro de que quieres eliminar esta publicación?')) {

        const publicacionData = localStorage.getItem('publicacionDetalle');
        
        if (publicacionData) {
            const publicacion = JSON.parse(publicacionData);
            const publicacionId = publicacion.id;
            

            const publicacionesGuardadas = localStorage.getItem('publicacionesData');
            
            if (publicacionesGuardadas && publicacionId) {
                let publicacionesData = JSON.parse(publicacionesGuardadas);
                

                delete publicacionesData[publicacionId];
                

                localStorage.setItem('publicacionesData', JSON.stringify(publicacionesData));
                

                localStorage.removeItem('publicacionDetalle');
                

                alert('Tu publicación ha sido eliminada exitosamente');
                

                window.location.href = 'Posts.html';
            } else {
                alert('Error al eliminar la publicación');
            }
        } else {
            alert('No se encontraron datos de la publicación');
        }
    }
}


function editPost() {

  const publicacionData = localStorage.getItem('publicacionDetalle');
  
  if (publicacionData) {
    const publicacion = JSON.parse(publicacionData);
    const itemName = publicacion.objeto;

    if (itemName) {

      window.location.href = `edit-Post.html?item=${itemName}`;
    } else {
      alert("Error: No se pudo encontrar el nombre del objeto para editar.");
    }
  } else {
    alert("Error: No se encontraron datos para editar.");
  }
}


function logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        console.log('Cerrando sesión...');
        localStorage.removeItem('publicacionDetalle');
        alert('Sesión cerrada');

        window.location.href = 'index.html';
    }
}