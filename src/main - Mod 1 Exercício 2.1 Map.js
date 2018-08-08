const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const arr = usuarios.map(function(item) {
  return item.idade;
});
const arr2 = usuarios.map(item => item.idade);

console.log(arr);
console.log(arr2);