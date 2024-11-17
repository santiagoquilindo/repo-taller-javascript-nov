function ordenarPorPropiedad(objetos, propiedad) {
    return objetos.sort((a, b) => {
        if (a[propiedad] < b[propiedad]) return -1;
        if (a[propiedad] > b[propiedad]) return 1;
        return 0
    });
}

let personas = [
    { nombre: 'Carlos', edad: 20 },
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Laura', edad: 15 }
];

let personasOrdenadas = ordenarPorPropiedad(personas, 'edad');
console.log(personasOrdenadas);
