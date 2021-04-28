/* 31.-  Hacer  un  programa  que  nos  permita  introducir  un  número  por
    teclado  y  sobre  él  se  realicen las  siguientes  operaciones:
    comprobar  si  es  primo,  hallar  su  factorial  o
    imprimir  su  tabla  de multiplicar. */

function factorial(n){
    if(n == 0 || n == 1)
        return 1;
    else{
        return n * factorial(n-1);
    }
}

function isPrime(num) {
    if (num <= 3)
        return num > 1;

    if ((num % 2 === 0) || (num % 3 === 0))
        return false;

    let count = 5;
    while (Math.pow(count, 2) <= num) {
        if (num % count === 0 || num % (count + 2) === 0)
            return false;
    count += 6;
  }

  return true;
}

function tabla(num){
    for(let i = 1 ; i <= 10 ; i++){
        console.log(num + "x" + i + "= " + num*i)
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un número: ', num => {
    console.log("1. Comprobar si es primo");
    console.log("2. Factorial");
    console.log("3. Tabla de multiplicar")
    readline.question('Opción: ', opc => {
        if(opc < 1 || opc > 3)
            console.log("Opción no valida")
        else{
            if(opc == 1){
                let primo = isPrime(num)
                if(primo)
                    console.log(num + " es un numero primo")
                else
                    console.log(num + " no es un numero primo")
            }
            else if(opc == 2){
                console.log("\nfactorial(" + num + ") = " + factorial(num))
            }
            else if(opc == 3){
                tabla(num)
            }
        }
        readline.close();
    });
});
