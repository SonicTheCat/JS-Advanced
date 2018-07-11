class LineManager {
    constructor(stops) {
        this.stops = stops;
        this.counter = 0;
        this.delay = 0;
        this.timeOnCourse = 0;
    }

    get stops() {
        return this._stops;
    }

    set stops(arr) {
        for (let obj of arr) {
            if (typeof obj.name !== "string" || obj.name === "") {
                throw new Error('Invalid data')
            }
            if (typeof obj.timeToNext !== "number" || obj.timeToNext < 0) {
                throw new Error('Invalid data')
            }
            this._stops = arr;
        }
    }

    get atDepot() {
        return this.counter === this._stops.length - 1;
    }

    get nextStopName() {
        if (this.atDepot) {
            return "At depot.";
        } else {
            return this._stops[this.counter + 1].name;
        }
    }

    get currentDelay() {
        return this.delay;
    }

    arriveAtStop(minutes) {
        if (minutes < 0) {
            throw new Error("minutes cannot be negative");
        }
        if (this.atDepot) {
            throw new Error("last stop reached");
        }
        let i = this.counter;
        this.delay += minutes - this._stops[i].timeToNext;
        this.timeOnCourse += minutes;
        this.counter++;
        return !this.atDepot;
    }

    toString() {
        let i = this.counter;
        let output = "";
        if (this.atDepot) {
            output += `Line summary\n- Course completed\n`;
        } else {
            output += `Line summary\n- Next stop: ${this._stops[i + 1].name}\n`;
        }
        return output += `- Stops covered: ${i}\n- Time on course: ${this.timeOnCourse} minutes\n- Delay: ${this.delay} minutes`;
    }
}
