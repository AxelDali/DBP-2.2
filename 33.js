/* 33.- Hacer un programa que lea las calificaciones de un alumno
    en 10 asignaturas, las almacene en y calcule e imprima su media. */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let array = [];
let i = 1;
console.log("Ingrese las 10 calificaciones una por linea:")
readline.on('line', cal => {
    array.push((+cal));
    i++;
    if(i > 10){
        let total = 0;
        for(let j = 0; j < array.length; j++) {
            total += array[j];
        }
        avg = total / 10;
        console.log("El promedio de las calificaciones es: " + avg)
        readline.close();
    }
});
