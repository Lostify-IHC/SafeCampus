
let publicacionesData = {
    1: {
        objeto: 'Cartuchera',
        sede: 'San Miguel',
        area: 'Salon B405',
        fecha: '13/04/2025',
        usuario: 'Oliver Martinez',
        descripcion: 'Presenta marcas con liquid en la parte del cierre, además es de color rojo y negro. Tiene varios lapiceros y lápices en su interior.',
        hallazgo: 'Fue encontrado en el Salón B405, en el último asiento al lado de la ventana que da hacia el patio, en una esquina.',
        status: 'En Objetos Perdidos',
        imagen: 'assets/images/posts/Cartuchera.jpg'
    },
    2: {
        objeto: 'Celular',
        sede: 'San Miguel',
        area: 'Salon B405',
        fecha: '13/04/2025',
        usuario: 'Oliver Martinez',
        descripcion: 'Celular Samsung Galaxy A52, color negro, con una funda transparente. La pantalla tiene algunos rayones menores pero funciona perfectamente.',
        hallazgo: 'Fue encontrado debajo de una mesa en el Salón B405, cerca del escritorio del profesor.',
        status: 'En mi posesión',
        imagen: 'assets/images/posts/celular.jpg'
    },
    3: {
        objeto: 'Bolso',
        sede: 'San Isidro',
        area: 'Salon B303',
        fecha: '12/05/2025',
        usuario: 'Oliver Martinez',
        descripción: 'Bolso de cuero marrón, marca desconocida. Tiene varios compartimentos y una correa ajustable. En su interior había algunos documentos y llaves.',
        hallazgo: 'Fue encontrado en el Salón B303, colgado en el respaldo de una silla en la primera fila.',
        status: 'En mi posesión',
        imagen: 'assets/images/posts/bolso.jpg'
    }
};


function cargarPublicaciones() {
    const publicacionesGuardadas = localStorage.getItem('publicacionesData');
    if (publicacionesGuardadas) {
        publicacionesData = JSON.parse(publicacionesGuardadas);
    } else {

        localStorage.setItem('publicacionesData', JSON.stringify(publicacionesData));
    }
}


function guardarPublicaciones() {
    localStorage.setItem('publicacionesData', JSON.stringify(publicacionesData));
}


function verDetalle(publicacionId) {

    const publicacion = publicacionesData[publicacionId];
    if (publicacion) {
        const publicacionConId = {
            ...publicacion,
            id: publicacionId
        };
        localStorage.setItem('publicacionDetalle', JSON.stringify(publicacionConId));

        window.location.href = 'MyPost_Details.html';
    }
}


function eliminarPublicacion(publicacionId) {
    if (confirm('¿Estás seguro de que quieres eliminar esta publicación?')) {

        delete publicacionesData[publicacionId];
        

        guardarPublicaciones();
        

        alert('Tu publicación ha sido eliminada exitosamente');
        

        window.location.reload();
    }
}


function renderizarPublicaciones() {
    const container = document.querySelector('.Main_Content');
    

    const encabezado = container.querySelector('.Encabezado');
    container.innerHTML = '';
    container.appendChild(encabezado);
    

    const publicacionesArray = Object.entries(publicacionesData);
    
    if (publicacionesArray.length === 0) {

        const mensajeVacio = document.createElement('div');
        mensajeVacio.className = 'mensaje-vacio';
        mensajeVacio.style.textAlign = 'center';
        mensajeVacio.style.padding = '50px';
        mensajeVacio.style.color = '#666';
        mensajeVacio.innerHTML = '<h3>No tienes publicaciones aún</h3><p>Haz clic en "Nueva Publicación" para crear tu primera publicación.</p>';
        container.appendChild(mensajeVacio);
        return;
    }
    

    let filaActual = null;
    let publicacionesEnFila = 0;
    
    publicacionesArray.forEach(([id, publicacion], index) => {

        if (publicacionesEnFila === 0) {
            filaActual = document.createElement('div');
            filaActual.className = `Row_${Math.floor(index / 2) + 1}`;
            container.appendChild(filaActual);
        }
        

        const postElement = document.createElement('div');
        postElement.className = `Post_${((index % 2) + 1)}`;
        

        let ubicacionClass = '';
        let ubicacionText = publicacion.status;
        
        if (publicacion.status === 'En Objetos Perdidos') {
            ubicacionClass = 'ubicacion-perdidos';
        } else if (publicacion.status === 'En mi posesión') {
            ubicacionClass = 'ubicacion-posesion';
        } else if (publicacion.status === 'Entregado') {
            ubicacionClass = 'ubicacion-entregado';
        }
        
        postElement.innerHTML = `
            <div>
                <img src="${publicacion.imagen}" class="IMG" width="8%" alt="${publicacion.objeto}">
            </div>
            <p>
                <span class="Caracteristica"> Objeto:</span>
                <span class="Descripcion">${publicacion.objeto}</span> <br>
                <span class="Caracteristica"> Sede:</span>
                <span class="Descripcion">${publicacion.sede}</span> <br>
                <span class="Caracteristica"> Area:</span>
                <span class="Descripcion">${publicacion.area}</span> <br>
                <span class="Caracteristica"> Dia Encontrado:</span>
                <span class="Descripcion">${publicacion.fecha}</span> <br>
                <span class="Caracteristica"> De:</span>
                <span class="Descripcion">Usted</span><br>
            </p>
            <p><span class="Ubicacion ${ubicacionClass}">${ubicacionText}</span></p>
            <nav class="Detalles_Publicacion">
                <a href="#" onclick="verDetalle(${id})"><i></i>Ver más</a>
            </nav>
        `;
        
        filaActual.appendChild(postElement);
        publicacionesEnFila++;
        

        if (publicacionesEnFila === 2) {
            publicacionesEnFila = 0;
        }
    });
}


function inicializarPagina() {
    cargarPublicaciones();
    renderizarPublicaciones();
}


document.addEventListener('DOMContentLoaded', inicializarPagina);