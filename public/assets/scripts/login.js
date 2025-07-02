const form = document.getElementById('loginForm');
const loginButton = document.querySelector('.login-btn');

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  
  const email = form.elements["email"].value;
  const password = form.elements["password"].value;

  if (!email || !password) {
    alert("Por favor, complete todos los campos requeridos.");
    return;
  }

  if (!validateEducationalEmail(email)) {
    alert("Por favor, ingrese un correo institucional válido (ej: usuario@universidad.edu).");
    return;
  }

  if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  window.location.href = "Posts.html";
});

function validateEducationalEmail(email) {

  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!re.test(email)) return false;

  const domain = email.split('@')[1];
  const educationalDomains = ['edu', 'ac', 'university', 'school', 'college'];
  const extension = domain.split('.').pop();
  
  return educationalDomains.includes(extension.toLowerCase());
}