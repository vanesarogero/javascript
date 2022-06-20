/*Crea una aplicación que nos cuente el número de cifras de un número entero
positivo (hay que confirmar que no haya introducido un número negativo y
deberemos quitar los decimales) pedido por teclado. Crea un método que realice
esta acción: pasando el número por parámetro, devolverá el número de cifras.
Después mostrar ese número en un alert.
*/
let num1= math.abs(parseInt(window.prompt("Escribeme un número")))
window.alert(contar contarCifras(num))

function contarCifras(parame) {
    return num.tostring().length
}