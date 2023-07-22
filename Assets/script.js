// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// --------------------------------------------------------------------------------------------------------
var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");

var timerEl = document.getElementById("timer-text");
var startButton = document.getElementById("start-button");

var questionBlank = "";
var wordBlank = "";
var highscore = 0;
var isWin;
var timer;




//So first thing's first. There will be a start button which starts a one minute timer at the top of the page. The Start button will also reveal the first question. 

function startGame(){
    timerCount=60;
    startTimer()
    
}
function startTimer() {
    // Starts timer
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
    }
    , 1000);
}
startButton.addEventListener("click", startGame);
//Questions are multiple choice(Four choices). "Wrong!" or "Correct!" will appear when a choice is made.  Next question will appear after those two seconds. 

//If an incorrect question is answered, ten seconds will be subtracted from the timer. Correct answers will award points. 

//DO NOT WORRY ABOUT QUESTION CONTENT YET! THAT WILL BE EASY TO FIX AT THE END!

// IF timer === 0, end game. OR if all questions are done, the game ends. 

//When the game is over, shows highscore and prompts Initials. Initials will be saved onto a highscores list, which will be on a separate page. The Highscore page will have two buttons, one to return to game and one to clear high score list. 

