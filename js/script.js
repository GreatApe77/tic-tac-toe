
//ESCOLHER JOGADORES
const chooseCharactersForm = document.getElementById("chooseCharactersForm")

chooseCharactersForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const nomeJogador1 = document.getElementById("escolher-jogador-1-input").value
    const nomeJogador2 = document.getElementById("escolher-jogador-2-input").value
    const areaDePontuacao = document.getElementById("area-de-pontuacao")

    areaDePontuacao.append(criarCardJogador(1,nomeJogador1),criarCardJogador(2,nomeJogador2))
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