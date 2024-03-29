import goblin from "../img/goblin.png";

export class Character {
  constructor() {
    this.getBoard = document.querySelector(".game-board");
    this.character = 0;
  }

  createCharacter() {
    this.character = document.createElement("img");
    this.character.src = goblin;
    this.character.className = "character";
    this.getBoard.appendChild(this.character);
    return this.character;
  }
}
