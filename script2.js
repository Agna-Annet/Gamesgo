const rows = 6;
const cols = 7;
let board = [];
let currentPlayer = 'X';
let gameOver = false;

function createBoard() {
    const boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    board = [];
    gameOver = false;
    document.getElementById('message').textContent = '';
    document.getElementById('winnerMessage').style.visibility = 'hidden';

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => makeMove(c));
            boardElement.appendChild(cell);
            row.push('');
        }
        board.push(row);
    }
    updateBackground();
}

function makeMove(col) {
    if (gameOver) return;

    for (let r = rows - 1; r >= 0; r--) {
        if (board[r][col] === '') {
            board[r][col] = currentPlayer;
            updateBoard();
            if (checkWinner()) {
                const winnerMessage = `Player ${currentPlayer === 'X' ? 'Blue' : 'Red'} Wins!`;
                document.getElementById('message').textContent = winnerMessage;
                document.getElementById('winnerMessage').textContent = winnerMessage;
                document.getElementById('winnerMessage').style.visibility = 'visible';
                gameOver = true;
                return;
            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            updateBackground();
            return;
        }
    }
}

function updateBoard() {
    const boardElement = document.getElementById('board');
    Array.from(boardElement.children).forEach((cell, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        cell.classList.remove('X', 'O');
        if (board[row][col] !== '') {
            cell.classList.add(board[row][col]);
        }
    });
}

function checkWinner() {
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols - 3; c++) {
            if (board[r][c] && board[r][c] === board[r][c + 1] && board[r][c] === board[r][c + 2] && board[r][c] === board[r][c + 3]) {
                return true;
            }
        }
    }

    
    for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] && board[r][c] === board[r + 1][c] && board[r][c] === board[r + 2][c] && board[r][c] === board[r + 3][c]) {
                return true;
            }
        }
    }

    
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < cols - 3; c++) {
            if (board[r][c] && board[r][c] === board[r + 1][c + 1] && board[r][c] === board[r + 2][c + 2] && board[r][c] === board[r + 3][c + 3]) {
                return true;
            }
        }
    }

    
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < cols - 3; c++) {
            if (board[r][c] && board[r][c] === board[r - 1][c + 1] && board[r][c] === board[r - 2][c + 2] && board[r][c] === board[r - 3][c + 3]) {
                return true;
            }
        }
    }

    return false;
}

function updateBackground() {
    document.body.classList.toggle('blue-turn', currentPlayer === 'X');
    document.body.classList.toggle('red-turn', currentPlayer === 'O');
}

document.getElementById('restart').addEventListener('click', createBoard);

createBoard();