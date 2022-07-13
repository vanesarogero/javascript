/* Resultado de carrera. Hacer varios programas en los que se le pregunta al usuario el
puesto en el que acabó. Después:
a. Si el valor de puesto es 1 mostramos mensaje con "Ganaste", si no "Lo
importante es participar”.
b. Si el valor de puesto es 1, mostramos mensaje con "Medalla de oro", si el
valor de puesto es 2, mostramos el mensaje con "Medalla de plata", si es 3
"Medalla de bronce" y al resto "Lo importante es participar.
c. Con switch: Si el valor de puesto es 1, mostramos mensaje con "Medalla de
oro", si el valor de puesto es 2, mostramos el mensaje con "Medalla de
plata", si es 3 "Medalla de bronce" y al resto "Lo importante es participar.
d. Los puestos 1, 2 y 3 ven el mensaje "Sube al podium", el resto ven el
mensaje "Se acabó la carrera". Hazlo usando un if/else.*/
let posicion=parseInt(window.promt("introduce tu puesto"))
    posicion=1
    ?console.log ("ganaste")
    : console.log ("Lo importante es participar:")

    if (posicion===1){
        console.log ("Medalla de oro")
    }
    else if (posicion===2){
        console.log ("Medalla de plata")
    }
    else if (posicion===3){
        console.log ("Medalla de bronce")
    }
    else {
        console.log ("Lo importante es participar")
            }
   
    switch (posicion){
       case1: console.log ("Medalla de oro")
       break;
       case2: console.log ("Medalla de plata")
       break;
       case3: console.log ("Medalla de bronce")
       break;
       default:posicion
                console.log ("Lo importante es participar")
            }

    if (posicion>0 && posicion=<3){
        console.log "sube al podium"
    }
    else {
        console.log ("Se acabo la carrera")
    }
    

     