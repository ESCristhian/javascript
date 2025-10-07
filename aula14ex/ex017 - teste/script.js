var num = document.getElementById('num')
res = document.getElementById('res')

function calc() {
var num1 = Number(num.value)
res.innerHTML = ''

    for (i = 0; i <= 10; i++) {
        var soma = num1 * i
        res.innerHTML += `${num1} x ${i} = ${soma}<br>`

    }
}