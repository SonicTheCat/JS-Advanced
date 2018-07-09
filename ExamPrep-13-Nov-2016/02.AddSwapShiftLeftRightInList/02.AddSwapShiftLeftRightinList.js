let expect = require("chai").expect;
let createList = require("../02.AddSwapShiftLeftRightInList");

describe("Create List Function", () => {
    let list;
    beforeEach(function () {
        list = createList();
    });
    describe("test createList obj and its props", () => {
        it('should return object', () => {
            expect(typeof list).to.be.equal("object")
        });
        it('check if data is an empty array', () => {
            expect(list.toString()).to.be.equal("")
        });
        it('check if holds property add', () => {
            expect(list.hasOwnProperty("add")).to.be.true
        });
        it('check if holds property swap', () => {
            expect(list.hasOwnProperty("swap")).to.be.true
        });
        it('check if holds property shiftRight', () => {
            expect(list.hasOwnProperty("shiftRight")).to.be.true
        });
    });
    describe("test add function", () => {
        it('test it with numbers as input ', () => {
            let arr = [1, 2, 3];
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.toString()).to.be.equal(arr.join(", "))
        });
        it('test it with mixed types', () => {
            let arr = ["a", 2, {}];
            list.add("a");
            list.add(2);
            list.add({});
            expect(list.toString()).to.be.equal(arr.join(", "))
        });
    });
    describe("test shiftRight and shiftLeft functions", () => {
        it('should return "" from empty array', () => {
            list.shiftRight();
            expect(list.toString()).to.be.equal("");
            list.add(1);
            list.shiftRight();
            expect(list.toString()).to.be.equal("1");
        });
        it('test it different elements', () => {
            let arr = [true, "1", 2, 3, {}];
            list.add("1");
            list.add(2);
            list.add(3);
            list.shiftLeft();
            expect(list.toString()).to.be.equal("2, 3, 1");
            list.shiftRight();
            list.add({});
            list.add(true);
            list.shiftRight();
            expect(list.toString()).to.be.equal(arr.join(", "));
        });
        it('should return "1" from one item array', () => {
            list.shiftLeft();
            expect(list.toString()).to.be.equal("");
            list.add(1);
            list.shiftLeft();
            expect(list.toString()).to.be.equal("1");
        });
    });
    describe("test swap function", () => {
        it('should return false for send only one index', () => {
            list.add("1");
            expect(list.swap(0)).to.be.false;
        });
        it('should return false for sending double', () => {
            list.add("1");
            list.add(2);
            list.add(3);
            expect(list.swap(1.2,2)).to.be.false;
            expect(list.swap(0,1.2)).to.be.false;
        });
        it('should return false for sending string', () => {
            list.add("1");
            list.add(2);
            list.add(3);
            expect(list.swap("0",1)).to.be.false;
            expect(list.swap(0,"1")).to.be.false;
        });
        it('index less than 0 and bigger than length', () => {
            list.add("1");
            list.add("1");
            list.add("1");
            expect(list.swap(-1,2)).to.be.false;
            expect(list.swap(0,3)).to.be.false;
            list.add("1");
            expect(list.swap(0,4)).to.be.false;
        });
        it('equal indexes', () => {
            list.add("1");
            list.add("1");
            expect(list.swap(0,0)).to.be.false;
            expect(list.toString()).to.be.equal("1, 1");
        });
        it('return true for correct indexes', () => {
            list.add("1");
            list.add({});
            list.add(1000);
            expect(list.swap(0,2)).to.be.true;
            expect(list.toString()).to.be.equal("1000, [object Object], 1");
            expect(list.swap(1,0)).to.be.true;
            expect(list.toString()).to.be.equal("[object Object], 1000, 1");
            list.add(true);
            expect(list.swap(0,3)).to.be.true;
            expect(list.swap(0,4)).to.be.false;
        });
    });
});
