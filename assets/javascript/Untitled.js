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





// select word from array at random
var word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
console.log(word); // for testing

for (var i = 0; i < word.length; i++) { // create answerr array and fill it
    answerArray[i] = '';
    console.log(answerArray);
}

function () {
    var workArray = answerArray;
    for (var i = 0; i < word.length; i++) { 
     workArray[i] = '_';
     console.log(answerArray);
     console.log(workArray)
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
