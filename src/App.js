import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  };

  removeCharacter = index => {
    const {characters} = this.state;
    this.setState({
      characters: characters.filter((characters, i) => {
        return index !== i;
      })
    })
  }

  addCharacter = character => {
    this.setState({characters: [...this.state.characters, character] })
  }

  render() {
    const {characters} = this.state;
    const name = "Sourabh";
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Hello {name}!</h1>
        </div>
        <div className="container">
          <Table characterData={characters} removeCharacter = {this.removeCharacter}/>
          <Form addCharacter = {this.addCharacter}/>
        </div>
      </div>
    );
  }
}

export default App;
