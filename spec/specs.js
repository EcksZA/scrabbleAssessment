describe("scrabble", function() {
	it("outputs the score for an inputted letter", function() {
		scrabble("A").should.equal(1);
	});
});