const form = document.querySelector("#form")
const exercicio = document.querySelector("#exercicio")
const series = document.querySelector("#series")
const repeticoes = document.querySelector("#repeticoes")
const peso = document.querySelector("#peso")
//const dia = document.querySelector("#dia")
const btnAdicionar = document.querySelector("#btnAdicionar")
const treino = document.querySelector("#treino")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    acessandoDados()
})



let data = {}


let acessandoDados = () => {
    //data["dia"] = dia.value
    data["exercicio"] = exercicio.value
    data["series"] = series.value
    data["repeticoes"] = repeticoes.value
    data["peso"] = peso.value
    console.log(data)
    criarTreino()
}

let criarTreino = () => {
    treino.innerHTML += `
    <ul class="list-group col">        
            <li class="list-group-item">${data.exercicio}</li>
            <li class="list-group-item">${data.series} series</li>
            <li class="list-group-item">${data.repeticoes} repeticoes</li>
            <li class="list-group-item">${data.peso} kg</li>
</ul>`

}

