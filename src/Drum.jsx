import React from 'react';
import './Drum.css';

const Drum = props => {
  return (
    <div id="drum-pad-container" className="container">
      <div id="row1" className="row">
        <div className="drum-pad" id="q-sound" onClick={props.handlePlaySound}>
          <audio
            id="Q"
            className="clip"
            preload="auto"
            src="sounds/hat1.wav"
            displayname="Hat 1"
          />
          Q
        </div>
        <div className="drum-pad" id="w-sound" onClick={props.handlePlaySound}>
          <audio
            id="W"
            className="clip"
            preload="auto"
            src="sounds/hat2.wav"
            displayname="Hat 2"
          />
          W
        </div>
        <div className="drum-pad" id="e-sound" onClick={props.handlePlaySound}>
          <audio
            id="E"
            className="clip"
            preload="auto"
            src="sounds/hat3.wav"
            displayname="Hat 3"
          />
          E
        </div>
      </div>
      <div id="row2" className="row">
        <div className="drum-pad" id="a-sound" onClick={props.handlePlaySound}>
          <audio
            id="A"
            className="clip"
            preload="auto"
            src="sounds/Snare2.wav"
            displayname="Snare 1"
          />
          A
        </div>
        <div className="drum-pad" id="s-sound" onClick={props.handlePlaySound}>
          <audio
            id="S"
            className="clip"
            preload="auto"
            src="sounds/Snare3.wav"
            displayname="Snare 2"
          />
          S
        </div>
        <div className="drum-pad" id="d-sound" onClick={props.handlePlaySound}>
          <audio
            id="D"
            className="clip"
            preload="auto"
            src="sounds/Snare4.wav"
            displayname="Snare 3"
          />
          D
        </div>
      </div>
      <div id="row3" className="row">
        <div className="drum-pad" id="z-sound" onClick={props.handlePlaySound}>
          <audio
            id="Z"
            className="clip"
            preload="auto"
            src="sounds/Kick1.wav"
            displayname="Kick 1"
          />
          Z
        </div>
        <div className="drum-pad" id="x-sound" onClick={props.handlePlaySound}>
          <audio
            id="X"
            className="clip"
            preload="auto"
            src="sounds/Kick2.wav"
            displayname="Kick 2"
          />
          X
        </div>
        <div className="drum-pad" id="c-sound" onClick={props.handlePlaySound}>
          <audio
            id="C"
            className="clip"
            preload="auto"
            src="sounds/Kick3.wav"
            displayname="Kick 3"
          />
          C
        </div>
      </div>
    </div>
  );
};

export default Drum;
