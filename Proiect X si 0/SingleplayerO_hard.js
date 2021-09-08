var origBoard; //array cu tabelul jocului
const huPlayer = '0'; //jucatorul
const aiPlayer = 'X'; //calculatorul
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
]
//combinatiile posibile pentru a castiga

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none"
    origBoard = Array.from(Array(9).keys());
    for (var i=0; i<cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}
//functia de incepere a jocului, apelata la apasarea butonului Replay

function turnClick(square) {
    if (typeof origBoard[square.target.id] == 'number') {
        turn(square.target.id, huPlayer)
        if (!checkTie()) turn(bestSpot(), aiPlayer);
    }
}
//functie apelata la fiecare click in zona tabelului

function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(origBoard, player)
    if (gameWon) gameOver(gameWon)
}
//afiseaza textul in patratele si determina castigatorul

function checkWin(board, player) {
    let plays = board.reduce((a, e, i) => (e === player) ? a.concat(i) : a, []);
    //parcurgerea fiecarui element al array-ului board si returnarea unei valori
    //a - valoarea care urmeaza sa fie initiata la final cu un nou array
    //e - tipul de jucator
    //i - index
    //daca conditia este adevarata, atunci i se atribuie index-ul i valorii a, altfel ramane un array gol
    //aceasta valoare aduna indecsii in array-uri, astfel se decide daca s-a castigat sau nu si ce jucator a castigat
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gameWon = {index: index, player: player};
            break;
        }
    }
    //acest for parcurge fiecare index al array-ului winCombos si combinatiile pentru castigarea jocului
    //if-ul verifica fiecare combinatie parcursa, prin variabila plays, verificand daca index-ul este >= 0
    //daca se va castiga, gameWon i se va atribui combinatia index-jucator
    return gameWon;
}

function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
        gameWon.player == huPlayer ? "blue" : "red";
    }
    //se coloreaza partratelele ale caror combinatii de indecsi din array apartin winCombos
    for (var i=0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false)
    }
    declareWinner(gameWon.player == huPlayer ? "You win!" : "You lose!")
    //se dezactiveaza click-urile si se afiseaza textul de mai sus conform jucatorului respectiv
}

function declareWinner(who) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}
//afiseaza chenarul, respectiv textul din el cu cine a iesit castigator

function emptySquares() {
    return origBoard.filter(s => typeof s == 'number');
}
//returneaza casutele care sunt goale, acestea avand un numar ca id

function bestSpot() {
    return minimax(origBoard, aiPlayer).index;
}
//apeleaza functia algoritmului minimax

function checkTie() {
    if (emptySquares().length == 0) {
        for (var i=0; i<cells.length;i++) {
            cells[i].style.backgroundColor = "green";
            cells[i].removeEventListener('click', turnClick, false);
        }
            declareWinner("Tie Game!")
        return true;
    }
    return false;
}
//verifica daca toate patratelele au fost ocupate si afiseaza Tie Game

function minimax(newBoard, player) {
	var availSpots = emptySquares();
    //gaseste locurile libere folosind functia emptySquares

	if (checkWin(newBoard, huPlayer)) {
		return {score: -10};
	} else if (checkWin(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
    //seteaza scoruri in functie de jucatorul care castiga
	var moves = [];
    //colecteaza scorurile intr-un array
	for (var i = 0; i < availSpots.length; i++) {
		var move = {}; //colecteaza indecsii si scorurile
		move.index = newBoard[availSpots[i]]; //colecteaza indecsii locurilor libere
		newBoard[availSpots[i]] = player; //seteaza locurile libere jucatorului

		if (player == aiPlayer) {
			var result = minimax(newBoard, huPlayer);
			move.score = result.score;
		} else {
			var result = minimax(newBoard, aiPlayer);
			move.score = result.score;
		}
        //apeleaza functia cu celalalt jucator si noul tabel schimbat
        //scorul se retine in move

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
        //move se muta in array-ul moves si jocul continua cu locurile libere ramase
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
        //AI-ul alege o mutare cu scorul cel mai mare
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}
    //mutarile care au scorul cel mai mic sunt ale jucatorului

	return moves[bestMove];
    //retine mutarile si le alege pe cele cu cel mai mare scor
}