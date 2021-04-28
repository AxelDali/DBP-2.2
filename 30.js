/* 30.-  Introducir  dos  números  por  teclado  y  mediante  un  menú,
    calcule  su  suma,  su  resta,  su multiplicación o su división. */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Número 1: ', num1 => {
    readline.question('Número 2: ', num2 => {
        console.log("1. Suma");
        console.log("2. Resta");
        console.log("3. Multiplicación")
        console.log("4. División")
        readline.question('Opción: ', opc => {
            let resultado = 0;
            if(opc < 1 || opc > 4)
                console.log("Opción no valida")
            else{
                if(opc == 1){
                    resultado = (+num1) + (+num2)
                    console.log(num1 + " + " + num2 + " = " + resultado);
                }
                else if(opc == 2){
                    resultado = (+num1) - (+num2)
                    console.log(num1 + " - " + num2 + " = " + resultado);
                }
                else if(opc == 3){
                    resultado = (+num1) * (+num2)
                    console.log(num1 + " * " + num2 + " = " + resultado);
                }
                else if(opc == 4){
                    resultado = (+num1) / (+num2)
                    console.log(num1 + " / " + num2 + " = " + resultado);
                }
            }
            readline.close();
        });
    });
});
