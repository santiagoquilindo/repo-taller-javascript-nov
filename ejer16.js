function agregarPersona(personas, nuevaPersona) {
    personas.push(nuevaPersona);
    return personas
}

let personas = [
    { nombre: 'Carlos', edad: 20 },
    { nombre: 'Ana', edad: 17 }
];

let nuevaPersona = { nombre: 'Juan', edad: 25 };

let personasActualizadas = agregarPersona(personas, nuevaPersona);
console.log(personasActualizadas);
