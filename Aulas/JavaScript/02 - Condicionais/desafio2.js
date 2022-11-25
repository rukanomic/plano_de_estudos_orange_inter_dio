/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis, sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar está viagem.
*/



const precoGasolina = 5.05;
const precoEtanol = 3.63;
const kmPorLitros = 5;
const distanciaKm = 100;
const tipoCombustivel = 'Gasolina';

const etanolOrGasoline = (tipoCombustivel === 'Gasolina');
const litrosConsumidos = distanciaKm / kmPorLitros;

if (etanolOrGasoline){
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log ('O valor gasto em gasolina na viagem será:', valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log ('O valor gasto em etanol na viagem será:', valorGasto.toFixed(2));
}

