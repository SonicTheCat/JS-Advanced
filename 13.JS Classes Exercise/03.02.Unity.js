class Rat {
    constructor(name) {
        this.name = name;
        this.uniteRats = [];
    }

    unite(input) {
        if (Object.getPrototypeOf(input) === Rat.prototype) {
            this.uniteRats.push(input);
        }
    }

    getRats() {
        return this.uniteRats;
    }

    toString() {
        return this.name + "\n" + this.uniteRats.map(e => `##${e}`).join("")
    }
}
