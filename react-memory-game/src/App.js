import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import heroes from "./heroes.json"
import './App.css';

class App extends Component {
  state = {
    message: "Click an image to begin",
    topScore: 0,
    curScore: 0,
    heroes: heroes,
    unselectedHeroes: heroes
  }

  componentDidMount() {

  }

  randomizeArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectHero = name => {
    
  }











}

export default App;
