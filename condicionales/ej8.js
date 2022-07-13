/*Escribe un programa que pida dos números al usuario. Después muestra un
mensaje que dice cómo se relacionan entre los dos. Por ejemplo si escribe 5 y 7 ,
muestra "5 es menor que 7".*/

let num1= parseInt(window.prompt("introduce un número"))
let num2= parseInt(window.prompt("introduce otro número"))

if (num1>num2) {
    console.log (`El número${num1}>${num2}`)
}
else{
    console.log (`El número${num2}>${num1}`)
}