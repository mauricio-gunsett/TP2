"use strict";
/*Realiza un script que pida cadenas de texto 
 hasta que se pulse “cancelar”. 
 Al salir con “cancelar” deben mostrarse todas
  las cadenas concatenadas con un guión -.

Nota: usar confirm()
 https://www.w3schools.com/jsref/met_win_confirm.asp
 */

 // let i=0;
//  while(i<6){
// console.log(i+1);
// i+= 1;
//  }
let cadena= '';
while (true) {
    let texto = prompt("Ingrese texto");
    if(texto===null) {
        break;
    }

    
    cadena = cadena + '-' + texto;
    
}
console.log(`cadena : ${cadena}`);