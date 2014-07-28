describe("scrabble", function() {
	it("outputs the score for an inputted capital letter", function() {
		scrabble("A").should.equal(1);
	});
	it("outputs the score for an inputted small letter", function() {
		scrabble("x").should.equal(8);
	});
	it("outputs the score for an inputted word in any case", function() {
		scrabble("fanTaStiC").should.equal(14);
	});
});