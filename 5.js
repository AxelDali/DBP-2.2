/* 5.-Hacer  un  programa  que  imprima  los  números  impares  hasta  el  100
    y  que  imprima  cuantos impares hay.*/
let impares = 0;
for (let i = 1 ; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i);
        impares++;
    }
}
console.log("\nNumeros impares: " + impares);
