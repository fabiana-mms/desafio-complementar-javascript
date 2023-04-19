var numeros = [1, 2, 3, 4, 5, 6];
var frutasDoHortifruit = ['banana', 'maca', 'pera', 'uva'];

console.log('O numero antes de inserir', numeros);
numeros.push(7);
console.log('O numero depois de inserir', numeros);

numeros.pop();
console.log('O numero depois de remover', numeros);

numeros.shift();
console.log('O numero depois de remover o primeiro', numeros);

numeros.map((numero) => {
    console.log(numero);
});

var numerosFiltrados = numeros.filter(numero => numero != 3);
console.log(numerosFiltrados);

var festaDeAniversario = [
    {
        nome: 'Fabiana',
        idade: 35
    },

    {
        nome: 'Ricardo',
        idade: 30
    },

    {
        nome: 'Kelly',
        idade: 36
    }
];

festaDeAniversario.push({
    nome: 'Juliana',
    idade: 31
});

festaDeAniversario.push({
    nome: 'Vinicius',
    idade: 8
});

var convidados = festaDeAniversario.filter(convidado => convidado.idade >= 25)
console.log(convidados);

