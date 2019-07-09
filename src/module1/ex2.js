const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idades = usuarios.map(usuario => usuario.idade);

const usuariosTrab = usuarios.filter(usuario => (usuario.idade > 18 && usuario.empresa === 'Rocketseat') ? usuario : '');

const usuarioGoogle = usuarios.find(usuario => usuario.empresa === 'Google');

const multiplicacao = usuarios.map(usuario => usuario.idade = usuario.idade *2);
const filtroUsuarios = usuarios.filter(usuario => usuario.idade <= 50);

console.log(filtroUsuarios);