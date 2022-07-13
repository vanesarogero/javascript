/*Escribe un programa que pida al usuario tres números y que diga si la diferencia
entre uno de ellos es exactamente 20 menos que uno de los otros. Por ejemplo, si el
usuario introduce 20, 40 y 55, el programa dirá que el primer número es 20 menos
que el segundo.*/

let num1= parseInt(window.prompt("introduce un número"))
let num2= parseInt(window.prompt("introduce otro número"))
let num3= parseInt(window.prompt("introduce otro número"))

if (num1-num2===20) {
    console.log(`Entre ${num1} y ${num2} hay una diferencia de 20`)
}
elseif  (num1-num3===20){
    console.log(`Entre ${num1} y ${num3} hay una diferencia de 20`)
}
elseif (num2-num3===20){
    console.log(`Entre ${num2} y ${num3} hay una diferencia de 20`)
}
else{
    console.log("No hay una diferencia de 20 entre ningún número introducido")
}

