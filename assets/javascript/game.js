// Global variable and array declarations

// Seed wordArray with values
var wordsArray = [
  "pneumonia",
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

// holds computer's random word choice
var wordToGuess = "";
// use this array to hold letters from computer's selected word
var wordLetters = [];
// playerSelection holds letters guessed by player
var playerSelection = "";
//number of spaces (underlines) we display; should be equal to the selected word length
var numSpaces = 0; //may not needthis 
// holds info on which key was pressed
var keyPressed = "";
// Array to hold player guesses and underlines (e.g. "_") for manipulation and display
answerArray = [];
// Array to hold incorrectly guessed letters
missedLetters = [];
// Various counters 
// player guesses left counter starts at 10. Roughly the # of guesses if we played real hangman
var guessCount = 0;
var guessesLeft = 10;
var lossCount = 0;
var winCount = 0;

//Code blocks begin below:

// function used to start game action
function startGame() {
}
// function used to end game 
  function endGame() {
}
// function to reset variables. 
function resetAll () {

}

// start game and computer & pick a random word from the word array
wordToGuess = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  console.log("Computer's selected word " + wordToGuess);

// split random word into individual letters
wordLetters = wordToGuess.split("")
  console.log("these are the letters = " + wordLetters);

//create answer array and fill it with "_" and eventually guesses. 
// based on length of word - I've coded 2 possible ways, using push method

/*
for (var i = 0; i < wordToGuess.length; i++) { 
  answerArray[i] = "";
  console.log(answerArray);
}
*/
for (var i = 0; i < wordToGuess.length; i++) { 
    answerArray.push("")
    console.log(answerArray);
}
