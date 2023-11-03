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

let nombreDeArticulos = articulos.map((articulo)=>articulo.nombre)
console.log(nombreDeArticulos);