// //Usuários e tecnologias + Busca por tecnologia

// const usuarios = [
//     { 
//         nome: 'Carlos', 
//         tecnologias: ['HTML', 'CSS'] 
//     },
//     {   
//         nome: 'Jasmine', 
//         tecnologias: ['JavaScript', 'CSS'] 
//     },
//     { 
//         nome: 'Tuane', 
//         tecnologias: ['HTML', 'Node.js'] 
//     }
// ]
    
// // for (const usuario of usuarios) {
// //     console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`);
// // }

// function checaSeUsuarioUsaCSS(usuario){
//     for (const tecnologia of usuario.tecnologias) {
//         if (tecnologia == 'CSS'){
//             return true;
//         }
//     }
// }

// for (let i = 0; i < usuarios.length; i++) {
//     const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
//     if(usuarioTrabalhaComCSS) {
//       console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
//     }
//   }

//   Soma de despesas e receitas

const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

  function calculaSaldo(receitas, despesas){

    const receitaTotal = somaNumeros(receitas);
    const despesasTotal = somaNumeros(despesas);

    return receitaTotal - despesasTotal;
  }

  function somaNumeros(numeros){

    let total = 0;
    for(let i = 0; i < numeros.length; i++){
      total += numeros[i];
    }

    return total;
  }

  for (const usuario of usuarios) {
    
    let saldo = calculaSaldo(usuario.receitas, usuario.despesas);

    if (saldo >=0) {
      console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`);
    } else {
      console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`);
    }
  }