/*Pide por teclado la edad del usuario. Si la edad es igual o inferior a 8 mostramos el
mensaje "Pasa al tobogán", si no mostramos "Eres demasiado mayor para usar el
tobogán".*/


let edad=parseInt(window.prompt("Marca tu edad en números"))

if (edad<=8){
    console.log ("Pasa al tobogán")
}
else{
    console.log ("Eres demasiado mayor para usar el tobogán")
}