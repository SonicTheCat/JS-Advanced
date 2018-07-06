let list = require("../02.AddDeleteList");
let expect = require("chai").expect;

describe("Add and Delete Elements in List", () => {
    it('should add element in the list', () => {
        list.add(6);
        list.add("two");
        list.add(26);
        expect(list.toString()).to.be.equal("6, two, 26");
    });
    it('should delete the element at index 0', () => {
        expect(list.delete(0)).to.be.equal(6);
    });
    it('should return undefined for floating point index', () => {
        expect(list.delete(1.1)).to.be.undefined;
    });
    it('should return undefined for incorect index', () => {
        expect(list.delete(2)).to.be.undefined;
    });
    it('should return delete the last element', () => {
        expect(list.delete(1)).to.be.equal(26)
    });
    it('should return undefined for index as string', () => {
        expect(list.delete("0")).to.be.undefined;
    });
    it('should return undefined for -index', () => {
        list.add(10);
        expect(list.delete(-1)).to.be.undefined;
    });
    it('should work correct with diffrent type of elements', () => {
        list.delete(0);
        list.delete(0);
        expect(list.toString()).to.be.equal("");
        let elements = [{}, 101, "js", new Map(), 1.1, true, false];
        for (let e of elements) {
            list.add(e);
        }
        expect(list.toString()).to.be.equal("[object Object], 101, js, [object Map], 1.1, true, false");
        expect(list.delete(1)).to.be.equal(101);
        expect(list.delete(5)).to.be.false;
        expect(list.delete(1)).to.be.equal("js");
        expect(list.toString()).to.be.equal("[object Object], [object Map], 1.1, true");
    });
});