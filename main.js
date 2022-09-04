const btnCriar = document.querySelector("#btnCriar")
const form = document.querySelector("form")
const exercicio = document.querySelector("#exercicio")
const series = document.querySelector("#series")
const descanso = document.querySelector("#descanso")
const carga = document.querySelector("#carga")
const msgErro = document.querySelector("#msgErro")
const treinos = document.querySelector("#treinos")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    validacaoForm()
})

let validacaoForm = () => {

    if (exercicio.value === "" || series.value === "" || descanso.value === "" || carga.value === "") {

        msgErro.textContent = "Preencha todos os campos"

    }
    else {
        msgErro.textContent = " "

        criaDados()

        console.log(dados)
    }

}

let dados = {}

let criaDados = () => {
    dados["exercicio"] = exercicio.value
    dados["series"] = series.value
    dados["descanso"] = descanso.value
    dados["carga"] = carga.value


    criaTreino()
}

let criaTreino = () => {

    treinos.innerHTML += `
    <div class="card col-3">
        <div class="card-body">
          <p>${dados.exercicio}</p>
          <p>${dados.descanso}</p>
          <p>${dados.series}</p>
          <p>${dados.carga}</p>
          <div class="icones">
              <i class="fa-solid fa-pen-to-square me-2 " onclick="edit(this)"></i>
              <i class="fa-solid fa-trash" onclick="apagar(this)"></i>
          </div>
        </div>
      </div> `

    limpaForm()
}

let limpaForm = () => {
    exercicio.value = ""
    series.value = ""
    descanso.value = ""
    carga.value = ""
}



let edit = (e) => {
    let exercicioSelecionado = e.parentElement.parentElement

    exercicio.value = exercicioSelecionado.children[0].textContent
    descanso.value = exercicioSelecionado.children[2].textContent
    series.value = exercicioSelecionado.children[1].textContent
    carga.value = exercicioSelecionado.children[3].textContent

    apagar(e)
}

let apagar = (e) => {
    e.parentElement.parentElement.parentElement.remove()
}