let suma = 0

do{
    let numero = parseInt(window.prompt('Introduce un número:'))

    /*numero > 0
    ? suma += numero
    : numero === 0
     ?window.alert(suma)
     :window.alert('NO se aceptan números negativos')
     */

     if (numero > 0) {
        suma += numero
     }else if (numero === 0) {
        window.alert(suma)

     }else {
        window.alert('No se aceptan número negativos')
     }


}while (numero !== 0)