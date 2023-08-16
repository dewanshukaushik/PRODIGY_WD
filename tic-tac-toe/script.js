const cells = document.querySelectorAll('[data-cell]');
const restartButton = document.getElementById('restart-button');
const statusDisplay = document.getElementById('status');
let currentPlayer = 'X';
let gameActive = true;

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

restartButton.addEventListener('click', restartGame);

function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = Array.from(cells).indexOf(cell);

  if (!gameActive || cell.textContent !== '') {
    return;
  }

  cell.textContent = currentPlayer;
  if (checkWin()) {
    gameActive = false;
    statusDisplay.textContent = `${currentPlayer} wins!`;
  } else if (checkDraw()) {
    gameActive = false;
    statusDisplay.textContent = "It's a draw!";
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `${currentPlayer}'s turn`;
  }
}

function checkWin() {
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winCombos.some(combination => {
    const [a, b, c] = combination;
    return cells[a].textContent !== '' && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
  });
}

function checkDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

function restartGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  statusDisplay.textContent = '';
  currentPlayer = 'X';
  gameActive = true;
}
