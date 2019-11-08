import React, { Component } from "react";

class Pad extends Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.keyCode === this.props.pad.letter.charCodeAt()) {
      this.audioRef.play();
      this.props.onHandleDisplay(this.props.pad.id);
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        letter={this.props.pad.letter}
        className="drum-pad btn-outline-primary btn-lg p-4"
        id={this.props.pad.id}
        type="button"
        onClick={() =>
          this.props.onHandleClick(this.audioRef, this.props.pad.id)
        }
      >
        {this.props.pad.letter}
        <audio
          ref={ref => (this.audioRef = ref)}
          className="clip"
          id={this.props.pad.letter}
          src={this.props.pad.src}
        >
          Audio not available
        </audio>
      </button>
    );
  }
}

export default Pad;
