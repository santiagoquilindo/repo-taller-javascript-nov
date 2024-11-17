function filtrarPorPropiedad(objetos, propiedad) {
    return objetos.filter(objeto => objeto.hasOwnProperty(propiedad))
}

let personas = [
    { nombre: 'Carlos', edad: 20 },
    { nombre: 'Ana', edad: 17, ciudad: 'Bogotá' },
    { nombre: 'Juan', ciudad: 'Medellín' },
    { nombre: 'Laura', edad: 15 }
];

let conEdad = filtrarPorPropiedad(personas, 'edad');
console.log(conEdad);
