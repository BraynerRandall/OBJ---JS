const aluno1 = {
    nome: "Felipe",
    nota: [8, 6]
};
const aluno2 = {
    nome: "Carlos",
    nota: [3, 9]
};

const turma = [aluno1, aluno2];

let somaMediaTurma;

turma.forEach(aluno => {
    const media = aluno.nota.reduce((valorInicial, proximo) => valorInicial + proximo) / aluno.nota.length;

    console.log(`As notas de ${aluno.nome} são: ${aluno.nota} e sua media é ${media}`);

    somaMediaTurma += media;
});

console.log(`A média da Turma ${somaNotasTurma / turma.length}`);