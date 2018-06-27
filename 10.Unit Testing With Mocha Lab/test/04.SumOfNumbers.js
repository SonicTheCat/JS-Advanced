let expect = require("chai").expect;
let sum = require("../04.SumOfNumbers").sum;

describe("sum numbers from an array", function () {
    it('should return 10 from [5,2,2,1]', function () {
        expect(sum([5, 2, 2, 1])).to.be.equal(10);
    });

    it('should return -10 from [-5,-5]', function () {
        expect(sum([-5, -5])).to.equal(-10);
    });

    it('should return 0 frim an empty array', function () {
        expect(sum([])).to.equal(0);
    });

    it('should return NaN from a ["softuni", 1, "jsKore", 22]', function () {
        expect(sum(["softuni", 1, "jsKore", 22])).to.be.NaN;
    });

    it('should return 1001 form [1001]', function () {
        expect(sum([1001])).to.equal(1001);
    });
});