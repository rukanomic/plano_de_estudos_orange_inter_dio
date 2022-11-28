/* Exemplos:

pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`)
};

pessoa.descrever(); 

console.log (pessoa['nome']); -- Acessar dinamicamente o atributo (notação de coleção)
pessoa.nome = 'teste'; -- Acesso direto
*/

class Pessoa {
    nome;
    idade;
    anoDeNascimento;
 
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 -idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const ruka = new Pessoa('Ruka', 25);
const lpeh = new Pessoa('Lpeh', 26);

compararPessoas(ruka, lpeh);