/*



3: create a click event
    3.1: check if the letter pressed is part of the word
    3.2: if it is in the word multiple times
    3.3: if the user has already guessed this letter
        - if the letter is part of the word then do not reduce totalGuesses
        - display the letter instead of the dash
    3.4: if user guess is not part of the word
        : if user has not already guessed the letter
            -reduce the total guesses
            - add the letter to letters guessed
            -alert the user to try again
4: Keep doing this logic if the totalGuesses is greater than 0
    : if it's less than 0, end the game. ask user if they want to play again
    : if yes, reset game

*/



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


var wordToGuess = ""
var keyPressed = "";
var lettersLeft = "";
var answerArray = [];

// Pick a random word from the word array
let wordToGuess = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  console.log(word); // for testing

  // create answerr array and fill it with "_"
for (var i = 0; i < word.length; i++) { 
  answerArray[i] = '';
  console.log(answerArray);
}
for (var i = 0; i < word.length; i++) {
    n = word.indexOf(answerArray[i])
    console.log(n + "")
}

// convert the word into dashes
     
//var str = "Hello world, welcome to the universe.";
///var n = str.indexOf("e", 5);  
    
    
    
   // /display dashes on screen