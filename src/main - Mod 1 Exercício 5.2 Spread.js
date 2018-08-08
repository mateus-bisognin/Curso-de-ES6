const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario1 = { ...usuario };
const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario, endereco: { ...usuario.endereco, cidade: 'Lontras' } };
const usuario4 = { ...usuario, endereco: { ...usuario.endereco } };

console.log(usuario1 === usuario); // false
console.log(usuario2.endereco === usuario.endereco); // true.. Esta linha mostra que o spread não faz uma deep copy (não clona objetos dentro do objeto clonado), pois usuario2.endereco é igual a usuario.endereco. Porém, objetos só são iguais quando referenciam o mesmo objeto.
console.log(usuario4.endereco === usuario.endereco); // false.. usuario4.endereco é igual a usuario.endereco, porque é um clone. Porém, como não referenciam o mesmo objeto, a comparação retorna falso.

console.log(usuario);
console.log(usuario1);
console.log(usuario2);
console.log(usuario3);
console.log(usuario4);