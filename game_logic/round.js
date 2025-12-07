import { compareCards } from "../utils/deck.js";
import { printPlayersCards, printWonRound } from "../io.js";

//======================================
//            remove Cards
//======================================
function drawCards(player1, player2) {
  const player1Card = player1.hand.shift();
  const player2Card = player2.hand.shift();

  const result = compareCards(player1Card, player2Card);

  //this will print the players cards.
  printPlayersCards(player1Card, player2Card);

  if (result === "p1") {
    player1.wonPlay.push(player1Card, player2Card);
    console.log("Player 1 WON THIS ROUND!");
  } else if (result === "p2") {
    player2.wonPlay.push(player1Card, player2Card);
    console.log("Player 2 WON THIS ROUND");
  }

  //here we can add a eles : war
}

//======================================
//            play Round
//======================================
function playRound(player1, player2) {
  console.log("Playing round");
  drawCards(player1, player2);
}

export default playRound;
