function carFactory(order) {
    let engines = {
        small: {power: 90, volume: 1800},
        normal: {power: 120, volume: 2400},
        monster: {power: 200, volume: 3500}
    };
    let carriage = {
        hatchback: {type: "hatchback"},
        coupe: {type: "coupe"},
    };

    let assemble = {model: `${order.model}`};
    if (order.power <= engines.small.power) {
        assemble.engine = engines.small;
    } else if (order.power <= engines.normal.power) {
        assemble.engine = engines.normal;
    } else {
        assemble.engine = engines.monster;
    }

    if (order.carriage === carriage.hatchback.type) {
        assemble.carriage = carriage.hatchback;
    } else {
        assemble.carriage = carriage.coupe;
    }
    assemble.carriage.color = order.color;

    assemble.wheels = new Array(4);
    let wheels = Math.floor(order.wheelsize);
    wheels = wheels % 2 === 0 ? wheels - 1 : wheels;
    assemble.wheels.fill(wheels, 0, 4);

    return assemble;
}

console.log(carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
));