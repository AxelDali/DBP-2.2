/* 36.- Generar una matriz de 4 filas y 5 columnas con números aleatorios
    entre 1 y 100, y hacer su matriz transpuesta.*/

let matrix = [];
for(let x = 0 ; x < 4 ; x++){
    matrix[x] = [];
    for(let y = 0 ; y < 5 ; y++){
        matrix[x][y] = Math.floor(Math.random() * 100) + 1;
    }
}

let transpuesta = []
for(let x = 0 ; x < 5 ; x++){
    transpuesta[x] = [];
    for(let y = 0 ; y < 4 ; y++){
        transpuesta[x][y] = matrix[y][x];
    }
}

console.log("\nMatriz original: ");
console.log(matrix);
console.log("\nMatriz transpuesta: ");
console.log(transpuesta);
