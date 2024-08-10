var numeros = []
let input_n = document.querySelector('input#input_n')
let select = document.querySelector('select#select')
let saida = document.querySelector('div#saida')

function numValido(n){
    // verifica se o valor está entre 1 e 100 ou se ele já está no array
    if (n < 1 || n > 100){
        alert('[VALOR INVÁLIDO] Insira um número entre 1 e 100')
        return false
    } else if (numeros.indexOf(n) != -1){
        alert('[VALOR INVÁLIDO] Insira um número que não tenha sido digitado')
        return false
    } else{
        return true
    }
}

function entradaValida(input){
    // Verifica se o valor da entrada é valido
    if (input.value.length == 0){
        alert('[ERRO] Insira um valor')
        return false
    } else {
        return true
    }
}

function adicionar(){
    // verificação se a entrada e o valor são OK
    let num = Number(input_n.value)
    if (entradaValida(input_n) && numValido(num)){
        // Adiciona num ao array numeros e escreve no select
        numeros.push(num)
        select.innerHTML += `<option>Valor ${num} adicionado.</option>`
    } 
    // Limpa o texto em saida e no input_n
    saida.innerHTML = ''
    input_n.value = ''
    input_n.focus()
}

function finalizar(){
    // limpa saida
    saida.innerHTML = ''
    // Verifica se existe valores no array numeros
    if (numeros.length == 0){
        alert('[ERRO] Insira pelo menos 1 número')
        return
    }
    // Maior, menor e soma dos valores do array
    let maior = 0, soma = 0, menor = 100
    for (let index in numeros){
        let n = numeros[index]
        soma += n
        if (n > maior){
            maior = n
        }
        if (n < menor){
            menor = n
        }
    }
    // Escreve os resultados
    saida.innerHTML += `<p> Ao todo temos ${numeros.length} números cadastrados</p>`
    saida.innerHTML += `<p> O maior valor informado foi ${maior}</p>`
    saida.innerHTML += `<p> O menor valor informado foi ${menor}</p>`
    saida.innerHTML += `<p> Somando todos os valores, temos ${soma}</p>`
    saida.innerHTML += `<p> A média dos valores digitados é ${soma/(numeros.length)}</p>`
}
