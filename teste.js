 
 
let peso = 68;
let altura= 1.67;
const imc = peso / (altura * altura);
 
 
function calcularIMC() {
   console.log(`Este é o valor do IMC calculado: ${imc.toFixed(2)}`);
    classificarIMC();
 }


function classificarIMC() {
    if (imc < 18.5) {
        console.log('Abaixo do peso');
    }else if (imc >= 18.5 && imc < 25) {
        console.log('Peso normal')
    }else if (imc>= 25 && imc < 30) {
        console.log('Sobrepeso');
    }else {
        console.log('Obsidade');
    }
}

calcularIMC();
