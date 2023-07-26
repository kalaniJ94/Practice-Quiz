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
var gameEnded = false;
var containers = document.querySelector("#container");

var timerEl = document.getElementById("timer-text");
var startButton = document.getElementById("start-button");

var questionBlank = document.getElementById("question-blank");
var wordBlank = document.querySelector("#wordblank");

var questBox = document.getElementsByClassName("box")

var quest1 = document.getElementById("box1")
var quest2 = document.getElementById("box2")
var quest3 = document.getElementById("box3")
var quest4 = document.getElementById("box4")

var highscore = 0;
var initials = "";
var timer;




//So first thing's first. There will be a start button which starts a one minute timer at the top of the page. The Start button will also reveal the first question. 

function startGame() {
    timerCount = 60;
    startTimer();
    firstQuestion();
}
function startTimer() {
    // Starts timer
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount > 0) {
            startButton.disabled = true;
        }
        if (timerCount === 0) {
            endgame();
            clearInterval(timer);
        }
    }
        , 1000);
}
// })
//Questions are multiple choice(Four choices). "Wrong!" or "Correct!" will appear when a choice is made.  Next question will appear after those two seconds. 
//Thinking each question will be a function. Use Div[Children], to adjust text in each block. Addeventlistener will listen for clicks, correct box will give points. Click will end function and call next question. 
function firstQuestion() {
    questionBlank.innerHTML = "Hello There";
    questBox[0].innerHTML = "true";
    questBox[1].innerHTML = "General Kenobi";
    questBox[2].innerHTML = "General Kenobi";
    questBox[3].innerHTML = "General Kenobi";

    for (var i = 0; i < questBox.length; i++) {
        questBox[i].addEventListener("click", function (event) { 
            event.stopPropagation();
        var element = event.target;

        if (element.matches(".box")) {

            if (element.textContent === "true") {
                highscore += 10;
                wordBlank.innerHTML = "Correct!";
                secondQuestion();
            }
        } else if (element.textContent !== "true"){
            wordBlank.innerHTML = "Wrong!";
            timerCount -= 10;
            secondQuestion();
        }
     });
    }
}
function secondQuestion() {
    questionBlank.innerHTML = "Hello There";
    questBox[0].innerHTML = "true2";
    questBox[1].innerHTML = "General Kenobi";
    questBox[2].innerHTML = "General Kenobi";
    questBox[3].innerHTML = "General Kenobi";
    for (var i = 0; i < questBox.length; i++) {
        questBox[i].addEventListener("click", function (event) { 
            event.stopPropagation();
        var element = event.target;

        if (element.matches(".box")) {

            if (element.textContent === "true2") {
                highscore += 10;
                wordBlank.innerHTML = "Correct!";
                thirdQuestion();
            }
        } else if (element.textContent !== "true2"){
            wordBlank.innerHTML = "Wrong!";
            timerCount -= 10;
            thirdQuestion();
        }
     });
    }
}


function thirdQuestion() {
    questionBlank.innerHTML = "Hello There";
    questBox[0].innerHTML = "true3";
    questBox[1].innerHTML = "General Kenobi";
    questBox[2].innerHTML = "General Kenobi";
    questBox[3].innerHTML = "General Kenobi";
    for (var i = 0; i < questBox.length; i++) {
        questBox[i].addEventListener("click", function (event) { 
            event.stopPropagation();
        var element = event.target;

        if (element.matches(".box")) {

            if (element.textContent === "true3") {
                highscore += 10;
                wordBlank.innerHTML = "Correct!";
                fourthQuestion();
            }
        } else if (element.textContent !== "true3"){
            wordBlank.innerHTML = "Wrong!";
            timerCount -= 10;
            fourthQuestion();
        }
     });
    }
}


function fourthQuestion() {
    questionBlank.innerHTML = "Hello There";
    questBox[0].innerHTML = "true4";
    questBox[1].innerHTML = "General Kenobi";
    questBox[2].innerHTML = "General Kenobi";
    questBox[3].innerHTML = "General Kenobi";
    for (var i = 0; i < questBox.length; i++) {
        questBox[i].addEventListener("click", function (event) { 
            event.stopPropagation();
        var element = event.target;

        if (element.matches(".box")) {

            if (element.textContent === "true4") {
                highscore += 10;
                wordBlank.innerHTML = "Correct!";
                fifthQuestion();
            }
        } else if (element.textContent !== "true4"){
            wordBlank.innerHTML = "Wrong!";
            timerCount -= 10;
            fifthQuestion();
        }
     });
    }


}
function fifthQuestion() {
    questionBlank.innerHTML = "Hello There";
    questBox[0].innerHTML = "true5";
    questBox[1].innerHTML = "General Kenobi";
    questBox[2].innerHTML = "General Kenobi";
    questBox[3].innerHTML = "General Kenobi";
    for (var i = 0; i < questBox.length; i++) {
        questBox[i].addEventListener("click", function (event) { 
            event.stopPropagation();
        var element = event.target;

        if (element.matches(".box")) {

            if (element.textContent === "true5") {
                highscore += 10;
                wordBlank.innerHTML = "Correct!";
                sixthQuestion();
            }
        } else if (element.textContent !== "true5"){
            wordBlank.innerHTML = "Wrong!";
            timerCount -= 10;
            sixthQuestion();
        }
     });
    }
}


