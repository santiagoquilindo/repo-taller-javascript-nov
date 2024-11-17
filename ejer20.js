function agruparPorPropiedad(objetos, propiedad) {
    return objetos.reduce((grupo, objeto) => {
        let clave = objeto[propiedad];
        if (!grupo[clave]) {
            grupo[clave] = [];
        }
        grupo[clave].push(objeto);
        return grupo
    }, {});
}

let personas = [
    { nombre: 'Carlos', edad: 20 },
    { nombre: 'Ana', edad: 17 },
    { nombre: 'Juan', edad: 25 },
    { nombre: 'Laura', edad: 20 },
    { nombre: 'Pedro', edad: 17 }
];

let agrupadasPorEdad = agruparPorPropiedad(personas, 'edad');
console.log(agrupadasPorEdad);
