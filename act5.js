/*
Codificar tres funciones: Una función entrada(),la cual solicite un valor al usuario y lo retorne.
Una función procesamiento(valor),donde se transforme la entrada.
Una función salida(valor),la cual mostrará el resultado por alerta.
Luego,invocar las tres funciones. La llamada de las funciones debe coincidir con dicho orden.
*/

function entrada(valor) {
    return valor;
}

function procesamiento(valor) {
    return entrada(valor)*2;
}

function salida(valor) {
    console.log(procesamiento(valor));
}

console.log(entrada(4));
console.log(procesamiento(4));
salida(4);