/*Escribe un programa que pida al usuario 3 números. Si el resultado de la suma de
los dos primeros es igual al tercer número, mostrarlo en pantalla, si no mostrar que
el tercero no es la suma de los dos anteriores*/

let num1= parseInt(window.prompt("introduce un número"))
let num2= parseInt(window.prompt("introduce otro número"))
let num3= parseInt(window.prompt("introduce otro número"))

if (num1+num2===num3) {
    console.log (num3)
}
else{
    console.log ("no es la suma de los anteriores")
}