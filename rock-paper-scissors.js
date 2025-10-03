const MAX_NUMBER_OF_CHOICES = 3;

function getComputerChoice() {
  let choice = "";
 
  switch(getRandomNumber()) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
      break;
    default:
      choice = "invalid";
      break;
  }
  return choice;
}

function getRandomNumber() {
  return Math.floor(Math.random() * MAX_NUMBER_OF_CHOICES);
}

function getHumanChoice() {
  let input = prompt("Rock, Paper or Scissors?");

  return input;
}

function playRound(humanChoice, computerChoice) {
  let winner;

  humanChoice = humanChoice.toLowerCase();

  console.log("you chose " + humanChoice + ", the computer chose " + computerChoice);

  if(humanChoice == "rock") {
    if(computerChoice == "rock") {
      console.log("Tie! No one wins this round!");
    } else if(computerChoice == "paper") {
      console.log("Paper covers Rock! You lose!")
      winner = "cpu";
    } else if(computerChoice == "scissors") {
      console.log("Rock crushes Scissors! You Win!")
      winner = "human";
    }
  } else if(humanChoice == "paper") {
    if(computerChoice == "rock") {
      console.log("Paper covers Rock! You Win!");
      winner = "human";
    } else if(computerChoice == "paper") {
      console.log("Tie! No one wins this round!")     
    } else if(computerChoice == "scissors") {
      console.log("Scissors cuts Paper! You Lose!")
      winner = "cpu";
    }
  } else if(humanChoice == "scissors") {
    if(computerChoice == "rock") {
      console.log("Rock crushes Scissors! You Lose!");
      winner = "cpu";
    } else if(computerChoice == "paper") {
      console.log("Scissors cuts Paper! You Win!")
      winner = "human";
    } else if(computerChoice == "scissors") {
      console.log("Tie! No one wins this round!") 
    }
  }

  return winner;
}

function getWinner(humanScore, computerScore) {
  if(humanScore > computerScore) {
    console.log("You win!");
  } else if(humanScore < computerScore) {
    console.log("You lose!");
  } else if(humanScore == computerScore) {
    console.log("Its a tie!");
  }
}

function playGame() {
  const NUM_OF_ROUNDS = 5;

  let humanScore = 0;
  let computerScore = 0;
  let currentRound = 0;

  let humanChoice;
  let computerChoice;

  let roundWinner;

  while(currentRound < NUM_OF_ROUNDS) {
    console.log("Current Round: " + (currentRound + 1));
    humanChoice =  getHumanChoice();
    computerChoice = getComputerChoice();

    roundWinner = playRound(humanChoice, computerChoice);

    if(roundWinner == "human") {
    humanScore += 1;
    } else if(winner = "cpu") {
      computerScore += 1;
    }
    
    console.log("current score:")
    console.log("HUMAN: " + humanScore + " - CPU: " + computerScore);
    console.log("");
    currentRound++;
  }

  getWinner(humanScore, computerScore);
}

playGame();