/* 6.- Hacer un programa que imprima todos los números naturales que hay desde
    el uno hasta un número que introducimos por teclado.*/
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Introduzca un número: ', num => {
    for(let i = 1 ; i < num ; i++)
        console.log(i);
    readline.close();
});
