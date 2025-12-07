import { createCard, compareCards, create_deck, shuffle } from "./deck.js";
import playRound from "./round.js";
import { printWinner} from ".././io.js";

function createPlayer(name) {
  return {
    name: name,
    hand: [],
    wonPlay: [],
  };
}

function initGame() {
  let player1 = createPlayer("eyal golan");
  let AI = createPlayer("AI");
  const deck = create_deck();
  shuffle(deck);
  player1.hand = deck.slice(0, 26);
  AI.hand = deck.slice(26, 52);
  return {
    deck: deck,
    player1: player1,
    player2: AI,
  };
}

//======================================
//            print winner
//======================================
function handleEndOfGame(player1, player2) {


  
  if (player1.wonPlay.length > player2.wonPlay.length) {
    printWinner(player1.name, player2.name);
  } else if (player2.wonPlay.length > player1.wonPlay.length) {
    printWinner(player2.name, player1.name);
  } else {
    console.log("NO ONE WON, A TIE OCCURED!!!!");
  }
}

//======================================
//             Game Over
//======================================
function gameOver(player1,player2) {
  //will return true if one of the players has no cards left.
  return player1.hand.length <= 0 || player2.hand.length <= 0;
}

//======================================
//                game
//======================================
function game(player1, player2) {
  while (!gameOver(player1,player2)) {
    playRound(player1, player2);
  }

  handleEndOfGame(player1, player2);
}

export default game;
const play = initGame()
game(play.player1,play.player2)