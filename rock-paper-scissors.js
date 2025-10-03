const MAX_NUMBER_OF_CHOICES = 3;

function getComputerChoice() {
  let choice = '';
 
  switch(getRandomNumber()) {
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'paper';
      break;
    case 2:
      choice = 'scissors';
      break;
    default:
      choice = 'invalid';
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
