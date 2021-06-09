const startBtn = document.querySelector('.new-game-button');
const gameBoard = document.querySelector('.game-board');
const menu = document.querySelector('.menu-container');

const startGame = () => {
  const boardSizeValue = document.getElementById('board-size').options[document.getElementById('board-size').selectedIndex].value;

  gameBoard.classList.add('visible');
  menu.classList.add('hidden');
  gameBoard.style.height = `${boardSizeValue}px`;
  gameBoard.style.width = `${boardSizeValue}px`;
};

startBtn.addEventListener('click', startGame);
