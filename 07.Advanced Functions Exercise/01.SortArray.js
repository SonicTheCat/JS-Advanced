function solve(arr, bool) {
    function sortArray(inputArray, sortedMethod) {
        let ascendingComparator = function (a, b) {
            return a - b;
        };
        let descendingComparator = function (a, b) {
            return b - a;
        };
        let sortingStrategies = {
            "asc": ascendingComparator,
            "desc": descendingComparator
        };

        return inputArray.sort(sortingStrategies[sortedMethod])
    }
    console.log(sortArray(arr, bool));
}
solve([14, 7, 17, 6, 8], 'desc');