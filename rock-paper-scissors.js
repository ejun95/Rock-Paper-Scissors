const MAX_NUMBER_OF_CHOICES = 3;

let humanScore = 0;
let computerScore = 0;

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
  humanChoice = humanChoice.toLowerCase();

  console.log("you chose " + humanChoice + ", the computer chose " + computerChoice);

  if(humanChoice == "rock") {
    if(computerChoice == "rock") {
      console.log("Tie! No one wins this round!");
    } else if(computerChoice == "paper") {
      console.log("Paper covers Rock! You lose!")
      ++computerScore;
    } else if(computerChoice == "scissors") {
      console.log("Rock crushes Scissors! You Win!")
      ++humanScore;
    }
  } else if(humanChoice == "paper") {
    if(computerChoice == "rock") {
      console.log("Paper covers Rock! You Win!");
      ++humanScore;
    } else if(computerChoice == "paper") {
      console.log("Tie! No one wins this round!")     
    } else if(computerChoice == "scissors") {
      console.log("Scissors cuts Paper! You Lose!")
      ++computerScore;
    }
  } else if(humanChoice == "scissors") {
    if(computerChoice == "rock") {
      console.log("Rock crushes Scissors! You Lose!");
      ++computerScore;
    } else if(computerChoice == "paper") {
      console.log("Scissors cuts Paper! You Win!")
      ++humanScore;
    } else if(computerChoice == "scissors") {
      console.log("Tie! No one wins this round!") 
    }
  }
}

let humanChoice =  getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);