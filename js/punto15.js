"use strict";
/* Realiza un script que cuente el número de vocales
 que tiene un texto.*/

 /*
    1 solicitar texto
    2 verificar letra por letra
    3 sumar las vocales
 */

const texto = prompt('Ingrese un texto');

let cantidadDeVocales = 0;
for(let i=0;i<texto.length;i+=1) {
    const letra = texto.at(i).toLowerCase();

    if (
        letra === 'a'||
        letra === 'á'||
        letra === 'e'||
        letra === 'é'|| 
        letra === 'i'||
        letra === 'í'|| 
        letra === 'o'||
        letra === 'ó'|| 
        letra === 'u'||
        letra === 'ú'  
        
        ) 
{
    cantidadDeVocales +=1;
}
 } 
 console.log(cantidadDeVocales);
 