const startBtn = document.querySelector('.new-game-button');
const gameBoard = document.querySelector('.game-board');
const menu = document.querySelector('.menu-container');


const startGame = () => {
  const boardSizeValue = document.getElementById('board-size').options[document.getElementById('board-size').selectedIndex].value;
  const snakeStartSpeed = document.getElementById('board-size').options[document.getElementById('start-speed').selectedIndex].value;

  (function gameSettings() {
    gameBoard.classList.add('visible');
    menu.classList.add('hidden');
    gameBoard.style.height = `${boardSizeValue}px`;
    gameBoard.style.width = `${boardSizeValue}px`;
   })(boardSizeValue, snakeStartSpeed);

   class Snake {
     constructor(){
      this.snakePosition = [
      { x: 100, y: 100},
      { x: 90, y: 100},
      { x: 80, y: 100},
      { x: 70, y: 100}];

    //  handleSnakeMove(){

     };

     handleSnakeDraw(){
      const canvas = document.getElementsByClassName('game-board');
      const ctx = canvas[0].getContext('2d');
      ctx.strokeRect(50 , 50, unit, unit);
     };


  // 1. metoda - rysowanie
  // 2. metoda - zmiana pozycji


   }

  const unit = 10;
  const deltaX = unit;
  //const deltaY;





};

startBtn.addEventListener('click', startGame);
