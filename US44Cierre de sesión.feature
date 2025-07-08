Feature: US44 - Cierre de sesión

Scenario: Cierre de sesión
  Given que el usuario ya ha iniciado sesión en la aplicación
  When presiona el botón "Cerrar Sesión" del menú de navegación
  Then el sistema cierra la sesión y lo redirige a la pantalla de inicio.

  Examples:
    | INPUT                                    |
    | Acción: Clic en el botón "Cerrar Sesión" |

    | OUTPUT                                   |
    | Redirección: A la pantalla de inicio     |
    | Estado: Sesión terminada (no autenticado) |