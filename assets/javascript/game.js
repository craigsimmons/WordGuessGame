// Global variable and array declarations follow below:
var wordsListArr = ["pneumonia",  // Seed wordArray with values
  "anthrax",
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
var wordToGuessStr = ""; // holds computer's random word choice
var wordLettersArr = []; // use this array to hold letters from computer's selected word
var keyPressedStr = ""; // holds info on which key was pressed
var answerArrayArr = []; // Array to hold player guesses and underlines (e.g. "_") for manipulation and display
var remainingLettersInt = 0; // = to length of random word. used for loops, etc 
var missedLettersArr = []; // Array to hold incorrectly guessed letters
var guessesLeftInt= 10; // player guesses left counter starts at 10.
var lossCountInt = 0; // loss counter
var winCountInt = 0; // win counter
var letterCompareBoo = true;  // boolean 

/* ------------- End variable declarations  ------------------- */

/* Event handlers */
$("#start").on("click", startGame); // select button and give an onclick function -- jQuery

$("#end").on("click", startGame); // select button and give an onclick function -- jQuery

$(document).keyup(function(event) { // Capture keyup event w/ jQuery
  keyPresseStr = String.fromCharCode(event.keyCode).toLowerCase(); //translate keycode to charcode and make lowercase
  console.log('Your letter is ' + keyPressedStr); // for testing... 
});

function selectWord () { 
  wordToGuessStr = wordsListArr[Math.floor(Math.random() * wordsListArr.length)];
    console.log("Computer's selected word " + wordToGuessStr);
  wordLettersArr = wordToGuessStr.split(""); // may not need
    console.log("these are the letters = " + wordLettersArr);
}

function startGame () {

}

function endGame () {
   
}

function resetVariables () {

}

function displayValues () {
  $("#currentword").text(wordToGuessStr);
  $("#keytyped").text(keyPressedStr);
  $("#guessesremain").text(guessesLeftStr);
  $("#lettersguessed").text(missedLettersArr.join("  "));
  $("#winscore").text(winCountStr);
  $("#losescore").text(lossCountStr);
  $("#puzzle").text(answerArrayArr.join(" "));
}

function validateInput () {
  if (keyPressedStr === null) {
    alert("Please select a single letter");
    validateInput();
  }
  else if (keyPressedStr.length !== 1) {
    alert("Please select a single letter");
    validateInput();
  }
  else { 
    remainingLettersInt = wordToGuessStr.length;
    evaluateGuess(); 
  }
}

function populateAnswerArray () {
 for ( var i = 0; i < wordToGuessStr.length; i++) {
   answerArrayArr[i] = "_";
 }
 $("#puzzle").text(answerArrayArr.join(" "));
}

function evaluateGuess() {
  while (remainingLettersInt > 0) {
    for (var j = 0; j < wordToGuessStr.length; j++) {
      if (wordToGuessStr[j] === keyPressedStr)  { 
        answerArrayArr[j] = keyPressedStr;
        remainingLettersInt--;
        letterCompareBoo = true;
      }
      else {
        missedLettersArr.push(keyPressedStr);
      }
    }
  }
}

function checkGameState () {
  if (answerArrayArr.indexOf("_") === -1) { // entire word is processed; no __
    //check for game state change
  }


}

/*
0. Enable Keyup and on click events
1. Pick Random Word
2. Take the first letter guess from player
3. check guess against random word
4 .keep track of letters guessed
5. display progress on screen like hangman (e.g. with spaces and insert letters where they need to be)
6. Finish game - either word is guessed or palyer uses all 10 guesses
*/