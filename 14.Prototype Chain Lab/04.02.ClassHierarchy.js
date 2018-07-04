class Figure {
    constructor() {
        if (new.target === Figure) {
            throw new TypeError("nemoi tai we!")
        }
    }

    get area() {
        switch (this.constructor.name) {
            case "Circle":
                return Math.PI * this.radius * this.radius;
            case "Rectangle":
                return this.width * this.height;
        }
    }

    toString() {
        let props = Object.getOwnPropertyNames(this);
        props = props.map(p => p + ": " + this[p]);
        return `${this.constructor.name} - ${props.join(", ")}`
    }
}

class Circle extends Figure {
    constructor(r) {
        super();
        this.radius = r;
    }
}

class Rectangle extends Figure {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }
}

let ci = new Circle(5);
console.log(ci.toString());
let rec = new Rectangle(10, 5);
console.log(rec.toString());