do {
    let opcion = window.prompt('introduce una opción (P) Pares o (I) Impares:').toUpperCase()
    if (opcion !== 'I'  &&  opcion !== 'P') {
      window.alert('Opción no válida. Introduce P o I')
    } else {
      for (let i = 0; i <= 100; i ++) {
          if ( i % 2 === 0 && opcion === 'P') {
              console.log(i)
          } else if ( i % 2 === 1  && opcion === 'I') {
              console.log(i)
          }
      }
    }
  
  }while (opcion !== 'P'  && opcion !== 'I')
  