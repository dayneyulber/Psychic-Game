var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

var Wins = 0;
var Losses = 0;
var GuessesLeft = 9;
var Guesses = 9;
var YourGuessessofar = [];
var PsychicLetter;

var newLetter = function() {
psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
};

var soFar = function() {
document.getElementById("Guesses").innerHTML = "Guesses so far: " + YourGuessessofar.join(",");
};

var guessesLeft = function() {
document.getElementById("GuessesLeft").innerHTML = "Guesses Left: " + GuessesLeft;
};

var newGame = function() {
guessedLetters = [];
left = 9;
newLetter();
guessesLeft();
soFar();
}

document.onkeyup = function(event) {
var userGuess = event.key;
GuessesLeft--;
YourGuessessofar.push(userGuess);
soFar();
guessesLeft();
if (GuessesLeft > 0) {
    if (userGuess == psychicLetter) {
        Wins++;
        document.getElementById("wins").innerHTML = "Wins: " + Wins;
        newGame();
}
} else if (left == 0) {
    Losses++;
    document.getElementById("losses").innerHTML = "Losses: " + Losses;
    newGame();
}
};