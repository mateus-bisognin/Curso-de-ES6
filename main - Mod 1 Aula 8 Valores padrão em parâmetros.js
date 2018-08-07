function soma(a = 3, b = 6) {
  return a + b;
}

console.log(soma(1));
console.log(soma());

const soma2 = (a = 3, b = 8) => a + b;

console.log(soma2());