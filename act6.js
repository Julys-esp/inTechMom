/*
Codificardosfunciones:
Luego crear una nueva función cotizar Moneda(moneda),
la cual recibe un valor de si quiere cotizar pesos o dolares,
en la que dependiendo de la moneda ingresada,
se llame a la función correspondiente.
*/
//Lo hice con MXN mi moneda
function cotizarDolar(pesos) {
    return pesos*18.09;
}

function cotizarPesos(dolar) {
    return dolar/18.09;
}

function cotizarMoneda(cant, mon) {
    if (mon=="pesos") {
        console.log("Valor en Dolares: "+cotizarDolar(cant));
    } else if(mon=="dolar"){
        
        console.log("Valor en Pesos: "+cotizarPesos(cant));
    } else{
        console.log("Ingrese una moneda valida");
    }
}

cotizarMoneda(1,"pesos");