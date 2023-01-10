/* 1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima 
a sua média e a sua classificação conforme a tabela abaixo

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

function mediaFinal(notas) {
  return media;
}

const nota1 = 10,
  nota2 = 10,
  nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;
console.log(mediaFinal(5, 3, 6).toFixed(2));

if (mediaFinal(media) < 5) {
  console.log("Reprovado");
} else if (mediaFinal(media) >= 5 && mediaFinal(media) <= 7) {
  console.log("Que pena, você está de recuperação");
} else {
  console.log("Parábens, você passou de semestre!");
}
