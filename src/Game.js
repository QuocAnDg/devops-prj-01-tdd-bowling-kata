class Game {
  constructor() {
    this.rolls = [];
  }
  /**
   * called each time the player rolls a ball.
   * @param {number} pins knocked down
   * @return void
   */
  roll(pins) {
    this.rolls.push(pins);
  }
  /**
   * @return {number} the total score for that game
   */
  get score() {
    let score = 0;
    let MAX_TURNS = 10; // 1 turn = 2 rolls
    let j = 0; // rolls index
    for (let i = 0; i < MAX_TURNS; i++) {
      if (this.#isStrike(j)) {
        score += 10 + this.rolls[j + 1] + this.rolls[j + 2];
        j++;
        continue;
      }
      if (this.#isSpare(j)) {
        // spare
        score += 10 + this.rolls[j + 2];
      } else {
        score += this.rolls[j] + this.rolls[j + 1]; // player rolls 2 times = 1 turn passed
      }
      j += 2;
    }
    return score;
  }
  /**
   * @param {number} roll
   * @return {boolean} if spare -> OK;
   */
  #isSpare(roll) {
    return this.rolls[roll] + this.rolls[roll + 1] === 10;
  }
  /**
   * @param {number} roll
   * @return {boolean} if strike -> OK;
   */
  #isStrike(roll) {
    return this.rolls[roll] === 10;
  }
}
module.exports = Game;
