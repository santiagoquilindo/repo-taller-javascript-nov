// 6.	Contar palabras en una cadena: Crea una función que cuente cuántas palabras hay en una cadena de texto.

function contarPalabras(cadena) {
    // Divide la cadena en palabras utilizando el método split() y crea un arreglo con las palabras.
    const palabras = cadena.split(" "); 
    
    let contar = palabras.length;
    return contar;
}


console.log (contarPalabras("text diario de sobre peso"));


const texto = "buen dia";
console.log(contarPalabras(texto)); 