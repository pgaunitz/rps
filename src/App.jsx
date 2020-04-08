import React, { Component } from "react";
import { cpuChocie, evalGame, translateMove } from "./Gamelogic";
import user from "./images/user.svg";
import vs from "./images/videogame.svg";
import chip from "./images/chip.svg";
import Rock from "./images/rock.svg";
import Paper from "./images/paper.svg";
import Scissors from "./images/scissors.svg";
class App extends Component {
  state = {
    playerChoice: "",
    computerChoice: "",
    results: "",
    playerW: "",
    computerW: "",
    playerImage: user,
    computerImage: chip,
    playerScore: 0,
    cpuScore: 0,
  };

  handleButtonClick(event) {
    let images = [Rock, Paper, Scissors];
    let playerScore = this.state.playerScore;
    let cpuScore = this.state.cpuScore;
    let playerChoice = event.target.value;
    let playerW = translateMove(playerChoice);
    let computerChoice = cpuChocie();
    let computerW = translateMove(computerChoice);
    let gameResult = evalGame(
      playerChoice,
      computerChoice,
      playerScore,
      cpuScore
    );
    this.setState({
      playerChoice: playerChoice,
      computerChoice: computerChoice,
      results: gameResult[0],
      playerW: playerW,
      computerW: computerW,
      playerImage: images[playerChoice],
      computerImage: images[computerChoice],
      playerScore: gameResult[1],
      cpuScore: gameResult[2],
    });
  }

  render() {
    return (
      <>
        <div className="ui main container">
          <h1 id="game-title" className="ui center aligned header">
            Rock Paper Scissors Game
          </h1>
          <div className="ui three column grid">
            <div className="column">
              <div className="ui fluid card">
                <div className="image">
                  <img src={this.state.playerImage} />
                  <h2 className="ui center aligned header">
                    Your score: {this.state.playerScore}
                  </h2>
                  <h2 className="ui center aligned header">
                    {this.state.playerW}
                  </h2>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui fluid card">
                <div className="image">
                  <img src={vs} />
                  <h1 id="result" className="ui center aligned header">
                    {this.state.results}
                  </h1>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="ui fluid card">
                <div className="image">
                  <img src={this.state.computerImage} />
                  <h2 className="ui center aligned header">
                    Computer Score: {this.state.cpuScore}
                  </h2>
                  <h2 className="ui center aligned header">
                    {this.state.computerW}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <h2 className="ui center aligned header"></h2>
          <div className="ui center aligned grid">
            <div className="big ui buttons">
              <button
                className="ui black button"
                id="rock-button"
                onClick={(event) => this.handleButtonClick(event)}
                value="0"
              >
                Rock
              </button>
              <button
                className="ui black button"
                id="paper-button"
                value="1"
                onClick={(event) => this.handleButtonClick(event)}
              >
                Paper
              </button>
              <button
                className="ui black button"
                id="scissors-button"
                value="2"
                onClick={(event) => this.handleButtonClick(event)}
              >
                Scissors
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
