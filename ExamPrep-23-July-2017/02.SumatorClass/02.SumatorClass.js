let expect = require("chai").expect;
let Sumator = require("../02.SumatorClass");

describe("Sumator Class", () => {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });
    describe("check Sumator class and its instance", () => {
        it('if sumator is a object', () => {
            expect(typeof sumator).to.be.equal("object");
        });
        it('check if has add property', () => {
            expect(sumator.__proto__.hasOwnProperty("add")).to.be.true;
        });
        it('check if sumator is an instance of Sumator', () => {
            expect(sumator.__proto__ === Sumator.prototype).to.be.true;
        });
    });
    describe("check all functions", () => {
        it('should return an empty array', () => {
            expect(sumator.toString()).to.be.equal("(empty)");
        });
        it('try add prop with different elements', () => {
            sumator.add(5);
            sumator.add("5");
            sumator.add(true);
            sumator.add(2.2);
            expect(sumator.toString()).to.be.equal("5, 5, true, 2.2");
        });
        it('should return the number 7.2', () => {
            sumator.add(5);
            sumator.add("5");
            sumator.add(true);
            sumator.add(2.2);
            expect(sumator.sumNums()).to.be.equal(7.2);
        });
        it('should print 0 if there are no number types', () => {
            sumator.add("0");
            sumator.add("5");
            sumator.add(true);
            sumator.add({});
            expect(sumator.sumNums()).to.be.equal(0);
        });
        it('should return the number 30 for only numbers', () => {
            sumator.add(5);
            sumator.add(15);
            sumator.add(7.5);
            sumator.add(2.5);
            expect(sumator.sumNums()).to.be.equal(30);
        });
        it('test removeByFilter function with different elements ', () => {
            sumator.add(5);
            sumator.add(0);
            sumator.add("");
            sumator.add(true);
            sumator.add("string");
            sumator.add(!true);
            sumator.removeByFilter((x) => x == false);
            expect(sumator.toString()).to.be.equal("5, true, string");
        });
        it('more complex test for all props and functions', () => {
            sumator.add(5);
            sumator.add(16);
            expect(sumator.sumNums()).to.be.equal(21);
            sumator.add(-6);
            expect(sumator.sumNums()).to.be.equal(15);
            sumator.add(true);
            sumator.add("string");
            sumator.add({});
            sumator.removeByFilter((x) => typeof x === "number" );
            expect(sumator.sumNums()).to.be.equal(0);
            expect(sumator.toString()).to.be.equal("true, string, [object Object]");
        });
    });
});

