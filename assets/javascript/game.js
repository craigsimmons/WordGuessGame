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
var playerSelections = "";
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
var guessesMade = 0;
var guessesLeft = 10;
var lossCount = 0;
var winCount = 0;
var letterCompare;  //boolean 

// Code blocks begin below

// get buttons by their id, use variables later
// var buttonStart = document.getElementById("start");
// var buttonEnd = document.getElementById("end");
// var buttonEndMusic = document.getElementById("stop");

document.getElementById("start").addEventListener("click", startGame);
// document.getElementById("end").addEventListener("click", endGame);
// document.getElementById("hint").addEventListener("click", getHint);

function startGame()

   // Event listener for keypress - chars saved in "keyPressed"
  document.addEventListener('keyup', function(event) { 
  // take UCS 02 values and convert to a string representing the key's value
  keyPressed = String.fromCharCode(event.keyCode); 
  console.log('Your letter is ' + keyPressed); // for testing... REMOVE
  });

  // have computer pick a random word from the word array
  wordToGuess = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  console.log("Computer's selected word " + wordToGuess);
  // split random word into individual letters
  wordLetters = wordToGuess.split("");
    console.log("these are the letters = " + wordLetters);

  // create answer array and fill it with "_" and eventually guesses
  // based on length of word - using push method
  for (var i = 0; i < wordToGuess.length; i++) { 
      answerArray.push("_ ");
  }
  //code to change display fields
  document.getElementById("currentword").innerHTML = wordToGuess;
  document.getElementById("keytyped").innerHTML = keyPressed;
  document.getElementById("guessesremain").innerHTML = guessesLeft;
  document.getElementById("guessestaken").innerHTML = guessesMade;
  document.getElementById("lettersguessed").innerHTML = missedLetters.join("  ")  
  document.getElementById("winscore").innerHTML = winCount;
  document.getElementById("losescore").innerHTML = lossCount;
  document.getElementById("guessestaken").innerHTML = missedLetters.join(" ");  
  document.getElementById("puzzle").innerHTML = answerArray.join(" ");
    

  
  function compareLetters (keyPressed) {
    // letterCompare = false;
    for (var j = 0; j < wordToGuess.length; i++) {
      if (wordToGuess[i] === keyPressed)  { 
      letterCompare = true;
      console.log("Letter Selected: " + keyPressed);
      break;
      }
    else {
      console.log("key not found");
    }
  }
  if (letterCompare) {
    for (var k = 0; k < wordToGuess.length; j++) {
      if (wordToGuess[j] === keyPressed) {
        answerArray[j] = keyPressed;
      }
    }
  }
  else {
    missedLetters.push(keyPressed);
      guessesMade++;
      guessesLeft--;
  }