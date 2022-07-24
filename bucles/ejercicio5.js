/*Escribe un programa que muestre el resultado de sumar todos los números del 1 hasta el
número introducido y que vuelva a pedirle al usuario otro número hasta que el usuario
introduzca un 0.
*/




do{
    let numero = parseInt(window.prompt('Introduce un número;'))
    let suma = 0
    for (let i = 1; i <= numero; i++) {
        suma += i

    }
    console.log(`El resultado de sumar ${numero} y todos los anteriores a él es ${suma}`)
}while(numero !== 0)

console.log('Fin del programa')   

