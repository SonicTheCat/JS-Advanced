function carFactory(order) {
    let factory = (() =>  {
        let engines = {
            small: {power: 90, volume: 1800},
            normal: {power: 120, volume: 2400},
            monster: {power: 200, volume: 3500}
        };
        let carriages = {
            hatchback: {type: "hatchback", color: ""},
            coupe: {type: "coupe", color: ""},
        };

        function showroom() {
            let car = {model: `${order.model}`};
            car.engine = setEngine(order.power);
            car.carriage = setCarriage(order.carriage, order.color);
            car.wheels = setWheeels(order.wheelsize);

            return car;
        }

        function setWheeels(size) {
            let arr = new Array(4);
            let wheels = Math.floor(size);
            wheels = wheels % 2 === 0 ? wheels - 1 : wheels;
            return arr.fill(wheels, 0, 4);
        }

        function setCarriage(type, color) {
            let carriage = carriages[type];
            carriage.color = color;
            return carriage
        }

        function setEngine(wanted) {
            return engines[Object.keys(engines).filter(e => engines[e].power >= wanted)[0]];
        }

        return {showroom};
    })();
    return factory.showroom(order)
}

console.log(carFactory({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));