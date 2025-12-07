import {createCard,compareCards,create_deck,shuffle} from "./deck.js"

function createPlayer(name){
  return {
    name:name,
    hand:[],
    wonPlay:[]
  }
}

function initGame(){
  let player1 = createPlayer("eyal golan")
  let AI = createPlayer("AI")
  const deck = create_deck()
  shuffle(deck)
  player1.hand = deck.slice(0,26)
  AI.hand = deck.slice(26,52)
  return {
    deck:deck,
    player1:player1,
    player2:AI  
  }
}

 