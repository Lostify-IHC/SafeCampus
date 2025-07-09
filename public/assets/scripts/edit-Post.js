

document.addEventListener('DOMContentLoaded', function() {
  
  const urlParams = new URLSearchParams(window.location.search);
  const itemName = urlParams.get('item');


  const titleElement = document.getElementById('item-title');
  if (itemName) {
    titleElement.textContent = itemName;

    const allPostsData = JSON.parse(localStorage.getItem('publicacionesData')) || {};
    

    let itemData = null;
    for (const id in allPostsData) {
        if (allPostsData[id].objeto === itemName) {
            itemData = allPostsData[id];
            break;
        }
    }
    
    if (itemData) {
      document.getElementById('sede').value = itemData.sede || '';
      document.getElementById('area').value = itemData.area || '';
      document.getElementById('fecha').value = itemData.fecha || '';
      document.getElementById('descripcion_objeto').value = itemData.descripcion || itemData.descripcion_objeto || '';
      document.getElementById('descripcion_hallazgo').value = itemData.hallazgo || itemData.descripcion_hallazgo || '';
      document.getElementById('estado').value = itemData.status || 'pendiente';
    }
  }


  const form = document.getElementById('edit-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();


    const allPostsData = JSON.parse(localStorage.getItem('publicacionesData')) || {};


    let targetPostId = null;
    for (const id in allPostsData) {
        if (allPostsData[id].objeto === itemName) {
            targetPostId = id;
            break;
        }
    }

 
    if (targetPostId) {
        allPostsData[targetPostId].sede = document.getElementById('sede').value;
        allPostsData[targetPostId].area = document.getElementById('area').value;
        allPostsData[targetPostId].fecha = document.getElementById('fecha').value;
        allPostsData[targetPostId].descripcion = document.getElementById('descripcion_objeto').value;
        allPostsData[targetPostId].hallazgo = document.getElementById('descripcion_hallazgo').value;
        allPostsData[targetPostId].status = document.getElementById('estado').value;
    }


    localStorage.setItem('publicacionesData', JSON.stringify(allPostsData));

    alert('¡Cambios guardados para ' + itemName + '!');
    window.location.href = 'Posts.html';
  });
});