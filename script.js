
const gameSelections = ["ROCK", "PAPER", "SCISSOR"];

function getComputerSelection() { 
    
    //return random selection from computer
    return gameSelections[Math.floor(gameSelections.length * Math.random())];

}

function playGame(getPlayerSelection, getComputerSelection) {
    
    //Store player and computer selections
    computerSelection = getComputerSelection();
    playerSelection = getPlayerSelection;

    //Determine winner and display results
    if(playerSelection==computerSelection) {
        console.log("Tie game, nobody wins");
    } else if (
        (computerSelection=="ROCK" && playerSelection=="SCISSOR") ||
        (computerSelection=="SCISSOR" && playerSelection=="PAPER") ||
        (computerSelection=="PAPER" && playerSelection=="ROCK")
    ) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        let winner = "Computer";
        return winner;
    } else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        let winner = "Player"
        return winner;
    }
}

function keepScore() {

    computerScore = 0;
    playerScore = 0;

    while(computerScore < 5 && playerScore < 5) {
        let gameResult = playGame("ROCK", getComputerSelection)
        if (gameResult == "Computer") {
            computerScore += 1;
            console.log(`Now the score is Computer: ${computerScore} to Player: ${playerScore}.`);
        }
        else if (gameResult == "Player") {
            playerScore += 1;
            console.log(`Now the score is Player: ${playerScore} to Computer: ${computerScore}.`);
        }
        else {
            console.log(`No point awarded. The score remains Player: ${playerScore} to Computer: ${computerScore}.`)
        }
    }
}


console.log(keepScore());




