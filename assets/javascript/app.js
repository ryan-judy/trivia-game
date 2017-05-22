$(document).ready(function() {

var correct=0;
var wrong=0;
var unanswered=0;
var number = 11;
var clock = 3;
var total = 3;
var start;
var questionContainer;
var choicesContainer;
var intervalId;
var intervalIdTwo;
var display;
var choiceStyle;
var currentQuestion = 0;
var endScreen = false;
var indexValue;


// objects of the question, choices, and answer
var trivia = [{
    question: "Who is the Mayor of Cleveland?",
    choices: ["Frank Jackson", "Armond Budish", "Leslie Knope", "Sherrod Brown"],
    answer: 0
    }, {

	question: "Who is the Gov. of Ohio?",
    choices: ["John Husted", "John Kasich", "Leslie Knope", "Joe Schiavoni"],
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
		if (total > 0) {
				total--;
				questionContainer.append(trivia[currentQuestion].question);
				for (var i = 0; i < trivia.length; i++) {
				var choices = trivia[i].choices;
				var answer = trivia[currentQuestion].answer;
				console.log(choices)
				console.log(answer)
}
			// create each choice as a button 
					for (var x = 0; x < choices.length; x++) {
				   	display = $("<button>");
					display.addClass("choice-style");
					display.attr("data-indexvalue", x);
					display.append(trivia[currentQuestion].choices[x]);
					choicesContainer.append(display);
					console.log(display)
			}			
		// if choice clicked is equal to answer, then add to correct score, and display text and image,
			$(".choice-style").on("click", function () {
			indexValue = ($(this).attr("data-indexvalue"));
			indexValue = parseInt(indexValue);		
			if ( indexValue === trivia[currentQuestion].answer) {
				clock=3;
				transitionStop();
				stop();
				questionContainer.html("correct!");
				correct++;
				intervalIdTwo = setInterval(transition, 1000);
				transition();

			}
		// if choice clicked is not answer, then add to wrong score, and display text and image.
			else {
				clock=3;
				transitionStop();
				stop();		
				questionContainer.html("wrong! The correct answer is " + trivia[currentQuestion].choices[answer]);
				wrong++;
				intervalIdTwo = setInterval(transition, 1000);
				transition();
			}
			})

}
		else {
			alert("game over");
			stop();
			total = 3;
			currentQuestion = 0;
			console.log(question)
		}
}

// move onto next question and choices objects by calling on function

	// if timer runs out, then add to unanswered score
	function transition() {
				console.log(clock);
				clock--;
				if (clock === 0) {
					$("#show-number").empty();
					questionContainer.empty();
					choicesContainer.empty();
					number=11;
					currentQuestion++;
					set();
					transitionStop();
	    		}
		}	


	function timer() {
				number--;
				console.log(number);
				console.log(clock);
				$("#show-number").html("<h2>" + number + "</h2>");
				if (number === 0) {
					alert("time up");
					unanswered++;
					stop();
					$("#show-number").empty();
					questionContainer.empty();
					choicesContainer.empty();
					number=11;
					currentQuestion++;
					set();
					transitionStop();					
	    		}
		}


	function stop() {
	    clearInterval(intervalId);
	    }

	function transitionStop() {
	    clearInterval(intervalIdTwo);
	    }




});