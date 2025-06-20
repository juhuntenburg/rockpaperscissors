const buttons = document.querySelector('#buttons');
const display = document.querySelector('#display');
const humanScoreDisp = document.querySelector('#humanScore');
const computerScoreDisp = document.querySelector('#computerScore');
const thisRoundDisp = document.querySelector('#thisRound');

let computerScore = 0;
let humanScore = 0;

buttons.addEventListener('click', (e) => {
    // Make sure the game cannot be played after it's won and before it's reset
    if (humanScore === 5 || computerScore == 5) return

    playRound(getHumanChoice(e.target), getComputerChoice())
    // The announcement and reset has to come after playRound directly 
    // we dont want to expect another button click first
    if (humanScore === 5 || computerScore == 5) endGame();
    }
);

function getHumanChoice(button) {
    return button.textContent.toLowerCase();
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors";
    }
};

function updateScores () {
    humanScoreDisp.textContent = `You: ${humanScore}`
    computerScoreDisp.textContent = `They: ${computerScore}`
};

function endGame () {
    if (humanScore === 5) {
        thisRoundDisp.textContent = 'YOU WON!' 
    } else if (computerScore === 5) {
        thisRoundDisp.textContent = 'THEY WON'
    };
    
    let resetBtn = document.createElement('button');
    resetBtn.textContent = "New Game";
    let para = document.createElement('p');
    para.appendChild(resetBtn);
    display.appendChild(para);
    
    resetBtn.addEventListener('click', (e) => resetAll(e.target));
};

function resetAll (button) {
    let allPara = document.querySelectorAll('p')
    allPara.forEach((p) => p.textContent = '');
    humanScore = 0;
    computerScore = 0;
    button.remove();
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        thisRoundDisp.textContent = `Tie -- you both played ${humanChoice}`;
        updateScores();
        return
    } else {
        switch (humanChoice) {
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        thisRoundDisp.textContent = `Paper wraps rock`;
                        ++humanScore;
                        updateScores();
                        return;
                    case "scissors":
                        thisRoundDisp.textContent = `Paper is cut by scissors`;
                        ++computerScore;
                        updateScores();
                        return;
                }
            case "rock":
                switch (computerChoice) {
                    case "paper":
                        thisRoundDisp.textContent = `Rock is wrapped by`;
                        ++computerScore;
                        updateScores();
                        return;
                    case "scissors":
                        thisRoundDisp.textContent = `Rock breaks scissors`;
                        ++humanScore;
                        updateScores();
                        return;
                }
            case "scissors":
                switch (computerChoice) {
                    case "paper":
                        thisRoundDisp.textContent = `Scissors cut paper`;
                        ++humanScore;
                        updateScores();
                        return;
                    case "rock":
                        thisRoundDisp.textContent = `Scissors are broken by rock`;
                        ++computerScore;
                        updateScores();
                        return;
                };
        };
    };
};

// A function that plays the game five times
//function playGame() {
    // Create variables to keep track of score
 //  let computerScore = 0;

    // A function that takes the human and computer player choices as arguments
    // And plays a round

    //for (i=0; i<5; i++) {
    //playRound(getHumanChoice(), getComputerChoice());  
    //};

    //if (humanScore === computerScore) {
    //    console.log(`Tie, both have ${humanScore} points`);
    //} else if (humanScore > computerScore) {
    //    console.log(`You win with ${humanScore} over ${computerScore} points`);
    //} else if (humanScore < computerScore){
    //    console.log(`You loose with ${humanScore} under ${computerScore} points`);
    //};
//};
// playGame();
