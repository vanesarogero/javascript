/*Escribe un programa que pida al usuario dos números. 
Usa esos 2 números en una
función que divide el primero por el segundo y devuelve el resultado. 
Muestra el
resultado que devuelve la función en un alert. 
Después vuelve a pedir los números y
hacer todo otra vez hasta que el usuario introduzca un 0 como segundo número.
/*/

let num1= parseInt(window.prompt("Escribeme un número"))
let num2= parseInt(window.prompt("Escribeme otro número"))
dividirnum = 0
dividir (num1,num2)
window.alert (dividirnum)

do {
    
} while (num2=0);

function dividir(params) {
    return dividirnum =num1/num2
}

//solucion

let nu1 = 0
let nu2 = 0

do { 
    let nu1 = parseInt(window.prompt('Introduce un número:'))
    let nu2 = parseInt(window.prompt('Introduce otro número:'))
    if (nu2 !== 0){
window.alert(divide(nu1,nu2))
    }

} while (nu2 !== 0)


function divide(arg1,arg2) {
    return (arg1/arg2)
     
}
