const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
}

const mostraUsuario1 = (nome = 'Diego', idade = 18) => 
  ({ nome, idade });


console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
console.log(mostraUsuario1(nome, idade));
console.log(mostraUsuario1(nome));