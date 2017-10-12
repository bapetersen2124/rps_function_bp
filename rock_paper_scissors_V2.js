

var weapon1 = " ";
var weapon2 = " ";

var playerInfo = {
    playerOne: {
    name : "Brooke",
  },

    playerTwo: {
    name : "Christopher",
  },
};

function getHand1(){
  var hands = ['rock','paper','scissors'];
  var random = parseInt(Math.random()*10)%3;
  weapon1 = hands[random];
  return weapon1;
}

function getHand2(){
  var hands = ['rock','paper','scissors'];
  var random = parseInt(Math.random()*10)%3;
  weapon2 = hands[random];
  return weapon2;
}

function playRound(getHand1, getHand2) {
  var countPlayerOneWins = 0;
  var countPlayerTwoWins = 0;
    while (countPlayerOneWins < 3 && countPlayerTwoWins < 3) {
      getHand1();
      getHand2();
      if (weapon1 == weapon2) {console.log(weapon1), console.log(weapon2), console.log("It\'s a tie!")}
      else if ((weapon1 == "rock" && weapon2 == "scissors") || (weapon1 == "paper" && weapon2 == "rock") || (weapon1 == "scissors" && weapon2 == "paper")) {
        console.log(weapon1),
        console.log(weapon2),
        console.log(`${playerInfo.playerOne.name} wins!`),
        countPlayerOneWins ++;
      }
      else {
        console.log(weapon1),
        console.log(weapon2),
        console.log(`${playerInfo.playerTwo.name} wins!`),
        countPlayerTwoWins ++;
      }
  }
}

console.log(playRound(getHand1, getHand2));
