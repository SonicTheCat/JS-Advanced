let expect = require("chai").expect;
let SubscriptionCard = require("../02.SubscriptionCard");

describe("Test SubscriptionCard", () => {
    describe("test class and its instance", () => {
        it('test class prototype', () => {
            expect(SubscriptionCard.prototype.hasOwnProperty("firstName"));
            expect(SubscriptionCard.prototype.hasOwnProperty("lastName"));
            expect(SubscriptionCard.prototype.hasOwnProperty("SSN"));
            expect(SubscriptionCard.prototype.hasOwnProperty("isBlocked"));
            expect(SubscriptionCard.prototype.hasOwnProperty("isValid"));
        });
        it('create an instance without data', () => {
            let card = new SubscriptionCard();
            expect(card.firstName).to.be.undefined;
            expect(card.lastName).to.be.undefined;
            expect(card.SSN).to.be.undefined;
        });
        it('should be initialized correctly', () => {
            let card = new SubscriptionCard("stamat", "stamatov", "1234567");
            expect(card.firstName).to.be.equal("stamat");
            expect(card.lastName).to.be.equal("stamatov");
            expect(card.SSN).to.be.equal("1234567");
            expect(card.isBlocked).to.be.false;
        });
        it('instance proto to be equal to class prototype ', () => {
            let card = new SubscriptionCard("stamat", "stamatov", "1234567");
            expect(card.__proto__ === SubscriptionCard.prototype).to.be.true
        });
    });
    describe("test functionality", () => {
        let card;
        beforeEach(function () {
            card = new SubscriptionCard("stamat", "stamatov", "1234567");
        });
        it('test private props', () => {
            card.firstName = "pesho";
            card.lastName = "peshov";
            card.SSN = "10101010101";
            expect(card.firstName).to.be.equal("stamat");
            expect(card.lastName).to.be.equal("stamatov");
            expect(card.SSN).to.be.equal("1234567");
        });
        it('should return false', () => {
            card.addSubscription("120", new Date("2018-04-22"), new Date("2018-05-21"));
            expect(card.isValid("330", new Date("2018-04-22"))).to.be.false
        });
        it('should return true', () => {
            card.addSubscription("120", new Date("2018-04-22"), new Date("2018-05-21"));
            card.addSubscription("120", new Date("2018-04-22"), new Date("2018-05-21"));
            card.addSubscription("*", new Date("2018-06-22"), new Date("2018-08-30"));
            expect(card.isValid("120", new Date("2018-04-22"))).to.be.true;
            expect(card.isValid("320", new Date("2018-04-22"))).to.be.false;
            expect(card.isValid("1403", new Date("2018-08-30"))).to.be.true
        });
        it('should return false', () => {
            card.addSubscription("*", new Date("2018-04-22"), new Date("2018-05-21"));
            expect(card.isValid("1", new Date("2018-04-21"))).to.be.false;
            expect(card.isValid("1", new Date("2018-05-22"))).to.be.false;
            expect(card.isValid("1", new Date("2018-05-21"))).to.be.true;
        });
        it('test block and unblock functions', () => {
            card.addSubscription("*", new Date("2018-04-22"), new Date("2018-05-21"));
            card.block();
            expect(card.isValid("1", new Date("2018-05-21"))).to.be.false;
            card.addSubscription("120", new Date("2016-02-22"), new Date("2017-05-21"));
            expect(card.isValid("120", new Date("2017-01-30"))).to.be.false;
            card.unblock();
            expect(card.isValid("1", new Date("2018-05-21"))).to.be.true;
            expect(card.isValid("120", new Date("2017-01-30"))).to.be.true;
            card.block();
            card.unblock();
            expect(card.isValid("1", new Date("2018-05-21"))).to.be.true;
            expect(card.isValid("120", new Date("2017-01-30"))).to.be.true;
        });
    });
});