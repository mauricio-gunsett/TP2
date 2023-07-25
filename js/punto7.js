"use strict";

/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
 */
let numero;
numero = prompt('ingrese un número');
let num = Number(numero)


if (isNaN(numero)|| numero<1 || numero>50 ){
  alert("Ingrese un numero dentro del rango")
} else {

for(let i = num; i>0; i--) {
   let cadena = '';
  
   for (let j = 0; j < i; j++) {
     cadena += i;
   }
   console.log(cadena);
 
 }
}