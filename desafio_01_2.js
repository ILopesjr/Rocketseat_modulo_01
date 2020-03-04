const usuario = {
    nome: 'Diego',
    empresa: {
        nome: 'Rocketseat',
        cor: 'Roxa',
        foco: 'Programação',
        endereco: {
            rua: 'Rua Guilherme Gembala',
            numero: '260'
        }
    }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`);

const user = {
    nome: 'Carlos',
    idade: 32,
    tecnologias: [
        {nome: 'C++', especialidade: 'Desktop'}
    ]
}

console.log(`O usuário ${user.nome} tem ${user.idade} anos e usa a tecnologia ${user.tecnologias[0].nome}
com especialidade em ${user.tecnologias[0].especialidade}`);