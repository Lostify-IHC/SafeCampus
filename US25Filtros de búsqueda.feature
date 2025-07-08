Feature: US25 - Filtros de búsqueda

Scenario: Aplicación de filtros de búsqueda
  Given que el usuario está en la pantalla de "Publicaciones"
  When el usuario presiona el ícono de menú de filtros (≡)
  And selecciona los parámetros de filtro deseados
  Then la lista de publicaciones se actualiza mostrando solo los resultados que coinciden.

  Examples:
    | INPUT                                             |
    | Acción: Clic en el ícono de menú de filtros (≡)   |
    | Selección: Sede = "San Miguel"                    |

    | OUTPUT                                            |
    | Resultado: La lista se filtra y solo muestra publicaciones de la sede "San Miguel". |