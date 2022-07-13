/*Escribe un programa que pida dos números y que muestre la suma, la resta, la
multiplicación, la media, el más grande y el más pequeño*/

let num1= parseInt(window.prompt("introduce un número"))
let num2= parseInt(window.prompt("introduce otro número"))

if (num1>0 && num2>0) {
    

console.log(`La suma es ${num1+num2}`)
console.log(`La resta es ${num1-num2}`)
console.log(`La multiplicacion es ${num1*num2}`)
console.log(`La división es ${num1/num2}`)
console.log(`El resto es ${num1%num2}`)
console.log(`Esta es la media: ${(num1+num2)/2}`)

}
if (num1>num2) {
    console.log (`${num1} es mayor que ${num2}`)
    
}
else{
    console.log (`${num2} es mayor que ${num1}`)
}





