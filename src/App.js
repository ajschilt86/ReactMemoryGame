import React, { Component } from 'react';
import './App.css';
import heroes from "./heroes.json"
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Card from "./components/Card";



class App extends Component {
  state = {
    message: "Click a hero to begin!",
    topScore: 0,
    curScore: 0,
    heroes: heroes,
    unselectedHeroes: heroes
  }

  componentDidMount() {

  }
// looked up es6 way to shuffle an array on stackoverflow
// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
//swapping variables with decontruction
  randomizeArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectHero = name => {
    const findHero = this.state.unselectedHeroes.find(character => character.name === name);

    if (findHero === undefined) {
      this.setState({
        message: "Try Again!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        heroes: heroes,
        unselectedHeroes: heroes
      });
    } else {
      const newHeroes = this.state.unselectedHeroes.filter(character => character.name !== name);

      this.setState({
        message: "Good Job!",
        curScore: this.state.curScore + 1,
        heroes: heroes,
        unselectedHeroes: newHeroes
      });
    }

    this.randomizeArray(heroes);
  };

  render() {
    return (
      <Wrapper>
        <Nav
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Title />
        {
          this.state.heroes.map(hero => (
            <Card
              name={hero.name}
              image={hero.image}
              selectHero={this.selectHero}
              curScore={this.state.curScore}
            />
          ))
        }
      </Wrapper>
    );
  }
}

export default App;
