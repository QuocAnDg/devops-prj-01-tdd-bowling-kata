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
  // test without spare and strike
  it("should return 26", () => {
    const game = new Game();
    const MAX_ROLL = 20;
    game.roll(3);
    game.roll(5);
    for (let i = 2; i < MAX_ROLL; i++) {
      game.roll(1);
    }
    expect(game.score).toBe(26);
  });
  it("should return 36 for a game with 1 spare", () => {
    const game = new Game();
    const MAX_ROLL = 20;
    game.roll(3);
    game.roll(7);
    game.roll(4);
    game.roll(2);

    for (let i = 4; i < MAX_ROLL; i++) {
      game.roll(1);
    }
    expect(game.score).toBe(36);
  });
});
