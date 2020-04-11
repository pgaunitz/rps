import React, { Component } from "react";
import { cpuChocie, evalGame, translateMove } from "./Gamelogic";
import user from "./images/user.svg";
import vs from "./images/videogame.svg";
import chip from "./images/chip.svg";
import Rock from "./images/rock.svg";
import Paper from "./images/paper.svg";
import Scissors from "./images/scissors.svg";
import { Button, Header, Image, ButtonGroup } from "semantic-ui-react";
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
    let computerChoice = cpuChocie();
    let gameResult = evalGame(
      event.target.value,
      computerChoice,
      this.state.playerScore,
      this.state.cpuScore
    );
    this.setState({
      playerChoice: event.target.value,
      computerChoice: computerChoice,
      results: gameResult[0],
      playerW: translateMove(event.target.value),
      computerW: translateMove(computerChoice),
      playerImage: images[event.target.value],
      computerImage: images[computerChoice],
      playerScore: gameResult[1],
      cpuScore: gameResult[2],
    });
  }

  render() {
    return (
      <>
        <div className="ui main container">
          <Header as='h1' textAlign='center'>
            Rock Paper Scissors Game
          </Header>
          <div className="ui three column grid">
            <div className="column">
              <div className="ui fluid card">
                <Image >
                  <img src={this.state.playerImage} />
                  <Header as='h2' textAlign='center'>
                    Your score: {this.state.playerScore}
                  </Header>
                  <Header as='h2' textAlign='center'>
                    {this.state.playerW}
                  </Header>
                </Image>
              </div>
            </div>
            <div className="column">
              <div className="ui fluid card">
                <Image>
                  <img src={vs} />
                  <Header as='h1' textAlign='center'>
                    {this.state.results}
                  </Header>
                </Image>
              </div>
            </div>
            <div className="column">
              <div className="ui fluid card">
                <Image>
                  <img src={this.state.computerImage} />
                  <Header as='h2' textAlign='center'>
                    Computer Score: {this.state.cpuScore}
                  </Header>
                  <Header as='h2' textAlign='center'>
                    {this.state.computerW}
                  </Header>
                </Image>
              </div>
            </div>
          </div>

          <div className="ui center aligned grid">
            <ButtonGroup size='huge'>
              <Button
                color="orange"
                id="rock-button"
                onClick={(event) => this.handleButtonClick(event)}
                value="0"
              >
                Rock
              </Button>

              <Button
                color="orange"
                id="paper-button"
                value="1"
                onClick={(event) => this.handleButtonClick(event)}
              >
                Paper
              </Button>
              <Button
                color="orange"
                id="scissors-button"
                value="2"
                onClick={(event) => this.handleButtonClick(event)}
              >
                Scissors
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </>
    );
  }
}

export default App;
