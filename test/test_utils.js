var utils = require("../src/utils"),
	assert = require("should");
describe("test utils", function() {
	it("test double()", function() {
		utils.double(3).should.equal(9);
	})
})