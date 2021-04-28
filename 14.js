/* 14.-  Hacer  un  programa  que  imprima  el  mayor  y  el  menor  de  una
    serie  de  cinco  números  que vamos introduciendo por teclado.*/
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var array = [];

readline.question('Introduzca 5 números separados por un espacio: ', line => {
    array = line.split(' ').map(Number);
    console.log(array);
    max = Math.max(...array);
    min = Math.min(...array);
    console.log('\nMaximo = ' + max);
    console.log('Minimo = ' + min);    
    readline.close();
});
