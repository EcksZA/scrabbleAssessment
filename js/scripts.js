//Creates a function to test for the scrabble score for any word.
var scrabble = function(word) {
//Initialise an object for scrabble letters and related numbers
	var letterScore = {
		"A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1,
		"D": 2, "G": 2, "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, 
		"Y": 4, "K": 5, "J": 8, "X": 8, "Q": 10, "Z": 10
	};

	var wordLetters = [];
	var totalScore = 0;
	//Takes the user inputted word and splits it into an array.
	wordLetters = word.toUpperCase().split("");
	//Compares each letter in the inputted word, returns the letters score and adds up the scores for a word score. 
	for(var i=0; i<wordLetters.length; i++) {
		totalScore += letterScore[wordLetters[i]];
	}
	return totalScore;
}

$(document).ready(function() {
	$("form#form").submit(function(event) {
		var wordInput = $("input#word-input").val();

		$("span#word").append(wordInput);
		$("span#show-score").append(scrabble(wordInput));
		$("#hidden").show();

		$("input#word-input").val("");
		event.preventDefault();
	});
});