/*4. Personajes de Rick Y Morty por planeta
a. Utilizar la base de datos de Rick y Morty (disponible en
https://rickandmortyapi.com/documentation), para obtener la lista de planetas
y mostrarlos en un dropdown (etiqueta select).
b. Cuando el usuario elige una opción, se muestra en un alert la opción
elegida..
c. En vez de mostrar el alert, hacer una petición fetch para ver los personajes
que están en ese planeta y mostrarlos en un div debajo del dropdown.
d. Hacer la petición fetch en cuanto se selecciona una opción diferente, sin
utilizar el botón (buscar en internet documentación sobre eventos que se
ejecutan cuando se cambia la selección*/

fetch('https://rickandmortyapi.com/api/locationapi').then (function recogerLlamada(respuesta)
let array=[]
{respuesta.json()})
.then(function guardarDatos(datos)=>array=datos.result) {

    let impresion=''
    for (let i = 0 i< array.length; i++) {
        impresion += `<div class="card">
            <img src="${array[i].formarts["image/jpeg"]}"
            <h3>${array[i]title}</h3>
            <p>${array[i].authors[0].name}</p>
            </div>`
        }
        let respuesta=document.createElemente("div")
        respuesta.setAttribute("class", "container")
        document.body.appendChild(respuesta)
        respuesta.innerHTML=impresion
        
    }
}