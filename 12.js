/* 12.- Hacer un programa que imprima los números del 1 al 100 y que calcule la
    suma de todos los números pares y de todos los impares.*/
let pares = 0, impares = 0;
for (let i = 1 ; i <= 100; i++){
    console.log(i);
    if(i % 2 == 0)
        pares += i;
    else
        impares+=i
}
console.log("\nSuma de los numeros pares: " + pares);
console.log("Suma de los numeros impares: " + impares);
