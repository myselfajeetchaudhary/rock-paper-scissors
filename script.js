let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const gameOptions = ["Rock", "Paper", "Scissors"];
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

function getPlayerChoice() {
  let playerChoice = prompt("Choose Rock, Paper or Scissors");
  return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            console.log(`It's a Draw`);
            break;
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
        case (playerSelection === "Paper" && computerSelection === "Rock"):
        case (playerSelection === "Scissors" && computerSelection === "Paper"):
            playerScore++;
            console.log(`You Won`);
            break;
        default:
            computerScore++;
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
  }

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
  } 
}

game();

if (playerScore > computerScore) {
  console.log(`You Won. Score: P-${playerScore} & C-${computerScore}`);
} else if (playerScore === computerScore) {
  console.log("It's a Draw")
} else {
  console.log(`You Lose. Score: P-${playerScore} & C-${computerScore}`);
}










// Selecting buttons with class 'btn'
// const buttons = document.querySelectorAll('.btn');

// Calling playRound() when button clicked
// buttons.forEach(button => {
//     button.addEventListener('click', playGame);
// });

// Getting player choice and calling playRound function 
// function playGame(e) {
//     let playerSelection = e.target.textContent;
//     return playRound(playerSelection, computerSelection());
// }