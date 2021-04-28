/* 39.-  Crear  una  tabla  de  3  paginas,  4  filas  y  5  columnas  donde  el
    primer  elemento  valga  1,  el segundo 2 y así sucesivamente. */

let matrix = [];
let i = 1;
for(let x = 0 ; x < 3 ; x++){
    matrix[x] = [];
    for(let y = 0 ; y < 4 ; y++){
        matrix[x][y] = [];
        for(let z = 0 ; z < 5 ; z++){
            matrix[x][y][z] = i;
            i++;
        }
    }
}

console.log(matrix);
