    let playerScore = 0, computerScore = 0;
    let playerSelection = "";
    const div = document.querySelector('#outcome');

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.id;
            playGame();
        });
    });

    function computerPlay() {
        let computerOptions = ["ROCK", "PAPER", "SCISSORS"];
        let randomElement = getRandomElement(computerOptions);

        return computerOptions[randomElement];
    }

    function getRandomElement(array) {
        let randomElement = Math.floor(Math.random() * array.length);

        return randomElement;
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            return "It's a tie!";
        } else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
                   (playerSelection == "PAPER" && computerSelection == "ROCK") ||
                   (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        } else if ((playerSelection == "ROCK" && computerSelection == "PAPER") ||
                   (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
                   (playerSelection == "SCISSORS" && computerSelection == "ROCK")) {
            computerScore++;
            return `You lose! :( ${playerSelection} loses to ${computerSelection}.`; 
        }
    }

    function playGame() {
        let computerSelection;
        
        computerSelection = computerPlay();
            
        div.textContent = playRound(playerSelection, computerSelection) + 
            ` || Score: ${playerScore}-${computerScore}`;
        
        if (playerScore == 5) {
            alert("Congratulations! You've won a game based entirely off random chance :)");
        } else if (computerScore == 5) {
            alert("Whoops! You've lost to the computer :(");
        };
    } 

    function reportFinalOutCome() {
        if (playerScore > computerScore) {
            return `You've won the best of five! Final score: ${playerScore}-${computerScore}`;
        } else if (playerScore < computerScore) {
            return `You've lost the best of five! Final score: ${playerScore}-${computerScore}`;
        } else {
            return `You've tied the best of five! Final score: ${playerScore}-${computerScore}`;
        }
    }