$(document).ready(function() {

var correct;
var wrong;
var unanswered;
var number = 30;
var start;
var questionContainer;
var choicesContainer;
var intervalId;
var display;
var choiceStyle;
var currentQuestion;


// objects of the question, choices, and answer
var trivia = [{
    question: "Who is the Mayor of Cleveland?",
    choices: ["Frank Jackson", "Armond Budish", "Leslie Knope", "Sherrod Brown"],
    answer: "Frank Jackson"
    }, {

	question: "Who is the Gov. of Ohio?",
    choices: ["John Husted", "Josh Kasich", "Leslie Knope", "Joe Schiavoni"],
    answer: "Josh Kasich"
	
	}, {
    question: "What's My Name?",
    choices: ["Ryan", "Allen", "Judy", "Tom"],
    answer: "Ryan"
 	}];

// declaring our jQuery elements to variables
start = $("#start");
questionContainer = $("#question");
choicesContainer = $("#choices");
choiceStyle = $(".choice-style");


// function button for starting the trivia game
	start.click(startGame);


	function startGame() {
	// create a 20 second timer to answer the question
		intervalId = setInterval(timer, 1000);
		set ();
	}
	// function to display the question and choices objects
		function set() {
			for (var i = 0; i < trivia.length; i++) {
				questionContainer.html(trivia[i].question);
				var choices = trivia[i].choices;
				var answer = trivia[i].answer;
				answer = 1;
				console.log(choices)
				console.log(answer)

			}

			// create each choice as a button 
				for (var x = 0; x < choices.length; x++) {
					display = $("<button>");
					display.addClass("choice-style");
					display.html(choices[x]);
					choicesContainer.append(display);
					
	// if choice clicked is equal to answer, then add to correct score, and display text and image,
		$(".choice-style").on("click", function () {

		if ($(".choice-style").on("click"))
{			console.log(answer);
		}
		})
	}
}

		


// $(".choice-style").click()


// if choice clicked is not answer, then add to wrong score, and display text and image.


// move onto next question and choices objects by calling on function




	// if timer runs out, then add to unanswered score
	function timer() {
				$("#show-number").html("<h2>" + number + "</h2>");
				number--;
				if (number === 0) {
					alert("time up");
					stop();

	    		}
		}


	function stop() {
	    clearInterval(intervalId);
	    }








});