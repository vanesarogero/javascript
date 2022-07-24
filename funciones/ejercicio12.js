/*Escribe una función a la que le pasamos un año y devuelve true si es bisiesto. En el
programa principal, pídele al usuario un número y muestra en pantalla “El año … es
bisiesto” o “El año … no es bisiesto” y sigue pidiendo números y diciendo si es o no
bisiesto hasta que introduzca un 0. Un año es bisiesto si es divisible entre 4, pero no
si es divisible entre 100 pero si es divisible entre 400 sí lo es*/

do {
    let year = parseInt(window.prompt('Introduce un año (AAAA):'))
    window.alert(esBisiesto(year) ? `${year} es un año bisiesto` : `${year} no es un año bisiesto`)
    }while (year !== 0)
    
    
    function esBisiesto (arg1){
        return (arg1 % 4 === 0 && arg1 % 100 !== 0) || arg1 % 400 === 0
    }