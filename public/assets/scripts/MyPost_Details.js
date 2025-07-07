// Cargar los datos de la publicación al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    cargarDatosPublicacion();
    
    // Agregar efectos hover a los botones
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

// Función para cargar los datos de la publicación desde localStorage
function cargarDatosPublicacion() {
    const publicacionData = localStorage.getItem('publicacionDetalle');
    
    if (publicacionData) {
        const publicacion = JSON.parse(publicacionData);
        
        // Actualizar el título de la página
        document.getElementById('page-title').textContent = publicacion.objeto;
        
        // Actualizar la información básica
        document.getElementById('sede').textContent = publicacion.sede;
        document.getElementById('area').textContent = publicacion.area;
        document.getElementById('fecha').textContent = publicacion.fecha;
        document.getElementById('usuario').textContent = publicacion.usuario;
        
        // Actualizar las descripciones
        document.getElementById('descripcion').textContent = publicacion.descripcion;
        document.getElementById('hallazgo').textContent = publicacion.hallazgo;
        
        // Actualizar el estado
        const statusBtn = document.getElementById('status-btn');
        statusBtn.textContent = publicacion.status;
        
        // Aplicar clase CSS según el estado
        statusBtn.className = 'status-btn';
        if (publicacion.status === 'En Objetos Perdidos') {
            statusBtn.classList.add('perdidos');
        } else if (publicacion.status === 'En mi posesión') {
            statusBtn.classList.add('posesion');
        } else if (publicacion.status === 'Entregado') {
            statusBtn.classList.add('entregado');
        }
        
        // Mostrar imagen si existe
        if (publicacion.imagen) {
            const imagenElement = document.getElementById('objeto-imagen');
            const placeholderText = document.getElementById('placeholder-text');
            
            imagenElement.src = publicacion.imagen;
            imagenElement.style.display = 'block';
            placeholderText.style.display = 'none';
            
            // Manejar error de carga de imagen
            imagenElement.onerror = function() {
                this.style.display = 'none';
                placeholderText.style.display = 'block';
                placeholderText.textContent = 'Imagen no disponible';
            };
        }
        
        // Añadir animación
        document.querySelector('.content').classList.add('fade-in');
    } else {
        // Si no hay datos, redirigir a mis publicaciones
        alert('No se encontraron datos de la publicación');
        window.location.href = 'Posts.html';
    }
}

// Función para regresar a la página anterior
function goBack() {
    window.location.href = 'Posts.html';
}

// Función para cambiar de sección
function switchSection(section) {
    if (section === 'mis-publicaciones') {
        window.location.href = 'Posts.html';
    } else if (section === 'publicaciones') {
        window.location.href = 'Search.html';
    } else if (section === 'perfil') {
        window.location.href = 'profile.html';
    } else if (section === 'notificaciones') {
        window.location.href = 'notifications.html';
    } else if (section === 'otros') {
        window.location.href = 'otros.html';
    }
    console.log(`Navegando a: ${section}`);
}

// Función para eliminar publicación
function deletePost() {
    if (confirm('¿Estás seguro de que quieres eliminar esta publicación?')) {
        // Obtener el ID de la publicación desde localStorage
        const publicacionData = localStorage.getItem('publicacionDetalle');
        
        if (publicacionData) {
            const publicacion = JSON.parse(publicacionData);
            const publicacionId = publicacion.id;
            
            // Obtener las publicaciones guardadas
            const publicacionesGuardadas = localStorage.getItem('publicacionesData');
            
            if (publicacionesGuardadas && publicacionId) {
                let publicacionesData = JSON.parse(publicacionesGuardadas);
                
                // Eliminar la publicación específica
                delete publicacionesData[publicacionId];
                
                // Guardar los cambios
                localStorage.setItem('publicacionesData', JSON.stringify(publicacionesData));
                
                // Limpiar el detalle de la publicación
                localStorage.removeItem('publicacionDetalle');
                
                // Mostrar mensaje de confirmación
                alert('Tu publicación ha sido eliminada exitosamente');
                
                // Redirigir a la página de publicaciones
                window.location.href = 'Posts.html';
            } else {
                alert('Error al eliminar la publicación');
            }
        } else {
            alert('No se encontraron datos de la publicación');
        }
    }
}

// Función para editar publicación
function editPost() {
    console.log('Editando publicación...');
    alert('Redirigiendo a la página de edición de tu publicación...');
    // Aquí puedes redirigir a una página de edición
    window.location.href = 'edit_post.html';
}

// Función para cerrar sesión
function logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        console.log('Cerrando sesión...');
        localStorage.removeItem('publicacionDetalle');
        alert('Sesión cerrada');
        // Redirigir al login
        window.location.href = 'index.html';
    }
}