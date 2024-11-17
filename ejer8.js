let eliminarDuplicados = (arreglo) => {
    return [new Set(arreglo)];

}

let numeros = [1, 2, 3, 1, 2, 4, 5];
console.log(eliminarDuplicados(numeros)); 

let numeros1 = [1, 2, 3, 8, 8, 9, 10, 10, 1, 2, 4, 5];
console.log(eliminarDuplicados(numeros1)); 