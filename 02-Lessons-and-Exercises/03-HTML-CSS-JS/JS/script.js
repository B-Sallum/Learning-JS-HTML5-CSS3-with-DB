function nome() {
    const nome = document.getElementById("inputnome").value
    document.getElementById("inputnome").value = ""
    if (nome == "") {
        alert("Preencha algum nome")
    } else {
        document.getElementById("spanresultado").textContent = nome
        document.getElementById("spanresultado").style.color = "blue"
    }
    const idade = document.getElementById("inputidade").value
    document.getElementById("inputidade").value = ""
    if (idade == "") {
        alert("Preencha sua idade")
    } else {
        document.getElementById("spanidade").textContent = idade
        document.getElementById("spanidade").style.color = "red"
    }
}

function teste() {
    alert("opa")
}

function calcularIMC() {
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value

    var resultado = peso / (altura * altura)

    alert(resultado.toFixed(2))
}