function result() {
    let summary = {};
    for (let arg of arguments) {
        let type = typeof arg;
        console.log(type + ": " + arg);

        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }
    let sorted = Object.keys(summary).sort((a,b) => {
        return summary[b] - summary[a];
    });
    for (let key of sorted) {
        console.log(key + " = " + summary[key]);
    }
}
