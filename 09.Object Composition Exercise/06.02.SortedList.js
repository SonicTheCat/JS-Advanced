function sortedList() {
    return (() => {
        let collection = [];
        let sortCollection = (a, b) => a - b;

        function add(n) {
            collection.push(n);
            collection.sort(sortCollection);
        }

        function remove(i) {
            if (!isOutside(i)) {
                collection.splice(i, 1);
                collection.sort(sortCollection);
            }
        }

        function get(i) {
            if (!isOutside()) {
                return collection[i];
            }
        }

        function isOutside(index) {
            if (index >= collection.length || index < 0) {
                return true;
            }
            return false;
        }

        function checkSize() {
            return collection.length
        }

        let obj = {add, remove, get};
        obj.__defineGetter__("size", checkSize);
        return obj;
    })();
}
