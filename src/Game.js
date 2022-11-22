class Game {
  constructor() {
    this.rolls = [];
  }
  roll(pins) {
    this.rolls.push(pins);
  }
  get score() {
    let score = 0;
    let MAX_TURNS = 10; // 1 turn = 2 rolls
    let j = 0; // rolls index
    for (let i = 0; i < MAX_TURNS; i++) {
      if(this.rolls[j] + this.rolls[j + 1]===10){ // spare
        score+=10+this.rolls[j+2];
      }else{
        score += this.rolls[j] + this.rolls[j + 1]; // player rolls 2 times = 1 turn passed
      }
      j += 2;
    }
    return score;
  }
}
module.exports = Game;
