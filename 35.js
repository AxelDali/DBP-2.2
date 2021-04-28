/*35.-  Generar  una  matriz  de  4  filas  y  5  columnas  con  números
aleatorios  entre  1  y  100,  e imprimirla.*/

let matrix = [];
for(let x = 0 ; x < 4 ; x++){
    matrix[x] = [];
    for(let y = 0 ; y < 5 ; y++){
        matrix[x][y] = Math.floor(Math.random() * 100) + 1;
    }
}

console.log(matrix);
