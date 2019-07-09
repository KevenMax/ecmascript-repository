// class List{
// 	constructor(){
// 		this.data = [];
// 	}

// 	add(data){
// 		this.data.push(data);
// 		console.log(this.data);
// 	}
// }

// class TodoList extends List{
// 	constructor(){
// 		super();

// 		this.usuario = 'Keven Max';
// 		// this.todos = [];
// 	}

// 	mostraUsuario(){
// 		console.log(this.usuario);
// 	}

// 	// addTodo(){
// 	// 	this.todos.push('Novo todo');
// 	// 	console.log(this.todos);
// 	// }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
// 	// MinhaLista.addTodo();	
// 	MinhaLista.add('Novo todo');
// }

// MinhaLista.mostraUsuario();

// class Matematica{

// 	// constructor(){
// 	// 	this.todos = [];
// 	// }

// 	static soma(a,b){
// 		return a + b;
// 	}
// }

// console.log(Matematica.soma(1,2));


// const usuario = {nome: 'Keven'};

// usuario.nome = 'Clietin';

// console.log(usuario);

// function teste(x){
// 	let y = 2;
// 	if(x > 5){
// 		let y = 4;
// 		console.log(x,y);
// 	}
// }
// teste(10);

// const arr = [1, 3, 4, 5, 8, 9];

// const newArr = arr.map(function(item, index){
// 	return item + index;
// });

// // console.log(newArr);

// const sum = arr.reduce(function(total, next){
// 	return total + next;
// });

// // console.log(sum);

// const filter = arr.filter(function(item){
// 	return item % 2 === 0;
// });

// // console.log(filter);

// const find = arr.find(function(item) {
// 	return item === 2;
// });
// // console.log(find);

// aprendendo o uso de arrow function
// const arr = [1, 3, 4, 5, 6];
// const newArr = arr.map(item => item * 2);
// console.log(newArr);

// retornando um objeto atráves de arrow function
// const teste = () => ({nome: 'Keven'});
// console.log(teste(5));

// utilizando valores padrões em função no js
// const soma = (a = 3, b = 6) => a + b;
// console.log(soma());


//  Desestruturando um objeto (buscando valores dentro do objeto de forma mais simples e menos verbosa)
// const usuario = {
// 	nome: 'Keven',
// 	idade: 18,
// 	endereco: {
// 		cidade: 'Fortaleza',
// 		estado: 'CE',
// 	},
// };

// const nome = usuario.nome;
// const idade = usuario.idade;
// const cidade = usuario.endereco.cidade;

// const {nome, idade, endereco: {cidade}} = usuario;
// console.log(nome, idade, cidade);

// function mostraNome({idade, endereco: {cidade}}){
	// console.log(cidade);
// }
// mostraNome(usuario);

// REST

// const usuario = {
	// nome: 'Keven',
	// idade: 19,
	// empresa: 'AGILGPR'
// };

// const {nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);

// const arr = [1,2,3,4];
// const [a,b,...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// function soma(...params){
	// return params.reduce((total, next) => total+next);
// }

// console.log(soma(1,4,5,7));

//  SPREAD

// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);


// const usuario1 = {
// 	nome: 'Keven',
// 	idade: 19,
// 	endereco: {
// 		rua: '404',
// 		numero: 92,
// 	},
// };

// const usuario2 = {...usuario1, nome: 'Kauan Diego',  endereco: {rua: '92'}};
// console.log(usuario2);


//  Template Literals ( Para concatenar Strings de forma menos verbosa).

// const nome = 'Keven Max';
// const idade = 19;

// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)


//  Sintaxe curta de objeto, onde não é necessário definir o nome da propriedade, caso o nome da variável seja igual ao nome da propriedade.

const nome = 'Keven Max';
const idade = 19;

const usuario = {
	nome,
	// // nome: nome,
	idade,
	// // idade: idade,
	endereco: 'Rua 404, Nº 92',
}

console.log(usuario);