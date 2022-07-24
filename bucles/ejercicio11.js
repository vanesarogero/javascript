do {
    let numero = window.prompt('Introduce un número:')
    let inverso = ''

    for (let i = 0; i < numero.length; i++) {
        inverso += numero.substring(numero.length - i, (numero.length - i) +1)
    }

    console.log(inverso)
}while (numero !== '0')