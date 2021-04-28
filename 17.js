/* 17.-  Imprimir,  contar  y  sumar  los  múltiplos  de  2  que  hay  en  una
    serie  de  números,  tal  que  el segundo sea mayor/igual que el primero.*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Número 1: ', num1 => {
    readline.question('Número 2: ', num2 => {
        if(num1 > num2){
            console.log("El segundo número tiene que ser mayor o igual que el primero");
            readline.close()
        }
        else{
            let pares = 0;
            sumaPar = 0;
            for(let i = (+num1) ; i < (+num2) ; i++){
                if(i % 2 == 0){
                    console.log(i);
                    pares++;
                    sumaPar += i;
                }
            }
            console.log("\nMúltiplos de 2: " + pares);
            console.log("Suma de los múltiplos: " + sumaPar);
            readline.close();
        }
    });
});
