let numero = parseInt(window.prompt('Introduce un número:'))

let impresion = ''

for (let i = 1; i < numero; i++) {
    console.log(`${impresion+='*'}`)
}