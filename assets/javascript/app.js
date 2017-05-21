$(document).ready(function() {

var correct=0;
var wrong=0;
var unanswered;
var number = 30;
var clock = 5;
var start;
var questionContainer;
var choicesContainer;
var intervalId;
var display;
var choiceStyle;
var currentQuestion = 0;


// objects of the question, choices, and answer
var trivia = [{
    question: "Who is the Mayor of Cleveland?",
    choices: ["Frank Jackson", "Armond Budish", "Leslie Knope", "Sherrod Brown"],
    answer: 0
    }, {

	question: "Who is the Gov. of Ohio?",
    choices: ["John Husted", "Josh Kasich", "Leslie Knope", "Joe Schiavoni"],
    answer: 1
	
	}, {
    question: "What's My Name?",
    choices: ["Ryan", "Allen", "Judy", "Tom"],
    answer: 0
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
		set ();

	}
	// function to display the question and choices objects
		function set() {
			intervalId = setInterval(timer, 1000);
				questionContainer.append(trivia[currentQuestion].question);
				for (var i = 0; i < trivia.length; i++) {
				var choices = trivia[i].choices;
				//var answer = trivia[i].answer;
				console.log(choices)
				//console.log(answer)
}
			// create each choice as a button 
					for (var x = 0; x < choices.length; x++) {
				   	display = $("<button>");
					display.addClass("choice-style");
					display.append(trivia[currentQuestion].choices[x]);
					choicesContainer.append(display);
					
	// if choice clicked is equal to answer, then add to correct score, and display text and image,
		$(".choice-style").on("click", function () {

		if ($(".choice-style").on("click"))
{			console.log();
			questionContainer.html("correct!");
			correct++;
			question.container
			intervalId2 = setInterval(transition, 1000);
			stop();
			transition();

		}
		else {
			questionContainer.html("wrong! The correct answer is");
			wrong++;
			transition();
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

		function transition() {
				console.log(clock);
				clock--;
				if (clock === 0) {
					$("#show-number").empty();
					questionContainer.empty();
					choicesContainer.empty();
					stop();
					number=30;
					currentQuestion++;
					set();
					transitionStop();
	    		}
		}


	function stop() {
	    clearInterval(intervalId);
	    }

	function transitionStop() {
	    clearInterval(intervalId2);
	    }








});