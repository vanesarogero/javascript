/*Escribe un programa que muestre la fecha de hoy (pista 1: hay una función, pista 2:
no hay que usar condicionales)
*/

let fecha = new Date()
console.log(`${fecha.getDate()} / ${fecha.getMonth()+1} / ${fecha.getFullYear()}`)