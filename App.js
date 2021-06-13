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

  let snake = [{
      x: 100,
      y: 100
    },
    {
      x: 80,
      y: 100
    },
    {
      x: 60,
      y: 100
    },
    {
      x: 40,
      y: 100
    }
  ];

  let changingDirection = false;
  let dx = unit;
  let dy = 0;

  document.addEventListener("keydown", changeDirection);


  function drawSnakePart(snakePart) {
    ctx.fillRect(snakePart.x, snakePart.y, unit, unit);
    ctx.strokeRect(snakePart.x, snakePart.y, unit, unit);
  }

  function drawSnake() {
    snake.forEach(drawSnakePart);
  }

  function changeDirection(event) {
    const W_KEY = 87;
    const S_KEY = 83;
    const A_KEY = 65;
    const D_KEY = 68;

    if (changingDirection) return;
    changingDirection = true;
    const keyPressed = event.keyCode;
    const goingUp = dy === -unit;
    const goingDown = dy === unit;
    const goingRight = dx === unit;
    const goingLeft = dx === -unit;

    if (keyPressed === A_KEY && !goingRight) {
      dx = -unit;
      dy = 0;
    }
    if (keyPressed === W_KEY && !goingDown) {
      dx = 0;
      dy = -unit;
    }
    if (keyPressed === D_KEY && !goingLeft) {
      dx = unit;
      dy = 0;
    }
    if (keyPressed === S_KEY && !goingUp) {
      dx = 0;
      dy = unit;
    }
  }

  function moveSnake() {
    const head = {
      x: snake[0].x + dx,
      y: snake[0].y + dy
    };
    snake.unshift(head);
    snake.pop();
  }

  drawSnake();
  moveSnake();

};

startBtn.addEventListener('click', startGame);