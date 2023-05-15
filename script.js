// Game Constants
const PLAYER_X = 'X';
const PLAYER_O = 'O';
const EMPTY_CELL = '';

// Game State
let currentPlayer = PLAYER_X;
let board = [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL,
             EMPTY_CELL, EMPTY_CELL, EMPTY_CELL,
             EMPTY_CELL, EMPTY_CELL, EMPTY_CELL];
let gameEnded = false;

// Cell Click Event Handler
function makeMove(index) {
    if (!gameEnded && board[index] === EMPTY_CELL) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWin(currentPlayer)) {
            showMessage(`Player ${currentPlayer} wins!`);
            gameEnded = true;
        } else if (isBoardFull()) {
            showMessage("It's a tie!");
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
        }
    }
}

// Check for a win
function checkWin(player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern =>
        pattern.every(index => board[index] === player)
    );
}

// Check if the board is full
function isBoardFull() {
    return !board.includes(EMPTY_CELL);
}

// Show a message
function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.innerText = message;
}

// Reset the game board
function resetBoard() {
    currentPlayer = PLAYER_X;
    board = [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL,
             EMPTY_CELL, EMPTY_CELL, EMPTY_CELL,
             EMPTY_CELL, EMPTY_CELL, EMPTY_CELL];
    gameEnded = false;
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
    showMessage('');
}
