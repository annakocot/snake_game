const startBtn = document.querySelector('.new-game-button');
const canvas = document.querySelector('#game-board');
const menu = document.querySelector('.menu-container');

const startGame = () => {
  const boardSizeValue =
    document.getElementById('board-size').options[
      document.getElementById('board-size').selectedIndex
    ].value;
  const snakeStartSpeed =
    document.getElementById('board-size').options[
      document.getElementById('start-speed').selectedIndex
    ].value;

  (function gameSettings() {
    canvas.classList.add('visible');
    menu.classList.add('hidden');
    canvas.setAttribute('height', `${boardSizeValue}px`);
    canvas.setAttribute('width', `${boardSizeValue}px`);
  })(boardSizeValue, snakeStartSpeed);

  ctx = canvas.getContext('2d');
  const unit = 10;

  let snakeHead = [{ x: 100, y: 100 }];
  let snakeBody = [
    { x: 100, y: 100 },
    { x: 90, y: 100 },
    { x: 80, y: 100 },
    { x: 70, y: 100 },
  ];

  let food = { x: 0, y: 0 };

  function randomFood(boardSize) {
    return Math.round((Math.random() * boardSizeValue / unit)) * 10;
  }

  function generateFood() {
    food.x = randomFood(boardSizeValue);
    food.y = randomFood(boardSizeValue);
  }

  function drawFood() {
    generateFood();
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, unit, unit);
    ctx.strokeRect(food.x, food.y, unit, unit);
  }

  function drawSnakeBody(snakePart) {
    ctx.fillStyle = '#11d147';
    ctx.fillRect(snakePart.x, snakePart.y, unit, unit);
    ctx.strokeRect(snakePart.x, snakePart.y, unit, unit);
  }

  function drawSnakeHead(snakePart) {
    ctx.fillStyle = '#0b842d';
    ctx.fillRect(snakePart.x, snakePart.y, unit, unit);
    ctx.strokeRect(snakePart.x, snakePart.y, unit, unit);
  }

  function drawSnake() {
    snakeBody.forEach(drawSnakeBody);
    snakeHead.forEach(drawSnakeHead);
  }

  drawSnake();
  drawFood();
};

startBtn.addEventListener('click', startGame);
