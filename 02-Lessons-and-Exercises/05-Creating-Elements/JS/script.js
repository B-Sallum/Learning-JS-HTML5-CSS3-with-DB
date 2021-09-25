function mostrar() {
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value

    document.getElementById("spannome").textContent = nome
    document.getElementById("spanidade").textContent = idade
}

function addTarefa() {
    const li = document.createElement("li")
    const tarefa = document.getElementById("inputtarefa").value
    document.getElementById("inputtarefa").value = ""

    if (tarefa == "") {
        alert("Por favor insira alguma tarefa")
    } else {
        const textotarefa = document.createTextNode(tarefa)
        li.appendChild(textotarefa)
        document.getElementById("MinhaLista").appendChild(li)
    }
}