paises = [
  {
    pais: "españa",
    poblacion: 47450795,
    color: "red",
    superficie: 505944,
    bandera: "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg"
  },
  {
    pais: "francia",
    poblacion: 67407241,
    color: "blue",
    superficie: 675417,
    bandera: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg"
  },
  {
    pais: "alemania",
    poblacion: 83155031,
    color: "yellow",
    superficie: 375375,
    bandera: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
  },
  {
    pais: "italia",
    poblacion: 60257566,
    color: "green",
    superficie: 301340,
    bandera: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
  },
  {
    pais: "portugal",
    poblacion: 10295909,
    color: "DarkGreen",
    superficie: 92090,
    bandera: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
  },
  {
    pais: "irlanda",
    poblacion: 4857000,
    color: "DarkOrange",
    superficie: 70273,
    bandera: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg"
  },
]
let pais1 = window.prompt('Introduce el nombre de un país de la U.E:')
  let pais2 = window.prompt('Introduce el nombre de un país de la U.E:')
  let pais3 = window.prompt('Introduce el nombre de un país de la U.E:')


  //Creamos un array vacio donde meteremos las tres respuestas del usuario, serán 3 indices (0, 1 y 2) que se corresponderán con los tres paises extraidos del objeto incial 'paises'
    let paisesFinal = []

  // Llamamos a la funcion 3 veces, y en cada una de esas llamadas, metemos la respuesta en el nuevo array paisesFinal[]

  paisesFinal.push(buscarPais(pais1, pais2, pais3))
  paisesFinal.push(buscarPais(pais2, pais3, pais1))
  paisesFinal.push(buscarPais(pais3, pais1, pais2))
  
  
  if (paisesFinal.length === 3){
    let impresion = ""
    for (let paisBueno in paisesFinal){
        impresion +=
        `<div id = "${paisesFinal[paisBueno].pais}" class = "card">
            <img src ="${paisesFinal[paisBueno].bandera}" alt = "${paisesFinal[paisBueno].pais}"></img>
            <h3>${paisesFinal[paisBueno].pais}</h3>
            <p>Población: ${paisesFinal[paisBueno].poblacion}</p>
            <p>Superficie: ${paisesFinal[paisBueno].superficie}</p>
            <button id ="${paisesFinal[paisBueno].pais+'button'}" type="button">ClickMe!</button>
        </div>`
    }
    let div = document.createElement('div')
    div.classList.add('container')
    div.innerHTML = impresion
    document.body.appendChild(div)

    // creamos Listener

    for (let paisBueno in paisesFinal){
        document.getElementById(paisesFinal[paisBueno].pais +'button').addEventListener('click', () =>(
        document.getElementById(paisesFinal[paisBueno].pais).style.backgroundColor = `${paisesFinal[paisBueno].color}`
        ))
    }

  }else {
    let h3 = document.createElement('p')
    h3.innerText = `Tienes que elegir tres países únicos d ela lista`
    document.body.appendChild (h3)
        
}
  
  
  
  
  
  function buscarPais (p1, p2, p3){
    for (const entrada in paises) {
        if (paises[entrada].pais === p1 && p1 !== p2 && p1 !== p3){
            return paises[entrada]
        }  
    }
  }