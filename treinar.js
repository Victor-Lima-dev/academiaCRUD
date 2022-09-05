const btnTreinar = document.querySelector("#btnTreinar")
const msgErroTreinar = document.querySelector("#msgErroTreinar")

btnTreinar.addEventListener("click", () => {
    validacaoTreino()

})

let validacaoTreino = () => {

    if (dados.length === 0) {
        msgErroTreinar.textContent = "Nenhum treino encontrado"
    }
    else {
        msgErroTreinar.textContent = "Selecione o Treino"
    }
}

let teste = () => {
    
    let indo = btnTreinar.parentElement.previousElementSibling.children
    console.log(indo)
}

