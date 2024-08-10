function contar() {
    // inputs do HTML
    var inicio = document.querySelector('input#inicio').value;
    var fim = document.querySelector('input#fim').value;
    var passo = document.querySelector('input#passo').value;
    // saida
    var saida = document.getElementById('output');
    // verificações de entradas inválidas
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        saida.innerHTML = '<p><strong>ERRO!</strong> Impossível contar!</p>';
        return;
    }
    // convertendo valores para número
    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)
    // verificação e correção de entradas diferentes
    if (passo == 0) {
        alert('ERRO! passo inválido! Considerando passo = 1');
        passo = 1;
    }
    if (inicio > fim && passo > 0) {
        passo *= -1;
    } else if (inicio < fim && passo < 0){
        var aux = inicio
        inicio = fim
        fim = aux
        alert('PASSO NEGATIVO! Contando ao contrário!')
    }
    // criando div da contagem
    var contagem = document.createElement('div');
    contagem.setAttribute('id', 'contagem');
    saida.innerHTML = ' Contando: <br>';
    // contagem normal e ao contrário
    if (passo > 0) {
        for (inicio; inicio <= fim; inicio += passo) {
            contagem.innerHTML += `${inicio} &#128073 `;
        }
    } else {
        for (inicio; inicio >= fim; inicio += passo) {
            contagem.innerHTML += `${inicio} &#128073 `;
        }
    }
    contagem.innerHTML += '&#127937';
    saida.appendChild(contagem);
}