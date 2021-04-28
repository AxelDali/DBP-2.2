// 20.- Calcular el factorial de un número, mediante funciones.

function factorial(n){
    if(n == 0 || n == 1)
        return 1;
    else{
        return n * factorial(n-1);
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un número: ', num => {
    console.log("\nfactorial(" + num + ") = " + factorial(num))
    readline.close();
});
