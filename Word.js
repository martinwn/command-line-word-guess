// Our Require Variable

const Letter = require("./Letter")

// Our Constructor Function 

function Word (word) {
    this.word = word;
    this.letterObjectArray = [];
    this.letterArray = [];
    this.pushToLetterObjectArray = function () {
        for (i=0; i < this.word.length; i++) {
            this.letterObjectArray.push(new Letter(this.word[i]));
        }
    }
    this.check = function (guess) {
        for (i=0; i < this.letterObjectArray.length; i++) {
            this.letterObjectArray[i].check(guess);
        }
    }
    this.display = function () {
        this.letterArray.length = 0;
        for (i=0; i < this.letterObjectArray.length; i++) {
            this.letterArray.push(this.letterObjectArray[i].display());
        }
        return this.letterArray.join(" ");
    }
}

// Module Export

module.exports = Word;