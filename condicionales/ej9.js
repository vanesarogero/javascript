/*Un programa que te pregunta la temperatura que hace donde estás y te sugiere qué
hacer dependiendo de ella. Las recomendaciones son:
a. Si hace más de 40 grados, vete a otro sitio
b. Entre 30 y 40 grados, enciende el aire acondicionado
c. Entre 30 y 20 grados, no hagas nada 
d.Entre 10 y 20 grados, enciende la calefacción
e. Si hace menos de 10 grados, vete a otro sitio
*/
let temp =parseInt (window.prompt ("¿qué temperatura hace?"))
      switch (temp){
        case temp>40: 
         console.log ("Vete a otro sitio")
         break;
        case temp>=40 && temp<30:
        console.log ("enciende el aire acondicionado")
        break;
        case (temp=<30) && (temp<20):
        console.log ("no hagas nada")
        break;
        case (temp=<20) && (temp<10):
        console.log ("enciende la calefacción")
        break;
        case (temp=<10):
        console.log ("vete a otro sitio")
        break;    
      } 