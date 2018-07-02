class Rat {
    constructor(name) {
        this.name = name;
        this.uniteRats = [];
    }

    unite(input) {
        if (input instanceof Rat) {
            this.uniteRats.push(input);
        }
    }

    getRats() {
        return this.uniteRats;
    }

    toString() {
        let arr = this.uniteRats;
        arr.unshift(this.name);
        return arr.join("\n##")
    }
}

