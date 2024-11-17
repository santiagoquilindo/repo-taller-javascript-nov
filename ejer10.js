function buscarIndice(arreglo, valor) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valor) {
            return i
        }
    }
    return -1
}

// Eje:
let arreglo = [10, 20, 30, 40, 50];
let valorBuscado = 10;
let indice = buscarIndice(arreglo, valorBuscado);

console.log(indice); 

