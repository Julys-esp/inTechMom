/*
Usar el comando slice para hacer una copia del array que no contenga los dias “lunes”ni“jueves”.
3.Imprimir en pantalla el índice del día miércoles.
.
*/
const weekDays = ["lunes","martes","miercoles","jueves","viernes"];
const onlyDays = weekDays.slice(-4,4);
console.log(onlyDays); 

// Indice del dia miercoles
console.log("Indice de dia Miercoles: "+ weekDays.indexOf("miercoles"));

//Vamos a eliminar el día martes y en su lugar agregar el día domingo con ayuda del comando splice
weekDays.splice(1,1,"Domingo");
console.log(weekDays);