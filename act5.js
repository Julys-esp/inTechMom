//Haz un algoritmo que cuente el número de veces que aparece la letra r en la frase 
//“Erre con erre cigarro erre con erre barril rápido ruedan los carros cargados de azúcar del ferrocarril”.
//Imprime el resultado en pantalla

var word ="Erre con erre cigarro erre con erre barril rápido ruedan los carros cargados de azúcar del ferrocarril";
var count=0;
for (let i = 0; i < word.length; i++) {
    if (word[i].includes("r")) {
        count ++;
        
    }
    
}
console.log("Número de veces:"+ count);
