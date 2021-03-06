class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`); // 2
console.log(`Diameter: ${c.diameter}`); // 4
console.log(`Area: ${c.area}`); // 12.566370614359172
