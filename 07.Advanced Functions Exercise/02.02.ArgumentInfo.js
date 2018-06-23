function result() {
    let summary = [];

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);

        if (!summary[type]) {
            summary[type] = 1;
        }
        else {
            summary[type]++;
        }
    }
    let sortedTypes = [];
    for (let currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }
    sortedTypes.sort((a,b) => b[1] - a[1]).forEach((key) => console.log(key[0] + " = " + key[1]));
}

result('cat', 42, function () {console.log('Hello world!');});