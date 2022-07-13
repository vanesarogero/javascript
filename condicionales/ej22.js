/* Escribe un programa para una empresa de alquiler de coches. Tendremos que
preguntar al usuario la edad. Si el usuario es menor de 18, no podrá alquilar un
vehículo y se lo diremos en pantalla. En caso de ser mayor de edad, le preguntamos
si tiene carnet de conducir. Si la respuesta es negativa, no podrá alquilar un coche y
se lo advertiremos por pantalla. Si es mayor de edad le pediremos tanto nombre
como apellido , ciudad de recogida del vehículo y número de días que quiere alquilar
el coche (el alquiler del coche por día tiene un coste de 25 euros y en caso que lo
alquile una semana, el coste será de 150 euros). Imprimir por pantalla los datos del
cliente que vaya a alquilar el coche y el coste total del alquiler.*/

let edad = parseInt(window.prompt('Introduce tu edad:'))


if (edad >= 18){
     let carnet = window.prompt('¿Tienes carnet de conducir?').toLowerCase()
     if ((carnet=== 'si')) {
          let persona = window.prompt('Introduce tu nombre y apellidos')
          let ciudad = window.prompt('Indica ciudad de recogida del vehículo')
          let duracion = window.prompt('Indica por cuántos días quieres alquilarlo')
          let semanas = parseInt(duracion/7)

          window.alert(`Solicitud Aprobada. ${persona}, puedes recoger tu vehículo en ${ciudad} para tus próximos ${duracion} días-
               El alquiler tendrá un coste de ${
                    semanas > 1 ? semanas*150 + (duracion - (semanas *7) *25) :duracion*25}€`)
               } else {
                    window.alert('No puedes alquilar sin carnet')
               }
          }else {
               window.alert('No puedes alquiler siendo menor de edad.')
          }
