const form = document.getElementById('registerForm');
const registerButton = document.querySelector('.register-btn');

registerButton.addEventListener("click", (event) => {
  event.preventDefault();
  
  const nombres = form.elements["nombres"].value;
  const apellidos = form.elements["apellidos"].value;
  const email = form.elements["email"].value;
  const telefono = form.elements["telefono"].value;
  const password = form.elements["password"].value;
  const confirmPassword = form.elements["confirmPassword"].value;

  if (!nombres || !apellidos || !email || !telefono || !password || !confirmPassword) {
    alert("Por favor, complete todos los campos requeridos.");
    return;
  }

  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombres)) {
    alert("Los nombres solo deben contener letras.");
    return;
  }

  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellidos)) {
    alert("Los apellidos solo deben contener letras.");
    return;
  }

  if (!validateEducationalEmail(email)) {
    alert("Por favor, ingrese un correo institucional válido (ej: usuario@universidad.edu).");
    return;
  }

  if (!/^\d{9}$/.test(telefono)) {
    alert("El número de teléfono debe tener 9 dígitos.");
    return;
  }

  if (password.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  window.location.href = "#";
});

function validateEducationalEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!re.test(email)) return false;

  const domain = email.split('@')[1];
  const educationalDomains = ['edu', 'ac', 'university', 'school', 'college'];
  const extension = domain.split('.').pop();
  
  return educationalDomains.includes(extension.toLowerCase());
}