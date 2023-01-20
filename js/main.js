const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode, evento.target.dataset.peca)
        
    })
})

function manipulaDados(operacao, controle, peca) {
    const contadorPeca = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        if ((parseInt(contadorPeca.value) - 1) >= 0) {
            contadorPeca.value = parseInt(contadorPeca.value) - 1
            atualizaEstatistica(peca, operacao)
        }
    } else {
        contadorPeca.value = parseInt(contadorPeca.value) + 1
        atualizaEstatistica(peca, operacao)
    }
}

function atualizaEstatistica(peca, operacao) {

    estatistica.forEach((elemento) => {
        if (operacao === "-") {
            if ((parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]) >= 0) {
                elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
            }
        } else {
            if ((parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]) >= 0) {
                elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
            }
        }
    })

}