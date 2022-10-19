class Producto {

    constructor(nombre, codigo, cantidad, costo) {

        this.nombre = nombre;
        this.costo = costo;
        this.codigo = codigo;
        this.cantidad = cantidad;
        this.next = null;

    }

    info(){
        return `Nombre = ${this.nombre}, codigo = ${this.codigo}, cantidad = ${this.cantidad}, costo = ${this.costo}`;
    }
    
}



class Nodo{
    constructor(producto){
        this.producto = producto;
        this.next = null;
    }
}

class Inventario{
    constructor(){
        this.primero = null;
    }

//Codigo agregar productos


agregar(producto){
   
    if(this.primero == null){
        this.primero = producto;
    } else {
        let temp = this.primero;
            while (temp.next != null){
                temp = temp.next;
            }
                temp.next = producto;
    }
}
   
//Codigo eliminar productos

eliminar(codigo) {
    if (this.primero != null) {
        if (this.primero.codigo === codigo) {
            this.primero = this.primero.next;
                return true;
        }  else {
            let prod = this.primero;
             while (prod.next != null) {
                if (prod.next.codigo === codigo) {
                    let nextDel = prod.next.next;
                    prod.next = nextDel;
                    return true;
                } else {
                    prod = prod.next;
                }
            }
        }
    }
    return false;
}
//Codigo buscar productos

buscar(codigo){ 
    let temp = this.primero;
        while (temp != null) {
            if(Number(temp.codigo)== Number(codigo)){ 
                return temp;
        } else {
            temp = temp.next;
        }
}
    return null;
}


//Codigo listar productos

listar(){   
    if (this.primero != null) {
        return recorrerListar(this.primero);
    } return "No existen productos";
         function recorrerListar(producto){
            if(producto.next == null) {
                return `${producto.info()}`;
            } else {
                return `${producto.info()}\n${recorrerListar(producto.next)}`;
        }
     }
 }

//RecorrerInverso

recorrerInverso(nodo){
    if(nodo.next == null)
        return `${nodo.info()}`
        return `${this.recorrerInverso(nodo.next)} ${nodo.info()}`; 
}


//Codigo listar inverso

listarInverso(){
    if(this.primero == null){
        return null;
    } else {
        let prod = "";
            prod = this.recorrerInverso(this.primero);
                return prod;
    }
}

//Insertar

insertarPosicion(posicion, nuevo){
    if(posicion <= 1){
        if(this.primero != null){
            nuevo.next = this.primero;
        this.primero = nuevo;
            return true;
            
    } else {
        this.primero = nuevo;
                return true;
        
    }

} else {
    let temp = this.primero, contador = 1;
        while(temp.next != null){
            if((contador + 1) == posicion){
                nuevo.next = temp.next;
                temp.next = nuevo;
                return true;
            } else {
                temp = temp.next;
                contador += 1;
            }
        }
        return false;
}    
}
}




