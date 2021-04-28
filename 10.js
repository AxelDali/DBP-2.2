// 10.- Introducir un número por teclado y que nos diga si es par o impar.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduzca un número: ', num => {
    if(num % 2 == 0)
        console.log(num + ' es un número par');
    else
        console.log(num + ' es un número impar');
    readline.close();
});
