/* Global variable and array declarations follow below: */
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
var wordToGuessStr = ""; // holds computer's random word choice
var wordLettersArr = []; // use this array to hold letters from computer's selected word
var keyPressedStr = ""; // holds info on which key was pressed
var answerArrayArr = []; // Array to hold player guesses and underlines (e.g. "_") for manipulation and display
var remainingLettersInt = 0; // = to length of random word. used for loops, etc 
var missedLettersArr = []; // Array to hold incorrectly guessed letters
var guessesLeftInt= 10; // player guesses left counter starts at 10.
var lossCountInt = 0; // loss counter
var winCountInt = 0; // win counter
var letterCompareBoo = false;  // boolean 

/* ------------- End variable declarations  ------------------- */

/* Event handlers */
$("#start").on("click", startGame); // select button and give an onclick function -- jQuery
$("#end").on("click", startGame); // select button and give an onclick function -- jQuery

function startGame () {
  selectWord();
  resetVariables();
}

function endGame () {
  resetVariables();
  // Thanks for playiong come back
}

function continueGame () {
  selectWord();
}

function resetVariables () {
  wordToGuessStr = "";
  wordLettersArr = [];
  keyPressedStr = ""; 
  answerArrayArr = []; 
  remainingLettersInt = 0;
  missedLettersArr = [];
  guessesLeftInt= 10;
  lossCountInt = 0; 
  winCountInt = 0; 
  letterCompareBoo = false
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

function winGame () {
  $("#lettersguessed").text(missedLettersArr.join(" "));
  $("#puzzle").text(answerArrayArr.join(" "));
  console.log("You guessed the word - " + ToGuessStr + " in: " + guessesLeftInt + " turns");
  console.log("Here's the answer array: " + answerArrayArr);
  console.log("Here are the incorrect guesses: " + missedLettersArr);
  console.log("Winner winner chicken dinner"); // repace with real win status msg
  winCountInt = winCountInt +1;
  $("#winscore").text(winCountStr);
  console.log("# of wins: " + winCountInt);
}

function loseGame () {
  console.log("Soy un perdedor"); // repace with real loss status msg
  console.log("Here's the answer array for loss: " + answerArrayArr);
  console.log("Here are the incorrect guesses: " + missedLettersArr);
  lossCountInt = lossCountInt +1;
  $("#losescore").text(lossCountStr);
  console.log("# of losses: " + lossCountInt);
}

function selectWord () { 
  wordToGuessStr = wordsListArr[Math.floor(Math.random() * wordsListArr.length)];
    console.log("Computer's selected word " + wordToGuessStr);
  wordLettersArr = wordToGuessStr.split(""); // may not need
    console.log("these are the letters = " + wordLettersArr);

  for ( var i = 0; i < wordToGuessStr.length; i++) {
    answerArrayArr[i] = "_";
  }
  $("#puzzle").text(answerArrayArr.join(" ")); //display ____ on screen
  inputLetter();
}

function inputLetter () {
  $(document).keyup(function(e) { // Capture keyup event w/ jQuery
    keyPresseStr = String.fromCharCode(event.keyCode).toLowerCase(); //translate keycode to charcode and make lowercase
    console.log('Your letter is ' + keyPressedStr); // for testing... 
  });
    remainingLettersInt = wordToGuessStr.length;
    evaluateGuess(); 
}


function evaluateGuess() {
  if (missedLettersArr.indexOf(keyPressedStr) !== -1) {
    alert("You already selected the letter " + keyPressedStr + " Choose again!");
    inputLetter();
  }
  while (remainingLettersInt > 0) {
    for (var j = 0; j < wordToGuessStr.length; j++) {
      if (wordToGuessStr[j] === keyPressedStr)  { 
        answerArrayArr[j] = keyPressedStr;
        remainingLettersInt--;
        console.log("running count of guesses: " + answerArrayArr);
        console.log("# letters evaluated" + remainingLettersInt);
      }
      else {
        missedLettersArr.push(keyPressedStr);
        console.log("Here are the incorrect guesses: " + missedLettersArr);
      }
    }
  }
  $("#guessesremain").text(guessesLeftStr);
  $("#lettersguessed").text(missedLettersArr.join("  "));
}
  function gameState () {
    if (answerArrayArr.indexOf("_") === -1) { // checks array to see if there are any "_" if none, word was guessed
      winGame();
    } 
    else if (answerArrayArr.indexOf("_") !== -1) {
      
      loseGame();
    }
    else {
      continueGame();
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