function escrevaMeuNome(nome) {
  return 'Meu nome é:', nome;
}



function classificarIdade(idade) {
    if (idade >= 18) {
        return('Você é maior de idade');
    } else {
        return('Você é menor de idade');
    }
}

console.log(escrevaMeuNome('Ruka'));
console.log(classificarIdade(25));