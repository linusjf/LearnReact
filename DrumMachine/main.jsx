import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import AudioPlayer from "react-h5-audio-player";
import drumsets, { drumsetnames, isValidKey } from "./drummachine.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DrumMachine />;
  }
}

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      volume: 0.5,
      drumset: 0,
      drumpad: ""
    };
  }

  async componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    console.log("keydown listener added");
    this.setAudioVolume();
  }

  async componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.volume !== this.state.volume) {
      this.setAudioVolume();
    }
  }

  handleKeyDown = (evt) => {
    const key = evt.key.toUpperCase();
    console.log("key : " + key);
    if (isValidKey(key)) this.play(key);
  };

  handleDrumsetToggle = () => {
    this.state.drumset == 0
      ? this.setState(
          state({
            drumset: state.drumset + 1
          })
        )
      : this.setState(
          state({
            drumset: state.drumset - 1
          })
        );
  };

  handleVolumeChange = (evt) => {
    const source = event.target || event.srcElement;
    this.setState((state) => ({
      volume: source.value
    }));
  };

  setAudioVolume = () => {
    const collection = document.getElementsByTagName("audio");
    const volume = this.state.volume;
    Array.from(collection).forEach((element) => {
      element.volume = volume;
    });
  };

  handleDrumPad = (evt) => {
    const source = event.target || event.srcElement;
    this.play(source.firstElementChild.getAttribute("id"));
  };

  play = (id) => {
    setTimeout(() => {
      const audio = document.getElementById(id);
      this.setState((state) => ({
        drumpad: audio.title
      }));
      audio.play();
    }, 100);
  };

  render() {
    const currDrumSet = drumsets[drumsetnames[this.state.drumset]];
    return (
      <Card id="drum-machine" className="drum-machine">
        <div className="drum-pads-container">
          {Object.entries(currDrumSet).map(([key, value]) => (
            <div key={key} className="drum-pad" onClick={this.handleDrumPad}>
              <audio
                className="clip"
                src={value.url}
                controls={false}
                preload="auto"
                autoPlay={true}
                muted={!this.state.power}
                id={value.id}
                volume={this.state.volume}
                title={key}
              ></audio>
              {value.id}
            </div>
          ))}
        </div>
        <Card className="controls-container">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-power"
              viewBox="0 0 16 16"
            >
              <path d="M7.5 1v7h1V1z" />
              <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
            </svg>
          </Button>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switch-drumset"
              checked={true}
              onChange={this.handleDrumsetToggle}
            />
            <Form.Label className="form-check-label" htmlFor="switch-drumset">
              {drumsetnames[this.state.drumset]}
            </Form.Label>
          </div>
          <Form.Label id="display">{this.state.drumpad}</Form.Label>
          <div>
            <Form.Label htmlFor="volume" className="form-label">
              {"Volume: " + this.state.volume}
            </Form.Label>
            <Form.Range
              className="form-range"
              min="0"
              max="1"
              step="0.01"
              orient="vertical"
              id="volume"
              list="markers"
              onChange={this.handleVolumeChange}
            />
            <datalist id="markers">
              <option value="0"></option>
              <option value="0.25"></option>
              <option value="0.50"></option>
              <option value="0.75"></option>
              <option value="1.0"></option>
            </datalist>
          </div>
        </Card>
      </Card>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
