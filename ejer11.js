let reemplazarElemento = (arreglo, valorActual, nuevoValor) => {
    let indice = arreglo.indexOf(valorActual);

    if (indice !== -1) {
        arreglo[indice] = nuevoValor;
    } else {
        console.log('el valor no se necuentra');
    }

    return arreglo
};

let frutas = ['pera', 'limon', 'uva', 'pera'];
let resultado = reemplazarElemento(frutas, 'uva', 'sopa');

console.log(resultado); 
