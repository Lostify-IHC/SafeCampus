
document.addEventListener('DOMContentLoaded', function() {


  const form = document.getElementById('contact-form');


  form.addEventListener('submit', function(event) {
    

    event.preventDefault();


    alert('¡Formulario enviado correctamente!');


    window.location.href = 'Posts.html'; 
  });

});