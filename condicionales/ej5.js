/*Pide al usuario que escriba un día de la semana (lunes, martes…). Mostrar en
pantalla el día que dice que es si es entre lunes y viernes (Por ejemplo "Hoy es
lunes") y si es fin de semana mostrar "Es fin de semana". Hazlo una vez usando
switch y otra con if else.
*/
let semana= (window.prompt("introduce un día de la semana").toLowerCase())

if (semana===lunes ||semana===martes ||semana===miercoles||semana===miércoles||semana===jueves||semana===viernes){
    console.log(`Hoy es ${semana}`)
}elseif (semana===sabado ||semana===sábado ||semana===domingo){
    console.log ("Hoy es fin de semana")
}else{
    console.log ("No has introducido ningún día de la semana, hazlo para que funcione mi programa")
}

switch (semana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "miércoles":
    case "jueves":
    case "viernes":
        console.log(`Hoy es ${semana}`)

break;
    case "sabado":
    case "sábado":
    case "domingo":
        console.log("Hoy es fin de semana")

    default:
            console.log ("No has introducido ningún día de la semana, hazlo para que funcione mi programa")
}
