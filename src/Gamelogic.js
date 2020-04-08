

const cpuChocie = () => {
  let choice = [Math.floor(Math.random() * 3)];
  return choice;
};
const gameMatrix = (i, j) => {
  let matrix = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0]
  ];
  return matrix[i][j];
};

let rpsMatrix = ["Rock", "Paper", "Scissors"];

const translateMove = number => {
  return rpsMatrix[number];
};

const evalGame = (playerChoice, cpuhand) => {
  let result;
  if (gameMatrix(playerChoice, cpuhand) == 0) {
    result = "It's a draw!";
  } else if (gameMatrix(playerChoice, cpuhand) == 1) {
    result = "You win!";
  } else {
    result = "You lose!";
  }
  return result;
};

export { cpuChocie, evalGame, translateMove };
