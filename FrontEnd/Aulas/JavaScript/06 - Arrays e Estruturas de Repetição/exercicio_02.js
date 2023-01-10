// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [8, 9, 3, 7, 85, 16, 4, 6, 63, 57, 48, 105, 108];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    
    if (numero % 2 === 0) {
      console.log(numero);
    }
}
