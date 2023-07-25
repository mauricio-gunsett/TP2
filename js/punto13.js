"use strict";
/*Realiza un script que pida un texto y lo muestre en mayúsculas.
*/

let texto = prompt ("Ingresa un texto")
let letra= '';

for( let i=0;i<texto.length;i+=1){
     letra=texto.toUpperCase()
}
console.log(letra)