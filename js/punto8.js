"use strict";
/*Crea script para generar pirámide siguiente 
con los números del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456
 */
let numero;
    numero=prompt("Ingrese un número del 1 al 50")
let num1=Number(numero);

    if (isNaN(numero)|| numero<1 || numero>50 ){
        alert("Ingrese un numero dentro del rango")
    } else {
        
     for (let i = 1 ; i <= num1; i++){
         let cadena='';
     for (let j = 1; j <= i; j++){
            cadena+=j;
        }
        console.log(cadena)
        }
            
    }
    



