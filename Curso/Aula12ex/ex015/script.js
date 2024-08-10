function verificar(){
    var saida = document.getElementById('saida')
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = Number(document.getElementById('txtano').value)
    if (nasc == 0 || nasc > ano){
        window.alert('ERRO! Insira um ano de nascimento válido')
    } else {
        var idade = ano - nasc
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var input_sexo = document.getElementsByName('radsexo')
        var genero = ''
        if (input_sexo[0].checked){
            genero = 'homem'
        } else{
            genero = 'mulher'
        }

        var fase = ''
        if (idade <= 3){
            fase = 'bebe'
        } else if (idade <= 12){
            fase = 'crianca'
        } else if (idade <= 21){
            fase = 'jovem'
        } else if (idade <= 55){
            fase = 'adulto'
        } else{
            fase = 'idoso'
        }
        img.setAttribute('src', `/Aula12ex/ex015/Fotos/${fase}-${genero}.png`)
        saida.style.textAlign = 'center'
        saida.innerHTML = `Detectado: ${genero} com ${idade} anos`
        saida.appendChild(img)
    }
}   