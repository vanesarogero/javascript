let ran=Math.floor(Math.random()*(500-1)+1)
fetch(`https://api.disneyapi.dev/characters/14`).then((respuesta)=>respuesta.json()).then((datos)=>){
    
let respuesta=document.createlement("div")
    respuesta.innerHTML=`(img src="${datos.imagenUrl}"alt="${datos.name}"/>)`
}