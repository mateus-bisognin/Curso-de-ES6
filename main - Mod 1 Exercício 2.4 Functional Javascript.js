const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const arr = usuarios.map(function(item) {
  return { ...item, idade: item.idade * 2 };
}).filter(function(item) {
  return item.idade <= 50;
});

console.log(usuarios);
console.log(arr);

const arr2 = usuarios
  .map(item => ({ ...item, idade: item.idade * 2 }))
  .filter(item => item.idade <= 50);

console.log(arr2);

const arr3 = usuarios
  .map(item => {
    return { ...item, idade: item.idade * 2 }
  })
  .filter(item => item.idade <= 50);

console.log(arr3);