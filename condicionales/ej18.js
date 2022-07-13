/*Mostrar el menor de tres valores*/


let num1 = parseInt(prompt("Escribe un número"))
let num2 = parseInt(prompt("Escribe otro número"))
let num3 = parseInt(prompt("Escribe otro número más"))

if (num1 < num2 && num1 < num3) {
    console.log(`El número menor es ${num1}`)
} else if (num2 < num1 && num2 < num3) {
    console.log(`El número menor es ${num2}`)
} else if (num3 < num1 && num3 < num2) {
    console.log(`El número menor es ${num3}`)
} else {
    console.log(`El número menor es ${num1}`)
}