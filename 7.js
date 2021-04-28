// 7.- Introducir tantas frases como queramos y contarlas.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let i = 0;
console.log("Para salir del programa escriba SALIR")
readline.on('line', frase => {
    if(frase == "SALIR"){
        console.log("Escribiste " + i + " frases")
        readline.close();
    }
    else {
        i++
    }
});
