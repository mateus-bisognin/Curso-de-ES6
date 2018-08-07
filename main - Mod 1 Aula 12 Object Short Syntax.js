const nome = 'Diego';
const idade = 23;

const usuario = {
  nome: nome,
  idade: idade,
  empresa: 'Rocketseat',
};

// Object Short Syntax (Sintaxe Curta de Objeto):
const usuario2 = {
  nome,
  idade,
  empresa: 'Rocketseat',
};

console.log(usuario);
console.log(usuario2);