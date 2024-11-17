function contieneNumero(arreglo, numero) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === numero) {
            return true; // Devuelve true si el número se encuentra en el arreglo
        }
    }
    return false; // Devuelve false si el número no está en el arreglo
}

// Ejemplo de uso
const numeros = [2, 4, 6, 8, 10];
const numeroABuscar = 8;

if (contieneNumero(numeros, numeroABuscar)) {
    console.log("Si está");
} else {
    console.log("no está");
}
