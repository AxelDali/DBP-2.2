/* 21.-  Hacer  un  programa  que  calcule  independientemente  la  suma  de
    los  pares  y  los  impares  de los números entre 1 y 1000.*/
let pares = 0, impares = 0;
for (let i = 1 ; i <= 1000; i++){
    if(i % 2 == 0)
        pares += i;
    else
        impares+=i
}
console.log("\nSuma de los numeros pares: " + pares);
console.log("Suma de los numeros impares: " + impares);
