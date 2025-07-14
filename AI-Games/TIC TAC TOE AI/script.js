let board = Array(9).fill(' ');

let player = null;
let ai = null;

let gameActive = false;

const boardDiv = document.getElementById('board');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');

function setPlayerSymbol(symbol) {
  player = symbol;
  ai = symbol === 'X' ? 'O' : 'X';

  document.getElementById('symbol-choice').classList.add('hidden');
  boardDiv.classList.remove('hidden');

  renderBoard();

  gameActive = true;

  if (player === 'O') {
    aiMove();
  }
}

function renderBoard() {
  boardDiv.innerHTML = '';

  board.forEach((cell, i) => {
    const cellDiv = document.createElement('div');
    cellDiv.className = 'cell';
    cellDiv.textContent = cell;
    cellDiv.onclick = () => handleMove(i);
    boardDiv.appendChild(cellDiv);
  });
}

function handleMove(index) {
  if (!gameActive || board[index] !== ' ' || !player) return;

  board[index] = player;
  renderBoard();

  if (checkWinner(board, player)) {
    endGame('You Win!');
    return;
  } else if (isFull(board)) {
    endGame('Its a tie!');
    return;
  }

  aiMove();
}

function aiMove() {
  const move = bestMove();
  if (move !== null) {
    board[move] = ai;
    renderBoard();

    if (checkWinner(board, ai)) {
      endGame('Computer Win!');
    } else if (isFull(board)) {
      endGame('Tie!');
    }
  }
}

function endGame(msg) {
  gameActive = false;
  message.textContent = msg;
  restartBtn.classList.remove('hidden');
}

function restartGame() {
  board = Array(9).fill(' ');
  player = null;
  ai = null;
  gameActive = false;

  message.textContent = '';
  restartBtn.classList.add('hidden');
  boardDiv.classList.add('hidden');
  document.getElementById('symbol-choice').classList.remove('hidden');
}

function availableMoves(board) {
  return board
    .map((val, idx) => (val === ' ' ? idx : null))
    .filter(i => i !== null);
}

function checkWinner(b, p) {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return wins.some(pattern => pattern.every(i => b[i] === p));
}

function isFull(board) {
  return board.every(cell => cell !== ' ');
}

function minimax(b, depth, isMax) {
  if (checkWinner(b, ai)) return 1;
  if (checkWinner(b, player)) return -1;
  if (isFull(b)) return 0;

  let bestScore = isMax ? -Infinity : Infinity;

  for (let move of availableMoves(b)) {
    b[move] = isMax ? ai : player;
    let score = minimax(b, depth + 1, !isMax);
    b[move] = ' ';

    bestScore = isMax ? Math.max(score, bestScore) : Math.min(score, bestScore);
  }

  return bestScore;
}

function bestMove() {
  let bestScore = -Infinity;
  let move = null;

  for (let i of availableMoves(board)) {
    board[i] = ai;
    let score = minimax(board, 0, false);
    board[i] = ' ';

    if (score > bestScore) {
      bestScore = score;
      move = i;
    }
  }

  return move;
}
