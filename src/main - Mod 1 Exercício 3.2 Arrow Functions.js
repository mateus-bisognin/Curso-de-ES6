const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
  return usuario.idade;
}

const mostraIdade1 = (usuario) => usuario.idade;
const mostraIdade2 = usuario => usuario.idade;

console.log(mostraIdade(usuario));
console.log(mostraIdade1(usuario));
console.log(mostraIdade2(usuario));