const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const arr = usuarios.find(function(item) {
  return item.empresa === 'Google';
});

const arr2 = usuarios.find(item => item.empresa === 'Google');

console.log(arr);
console.log(arr2);