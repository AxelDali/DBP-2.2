/* 15.-  Introducir  dos  números  por  teclado.  Imprimir  los  números
    naturales  que  hay  entre  ambos números  empezando  por  el  más  pequeño,
    contar  cuántos  hay  y  cuántos  de  ellos  son  pares.
    Calcular la suma de los impares.*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Número 1: ', num1 => {
    readline.question('Número 2: ', num2 => {
        if(num1 > num2){
            let aux = num1;
            num1 = num2;
            num2 = aux;
        }
        let pares = 0;
        let impares = 0;
        sumaImpar = 0;
        for(let i = (+num1) ; i < (+num2) ; i++){
            console.log(i);
            if(i % 2 == 0)
                pares++;
            else{
                impares++;
                sumaImpar += i;
            }
        }
        console.log("\nNúmeros pares: " + pares);
        console.log("Números impares: " + impares);
        console.log("Suma de los números impares: " + sumaImpar);
        readline.close();
    });
});
