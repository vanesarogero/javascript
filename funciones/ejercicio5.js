/*/*Escribe una función a la que le damos dos números y que devuelva true si el primer
número es más grande que el segundo número y false en el caso contrario. ternario

 Pide dos
números al usuario, y pasalos a la función. Muestra en consola
ternario  “El primer número es
más grande” o “El primer número no es más grande”.*/
let num1= parseInt(window.prompt("Escribeme un número"))
let num2= parseInt(window.prompt("Escribeme otro número"))

names(num1, num2) 
?console.log ("el primer número es mayor")
:console.log ("el primero número no es mayor")

function names(agr1, agr2) {
   return agr1>agr2 ? true : false
}


//solucion
let nu1 = parseInt(window.prompt('Introduce un número:'))
let nu2 = parseInt(window.prompt('Introduce otro número:'))

esMayor(nu1,nu2)
?console.log('El primer número es más grande')
:console.log('El primer número NO es más grande')



function esMayor(arg1,arg2){
    return arg1 > arg2 ? true : false

}