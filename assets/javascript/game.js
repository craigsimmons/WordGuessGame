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
var wordsList = masterList.slice(0);
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
    validateEntry(keyPressed);
});

function startGame() {
    resetVariables()
    $("#wordselect").text(selectedWord);
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
    var wordsList = masterList.slice(0);
    $("#wordselect").text(selectedWord);
    $("#guessestaken").text(guessesLeft);
    $("#lettersguessed").text(playerGuesses);
    $("#letter").text(keyPressed);
    $("#puzzle").text(answerArr);
    $("#status").text('Game over: Click "Start Game" to begin');
    //disable reset btn
}
function resetVariables() {
    playerGuesses = [];
    noDupeArray = [];
    guessesLeft = 10;
    remainingLetters;
    selectedWord = "";
    keyPressed = "";
    answerArr = [];
    rebateGuess = false;
}

function resetScore() {
    $("#losescore").text(lossCountInt);
    $("#winscore").text(winCountInt);
    lossCountInt = 0;
    winCountInt = 0;
}

function selectWord() {
    var wordListIndex = (Math.floor(Math.random() * wordsList.length) + 1);
    selectedWord = wordsList[wordListIndex];
    wordsList.splice(wordListIndex, 1);
    $("#wordselect").text(selectedWord);
    for (var i = 0; i < selectedWord.length; i++) {
        answerArr[i] = "_";
    }
    $("#puzzle").text(answerArr.join(" , "));
    remainingLetters = selectedWord.length; 
}

function validateEntry(keyPressed) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        keyPressed = event.key;
        $("#letter").text(keyPressed);
        isDuplicate(keyPressed);
    } 
    else {
        console.log("not a char we want");
       return;
    }
}
function isDuplicate(keyPressed) {
    if (noDupeArray.length === 0) {
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
        noDupeArray.push(keyPressed); 
        evaluateGuess(keyPressed);
    }
}

function evaluateGuess(keyPressed) {
    updatePlayerGuesses();
    rebateGuess = false;
    for (var i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === keyPressed) {
            answerArr[i] = selectedWord[i];
            $("#puzzle").text(answerArr);
            remainingLetters--;
            rebateGuess = true;
        }
    }
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

function updatePlayerGuesses() {
    playerGuesses.push(keyPressed);
    $("#lettersguessed").text(playerGuesses);
}

function winCondition() {
    winCountInt++;
    $("#winscore").text(winCountInt);
    $("#status").text("You're a winner!");
    startGame
    }

function loseCondition() {
    lossCountInt++;
    $("#losescore").text(lossCountInt);
    $("#status").text("You're a loser!");
}