const masterList = ["pneumonia",
    "diphtheria",
    "leprosy",
    "rabies",
    "listeria",
    "ebola",
    "meningitis",
    "hepatitis",
    "measles",
    "smallpox",
    "pertussis",
    "mumps",
    "influenza",
    "chickenpox",
    "rubella",
    "malaria",
    "typhus",
    "tuberculosis"
];

var wordsList = [];
var selectedWord = "";
var keyPressed = "";
var answerArr = [];
var playerGuesses = [];
var noDupeArray = [];
var guessesLeft = 10;
var remainingLetters;
var lossCountInt = 0;
var winCountInt = 0;
var rebateGuess = false;
var noDupeArray = [];
wordsList = masterList;

$('#start').on('click', function(event) {
    event.preventDefault();
    startGame();
});

$('#reset').on('click', function(event) {
    event.preventDefault();
    resetGame();
});

$(document).keyup(function(event) {
    event.preventDefault();
    keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
    validateGuess(keyPressed);
});

function resetVariables() {
    var playerGuesses = [];
    var noDupeArray = [];
    var guessesLeft = 0;
    var remainingLetters;
    var selectedWord = "";
    var keyPressed = "";
    var answerArr = [];
    var rebateGuess = false;
}

function resetScore() {
    $("#losescore").text(lossCountInt);
    $("#winscore").text(winCountInt);
    var lossCountInt = 0;
    var winCountInt = 0;
}

function startGame() {
    resetVariables()
    $("#guessestaken").text(guessesLeft);
    $("#lettersguessed").text(playerGuesses);
    $("#letter").text(keyPressed);
    $("#puzzle").text(answerArr);
    $("#status").text('Please select a letter');
    selectWord();
    // disable start btn
}

function resetGame() {
    resetVariables();
    resetScore();
    wordsList = masterList;
    $("#guessestaken").text(guessesLeft);
    $("#lettersguessed").text(playerGuesses);
    $("#letter").text(keyPressed);
    $("#puzzle").text(answerArr);
    $("#status").text('Game over: Click "Start Game" to begin');
    //disable reset btn
}

function selectWord() {
    selectedWord = wordsList[Math.floor(Math.random() * wordsList.length) + 1];
    $("#wordselect").text(selectedWord);
    for (var i = 0; i < selectedWord.length; i++) {
        answerArr[i] = "_";
    }
    $("#puzzle").text(answerArr.join(" , "));
    remainingLetters = selectedWord.length;
}

function validateGuess(keyPressed) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        keyPressed = event.key;
        $("#letter").text(keyPressed);
    } 
    else {
        console.log("not a char we want");
       return;
    }
    if (noDupeArray.length === 0) {
        console.log("First Time");
        noDupeArray.push(keyPressed); 
        evaluateGuess(keyPressed);
    }
    else {
        for (let j = 0; j <= noDupeArray.length; j++) {
            if (noDupeArray[j] === keyPressed) {
                $("#status").text("Duplicate guess. Please choose another letter");
               return;
            }
        }
    }
   // noDupeArray.push(keyPressed);
    evaluateGuess(keyPressed);
}

function evaluateGuess(keyPressed) {
    rebateGuess = false;
    for (var i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === keyPressed) {
            answerArr[i] = selectedWord[i];
            $("#puzzle").text(answerArr);
            remainingLetters--;
            rebateGuess = true;
        }
    }
    playerGuesses.push(keyPressed);
    $("#lettersguessed").text(playerGuesses);
    if (remainingLetters === 0) {
        winCondition();
    }
    if (rebateGuess === false) {
        guessesLeft--;
        $("#guessestaken").text(guessesLeft);
        if (guessesLeft === 0) {
            loseCondition();
        }
    }
}

function winCondition() {
    winCountInt++;
    $("#winscore").text(winCountInt);
    $("#status").text("You're a winner!");
    }


function loseCondition() {
    lossCountInt++;
    $("#losescore").text(lossCountInt);
    $("#status").text("You're a loser!");
}