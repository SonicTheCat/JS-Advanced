let expect = require("chai").expect;
let isSymmetric = require("../05.CheckForSymmetry").isSymmetric;

    describe("Check if array is symmetric", function () {
    describe("All true values", function () {
        it('should return true for [1]', function () {
            expect(isSymmetric([1])).to.be.equal(true);
        });
        it('should return true from [1,2,3,2,1]', function () {
            expect(isSymmetric([1, 2, 3, 2, 1])).to.be.equal(true);
        });
        it('should return true from ["js",1,{},1,"js"]', function () {
            expect(isSymmetric(["js", 1, {}, 1, "js"])).to.be.equal(true)
        });
    });

    describe("All false values", function () {
        it('should return false from ["1",2,3,"2",1]', function () {
            expect(isSymmetric(["1", 2, 3, "2", 1])).to.be.equal(false);
        });
        it('should return false from "England will win the World Cup 2018!"', function () {
            expect(isSymmetric("England will win the World Cup 2018!")).to.be.equal(false);
        });
        it('should return false from [-1,2,3,2,1]', function () {
            expect(isSymmetric([-1,2,3,2,1])).to.be.equal(false);
        });
    });

});