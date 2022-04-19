let peso = parseInt(prompt("¿Cuanto pesas?"));
let medida = parseInt(prompt("¿Cuantos medis?"));

function imc(peso, medida) {
    let imc = (peso / (medida * 2));

    if (imc < 18.5) {
        alert("bajo peso");
    } 
    else if (imc < 25) {
        alert("Normal");
    } 
    else if (imc < 30) {
        alert("Sobrepeso");
    } 
    else {
        alert("Obesidad");
    }
}

imc(peso, medida)
console.log(imc)