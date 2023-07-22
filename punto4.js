"use strict";

/* Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

// pedir número
// verificar que sea un número
// sumar números
// mostrar reusltados en cadena 

let numero;

let guardado= 0;
let num=Number(numero);

while(true) {
num = prompt('ingrese un número');

if(isNaN(num)){
    alert("Ingresa un número");
    continue;
} else if (num===null){
    break;
}
guardado +=1;
}
console.log(` la summa es ${guardado}`);
