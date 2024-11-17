let personas = [
    { nombre: 'Carlos', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 28 },
    { nombre: 'Maria', edad: 22 }
];
function eliminarPersona(nombreBuscado, arregloPersonas) {

    const indice = arregloPersonas.findIndex(persona => persona.nombre.toLowerCase() === nombreBuscado.toLowerCase());

    if (indice !== -1) {
        arregloPersonas.splice(indice, 1);
        return `La persona ${nombreBuscado} fue eliminada`;
    } else {
        return `La persona con el nombre ${nombreBuscado} no fue encontrada`
    }
}
let personas1 = [
    { nombre: 'Carlos', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 28 },
    { nombre: 'Maria', edad: 22 }
];

console.log(eliminarPersona('Luis', personas1));
console.log(personas1);
console.log(eliminarPersona('Pedro', personas1));