function greatestCommonDiv(a, b) {
    while (b !== 0) {
       let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(greatestCommonDiv(252, 105));