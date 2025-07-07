// Datos de las publicaciones generales (basadas en el HTML de publicaciones)
const publicacionesGeneralesData = {
     1: {
        objeto: 'Cartuchera',
        sede: 'San Isidro',
        area: 'Salon B311',
        fecha: '10/05/2025',
        usuario: 'Jose Galvez',
        descripcion: 'Cartuchera de color azul con detalles blancos. Contiene varios lápices, bolígrafos y una regla pequeña. Se encuentra en buen estado.',
        hallazgo: 'Fue encontrada en el Salón B311, sobre una de las mesas del lado derecho, cerca de la ventana.',
        status: 'En Objetos Perdidos',
        ubicacion: 'En Objetos Perdidos',
        imagen: 'assets/images/search/cartu.jpg'
    },
    2: {
        objeto: 'Celular',
        sede: 'San Miguel',
        area: 'Salon C708',
        fecha: '09/10/2025',
        usuario: 'Antonio Hernandez',
        descripcion: 'Celular smartphone de color negro, marca Samsung. Tiene una funda protectora transparente y presenta algunos rayones menores en la pantalla.',
        hallazgo: 'Fue encontrado en el Salón C708, debajo de una silla en la tercera fila.',
        status: 'En Objetos Perdidos',
        ubicacion: 'En Objetos Perdidos',
        imagen: 'assets/images/search/celular_p.jpg'
    },
    3: {
        objeto: 'Bolso',
        sede: 'Monterico',
        area: 'Salon B201',
        fecha: '21/08/2025',
        usuario: 'Juana Margarita',
        descripcion: 'Bolso de tela de color beige con asas largas. Tiene un compartimento principal y un bolsillo frontal con cierre. En su interior había algunos documentos.',
        hallazgo: 'Fue encontrado en el Salón B201, colgado en el respaldo de una silla en la primera fila.',
        status: 'En mi posesión',
        ubicacion: 'En mi posesión',
        imagen: 'assets/images/search/bolso.jpg'
    },
    4: {
        objeto: 'Mochila',
        sede: 'San Miguel',
        area: 'Salon B705',
        fecha: '14/04/2025',
        usuario: 'Ariana Casas',
        descripcion: 'Mochila escolar de color rojo con detalles grises. Tiene varios compartimentos y se encuentra en buen estado general.',
        hallazgo: 'Fue encontrada en el Salón B705, debajo de una mesa en la parte posterior del aula.',
        status: 'En Objetos Perdidos',
        ubicacion: 'En Objetos Perdidos',
        imagen: 'assets/images/search/mochila_p.jpg'
    }
};

// Variable para trackear el estado de favoritos
let isFavorite = false;

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
        
        // Verificar estado de favoritos
        checkFavoriteStatus(publicacion.objeto);
        
        // Añadir animación
        document.querySelector('.content').classList.add('fade-in');
    } else {
        // Si no hay datos, redirigir a publicaciones
        alert('No se encontraron datos de la publicación');
        window.location.href = 'Posts.html';
    }
}

// Función para verificar si la publicación está en favoritos
function checkFavoriteStatus(objetoNombre) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    isFavorite = favoritos.includes(objetoNombre);
    updateFavoriteButton();
}

// Función para actualizar el botón de favoritos
function updateFavoriteButton() {
    const favoriteBtn = document.getElementById('favorite-btn');
    const favoriteText = document.getElementById('favorite-text');
    
    if (isFavorite) {
        favoriteBtn.classList.add('favorited');
        favoriteText.textContent = 'Quitar de Favoritos';
    } else {
        favoriteBtn.classList.remove('favorited');
        favoriteText.textContent = 'Agregar a Favoritos';
    }
}

// Función para regresar a la página anterior
function goBack() {
    window.location.href = 'Search.html';
}

// Función para cambiar de sección
function switchSection(section) {
    if (section === 'mis-publicaciones') {
        window.location.href = 'Posts.html';
    } else if (section === 'publicaciones') {
        window.location.href = 'Search.html';
    } else if (section === 'perfil') {
        window.location.href = 'profile.html';
    }else if (section === 'notificaciones') {
        window.location.href = 'notificaciones.html';
    }else if (section === 'otros') {
        window.location.href = 'otros.html';
    }
    // Agregar más redirecciones según sea necesario
    console.log(`Navegando a: ${section}`);
}

// Función para contactar al dueño
function contactOwner() {
    const publicacionData = localStorage.getItem('publicacionDetalle');
    if (publicacionData) {
        const publicacion = JSON.parse(publicacionData);
        alert(`Contactarás con ${publicacion.usuario} sobre el objeto: ${publicacion.objeto}\n\nEsta funcionalidad te redirigirá al sistema de mensajería interno.`);
        
        // Aquí puedes implementar la lógica para contactar al usuario
        console.log('Iniciando contacto con:', publicacion.usuario);
        
        
        // window.location.href = `chat.html?usuario=${publicacion.usuario}&objeto=${publicacion.objeto}`;
    }
}

// Función para alternar favoritos
function toggleFavorite() {
    const publicacionData = localStorage.getItem('publicacionDetalle');
    if (publicacionData) {
        const publicacion = JSON.parse(publicacionData);
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        
        if (isFavorite) {
            // Quitar de favoritos
            favoritos = favoritos.filter(item => item !== publicacion.objeto);
            isFavorite = false;
            console.log('Quitado de favoritos:', publicacion.objeto);
        } else {
            // Agregar a favoritos
            if (!favoritos.includes(publicacion.objeto)) {
                favoritos.push(publicacion.objeto);
            }
            isFavorite = true;
            console.log('Agregado a favoritos:', publicacion.objeto);
        }
        
        // Guardar favoritos actualizados
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        updateFavoriteButton();
        
        // Mostrar confirmación
        const action = isFavorite ? 'agregado a' : 'quitado de';
        alert(`${publicacion.objeto} ha sido ${action} tus favoritos.`);
    }
}

// Función para cerrar sesión
function logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        console.log('Cerrando sesión...');
        localStorage.removeItem('publicacionDetalle');
        localStorage.removeItem('favoritos');
        alert('Sesión cerrada');
        // Redirigir al login
        window.location.href = 'index.html';
    }
}