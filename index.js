const rockBtn = document.getElementById("rock");
        const paperBtn = document.getElementById("paper");
        const scissorsBtn = document.getElementById("scissors");
        const results = document.getElementById("results");

        //Adding event listeners
        rockBtn.addEventListener("click",playRock);
        paperBtn.addEventListener("click", playPaper);
        scissorsBtn.addEventListener("click", playScissors);

        //Rock function
        function playRock() {
            //storing the computer's choice
            const computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                results.textContent = "It's a tie!";
            } else if (computerChoice === "paper") {
                results.textContent = "You lose! Paper beats Rock";
            }else if (computerChoice === "scissors") {
                results.textContent = "You win! Rock beats Scissors";
            }
        }
        //Paper function
        function playPaper() {
            //storing the computer's choice
            const computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                results.textContent = "You win! Paper beats Rock";
            }
            else if (computerChoice === "paper") {
                results.textContent = "It's a tie!";
            }
            else if (computerChoice === "scissors") {
                results.textContent = "You lose! Scissors beats Paper";
                }
                
        }
        //Scissors function
        function playScissors() {
            //storing the computer's choice
            const computerChoice = getComputerChoice();
            if (computerChoice === "rock") {
                results.textContent = "You lose! Rock beats Scissors";
            }
            else if (computerChoice === "paper") {
                results.textContent = "You win! Paper beats Scissors";
            }
            else if (computerChoice === "scissors") {
                results.textContent = "It's a tie!";
            }
        }
        
        //set computer choice function
        function getComputerChoice() {
        const choices = ["rock","paper","scissors"];
        const randomIndex = Math.floor(Math.random()*3);
        return choices[randomIndex];
        }