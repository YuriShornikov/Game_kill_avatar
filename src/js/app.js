import goblin from "../img/goblin.png";

class Game {
  constructor() {
    this.boardSize = 4;
    this.character = 0;
    this.board = 0;

    // Добавление очков
    this.count = 0;
    this.score = 0;
    this.missedGoblins = 0;
    this.maxMissedGoblins = 5;
    this.init();
  }

  init() {
    this.createBoard();
    this.createCharacter();
    setInterval(() => this.moveCharacter(), 1000);
  }

  createBoard() {
    this.board = document.querySelector('.game-board');
  }

  // Создание гоблина
  createCharacter() {
    this.character = document.createElement('img');
    this.character.src = goblin;
    this.character.className = 'character';
    this.board.appendChild(this.character);

    // Добавляем клик
    this.character.onclick = () => this.handleCharacterClick();
    
  }

  // Перемещение внутри 
  moveCharacter() {
    const row = Math.floor(Math.random() * this.boardSize) + 1;
    const column = Math.floor(Math.random() * this.boardSize) + 1;
    this.character.style.gridColumn = column;
    this.character.style.gridRow = row;
    this.count++;
    
    
    if (this.character.hidden == false && this.count > 1) {
      this.missedGoblins++;
      console.log(this.missedGoblins)
        
      if (this.missedGoblins >= this.maxMissedGoblins) {
        this.endGame();
        console.log('Game over');
      }
    } else {
      this.character.hidden = false;
    }
    
  }

  handleCharacterClick() {
    this.character.hidden = true;   
    this.score++;
    console.log(this.score)


  }

  updateScore() {
    print(this.score);
  }

  endGame() {
    alert(`Your max point: ${this.score}`)
    this.missedGoblins = 0;
    this.score = 0;
    this.count = 0;
    
  }
}

const game = new Game();
