// Create a new function to get the computers choice
function getComputerChoice() {
    // get a random number out of the set 0, 1 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    // depending on this number return one of the string values “rock”, “paper” or “scissors”
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors";
    }
}

// Create a new function to get the human's choice
function getHumanChoice() {
    return prompt(`Enter "rock", "paper", or "scissors": `).toLowerCase();
}

// A function that plays the game five times
function playGame() {
    // Create variables to keep track of score
    let humanScore = 0;
    let computerScore = 0;

    // A function that takes the human and computer player choices as arguments
    // And plays a round
    function playRound(humanChoice, computerChoice) {
        // if both play the same, nobody gets a point
        if (humanChoice === computerChoice) {
            console.log(`Tie -- you both played ${humanChoice}`);
            return
        // otherwise go through all conditions and log winner
        } else {
            switch (humanChoice) {
                case "paper":
                    switch (computerChoice) {
                        case "rock":
                            console.log(`You win -- paper wraps rock`);
                            ++humanScore;
                            return;
                        case "scissors":
                            console.log(`You loose -- scissors cut paper`);
                            ++computerScore;
                            return;
                    }
                case "rock":
                    switch (computerChoice) {
                        case "paper":
                            console.log(`You loose -- paper wraps rock`);
                            ++computerScore;
                            return;
                        case "scissors":
                            console.log(`You win -- rock breaks scissors`);
                            ++humanScore;
                            return;
                    }
                case "scissors":
                    switch (computerChoice) {
                        case "paper":
                            console.log(`You win -- scissors cut paper`);
                            ++humanScore;
                            return;
                        case "rock":
                            console.log(`You loose -- rock breaks scissors`);
                            ++computerScore;
                            return;
                    };
            };

        };
    };

    for (i=0; i<5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    };

    if (humanScore === computerScore) {
        console.log(`Tie, both have ${humanScore} points`);
    } else if (humanScore > computerScore) {
        console.log(`You win with ${humanScore} over ${computerScore} points`);
    } else if (humanScore < computerScore){
        console.log(`You loose with ${humanScore} under ${computerScore} points`);
    };
};

playGame();
