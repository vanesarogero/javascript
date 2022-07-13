/*Para convertir de grados centígrados a grados fahrenheit multiplicamos por 9, le
dividimos 5 y a ese resultado le añadimos 32. Para convertir de fahrenheit a
centígrados le restamos 32, multiplicamos por 5 y dividimos entre 9. Pide un valor y
pregunta al usuario si quiere convertirlo a centígrados (si escribe C) o si quiere
convertirlo a fahrenheit (si escribe F) y muestra el valor en pantalla.
*/

let temperatura = parseInt(prompt("Escribe la temperatura"))
let tipo = prompt("¿Deseas convertirlo a Celsius o a Farenheit? (C/F)")
let resultado

if (tipo === "F") {
    resultado = (temperatura * 9 / 5) + 32
    console.log(`La temperatura en Farenheit es ${resultado}`)
} else if (tipo === "C") {
    resultado = (temperatura - 32) * 5 / 9
    console.log(`La temperatura en Celsius es ${resultado}`)
} else {
    console.log("No has especificado un tipo válido")
}