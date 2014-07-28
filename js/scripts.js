//Creates a function to test for the scrabble score for any word.
var scrabble = function(word) {
//Initialise an array for scrabble letters, an array for the score of each letter, an empty arr
	var letters = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T", "D", "G", "B", "C", "M", "P", "F", "H", "V", "W", "Y", "K", "J", "X", "Q", "Z"];
	var letterScore = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 8, 8, 10, 10];
	var wordLetters = [];
	var totalScore = 0;

	//Takes the user inputted word and splits it into an array.
	wordLetters = word.toUpperCase().split("");

	//Compares each letter in the inputted word, returns the letters score and adds up the scores for a word score. 
	for (var j=0; j<wordLetters.length; j++) {
		for(var i=0; i<letters.length; i++) {
			if(wordLetters[j] === letters[i]) {
				totalScore += letterScore[i];
			}
		}
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