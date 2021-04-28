// 13.- Imprimir y contar los números múltiplos de 2 o de 3 entre 1 y 100.
let mult2 = 0, mult3 = 0;
for (let i = 1 ; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
        mult2++;
        if(i % 3 == 0)
            mult3++;
    }
    else if(i % 3 == 0){
        console.log(i);
        mult3++;
    }
}
console.log("\nMultiplos de 2 entre 1 y 100: " + mult2);
console.log("Multiplos de 3 entre 1 y 100: " + mult3);
