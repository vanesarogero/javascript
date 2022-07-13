/*Bob es un adolescente vago, en una conversación sus contestaciones son muy
limitadas:
a. Bob responde: “¡Claro!” si le haces una pregunta
b. Bob responde “¡Eh!, tranquilízate.” si le gritas
c. Bob responde “¡Eh, tranquilízate! Yo sé lo que hago.” Si le haces una
pregunta gritándole.
d. Bob responde “Vale con que esas tenemos...” Si no le dices nada
e. Bob responde “Sin más.” a cualquier otra cosa
(Consideramos una frase una pregunta si contiene un símbolo de ?,
consideramos un grito una frase que contenga un !, consideramos una
pregunta gritando si tiene tanto el símbolo ? como el !, y consideramos no
decir nada una cadena de texto vacía)*/

let texto = window.prompt("Dile algo a Bob")

if (texto.indexOf('?') != -1 && texto.indexOf('!') != -1) {
    console.log("Bob responde: '¡Eh, tranquilizate! Yo sé lo que me hago'")
} else if (texto.indexOf('?') != -1) {
    console.log("Bob responde: '¡Claro!'")
} else if (texto.indexOf('!') != -1) {
    console.log("Bob responde: '¡Eh, tranquilízate!'")
} else if (texto == "") {
    console.log("Bob responde: 'Con que esas tenemos...'")
} else {
    console.log("Bob responde: 'Sin más'")
}