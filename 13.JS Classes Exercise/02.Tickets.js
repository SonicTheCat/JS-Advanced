function tickets(input, criteria) {
    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let line of input) {
        let [destination, price, status] = line.split("|");
        price = +price;
        result.push(new Ticket(destination, price, status));
    }

    return result.sort((a, b) => sortingByCriteria(a, b));

    function sortingByCriteria(a, b) {
        let first = a[criteria];
        let second = b[criteria];
        if (criteria !== "price") {
            return first.localeCompare(second);
        }
        return first - second;
    }
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));