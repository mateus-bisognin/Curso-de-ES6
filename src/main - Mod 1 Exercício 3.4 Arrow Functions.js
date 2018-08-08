const promise = function() {
  return new Promise(function(resolve, reject) {
    return resolve();
  })
}

// As formas abaixo provavelmente estejam certas, porém não foram testadas

const promise1 = () => new Promise(function(resolve, reject) {
  return resolve();
});

const promise2 = () => new Promise((resolve, reject) => resolve());