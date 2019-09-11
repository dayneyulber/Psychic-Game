var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

function countGuessesLeft() {
    document.querySelector("#left").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
    document.querySelector("#guesses").innerHTML = "Your Guesses so far: " + letterUser.join(" ");
}

countGuessesLeft();
var restart = function () {
    guessesLeft = 9;
    letterUser = [];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    letterUser.push(userGuess);
    countGuessesLeft();
    farUserGuesses();
    if (userGuess === computerGuess) {
        wins++;
        document.querySelector("#win").innerHTML = "Wins: " + wins;
        restart();
    } else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#lose").innerHTML = "Loses: " + losses;
        restart();
    }
};