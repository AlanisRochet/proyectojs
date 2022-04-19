class unidad{
    constructor(ingrediente, cantidad){
        this.ingrediente=ingrediente;
        this.cantidad= cantidad;
    }
}
let listaDeIngredientes= [];

const agregarPlato = ()=> {
    let ingrediente = prompt("que contenia el plato?(agregue por unidad)");
    let cantidad= parseFloat(prompt("Cuantos gramos?"));
    let total= new unidad(ingrediente, cantidad);
    listaDeIngredientes.push(total);
}
console.log(listaDeIngredientes)