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