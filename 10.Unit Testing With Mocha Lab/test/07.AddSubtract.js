let expect = require("chai").expect;
let createCalculator = require("../07.AddSubtract").createCalculator;


describe('create calculatro', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
    it('should retrun the sum for 2 and 5', function () {
        calc.add(2);
        calc.add(5);
        expect(calc.get()).to.be.equal(7);
    });
    it('should return 10 for subtract 20 and then add 30', function () {
        calc.subtract(20);
        calc.add(30);
        expect(calc.get()).to.be.equal(10);
    });
    it('should retrun -11 for string number', function () {
        calc.subtract("21");
        calc.add(10);
        expect(calc.get()).to.be.equal(-11);
    });
    it('should retrun 22 for subtracting negative number', function () {
        calc.subtract(-22);
        expect(calc.get()).to.be.equal(22);
    });
    it('should return floating point result', function () {
        calc.add(3.14);
        calc.subtract(1.13);
        expect(calc.get()).to.be.closeTo(2.01, 0.001)
    });
    it('should return undefined for text', function () {
        calc.add("pesho");
        expect(calc.get()).to.be.NaN
    });
    it('should return 0 for an empty string', function () {
        calc.add([]);
        expect(calc.get()).to.be.equal(0)
    });
});
