// Global variable and array declarations

// Seed wordArray with values
var wordsListArr = ["pneumonia",
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
var wordToGuessStr = "";
// use this array to hold letters from computer's selected word
var wordLettersArr = [];
//number of spaces (underlines) we display; should be equal to the selected word length
var numSpacesStr = 0;
// holds info on which key was pressed
var keyPressedStr = "";
// Array to hold player guesses and underlines (e.g. "_") for manipulation and display
var answerArrayArr = [];
// Array to hold incorrectly guessed letters
var missedLettersArr = [];
// Various counters
// player guesses left counter starts at 10. Roughly the # of guesses if we played real hangman
var guessesLeftStr = 10;
var lossCountStr = 0;
var winCountStr = 0;
var letterCompareBoo = true;  // boolean 

// select button and give an onclick function -- jQuery
$("#start").on("click", startGame);
$("#end").on("click", startGame);
//DO I NEED TO TURN THIS OFF? (document).off(keyup)

 $("#currentword").text(wordToGuessStr);
 $("#keytyped").text(keyPressedStr);
 $("#guessesremain").text(guessesLeftStr);
 $("#lettersguessed").text(missedLettersArr.join("  "));
 $("#winscore").text(winCountStr);
 $("#losescore").text(lossCountStr);
 $("#puzzle").text(answerArrayArr.join(" "));

function startGame() {
  $(document).keyup(function(event){ 
    keyPressedStr = String.fromCharCode(event.keyCode).toLowerCase();
    console.log('Your letter is ' + keyPressedStr); 
  });
//DO I NEED TO TURN ther keyup OFF?
  // $(document).off(keyup);
 
  wordToGuessStr = wordsListArr[Math.floor(Math.random() * wordsListArr.length)];
  console.log("Computer's selected word " + wordToGuessStr);
  wordLettersArr = wordToGuessStr.split("");
  console.log("these are the letters = " + wordLettersArr);
  numSpacesStr = wordToGuessStr.length
  console.log("number of spaces/blanks = " + numSpacesStr);
  
  // for (var i = 0; i < wordToGuessStr.length; i++) { 
  for (var i = 0; i < numSpacesStr; i++) { 
    answerArrayArr.push("_ ");
  }

  for (var j = 0; j < numSpacesStr; i++) {
      if (wordToGuessStr[i] === keyPressedStr)  { 
        letterCompareBoo = true;
        console.log("Letter Selected: " + keyPressedStr);
      }
  }
  
  if (letterCompareBoo) {
    for (var k = 0; k < numSpacesStr; j++) {
        if (wordToGuessStr[j] === keyPressedStr) {
          answerArrayArr[j] = keyPressedStr;
        }
        else {  
          missedLettersArr.push(keyPressedStr);
          guessesMadeStr++;
          guessesLeftStr--;
          console.log("Guesses Made:" + guessesMadeStr); 
          console.log("Guesses Left:" + guessesLeftStr); 
        }
    }
  }
}