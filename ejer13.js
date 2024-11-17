let personas = [
    { nombre: 'Carlos', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 28 },
    { nombre: 'Maria', edad: 22 }
];
function buscarPersona(nombreBuscado, arregloPersonas) {
    for (let i = 0; i < arregloPersonas.length; i++) {
        if (arregloPersonas[i].nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
        return arregloPersonas[i]
        }
    }
    return `Persona con el nombre ${nombreBuscado} no fue encontrada.`
}
console.log(buscarPersona('Carlos', personas)); 

console.log(buscarPersona('Maria', personas)); 

console.log(buscarPersona('Pedro', personas)); 

function buscarPersona(nombreBuscado, arregloPersonas) {
    return arregloPersonas.find(persona => persona.nombre.toLowerCase() === nombreBuscado.toLowerCase()) || `Persona con el nombre ${nombreBuscado} no fue encontrada.`
}


