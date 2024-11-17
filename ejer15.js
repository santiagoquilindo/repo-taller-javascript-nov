function filtrarMayoresDeEdad(personas) {
    return personas.filter(persona => persona.edad >= 18)
}

let personas = [
    { nombre: 'Carlos', edad: 20 },
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Laura', edad: 15 }
];

let mayoresDeEdad = filtrarMayoresDeEdad(personas);
console.log(mayoresDeEdad);
