import { initGame, game } from "./game_logic/game.js";

function main() {
  const play = initGame();
  game(play.player1, play.player2);
}

main();
