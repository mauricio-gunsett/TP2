"use strict";
/* Escribir un programa que 
solicite una nota (número) de 0  a 10.
Luego mostrar la calificación 
en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango
de 0 a 10 mostrar un mensaje de “número erróneo”. 
Si el número ingresado no es válido mostrar 
el mensaje “Introduce un número válido”.

Ejemplo:
Input: 5  Output: Suficiente
Input: 50  Output: Número erróneo
Input: hola10  Output: Introduce un número válido */

let nota;
nota = prompt("Ingrese un número de 0 a 10");

let numero = Number(nota);
if(isNaN(numero)){
    console.log("Introduce un número válido");
} else if(!(numero >= 0 && numero<=10)) {
 console.log("Número erróneo")
} else {

// if(numero >=0 && numero<=2) {
//     console.log("Muy deficiente");
// } else if (numero<=4) {
//     console.log("Insuficiente");
// } else if (numero<=6){
//     console.log("Suficiente");
// } else if (numero===7){
//     console.log("Bien");
// } else if (numero<=9){
//     console.log("Notable");
// } else {
//     console.log("Sobresaliente");
// }
switch (numero) {
    case 0:
    case 1:
    case 2:{
        console.log('Muy deficiente');
        break;
    }
    case 3:
    case 4: {
        console.log("Insuficiente");
        break;
    }
    case 5:
    case 6: {
        console.log("Suficiente");
        break;
    }
    case 7: {
        console.log("Bien");
        break;
    }
    case 8:
    case 9:{
        console.log("Notable");
        break;
    }
    case 10:{
        console.log("Sobresaliente");
        break;
    }
    default: {
        console.log("Introduce un número válido");
    }
}
}