function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var fr = document.getElementById('frase')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#658bd5ff'
        fr.innerHTML = '<p>Bom Dia!!!</p>'
        // Bom Dia
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#b46829ff'
        // Boa tarde
        fr.innerHTML = '<p>Boa Tarde!!!</p>'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#232121ff'
        fr.innerHTML = '<p>Boa Noite!!!</p>'
        // Boa Noite
    }
}
