Feature: US21 - Inicio de sesión de usuarios

Scenario: Inicio de sesión con credenciales correctas
  Given que el usuario tiene una cuenta registrada y está en la pantalla de "Iniciar Sesión"
  When el usuario ingresa su "Correo institucional" y "Contraseña" correctos
  And presiona el botón "Iniciar Sesion"
  Then el sistema lo autentica correctamente y le da acceso a la pantalla principal.

  Examples:
    | INPUT                                        |
    | Correo institucional: "usuario@upc.edu.pe"   |
    | Contraseña: "Clave123"                       |
    | Acción: Clic en el botón "Iniciar Sesion"    |

    | OUTPUT                                       |
    | Redirección: A la pantalla 'Mis Publicaciones' |
    | Estado: Usuario autenticado                  |