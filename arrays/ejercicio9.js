////no fui capaz de hacerlo
let array=[0,1,2,3,4,5,6,7,8,9]

do{
    numero=parseInt(window.prompt("introduce un número entre 0y 9"))
    numero>=0 &&numero>=9
        ? console.log (array[numero]), (array[numero]=array[numero]*2)
        : console.log ('eres muy tonto')

}while(numero>=0)

