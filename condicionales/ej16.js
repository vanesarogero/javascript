/*Con if else if: Mostrar en pantalla un menú con varias opciones. Dependiendo de lo
que el usuario elija, mostrar en pantalla la selección. Hacerlo tanto con if else como
con switch.
*/
let premio = (window.prompt(`Tienes dos premios: 
A) es una sorpresa 
B) es una furgoneta... 
Sólo puedes elegir una opción. ¿Qué opción eliges?`
)).toLowerCase()




if (premio==='a'){
    console.log('Tu premio es un 1000€')
}else if (premio ==='b'){
    console.log(`... Tienes que viajar en la furgo con tu familia.`)
}else {
    console.log(`Opción no válida. Elige "a" o "b"`)
}