function sumarValores(arreglo)  {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma = suma + arreglo[i];
  }
  return suma
}

let numeros = [1, 2, 3, 4, 5];
console.log("Suma de los valores:", sumarValores(numeros));
