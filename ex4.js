const candidatos = [{
        nome: 'Márcia',
        idade: 68,
        skills: ['Python', 'C#', 'javascript'],
    },
    {
        nome: 'Marcelo',
        idade: 89,
        skills: ['Fortran', 'Pascal', 'Cobol'],
    },
    {
        nome: ' Gustavo',
        idade: 45,
        skills: ['html', 'css', 'Javascript', 'c++', 'java', 'PHP', 'VueJs'],
    },
    {
        nome: 'Randall',
        idade: 50,
        skills: ['javascript', 'Typescript', 'c++', 'java'],
    },
    {
        nome: 'larissa',
        idade: 70,
        skills: ['typescript', 'c++', 'jaVa'],
    },
];

function encontrarSkill(candidatos, skillDesejada) {
    const skillEncontrado = candidatos.filter((aluno) => {
        return aluno.skills.some((skill) => {
            return skill.toLowerCase() === skillDesejada.toLowerCase();
        });
    });
    console.log(skillEncontrado)
};

encontrarSkill(candidatos, 'typeScript');