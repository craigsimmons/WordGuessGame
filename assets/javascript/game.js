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
    "leukemia"
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
var winloss = false;
var noDupeArray = [];

$('#start').attr("disabled", false);
$('#reset').attr("disabled", false);
$(document).off('keyup');

$('#start').on('click', function(event) {
    event.preventDefault();
    startGame();
});

$('#reset').on('click', function(event) {
    event.preventDefault();
    resetGame();
});

function startGame() {
    $(document).on('keyup', function(event) {
        event.preventDefault();
        keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
        validateEntry(keyPressed);
    });
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
    $("#status").html('Game over!<br>Click "Start" to begin');
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
    winloss = false;
}

function resetScore() {
    lossCountInt = 0;
    winCountInt = 0;
    $("#losescore").text(lossCountInt);
    $("#winscore").text(winCountInt);

}

function selectWord() {
    var wordListIndex = (Math.floor(Math.random() * wordsList.length) + 1);
    selectedWord = wordsList[wordListIndex];
    wordsList.splice(wordListIndex, 1);
    $("#wordselect").text(selectedWord);
    for (var i = 0; i < selectedWord.length; i++) {
        answerArr[i] = " _ ";
    }
    $("#puzzle").text(answerArr.join(" "));
    remainingLetters = selectedWord.length;
}

function displayWord(winloss) {
    $("#wordselect").text(selectedWord);
    for (var i = 0; i < selectedWord.length; i++) {
        answerArr[i] = ('' + selectedWord[i] + '');
    }
    var style = answerArr.join(" ");
    if (winloss === true) {
        $("#puzzle").html('<span class="winner">' + style + '</span>');
    } else {
        $("#puzzle").html('<span class="loser">' + style + '</span>');
    }
}

function validateEntry(keyPressed) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        keyPressed = event.key;
        var keyDisplay = keyPressed.toUpperCase();
        $("#letter").text(keyDisplay);
        isDuplicate(keyPressed);
    } else {
        $("#status").text('Please select a letter');
        return;
    }
}

function isDuplicate(keyPressed) {
    if (noDupeArray.length === 0) {
        noDupeArray.push(keyPressed);
        $("#status").text('Please select a letter');
        evaluateGuess(keyPressed);
    } else {
        for (let j = 0; j <= noDupeArray.length; j++) {
            if (noDupeArray[j] === keyPressed) {
                $("#status").text('Duplicate guess. Select another letter');
                return;
            }
        }
        noDupeArray.push(keyPressed);
        evaluateGuess(keyPressed);
    }
}

function evaluateGuess(keyPressed) {
    updatePlayerGuesses();
    $("#status").text('Please select a letter');
    rebateGuess = false;
    for (var i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === keyPressed) {
            answerArr[i] = (" " + selectedWord[i]);
            // $("#puzzle").text(answerArr);
            $("#puzzle").text(answerArr.join("  "));
            $("#status").text("Correct guess. Select again.");
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
        $("#status").text("Incorrect guess. Select again.");
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
    winloss = true;
    winCountInt++;
    $("#winscore").text(winCountInt);
    $("#status").html('<span class="winner">You won. Congratulations!<br>Click "Start" to play again.</span>');
    // $("#letter").text('');
    displayWord(winloss);
    $(document).off('keyup');
}

function loseCondition() {
    winloss = false;
    $(document).off('keyup');
    displayWord(winloss)
    lossCountInt++;
    $("#losescore").text(lossCountInt);
    $("#status").html('<span class="loser">You lost!<br>Click "Start" to play again.</span>');
    //$("#letter").text('');
}