/* Variables, arrays, etc. */
/* array of words for the guessing game */
var wordsListArr = ["pneumonia", 
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
 // holds computer's random word choice
var wordToGuessStr = "";
// use this array to hold letters from computer's selected word
var wordLettersArr = []; 
// holds info on which key was pressed
var keyPressedStr = ""; 
// Array to hold player guesses and underlines (e.g. "_") for manipulation and display
var answerArrayArr = []; 
// Array to hold all guessed letters
var guessedLettersArr = []; 
// player guesses left counter starts at 10.
var guessesLeftInt = 10; 
// used in loops
var remainingLettersInt;
// loss counter
var lossCountInt = 0; 
// win counter
var winCountInt = 0; 
// is the first time the user has guessed a letter
var firstTime = true;
//regex to constrin keyup entry to lowercase alpha chars
var re = new RegExp(/^[a-z]*$/)

/* Event handlers */
// select button and give an onclick function -- jQuery
$("#start").on("click", startGame); 
$("#end").on("click", endGame); 
// Event listener for keypress - chars saved in "keyPressed"
document.addEventListener("keyup", function (event) {
  if(event.keyCode === 32) {
    event.preventDefault();
  } else  if (65 <= event.keyCode <= 90) {
    keyPressedStr = event.key;
    keyPressedStr = keyPressedStr.toLowerCase();
    evaluateGuess();
  }
})

/* functions and game logic  */

function startGame() {
  //starts a fresh game, Bound to Start button
  // Note firstTime is set to true here
  $("#status").text("Please type a letter");
  firstTime = true;
  selectWord();
}

function selectWord() {
  // Pull out random word from array
  wordToGuessStr = wordsListArr[Math.floor(Math.random() * wordsListArr.length)];
console.log("Computer's selected word " + wordToGuessStr + " <--answerArrayArr(ln73"); 
  { // populates answerArray with " _" 
    for (var i = 0; i < wordToGuessStr.length; i++)
      answerArrayArr[i] = "_";
  }
console.log(answerArrayArr + "  <--answerArrayArr(ln78)");
  $("#puzzle").text(answerArrayArr.join(" "));
  remainingLettersInt = wordToGuessStr.length;
}

// Event listener for keypress - chars saved in "keyPressed"
document.addEventListener("keyup", function (event) {
  // We don't want spaces so if we get one, call preventDefault
  if(event.keyCode === 32) {
  // cancels the event if it is cancelable - so we dont get more than one key up at a time
    event.preventDefault();
    // only chars with a keyCode between 65 and 90 (a-z)
  } else  if (65 <= event.keyCode <= 90) {
    // all this to assign keystroke to keyPressedStr
    keyPressedStr = event.key;
    // lower case it!
    keyPressedStr = keyPressedStr.toLowerCase();
    evaluateGuess();
  }
})

function evaluateGuess() {
  //  handles duplicate key entry
console.log("value of firstTime " + firstTime)
  if ((firstTime === false) && (guessedLettersArr.indexOf(keyPressedStr) !== -1)) {
    $("#status").text("Duplicate Guess. Select Again")
  } else {
    guessedLettersArr.push(keyPressedStr);
    var isInWord = false;
    for (var j = 0; j < answerArrayArr.length; j++) {
      if (wordToGuessStr[j] === keyPressedStr) {
        isInWord = true;
        answerArrayArr[j] = keyPressedStr;
        remainingLettersInt--;
console.log(remainingLettersInt + "  <--remaining letters lnm 111");
      }
    }
    if (!isInWord) {
console.log(!isInWord + " <--  ln115")
      guessesLeftInt--;
      $("#status").text("Ooops. Incorrect");
      $("#status").text(guessesLeftInt);
    } else {
      $("#status").text("That's correct!");
    }
  }
  firstTime = false;
  $("#puzzle").text(answerArrayArr.join(""));
  $("#lettersguessed").text(guessedLettersArr.join(",  "));
  gameState();
}

function gameState() {
console.log("gameState()  <---- ln131")
console.log(remainingLettersInt + "  <--remainging letters int")
  // determine if a game ending is a win or loss
  if (remainingLettersInt === 0) {
    // set true here and before the loseaGame call. These functions set to TRUE because winGame and loseGame reset everything
    firstTime = true;
    winGame();
  } else if (guessesLeftInt === 0) {
    firstTime = true;
    loseGame();
  }
}
// if you guess correctly
function winGame() {
  $("#lettersguessed").text(guessedLettersArr.join(" "));
  $("#puzzle").text(answerArrayArr.join(" "));
console.log("ln146 You guessed the word - " + wordToGuessStr + " in: " + guessesLeftInt + " turns");
console.log("ln147 Here's the answer array: " + answerArrayArr);
console.log("ln148 Here are all the  guesses: " + guessedLettersArr);
  $("#status").text("You're a Winner");
  // Won game counter
  winCountInt = winCountInt + 1;
  firstTime = true;
  $("#winscore").text(winCountInt);
  console.log(" <ln149 ---># of wins: " + winCountInt);
  resetAllVarsAndGame();
}
// if you didn't guess correctly
function loseGame() {
console.log("ln159 --->  Soy un perdedor"); // repace with real loss status msg
console.log("ln160 ---> Here's the answer array for loss: " + answerArrayArr);
console.log("ln161 ---> Here are the incorrect guesses: " + guessedLettersArr);
  // Lost game counter
  lossCountInt = lossCountInt + 1;
console.log("ln164 ---># of losses: " + lossCountInt);
  firstTime = true;
  $("#losescore").text(lossCountInt);
  $("#status").text("You Lost!");
  resetAllVarsAndGame();
}

function resetAllVarsAndGame() {
  // except wins & loss - only comes from win/loseGame functions
console.log("ln -173   resetAllVarsAndGame()")
  wordToGuessStr = "";
  keyPressedStr = "";
  answerArrayArr = [];
  remainingLettersInt = 0;
  guessedLettersArr = [];
  guessesLeftInt = 10;
  firstTime = true;
  $("#lettersguessed").text("");
}


function endGame() {
  resetAllVarsAndGame()
  $("#status").text("Good Bye");
}