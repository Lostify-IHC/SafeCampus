Feature: US23 - Notificación de recuperación

Scenario: Recepción de notificación de recuperación
  Given que el usuario encontró su objeto perdido
  When el usuario confirma que ha recuperado completamente el objeto
  Then el sistema le envía una notificación a su cuenta.

  Examples:
    | INPUT                                               |
    | Acción del usuario: Confirmar recuperación del objeto "Calculadora". |

    | OUTPUT                                              |
    | Notificación recibida: "Tu objeto 'Calculadora' ha sido recuperado con éxito". |