Feature: US22 - Estado del objeto encontrado

Scenario: Visualizar estado de un objeto en la lista
  Given que un usuario ha publicado un objeto encontrado
  When otro usuario visualiza la lista de "Publicaciones"
  Then la publicación muestra claramente el estado y detalles del objeto.

  Examples:
    | INPUT                                     |
    | Acción: Cargar la pantalla 'Publicaciones' |

    | OUTPUT                                    |
    | Elemento 1: Etiqueta de estado "En posesión" visible. |
    | Elemento 2: Campo "Sede: San Miguel" visible.          |
    | Elemento 3: Campo "De: Juana Margarita" visible.       |