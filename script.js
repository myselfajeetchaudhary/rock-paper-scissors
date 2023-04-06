// Computer's Random Choice of Rock, Paper, Scissors
function getComputerChoice() {
    let gameText = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * gameText.length);
    return gameText[randomNumber];
}

let playerScore = 0;
let compScore = 0;

// Playing 1 Game Rounds
function playRound(playerSelection, computerSelection) {
    
    switch(true) {
        // PLayer 'Rock' and Computer 'Paper'
        case (playerSelection === 'Rock' && computerSelection === 'Paper'):
            compScore++;
            return console.log(`You Lose! ${computerSelection} beats ${playerSelection} Scores = Player-${playerScore} Computer-${compScore}`);
            break;
        // PLayer 'Rock' and Computer 'Scissors'   
        case (playerSelection === 'Rock' && computerSelection === 'Scissors'):
            playerScore++;
            return console.log(`You Won! Scores = Player-${playerScore} Computer-${compScore}`);
            break;
        // PLayer 'Paper' and Computer 'Rock'   
        case (playerSelection === 'Paper' && computerSelection === 'Rock'):
            playerScore++;
            return console.log(`You Won! Scores = Player-${playerScore} Computer-${compScore}`);
            break;
        // PLayer 'Paper' and Computer 'Scissors'   
        case (playerSelection === 'Paper' && computerSelection === 'Scissors'):
            compScore++;
            return console.log(`You Lose! ${computerSelection} beats ${playerSelection} Scores = Player-${playerScore} Computer-${compScore}`);
            break;
        // PLayer 'Scissors' and Computer 'Rock'   
        case (playerSelection === 'Scissors' && computerSelection === 'Rock'):
            compScore++;
            return console.log(`You Lose! ${computerSelection} beats ${playerSelection} Scores = Player-${playerScore} Computer-${compScore}`);
            break;
        // PLayer 'Scissors' and Computer 'Paper'   
        case (playerSelection === 'Scissors' && computerSelection === 'Paper'):
            playerScore++;
            return console.log(`You Won! Scores = Player-${playerScore} Computer-${compScore}`);
            break;
        // PLayer chooses same as Computer    
        case (playerSelection === computerSelection):
            return console.log(`Draw! Scores = Player-${playerScore} computer-${compScore}`);
            break;  
    }
}

// Looping to play 5 Game Rounds
for (let i = 0; i < 5; i++) {
    let userChoice = prompt('Choose between (Rock, Paper, Scissors)');
    let playerSelection = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLocaleLowerCase();
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
}

// Declaring the Final Winner
if(playerScore > compScore) {
    console.log('You Won!')
}else if(playerScore === compScore) {
    console.log('It\'s a Draw!')
}else {
    console.log('You Lose!')
}