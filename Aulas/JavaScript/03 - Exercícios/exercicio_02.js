/* 2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre
a condição de peso de uma pessoa adulta.

Formula do IMC:

IMC: peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condições:
- Abaixo de 18.5 está abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

const peso = 82.3,
  altura = 1.77;

const imc = peso / Math.pow(altura, 2);
console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
  console.log("Você está abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Seu peso está normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Você está acima do peso");
} else if (imc >= 30 && imc <= 40) {
  console.log("Você está obeso");
} else {
  console.log("Sua obseividade está grave");
}
