// Datos de las publicaciones
const publicacionesData = {
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
        descripcion: 'Bolso de cuero marrón, marca desconocida. Tiene varios compartimentos y una correa ajustable. En su interior había algunos documentos y llaves.',
        hallazgo: 'Fue encontrado en el Salón B303, colgado en el respaldo de una silla en la primera fila.',
        status: 'En mi posesión',
        imagen: 'assets/images/posts/bolso.jpg'
    }
};

// Función para ver el detalle de una publicación
function verDetalle(publicacionId) {
    // Guardar los datos de la publicación en localStorage para pasarlos a la página de detalle
    const publicacion = publicacionesData[publicacionId];
    if (publicacion) {
        localStorage.setItem('publicacionDetalle', JSON.stringify(publicacion));
        // Redirigir a la página de detalle
        window.location.href = 'detalle_mis_publicaciones.html';
    }
}