/*
Declarar un clase Tienda que permita registrar:
Nombredelatienda.Direccióndelatienda.Propietariodelatienda.Rubrodelatienda
*/
class Tienda {
    constructor(nombre, direccion, propitario, rubro) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.propitario = propitario;
      this.rubro = rubro;
    }
  }

const tienda1= new Tienda("tienda 1","direccion 1","propietario 1","rubro 1");
const tienda2= new Tienda("tienda 2","direccion 2","propietario 2","rubro 2");
const tienda3= new Tienda("tienda 3","direccion 3","propietario 3","rubro 3");
const tienda4= new Tienda("tienda 4","direccion 4","propietario 4","rubro 4");
const tienda5= new Tienda("tienda 5","direccion 5","propietario 5","rubro 5");
console.log("Tienda 1: "+tienda1.nombre+" "+tienda1.direccion);
console.log("Tienda 2: "+tienda2.nombre+" "+tienda2.propitario);
console.log("Tienda 3: "+tienda3.nombre+" "+tienda3.rubro);