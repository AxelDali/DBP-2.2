// 27.- Realizar la tabla de multiplicar de un numero entre 0 y 10.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un número: ', num => {
    if(num < 0 || num > 10){
        console.log("El numero tiene que estar entre 0 y 10")
    }
    else{
        for(let i = 1 ; i <= 10 ; i++){
            console.log(num + "x" + i + "= " + num*i)
        }
    }
    readline.close();
});
