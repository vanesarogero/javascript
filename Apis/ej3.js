// pedir por un el por un input id peticion un numero al usuario
//fetch .then[] .then []
// cuando hace click es cuando hacemos la peticion al servidor
//comic, fecha de publicacion, titulo.
let contenido=document.getElementById("peticionusuario").value
let peticionusuario=parseint("")

fetch('https//xkcd.com/614/info.0.jsonndex.com/books/').then (function recogerLlamada(respuesta)
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
