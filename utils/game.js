import playRound from "./round.js";
import { printWinner, printTie } from ".././io.js";

//======================================
//            print winner
//======================================
function handleEndOfGame(player1, player2) {
  if (player1.won_pile.length > player2.won_pile.length) {
    printWinner(player1.name, player2.name);
  } else if (player2.won_pile.length > player1.won_pile.length) {
    printWinner(player2.name, player1.name);
  } else {
    console.log("NO ONE WON, A TIE OCCURED!!!!");
  }
}

//======================================
//             Game Over
//======================================
function gameOver() {
  //will return true if one of the players has no cards left.
  return player1.hand.length <= 0 || player2.hand.length <= 0;
}

//======================================
//                game
//======================================
function game(player1, player2) {
  while (!gameOver()) {
    playRound(player1, player2);
  }

  handleEndOfGame(player1, player2);
}

export default game;
