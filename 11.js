/* 11.-  Imprimir  y  contar  los  múltiplos  de  3  desde  el  uno  hasta  un
    número  que  introducimos  por teclado.*/
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let multiplos = 0
readline.question('Introduzca un número: ', num => {
    for(let i = 1 ; i < num ; i++){
        if(i % 3 == 0){
            console.log(i);
            multiplos++;
        }
    }
    console.log("Entre 1 y " + num + " hay " + multiplos + " multiplos de 3");
    readline.close();
});