function sixthQuestion() {
    questionBlank.innerHTML = "Hello There";
    questBox[0].innerHTML = "true6";
    questBox[1].innerHTML = "General Kenobi";
    questBox[2].innerHTML = "General Kenobi";
    questBox[3].innerHTML = "General Kenobi";
    for (var i = 0; i < questBox.length; i++) {
        questBox[i].addEventListener("click", function (event) { 
            event.stopPropagation();
        var element = event.target;

        if (element.matches(".box")) {

            if (element.textContent === "true6") {
                highscore += 10;
                wordBlank.innerHTML = "Correct!";
                seventhQuestion();
            }
        } else if (element.textContent !== "true6"){
            wordBlank.innerHTML = "Wrong!";
            timerCount -= 10;
            seventhQuestion();
        }
     });
    }


}
function seventhQuestion() {
    questionBlank.innerHTML = "Hello There";
    questBox[0].innerHTML = "true7";
    questBox[1].innerHTML = "General Kenobi";
    questBox[2].innerHTML = "General Kenobi";
    questBox[3].innerHTML = "General Kenobi";
    for (var i = 0; i < questBox.length; i++) {
        questBox[i].addEventListener("click", function (event) { 
            event.stopPropagation();
        var element = event.target;

        if (element.matches(".box")) {

            if (element.textContent === "true7") {
                highscore += 10;
                wordBlank.innerHTML = "Correct!";
                eighthQuestion();
            }
        } else if (element.textContent !== "true7"){
            wordBlank.innerHTML = "Wrong!";
            timerCount -= 10;
            eighthQuestion();
        }
     });
    }


}
function eighthQuestion() {
    questionBlank.innerHTML = "Hello There";
    questBox[0].innerHTML = "true8";
    questBox[1].innerHTML = "General Kenobi";
    questBox[2].innerHTML = "General Kenobi";
    questBox[3].innerHTML = "General Kenobi";
    for (var i = 0; i < questBox.length; i++) {
        questBox[i].addEventListener("click", function (event) { 
            event.stopPropagation();
        var element = event.target;

        if (element.matches(".box")) {

            if (element.textContent === "true8") {
                highscore += 10;
                wordBlank.innerHTML = "Correct!";
                ninthQuestion();
            }
        } else if (element.textContent !== "true8"){
            wordBlank.innerHTML = "Wrong!";
            timerCount -= 10;
            ninthQuestion();
        }
     });
    }
}

function ninthQuestion() {
    questionBlank.innerHTML = "Hello There";
    questBox[0].innerHTML = "true9";
    questBox[1].innerHTML = "General Kenobi";
    questBox[2].innerHTML = "General Kenobi";
    questBox[3].innerHTML = "General Kenobi";
    for (var i = 0; i < questBox.length; i++) {
        questBox[i].addEventListener("click", function (event) { 
            event.stopPropagation();
        var element = event.target;

        if (element.matches(".box")) {

            if (element.textContent === "true9") {
                highscore += 10;
                wordBlank.innerHTML = "Correct!";
                tenthQuestion();
            }
        } else if (element.textContent !== "true9"){
            wordBlank.innerHTML = "Wrong!";
            timerCount -= 10;
            tenthQuestion();
        }
     });
    }

}
function tenthQuestion() {
    questionBlank.innerHTML = "Hello There";
    questBox[0].innerHTML = "true0";
    questBox[1].innerHTML = "General Kenobi";
    questBox[2].innerHTML = "General Kenobi";
    questBox[3].innerHTML = "General Kenobi";
    for (var i = 0; i < questBox.length; i++) {
        questBox[i].addEventListener("click", function (event) { 
            event.stopPropagation();
        var element = event.target;

        if (element.matches(".box")) {

            if (element.textContent === "true0") {
                highscore += 10;
                wordBlank.innerHTML = "Correct!";
                clearInterval(timer);
                endgame();
                
            }
        } else if (element.textContent !== "true0"){ou
            wordBlank.innerHTML = "Wrong!";
            timerCount -= 10;
            clearInterval(timer);
            endgame();
        }
     });
    }
}


//If an incorrect question is answered, ten seconds will be subtracted from the timer. Correct answers will award points. 

//DO NOT WORRY ABOUT QUESTION CONTENT YET! THAT WILL BE EASY TO FIX AT THE END!

// IF timer === 0, end game. OR if all questions are done, the game ends. 
// function endgame(){
//     if (!gameEnded){
//         gameEnded = true;
//     }
//     var initials = window.prompt("Your score is: " + highscore + "! Enter your initials to view your place on the highscore list!");
//         if (initials.length > 2) {
//           window.alert("Please enter first and last initials only!")
//           endgame();  
//           return;
//         }
//         var highscores = JSON.parse(localStorage.getItem("highscores")) || []; 
//         highscores.push({ initials: initials, score: highscore }); // Add current score to the high scores array
//         localStorage.setItem("highscores", JSON.stringify(highscores)); // Save updated high scores to localStorage
    

        
        function endgame() {
            if (!gameEnded){
                gameEnded = true;
            }
                var initials = window.prompt("Your score is: " + highscore + "! Enter your initials to view your place on the high score list!");
                // Save the high scores and initials in local storage
                var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
                highScores.push({ initials: initials, score: highscore });
                localStorage.setItem("highScores", JSON.stringify(highScores));
                
                var repeat = window.confirm("Play again?")
                if(repeat){
                    gameEnded = false;
                    startGame();
                }
            }
        
    
    


//When the game is over, shows highscore and prompts Initials. Initials will be saved onto a highscores list, which will be on a separate page. The Highscore page will have two buttons, one to return to game and one to clear high score list. 

startButton.addEventListener("click", startGame);
