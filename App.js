const startBtn = document.querySelector('.new-game-button');
const gameBoard = document.querySelector('.game-board');
const menu = document.querySelector('.menu-container');


const startGame = () => {
  const boardSizeValue = document.getElementById('board-size').options[document.getElementById('board-size').selectedIndex].value;
  const snakeStartSpeed = document.getElementById('board-size').options[document.getElementById('start-speed').selectedIndex].value;
  const unit = 20;
  const deltaX = unit;
  const deltaY;
  const snake = [{
    "name":"head"
    "x": 0;
    "y":0;
  },
  {
    "name":"body"
    "x": 0;
    "y":0;
  },
  {
    "name":"body"
    "x": 0;
    "y":0;
  },
  {
    "name":"body"
    "x": 0;
    "y":0;
  }];

  gameBoard.classList.add('visible');
  menu.classList.add('hidden');
  gameBoard.style.height = `${boardSizeValue}px`;
  gameBoard.style.width = `${boardSizeValue}px`;
};

startBtn.addEventListener('click', startGame);
