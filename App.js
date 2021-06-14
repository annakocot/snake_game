const startBtn = document.querySelector('.new-game-button');
const canvas = document.querySelector('#game-board');
const menu = document.querySelector('.menu-container');


const startGame = () => {
  const boardSizeValue = document.getElementById('board-size').options[document.getElementById('board-size').selectedIndex].value;
  const snakeStartSpeed = document.getElementById('board-size').options[document.getElementById('start-speed').selectedIndex].value;


  (function gameSettings() {
    canvas.classList.add('visible');
    menu.classList.add('hidden');
    canvas.setAttribute('height', `${boardSizeValue}px`);
    canvas.setAttribute('width', `${boardSizeValue}px`);
  })(boardSizeValue, snakeStartSpeed);


  ctx = canvas.getContext('2d');
  ctx.fillStyle = 'hotpink';
  const unit = 20;

  let widthblock = boardSizeValue / unit;
  let heightblock = boardSizeValue / unit;
  let food = {
    x: 0,
    y: 0
  }
  function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, unit, unit);
    ctx.strokeRect(food.x, food.y, unit, unit);
  }
  //  Bartosz Mazewski13:54
  //  (Math.round((Math.random() * (boardSizeValue) + min) / unit) * 10) * 10;
  //  Patrycja P13:56
  //  (Math.round((Math.random() * (boardSizeValue) / unit) * 10) * 10;

  let snake = [{ x: 100, y: 100 }, { x: 80, y: 100 }, { x: 60, y: 100 }, { x: 40, y: 100 }];

  function drawSnakePart(snakePart) {
    ctx.fillRect(snakePart.x, snakePart.y, unit, unit);
    ctx.strokeRect(snakePart.x, snakePart.y, unit, unit);
  }
  function drawSnake() {
    snake.forEach(drawSnakePart);
  }

  drawSnake();
  drawFood();
};

startBtn.addEventListener('click', startGame);
