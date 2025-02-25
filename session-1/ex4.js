const turma = [
    {
      name: "Diogo Lopes",
      grades:[15, 14, 17]
    },
    {
      name: "Pedro Sntos",
      grades: [16, 14, 18]
    },
    {
      name: "Lukas Cleminson",
      grades: [17, 19, 18]
    },
  ];
  


function calcularMedia(grades){
    const soma = grades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return soma / grades.length;
}
  

turma.forEach((aluno) => {
    const media = calcularMedia(aluno.grades);
    console.log(`${aluno.name}: Média = ${media.toFixed(2)}`);
  });