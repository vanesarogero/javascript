fetch('https://gutendex.com/books/').then (function recogerLlamada(respuesta)

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