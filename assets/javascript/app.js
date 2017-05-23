$(document).ready(function() {

var correct=0;
var wrong=0;
var unanswered=0;
var number = 10;
var clock = 4;
var total = 3;
var currentQuestion = 0;
var start;
var questionContainer;
var choicesContainer;
var intervalId;
var intervalIdTwo;
var display;
var choiceStyle;
var endScreen;
var indexValue;
var picture;
var choices;
var answer = 0;


// objects of the question, choices, and answer
var trivia = [{
    question: "Who is the Mayor of Cleveland?",
    choices: ["Frank Jackson", "Armond Budish", "Leslie Knope", "Sherrod Brown"],
    answer: 0,
    image: "assets/images/placeholder.png"
    }, {

	question: "Who is the Gov. of Ohio?",
    choices: ["John Husted", "John Kasich", "Leslie Knope", "Joe Schiavoni"],
    answer: 1,
    image: "assets/images/placeholder.png"
	
	}, {
    question: "What's My Name?",
    choices: ["Ryan", "Allen", "Judy", "Tom"],
    answer: 0,
    image: "assets/images/placeholder.png"
 	}];

// declaring our jQuery elements to variables
start = $("#start");
questionContainer = $("#question");
choicesContainer = $("#choices");
choiceStyle = $(".choice-style");
questionCounter = $(".show-number");


// function button for starting the trivia game
	start.click(startGame);
	function startGame() {
	// create a 20 second timer to answer the question	
		set ();
	}
	// function to display the question and choices objects
		function set() {
		if (total > 0) {
				choicesContainer.empty();
				questionContainer.empty();
				questionCounter.html("<h2>" + number + "</h2>");	
				intervalId = setInterval(timer, 1000);	
				total--;
				questionContainer.append("<h3>" + trivia[currentQuestion].question + "</h3>");
				for (var i = 0; i < trivia.length; i++) {
				choices = trivia[i].choices;
				answer = trivia[currentQuestion].answer;
}
			// create each choice as a button 
					for (var x = 0; x < choices.length; x++) {
				   	display = $("<button type='button' class='btn btn-default btn-lg btn-block'>");
					display.addClass("choice-style");
					display.attr("data-indexvalue", x);
					display.append(trivia[currentQuestion].choices[x]);
					choicesContainer.append(display);
			}			
		// if choice clicked is equal to answer, then add to correct score, and display text and image,
			$(".choice-style").on("click", function () {
			indexValue = ($(this).attr("data-indexvalue"));
			indexValue = parseInt(indexValue);		
			if ( indexValue === trivia[currentQuestion].answer) {
				missed ();
				questionContainer.html("<h3>Correct!</h3>");				
				correct++;
			}
		// if choice clicked is not answer, then add to wrong score, and display text and image.
			else {
				missed ();
				questionContainer.html("<h3>Wrong!</h3><br> The correct answer is " + trivia[currentQuestion].choices[answer]);				
				wrong++;			
			}
			})

}
		else {
			stop();
			endScreen();
			total = 3;
			currentQuestion = 0;
			wrong = 0;
			correct = 0;
			unanswered = 0;
		}



}

// move onto next question and choices objects by calling on function

	// if timer runs out, then add to unanswered score
	function answerImage() {
				choicesContainer.empty();
				picture = $("<img>");
				picture.addClass("answer-image");
				picture.attr("src", trivia[currentQuestion].image);
				$(".answer").append(picture);
	}

	function missed () {
				clock=4;
				stop();		
				answerImage();
				intervalIdTwo = setInterval(transition, 1000);
				transition();
	}

	function endScreen() {
		questionContainer.html("<h2>Results:</h2>");
		choicesContainer.append("<h3>Correct </h3>" + correct);
		choicesContainer.append("<h3>Wrong </h3>" + wrong);
		choicesContainer.append("<h3>Unanswered </h3>" + unanswered);
	}

	function transition() {
				clock--;
				if (clock === 0) {
					questionCounter.empty();
					questionContainer.empty();
					choicesContainer.empty();
					$(".answer").empty();
					number=10;
					currentQuestion++;
					set();
					transitionStop();
	    		}
		}	


	function timer() {
				number--;
				questionCounter.html("<h2>" + number + "</h2>");
				if (number === 0) {
					clock=4;
					stop();		
					answerImage();
					intervalIdTwo = setInterval(transition, 1000);
					transition();
					questionContainer.html("<h3>Times up!</h3><br> The correct answer is " + trivia[currentQuestion].choices[answer]);
					unanswered++;
	    		}
		}


	function stop() {
	    clearInterval(intervalId);
	    }

	function transitionStop() {
	    clearInterval(intervalIdTwo);
	    }

});