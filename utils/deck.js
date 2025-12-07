//================================
//          create card
//================================

function createCard(rank, suit) {
  let cardValue;

  //make sure the rank is in the correct range.
  if (rank < 2 || rank > 14) {
    throw new Error("rank is greater then 14 or smaller then 2");
  }

  //this will check initialize the card value.
  switch (rank) {
    case 11:
      cardValue = "J";
      break;
    case 12:
      cardValue = "Q";
      break;
    case 13:
      cardValue = "K";
      break;
    case 14:
      cardValue = "A";
      break;
    default:
      cardValue = rank;
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
      let card = create_card(r, s);
      list_decks.push(card);
    }
  }
  return list_decks;
}
