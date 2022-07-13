/*Tenemos dos números, un numerador y un denominador. Si el denominador no es
cero, mostramos el resultado de dividir el numerador por el denominador. Si el
denominador es cero, mostramos el mensaje "No se puede dividir por cero".*/

let num1= 5
let num2=3
resultado=num1/num2

if (num2>0) {
    console.log (`Resultado de la división ${resultado}`)
}

else{
    console.log ("No se puede dividir por cero")

}