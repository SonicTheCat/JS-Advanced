let solution = (function () {
    function add(vec1, vec2) {
        return [vec1[0] + vec2[0], vec1[1] + vec2[1]]
    }

    function multiply(vec, scalar) {
        return [vec[0] * scalar, vec[1] * scalar];
    }

    function length(vec) {
        return Math.sqrt(vec[0] * vec[0] + vec[1] * vec[1]);
    }

    function dot(vec1, vec2) {
        return vec1[0] * vec2[0] + vec1[1] * vec2[1];
    }

    function cross(vec1,vec2) {
       return vec1[0] * vec2[1] - vec1[1] * vec2[0];
    }

    return {
        add: add,
        multiply: multiply,
        length: length,
        dot: dot,
        cross: cross
    };

})();
console.log(solution.add([1, 1], [1, 0]));