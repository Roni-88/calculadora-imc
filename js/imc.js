function start () {
    var botaoCalcularImc = document.querySelector ('#calcular')
    botaoCalcularImc.addEventListener ('click', handleButtonClick)

    var peso = document.querySelector ('#peso')
    var altura = document.querySelector ('#altura')

    peso.addEventListener ('input', handleButtonClick)
    altura.addEventListener ('input', handleButtonClick)

    handleButtonClick ()
}

function calcularImc (peso, altura) {
    return peso / (altura * altura)
}

function handleButtonClick () {
    var peso = document.querySelector ('#peso')
    var altura = document.querySelector ('#altura')
    var imcResultado = document.querySelector ('#imc-resultado')

    var peso = Number (peso.value)
    var altura = Number (altura.value)

    var imc = calcularImc (peso, altura)
    var imcFormatado = imc.toFixed (2).replace ('.', ',')

    imcResultado.textContent = imcFormatado
}

start()
