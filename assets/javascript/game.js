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
var numSpaces = 0;
// holds info on which key was pressed
var keyPressed = "";
// Array to hold player guesses and underlines (e.g. "_") for manipulation and display
var answerArray = [];
// Array to hold incorrectly guessed letters
var missedLetters = [];
// Various counters
// player guesses left counter starts at 10. Roughly the # of guesses if we played real hangman
var guessesMade = 0;
var guessesLeft = 10;
var lossCount = 0;
var winCount = 0;
 // boolean var below
var letterCompare;

// get buttons by their id, use variables later
// var buttonStart = document.getElementById("start");
// var buttonEnd = document.getElementById("end");
// var buttonEndMusic = document.getElementById("stop");

document.getElementById("start").addEventListener("click", startGame);
// document.getElementById("end").addEventListener("click", endGame);
// document.getElementById("hint").addEventListener("click", getHint);

function updateDisplays () {
 //code to change display fields
 // This is all screwed up 
 document.getElementById("currentword").innerHTML = wordToGuess;
 document.getElementById("keytyped").innerHTML = keyPressed;
 document.getElementById("guessesremain").innerHTML = guessesLeft;
 document.getElementById("guessestaken").innerHTML = guessesMade;
 document.getElementById("lettersguessed").innerHTML = missedLetters.join("  ");
 document.getElementById("winscore").innerHTML = winCount;
 document.getElementById("losescore").innerHTML = lossCount;
 document.getElementById("guessestaken").innerHTML = missedLetters.join(" ");  
 document.getElementById("puzzle").innerHTML = answerArray.join(" ");
}

function startGame () { 
  // Event listener for keypress - chars saved in "keyPressed"
  document.addEventListener('keyup', function (event) {
  // take UCS 02 values and convert to a string representing the key's value . also make lower case
  keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
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
  // updateDisplays(); NOT WORKING

/*  Test for bad key press values. 

    if (keyPressed.length === null) {
     // break; DO I NEED Break here?
      alert("No letter selected. Try again!"");
    } 
    else if (keyPressed.length !== 1) {
      //break here? ?
      alert("Enter a single letter only. Try again!");
  }
  else if (keyPressed.isInteger) {
      alert("Numbers are invalid. Try again!);
  } 
  else { 
    // Update the game state 
    // run game logic to update display fields
    //run compare letters function
  }
  */

  function compareLetters (keyPressed) {
    for (var j = 0; j < wordToGuess.length; i++) {
      if (wordToGuess[i] === keyPressed)  { 
        letterCompare = true;
        console.log("Letter Selected: " + keyPressed);
      }
     // do I need the else here?
    }
      if (letterCompare) {
        for (var k = 0; k < wordToGuess.length; j++) {
          if (wordToGuess[j] === keyPressed) {
          answerArray[j] = keyPressed;
          }
        // console.log("Display array: " + answerArray);
        // letter not in word. 
          else {  
            missedLetters.push(keyPressed);
            guessesMade++;
            guessesLeft--;
          }
        }
      }
    }
  
  function afterGuess () {
    updateDisplays();
    document.onkeyup = function (event) {
      keyPressed = String.fromCharCode(event.keyCode).toLowerCase();
      console.log('Next letter is ' + keyPressed); // for testing... REMOVE
    };
  }

  compareLetters(keyPressed);
  afterGuess();
}  
/* questions:
1. Control flow - app is not running correctly. 
2. I'm trying to wrap blocks of code into named functions, they are not being called
3. general logic errors with code.
4. innerHTML not working
5. how to use break, continue, return
*/
