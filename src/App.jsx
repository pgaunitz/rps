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
    let playerChoice = event.target.value;
    
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
          id="rock-button" 
          onClick={event => this.handleButtonClick(event)}
          value="0"
        >
          Rock
        </button>
        <button
          id="paper-button" value="1"
          onClick={event => this.handleButtonClick(event)}
        >
          Paper
        </button>
        <button
          id="scissors-button" value="2"
          onClick={event => this.handleButtonClick(event)}
        >
          Scissors
        </button>
        <>
        <h1>{`${translateMove(this.state.playerChoice)} VS ${translateMove(this.state.computerChoice)} `} </h1>
        <h1>{this.state.results}</h1>
        </>
      </>
    );
  }
}

export default App;
