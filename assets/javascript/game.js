/* Variables, arrays, etc. */
/* array of words for the guessing game */
const wordsList = ["pneumonia",
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
var selectedWord = "";
var keyPressed = "";
var answerArr = [];
var playerGuesses = [];
var guessesLeft = 10;
var remainingLetters;
var lossCountInt = 0;
var winCountInt = 0;
// is the first time the user has guessed a letter
var firstTime = true;
var isInWord = false;
var rebateGuess = false;

$('#start').on('click', function(event) {
    event.preventDefault();
    startGame();
});

$('#end').on('click', function(event) {
    event.preventDefault();
    endGame();
});

$(document).keyup(function(event) {
    event.preventDefault();
    keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(keyPressed);
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        keyPressed = event.key;
        $("#letter").text(keyPressed);
        evaluateGuess(keyPressed);
    } else {
        console.log("not a char we want");
        event.preventDefault();
    }
});
funct

function startGame() {
    $("#status").text("Please type a letter");
    firstTime = true;
    selectWord();
}

function endGame() {
    //resetAllVars()
    $("#status").text("Good Bye");
}

function selectWord() {
    selectedWord = wordsList[Math.floor(Math.random() * wordsList.length) + 1];
    $("#wordselect").text(selectedWord);
    for (var i = 0; i < selectedWord.length; i++) {
        answerArr[i] = "_";
    }
    $("#puzzle").text(answerArr.join(" , "));
    remainingLetters = selectedWord.length;
    console.log(remainingLetters);
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
    if (rebateGuess === false) {
        guessesLeft--;
        if (guessesLeft === 0) {
            loseCondition();
        }
    }
    $("#guessestaken").text(guessesLeft);
    if (remainingLetters === 0) {
        winCondition();
    }
}

function winCondition() {
    winCountInt++;
    $("#winscore").text(winCountInt);
    $("#status").text("You're a winner!");
    guessesLeft = 10;
    $("#guessestaken").text(guessesLeft);
    playerGuesses = [];
}

function loseCondition() {
    lossCountInt++;
    $("#losescore").text(lossCountInt);
    $("#status").text("You're a loser!");
    guessesLeft = 10;
    $("#guessestaken").text(guessesLeft);
    playerGuesses = [];
}