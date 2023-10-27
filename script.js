const targetNumber = Math.ceil(Math.random() * 30);
let numberOfGuesses = 0;

const submitButton = document.getElementById("submit-button");
const userGuessInput = document.getElementById("user-guess");
const resultMessage = document.getElementById("result-message");

submitButton.addEventListener("click", function() {
  const userGuess = parseInt(userGuessInput.value);

 numberOfGuesses++;

    if (userGuess === targetNumber) {
        resultMessage.textContext = `Congratulation! You guessed the number ${targetNumber} in ${numberOfGuesses} guesses.`;
    } else if (userGuess < targetNumber) {
        resultMessage.textContent = "Try a higher number.";
    } else {
      resultMessage.textContent = "Try a lower number."; 
    }
  });

    