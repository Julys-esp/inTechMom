//Con el siguiente array realiza las operaciones que se presentan a continuación:
let people=["Ana","Carolina","Laura","Natalia","Fernanda"];

//a. Usando un for loop itera el array e imprime el nombre de cada persona.
for (let i = 0; i <people.length; i++) {
    console.log(people[i]);
    
}


//b. Escribe el comando para eliminar a Carolina del array.Imprime en pantalla la variable people

people.splice(1,1);
console.log(people);

//c. Escribe el comando para eliminar a Fernanda. Imprime en pantalla la variable people.

people.pop();
console.log(people);

// d. Escribe el comando para agregar a Francisco al array. Imprime en pantalla la variable people

people.push("Francisco");
console.log(people);

// e. Escribe el comando para agregar tu nombre al final del array. Imprime en pantalla la variable people
people.push("Julissa");
console.log(people);

//f. Escribe el comando para retornar el indice de Natalia(indexOf) e imprimelo en pantalla.

 console.log("Indice de Natalia: "+people.indexOf("Natalia"));

/*g.Hay 2 formas para acceder al indice de tu nombre(que es el último valor del array), describe cuáles son
Uno de ellos es usando indexOf, que nos devolverá el índice del elemento que le pasemos como parámetro si el elemento está en el array.
Tambien usando lastIndexOf devuelve el último índice en el que un cierto elemento puede encontrarse
*/
console.log("Indice de Julissa: "+people.indexOf("Julissa"));
console.log("Indice de Julissa: "+people.lastIndexOf("Julissa"));


