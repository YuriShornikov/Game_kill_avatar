import { Character } from "../js/character";
import { Board } from "../js/board";

class Game {
  constructor() {
    this.board = new Board();
    this.character = new Character();
    this.element = this.character.createCharacter();

    // Добавление очков
    this.score = 0;
    this.count = 0;
    this.missedGoblins = 0;
    this.maxMissedGoblins = 5;
    this.init();
  }

  init() {
    this.clickCharacter();
    
    setInterval(() => this.moveCharacter(), 1000);
  }

  // Добавляем клик
  clickCharacter() {
    this.element.onclick = () => this.handleCharacterClick();
  }

  // Перемещение внутри
  moveCharacter() {    
    const column = Math.floor(Math.random() * this.board.boardSize) + 1;
    const row = Math.floor(Math.random() * this.board.boardSize) + 1;
    this.element.style.gridColumn = column;
    this.element.style.gridRow = row;
    this.count++;

    if (!this.element.hidden && this.count > 1) {
      this.missedGoblins++;
      console.log(this.missedGoblins);
      if (this.missedGoblins >= this.maxMissedGoblins) {
        console.log("Game over");
        this.endGame();
      }
    } else {
      this.element.hidden = false;
    }
  }

  handleCharacterClick() {
    this.element.hidden = true;
    this.score++;
    console.log(this.score);
  }

  // Конец игры
  endGame() {
    alert(`Your max point: ${this.score}`);
    this.count = 0;
    this.missedGoblins = 0;
    this.count = 0;
  }
}

const game = new Game();
