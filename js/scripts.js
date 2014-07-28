//Creates an array of all the letters and an array with index related scores 
var letters = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T", "D", "G", "B", "C", "M", "P", "F", "H", "V", "W", "Y", "K", "J", "X", "Q", "Z"];
var letterScore = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "4", "5", "8", "8", "10", "10"];

$(document).ready(function() {
	$("form#form").submit(function(event) {
		var wordInput = $("input#word-input").val();
		var positionScore;

		for(var i=0; i<letters.length; i++) {
			if(wordInput === letters[i]) {
				positionScore = letterScore[i];
				console.log(positionScore);
			}
		}

		$("span#word").append(wordInput);
		$("span#show-score").append(positionScore);
		$("#hidden").show();

		$("input#word-input").val("");
		event.preventDefault();
	});
});