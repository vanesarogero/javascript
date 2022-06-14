//Crear un array. Usar un for para pedir 3 valores al usuario y guardarlos en el mismo.
//Comparar los 3 valores del array y mostrar en pantalla el más pequeño.
let array=[]

for (let i = 0; i <3 ; i++) {
    
    array.push(parseInt(window.prompt("escribe un valor")))
    
    console.log(math.min(array[0], Array[1],array[2]))
}