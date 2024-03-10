function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
      case 0:
          choice = "Rock";
          break;
      case 1:
          choice = "Paper";
          break;
      case 2:
          choice = "Scissors";
          break;
  };
  return choice;
};

function playRound(playerSelection, computerSelection) {
  let win = `You Win! ${playerSelection} beats ${computerSelection}`
  let lose = `You Lose! ${computerSelection} beats ${playerSelection}`
  let tie = 'Tie!'
  switch(playerSelection) {
      case 'rock':
          if (computerSelection === 'Rock') {
              console.log(tie);
              return 0;
          }
          if (computerSelection === 'Paper') {
              console.log(lose);
              return 1;
          }
          else {
              console.log(win);
              return 2;
          };
      case 'paper':
          if (computerSelection === 'Rock') {
              console.log(win);
              return 2;
          }
          if (computerSelection === 'Paper') {
              console.log(tie);
              return 0;
          }
          else {
              console.log(lose);
              return 1;
          }
      case 'scissor':
          if (computerSelection === 'Rock') {
              console.log(lose);
              return 1;
          }
          if (computerSelection === 'Paper') {
              console.log(win);
              return 2;
          }
          else {
              console.log(tie);
              return 0;
          }
  }
};

function playGame() {
  let player = 0
  let computer = 0
  for (let step = 0; step < 5; step++) {
      console.log(`Round ${step + 1}`)
      var playerSelection = prompt("Rock, Paper, or Scissors?: ").toLowerCase();
      let computerSelection = getComputerChoice();
      switch(playRound(playerSelection, computerSelection)) {
          case 0:
              console.log('')
              continue;
          case 1:
              computer++;
          case 2:
              player++;
          console.log(`Score: You: ${player}, Computer: ${computer}`);
          console.log('')
      } 
  } 
  if (player > computer) {
      console.log(`You Win The Game! You: ${player}, Computer: ${computer}`);
  }
  else if (computer > player) {
      console.log(`You Lose The Game! You: ${player}, Computer: ${computer}`)
  }
  else {
      console.log(`Tie Game! You: ${player}, Computer: ${computer}`)
  }

};

function main() {
  playGame();
};

main();