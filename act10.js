/*
Dado el objeto, Obtener e imprimir por separado el valorde 3 propiedades usando notación de punto y de corchetes
*/
const lion={
    species:"panthera leon",
    foots:4,
    hasTail:true,
    weight:"190 kg",
    isMammal:true,
    };
    
    console.log("Species: "+lion.species);
    console.log("Is mammal? "+lion["isMammal"]);
    console.log("Number of foots: "+lion.foots);