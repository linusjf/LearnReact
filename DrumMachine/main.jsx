import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Form } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div />;
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
