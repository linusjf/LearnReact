import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import AudioPlayer from "react-h5-audio-player";
import drumsets, {drumsetnames} from "./drummachine.js";

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
      drumset: 0
    };
  }

  render() {
    const currDrumSet = drumsets[drumsetnames[this.state.drumset]];
    return (
      <Card id="drum-machine" className="drum-machine">
        <div className="drum-pads-container">
          {
            Object.entries(currDrumSet).map(([key, value]) => (
              <div className="drum-pad">
            <audio key={key} src={value.url} controls={false} id={value.id} volume={this.state.volume} title={key}>
            </audio><p>{value.id}</p>
                </div>))
            }
        </div>
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
