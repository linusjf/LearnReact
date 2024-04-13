import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import drumsets from "./drummachine.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <Card as="div" id="drum-box" className="drum-box">
      <p>Test</p></Card>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
