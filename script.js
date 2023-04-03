let userChoice = prompt('Choose between (Rock, Paper, Scissors)');
let playerSelection = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLocaleLowerCase();
let computerSelection = getComputerChoice();

// Computer's Random Choice of Rock, Paper, Scissors
function getComputerChoice() {
    let gameText = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = [Math.floor(Math.random() * gameText.length)];

    return gameText[randomNumber];
}

function playRound() {
    return (playerSelection === computerSelection) ? 'You Won!' : 'You Lose!';
}

console.log(playRound());