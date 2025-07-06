// Datos de las publicaciones para el detalle
const publicacionesData = {
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
        imagen: 'assets/images/search/bolso_p.jpg'
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

// Función para ver el detalle de una publicación
function verDetalle(publicacionId) {
    const publicacion = publicacionesData[publicacionId];
    if (publicacion) {
        localStorage.setItem('publicacionDetalle', JSON.stringify(publicacion));
        window.location.href = 'detalle_publicaciones.html';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const filtroSede = document.getElementById('filtroSede');
    const filtroArea = document.getElementById('filtroArea');
    const filtroDia = document.getElementById('filtroDia');
    const btnFavorito = document.querySelector('.Circulo');
    const barraBusqueda = document.getElementById('barraBusqueda');
    const btnBusqueda = document.querySelector('.busqueda button[type="submit"]');
    const menuFiltros = document.getElementById('menuFiltros');

    window.toggleEstrella = function (btn) {
        btn.classList.toggle('activa');
    };

    window.toggleFiltro = function () {
        menuFiltros.style.display = (menuFiltros.style.display === 'flex') ? 'none' : 'flex';
    };

    btnBusqueda.addEventListener('click', function (e) {
        e.preventDefault();
        aplicarFiltros();
    });

    function reposicionarPostsVisibles() {
        const posts = document.querySelectorAll('.post');
        posts.forEach(post => {
            post.style.position = '';
            post.style.top = '';
            post.style.left = '';
            post.style.margin = '';
            post.style.zIndex = '';
            post.style.display = (post.style.display === 'none') ? 'none' : 'block';
        });
    }

    function aplicarFiltros() {
        const posts = document.querySelectorAll('.post');
        const textoBusqueda = barraBusqueda.value.trim().toLowerCase();
        const sedeFiltro = filtroSede.value.trim().toLowerCase();
        const areaFiltro = filtroArea.value.trim().toLowerCase();
        const diaFiltro = filtroDia.value.trim().toLowerCase();
        const favoritoActivo = btnFavorito.classList.contains('activa');

        posts.forEach(post => {
            const dataObjeto = (post.dataset.objeto || "").toLowerCase();
            const dataSede = (post.dataset.sede || "").toLowerCase();
            const dataArea = (post.dataset.area || "").toLowerCase();
            const dataDia = (post.dataset.dia || "").toLowerCase();
            const esFavorito = post.querySelector('.estrella')?.classList.contains('activa');

            let visible = true;

            if (textoBusqueda && !dataObjeto.includes(textoBusqueda)) visible = false;
            if (sedeFiltro && !dataSede.includes(sedeFiltro)) visible = false;
            if (areaFiltro && !dataArea.includes(areaFiltro)) visible = false;
            if (diaFiltro && !dataDia.includes(diaFiltro)) visible = false;
            if (favoritoActivo && !esFavorito) visible = false;

            post.style.display = visible ? 'block' : 'none';
        });

        reposicionarPostsVisibles();
    }
});