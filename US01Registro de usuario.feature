Feature: US01 - Registro de usuario

Scenario: Un usuario nuevo completa el formulario de registro
  Given que el usuario está en la pantalla de Registro
  When el usuario completa todos los campos del formulario con datos válidos
  And presiona el botón "Registrarse"
  Then la cuenta debe crearse correctamente y el sistema redirige al usuario a la pantalla de "Iniciar Sesión".

  Examples:
    | INPUT                                                                                                |
    | Nombres: "Juan", Apellidos: "Pérez", Correo: "u20241234@upc.edu.pe", Contraseña: "password123", etc. |
    | Acción: Clic en el botón "Registrarse"                                                              |

    | OUTPUT                                          |
    | Redirección: A la pantalla 'Iniciar Sesión'     |
    | Mensaje (Opcional): "Registro exitoso"          |