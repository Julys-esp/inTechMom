/*
traer la clase Tienda del punto 8 de la práctica de Objetos y Ciclos.
Agregarle un método con la sguiente cabecera estaAbierto(hora).
Este retorna true si la hora enviada está entre las 08 y 13, o entre las 14 y 18.Caso contrario,se retorna false
*/
class Tienda {
    constructor(hora){
        this.hora=hora
    }
    estaAbierto(){
        if (this.hora>=8 && this.hora<=13 ) {
            return true
    
        }else if(this.hora>=14 && this.hora<=18){
            return true

        }
         else {
            return false
        }    
    }
  }


  const hora1= new Tienda(9);
  const hora2= new Tienda(19);
console.log(hora1.estaAbierto());
console.log(hora2.estaAbierto());