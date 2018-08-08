const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map(function(item) {
  return item + 10;
});

const arr3 = arr.map(item => item + 10);

console.log(arr2);
console.log(arr3);