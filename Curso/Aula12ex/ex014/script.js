function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12){
        var foto = 'Manha.png'
        document.body.style.background = '#cdbf60'
    } else if (hora >= 12 && hora <= 18){
        var foto = 'Tarde.png'
        document.body.style.background = '#dda05a'
    } else {
        var foto = 'Noite.png'
        document.body.style.background = '#1f445f'
    }
    img.src = `/Aula12ex/ex014/fotos/${foto}`
}