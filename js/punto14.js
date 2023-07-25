"use strict";
/*Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter 
sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”. */

let texto;
texto = prompt("ingrese un texto");
 let cadena= '';
for (let i = 0;i < texto.length; i++){
   
    cadena += texto[i]
    if (i < texto.length - 1) {
        cadena += "-";
      }
}
console.log(cadena);