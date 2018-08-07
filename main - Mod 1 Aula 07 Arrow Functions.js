const arr = [1, 3, 4, 5, 6];

const newArr = arr.map(function(item) {
  return item * 1;
});

console.log(newArr);

const newArr2 = arr.map((item) => {
  return item * 2;
});

console.log(newArr2);

const newArr3 = arr.map(item => {
  return item * 3;
});

console.log(newArr3);

const newArr4 = arr.map(item => item * 4);

console.log(newArr4);

const teste = () => 'teste';
const teste1 = () => 1;
const teste2 = () => [1, 2];
const teste3 = () => { nome: 'Diego' };
const teste4 = () => ({ nome: 'Diego' });


console.log(teste());
console.log(teste1());
console.log(teste2());
console.log(teste3());
console.log(teste4());