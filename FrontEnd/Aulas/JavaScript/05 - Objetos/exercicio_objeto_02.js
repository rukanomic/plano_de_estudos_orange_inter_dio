/*
    2) Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altua * altura));
    Instancie uma pessoa chamada José que tenha 70Kg de peso e 1,75 de altura e peça ao José para dizer o valor
    do seu IMC;
*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularImc() {
    return this.peso / Math.pow(this.altura, 2);
  }

  classificarImc() {
    const imc = this.calcularImc();
    if (imc < 18.5) {
        return "Abaixo do peso";
      } else if (imc >= 18.5 && imc < 25) {
        return "Peso está normal";
      } else if (imc >= 25 && imc < 30) {
        return "Acima do peso";
      } else if (imc >= 30 && imc <= 40) {
        return "Obeso";
      } else {
        return "Obseividade está grave";
      }
  }

  descreverImc() {
    return (`Meu nome é ${this.nome} e o resultado do meu IMC é: ${this.classificarImc()}`);
  }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.descreverImc());

const ruka = new Pessoa('Ruka', 82.3, 1.77);
console.log(ruka.descreverImc());
