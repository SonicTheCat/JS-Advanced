class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}

let rec = new Rectangle(5,10,"blue");
console.log(rec);
console.log(rec.calcArea());


