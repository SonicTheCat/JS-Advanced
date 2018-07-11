class Player {
    constructor(nickname) {
        this.nickname = nickname;
        this.scoreList = [];
    }

    get scoreCount() {
        return this.scoreList.length;
    }

    get highestScore() {
        return this.scoreList[0];
    }

    get topFiveScore() {
        return this.scoreList.slice(0, 5);
    }

    get nickname() {
        return this._nickname;
    }

    set nickname(name) {
        this._nickname = name;
    }

    toString() {
            return `${this.nickname}: [${this.scoreList}]`
    }

    addScore(num) {
        if (!isNaN(num) && num !== null) {
            this.scoreList.push(+num);
            this.scoreList.sort((a, b) => b - a);
        }
        return this;
    }
}
