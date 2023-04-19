const fruta = ['Morango', 'Banana', 'Maca']

console.log(fruta);
console.log(fruta[2]);

const xicara = {
    cor: 'azul',
    material: 'porcelana',
    peso: '500g',
    capacidade: 2,
    quebrada: false,
    alca: true
}

console.log(xicara);
console.log(xicara.material);

const frutas = [
    {
        nome: 'Morango',
        maduro: true,
        peso: '300g',
        estacao: 'inverno',
        valor: 1.50
    },

    {
        nome: 'Banana',
        maduro: false,
        peso: '30g',
        estacao: 'inverno',
        valor: 0
    }
];

console.log(frutas[0].maduro);
console.log(frutas[1].peso);

const informacoesPessoais = [
    {
        nome: 'Fabiana',
        idade: 35,
        altura: 1.62,
        cidade: 'Barueri',
        Estado: 'Sao Paulo'
    },

    {
        nome: 'Ricardo',
        idade: 30,
        altura: 1.84,
        cidade: 'Barueri',
        Estado: 'Sao Paulo'
    }
];

//Para praticar

const hortifruitSP = [
    {
        nome: 'Morango',
        cor: 'vermelho',
        disponivel: true,
        valor: 'R$ 10,99 caixa'
    },

    {
        nome: 'Tomate',
        cor: 'vermelho',
        disponivel: true,
        valor: 'R$ 7,99 kg'
    },

    {
        nome: 'Cenoura',
        cor: 'laranja',
        disponivel: false,
        valor: 'R$ 3,99 Kg'
    },

    {
        nome: 'Brocolis',
        cor: 'verde',
        disponivel: false,
        valor: 'R$ 6,99 unidade'
    },

    {
        nome: 'mandioca',
        cor: 'marrom',
        disponivel: true,
        valor: 'R$ 2,99 kg'
    },
];

console.log(hortifruitSP);