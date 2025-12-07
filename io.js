//=========================================
//            printPlayersCards
//=========================================
export function printPlayersCards(player1Card, player2Card) {
  console.log(`Player 1 cars is : ${player1Card.rank} OF ${player1Card.suite}`);
  console.log(`Player 2 cars is : ${player2Card.rank} OF ${player2Card.suite}`);
}

//=========================================
//             printWonRound
//=========================================
export function printWonRound(playerName) {
  console.log(`${playerName} WON THIS ROUND!`);
}

//=========================================
//              printWinner
//=========================================
export function printWinner(winner, looser) {
  console.log(`Player ${winner} WON! player ${looser} LOST!!!`);
}
