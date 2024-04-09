import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MarkdownPreviewer />;
  }
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <MarkdownEditor />;
  }
}

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div>
        <section
          autoFocus={true}
          id="editor"
          className="section-editor"
          contentEditable={true}
        ></section>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
