function contarPares(arreglo) {
    let contadorPares = 0;
    for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
        contadorPares++;
}
    }
    return contadorPares;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("total pares", contarPares(numeros));