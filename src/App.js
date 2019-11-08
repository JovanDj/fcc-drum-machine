import React, { Component } from "react";
import "./App.css";
import Pad from "./components/Pad";
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

  state = {
    display: "Drum machine",
    pads: this.pads
  };

  handleDisplay = display => {
    this.setState({ display });
  };

  handleClick = (ref, pad) => {
    this.handleDisplay(pad);
    ref.play();
  };

  render() {
    return (
      <React.StrictMode>
        <div className="container" id="drum-machine">
          <h1 id="display">{this.state.display}</h1>
          <div className="d-flex justify-content-between">
            {this.state.pads.map(pad => {
              return (
                <Pad
                  onHandleDisplay={this.handleDisplay}
                  key={pad.id}
                  pad={pad}
                  onHandleClick={this.handleClick}
                />
              );
            })}
          </div>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
