let estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]

function saludarEstudiantes (estudiante) {
    console.log(`Hola ${estudiante}`);
}

while (estudiantes.length > 0) {
    console.log(estudiantes);
    let estudiante = estudiantes.shift(); // shift lo que hace es que cada vez que se cumpla la condición va a ir sacando ese elemento del array
    saludarEstudiantes(estudiante)
}