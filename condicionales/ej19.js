/*En una clase tienes tres exámenes, con un valor de 5 puntos máximo en cada uno.
La nota final es la mejor nota de los dos primeros exámenes más la nota del tercer
examen. Crea un programa que con tres notas calcula el resultado de nota final con
los siguientes rangos:
a. 10 es matrícula
b. 9 y hasta 10 es sobresaliente
c. 7 y hasta 9 es notable
d. 6 y hasta 7 es bien
e. 5 y hasta 6 es suficiente
f. 0 hasta 5 es suspenso*/

let notas1 = parseInt(prompt("Escribe la nota del primer examen")) 
let notas2 = parseInt(prompt("Escribe la nota del segundo examen"))
let examenFinal = parseInt(prompt("Escribe la nota del examen final"))
let mejorExamen = notas1

if (notas1 > notas2) {
    mejorExamen = notas2
}

let notaFinal = mejorExamen + examenFinal

if (notaFinal < 5) {
    console.log("Tu calificación es: Suspenso")
} else if (notaFinal < 6) {
    console.log("Tu calificación es: Suficiente")
} else if (notaFinal < 7) {
    console.log("Tu calificación es: Bien")
} else if (notaFinal < 9) {
    console.log("Tu calificación es: Notable")
} else if (notaFinal < 10) {
    console.log("Tu calificación es: Sobresaliente")
} else {
    console.log("Tu calificación es: Matrícula de Honor")
}