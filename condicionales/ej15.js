/*Decir el número de helados que queremos comprar. Cada helado vale 2 euros. Si
compramos más de 10 helados, nos regalan uno. Mostrar en pantalla el número de
helados que nos dan y cuánto hemos pagado por ellos. (Sólo damos un helado
gratuito aunque compren muchos más helados que 10)
*/

let helados = parseInt(window.prompt('Cuántos helados quieres?'))
    
helados>10
    ?console.log(`Te llevas ${helados+1} helados, y pagas ${helados*2}€`)
    :console.log(`Te llavas ${helados} helados y pagas ${helados*2}€`)