"use strict";

/*Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
 */

/* PEDIR EDADES
    PERDIR NOMBRES
    ANALIZAR EDADES
    INDICAR LA MAYOR
*/

let nombre1;
nombre1 = prompt("Ingrese su nombre");
let edad1;
edad1 = prompt("Ingrese su edad");

let nombre2;
nombre2 = prompt("Ingrese su nombre");
let edad2;
edad2 = prompt("Ingrese su edad");

let nombre3;
nombre3 = prompt("Ingrese su nombre");
let edad3;
edad3 = prompt("Ingrese su edad");

let num1 = Number(edad1);
let num2 = Number(edad2);
let num3 = Number(edad3);

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  alert("En edad debes ingresar un número");
} else {
  let mayor = Math.max(num1, num2, num3);

  if (mayor === num1) {
    console.log(`El mayor es: ${nombre1}`);
  } else if (mayor === num2) {
    console.log(`El mayor es: ${nombre2}`);
  } else {
    console.log(`El mayor es: ${nombre3}`);
  }
}



