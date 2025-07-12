let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100)

function checkGuess() {
    let userValue = parseInt(userInput.value);
    if (userValue > randomNumber) {
        gameResult.textContent = "Your are Too High";
        gameResult.style.backgroundColor = "Red";
    } else if (userValue < randomNumber) {
        gameResult.textContent = "Your are Too Low"
        gameResult.style.backgroundColor = "Grey";
    } else if (userValue === randomNumber) {
        gameResult.textContent = "Congrulations Your Guess is right"
        gameResult.style.backgroundColor = "Green";
    } else if (isNaN(userValue)) {
        alert("Please enter valid Input");
        return;
    }
}
// let gameResult = document.getElementById("gameResult");
// let userInput = document.getElementById("userInput");
// let randomNumber = Math.ceil(Math.random() * 100);

// function checkGuess() {
//     let userValue = parseInt(userInput.value);

//     if (isNaN(userValue)) {
//         alert("Please enter a valid number.");
//         return;
//     }

//     if (userValue > randomNumber) {
//         gameResult.textContent = "You are Too High";
//         gameResult.style.backgroundColor = "Red";
//     } else if (userValue < randomNumber) {
//         gameResult.textContent = "You are Too Low";
//         gameResult.style.backgroundColor = "Grey";
//     } else {
//         gameResult.textContent = "Congratulations! Your Guess is Right";
//         gameResult.style.backgroundColor = "Green";
//     }
// }

// let gameResult = document.getElementById("gameResult");
// let userInput = document.getElementById("userInput");
// let randomNumber = Math.ceil(Math.random() * 100);
// function checkGuess() {
//   let guessedNumber = parseInt(userInput.value);
//   if (guessedNumber > randomNumber) {
//     gameResult.textContent = "Too High! Try Again.";
//     gameResult.style.backgroundColor = "#1e217c";
//   }
//   else if (guessedNumber < randomNumber) {
//     gameResult.textContent = "Too Low! Try Again.";
//     gameResult.style.backgroundColor = "#1e217c";
//   }
//   else if (guessedNumber === randomNumber) {
//     gameResult.textContent = "Congratulations! You got it right.";
//     gameResult.style.backgroundColor = "green";
//   }
//   else {
//     gameResult.textContent = "Please provide a valid input.";
//     gameResult.style.backgroundColor = "#1e217c";
//   }
// }
