class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    get innerLength() {
        return this._innerLength;
    }

    set innerLength(value) {
        if (value < 0) {
            this._innerLength = 0;
        } else {
            this._innerLength = value;
        }
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        this.innerLength -= value;
    }

    toString() {
        if (this.innerString.length <= this.innerLength) {
            return this.innerString;
        }
        if (this.innerLength === 0) {
            return "...";
        }
        return this.innerString.substr(0, this.innerLength) + "...";
    }
}

let str = new Stringer("Test", -2);
console.log(str.innerLength);
console.log(str.toString());
str.increase(3);
console.log(str.innerLength);
console.log(str.toString());
str.decrease(0);
console.log(str.toString());
str.decrease(4);
console.log(str.toString());