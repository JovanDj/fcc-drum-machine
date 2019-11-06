import React, { Component } from "react";
import "./App.css";

class App extends Component {
  pads = [
    {
      id: "snare",
      letter: "Q",
      src: "https://www.myinstants.com/media/sounds/snare.mp3"
    },
    {
      id: "bass 1",
      letter: "W",
      src: "https://www.myinstants.com/media/sounds/bass-drum.mp3"
    },
    {
      id: "bongo",
      letter: "E",
      src: "http://tipiwiki.free.fr/snd/Percussion(4e)2.wav"
    },
    {
      id: "tom tom",
      letter: "A",
      src: "http://www.denhaku.com/r_box/sr16/sr16tom/loelectm.wav"
    },
    {
      id: "bass 3",
      letter: "S",
      src: "http://billor.chsh.chc.edu.tw/sound/bass4.wav"
    },
    {
      id: "shotgun",
      letter: "D",
      src: "http://david.guerrero.free.fr/Effects/ShotgunReload.wav"
    },
    {
      id: "high hat",
      letter: "Z",
      src: "http://www.denhaku.com/r_box/tr707/closed.wav"
    },
    {
      id: "drum hit",
      letter: "X",
      src: "http://www.masterbits.de/sc_docu/sounds1/1TM00013.MP3"
    },
    {
      id: "laser",
      letter: "C",
      src: "http://www.sa-matra.net/sounds/starcontrol/Umgah-Backzip.wav"
    }
  ];

  constructor() {
    super();
    this.audioRef = React.createRef();
  }

  state = {
    display: "Drum machine"
  };

  handleClick = () => {
    console.log("Playing", this.audioRef.current);
    this.audioRef.current.play();
    this.audioRef.current.currentTime = 0;
  };
  render() {
    return (
      <div className="container" id="drum-machine">
        <h1 id="display">{this.state.display}</h1>

        {this.pads.map(pad => {
          return (
            <button
              key={pad.id}
              className="drum-pad p-3 m-3"
              id={pad.id}
              onClick={this.handleClick}
            >
              <h1>{pad.letter}</h1>
              <audio
                ref={this.audioRef}
                className="clip"
                id={pad.letter}
                src={pad.src}
              >
                Audio not available
              </audio>
            </button>
          );
        })}
      </div>
    );
  }
}

export default App;
