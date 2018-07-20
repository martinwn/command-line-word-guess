//Our Constructor Function

function Letter (letter) {
    this.letter = letter;
    this.hasBeenGuessed = false;
    this.display = function () {
        if (!this.hasBeenGuessed) {
            return "_";
        } else {
            return this.letter;
        }
    }
    this.check = function (guess) {
        if (guess === this.letter) {
            return this.hasBeenGuessed = true;
        }
    }
};

// Module Export

module.exports = Letter;