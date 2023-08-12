
//ESCOLHER JOGADORES
const chooseCharactersForm = document.getElementById("chooseCharactersForm")

chooseCharactersForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nomeJogador1 = document.getElementById("escolher-jogador-1-input").value
    const nomeJogador2 = document.getElementById("escolher-jogador-2-input").value
    const areaDePontuacao = document.getElementById("area-de-pontuacao")

    areaDePontuacao.append(criarCardJogador(1,nomeJogador1),criarCardJogador(2,nomeJogador2))
    chooseCharactersForm.style.display = "none"
    document.querySelector(".secao-jogo").style.display  ="block"
})

function criarCardJogador(numeroDoJogador,nomeDoJogador){
    const container = document.createElement("div")

    container.innerHTML = `
    <div class="jogador-${numeroDoJogador}">
            <h4>Jogador ${numeroDoJogador}:</h4>
            <p>Nome: <strong>${nomeDoJogador}</strong></p>

            <p>pontos: <strong id="pontos-jogador-${numeroDoJogador}">0</strong></p>
        </div>
    
    `
    return container
}

//MARCAR PONTOS
const botoes = document.querySelectorAll(".casas-itens-grid")
console.log(botoes)
let vezDoPrimeiro = true
let matrizDoJogo = [
    ["O",0,0],
    [0,"O",0],
    [0,0,0]
]
function verificarJogoDaVelha(){
    let p1Counter = 0,p2Counter = 0
    for (let i = 0; i < matrizDoJogo.length; i++) {
        
        for (let j = 0; j < matrizDoJogo.length; j++) {
            if(matrizDoJogo[i][j] ==="O"){
                p1Counter++
            }else{
                p2Counter++
            }
            
        }
    }
    console.log({p1Counter,p2Counter})
}
verificarJogoDaVelha()
botoes.forEach((botao)=>{
    botao.addEventListener("click",(e)=>{
        botao.setAttribute("disabled","")
        if(vezDoPrimeiro){
            botao.innerText = "O"
            vezDoPrimeiro = false
        }else{
            botao.innerText = "X"
            vezDoPrimeiro = true
        }
    })
})


/*
        <div class="jogador-1">
            <h4>Jogador 1:</h4>
            <p>Nome: <strong>Mateus</strong></p>

            <p>pontos: <strong>0</strong></p>
        </div>
        <div class="jogador-2">
            <h4>Jogador 2:</h4>
            
            <p>Nome: <strong>Eduardo</strong></p>
            <p>pontos: <strong>2</strong></p>
        </div>
*/