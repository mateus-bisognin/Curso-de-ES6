const usuario = { nome: 'Diego' }

usuario.nome = 'Cleiton';

console.log(usuario);

function teste(x) {
  let y = 2;

  if (x > 5) {
    let y = 5;

    console.log(x, y);
  }

  console.log(y);
}

teste(10);

const a = 3;

a = 5;