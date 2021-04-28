// 9.- Introducir un número por teclado y que diga si es positivo o negativo.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduzca un número: ', num => {
    if(num > 0)
        console.log(num + ' es positivo');
    else if(num == 0)
        console.log(num + ' es cero');
    else
        console.log(num + ' es negativo');
    readline.close();
});
