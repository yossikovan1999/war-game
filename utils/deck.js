//================================
//          create card
//================================

function createCard(rank, suit) {
  let cardValue;

  //this will check initialize the card value.
  switch (rank.toUpperCase()) {
    case "J":
      cardValue = 11;
      break;
    case "Q":
      cardValue = 12;
      break;
    case "K":
      cardValue = 13;
      break;
    case "A":
      cardValue = 14;
      break;
    default:
      cardValue = Number(rank);
  }

  //make sure the rank is in the correct range.
  if (!cardValue) {
    throw new Error("must send a value that is in the correct range.");
  }

  //this will return the card objcet.
  return {
    rank: rank,
    suit: suit,
    value: cardValue,
  };
}

function create_deck() {
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "Q",
    "K",
  ];
  const suits = ["H", "C", "D", "S"];
  const list_decks = [];
  for (let r of ranks) {
    for (let s of suits) {
      let card = createCard(r, s);
      list_decks.push(card);
    }
  }
  return list_decks;
}




function shuffle(array){
    for (let i = 1;i<=1000;i++){
        let i = Math.floor(Math.random()*array.length)
        let j = Math.floor(Math.random()*array.length)
        let tmp = array[i]
        array[i] = array[j]
        array[j] = tmp
    }
}



