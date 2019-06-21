import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    greeting: ''
  }
  greet = () => {
    this.setState({ greeting: 'Hello FSWPT4!'})
  }
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <button onClick={this.greet}>Greet</button>
        <div>{this.state.greeting}</div>
      </div>
    );
  }
}

export default App;
