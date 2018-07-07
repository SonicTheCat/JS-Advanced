
arrayOfArrays = [
    [1,2,3,4],
    [5,6,7,4],
    [9,10,11,6]
];

console.log(arrayOfArrays.reduce(function (array1, array2) {
    return array1.map(function (value, index) {
        return value + array2[3];
    });
}));

