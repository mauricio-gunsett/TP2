"use strict";
/* 
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1

*/

let texto = prompt("ingrese un texto");

for (let i = 0; i<texto.length; i+=1){
   let letra =texto.charAt(i).toLowerCase();
   if(letra==='a'||
      letra==='e'||
      letra==='i'||
      letra==='o'||
      letra==='u'||
      letra==='á'||
      letra==='é'||
      letra==='í'||
      letra==='ó'||
      letra==='ú'
   ){
      console.log ("La vocal", letra, "esta en la posición", i);
      break;
   }
}