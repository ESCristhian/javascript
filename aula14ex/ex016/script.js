// Seleção dos elementos do DOM
const ini = document.getElementById('inicio');
const fim = document.getElementById('fim');
const pas = document.getElementById('passo');
const res = document.getElementById('res');

function calcular() {
    // Conversão dos valores de entrada para número
    const ninicio = Number(ini.value);
    const nfim = Number(fim.value);
    let npasso = Number(pas.value);

    // Validação do início
    if (!ini.value) {
        window.alert('Não foi possível determinar o INÍCIO');
        return;
    }

    // Validação do passo
    if (npasso < 1) {
        window.alert('Passo inválido! Considerando PASSO: 1');
        npasso = 1;
    }

    // Validação do Fim
    if (nfim == '') {
        window.alert('Parece que sua conta não tem fim')
        return
    }

    res.innerHTML = '';

    // Contagem crescente
    if (ninicio < nfim) {
        for (let conta = ninicio; conta <= nfim; conta += npasso) {
            res.innerHTML += conta;
            if (conta + npasso <= nfim) {
                res.innerHTML += ' 👉 ';
            } else {
                res.innerHTML += ' 🏴 ';
            }
        }
    }
    // Contagem decrescente
    else {
        for (let conta = ninicio; conta >= nfim; conta -= npasso) {
            res.innerHTML += conta;
            if (conta - npasso >= nfim) {
                res.innerHTML += ' 👉 ';
            } else {
                res.innerHTML += ' 🏴 ';
            }
        }
    }
}
