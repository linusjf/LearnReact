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
    return
    <Card className="drum-box"></Card>;
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
