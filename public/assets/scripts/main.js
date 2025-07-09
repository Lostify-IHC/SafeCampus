document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {

                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    const navLinksAll = document.querySelectorAll('.navbar a');

    if (hamburgerMenu && navbar) {

        hamburgerMenu.classList.remove('active');
        navbar.classList.remove('active');
        document.body.classList.remove('menu-open');


        hamburgerMenu.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            this.classList.toggle('active');
            navbar.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        navLinksAll.forEach(link => {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                navbar.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });


        document.addEventListener('click', function(e) {
            if (!hamburgerMenu.contains(e.target) && !navbar.contains(e.target)) {
                hamburgerMenu.classList.remove('active');
                navbar.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });


        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                hamburgerMenu.classList.remove('active');
                navbar.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });


        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navbar.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                navbar.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
});