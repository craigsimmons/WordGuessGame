/*
let intSum = function (intValue) {
    return sum(range(intValue+1));
    return intValue * (intValue+1) / 2;
}
intSum(8);

function addInts(int) {
    for (let i =0; i <= int; i++) {
        let answer = answer +1;
    }
    return answer;

}

 
<script>
//Wrap JS in doc.ready to ensure no js executes before entire page onloads
// $(document).ready(function() {

// variable and array declarations
// seed wordArray with values
var wordsArray = [
    'cat',
    'witch',
    'vampire',
    'platypus',
    'element'
];

var keyPressed = '';
var lettersLeft = '';
var answerArray = [];

document.addEventListener('keyup', function(event) { 

// take UCS 02 values and convert to a string representing the key's value
keyPressed = String.fromCharCode(event.keyCode); // take UCS 02 values and convert to a string
console.log('Your letter is ' + keyPressed); // for testing
});

var buttonStart = document.getElementById("start");
var buttonEnd = document.getElementById("end");

/*
buttonStart.addEventListener('click', function(event) {
    document.location.href = '#';
});

buttonEnd.addEventListener('click', function(event) {
    document.location.href = 'index.html';
});
*/




// select word from array at random
var word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
console.log(word); // for testing

for (var i = 0; i < word.length; i++) { // create answerr array and fill it
    answerArray[i] = '';
    console.log(answerArray);
}



/*
// redo this block below
lettersLeft = word.length;
while (lettersLeft > 0); {
    var answerJoin = (answerArray.join(" ")); //(use join to cat array values to string)
    console.log(answerJoin);

} */
</script>

if (keyPressed.length === null) {
    // break;
    // alert('No letter selected. Try again!');
} else if (keyPressed.length !== 1) {
    alert('Enter a single letter only. Try again!');
} else { // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
        if (word[j] === keyPressed) { // not working
            answerArray[j] = keyPressed;
            lettersLeft--;
        }
    }
}
*/
