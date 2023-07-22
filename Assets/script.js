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
var container = document.querySelector("container");

var timerEl = document.getElementById("timer-text");
var startButton = document.getElementById("start-button");

var quest1 = document.getElementById("box1")
var quest2 = document.getElementById("box2")
var quest3 = document.getElementById("box3")
var quest4 = document.getElementById("box4")


var questionBlank = "";
var wordBlank = "";
var highscore = 0;
var initials = "";
var timer;




//So first thing's first. There will be a start button which starts a one minute timer at the top of the page. The Start button will also reveal the first question. 

function startGame(){
    timerCount=60;
    startTimer();  
    firstQuestion();
}
function startTimer() {
    // Starts timer
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if(timerCount > 0){
            startGame.disabled=true;
        }
        if(timerCount===0){
            // endGame();
            clearInterval(timer);
        }
    }
    , 1000);
}
// document.addEventListener("click", function(){
//     timerCount-10;
// })
//Questions are multiple choice(Four choices). "Wrong!" or "Correct!" will appear when a choice is made.  Next question will appear after those two seconds. 
function firstQuestion(){
    questionBlank

}

//If an incorrect question is answered, ten seconds will be subtracted from the timer. Correct answers will award points. 

//DO NOT WORRY ABOUT QUESTION CONTENT YET! THAT WILL BE EASY TO FIX AT THE END!

// IF timer === 0, end game. OR if all questions are done, the game ends. 

//When the game is over, shows highscore and prompts Initials. Initials will be saved onto a highscores list, which will be on a separate page. The Highscore page will have two buttons, one to return to game and one to clear high score list. 

startButton.addEventListener("click", startGame);
