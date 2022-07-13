/*Escribe un programa que dada una frase sacará su carácter central. Nota:
a. Si la largura de la frase es par deberá sacar los dos caracteres centrales
correspondientes.
b. Si es impar deberá sacar su único carácter central.
*/

let frase = window.prompt('Introduce una frase')
let mitad = frase.length/2

mitad % 2 === 0
?console.log(frase.substring(mitad-1,mitad+1))
:console.log(frase.substring(parseInt(mitad),parseInt(mitad)+1))