let transformarNombresAMayusculas = (nombres) => {
    return nombres.map(nombre => nombre.toUpperCase());
};

let nombres = ['Ana', 'Pedro', 'María', 'Juan'];
let nombresEnMayusculas = transformarNombresAMayusculas(nombres);
console.log(nombresEnMayusculas); 
