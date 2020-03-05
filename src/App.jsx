import React, { Component } from "react";
import { cpuChocie, evalGame, translateMove } from "./Gamelogic";

class App extends Component {
  state = {
    playerChoice: "",
    computerChoice: "",
    results: ""
  };
  handleButtonClick(event) {
    debugger
    let playerChoice = 1;
    let playerhoice = event.target.number;
    
    let computerChoice = cpuChocie();
    this.setState({
      playerChoice: playerChoice,
      computerChoice: computerChoice,
      results: evalGame(playerChoice, computerChoice)
    });
  }

  render() {
    return (
      <>
        <h1 id="game-title">Rock Paper Scissors Game</h1>

        <button
          id="rock-button" number="0"
          onClick={event => this.handleButtonClick(event)}
        >
          Rock
        </button>
        <button
          id="paper-button" number="1"
          onClick={event => this.handleButtonClick(event)}
        >
          Paper
        </button>
        <button
          id="scissors-button" number="2"
          onClick={event => this.handleButtonClick(event)}
        >
          Scissors
        </button>
      </>
    );
  }
}

export default App;
