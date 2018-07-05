let Console = require("../05.C#Console").Console;
let expect = require("chai").expect;

describe("C# console ", () => {
    it('should return undefined from a single number', () => {
        expect(Console.writeLine(5)).to.be.undefined;
    });
    it('should return "No string format given" ', () => {
        expect(() => Console.writeLine()).throw(TypeError)
    });
    it('should return string from string', () => {
        expect(Console.writeLine("return")).to.be.equal("return");
    });
    it('should return JSON string from object', () => {
        expect(Console.writeLine({age: 18})).to.be.equal(JSON.stringify({age: 18}));
    });
    it('should return TypeError', () => {
        expect(() => Console.writeLine(0, "")).throw(TypeError)
    });
    it('should return RangeError for less parameters', () => {
        expect(() => Console.writeLine("the sum of {0} and {1} is {2}", 1, 0)).throw(RangeError)
    });
    it('should return RangeError for more parameters', () => {
        expect(() => Console.writeLine("Js {0}", "Core", "Mocha")).throw(RangeError)
    });
    it('should return RangeError for equal placeholders', () => {
        expect(() => Console.writeLine("The perfect match {0} {0}", "doesNot", "exist")).throw(RangeError)
    });
    it('should recognize the number in the palceholder', () => {
        expect(() => Console.writeLine("This will be {101}", "WRONG")).throw(RangeError);
    });
    it('should change all placeholders', () => {
        let string = "Ne znam {0} da {1} tuk!";
        expect(Console.writeLine(string, "kvo", "napisha")).to.be.equal("Ne znam kvo da napisha tuk!")
    });
});






