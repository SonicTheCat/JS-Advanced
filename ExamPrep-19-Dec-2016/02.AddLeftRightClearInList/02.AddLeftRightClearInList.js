let expect = require("chai").expect;
let makeList = require("../02.AddLeftRightClearInList");

describe("test makeList function", () => {
    let list;
    beforeEach(function () {
        list = makeList();
    });
    it('should retrun list of type object', () =>  {
       expect(typeof list).to.be.equal("object");
    });
    it('should have prop addLeft', () =>  {
        expect(list.hasOwnProperty("addLeft")).to.be.true;
    });
    it('should have prop addRight', () =>  {
        expect(list.hasOwnProperty("addRight")).to.be.true;
    }); it('should have prop clear', () =>  {
        expect(list.hasOwnProperty("clear")).to.be.true;
    });
    it('should return empty array', () =>  {
        expect(list.toString()).to.be.equal("");
    });
    it('should have prop addLeft', () =>  {
        list.addLeft("true");
        list.addRight("JS");
        list.addRight("Core");
        expect(list.toString()).to.be.equal("true, JS, Core");
        list.addLeft(1);
        list.addLeft({});
        expect(list.toString()).to.be.equal("[object Object], 1, true, JS, Core");
    });
    it('should have prop addRight', () =>  {
        expect(list.toString()).to.be.equal("");
        list.addLeft("true");
        expect(list.toString()).to.be.equal("true");
        list.addRight({});
        expect(list.toString()).to.be.equal("true, [object Object]");
        list.addRight("Core");
        expect(list.toString()).to.be.equal("true, [object Object], Core");
        list.addLeft(true);
        expect(list.toString()).to.be.equal("true, true, [object Object], Core");
    });
    it('should have prop addRight', () =>  {
        list.addLeft("true");
        expect(list.toString()).to.be.equal("true");
        list.addRight({});
        expect(list.toString()).to.be.equal("true, [object Object]");
        list.clear();
        expect(list.toString()).to.be.equal("");
        list.addLeft(true);
        list.addRight(false);
        list.clear();
        expect(list.toString()).to.be.equal("");
    });
});