/* Variables, arrays, etc. */
var wordsListArr = ["pneumonia",  // List of words for guessing game
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
var guessedLettersArr = []; // Array to hold all guessed letters
var guessesLeftInt= 10; // player guesses left counter starts at 10.
var lossCountInt = 0; // loss counter
var winCountInt = 0; // win counter
var firstTime = true;


/* Event handlers */

$("#start").on("click", startGame); // select button and give an onclick function -- jQuery
$("#end").on("click", endGame); // select button and give an onclick function -- jQuery
/*
document.addEventListener("keyup", function (e) {// Event listener for keypress - chars saved in "keyPressed"
    keyPressed = String.fromCharCode(event.keyCode).toLowerCase(); // take UCS 02 vals and convert to str of key's value . Also make lower case
 */   
 //functions and game logic 

function selectWord () { 
  wordToGuessStr = wordsListArr[Math.floor(Math.random() * wordsListArr.length)]; // Pull out random word from array
      console.log("Computer's selected word " + wordToGuessStr);// remove??
       $("#status").text(wordToGuessStr); // remove??
  for ( var i = 0; i < wordToGuessStr.length; i++) { // populates answerArray with " _" 
      answerArrayArr[i] = "_";
  }
  $("#puzzle").text(answerArrayArr.join(" ")); //display ____ on screen
  
  inputLetter();
 }

 function inputLetter () {
  console.log("Break");
  document.addEventListener("keyup", function (e) {// Event listener for keypress - chars saved in "keyPressed"
      keyPressed = String.fromCharCode(event.keyCode).toLowerCase(); // take UCS 02 vals and convert to str of key's value . Also make lower case
      console.log("YOUR LETTER is " + keyPressed); // for testing
  });
  evaluateGuess(); 
}

function evaluateGuess() {
  remainingLettersInt = wordToGuessStr.length;
  console.log(remainingLettersInt);
  if ((firstTime =false) && (guessedLettersArr.indexOf(keyPressedStr) !== -1)) {
    console.log(guessedLettersArr.indexOf(keyPressedStr));
    $("#status").text("Duplicate Guess. Select Again")
    console.log(guessedLettersArr.indexOf(keyPressedStr));
    inputLetter();
  } 
  else {
    for (var j = 0; j < remainingLettersInt; j++) {
      if (wordToGuessStr[j] === keyPressedStr) { 
        answerArrayArr[j] = keyPressedStr;
        guessedLettersArr.push(keyPressedStr);
        // remainingLettersInt--;
        console.log("Guesses answer array: " + answerArray);
        console.log("running count of guesses: " + guessedLettersArr);
        console.log("# letters evaluated" + ((wordToGuessStr.length - remainingLettersInt)));
        $("#status").text("That's correct!");
      }
      else {
        guessedLettersArr.push(keyPressedStr);
        guessesLeftInt--;
        console.log("Put this into answer array: " + (guessedLettersArr.indexOf(keyPressedStr)));
        console.log("RemainLtrInt: " + remainingLettersInt);
        console.log("running count guesses: " + guessedLettersArr);
        console.log("Guesses Left: " + guessesLeftInt);
        console.log("indexKPS: " + (guessedLettersArr.indexOf(keyPressedStr)));
        $("#status").text("Ooops. Incorrect");
        $("#status").text(guessesLeftInt);
      }
    }
  }
  firstTime = false;
  $("#puzzle").text(answerArrayArr.join(" ")); //display ____ on screen
  $("#lettersguessed").text(guessedLettersArr.join("  "));
  console.log("made it");
  gameState();
}

function gameState () {
  if ((wordToGuessStr.toString()) === (guessedLettersArr.toString())) {
    firstTime = true;
    winGame();
  } 
  else if (guessesLeftInt === 0) {
    firstTime = true;
    loseGame();
  }
  else {
    inputLetter();
  }
}

function winGame () {
  $("#lettersguessed").text(guessedLettersArr.join(" "));
  $("#puzzle").text(answerArrayArr.join(" "));
  console.log("You guessed the word - " + ToGuessStr + " in: " + guessesLeftInt + " turns");
  console.log("Here's the answer array: " + answerArrayArr);
  console.log("Here are all the  guesses: " + guessedLettersArr);
  $("#status").text("You're a Winner");
  winCountInt = winCountInt +1;
  firstTime = true;
  $("#winscore").text(winCountInt);
  console.log("# of wins: " + winCountInt);
}

function loseGame () {
  console.log("Soy un perdedor"); // repace with real loss status msg
  console.log("Here's the answer array for loss: " + answerArrayArr);
  console.log("Here are the incorrect guesses: " + guessedLettersArr);
  lossCountInt = lossCountInt +1;
  firstTime = true;
  $("#losescore").text(lossCountInt);
  console.log("# of losses: " + lossCountInt);
  $("#status").text("You Lost!");
}

function resetAllVars () {
  // except wins & loss
  wordToGuessStr = "";
  keyPressedStr = ""; 
  answerArrayArr = []; 
  remainingLettersInt = 0; 
  guessedLettersArr = []; 
  guessesLeftInt= 10;
  firstTime = true; 
}

function endGame () {
  resetAllVars ()
  $("#status").text("Good Bye");
}

function startGame () {
  $("#status").text("Please type a letter");
  firstTime = true;
  /* document.addEventListener("keyup", function (e) {// Event listener for keypress - chars saved in "keyPressed"
  if (event.which) {
    keyPressed = String.fromCharCode(event.keyCode).toLowerCase(); // take UCS 02 vals and convert to str of key's value . Also make lower case}
  }*/
 selectWord();
}
