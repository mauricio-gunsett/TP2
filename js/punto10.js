"use strict";

/*10- Realiza un script que pida número de filas y columnas
 y escriba una tabla. 
 Dentro de cada una de las celdas
  deberá escribirse un número consecutivo en orden descendente.
  Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Mat
*/


let fila;
fila = prompt('Ingrese el número de la fila');
let columna;
columna = prompt('Ingrese el numero de la columna');

let fila1 = Number(fila);
let columna2 = Number (columna);

let numero = fila * columna;


for(let i = 0; i < fila; i++) {

    let fila = '';

    for(let j = 0; j < columna; j++) {
        const numeroCelda = Math.max(numero - i - j, 0);
        fila += numeroCelda + "\t";
      }
console.log(fila);
}