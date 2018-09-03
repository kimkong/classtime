import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class ClassTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "hi there!"
    };
  }
  render() {
    return (
      <h1>Class Time Minder: "{this.props.name} "</h1>
    );
  }
}
//  https://hackernoon.com/understanding-state-and-props-in-react-94bc09232b9c

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ClassTime Minder2</h1>
          <ClassTimer />
        </header>
      </div>
    );
  }
}

export default App;
