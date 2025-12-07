function create_deck(){
    const ranks = ["2","3","4","5","6","7","8","9","10","A","J","Q","K"]
    const suits = ["H","C","D","S"]
    const list_decks = []
    for (let r of ranks){
        for (let s of suits){
            let card = create_card(r,s)
            list_decks.push(card)
        }
    }
    return list_decks
}