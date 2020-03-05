const cpuChocie = () => {
  let choice = [Math.floor(Math.random() * 3)];
  return choice;
};

let gameMatrix = [
  [0, -1, 1],
  [1, 0, -1],
  [-1, 1, 0]
];

let rpsMatrix = ["Rock", "Paper", "Scissors"];

const translateMove = (player, cpu) => {
  return [rpsMatrix[player], rpsMatrix[cpu]];
};

const evalGame = (playerChoice, cpuhand) => {
  let result;
  if (gameMatrix[playerChoice][0] === gameMatrix[0][cpuhand]) {
    result = "It's a draw!";
  } else if (gameMatrix[playerChoice][0] > gameMatrix[0][cpuhand]) {
    result = "You win!";
  } else {
    result = "You lose!";
  }
  return result;
};

export { cpuChocie, evalGame, translateMove };
