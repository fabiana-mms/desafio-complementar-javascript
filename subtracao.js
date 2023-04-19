function subtracao(x, y) {
    if(x < y) {
        return console.log('Nao foi possivel subtrair!');
    } else {
        var resultado = x + y;
        return console.log(resultado);
    }
}

subtracao(3, 2);
subtracao(1, 5);