// function encontrarNumeroMayor(arreglo) {
//     if (arreglo.length === 0) {
//         return null; 
//     }

//     let numeroMayor = arreglo[0];

//     for (let i = 1; i < arreglo.length; i++) {
//         if (arreglo[i] > numeroMayor) {
//             numeroMayor = arreglo[i];
//         }
//     }

//     return numeroMayor;
// }


// let numeros = [3, 7, 2, 15, 6];
// console.log(encontrarNumeroMayor(numeros)); 

function encontrarNumeroMayor(arreglo) {
    if (arreglo.length === 0) {
        return null; 
    }

    let numeroMayor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > numeroMayor) {
            numeroMayor = arreglo[i];
        }
    }

    return numeroMayor;
}


let numeros = [3, 7, 2, 15, 6];
console.log(encontrarNumeroMayor(numeros)); 