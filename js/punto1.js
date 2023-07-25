"use strict";
/* Escribir un programa que solicite la edad
 y si es mayor de 18 años
  mostrar un mensaje que ya puede conducir,
 si la edad ingresada no es un número válido
  indicarlo en un mensaje.
 */
 
let edad;
edad = prompt("Ingrese su edad");

let numero=Number(edad);


if(isNaN(numero)) {
    console.log("No ingreso un número. Por favor, ingrese un número");  
} else if (numero>=18) {
    console.log("Ya puedes conducir")
} else {
    console.log("No puede conducir")
}

