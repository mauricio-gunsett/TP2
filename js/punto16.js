"use strict";
/*Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”. */

let texto=prompt("Ingrese un texto");
let letra = '';
for (let i=texto.length -1;i>=0;i-=1){
  letra +=texto[i].toLowerCase();
 

}
console.log(letra)