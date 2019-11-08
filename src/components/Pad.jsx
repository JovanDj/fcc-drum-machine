import React from "react";

const Pad = props => {
  const audioRef = React.useRef();
  return (
    <button
      key={props.pad.id}
      className="drum-props.pad p-3 m-3"
      id={props.pad.id}
      type="button"
      onClick={() => props.onHandleClick(audioRef)}
    >
      <h1>{props.pad.letter}</h1>
      <audio
        ref={audioRef}
        className="clip"
        id={props.pad.letter}
        src={props.pad.src}
      >
        Audio not available
      </audio>
    </button>
  );
};

export default Pad;
