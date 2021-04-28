// 29.- Simular cien tiradas de dos dados y contar las veces que suman 10.
let veces = 0
for(let i = 0 ; i < 100 ; i++){
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    if(dado1 + dado2 == 10)
        veces++;
}
console.log("Veces en que la suma de los dados fue igual a 10: " + veces);
