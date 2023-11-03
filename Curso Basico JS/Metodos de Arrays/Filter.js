let articulos = [
    {
        nombre: "Bici",
        costo: 3000,
    },
    {
        nombre: "Tv",
        costo: 2500
    },
    {
        nombre: "Libro",
        costo: 320
    },
    {
        nombre: "Celular",
        costo: 10000
    },
    {
        nombre: "Laptop",
        costo: 20000
    },
    {
        nombre: "Teclado",
        costo: 500
    },
    {
        nombre: "Audifonos",
        costo: 1500
    }
]

// FILTER

let articulosFiltrados = articulos.filter((articulo) => articulo.costo > 1500)

console.log(articulosFiltrados);

