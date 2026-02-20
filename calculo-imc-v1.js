
// Obter o elementos 
// Tratar os dados (converter, exibir os dados de forma correta)
// Fazer os cálculos

function calcularIMC() {
    // Capturar os valores dos campos de entrada
    const peso = parseFloat(document.getElementById('weight').value);
    const altura = parseFloat(document.getElementById('height').value);
    const resultado = document.getElementById('resultText');
  
    // Validar os dados de entrada
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      resultado.textContent = 'Por favor, insira valores válidos.';
      return;
    }
  
    // Calcular o IMC
    const imc = peso / (altura * altura);
    let classificacao;
  
    // Classificar o IMC
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }
  
    // Exibir o resultado
    resultado.textContent = 'Seu IMC é ' + imc.toFixed(2) + ' (' + classificacao + ').';
  }
  
  function limparCampos() {
    // Resetar o formulário e o texto de resultado
    document.getElementById('imcForm').reset();
    document.getElementById('resultText').textContent = 'Preencha os campos e clique em "Calcular".';
  }
  