 //Wrap JS in doc.ready to ensure no js executes before entire page onloads
$(document).ready(function() {
  console.log("document loaded")

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

var keyPressed = '';
var lettersLeft = '';
var answerArray = [];

// Event listener for keypress - chars saved in "keyPressed"
document.addEventListener('keyup', function(event) { 
// take UCS 02 values and convert to a string representing the key's value
keyPressed = String.fromCharCode(event.keyCode); 
console.log('Your letter is ' + keyPressed); // for testing... REMOVE
});

// get buttons by their id, use variables as objects later
var buttonStart = document.getElementById("start");
var buttonEnd = document.getElementById("end");
var buttonEndMusic = document.getElementById("stop");

// Starts the game
buttonStart.addEventListener('click', function(event) {
  document.location.href = 'http://www.google.com';
});
        
//Ends the game
buttonEnd.addEventListener('click', function(event) {
  document.location.href = 'http://www.microsoft.com';
});

// select word from array at random
let word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
  console.log(word); // for testing
  // create answerr array and fill it
for (var i = 0; i < word.length; i++) { 
  answerArray[i] = '';
  console.log(answerArray);
}

// display "_" on page NOT WORKING
document.getElementById("#100").innerHTML = answerArray;
    
// Evaluate Player Guess and make sure it's not null or multiple ltrs


  if (keyPressed.length === null) {
    alert('No letter selected. Try again!')
  }   
  else if (keyPressed.length !== 1) {
    alert('Enter a single letter only. Try again!');
  } 
  else { // Update the game state with the guess
  for (var j = 0; j < word.length; j++) {
      if (word[j] === keyPressed) {  //compare keyPressed to chars in array
        //  answerArray[j] = keyPressed;
        //  lettersLeft--;
      }
  }
}
// Update Letters Guessed display with letter (regardless of outcome)
// if char is in selected word, update game state !
      //Including players progess and word display

      // if guess is wrong
      // decrement guesses remaining  by 1
      //if guess is correct leave guesses remaining alone

  // ask for another guess

  // Continue while # of guesses is < 10 
  // (10 is roughly the # of "sticks" in a traditional hangman)




});


/*
// redo this block below
lettersLeft = word.length;
while (lettersLeft > 0); {
    var answerJoin = (answerArray.join(" ")); //(use join to cat array values to string)
    console.log(answerJoin);

} 
</script>

*/
