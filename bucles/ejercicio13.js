let fecha = window.prompt('Introduce tu fecha de nacimiento (DD/MM/AAAA):')

let num =
    parseInt(fecha.substring(0, 2)) +
    parseInt(fecha.substring(3, 5)) +
    parseInt(fecha.substring(6)).toString()

let suma = 0

do {
    suma = 0
    for (let i = 0; i < num.lenght; i++) {
        suma += parseInt(num.substring(i, i + 1))
    }

    num = suma.toString()
}while (suma.lenght > 1)

console.log(suma)