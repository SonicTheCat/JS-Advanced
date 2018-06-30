let result = (function() {
    let Faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    let Suits = {
        SPADES: "\u2660",
        HEARTS: "\u2665",
        DIAMONDS: "\u2666",
        CLUBS: "\u2663"
    };

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }
        get face() {
            return this._face;
        }

        set face(value) {
            if (!Faces.includes(value)) {
                console.log(value);
                throw new Error("Invalid card face: " + value);
            }
            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (!Object.keys(Suits).map(k =>Suits[k]).includes(value)) {
                throw new Error("Invalid card suit: " + value);
            }
            this._suit = value;
        }

        toString() {
            return this._face + this._suit;
        }
    }
    return {Suits, Card}
})()

