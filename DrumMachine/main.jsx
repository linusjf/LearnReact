import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import AudioPlayer from "react-h5-audio-player";
import drumsets, { drumsetnames } from "./drummachine.js";

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

  render() {
    const currDrumSet = drumsets[drumsetnames[this.state.drumset]];
    return (
      <Card id="drum-machine" className="drum-machine">
        <div className="drum-pads-container">
          {Object.entries(currDrumSet).map(([key, value]) => (
            <div key={key} className="drum-pad">
              <audio
                src={value.url}
                controls={false}
                id={value.id}
                volume={this.state.volume}
                title={key}
              ></audio>
              <p>{value.id}</p>
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
          <Form.Label>{this.state.drumpad}</Form.Label>
          <div>
            <Form.Label htmlFor="volume" className="form-label">
              {"Volume: " + this.state.volume}
            </Form.Label>
            <Form.Range
              className="form-range"
              min="0"
              max="1"
              step="0.01"
              id="volume"
            />
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
