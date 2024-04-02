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
    
    for (let i = 0; i < this.boardSize * this.boardSize; i += 1) {
      const cellEl = document.createElement("div");
      cellEl.classList.add("game-board-cell");
      this.board.appendChild(cellEl);
    }
  }
}
