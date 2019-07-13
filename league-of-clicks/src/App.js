import React, { Component } from "react";
import Header from './components/Header'
import Board from './components/Board/'
import LegendCard from './components/LegendCard'
import Wrapper from './components/Wrapper'
import legends from './legends.json'

import './App.css';

class App extends Component {
  state = {
    legends,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ legends: this.randomizeLegends(this.state.legends) });
  };
  // **Notes for me**
  // Ideas on how to make more presentable: Think about turning this into TFT-like clone. User is given random choices from League of Legends api. 
  // User can spend gold they get every round to buy a unit, tier rank up system more simple like 1 star= 1 rank. Units have hp and atk. They can die 
  // and be discarded. Pit up against enemy "ai".

  // ------------------Handle Click Stuff------------------------------------------------------------------------

  handleCardClick = (id) => {
    let guessIsCorrect = false;
    const legendsMap = this.state.legends.map(legend => {
      const newLegend = { ...legend };
      if (newLegend.id === id) {
        if (!newLegend.clicked) {
          newLegend.clicked = true;
          guessIsCorrect = true;
        }
      }
      return newLegend;
    });
    guessIsCorrect ? this.handleCorrectGuess(legendsMap) : this.handleIncorrectGuess(legendsMap);
  };

  handleCorrectGuess = (legendsMap) => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);
    this.setState({
      legends: this.randomizeLegends(legendsMap),
      score: newScore,
      topScore: newTopScore
    });
    if (newScore === legendsMap.length){
      this.reset(legendsMap);
      return alert("You've won!");
    }
  };

  handleIncorrectGuess = (legends) => {
    this.setState({
      legends: this.reset(legends),
      score: 0
    });
  };

  // ----------------Randomization and Reset--------------------------------------------------------------------------
  // Google search helped with randomizeLegends function, not gonna lie. I 100% understand what it's doing and I had an idea of what to do
  // but didn't put this together completely on my own. https://www.w3resource.com/javascript-exercises/javascript-array-exercise-17.php

  randomizeLegends = (legends) => {
    let counter = legends.length - 1;
    while (counter > 0) {
      const j = Math.floor(Math.random() * (counter + 1));
      const holder = legends[counter];
      legends[counter] = legends[j];
      legends[j] = holder;
      counter--;
    }
    return legends;
  };

  reset = (cards) => {
    const resetCards = legends.map(legend => ({ ...legend, clicked: false, score: 0 }));
    return this.randomizeLegends(resetCards);
  };

  // ------------------------------------------------------------------------------------------

  render(){
    return (
      <Wrapper>
        <Header
          score={this.state.score}
          topScore={this.state.topScore}
        ></Header>
        <Board>
          {this.state.legends.map(legend => (
            <LegendCard
              key={legend.id}
              id={legend.id}
              name={legend.name}
              image={legend.image}
              handleClick={this.handleCardClick}
            />
            ))}
        </Board>
      </Wrapper>
    );
  }
}

export default App;
