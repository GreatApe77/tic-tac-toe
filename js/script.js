//ESCOLHER JOGADORES
const chooseCharactersForm = document.getElementById("chooseCharactersForm");

chooseCharactersForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const nomeJogador1 = document.getElementById(
		"escolher-jogador-1-input"
	).value;
	const nomeJogador2 = document.getElementById(
		"escolher-jogador-2-input"
	).value;
	const areaDePontuacao = document.getElementById("area-de-pontuacao");

	areaDePontuacao.append(
		criarCardJogador(1, nomeJogador1),
		criarCardJogador(2, nomeJogador2)
	);
	chooseCharactersForm.style.display = "none";
	document.querySelector(".secao-jogo").style.display = "block";
});

function criarCardJogador(numeroDoJogador, nomeDoJogador) {
	const container = document.createElement("div");

	container.innerHTML = `
    <div class="jogador-${numeroDoJogador}">
            <h4>Jogador ${numeroDoJogador}:</h4>
            <p>Nome: <strong>${nomeDoJogador}</strong></p>

            <p>pontos: <strong id="pontos-jogador-${numeroDoJogador}">0</strong></p>
        </div>
    
    `;
	return container;
}

//MARCAR PONTOS
const botoes = document.querySelectorAll(".casas-itens-grid");
console.log(botoes);
let vezDoPrimeiro = true;
let matrizDoJogo = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

function pontuarMatriz(index, symbol) {
	switch (index) {
		case 0:
			matrizDoJogo[0][0] = symbol;
			break;
		case 1:
			matrizDoJogo[0][1] = symbol;
			break;
		case 2:
			matrizDoJogo[0][2] = symbol;
			break;
		case 3:
			matrizDoJogo[1][0] = symbol;
			break;
		case 4:
			matrizDoJogo[1][1] = symbol;
			break;
		case 5:
			matrizDoJogo[1][2] = symbol;
			break;
		case 6:
			matrizDoJogo[2][0] = symbol;
			break;
		case 7:
			matrizDoJogo[2][1] = symbol;
			break;
		case 8:
			matrizDoJogo[2][2] = symbol;
			break;

		default:
			break;
	}
}

//verificarJogoDaVelha()
botoes.forEach((botao,key) => {
	botao.addEventListener("click", (e) => {
		botao.setAttribute("disabled", "");
		if (vezDoPrimeiro) {
			botao.innerText = "O";
			vezDoPrimeiro = false;
		} else {
            botao.innerText = "X";
			vezDoPrimeiro = true;
		}
        pontuarMatriz(key,botao.innerText)
        avaliarLinha(0,matrizDoJogo)
        avaliarLinha(1,matrizDoJogo)
        avaliarLinha(2,matrizDoJogo)
        avaliarColuna(0,matrizDoJogo)
        avaliarColuna(1,matrizDoJogo)
        avaliarColuna(2,matrizDoJogo)
	});
});

function algorimoMatriz(){
    

}
function avaliarLinha(indiceDaLinha,matriz){
    let p1Counter = 0
    let p2Counter = 0
    //console.log(matriz[indiceDaLinha])
    for (let i = 0; i < matriz[indiceDaLinha].length; i++) {
        if(matriz[indiceDaLinha][i]==="O"){
            p1Counter++
        }
        if(matriz[indiceDaLinha][i] ==="X"){
            p2Counter++
        }
        
    }
    //console.log({p1Counter,p2Counter})
    if(p1Counter===3){
        alert("Player 1 ganhou")
        return
    }
    if(p2Counter===3){
        alert("Player 2 ganhou")
        return
    }
}
function avaliarColuna(indiceDaColuna,matriz){
    let coluna =[]
    let p1Counter = 0
    let p2Counter = 0
    for (let i = 0; i < matriz.length; i++) {
        coluna.push(matriz[i][indiceDaColuna])    
        if(coluna[i] ==="O"){
            p1Counter++
        }
        if(coluna[i] ==="X"){
            p2Counter++
        }
    }
    if(p1Counter===3){
        alert("Player 1 ganhou")
        return
    }
    if(p2Counter===3){
        alert("Player 2 ganhou")
        return
    }
    
    
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
