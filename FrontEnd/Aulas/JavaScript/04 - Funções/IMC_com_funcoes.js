function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function diagnosticoImc(imc) {
  if (imc < 18.5) {
    return "Você está abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Seu peso está normal";
  } else if (imc >= 25 && imc < 30) {
    return "Você está acima do peso";
  } else if (imc >= 30 && imc <= 40) {
    return "Você está obeso";
  } else {
    return "Sua obseividade está grave";
  }
}

// Main - Anônima invocada imediatamente
(function main() {
    const peso = 82.3,
    altura = 1.77;
  
  const imc = calcularImc(peso, altura);
  console.log("IMC:", imc.toFixed(2));
  console.log(diagnosticoImc(imc));
})();

// Também  é possível declarar a função como Main