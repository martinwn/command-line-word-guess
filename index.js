// Our require variables

const inquirer = require('inquirer');
const Word = require('./Word');

// Global Variables

const wordArray = ['eagle', 'hawk', 'goose', 'raven', 'crow', 'raptor'];
let currentWord;
let newWord;
let guessesRemaining = 8;

// Functions

function chooseWord () {
    currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    newWord = new Word(currentWord);
    newWord.pushToLetterObjectArray();
};

function inquirerPrompt (message) {

    inquirer.prompt([
        {
        type: "input",
        message: message,
        name: "guess",
        validate: function validateGuess (name) {
            return name !== "" && name.length === 1;
            }
        }
    ]).then(function(response) {

        if (guessesRemaining > 1) {

            if (newWord.word.indexOf(response.guess) > -1) {

                console.log("Correct!");

            } else {

                guessesRemaining--;
                console.log(`Incorrect! You have ${guessesRemaining} guesses remaining.`);

            };

            newWord.check(response.guess);
            console.log(newWord.display());

            if (newWord.letterArray.indexOf("_") === -1) {

                console.log(`Noice you correctly guessed ${newWord.word}!`)
                chooseWord();
                guessesRemaining = 8;
                inquirerPrompt("Let's try another word. Guess a Letter!")

            } else {

                inquirerPrompt("Guess a Letter!");

            };

        } else {

            console.log("Sorry you've lost!");  
            guessesRemaining = 8;
            chooseWord();
            inquirerPrompt("Let's try another word. Guess a Letter!");

        };
    });
};

// Function Calls 

chooseWord();

inquirerPrompt("Guess a Letter!");

