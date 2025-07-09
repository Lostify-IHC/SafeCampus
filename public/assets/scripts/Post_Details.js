
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

let isFavorite = false;


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
        

        checkFavoriteStatus(publicacion.objeto);
        

        document.querySelector('.content').classList.add('fade-in');
    } else {

        alert('No se encontraron datos de la publicación');
        window.location.href = 'Posts.html';
    }
}


function checkFavoriteStatus(objetoNombre) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    isFavorite = favoritos.includes(objetoNombre);
    updateFavoriteButton();
}


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


function goBack() {
    window.location.href = 'Search.html';
}


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

    console.log(`Navegando a: ${section}`);
}


function contactOwner() {
    const publicacionData = localStorage.getItem('publicacionDetalle');
    if (publicacionData) {
        const publicacion = JSON.parse(publicacionData);
        alert(`Contactarás con ${publicacion.usuario} sobre el objeto: ${publicacion.objeto}\n\nEsta funcionalidad te redirigirá al sistema de mensajería interno.`);
        

        console.log('Iniciando contacto con:', publicacion.usuario);

    }
}


function toggleFavorite() {
    const publicacionData = localStorage.getItem('publicacionDetalle');
    if (publicacionData) {
        const publicacion = JSON.parse(publicacionData);
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        
        if (isFavorite) {

            favoritos = favoritos.filter(item => item !== publicacion.objeto);
            isFavorite = false;
            console.log('Quitado de favoritos:', publicacion.objeto);
        } else {

            if (!favoritos.includes(publicacion.objeto)) {
                favoritos.push(publicacion.objeto);
            }
            isFavorite = true;
            console.log('Agregado a favoritos:', publicacion.objeto);
        }
        

        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        updateFavoriteButton();
        

        const action = isFavorite ? 'agregado a' : 'quitado de';
        alert(`${publicacion.objeto} ha sido ${action} tus favoritos.`);
    }
}


function logout() {
    if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        console.log('Cerrando sesión...');
        localStorage.removeItem('publicacionDetalle');
        localStorage.removeItem('favoritos');
        alert('Sesión cerrada');

        window.location.href = 'index.html';
    }
}