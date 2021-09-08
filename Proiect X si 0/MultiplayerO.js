var origBoard; //array cu tabelul jocului
const PlayerX = 'X'; //jucatorul cu X
const PlayerO = '0'; //jucatorul cu 0
var clicks = 0; //click-uri (pentru functia checkTie)
let currentPlayer = PlayerX; //jucatorul curent
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
    clicks = 0;
    currentPlayer = currentPlayer === PlayerO ? PlayerO : PlayerO;
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
       turn(square.target.id, currentPlayer)
       currentPlayer = currentPlayer === PlayerO ? PlayerX : PlayerO;
       clicks++;
       if (!checkTie()) turn(currentPlayer)
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
        gameWon.player == PlayerO ? "red" : "blue";
    }
    //se coloreaza partratelele ale caror combinatii de indecsi din array apartin winCombos
    for (var i=0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false)
    }
    declareWinner(gameWon.player == PlayerO ? "0 wins!" : "X wins!")
    //se dezactiveaza click-urile si se afiseaza textul de mai sus conform jucatorului respectiv
}

function declareWinner(who) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}
//afiseaza chenarul, respectiv textul din el cu cine a iesit castigator

function checkTie() {
    for (var i=0; i<cells.length; i++) {
        if (clicks == 9) {
           cells[i].style.backgroundColor = "green";
           cells[i].removeEventListener('click', turnClick, false);
           declareWinner("Tie Game!");
        }
    }   
    return true;
}
//verifica daca toate patratelele au fost ocupate si afiseaza Tie Game