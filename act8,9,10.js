/*La cajera de un super mercado necesita implementar un algoritmo que le imprima en pantalla el precio con descuento de 
un producto.
Si el precio del producto es 100 y el porcentaje de descuento es 20%,el precio del producto con descuento es 80.
El programa debe imprimir en pantalla:Su producto tiene un precio de 80, el descuento fue del 20%.*/

let precio=100;
let cantPor=20;
let descuento=precio-((precio*cantPor)/100);
console.log("Su producto tiene un precio de: "+descuento+" , el descuento fue de "+cantPor+"%");

//Obtener el valor de un promedio de cinco números. Una vez obtenido el valor,imprimir el resultado en pantalla.
const array = [1,8,3,1,5];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
let prom=sum/array.length;
console.log("El promedio del valor es: "+prom);


/*Crear una variable con el valor del diámetro de un círculo.A partir de ese valor, 
calcular su perímetro. Por último, imprimir en pantalla el resultado.
*/
let diametro=8;
const perimetro= diametro* Math.PI;
console.log("Perimetro: "+perimetro);
