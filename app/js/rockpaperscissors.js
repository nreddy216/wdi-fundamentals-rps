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
    //return Math.random();
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
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
      // However, if `move` is not specified / is null, your expression should equal `getInput()`.
      move = getInput();
    }
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


function playTo(numTimes) {
    console.log("Let's play Rock, Paper, Scissors. First one to " + numTimes + " wins.");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while(playerWins<numTimes && computerWins<numTimes){
        var gameWinner = getWinner(getPlayerMove, getComputerMove);
        if (gameWinner ==='computer'){
            computerWins += 1;
            console.log("Computer wins this one.");
            console.log(['player score: ' + playerWins, 'computer score: ' + computerWins]);
        }
        else if (gameWinner === 'player'){
            playerWins += 1;
            console.log("Player wins this one.");
            console.log(['player score: ' + playerWins, 'computer score: ' + computerWins]);
        }
        else{
            console.log("It's a tie!");
            console.log(['player score: ' + playerWins, 'computer score: ' + computerWins]);
        }
    }

    var ultimateWinner;

    if(playerWins > computerWins){
        ultimateWinner = 'PLAYER';
    }
    else{
        ultimateWinner = 'COMPUTER';
    }

    console.log(ultimateWinner + " WINS THE TOURNAMENT!");
    return ['player score: ' + playerWins, 'computer score: ' + computerWins];
}
