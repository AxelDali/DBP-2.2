// 24.- Comprobar si un número mayor o igual que la unidad es primo.

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

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Ingrese un número: ', num => {
    if(num < 1){
        console.log("El numero tiene que ser mayor o igual a 1")
    }
    else{
        let primo = isPrime(num)
        if(primo)
            console.log(num + " es un numero primo")
        else
            console.log(num + " no es un numero primo")
    }
    readline.close();
});
