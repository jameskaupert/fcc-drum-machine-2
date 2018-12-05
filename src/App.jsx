import React, { Component } from 'react';
import Display from './Display';
import Drum from './Drum';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastSound: ''
    };
    this.handlePlaySound = this.handlePlaySound.bind(this);
  }
  componentDidMount() {
    document.addEventListener(
      'keydown',
      this.handlePlaySound.bind(this),
      false
    );
  }
  componentWillUnmount() {
    document.removeEventListener(
      'keydown',
      this.handlePlaySound.bind(this),
      false
    );
  }
  handlePlaySound(e) {
    let myId;
    const validKeys = 'qweasdzxcQWEASDZXC';
    if (e.key) {
      if (validKeys.includes(e.key)) {
        myId = e.key.toUpperCase();
      } else {
        return;
      }
    } else {
      myId = e.target.id.split('-')[0].toUpperCase();
    }
    const myElem = document.getElementById(myId);
    myElem.pause();
    myElem.currentTime = 0;
    myElem.play();

    this.setState({ lastSound: myElem.getAttribute('displayname') });
  }
  render() {
    return (
      <div className="App" id="drum-machine">
        <Drum handlePlaySound={this.handlePlaySound} />
        <Display lastSound={this.state.lastSound} />
      </div>
    );
  }
}

export default App;
