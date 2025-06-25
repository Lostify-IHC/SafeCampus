document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para los enlaces del navbar
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculamos la posición considerando el alto del header fijo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Ajustar el padding-top del body para el header fijo
    const headerHeight = document.querySelector('.header').offsetHeight;
    document.body.style.paddingTop = `${headerHeight}px`;
});