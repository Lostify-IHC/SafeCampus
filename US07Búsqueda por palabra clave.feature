Feature: US07 - Búsqueda por palabras de objetos

Scenario: Búsqueda por palabra clave
  Given que el usuario está en la pantalla de "Publicaciones"
  When el usuario escribe una palabra clave en la barra de búsqueda
  And presiona el ícono de lupa
  Then la lista se actualiza para mostrar las publicaciones que coinciden.

  Examples:
    | INPUT                                    |
    | Texto en barra de búsqueda: "Celular"    |
    | Acción: Clic en el ícono de lupa         |

    | OUTPUT                                   |
    | Resultado: La lista de publicaciones se filtra, mostrando solo objetos que contienen "Celular". |