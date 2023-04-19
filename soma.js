function soma(x, y) {
    if(x < y) {
        return console.log('Nao foi possivel somar!');
    } else {
        var resultado = x - y;
        return console.log(resultado);
    }
}

soma(3, 2);
soma(3, 5);