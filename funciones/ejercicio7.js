/*Diseña una función esPar() que reciba como parámetro un número y devuelva si ese
número es par o no. Utilízalo en un programa que lea un número por prompt y
determine si es par o no y muestre un mensaje al respecto en un alert.ternario
*/
let num1= parseInt(window.prompt("Escribeme un número"))
function name(arg1) {
    return (num1%2=0)
? window.alert("esPar el numero")
: window.alert ("no es par el número")
}


//solucion
let number = parseInt(window.prompt('Introduce un número:'))

window.alert(esPar(number) ?'El numero es PAR.' :'El número es IMPAR.')


function esPar (arg1){
    return arg1 % 2 === 0

}
