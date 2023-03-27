/*
1.Teniendo el array 
Iterar por todos los elementos del array hasta que llegue al día jueves, imprimir por consola `llegamosaldia${[nombreDelItem]}`
y después salir del loop
*/

const weekDays=['lunes','martes','miercoles','jueves','viernes'];

for (let i = 0; i < weekDays.length; i++) {
    if (weekDays[i]=="jueves") {
        console.log("Llegamos al dia:"+ weekDays[i]);
    }
    
}