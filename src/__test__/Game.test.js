const Game = require("../Game");

describe("bowling game tests", () => {
  it("should return 20 for a game of 20 points", () => {
    const game = new Game();
    const MAX_ROLL = 20;
    for (let i = 0; i < MAX_ROLL; i++) {
      game.roll(1);
    }
    expect(game.score).toBe(20);
  });
});
