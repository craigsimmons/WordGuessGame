 //Wrap JS in doc.ready to ensure no js executes before entire page onloads
    $(document).ready(function() {

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
        // event listener for keypresses
        document.addEventListener('keyup', function(event) { 

        // take UCS 02 values and convert to a string representing the key's value
        keyPressed = String.fromCharCode(event.keyCode); // take UCS 02 values and convert to a string
        console.log('Your letter is ' + keyPressed); // for testing
        });

        // get buttons by their id, use variables as objects later
        var buttonStart = document.getElementById("start");
        var buttonEnd = document.getElementById("end");

        // Starts the game
        buttonStart.addEventListener('click', function(event) {
            document.location.href = 'http://www.google.com';
        });
        //ends the game
        buttonEnd.addEventListener('click', function(event) {
            document.location.href = 'http://www.microsoft.com';
        });

        // select word from array at random
        var word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        console.log(word); // for testing

        for (var i = 0; i < word.length; i++) { // create answerr array and fill it
            answerArray[i] = '';
            console.log(answerArray);
        }

    });