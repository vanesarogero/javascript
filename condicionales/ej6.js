/*Escribe un programa que pida un número y muestre ese número al cuadrado y al
cubo (multiplicado por sí mismo dos y tres veces). Si el número es menor que 1, no
calcules el cubo ni el cuadrado.
*/
let num1= parseInt(window.prompt("introduce un número"))

if (num1<1){
    console.log(`Este sería el cuadrado del ${num1}:${num1**}`)
    console.log(`Este sería el cubo del ${num1}:${Math.pow(num1, 3)}`)
}
else{
    console.log("No puedo trabajar con un numero menor de 1, introduce otro número")
}