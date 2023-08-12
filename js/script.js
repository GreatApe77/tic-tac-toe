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
            <p>Nome: <strong id="jogador-${nomeDoJogador}">${nomeDoJogador}</strong></p>
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
let fimDeJogo =false
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


botoes.forEach((botao, key) => {
	botao.addEventListener("click", (e) => {
		botao.setAttribute("disabled", "");
        
        botao.dataset.isActive = 1
        console.log(botao.dataset.isActive)
		if (vezDoPrimeiro) {
			botao.innerText = "O";
			e.target.style.color = "#0c5cb6"
            vezDoPrimeiro = false;
		} else {
			botao.innerText = "X";
            e.target.style.color = "#e39125"
			vezDoPrimeiro = true;
		}
		pontuarMatriz(key, botao.innerText);
        algorimoMatriz()
	});
});

function algorimoMatriz() {
    avaliarLinha(0, matrizDoJogo);
    avaliarLinha(1, matrizDoJogo);
    avaliarLinha(2, matrizDoJogo);
    avaliarColuna(0, matrizDoJogo);
    avaliarColuna(1, matrizDoJogo);
    avaliarColuna(2, matrizDoJogo);
    avaliarDiagonalPrincipal(matrizDoJogo);
    avaliarDiagonaSecundaria(matrizDoJogo)
    if(!fimDeJogo){
        checarEmpate()
    }
    
}
function avaliarLinha(indiceDaLinha, matriz) {
	let p1Counter = 0;
	let p2Counter = 0;
	//console.log(matriz[indiceDaLinha])
	for (let i = 0; i < matriz[indiceDaLinha].length; i++) {
		if (matriz[indiceDaLinha][i] === "O") {
			p1Counter++;
		}
		if (matriz[indiceDaLinha][i] === "X") {
			p2Counter++;
		}
	}
	//console.log({p1Counter,p2Counter})
	if (p1Counter === 3) {
		alert("Player 1 ganhou");
        fimDeJogo = true
		return;
	}
	if (p2Counter === 3) {
		alert("Player 2 ganhou");
        fimDeJogo = true
		return;
	}
}
function avaliarColuna(indiceDaColuna, matriz) {
	let coluna = [];
	let p1Counter = 0;
	let p2Counter = 0;
	for (let i = 0; i < matriz.length; i++) {
		coluna.push(matriz[i][indiceDaColuna]);
		if (coluna[i] === "O") {
			p1Counter++;
		}
		if (coluna[i] === "X") {
			p2Counter++;
		}
	}
	if (p1Counter === 3) {
		alert("Player 1 ganhou");
        fimDeJogo = true
		return;
	}
	if (p2Counter === 3) {
		alert("Player 2 ganhou");
        fimDeJogo = true
		return;
	}
}

function avaliarDiagonalPrincipal(matriz) {
	let diagonalPrincipal = [];
	let p1Counter = 0;
	let p2Counter = 0;

	for (let i = 0; i < matriz.length; i++) {
		for (let j = 0; j < matriz.length; j++) {
			if (i === j) {
				diagonalPrincipal.push(matriz[i][j]);
			}
		}
		if (diagonalPrincipal[i] === "O") {
			p1Counter++;
		}
		if (diagonalPrincipal[i] === "X") {
			p2Counter++;
		}
	}
	if (p1Counter === 3) {
		alert("Player 1 ganhou");
        fimDeJogo = true
		return;
	}
	if (p2Counter === 3) {
		alert("Player 2 ganhou");
        fimDeJogo = true
		return;
	}

	//console.log(diagonalPrincipal);
}
function avaliarDiagonaSecundaria(matriz) {
	let diagonalSecundaria = [];
	let p1Counter = 0;
	let p2Counter = 0;

	for (let i = 0; i < matriz.length; i++) {
		for (let j = 0; j < matriz.length; j++) {
			if (i + j === 2) {
				diagonalSecundaria.push(matriz[i][j]);
			}
		}
        if (diagonalSecundaria[i] === "O") {
			p1Counter++;
		}
		if (diagonalSecundaria[i] === "X") {
			p2Counter++;
		}
	}
    if (p1Counter === 3) {
		alert("Player 1 ganhou");
        fimDeJogo = true
		return;
	}
	if (p2Counter === 3) {
		alert("Player 2 ganhou");
        fimDeJogo = true
		return;
	}

    //console.log(diagonalSecundaria)
}
function checarEmpate(){
    let counter = 0
    for (let i = 0; i < botoes.length; i++) {
        if(Number(botoes[i].dataset.isActive) ===1){
            counter++
        }
        
    }
    console.log(counter)
    if(counter===9){
        alert("EMPATE")
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
