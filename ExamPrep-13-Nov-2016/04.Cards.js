function cardDeckBuilder(selector) {
    let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let suits = {
        C: "\u2663",
        D: "\u2666",
        H: "\u2665",
        S: "\u2660"
    };
    let allCards = [];

    return {
        addCard: function (face, suit) {
            for (let s in suits) {
                if (s === suit && faces.includes(face)) {
                    allCards.push([face, suit]);
                    printCards(face,suit)
                }
            }
            function reverseCards() {
                $(selector).empty();
                for (let cards of allCards.reverse()) {
                    let [f, s] = cards;
                    printCards(f,s)
                }
            }
            function printCards(face,suit) {
                $(selector).append($(`<div class='card'>${face} ${suits[suit]}</div>`).on("click", reverseCards))
            }
        }
    }
}