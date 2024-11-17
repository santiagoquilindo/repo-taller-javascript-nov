function crearObjetoDesdePares(pares) {
    return Object.fromEntries(pares)
}

let paresClaveValor = [
    ['nombre', 'Carlos'],
    ['edad', 25],
    ['ciudad', 'Bogotá']
];

let objeto = crearObjetoDesdePares(paresClaveValor);
console.log(objeto);
