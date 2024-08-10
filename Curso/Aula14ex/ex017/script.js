function tabuada(){
    // entradas do HTML
    var num = document.querySelector('input#num').value
    var select = document.querySelector('select#saida')
    // Verificação de entradas inválidas e conversão de num para número
    if (num.length == 0){
        select.innerHTML = '<option>[ERRO] Digite um valor válido</option>'
        return
    }
    num = Number(num)
    // Gerador da tabuada
    var opc
    select.innerHTML = ''
    for (var mult = 1; mult <= 10; mult++){
        opc = document.createElement('option')
        opc.setAttribute('value', mult)
        opc.innerHTML = `${num} x ${mult} = ${num*mult}`
        select.appendChild(opc)
    }
}