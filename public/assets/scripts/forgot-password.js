document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('forgotForm');
    const submitButton = document.querySelector('.submit-btn');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        

        emailError.textContent = '';
        
        const email = emailInput.value.trim();
        

        if (!email) {
            emailError.textContent = 'Por favor, ingrese su correo electrónico.';
            return;
        }
        
        if (!validateEducationalEmail(email)) {
            emailError.textContent = 'Por favor, ingrese un correo institucional válido (ej: usuario@universidad.edu).';
            return;
        }
        
    
        alert(`Se ha enviado un enlace de recuperación a ${email}. Por favor, revise su bandeja de entrada.`);
        
 
        setTimeout(() => {
            window.location.href = "login.html";
        }, 3000);
    });
    
    function validateEducationalEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!re.test(email)) return false;
        
        const domain = email.split('@')[1];
        const educationalDomains = ['edu', 'ac', 'university', 'school', 'college'];
        const extension = domain.split('.').pop();
        
        return educationalDomains.includes(extension.toLowerCase());
    }
});