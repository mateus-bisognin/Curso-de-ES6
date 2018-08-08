const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const arr = usuarios.filter(function(item) {
  return item.empresa === 'Rocketseat' && item.idade > 18;
});

const arr2 = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18);

console.log(arr);
console.log(arr2);