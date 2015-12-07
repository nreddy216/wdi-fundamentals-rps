////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
import Math;

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    return Math.random();
    // var randomNumber = Math.random();
    // if (randomNumber < 0.33) {
    //     return "rock";
    // } else if (randomNumber < 0.66) {
    //     return "paper";
    // } else {
    //     return "scissors";
    // }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    if (move==='rock' || move==='paper' || move==='scissors'){
      return move;
    }
    else{
      move = getInput();
    }
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    //return /* Your Expression */;
    if (move==='rock' || move==='paper' || move==='scissors'){
      return move;
    }
    else{
      move = randomPlay();
    //   getComputerMove(move);
    }
    return move;

}

function getWinner(playerMove,computerMove) {
      var winner;
      // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
      // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
      // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

      if (playerMove===computerMove){
        winner = 'tie';
      }
      else if (playerMove==='rock'){
        if(computerMove==='paper'){
          winner = 'computer';
        }
        else{
          winner = 'player';
        }
      }
      else if (playerMove === 'paper'){
        if (computerMove==='scissors'){
          winner = 'computer';
        }
        else{
          winner = 'player';
        }
      }
      else{
        if(computerMove==='rock'){
          winner = 'computer';
        }
        else{
          winner = 'player';
        }
      }

    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while(playerWins<5 && computerWins<5){
        if (getWinner(getPlayerMove(), getComputerMove())==='computer'){
            console.log("Computer wins this one!");
            computerWins +=1;
            console.log('player score: ' + playerWins + ' computer score: ' + computerWins);
            console.log(' ');
        }
        else{
            console.log("Player wins this one!");
            playerWins +=1;
            console.log('player score: ' + playerWins +  ' computer score: ' + computerWins);
            console.log(' ');
        }
    }

    if (computerWins > playerWins){
        console.log(' ');
        console.log("COMPUTER WINS ALL!");
        console.log(' ');
    }
    else{
        console.log(' ');
        console.log("PLAYER WINS ALL!");
        console.log(' ');
    }

    return ['player score: ' + playerWins, 'computer score: ' + computerWins];
}

playToFive();
