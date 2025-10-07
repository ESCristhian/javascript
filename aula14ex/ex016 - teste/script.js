var ini = document.getElementById('inicio')
var fim = document.getElementById('fim')
var pas = document.getElementById('passo')
var res = document.getElementById('res')

function calcular() {
    var ninicio = Number(ini.value)
    var nfim = Number(fim.value)
    var npasso = Number(pas.value)

    if (ninicio == '') {
        window.alert('Não foi possivel determinar o INÍCIO')
        return
    }

    if (npasso <= 0 && < 1) {
        window.alert('Passso invalido! Considere PASSO: 1')
        npasso = 1
    }
    res.innerHTML = ''
    for (let conta = ninicio; conta <= nfim; conta += npasso) {
        res.innerHTML += conta
        if (conta + npasso <= nfim) {
            res.innerHTML += ' 👉 '
        } else {
            res.innerHTML += ' 🏴 '
        }
    }
}
