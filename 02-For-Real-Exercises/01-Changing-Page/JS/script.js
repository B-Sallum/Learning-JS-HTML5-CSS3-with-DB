const buttonTexto = document.querySelector("#buttontexto")

buttonTexto.addEventListener("click", function () {
    alert("Você irá para a última foto");
})

const buttonAdd = document.querySelector("#buttonAdd")

buttonAdd.addEventListener("click", function () {
    const tag1 = document.createElement("h1")
    const text = document.createTextNode("Opa Criação")
    tag1.appendChild(text)
    document.body.appendChild(text)
})

photoChange.addEventListener("click", function () {
    let imagem = document.querySelector("#imagem1").src
    let titulo = document.getElementById("textao").value
    alert(imagem)
    titulo.innerText = "HOHOHO"
    imagem.src = "media/image/Mobile02.png"
})

function teste() {
    alert(imagem)
}


// window.onload = function () {
//     alert("Olá mundo do JavaScript para Web");
// };

