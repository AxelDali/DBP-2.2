/*37.-Cargar las notas de los alumnos de un colegio en función del número de
cursos y del número de alumnos por curso. */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let matrix = [];
let i = 0;
let j = 0;
readline.question('Número de cursos: ', cursos => {
    for(let x = 0 ; x < cursos ; x++){
        matrix[x] = [];
    }
    readline.question('Número de alumnos: ', alumnos => {
        console.log("Agregar las calificaciones de cada curso, una por linea");
        console.log("\nCurso " + (i+1));
        readline.on('line', cal => {
            matrix[i][j] = cal;
            j++;
            if(j == alumnos){
                i++;
                if(i == cursos && j == alumnos){
                    console.log(matrix)
                    readline.close();
                }
                else {
                    console.log("\nCurso " + (i+1));
                    j = 0;
                }
            }
        });
    });
});
