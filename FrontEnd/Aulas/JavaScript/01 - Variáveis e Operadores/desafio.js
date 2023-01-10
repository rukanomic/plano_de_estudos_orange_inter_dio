/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis, sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;
*/

const preco_combustivel = 4.89;
const kmPorLitros = 5;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitros;
const valorGasto = litrosConsumidos * preco_combustivel;
console.log (valorGasto.toFixed(2));
