/*Crea un programa para ver si los comerciales reciben un extra. Si venden más de
500 euros, les damos un extra del 5% del total de lo que han vendido. El usuario
introduce su nombre y el precio de las ventas. Muestra en pantalla su nombre,
seguido de las ventas y en el caso de que las ventas superen 500 euros el 5% de las
ventas como extra.
 */

let nombre = prompt("Indica tu nombre")
let ventas = parseInt(prompt("Indica la cantidad que has vendido en euros"))
let extra = 0

if (ventas > 500) {
    extra = ventas * 0.05
    console.log(`${nombre}, has vendido ${ventas}€ y has ganado un extra de ${extra}€`)
} else {
    console.log(`${nombre}, has vendido ${ventas}€`)
}