Feature: US35 - Moderación de contenido

Scenario: Rechazo de una publicación con contenido no permitido
  Given que un usuario ha enviado una publicación para revisión
  When el sistema determina que la publicación no es apropiada
  Then el sistema envía una notificación al usuario informando sobre el rechazo.

  Examples:
    | INPUT                                   |
    | Evento del sistema: Publicación marcada como "inapropiada". |

    | OUTPUT                                  |
    | Notificación recibida por el usuario: "Tu publicación fue rechazada por no cumplir las normas." |