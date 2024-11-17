function calcularPromedio(numeros) {

    if (numeros.length === 0) {
      return 'El arreglo está vacío, no se puede calcular el promedio.';
    }
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i]; 
    }
    let promedio = suma / numeros.length;
    return promedio
}


let numeros1 = [10, 20, 30, 40, 50];
  console.log(calcularPromedio(numeros1)); 
  
  let numeros2 = [5, 15, 25];
  console.log(calcularPromedio(numeros2)); 
  
  const numerosVacio = [];
  console.log(calcularPromedio(numerosVacio)); 
  