/*Escribe una función que devuelva el resultado de sumar los dos parámetros que le
pasamos. Pide al usuario 2 números. Usa esos 2 números como parámetros de la
función y después asigna el valor que devuelve la función a una tercera variable.
Finalmente, muestra el valor de la variable en la consola.*/
let num1= parseInt(window.prompt("Escribeme un número"))
let num2= parseInt(window.prompt("Escribeme otro número"))
//let suma=0
function name(num1,num2) {
    let suma= num1+num2 
    console.log (suma)

    
}
//solucion
let nu1 = parseInt(window.prompt('Introduce un número:'))
let nu2 = parseInt(window.prompt('Introduce otro número:'))
let nu3 = 0

suma(nu1,nu2)

console.log(nu3)



function suma(arg1,arg2){
   nu3=arg1+arg2    
}
