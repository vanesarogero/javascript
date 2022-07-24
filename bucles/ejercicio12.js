

        let cifra = window.prompt('Introduce un número de tres cifras')
        let sumaa = 0

        console.log(
            parseInt(cifra.substring(0, 1)) +
            parseInt(cifra.substring(1, 2)) +
            parseInt(cifra.substring(2))
        )

        for (let i = 0; i < cifra.length; i++){
            sumaa += parseInt(cifra.substring(i, i+1))
        }

        console.log(sumaa)