let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Write your code below
function generateTarget(){
  return Math.floor(Math.random() * 10);
  }

  function compareGuesses(humanNo, computerNo, targetNo){
    if(humanNo === computerNo || (Math.abs(targetNo - humanNo) < Math.abs(targetNo - computerNo)) || (Math.abs(humanNo - targetNo) === Math.abs(targetNo - computerNo))){
      return true;
    }else{
      return false;
    }
  }

/*
  function updateScore(winner){
    let humanScore = 0;
    let computerScore = 0;
    if(winner === true){
      humanScore++;
    }else{
      computerScore++;
    }
  }
*/

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}
  function advanceRound(){

    currentRoundNumber++;
  }
//console.log(compareGuesses())