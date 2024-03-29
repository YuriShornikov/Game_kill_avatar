export class Board {
  constructor() {
    this.boardSize = 4;
    this.board = 0;

    this.init();
  }

  init() {
    this.createBoard();
  }

  createBoard() {
    this.board = document.querySelector(".game-board");
    const column = Math.floor(Math.random() * this.boardSize) + 1;
    const row = Math.floor(Math.random() * this.boardSize) + 1;

    return { row, column };
  }
}
