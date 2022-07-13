/*Un año es bisiesto si se puede dividir por 4. Pero un año que se pueda dividir por
100 NO es bisiesto a no ser que se pueda dividir por 400. A partir de un año, mostrar
en pantalla si es bisiesto o no.
 */

let year = parseInt(prompt("Indica un año"))

if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) ) {
    console.log(`El año ${year} es bisiesto`)
} else {
    console.log(`El año ${year} no es bisiesto`)
}